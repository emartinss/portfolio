import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  height: 115px;

  background-color: #161616;

  .container {
    display: flex;
    align-items: center;

    width: 90%;

    .subDiv {
      display: flex;
      flex-direction: column;
      margin-left: 5px;

      span {
        color: var(--color-secundary);
      }
    }

    .logo-footer {
      font-size: 70px;
      color: var(--color-secundary);

      font-family: "Abhaya Libre", serif;
    }
  }
`;
