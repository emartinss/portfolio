import styled from "styled-components";

export const StyledSkills = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
 
  ul {
    display: flex;
    flex-wrap: wrap;

    column-count: 3;
    column-gap: 10px;

    width: 100%;
    height: 350px;
    max-height: 350px;

    background-color: #161616;

    padding: 15px 0;
  }

  li {
    break-inside: avoid-column;
    margin-bottom: 10px;
    text-align: center;

    flex-basis: calc(33.33% - 10px);
  }

  img {
    width: 80px;
    height: 80px;
    margin: 10px;
  }
`;
