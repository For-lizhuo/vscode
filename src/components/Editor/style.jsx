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
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar{
    background-color: #21252B;
    height: 0.5vh;
  };
  &::-webkit-scrollbar-thumb{
    background-color: #21252B;
    height: 0.1vh;
    width: 0.1vh;
    background-color: ${props=>props.isMouseEnter?'#3D4450':'#21252B'}
  };
`
export const NavLink = styled.div.attrs(props=>({
  style:{
    backgroundColor:props.isChosen?'#282C34':'#21252B',
    borderBottom:props.isChosen?'0.1vh solid white':'none'
  }
}
))`
  display: flex;
  width: fit-content;
  align-items: center;
  font-size:1.6vh;
  cursor: pointer;
  padding: 0 0.6vw;
  border-right: 0.1vw solid #181A1F;
  &:hover{
    background-color: #323842 !important;
  }
`
export const Name = styled.div.attrs(props=>({
  style:{
    color:props.isChosen?'#DCDCDC':'#76807B'
  }
}
))`
  white-space: nowrap;
  padding-left: 0.2vw;
`
export const PrePath = styled.div.attrs(props=>({
  style:{
    color:props.isChosen?'#979A9E':'#6E7178'
  }
}
))`
  white-space: nowrap;
  padding-left: 0.2vw;
`
export const Close = styled.div.attrs(props=>({
  style:{
    color: props.isChosen?'#ABB2BF':'#878A8F'
  }
}
))`
  margin-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:20%;
  padding: 0.2vh;
  &:hover{
    background-color: #3F444B;
  }
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
`
export const ImageContainer = styled.div`
  display:flex;
  flex:1;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
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
`
export const Img = styled.img`
  height: 50vh;
  width: 50vh;
`