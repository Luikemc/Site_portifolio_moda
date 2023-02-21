import Banner from "./Componentes/Banner/Banner"
import Configcontatos from "./Componentes/Configcontatos/Configcontato"
import Configprojetos from "./Componentes/Configprojetos/Configprojetos"
import Configsobremim from "./Componentes/Configsobremim/Configsobremim"
import Sobremim from "./Componentes/Sobremim/Sobremim"


function App() {

  const projeto = [
    {
      nome: 'Projetos',
      corPrimaria: '#57c278',
      corSecundaria: '#CDC0F5'
    },
  ]


  const contato = [
    {
      nomeContato: 'Contato',
      corPrimariaContato: '#0CABA8',
      corSecundariaContato: '#b0a1dc',
    }
  ]

  const sobremim = [
    {
      nomeSobremim: '',
      corPrimariaSobremim: '#0CABA8',
      corSecundariaSobremim: '#f8f8f8',
    }
  ]
  return (
  
      <div className="App">
        <Banner/>
        
        {sobremim.map(sobre => <Configsobremim key ={sobre.nomeSobremim}
          nomeSobremim={sobre.nomeSobremim}
          corPrimariaSobremim={sobre.corPrimariaSobremim}
          corSecundariaSobremim={sobre.corSecundariaSobremim}
        />)}

        {projeto.map(projet => <Configprojetos key={projet.nome} 
        nome={projet.nome} 
        corPrimaria={projet.corPrimaria} 
        corSecundaria={projet.corSecundaria}
     />)}
       {contato.map(conta => <Configcontatos key={conta.nomeContato}
        nomeContato={conta.nomeContato} 
        corPrimariaContato={conta.corPrimariaContato} 
        corSecundariaContato={conta.corSecundariaContato}
        />)}

      </div>
  )
}

export default App
