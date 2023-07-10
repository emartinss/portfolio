import styled from "styled-components";

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #161616;

  height: 250px;
  max-height: 250px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100%;

    li {
      display: flex;
      align-items: center;

      gap: 10px;
      padding: 0 5px;

      p {
        color: white;
      }

      a {
        color: white;

        border-bottom: 1px solid var(--color-secundary);
      }
    }
  }
`;
