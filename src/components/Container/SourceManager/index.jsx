import { SourceManager,HeaderContainer,HeaderTitle,Ellipsis,
  Container,Head,Title,List,FolderContainer,OpenFolderTitle,Button
  } from "./style";
import { IconContext } from "react-icons";
import {VscEllipsis,VscChevronDown,VscChevronRight} from 'react-icons/vsc';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../features/folderSlice";

function Header(){
  return(
    <>
      <HeaderContainer>
        <HeaderTitle>资源管理器</HeaderTitle>
        <Ellipsis>
          <IconContext.Provider value={{color:'inherit'}}>
              <VscEllipsis/>
          </IconContext.Provider>
        </Ellipsis>
      </HeaderContainer>
    </>
  ) 
}

function EditorList(){
  return <List>欢迎</List>
}

function EditorContent(){
  const [fold,setFold] = useState(false);
  return(
    <Container>
      <Head tabIndex={0} onClick={()=>{setFold(prevState=>!prevState)}}>
        <IconContext.Provider value={{color:'#C0BEAE'}}>
          {fold?<VscChevronRight/>:<VscChevronDown/>}
        </IconContext.Provider>
        <Title>打开的编辑器</Title>
      </Head>
      {!fold?<EditorList/>:null}
    </Container>
  )
}

function OpenFolder(){
  const dispatch = useDispatch();
  const openFolder = ()=>{
    dispatch(open())
  };
  return(
    <>
      <OpenFolderTitle>尚未打开文件夹。</OpenFolderTitle>
      <Button onClick={openFolder}>打开文件夹</Button>
      <Button>打开最近的文件</Button>
      <OpenFolderTitle>
        You can open a remote repository or pull request without cloning.
      </OpenFolderTitle>
      <Button>Open Remote Repository</Button>
    </>  
  )
}

function Folder(){
  return(
    <>
      文件1
      文件2
    </>
  )
}

function WorkSpace(){
  const [fold,setFold] = useState(false);
  const {isOpen} = useSelector(state=>state.folder);
  return(
  <Container>
    <Head tabIndex={0} onClick={()=>{setFold(prevState=>!prevState)}}>
      <IconContext.Provider value={{color:'#C0BEAE'}}>
        {fold?<VscChevronRight/>:<VscChevronDown/>}
      </IconContext.Provider>
      <Title>{isOpen?'工作区':'无打开的文件夹'}</Title>
    </Head>
    <FolderContainer tabIndex={0}>
      {fold?null:!isOpen?<OpenFolder/>:<Folder/>}
    </FolderContainer>    
  </Container>
  );
}

export default function(){
  return (
    <SourceManager>
      <Header/>
      <EditorContent/>
      <WorkSpace/>
    </SourceManager>       
  )
}