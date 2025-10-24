import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import CadastroFilme from "./pages/Cadastro/Filme";
import CadastroCategoria from "./pages/Cadastro/Categoria";
import PlayerVideo from "./pages/PlayerVideo";
import Categoria from "./pages/Categoria";

import GlobalStyle from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro/musica" component={CadastroFilme} />
        <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
        <Route exact path="/player/:id" component={PlayerVideo} />
        <Route exact path="/categoria/:categoria" component={Categoria} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
