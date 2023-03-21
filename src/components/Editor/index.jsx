import { Editor,Background,Shown,
  HeaderContainer,NavLink,Name,PrePath,
  PathContainer,PathName,
  CodeContainer,CodeDetail,Pre
} from './style';
import { useSelector } from 'react-redux';
import { Fragment ,useRef, useEffect, useState} from 'react';
import { FcOpenedFolder,FcFile } from 'react-icons/fc';
import { VscChevronRight } from 'react-icons/vsc';
import { IconContext } from "react-icons";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { highlightLanguages,navBarWidth } from '../../config';

function Header(){
  const {value,quantity} = useSelector((state)=>state.editorList);
  useEffect(()=>{
    console.log(quantity,value)
  },[value,quantity])
  return (
    <HeaderContainer>
      {quantity==0?null:
        <>{value.toString()}
        {value.map((item,index)=>{
            <NavLink key={index}>
              <FcFile/>123
              <Name>{item.name}</Name>
              <Path>{item.path}</Path>
            </NavLink>
          })
        }
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
 
  return (
    <CodeContainer>
      <Pre>
        <CodeDetail ref={codeRef} contentEditable={true} suppressContentEditableWarning={true} 
        dangerouslySetInnerHTML={{ __html: code }}/>  
      </Pre>
    </CodeContainer>
  )
}

export default function(){
  const {containerWidth} = useSelector(state=>state.container);
  const {isShown} = useSelector(state=>state.fileEditor);
  return(
    <Editor width={100-navBarWidth-containerWidth}>
      {isShown?
        <Shown>
          <Header/>
          <Path/>
          <Code/>
        </Shown>:
        <Background/>
      }
    </Editor>
  )
}