import {Container} from './style';
import { useSelector } from 'react-redux';
export default function(){
  const {containerWidth} = useSelector(state=>state.container)
  return(
    <Container width={containerWidth}>

    </Container>
  )
}