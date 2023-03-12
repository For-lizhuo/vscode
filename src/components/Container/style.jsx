import styled from "styled-components";

export const Container = styled.div.attrs(props=>({
  style:{
    flexBasis:props.width+'vw'
  }
}))`
  background-color: lightgreen;
  height: 100vh;
`