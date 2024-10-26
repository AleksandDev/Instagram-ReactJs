import Stories from './Stories';
import Post from './Post';
import './ConteudoPrincipal.css';

export default function ConteudoPrincipal() {
    return (
        <div className='ConteudoPrincipal'>
            <Stories />
            <Post avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmXgzvA4muyz3l_jgZJvZRalxS7IdAhzDFA&s' profileName='juicewlrd' conteudo='https://i.scdn.co/image/ab677762000056b8865005d18bcf8952a24f333f' />
            <Post avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_YPhzb1YUreuXQIgj_D0Zeay1D2IVXpSlw&s' profileName='kamaitachi' conteudo='https://i.pinimg.com/originals/9d/19/ba/9d19ba3019069fbf30498a99a98d138d.jpg' />
            <Post avatar='https://lastfm.freetls.fastly.net/i/u/avatar170s/e3a165c40e71ea718421a06620c9d5aa' profileName='shinigami' conteudo='https://lastfm.freetls.fastly.net/i/u/770x0/57dbaf19aa2fab329ac50fa456417c6b.jpg#57dbaf19aa2fab329ac50fa456417c6b' />
        </div>
    );
}