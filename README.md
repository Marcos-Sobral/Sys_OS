# SysOS

O Sts OS é um projeto que estou para fins de aprendizagem sobre angula e testes.

## Especificações utilizada no projeto

<ul>
  <li>Angular: 14.3.0</li>
  <li>Angular CLI: 14.2.13</li>
  <li>Angular devKit/core: 14.2.13</li>
  <li>Material: 14</li>
  <li>Node: 20.16.0</li>
</ul>

Caso deseje verificar a sua, utilize o comando `ng version` em seu terminal do projeto.

## Problemas

### Problema na instalação ou execução do seu Angula CLI

* Para instalar o Angular CLI na versão 14:

- remova todas as dependëncias caso tiver:
`  npm uninstall -g @angular/cli `

- Verifique o cache pelo npm:
` npm cache verify `

- Instale Angular na Versáo 14:
` npm install -g @angular/cli@14`

- `Verifique a versáo do seu Angular:
` npm install -g @angular/cli@14 `

### Problema em instalar o Angula Material

* Para instalar o Material:
` ng add @angular/material@14 `

* Caso já tenha instalado e está com problemas em gerar componentes, tente atualizar
` ng update @angular/material@14 `

* caso o problema persista tente atualizar os seguintes itens:
    ---
    * Atualize o Angular Core e o Angular CLI para a versão 15.x:
    `ng update @angular/core@15 @angular/cli@15`
    * Atualize o Angular Material para a versão 15.x:
    `ng update @angular/material@15`
    ---
    * Atualize o Angular Core e o Angular CLI para a versão 16.x:
    `ng update @angular/core@16 @angular/cli@16` 
    * Atualize o Angular Material para a versão 16.x:
    `ng update @angular/material@16`

### Problema em adiciona um Json
Caso esteja tentando importar um arquivo Json para seu projeto, verifique novamente se as declarações feitas no código como também as importações estão mandando para o local exato. Após isso entre no arquivo chama `tsconfig.json` e nele haverá uma sessão denominada de `compilerOptions`, averigue se nela tem alguma importação com o nome `resolveJsonModule` e `esModuleInterop`, se houver apenas modifique seu valor para `true`. Se não houver, adicione eles na sessão:
  `"resolveJsonModule": true,`
  `"esModuleInterop": true,`

## Servidor de desenvolvimento

Execute ng serve para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Estrutura de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

## Executando testes unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando teste end-to-end

Execute `ng e2e` para executar os testes end-to-end via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de testes end-to-end.

## Mais informações

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
