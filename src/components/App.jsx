import NavBar from './NavBar';
import Container from './Container';
import Editor from './Editor';
import DividingLine from './DividingLine';
import {Page} from '../style';
import { useSelector,useDispatch } from 'react-redux';
import { setContainerWidth,endDrag } from '../features/containerSlice';
import { useState } from 'react';

export default function(){
  const dispatch = useDispatch();
  const {isDragging,containerWidth} = useSelector((state)=>state.container);
  const [offset,setOffset] = useState(null);

  const onMouseMove = (e)=>{
    if(!isDragging) return;
    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;
    dispatch(setContainerWidth(mouseX/windowWidth*100-2.8-offset));
  };
  
  const onMouseUp = ()=>{
    if(!isDragging) return;
    dispatch(endDrag());
  };
  return(
    <Page onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <NavBar/>
      <Container/>
      <DividingLine setOffset={(data)=>{setOffset(data)}}/>
      <Editor/>
    </Page>
  )
}