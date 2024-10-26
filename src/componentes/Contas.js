import ContaPrincipal from './ContaPrincipal';
import Conta from './Conta';

export default function Contas(){
    return(
        <div className="Contas">
            <ContaPrincipal avatar='https://i.pinimg.com/564x/a1/8c/b3/a18cb35bcaac8faa82082b2bc113eae1.jpg' profileName='archyo'/>
            <h3>Sugestões para você</h3>
            <Conta avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE9SLUzg5wz5fZ5oY8h0UFU0siUdSQmZq3A&s' profileName='clairo'/>
            <Conta avatar='https://i1.sndcdn.com/artworks-000382338297-zhlxr4-t500x500.jpg' profileName='vmz'/>
            <Conta avatar='https://i.scdn.co/image/ab6761610000e5eb4111c95b5f430c3265c7304b' profileName='joji'/>
            <Conta avatar='https://rocknbold.com/wp-content/uploads/2021/07/the-marias-estrena-un-millon_unnamed-6-679x1024-1-679x690.jpg' profileName='themarias'/>
            <Conta avatar='https://imagem.natelinha.uol.com.br/tudo-sobre/jao_856a1c0149637d75c8b3d3b2cef41ec7866377fe_bc59d67aeb2562e8ea47c46b56e082a632378264.jpeg' profileName='jão'/>
        </div>
    );
}