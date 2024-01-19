import Logo from '../images/html.png'
import Git from '../images/git.png'
import Linked from '../images/linked.png'
import Email from '../images/email.png'
import '../Contato/Contato.css'

function Contato(){
    return(
        <>
            <img src={Logo} className='Logo'/>
            <h1>Contato</h1>
            <div className='Tabelas'>

                <div className='tabelaUm'>
                    <img src={Git} className='Git'/>
                    <h2>github.com/srconsiglio</h2>
                </div>

                <div className='TabelaDois'>
                    <img src={Linked} className='Linkedin'/>
                    <h2>linkedin.com/in/srconsiglio</h2>
                </div>

                <div className='TabelaTres'>
                <img src={Email} className='email'/>
                    <h2>Caioconsiglio20@gmail.com</h2>
                </div>

            </div>
        </>
    )

};

export default Contato;