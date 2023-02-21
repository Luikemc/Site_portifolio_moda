import './Projetos.css'

function Projetos(props){

    return(
        <div className='geral'>
            <div className='cabecalho'>
            <img src={props.imagemProjeto} alt='Vestido Revellion' className='image'/>
            </div>
            <div className='rodape'>
                <h4>
                    {props.nomeProjeto}
                </h4>
                <div className='middle'>
                <h5>{props.descricaoProjeto}</h5>
            </div>
            </div>


        </div>
    )
}

export default Projetos