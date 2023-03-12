import {Editor} from './style';
import { useSelector } from 'react-redux';
export default function(){
  
  const {containerWidth} = useSelector(state=>state.container)
  return(
    <Editor width={100-2.8-containerWidth}>
  
    </Editor>
  )
}