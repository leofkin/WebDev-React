import { useState } from "react"

function Exemplo(){

    // HOOK - useState - manipula o estado da variável
    const[mensagem,setMensagem]=useState("Nenhuma Mensagem do Servidor");
    const[endpointAtual, setEndPointAtual] =useState("");
    const[status,setStatus]=useState("");

    //Criando a função Busca
    const busca= async(api)=>{
        setEndPointAtual(api);//Define o endpoint atual
        setMensagem("Carregando...");//Mensagem de carregamento
        setStatus("Loading...");//Define o status do carregamento

        //Tratamento de erros
        try{
            //Fazendo uma requisição de Get no endpoint usando a função Fetch
            const resposta = await fetch(`http://localhost:5001${api}`);
            
            //Verifica se a resposta está Ok
            if(!resposta.ok){
                console.log(`Erro na requisição ${resposta.status}`)
            }
            //Converter a resposta em texto
            const data =await resposta.text();
            setMensagem(data); //Atualiza a mensagem com a resposta do servidor
            setStatus("Sucesso");

        }
        catch(error){
            console.log(`Erro ao buscar dados ${error}`);
            setMensagem(`Erro ao conectar ao servidor ${error}`);
            setStatus("Error")

        }

    }

    return(
        // fragment
        <>
        <div>
            <header>
                <h1>Frontend do Projeto</h1>
                <p>Acessando o servidor Node</p>
            </header>

            <main>
                <div>
                    <button onClick={()=>busca("/teste")}>Acessar Teste</button>
                    <button onClick={()=>busca("/sistema")}>Sistema</button>
                    <button onClick={()=>busca("/sobre")}>Sobre</button>
                </div>

                <div>
                    <h2>Rsposta do servidor</h2>
                    <p>Endpoint Atual:<span>{endpointAtual || "Nenhum"}</span></p>
                    <p>{mensagem}</p>
                    <p>Status do Servidor: {status}</p>
                </div>
             </main>

            <footer>
                <p>&copy; 2025</p>
            </footer>
        </div>
        </>
    )
}
export default Exemplo