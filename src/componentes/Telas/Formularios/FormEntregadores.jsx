import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export default function FormEntregadores(props){

  const [entregador, setEntregador]=useState(props.entregadorSelecionado);
  const [formValidado, setFormValidado]=useState(false);

  function manipularSubmissao(evento){
    const form = evento.currentTarget;
    if(form.checkValidity()){
      //cadastrar produto
      if(!props.modoEdicao){
        props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
        props.setExibirTabela(true);
      }
      else{
        props.setListaDeEntregadores(props.listaDeEntregadores.map((item)=>{
          if(item.cpf!==entregador.cpf)
            return item
          else
            return entregador
        }));

        props.setModoEdicao(false);
        props.setEntregadorSelecionado({
          cpf:"",
          nome:"",
          telefone:"",
          rua:"",
          numeroCasa:0,
          cidade:"",
          estado:"",
          dataNascimento:""
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
    const valor=evento.target.value;
    setEntregador({...entregador,[elemento]:valor});
  }

    return(
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control 
              required
              type="text" 
              id="cpf"
              name="cpf"
              value={entregador.cpf}
              disabled={props.modoEdicao}
              onChange={manipularMudanca}/>
              <Form.Control.Feedback type='invalid'>Por favor, informe o cpf do entregador!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-4">
            <Form.Group as={Col} >
              <Form.Label>Nome</Form.Label>
              <Form.Control required
                        type="text"
                        id="nome"
                        name="nome"
                        value={entregador.nome}
                        onChange={manipularMudanca}/>
                        <Form.Control.Feedback type="invalid">Por favor, informe o nome do entregador!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
          <Form.Group className="mb-3" controlId="formGridTelefone">
            <Form.Label>Numero de Telefone</Form.Label>
            <Form.Control required
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={entregador.telefone}
                        onChange={manipularMudanca} />
                        <Form.Control.Feedback type="invalid">Por favor, informe o numero do entregador!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Rua:</Form.Label>
                        <Form.Control
                            type="text"
                            id="rua"
                            name="rua"
                            aria-describedby="rua"
                            value={entregador.rua}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a rua do entregador!
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Número da casa/prédio</Form.Label>
              
                        <Form.Control
                            type="text"
                            id="numeroCasa"
                            name="numeroCasa"
                            aria-describedby="numeroCasa"
                            value={entregador.numeroCasa}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o numero da casa/prédio do entregador!
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            id="cidade"
                            name="cidade"
                            aria-describedby="cidade"
                            value={entregador.cidade}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a cidade do entregador!
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Estado</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="estado">UF</InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="estado"
                            name="estado"
                            aria-describedby="estoque"
                            value={entregador.estado}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o estado que o entregador mora!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
    
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control 
              required
              type="text"
              id="dataNascimento"
              name="dataNascimento"
              value={entregador.dataNascimento}
              onChange={manipularMudanca}/>
              <Form.Control.Feedback type="invalid">Por favor, informe a data de nascimento do entregador!</Form.Control.Feedback>
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
