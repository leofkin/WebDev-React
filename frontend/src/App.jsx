import Exemplo from "./components/Exemplo";

function App() {

  //DECLARAÇÃO DE VARIÁVEIS
  let nome = "Fiap";
  let apelido = "Fiapinho";
  let novoNome= nome.toUpperCase();

  //criando função

  function soma(valor1,valor2){
    return valor1 + valor2;
  }

  //arrow function
  const desconto =(valor3,valor4)=>{
    return valor3 -valor4
  }

  function enviar(){
    alert(`Seja bem-vindo ${nome}`)
  }

  return (
  <>
    <h1>Seja bem-vindo {novoNome} {apelido}</h1>
    <p>A soma da Função é:{soma(10,8)}</p>
    <p>O desconto da Arrow Function é:{desconto(90,30)}</p>
    <button onClick={enviar}>Clique aqui</button>
    
 
  
  <Exemplo/>
  </>
  
    
  )
}

export default App
