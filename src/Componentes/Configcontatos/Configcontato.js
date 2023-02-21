import Contato from '../Contato/Contato'
import './Configcontatos.css'

function Configcontatos(props){

    const contatos = [
        {
            nomeContato: 'Instagram',
            urlContato: 'https://www.instagram.com/cardoso.mariina/',
            imagensContato: 'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png?resize=696%2C696&ssl=1',
            info: 'Marina Cardoso'
        },
        {
            nomeContato: 'Gmail',
            urlContato: 'Email: marina15smcardoso@gmail.com',
            imagensContato: 'https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png',
            info: 'marina15smcardoso@gmail.com'
        },
        {
            nomeContato: 'whatsapp',
            urlContato: 'https://api.whatsapp.com/send?phone=6196858065&text=Boa%20Tarde,%20vi%20seu%20portifolio.',
            imagensContato: 'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png',
            info: '(61) 9685-8065'
        }

    ]
    const css = {backgroundColor:props.corSecundariaContato}
    return(
                <section className='contato' style={css}>
                    <h5 style={{borderColor: props.corPrimariaContato}}>{props.nomeContato}</h5>

                    
            
            <div className='contaas'>
           
                {contatos.map(conta =><Contato key={conta.nomeContato}
                nomeContato={conta.nomeContato}
                urlContato={conta.urlContato}
                imagensContato={conta.imagensContato}
                info={conta.info}

      />)}

            </div>
        </section>
    )
}

export default Configcontatos