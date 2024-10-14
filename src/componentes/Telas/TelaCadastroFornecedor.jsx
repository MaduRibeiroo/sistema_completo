import { Alert } from "react-bootstrap";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaFornecedores from "./Tabelas/TabelaFornecedor";
import { fornecedor } from "../../dados/mockFornecedores";

export default function TelaCadastroFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores, setListaDeFornecedores] = useState(fornecedor);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        cnpj: "",
        nome: "",
        telefone: "",
        endereco: "",
        bairro: "",
        logo: ""
    });
   
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Fornecedores
                    </h2>
                </Alert>{
                    exibirTabela ?
                        <TabelaFornecedores listaDeFornecedores={listaDeFornecedores}
                                            setListaDeFornecedores={setListaDeFornecedores} 
                                            setExibirTabela={setExibirTabela}
                                            setModoEdicao={setModoEdicao}
                                            setFornecedorSelecionado={setFornecedorSelecionado} /> :
                        <FormCadFornecedor listaDeFornecedores={listaDeFornecedores}
                                            setListaDeFornecedores={setListaDeFornecedores}
                                            setExibirTabela={setExibirTabela}
                                            fornecedorSelecionado={fornecedorSelecionado}
                                            setFornecedorSelecionado={setFornecedorSelecionado}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}