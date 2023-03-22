import { SourceManager,HeaderContainer,HeaderTitle,Ellipsis,
  Container,Head,Title,EditorListContainer,NavLink,FileName,Close,
  OpenFolderTitle,FolderContainer,
  Info,Name,Button,Hidden
  } from "./style";
import React,{ lazy,Suspense } from "react";
import { IconContext } from "react-icons";
import { VscEllipsis,VscChevronDown,VscChevronRight,VscClose } from 'react-icons/vsc';
import { FcFolder,FcOpenedFolder,FcFile } from "react-icons/fc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../features/folderSlice";
import { showFile, switchFile,closeFile } from "../../../features/fileEditorSlice";
import { add,remove } from "../../../features/editorList";
import { EDITOR_MAX_QUANTITY } from "../../../../config";

const FolderList = lazy(() => import('./style')
  .then(module => ({ default: module.FolderList})));


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
  const {map} = useSelector((state)=>state.editorList);
  const {file} = useSelector(state=>state.fileEditor);
  const dispatch = useDispatch();
  let isChosen,name;
  const clickNavLink = (path)=>{
    if(file.path==path) return;
    dispatch(switchFile({path,...map.get(path)}));
  };
  const clickClose = (path)=>{
    const arr = [...map.keys()];
    let index = arr.indexOf(path);
    dispatch(remove(path));
    if(file.path!==path) return;
    if(arr.length==1){
      dispatch(closeFile());
      return;
    }
    index==0?index++:index--;
    dispatch(switchFile({
      path:arr[index],...map.get(arr[index])
    }))
  };
  return (
    <EditorListContainer>
      {map.size==0?null:
        <>
        {Array.from(map.keys()).map((path,index)=>{
          isChosen = file.path==path;
          name = map.get(path).name; 
          return (
            <NavLink key={index} isChosen={isChosen} onClick={()=>{clickNavLink(path)}} tabIndex={0}>
              <Close isChosen={isChosen} onClick={(e)=>{e.stopPropagation;clickClose(path);}}>
              <IconContext.Provider value={{size:'2.2vh'}}>
                  <VscClose/>
                </IconContext.Provider>
              </Close>
              <IconContext.Provider value={{size:'2.2vh'}}>
                <FcFile/>
              </IconContext.Provider>
              <Name isChosen={isChosen}>{name}</Name>
              {/* <PrePath isChosen={isChosen}></PrePath> */}
            </NavLink>
            )
        })}
        </>  
      }
    </EditorListContainer>
  )
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
  const processHandle = async(handle)=>{
    if(handle.kind==='file') {return handle;}
    const iterator = handle.entries();
    let temp = [];
    for await(const item of iterator){
      temp.push(await processHandle(item[1]));
    }
    let file = [],folder = [];
    for(let item of temp){
      if(item.kind=='file'){
        file.push(item);
      }
      else{
        folder.push(item);
      }
    }
    handle.children = [...folder,...file];
    return handle;
  }
  const openFolder = async()=>{
    try{
      const handle = await window.showDirectoryPicker();
      const fileTree = {children:[]}; 
      fileTree.children.push(await processHandle(handle));
      dispatch(open(fileTree));
    } 
    catch(error){
      alert(error);
    }
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

function Folder(props){
  const [fold,setFold] = useState(true);
  return(
    <>
      <Info tabIndex={0} onClick={()=>{setFold(prevState=>!prevState)}} layer={props.layer} isChosen={false}>
        <IconContext.Provider value={{color:'#C0BEAE'}}>
          {fold?<VscChevronRight/>:<VscChevronDown/>}
        </IconContext.Provider>
        <IconContext.Provider value={{size:'2.4vh'}}>
          {fold?<FcFolder/>:<FcOpenedFolder/>}
        </IconContext.Provider>
        <Name>{props.name}</Name>
      </Info>
      {
        fold?null:<FileTree list={props.child} layer={props.layer+1} path={props.path}/>
      }
    </>
  )
}

function File(props){
  const dispatch = useDispatch();
  const handle = props.handle;
  const {file,isShown} = useSelector(state=>state.fileEditor);
  const {map} = useSelector(state=>state.editorList);
  const clickFileInfo = async()=>{
    const FILE = await handle.getFile();
    const reader = new FileReader();
    const type = FILE.type;
    let value;
    if(type.includes('image')){
      //读取图片格式
      reader.onloadend = () => {
        value = reader.result;
        if(map.size<EDITOR_MAX_QUANTITY&&!map.has(props.path)){
          dispatch(add({
            path:props.path,
            property:{
              name:props.name,
              type:FILE.type,
              value
            }
          }));
        };
        {
          if(isShown){
            if(file.path == props.path) return;
            dispatch(switchFile({value,name:props.name,path:props.path,type:FILE.type}));
          }
          else{
            dispatch(showFile({value,name:props.name,path:props.path,type:FILE.type}));
          }
        }
      };
      reader.readAsDataURL(FILE);
      return;
    };
    reader.readAsText(FILE,'utf-8');
    reader.onload = (e)=>{
      value = e.target.result;
      if(map.size<EDITOR_MAX_QUANTITY&&!map.has(props.path)){
        dispatch(add({
          path:props.path,
          property:{
            name:props.name,
            type:FILE.type,
            value
          }
        }));
      };
      {
        if(isShown){
          if(file.path == props.path) return;
          dispatch(switchFile({value,name:props.name,path:props.path,type:FILE.type}));
        }
        else{
          dispatch(showFile({value,name:props.name,path:props.path,type:FILE.type}));
        }
      }  
    };
  }
  return(
    <>
      <Info tabIndex={0} layer={props.layer} onClick={clickFileInfo} isChosen={file.path==props.path}>
        <Hidden>
            <VscChevronDown/>
        </Hidden>
        <IconContext.Provider value={{size:'2.2vh'}}>
          <FcFile/>
        </IconContext.Provider>
        <Name>{props.name}</Name>
      </Info>    
    </>
  )
}

function FileTree(props){
   return (
    <>
      {props.list.map((item,index)=>{
      return item.kind==='file'?
        <File key={index} name={item.name} layer={props.layer+1} handle={item} path={`${props.path}/${item.name}`}/>:
        <Folder key={index} name={item.name} child={item.children} layer={props.layer+1} path={`${props.path}/${item.name}`}></Folder>
      })}
    </>  
  );
}

function WorkSpace(){
  const [fold,setFold] = useState(false);
  const {isOpen,fileTree} = useSelector(state=>state.folder);
  return(
  <Container>
    <Head tabIndex={0} onClick={()=>{setFold(prevState=>!prevState)}}>
      <IconContext.Provider value={{color:'#C0BEAE'}}>
        {fold?<VscChevronRight/>:<VscChevronDown/>}
      </IconContext.Provider>
      <Title>{isOpen?'工作区':'无打开的文件夹'}</Title>
    </Head>
      <FolderContainer tabIndex={0}>
        {fold?null:!isOpen?<OpenFolder/>:
        <Suspense fallback={<h1>loading</h1>}>
          <FolderList>
            <FileTree list={fileTree.children} layer={0} path=''/>
          </FolderList>
        </Suspense>
        }
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