import Story from './Story';
import './Stories.css';

export default function Stories() {
    return (
        <div className='Stories'>
            <Story profilePhoto="https://musicainstantanea.com.br/wp-content/uploads/2021/04/Olivia-Rodrigo-700x700.jpeg" profileName="oliviarodrigo" />
            <Story profilePhoto="https://i.scdn.co/image/ab6761610000e5eb67bc48f32d1cc16497865361" profileName="cbjr" />
            <Story profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmXgzvA4muyz3l_jgZJvZRalxS7IdAhzDFA&s" profileName="juicewlrd" />
            <Story profilePhoto="https://lastfm.freetls.fastly.net/i/u/ar0/2898821d3a7f3dc42166e99e20dbe0d5.jpg" profileName="lilpeep" />
            <Story profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_YPhzb1YUreuXQIgj_D0Zeay1D2IVXpSlw&s" profileName="kamaitachi" />
            <Story profilePhoto="https://cdns-images.dzcdn.net/images/artist/d37ef92e54376529cc956a270827dd49/1900x1900-000000-80-0-0.jpg" profileName="taylorswift" />
            <Story profilePhoto="https://lastfm.freetls.fastly.net/i/u/avatar170s/e3a165c40e71ea718421a06620c9d5aa" profileName="shinigami" />
            <Story profilePhoto="https://akamai.sscdn.co/uploadfile/letras/fotos/e/6/7/b/e67b0326c68927855fbc67b47f5b36e7.jpg" profileName="twice" />
        </div>
    );
}