# Haute Couture
Este projeto é um aplicativo de loja de roupas desenvolvido com React Native e JavaScript, 
utilizando Firebase como banco de dados. O aplicativo permite que os usuários naveguem por uma variedade de roupas, façam compras e gerenciem seus perfis.
## Status
![Badge](https://img.shields.io/badge/status-active-brightgreen)

## Arquitetura do Projeto
### Tecnologias Utilizadas
- React Native: Framework para o desenvolvimento de aplicativos móveis.
- Firebase: Utilizado para autenticação de usuários e armazenamento de dados no Firestore.
- Expo: Ferramenta para desenvolver, construir e rodar o app facilmente em diversas plataformas.
- React Navigation: Biblioteca usada para gerenciar a navegação entre as telas.
- Firebase Authentication: Usada para gerenciar o login e cadastro dos usuários via email e senha.
- Firebase Firestore: Utilizado como banco de dados NoSQL para armazenar clientes, produtos, categorias e pedidos.
## Padrão Arquitetural
### O projeto segue o padrão MVC (Model-View-Controller):
- Model: Dados armazenados no Firebase (clientes, produtos, pedidos).
- View: Interface do usuário com componentes React Native.
- Controller: Lógica de negócios, como autenticação de usuários, adição de produtos ao carrinho e interação com o banco de dados.

## Instalação
1. Clone o repositório:
Copiar código
git clone <link-do-repositorio>
2. Instale as dependências:
npm install
3. Configure o Firebase:
Crie um projeto no Firebase, ative o Authentication e o Firestore.
Gere as credenciais e substitua no arquivo firebase.js.
4. Execute o projeto no Expo:
npm run web
## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
## Autores
- [ELOISA RAMOS](https://github.com/jeniferquinn) - Trabalho Inicial
