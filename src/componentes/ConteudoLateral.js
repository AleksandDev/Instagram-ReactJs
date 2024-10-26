import './ConteudoLateral.css';
import ListItem from './Listitem.js';

import { GoHomeFill } from "react-icons/go"
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { PiHeartBold } from "react-icons/pi";
import { MdOutlineAddBox } from "react-icons/md";


export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>

        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" className='Logo' alt='Logo' />

      <div>
        <ul className='NavagationButtons'>
          <ListItem icon={<GoHomeFill />} text='Página inicial'/>
          <ListItem icon={<IoSearch />} text='Pesquisar'/>
          <ListItem icon={<MdOutlineExplore />} text='Explorar'/>
          <ListItem icon={<RiMessengerLine />} text='Mensagens'/>
          <ListItem icon={<PiHeartBold />} text='Notificações'/>
          <ListItem icon={<MdOutlineAddBox />} text='Criar'/>

        </ul>
      </div>

    </div>
  );
}