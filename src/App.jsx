import {useState} from "react"

function App(){

const [nome,setNmae] = useState('Ronaldo')


  return(
    <div>
      <h3>Stray Kids</h3>

<input 
className="nome"
onChange={(e)=>{setName(e,target.value)}}
type="text"/>

<button
className="botao"
onClick={()=>{alert(nome)}}
>
    CLIQUE AQUI

</button>

    </div>
  )
}

export default App 