import {Container} from './style';
import { useSelector } from 'react-redux';
import SourceManager from './SourceManager';

export default function(){
  const {containerWidth} = useSelector(state=>state.container);
  const {chosen} = useSelector(state=>state.navBar);
  return(
    <Container width={containerWidth}>
        <SourceManager></SourceManager>
    </Container>
  )
}