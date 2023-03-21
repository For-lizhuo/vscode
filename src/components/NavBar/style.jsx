import styled from "styled-components";

export const NavBar = styled.div`
 height: 100vh;
 flex-basis: 2.8vw;
`

export const Ul = styled.ul`
  list-style: none;
  background-color: #282C34;
  height: 100%;
  width: 100%;
`
export const Li = styled.li.attrs(props => ({
  style: {
    borderLeft:props.chosen==true?'0.3vh solid #D7DAD0':'0.3vh solid #282C34',
  }
}
))`
  padding: 1.4vh;
  text-align: center;
  color:#6E7179;
  &:last-of-type{
    margin-top: 47vh;
  }
  &:hover{
    cursor: pointer;
    color: #D7DAE0;
  }
`