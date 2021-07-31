import styled from 'styled-components'

export const SignInContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInBox = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
  min-height: 500px;
  min-width: 700px;
  background: #d3d3d3;
  @media (max-width: 768px) {
    min-width: 100%;
    }
`;

export const InputDiv = styled.div`
width:80%
`;



