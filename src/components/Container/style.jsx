import styled from "styled-components";

export const Container = styled.div.attrs(props=>({
  style:{
    flexBasis:props.width+'vw'
  }
}))`
  background-color: #21252B;
  height: 100vh;
`