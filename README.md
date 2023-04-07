### Potência Tech Angular Developer - Powered by iFood na DIO

### Primeiros Passos com JavaScript
- Variaveis podem mudar valores
- Constante não podem mudar valores.

### Conhecendo Funções JavaScript
- Funções - Sao pequenos trechos de codigos que podemos invocar a qualquer momentos que quisermos. 

### Criando Objetos e Classes em JavaScript

### Arrays e Estruturas de Repetição em JavaScript

### Importação e Exportação com JavaScript
- Require
- Module.exports 

### Introdução ao Desenvolvimento Web com JavaScript
- npm install -g http-server
- HTML nos da parte textual e a semantica
- CSS nos da os estilos
- JavaScript é o que da o comportamento

### Criando um Projeto com HTML/CSS para Listagem de Pokemon

### Dominando o Protocolo HTTP e Integrando com a PokeAPI

### Trabalhando com Web Components no Front-end

### TypeScript para Angular
- TypeScript é SUPERSET para o JAVASCRIPT(Tipar o JS, conseguir ver erros no tempo do desenvolvimento, dá mais poder a classes, Interfaces, Enums) 
- npm install -g typescript 
- TypeScript tem o Tipo TS
- npx tsc src/index.ts
- npx tsc --init(Cria o arquivo TSCONFIG.json)
- Funções(É possivel tipar os parametros da função)
- Interfaces - São Contratos quem herdar o contrato vai seguir o que tem no contrato. 

### Introdução ao Ecossistema Angular
- Principal Framework da Google
- Framework baseado em Javascript
- Typescript como linguagem principal
- SPAs - são o seu foco
- Componentes são a base da arquitetura
- Estrutura organizada é bem definida
- Sistema de Tooling muito rico: CLI, HTTP,Router
- 4 Camadas de um Web APP(Componentes, gerenciamento de estado, roteamento, renderização)
- Componente é um elemento visual, customizavel e reutilizavel(exemplo card na tela, botão)
- Gerenciamento de estado é responsável por garantir que as informações dos componentes não estão dessincronizadas e 
  facilitar a comunicação de um componente com outro(ex: Atualizar o carrinho de compras ao clicar no botão de comprar de produto). No angular temos as ferramentas
  NGRX e NGXS
- Roteamento é responsável pela forma de navegar fazendo a troca de URL sem Recarregar a página, mudando somente os componentes que são mostrados.
- Renderização é responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto.

### Trabalhando com Componentes Angular
- Componentes é um elemento que seja visual, customizável e replicável. 
- Componente é o atomo da sua aplicação. 
- Componente é uma função JS/TS que retorna HTML, CSS e Carrega eventos Javascript junto.
- Tudo que está dentro da src(são o codigo fonte, o que vamos codar) e fora dela são arquivos de configuração. 
- Module é gavetinha onde se coloca os componentes que você vai utilizar. 

### LifeCycle Hooks Angular
- Extensão Visual Studio Code(Angular Language Service, Auto Close Tag, Auto Rename Tag, Material Icon Theme, Prettier - Code Formatter)
- npm install -g @angular/cli@14.1.2
- npm install -g @angular/cli
- ng new life-cycle
- ng serve > para executar
- ng generate component title
- Os 8 Hoocks de LifeCycle de Hooks(ngOnInit, ngOnChanges, ngDoCheck(ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit), ngOnDestroy)
- ngOnInit é executado assim que o componente nasce. 

### Single Page Application com Angular
- Diretiva são a maneira como o Angular manipula e altera a DOM dinamicamente. 
- Diretivas de atributo Alteram a aparencia ou comportamento de um elemento, componente ou outra diretiva. 
  - NgClass - Adiciona ou remove conjunto de classes CSS
  - NgStyle - Adiciona ou remove um conjunto de estilos ao HTML
  - NgModel - Adiciona vinculação de dados bidirecional a um elemento de um formulario. 
- Diretivas estruturais - Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela. 
  - NgIf - Condicional que verifica se modelo deve ser visualizado ou nao
  - NgFor - repete um elemento para cada item em uma lista
  - NgSwitch - Utilizado para alternar entre comportamentos alternativos.
  
 - ng new diretivas-proj
 - ng g c comp-atributos

### Módulos Angular
- Module é possivel guardar componentes, diretivas, pipes e services. 
- É possivel criar submodules e no module principal importar esses submodules. 
- ng g m lista
- ng g c lista/input

### Criando um Blog com Angular
- dribbble.com ideias para projetos Imagens
- Programa Just Color Picker - pegar cor de qualquer elemento na tela
- ng new angular-blog
- Tem que saber o que fazer antes de colocar a mão no codigo. 
- ng g c components/menu-bar
- ng g c components/menu-title
- ng g c components/big-card
- ng g c components/small-card
- ng g c pages/home
- ng g c pages/content

### Trabalhando com Rotas no Angular
