import './Aboutme.css'

function Aboutme(props){
    return(
        <div className='geralSobremim'>
                        
                        <div className='foto'>
                        <img src={props.foto} alt='foto'/>
                        <h1>{props.titulo}</h1>
                        <p>
                            {props.paragrafo}
                        </p>
                        </div>
                   
                   
                </div>
            
    )
}

export default Aboutme