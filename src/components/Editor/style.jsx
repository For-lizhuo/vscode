import styled from "styled-components";
export const Editor = styled.div.attrs(props=>({
  style:{
    flexBasis:props.width+'vw'
  }
}))`
  background-color: #282C34;
  height: 100vh;
`