import './Configprojetos.css'
import Projetos from '../Projetos/Projetos'

function Configprojetos(props){

    const portifolio = [

        {
          nomeProjeto: 'Vestido Revellion',
          imagemProjeto: '/imagens/vestido01.jpeg',
          descricaoProjeto: 'Vestido feito para Réveillon. Longo com decote em V profundo, tecido todo brilhante.'
        },

        {
            nomeProjeto: 'São João do nordeste',
            imagemProjeto: '/imagens/Saojoao.jpeg',
            descricaoProjeto: 'Esse foi inspirado nas festas tradicionais de São João do nordeste, com bastante babado e cores bem vivas.'
          },

          {
            nomeProjeto: 'Victoria s Secrets 2016',
            imagemProjeto: '/imagens/vik.jpeg',
            descricaoProjeto: 'Look inspirado no desfile Victoria s Secrets 2016'
          },

          {
            nomeProjeto: 'Look de Emilly em Paris',
            imagemProjeto: '/imagens/paris.jpeg',
            descricaoProjeto: 'Look de Emilly em Paris, utilizado na 3° temporada'
          },

          {
            nomeProjeto: 'Spring Summer Taguatinga 2022',
            imagemProjeto: '/imagens/conjunto.jpeg',
            descricaoProjeto: 'Conjunto do desfile Spring Summer Taguatinga 2022 , look pela Hering e Mr. Foot. Com as cores tendências de verão e primavera.'
          },

          {
            nomeProjeto: 'Inspirado no aesthetic "cyber y2k"',
            imagemProjeto: '/imagens/preto.jpeg',
            descricaoProjeto: 'Look composto por um body preto e uma calça cargo estilizada. Inspirado no aesthetic "cyber y2k" .'
          },

          {
            nomeProjeto: 'Inspirado no álbum "Starboy" de The Weeknd"',
            imagemProjeto: '/imagens/vermelho.jpeg',
            descricaoProjeto: 'Vestido longo vermelho com bordado de pantera. Inspirado no álbum "Starboy" de The Weeknd'
          },

          {
            nomeProjeto: 'Inspirado no "Grammy s 2023"',
            imagemProjeto: '/imagens/roxo.jpeg',
            descricaoProjeto: 'Inspirado no "Grammy s 2023". Vestido longo roxo com detalhes em pedrarias.'
          },
          
          {
            nomeProjeto: 'Look composto por uma calça jeans reta, top com mangas longas',
            imagemProjeto: '/imagens/dourado.jpeg',
            descricaoProjeto: 'Look composto por uma calça jeans reta, top com mangas longas ( estilo luvas) na cor amarelo com alguns detalhes geométricos, um colar dourado, e uma bota no estilo tratorado no tom amarelo.'
          },

          {
            nomeProjeto: 'Look trabalho com drapeado na cintura e busto',
            imagemProjeto: '/imagens/azul1.jpeg',
            descricaoProjeto: 'Look trabalho com drapeado na cintura e busto , no tom azul real, e brilho'
          },


          
    ]

            const css = {backgroundColor:props.corSecundaria}
        return(
            <section className='projetos' style={css}>
                
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='projetinhos'>
               
                    {portifolio.map(port =><Projetos key={port.nomeProjeto}
                    nomeProjeto={port.nomeProjeto}
                    imagemProjeto={port.imagemProjeto}
                    descricaoProjeto={port.descricaoProjeto}
                    url={port.url}
    
          />)}
    
                </div>
            </section>
        )
                    }
export default Configprojetos