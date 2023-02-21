import Aboutme from '../Aboutme/Aboutme'
import './Configsobremim.css'

function Configsobremim(props){
    
    const aboutme = [
      {  
        titulo: 'SOBRE MIM',
        paragrafo: 'Oii, eu sou Marrina Cardoso, futura design de moda. Este portfólio é para compartilhar um pouco da minha paixão, a moda.  Aqui vou estar publicando algumas da minhas criações, como croquis, e às vezes algumas peças que tiro do papel .',
        foto: '/imagens/altoretrato.jpg'
      }
    ]
    const css = {backgroundColor:props.corSecundariaSobremim}
    return(
                <section className='sobremim' style={css}>
                    <h5 style={{borderColor: props.corPrimariaSobremim}}>{props.nomeSobremim}</h5>

                    
            
            <div className='sobree'>
           
                {aboutme.map(about =><Aboutme key={about.titulo}
                titulo={about.titulo}
                paragrafo={about.paragrafo}
                foto={about.foto}
      />)}

            </div>
        </section>
    )
}

export default Configsobremim