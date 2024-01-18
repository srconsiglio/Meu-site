import './SobreMim.css'
import Logo from '../images/html.png'



function SobreMim(){
    return(
            <>
                <img src= {Logo} className='Logo'/>
                <div className= 'SobreMim'>
                    <h1>Sobre Mim</h1>
                    <p>Sou uma pessoa bem criativo e comunicativo, portanto uso essas duas habilidades ao meu favor...
                    Gosto muito de mexer na parte que precisa da criação e imaginação, conheço o básico em redes, programação web, 
                    montagem e desmontagem de computadores, planilhas no draw.io.
                    Gosto sempre de me posicionar e ajudar a equipe, deixando o lugar com o ambiente leve e tranquilo, com um pensamento de liderança.
                        Estou a procura do pimeiro emprego na área de TI, assim exercendo minhas experiências adquiridas ao longo do caminho de estudo. 
                    </p>
                </div>
            </>
    )
};

export default SobreMim;