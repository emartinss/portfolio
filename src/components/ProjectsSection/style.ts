import styled from "styled-components";

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;

    overflow-x: scroll;

    gap: 15px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid var(--color-secundary);

    padding: 10px 0;

    text-align: center;

    width: 260px;
    min-width: 260px;

    height: 350px;
    max-height: 350px;

    .div-text {
      margin: 10px 0;

      color: white;

      overflow-y: scroll;

      min-height: 100px;
      width: 95%;
    }

    .div-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 95%;
      height: 100%;

      padding: 15px 0;
      gap: 8px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 120px;
        height: 30px;

        &.tagSite {
          background-color: black;
          color: white;
          border: 1px solid white;
        }

        &.tagCode {
          background-color: white;
          color: black;
          font-weight: 600;
          border: 1px solid black;
        }

        border: 1px solid white;
        border-radius: 5px;
      }
    }
    .imgProject {
      width: 95%;
      height: 150px;
      object-fit: contain;
    }
  }
`;
