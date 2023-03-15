import styled from "styled-components";

export const DividingLine = styled.div.attrs(props => ({
  style: {
    cursor:props.mouseOver?'ew-resize':'default'
  },
}))`
  background-color: #282C34;
  flex-basis: 0.2vw;
  height: 100vh;
  &:hover{
    background-color: #3E4452;
  }
`