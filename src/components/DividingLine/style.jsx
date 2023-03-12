import styled from "styled-components";

export const DividingLine = styled.div.attrs(props => ({
  style: {
    cursor:props.mouseOver?'ew-resize':'default'
  },
}))`
  flex-basis: 0.2vw;
  height: 100vh;
  background-color: red;
`