import { Button, Container, Table } from "react-bootstrap";

export default function TabelaEntregadores(props){
    
    function editarEntregador(entregador){
        props.setModoEdicao(true);
        props.setEntregadorSelecionado(entregador);
        props.setExibirTabela(false);
    }

    function excluirEntregador(entregador){
        if(window.confirm("Deseja realmente excluir o entregador "+entregador.cpf + "-"+ entregador.nome+"?")){
            props.setListaDeEntregadores(props.listaDeEntregadores.filter((item)=>{
                return item.cpf!==entregador.cpf
            }));
        }
    }

    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary"
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>
                    Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Rua</th>
                        <th>Numero da Casa/Prédio</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeEntregadores?.map((entregador) => {
                                return (
                                    <tr>
                                        <td>{entregador.cpf}</td>
                                        <td>{entregador.nome}</td>
                                        <td>{entregador.telefone}</td>
                                        <td>{entregador.rua}</td>
                                        <td>{entregador.numeroCasa}</td>
                                        <td>{entregador.cidade} </td>
                                        <td>{entregador.estado} </td>
                                        <td>{entregador.dataNascimento}</td>
                                        <td>
                                            <Button onClick={()=>{
                                                editarEntregador(entregador);
                                            }} variant="warning" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                                </svg>
                                            </Button>
                                            
                                            <Button onClick={()=>{
                                                excluirEntregador(entregador);
                                            }}  variant="danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 
                                                1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                </svg>
                                            </Button> 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <p>Quantidade de entregadores cadastrados: {props.listaDeEntregadores.length}</p>
            </Container>
        </>
    );
}