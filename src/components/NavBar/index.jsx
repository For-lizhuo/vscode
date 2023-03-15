import {NavBar,Ul,Li} from './style';
import {IconContext} from 'react-icons';
import {VscMenu,VscFiles,VscSearch,VscSourceControl,VscDebugAlt,
        VscVmConnect,VscExtensions,VscGear} from 'react-icons/vsc';

import { useDispatch,useSelector } from 'react-redux';
import { choose } from '../../features/navBarSlice';
export default function(){
  const dispatch = useDispatch();
  const {chosen,display} = useSelector((state)=>state.navBar);
  const liList = [{
    name:'sourceManager',icon:<VscFiles/>
  },{
    name:'search',icon:<VscSearch/>
  },{
    name:'codeManager',icon:<VscSourceControl/>
  },{
    name:'debug',icon:<VscDebugAlt/>
  },{
    name:'remoteConnect',icon:<VscVmConnect/>
  },{
    name:'extensions',icon:<VscExtensions/>
  }];
  return(
    <NavBar>
      <Ul>
        <Li>
          <IconContext.Provider value={{size:'2.5vh',color:'inheit'}}>
            <VscMenu/>
          </IconContext.Provider>
        </Li>
        {liList.map((item,index)=>{
          return (
            <Li key={index} chosen={item.name==chosen} onClick={()=>{dispatch(choose(item.name))}}>      
              <IconContext.Provider value={{size:'3.2vh',color:(chosen==item.name)?'#D7DAE0':'inherit'}}>
                {item.icon}
              </IconContext.Provider>
            </Li>
          )
        })
        }
        <Li>
          <IconContext.Provider value={{size:'3.8vh',color:'inheit'}}>
            <VscGear/>
          </IconContext.Provider>
        </Li>
      </Ul>
    </NavBar>
  )
}