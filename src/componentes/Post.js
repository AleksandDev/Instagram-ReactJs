import { PiHeartBold } from "react-icons/pi"; //like
import { TbMessageCircle } from "react-icons/tb"; //message
import { TbSend } from "react-icons/tb"; //direct
import './Post.css';

export default function Post(props) {
    return(
        <div className="Post">
            
            <div className="Post-cabecalho">
                <div className="Post-avatar">
                    <img src={props.avatar} alt="avatar-image"/>
                </div>
                <div className="Post-name">
                    <p>{props.profileName}</p>
                </div>
            </div>

            <div className="Post-conteudo">
                <img src={props.conteudo} alt="conteudo"/>
            </div>

            <div className="Post-rodape">
                <div className="Post-Like">
                    <a href="/" type="submit" id="Like">{<PiHeartBold />}</a>
                </div>
                <div className="Post-message">
                    <a href="/">{<TbMessageCircle />}</a>
                </div>
                <div className="Post-direct">
                    <a href="/">{<TbSend />}</a>
                </div>
            </div>
            <div className="Post-coment">Adicione um comentário...</div>
        </div>
    );
}


