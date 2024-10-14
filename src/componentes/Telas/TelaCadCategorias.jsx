import FormCategorias from "./Formularios/FormCategorias.jsx";
import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCategorias from "./Tabelas/TabelaCategorias";
import { categorias } from "../../dados/mockCategorias";

export default function TelaCadCategorias(props){

    const [exibirTabela, setExibirTabela]=useState(true);
    const [listaDeCategorias, setListaDeCategorias]=useState(categorias);

    const [modoEdicao, setModoEdicao]=useState(false); 
    const [categoriaSelecionada, setCategoriaSelecionada]=useState({
        codigo:0,
        descricao:"",
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Categorias
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaCategorias listaDeCategorias={listaDeCategorias}
                                    setListaDeCategorias={setListaDeCategorias}
                                    setExibirTabela={setExibirTabela}
                                    setModoEdicao={setModoEdicao}
                                    setCategoriaSelecionada={setCategoriaSelecionada}/> :
                    <FormCategorias listaDeCategorias={listaDeCategorias}
                                    setListaDeCategorias={setListaDeCategorias}
                                    setExibirTabela={setExibirTabela}
                                    categoriaSelecionada={categoriaSelecionada}
                                    setCategoriaSelecionada={setCategoriaSelecionada}
                                    modoEdicao={modoEdicao}
                                    setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
        
    );
}