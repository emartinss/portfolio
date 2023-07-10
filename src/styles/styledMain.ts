import styled from "styled-components";

export const StyledMain = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 0 0 15px 0;

.container{
    display: flex;
    flex-direction: column;

    gap: 15px;
    
    width: 90%;

    h3{
        color:var(--color-secundary);
        text-align: center;
    }
}
`
