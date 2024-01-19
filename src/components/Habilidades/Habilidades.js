import '../Habilidades/Habilidades.css'
import Logo from '../images/html.png'
import React from '../images/react.png'
import Java from '../images/java.png'
import Css from '../images/css.png'
import Html from '../images/html 5.png'
import Sql from '../images/sql.png'
import Node from '../images/node.png'


function Habilidades(){
    return(
        <>

        
            <img src={Logo} className='Logo'/>
            <h1>Minhas Habilidaes</h1>
            <div className='Habilidades'>

                <div className='HabilidadesUm'>
                    <h2>ReactJS</h2>
                    <img src={React} className='React'/>
                </div>

                <div className='HabilidadesDois'>
                    <h2>JavaScript</h2>
                <img src={Java} className='Java'/>
                </div>

                <div className='HabilidadesTres'>
                    <h2>Css 3</h2>
                <img src={Css} className='Css'/>
                </div>

                <div className='HabilidadesQuatro'>
                    <h2>Html 5</h2>
                    <img src={Html} className='Html'/>
                </div>

                <div className='HabilidadesCinco'>
                    <h2>DB Relacional</h2>
                    <img src={Sql} className='Sql'/>
                </div>

                <div className='HabilidadesSeis'>
                    <h2>NodeJS</h2>
                    <img src={Node} className='Node'/>
                </div>

            </div>
        </>
    )
};

export default Habilidades;