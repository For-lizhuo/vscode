//全局默认样式
import styled, {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    user-select: none;
  }
`

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`