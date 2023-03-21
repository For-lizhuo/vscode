import styled from "styled-components";
export const Editor = styled.div`
  flex: 1;
  background-color: #282C34;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
`
export const Background = styled.div`
  width: 50vh;
  height: 50vh;
  background-image: url('/src/resources/background.svg');
  background-repeat: no-repeat;
  background-size: contain;
`
export const Shown = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const HeaderContainer = styled.div`
  flex-basis: 5vh;
  background-color: #21252B;

`
export const NavLink = styled.div`

`
export const Name = styled.div`

`
export const PrePath = styled.div`
  
`

export const PathContainer = styled.div`
  padding-left: 0.8vw;
  display: flex;
  align-items: center;
  flex-basis: 3vh;
  background-color:#272B33;
`
export const PathName = styled.div`
  color: #ABB2BF;
  font-size:1.6vh;
  padding-left: 0.2vw;
`
export const CodeContainer = styled.div`
  display: flex;
  flex:1;
  background-color: red;
  overflow-y: auto;
`
export const Pre = styled.pre`
  flex: 1;
  background-color:blue;
  display: flex;
  overflow-y:auto;
`

export const CodeDetail=styled.code`
  flex: 1;
  font-family: consolas;
  font-size:18px;
  color: #ABB2BF;
  background-color: #272B33;
  overflow-y: auto;
  overflow-x: auto;
  padding-left: 1vw;
  padding-top: 1vh;
  &:focus{
    outline: none;
  }
  &::-webkit-scrollbar{
    background-color: #272B33;
    width: 1vw;
  };
  &::-webkit-scrollbar-thumb{
    background-color: #373C47;
    height: 30vh;
  };
  &::-webkit-scrollbar-corner{
    background-color:#282C34;
  }
  &::-webkit-resizer{
    display: none;
  }
`