import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  width: 100vw;

  height: 80px;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(25px);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;

    .logoImg {
      width: 70px;
      height: 70px;
    }

    

    .div-navbar {
      display: none;
      gap: 10px;

      p {
        color: var(--color-secundary);
        font-weight: 300;
      }
    }
  }
`;
