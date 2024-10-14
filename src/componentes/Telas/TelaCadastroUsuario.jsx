import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaUsuario from "./Tabelas/TabelaUsuario";
import { usuario } from "../../dados/mockUsuarios";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuario);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        cpf: "",
        nome: "",
        telefone: "",
        email: "",
        senha: ""
    });
   
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuários
                    </h2>
                </Alert>{
                    exibirTabela ?
                        <TabelaUsuario      listaDeUsuarios={listaDeUsuarios}
                                            setListaDeUsuarios={setListaDeUsuarios} 
                                            setExibirTabela={setExibirTabela}
                                            setModoEdicao={setModoEdicao}
                                            setUsuarioSelecionado={setUsuarioSelecionado} /> :
                        <FormCadUsuario     listaDeUsuarios={listaDeUsuarios}
                                            setListaDeUsuarios={setListaDeUsuarios}
                                            setExibirTabela={setExibirTabela}
                                            usuarioSelecionado={usuarioSelecionado}
                                            setUsuarioSelecionado={setUsuarioSelecionado}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}