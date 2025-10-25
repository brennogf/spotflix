<h1 align="center">
    <br>
    Spotflix
</h1>
<h4 align="center">
  Compartilhamento de músicas baseado no site da Netflix.
</h4>
<p align="center">
  <img src="https://i.ibb.co/Jv0pFYs/Sem-t-tulo.png">
</p>

## :link: Links

- [Demonstração](https://spotflix.onrender.com/)
- [Vídeo](https://drive.google.com/file/d/1Ey4Rj4bZckln52HHouvDH3cbgxzsDvmN/preview)

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/)
- [React](https://reactjs.org/)
  
## :information_source: Como usar

Para clonar e executar este aplicativo, você precisará [Git](https://git-scm.com), [npm](https://www.npmjs.com), [Docker](https://www.docker.com), e [Node.js v12.18](https://nodejs.org/) ou superior instalado em seu computador. Na sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/brennogf/spotflix

# Prepare o banco de dados:
# Crie um .env dentro da pasta "backend" e cole:
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres?schema=spotflix

# Inicie o Docker
$ cd spotflix
$ docker-compose up -d

# Instale as dependências
$ cd frontend
$ npm install --frozen-lockfile --legacy-peer-deps
$ cd ../backend
$ npm install --frozen-lockfile --legacy-peer-deps

# Rode as migrations
$ npm run migrate

# Execute o aplicativo
$ npm run dev
```

## :memo: Licença

Este projeto está sob licença do MIT. Veja o [LICENSE](https://github.com/brennogf/spotflix/blob/master/LICENSE) para mais informações.

---

Feito com ♥ por Brenno Givigier :wave: [Entre em contato!](https://www.linkedin.com/in/brenno-givigier/)
