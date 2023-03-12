import {NavBar,Ul,Li} from './style';
import {IconContext} from 'react-icons';
import {VscMenu,VscFiles,VscSearch,VscSourceControl,VscDebugAlt,
        VscVmConnect,VscExtensions,VscGear} from 'react-icons/vsc';
import { useState } from "react";

import { useDispatch,useSelector } from 'react-redux';
import { choose } from '../../features/navBarSlice';
export default function(){
  const [mouse,setMouse] = useState(null); 
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
        <Li onMouseEnter={()=>{setMouse('menu')}} onMouseLeave={()=>{setMouse(null)}}>
          <IconContext.Provider value={{size:'2.5vh',color:mouse=='menu'?'#D7DAE0':'#6E7179'}}>
            <VscMenu/>
          </IconContext.Provider>
        </Li>
        {liList.map((item,index)=>{
          return (
            <Li key={index} chosen={item.name==chosen} onClick={()=>{dispatch(choose(item.name))}}
            onMouseEnter={()=>{setMouse(item.name)}} onMouseLeave={()=>{setMouse(null)}}
            >      
              <IconContext.Provider value={{size:'3.2vh',color:([chosen,mouse].includes(item.name))?'#D7DAE0':'#6E7179'}}>
                {item.icon}
              </IconContext.Provider>
            </Li>
          )
        })
        }
        <Li onMouseEnter={()=>{setMouse('settings')}} onMouseLeave={()=>{setMouse(null)}}>
          <IconContext.Provider value={{size:'3.8vh',color:mouse=='settings'?'#D7DAE0':'#6E7179'}}>
            <VscGear/>
          </IconContext.Provider>
        </Li>
      </Ul>
    </NavBar>
  )
}