import styled from "styled-components";

export const StyledIntroduction = styled.div`
display: flex;
flex-direction: column;

  margin-top: 100px;

  

  gap: 10px;

  p {
    color: var(--color-secundary);
    
  }

  .name {
    color: white;
    border-right: 4px solid;
    width: 12ch;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 1.5s steps(12),
    blinking 0.5s infinite step-end alternate;
  }

  @keyframes typing{
    from{
      width: 0;
    }
  }
  @keyframes blinking{
    50%{
      border-color: var(--color-secundary)
    }
  }

  .job {
    color: var(--color-secundary);
    
    font-size: 18px;
    font-weight: 500;
  }

  span{
    color: white;
    line-height: 26px;
  }

  img{
    display: none;
  }
`;
