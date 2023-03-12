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

export const Li = styled.li`
  padding: 1.4vh;
  border-left: ${props => props.chosen==true?'0.3vh solid white':''};
  text-align: center;
  &:last-of-type{
    margin-top: 47vh;
  }
`