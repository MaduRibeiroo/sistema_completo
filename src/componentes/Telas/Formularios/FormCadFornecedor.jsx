import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadFornecedor(props) {
    const [formValidado, setFormValidado] = useState(false);
    const [fornecedor, setFornecedor] = useState(props.fornecedorSelecionado);

    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if (form.checkValidity()){
            
            if (!props.modoEdicao){
                props.setListaDeFornecedores([...props.listaDeFornecedores, fornecedor]);
                props.setExibirTabela(true);
            }
            else{
                props.setListaDeFornecedores(props.listaDeFornecedores.map((forne) => {
                    if (forne.cpf !== fornecedor.cpf)
                        return forne
                    else
                        return fornecedor
                }));
                props.setModoEdicao(false);
                props.setFornecedorSelecionado({
                    cnpj: "",
                    nome: "",
                    telefone: "",
                    endereco: "",
                    bairro: "",
                    logo: ""
                });
                props.setExibirTabela(true);
            }
        }
        else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor    = evento.target.value; 
        setFornecedor({...fornecedor, [elemento]:valor});
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={fornecedor.cnpj}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o CNPJ do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="7">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={fornecedor.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a nome do fornecedor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={fornecedor.telefone}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o telefone do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="7">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={fornecedor.endereco}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereço do fornecedor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="bairro"
                        name="bairro"
                        value={fornecedor.bairro}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o bairro do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Logo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="logo"
                        name="logo"
                        value={fornecedor.logo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a logo do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
                </Col>
                <Col md={{offset:1}}>
                    <Button onClick={()=>{
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>

    );
}
