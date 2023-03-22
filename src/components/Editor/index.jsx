import { Editor,Background,Shown,
  HeaderContainer,NavLink,Name,PrePath,Close,
  PathContainer,PathName,
  ImageContainer,Img,
  CodeContainer,CodeDetail,Pre
} from './style';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment ,useRef, useEffect, useState} from 'react';
import { FcOpenedFolder,FcFile } from 'react-icons/fc';
import { VscChevronRight,VscClose } from 'react-icons/vsc';
import { IconContext } from "react-icons";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { highlightLanguages,navBarWidth } from '../../../config';
import { switchFile,closeFile } from '../../features/fileEditorSlice';
import { remove } from '../../features/editorList';

function Header(){
  const {map} = useSelector((state)=>state.editorList);
  const {file} = useSelector(state=>state.fileEditor);
  const [mouse,setMouse] = useState(false);
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
    <HeaderContainer isMouseEnter={mouse} onMouseEnter={()=>setMouse(true)} onMouseLeave={()=>setMouse(false)}>
      {map.size==0?null:
        <>
        {Array.from(map.keys()).map((path,index)=>{
          isChosen = file.path==path;
          name = map.get(path).name; 
          return (
            <NavLink key={index} isChosen={isChosen} onClick={()=>{clickNavLink(path)}}>
              <IconContext.Provider value={{size:'2.2vh'}}>
                <FcFile/>
              </IconContext.Provider>
              <Name isChosen={isChosen}>{name}</Name>
              {/* <PrePath isChosen={isChosen}></PrePath> */}
              <Close isChosen={isChosen} onClick={(e)=>{e.stopPropagation();clickClose(path)}}>
                <IconContext.Provider value={{size:'2.2vh'}}>
                  <VscClose/>
                </IconContext.Provider>
              </Close>
            </NavLink>
            )
        })}
        </>  
      }
    </HeaderContainer>
  )
}

function Path(){
  const {path} = useSelector(state=>state.fileEditor.file);
  const folderArray = [...path.split('/')];
  folderArray.shift();
  const fileName = folderArray.pop();
  return (
    <PathContainer>
      {folderArray.map((item,index)=>{
        return(
          <Fragment key={index}>
            <IconContext.Provider value={{size:'2.4vh'}}>
              <FcOpenedFolder/>
            </IconContext.Provider>
            <PathName>{item}</PathName>
            <IconContext.Provider value={{size:'2.4vh',color:'#ABB2BF'}}>
              <VscChevronRight/>
            </IconContext.Provider>
          </Fragment>
        )
            
      })}
      <IconContext.Provider value={{size:'2.2vh'}}>
        <FcFile/>
      </IconContext.Provider>
      <PathName>{fileName}</PathName>
    </PathContainer>
  )
}

function Code(){
  const codeRef = useRef(null);
  const {value,path,name,type} = useSelector(state=>state.fileEditor.file);
  const [code,setCode] = useState(value);
  // const handleChange = (e)=>{
  //   setCode(e.target.value);
  // };
  useEffect(()=>{
    hljs.configure({
      ignoreUnescapedHTML:true,
      languages:highlightLanguages
    })
  },[])
  useEffect(()=>{
    setCode(hljs.highlightAuto(value).value);
  },[path,name]);
 
  return(
    <CodeContainer>
    <Pre>
      <CodeDetail ref={codeRef} suppressContentEditableWarning={true} 
      dangerouslySetInnerHTML={{ __html: code }}/>  
    </Pre>
    </CodeContainer>
  )
}

function Image(){
  const {file} = useSelector(state=>state.fileEditor);
  return(
    <ImageContainer>
      <Img src={file.value} alt='图片无法显示'/>
    </ImageContainer>
  )
}

export default function(){
  const {containerWidth} = useSelector(state=>state.container);
  const {isShown} = useSelector(state=>state.fileEditor);
  const {type} = useSelector(state=>state.fileEditor.file);
  return(
    <Editor width={100-navBarWidth-containerWidth}>
      {isShown?
        <Shown>
          <Header/>
          <Path/>
          {type.includes('image')?<Image/>:<Code/>}
        </Shown>:
        <Background/>
      }
    </Editor>
  )
}