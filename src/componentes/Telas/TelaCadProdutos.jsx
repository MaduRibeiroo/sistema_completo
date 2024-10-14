import FormProdutos from "./Formularios/FormProdutos.jsx";
import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";

export default function TelaCadProdutos(props){

  const [exibirTabela, setExibirTabela]=useState(true);
  const [listaDeProdutos, setListaDeProdutos]=useState(produtos);
  //modoEdicao é uma variável de estado que guarda o valor atual de estado que começa como false (desativado)
  //setModoEdicao atualiza o modoEdicao
  //useState usado para definir e manipular valores que podem mudar ao longo do ciclo de vida do componente, como dados que precisam ser renderizados ou atualizados dinamicamente
  const [modoEdicao, setModoEdicao]=useState(false); 
  const [produtoSelecionado, setProdutoSelecionado]=useState({
    codigo:0,
    descricao:"",
    precoCusto:0,
    precoVenda:0,
    qtdeEstoque:0,
    urlImagem:"",
    dataValidade:""
  });

  return(
    <div>
      <Pagina>
          <Alert className="mt-02 mb-02 success text-center" variant="success">
              <h2>
                    Cadastro de Produtos
              </h2>
          </Alert>
          {
            exibirTabela ?
              <TabelaProdutos listaDeProdutos={listaDeProdutos}
                              setListaDeProdutos={setListaDeProdutos}
                              setExibirTabela={setExibirTabela}
                              setModoEdicao={setModoEdicao}
                              setProdutoSelecionado={setProdutoSelecionado}/> :
              <FormProdutos listaDeProdutos={listaDeProdutos}
                            setListaDeProdutos={setListaDeProdutos}
                            setExibirTabela={setExibirTabela}
                            produtoSelecionado={produtoSelecionado}
                            setProdutoSelecionado={setProdutoSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}/>

          }
      </Pagina>
    </div>
  );        
}