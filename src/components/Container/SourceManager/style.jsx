import styled from "styled-components";

export const SourceManager = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  flex-basis: 2%;
  display: flex;
  align-items: center;
  background-color: #21252B;
  justify-content: space-between;
  padding: 1.2vh 1vw 1.2vh 1.2vw;
`
export const HeaderTitle = styled.div`
  color: #ABB2BF;
  font-size: 1vh;
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
  &:hover{
    cursor: pointer;
  };
  &:first-of-type{
    height: auto;
  }
  &:last-of-type{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
export const Head = styled.div`
  display: flex;
  padding: 0.5vh 0;
  border: 0.1vw solid #282C34;
  &:focus{
    border: 0.1vw solid #3E4452;
  }
  &:last-of-type{
    height: auto;
  }
`
export const Title = styled.div`
  font-weight: bold;
  font-size: 1vh;
  padding-left: 0.2vw;
  color: #ABB2BF;
`
export const List = styled.div`
  background-color: #323842;
  color: #D7DAE0;
  font-size: 1vw;
`
export const FolderContainer = styled.div`
  border: 0.1vw solid #21252B;
  flex: 1;
  background-color: #21252B;
  &:focus{
    border: 0.1vw solid #3E4452;
  }
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