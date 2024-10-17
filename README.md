upSusFront
Este projeto foi gerado com Angular CLI versão 18.2.8.

Descrição
O upSus é um sistema em desenvolvimento (beta) que visa otimizar o atendimento em saúde. A aplicação permite que profissionais da saúde visualizem pacientes cadastrados e, com base nas condições apresentadas, atribuam tarefas e acompanhamentos.

Pré-requisitos
Para que o upSusFront funcione corretamente, é necessário que o backend do sistema, desenvolvido em Quarkus, esteja rodando simultaneamente.

Requisitos:
Node.js e Angular CLI instalados para rodar o front-end.
Quarkus rodando para o backend.
PostgreSQL como banco de dados, conforme a estrutura do backend.
Como executar
Backend (Quarkus)
Certifique-se de que o serviço Quarkus está ativo e funcionando antes de iniciar o front-end. O backend fornecerá as APIs necessárias para listar pacientes e gerenciar tarefas.

Navegue para a pasta do projeto Quarkus:
bash
Copiar código
cd <caminho-para-o-backend>
Execute o Quarkus:
bash
Copiar código
./mvnw quarkus:dev
O backend estará disponível em http://localhost:8080.
Frontend (Angular)
Navegue até a pasta do projeto upSusFront:
bash
Copiar código
cd <caminho-para-o-upSusFront>
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:
bash
Copiar código
ng serve
Acesse a aplicação em: http://localhost:4200.
