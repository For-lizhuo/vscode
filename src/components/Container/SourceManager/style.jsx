import styled from "styled-components";

export const SourceManager = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  flex-basis: 2.6vh;
  display: flex;
  align-items: center;
  background-color: #21252B;
  justify-content: space-between;
  padding: 1.2vh 1vw 1.2vh 1.2vw;
`
export const HeaderTitle = styled.div`
  color: #ABB2BF;
  font-size: 1.6vh;
`
export const Ellipsis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:20%;
  padding: 0.2vh;
  color: #ABB2BF;
  &:hover{
    cursor: pointer;
    background-color: #33373B;
  }
`
export const Container = styled.div`
  background-color: #282C34;
  &:first-of-type{
    height: auto;
  }
  &:last-of-type{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
  }
`
export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5vh 0;
  border: 0.1vh solid #282C34;
  &:first-of-type{
    flex-basis: 2.5%;
  }
  &:hover{
    cursor: pointer;
  };
  &:focus{
    border: 0.1vh solid #3E4452;
  };
`
export const Title = styled.div`
  font-weight: bold;
  font-size: 1.6vh;
  padding-left: 0.2vw;
  color: #ABB2BF;
`
export const List = styled.div`
  background-color: #323842;
  color: #D7DAE0;
  font-size: 1vw;
`
export const Info = styled.div.attrs((props)=>({
  style:{
    paddingLeft: props.layer/2+0.8+'vw',
    backgroundColor: props.isChosen?'#2C313A':'inherit',
    border:props.isChosen?'#2C313A 0.1vh solid':'0.1vh solid #21252B'
  }
}))`
  display: flex;
  align-items: center;
  height: 2.8vh;
  &:hover{
    cursor: pointer;
  };
  &:focus{
    border: 0.1vh solid #3E4452 !important;
  }
`
export const Name = styled.div`
  color: #ABB2BF;
  font-size: 1.6vh;
  padding-left: 0.2vw;
`
export const FolderContainer = styled.div`
  border: 0.1vh solid #282C34;
  flex-basis:97.5%;
  display: flex;
  flex-direction: column;
  background-color: #21252B;
  overflow-y: auto;
  &:focus{
    border: 0.1vh solid #3E4452;
  }
  &::-webkit-scrollbar{
    background-color: #282C34;
    width: 0.6vw;
  };
  &::-webkit-scrollbar-thumb{
    height:20vh;
    background-color: #373C47;
  };
`
export const FolderList = styled.div`
  flex: 1;
`
export const OpenFolderTitle = styled.div`
  color: #ABB2BF;
  font-size: 1.6vh;
  padding:1.6vh 1vw 1vh 1.2vw;
`
export const Button = styled.button`
  display: block;
  width: 88%;
  color: #FFFFFF;
  background-color: #404754;
  border: none;
  border-radius: 2px;
  margin:1.5vh auto 0 auto;
  font-size: 1.7vh;
  height: 3.8vh;
  &:hover{
    background-color: #4D5565;
    cursor: pointer;
  }
`
export const Hidden = styled.div`
  visibility: hidden;
`