import React from 'react'
import { graphql } from 'gatsby'
import Share from '../components/Share'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Hero from '../components/Hero'
import PageBody from '../components/PageBody'
import PostDate from '../components/PostDate'
import TagList from '../components/TagList'
import Comments from '../components/Comments'

const PostTemplate = ({ data, pageContext }) => {
  const {
    post: { id, html, fields, frontmatter },
    site: {
      siteMetadata: { siteUrl, facebook },
    },
  } = data
  const post = { id, html, ...fields, ...frontmatter }

  return (
    <Layout post={post}>
      <Hero title={post.title} image={post.cover} />
      <Share post={post} url={siteUrl}/>
      <Container>
        {post.tags && <TagList tags={post.tags} />}
        <PostDate date={post.date} />
        <PageBody html={post.html} />
        <footer>
          <Comments facebook={facebook} siteUrl={siteUrl} slug={post.slug} />
        </footer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        facebook {
          appId
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
        tags {
          id
          slug
          title
        }
      }
      frontmatter {
        title
        author
        summary
        metaDescription
        cover {
          children {
            ... on ImageSharp {
              fluid(maxWidth: 800, maxHeight: 360) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
