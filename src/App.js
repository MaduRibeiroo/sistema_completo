
import TelaCadProdutos from "./componentes/Telas/TelaCadProdutos";
import TelaCadCategorias from "./componentes/Telas/TelaCadCategorias";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import TelaCadEntregadores from "./componentes/Telas/TelaCadEntregadores";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastroCliente from "./componentes/Telas/TelaCadastroCliente";
import TelaCadastroFornecedor from "./componentes/Telas/TelaCadastroFornecedor";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/cliente" element={<TelaCadastroCliente />} />
          <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
          <Route path="/produto" element={<TelaCadProdutos />} />
          <Route path="/categoria" element={<TelaCadCategorias />} />
          <Route path="/entregadores" element={<TelaCadEntregadores />} />
          <Route path="/usuarios" element={<TelaCadastroUsuario />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
