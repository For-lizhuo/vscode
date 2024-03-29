import { DividingLine } from "./style";
import { useDispatch,useSelector } from "react-redux";
import { startDrag } from "../../features/containerSlice";
import { useState } from "react";
import { navBarWidth } from "../../../config";

export default function(props){
  const [mouseOver,setMouseOver] = useState(false);
  const dispatch = useDispatch();
  const {containerWidth} = useSelector(state=>state.container)
  const onMouseDown = (e)=>{
    props.setOffset(e.clientX/window.innerWidth*100-containerWidth-navBarWidth);
    dispatch(startDrag());
  };
  return(
    <DividingLine onMouseDown={onMouseDown} onMouseOver={()=>setMouseOver(true)} 
    onMouseLeave={()=>setMouseOver(false)} mouseOver={mouseOver} mouseMove={props.mouseMove}>
    </DividingLine>
  )
}