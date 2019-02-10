import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: "";
    flex: 0 0 32%;
  }
  ol, ul, li {
    list-style: none;
  }
`;

const CardList = props => {
  const { children } = props;
  return <List>{children}</List>;
};

export default CardList;
