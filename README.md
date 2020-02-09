## Aplicação para armazenar projetos e tarefas utilizando Express.

- **POST /projects :** A rota recebe id e title dentro do corpo e cadastra um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

- **GET /projects :** A rota lista todos projetos e suas tarefas;

- **PUT /projects/:id :** A rota altera apenas o título do projeto com o id presente nos parâmetros da rota;

- **DELETE /projects/:id :** A rota deve deleta o projeto com o id presente nos parâmetros da rota;

- **POST /projects/:id/tasks :** A rota recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

## Middlewares

- **checkProjectExists -** Middleware utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorna um erro, caso contrário permite a requisição continuar normalmente;

- **logRequests -** Middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
