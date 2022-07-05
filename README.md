# Instalando o projeto

primeiro rode o comando *npm install* para todas as dependencias necessárias serem instaladas

## Iniciando a aplicação

Agora rode o comando *npm start* para que o projeto seja iniciado no link: http://localhost:3000/

### Mudando o projeto ao seu gosto

Vá no arquivo .env e mude o endereço da API para a que vc deseja usar, lembrando que é um sistema de login com token, então sua api precisa estar preparada para receber
um email, senha e retornar um token.

Agora no arquivo de authProvider, modifique o recebimento dos dados para de acordo com sua API, no meu caso eu recebo o token e guardo na variavel data e o acesso os dados do JSON que minha API retornou desta forma:
data.tokens.acess

os demais dados seguem este padrão. Ex: data.user, data.email e etc.

após ter configurado para estar de acordo com a forma com que sua API envia os dados entre na pasta Home no index.tsx e também corrija o recebimento dos dados do usário
para de acordo com o objeto JSON que sua API retornar

#### Testando

Use o login e senha para acessar a página Home onde ficam os dados do suário


