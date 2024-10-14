//Pagina sera a estrutura geral da aplicação

import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho.jsx";  
import Menu from "./Menu.jsx";

export default function Pagina(props){
    return(
        //isso é uma div implicita (nao é necessario digitar 'div')
        <>  
      
            <Container>
                <Cabecalho titulo="Sistema de Controle Gerencial"></Cabecalho>
                <Menu/>
                {
                    //filhos da pagina estao agrupados em um componente de atributo children
                    props.children
                }
            </Container>
        </>
    );
}