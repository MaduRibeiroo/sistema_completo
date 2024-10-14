import Pagina from "../layouts/Pagina";
import FormEntregadores from "./Formularios/FormEntregadores";
import { Alert } from "react-bootstrap";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { useState } from "react";
import { entregadores } from "../../dados/mockEntregadores";

export default function TelaCadEntregadores(props){

    const [exibirTabela, setExibirTabela]=useState(true);
    const [listaDeEntregadores, setListaDeEntregadores]=useState(entregadores);
    const [modoEdicao, setModoEdicao]=useState(false); 
    const [entregadorSelecionado, setEntregadorSelecionado]=useState({
    cpf:"",
    nome:"",
    telefone:"",
    rua:"",
    numeroCasa:0,
    cidade:"",
    estado:"",
    dataNascimento:""
  });

    return (
      <div>
        <Pagina>
          <Alert className="mt-02 mb-02 success text-center" variant="success">
              <h2 className={"text-center"}>
                  Cadastro de Entregadores
              </h2>
          </Alert>
          {
            exibirTabela ?
              <TabelaEntregadores listaDeEntregadores={listaDeEntregadores}
                              setListaDeEntregadores={setListaDeEntregadores}
                              setExibirTabela={setExibirTabela}
                              setModoEdicao={setModoEdicao}
                              setEntregadorSelecionado={setEntregadorSelecionado}/> :
              <FormEntregadores listaDeEntregadores={listaDeEntregadores}
                            setListaDeEntregadores={setListaDeEntregadores}
                            setExibirTabela={setExibirTabela}
                            entregadorSelecionado={entregadorSelecionado}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}/>

          }
          </Pagina>
      </div>
        
      );
}