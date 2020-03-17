# ts_node_es6_postgres
    https://github.com/fernandoathaide/ts_node_es6_postgres.git

# TypeScript, Node, ES6 e Postgres - CRIE PROJETOS DO ZERO!
    https://www.udemy.com/course/typescript-na-pratica-criando-aplicacoes-web-com-typescript/learn/lecture/7104224?start=0#overview

# Exemplos de TypeScript
    https://www.typescriptlang.org/play/index.html

# NPM
    npm init - Inicia um projeto criando o package.json
    npm install <pacote> instala um pacote ou todos que estão listados no package.json se aplicado apenas o 'npm install'
    npm unistall <pacote> remove um pacote
    npm update atualiza pacotes no package.json
    npm i -g <pacote> instala de maneira global no SO
    npm i <pacote> -S instala e salva como dependência --save
    npm i <pacote> -D instala como dependência do Desenvolvimento

# Comandos Iniciais
npm i typescript -g
sudo apt install postgresql postgresql-contrib
    #sudo -u postgres psql -c "SELECT version();"
    #sudo su - postgres
    #psql
    \q para sair

    Alterar a senha do POSTGRES 
    alter user postgres with password 'senha';

isntall dbeaver para gerenciar os bancos de dados

## Pugins para VS-Code
    jakethashi.vscode-angular2-emmet
    angular.ng-template
    hridoy.angular-snippets
    natewallace.angular2-inline
    infinity1207.angular2-switcher
    formulahendry.auto-close-tag
    coenraads.bracket-pair-colorizer
    anseki.vscode-color
    pranaygp.vscode-css-peek
    msjsdiag.debugger-for-chrome
    firefox-devtools.vscode-firefox-debug
    ms-azuretools.vscode-docker
    formulahendry.docker-explorer
    editorconfig.editorconfig
    abusaidm.html-snippets
    zignd.html-css-class-completion
    leizongmin.node-module-intellisense
    eg2.vscode-npm-script
    christian-kohler.path-intellisense
    johnpapa.vscode-peacock
    mommemi.tscompileonsave
    ms-vscode.vscode-typescript-tslint-plugin
    morissonmaciel.typescript-auto-compiler
    rbbit.typescript-hero
    vscode-icons-team.vscode-icons
    auchenberg.vscode-browser-preview
    Swagger Viewer


# colocar em .bashrc para configurar saida do proxy 

http_proxy=http://juniorjwo:444425631003Ju%40@proxybrasilia.intraer:8080/
https_proxy=http://juniorjwo:444425631003Ju%40@proxybrasilia.intraer:8080/


# instalar o nvm

wget  https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash


# instalar node 12.3

 nvm install v12.13.0


# instalar nodemon

npm install -g nodemon
	
# instalar o visual Code

sudo apt update
sudo apt install software-properties-common apt-transport-https curl
curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code

# configurar proxy repositório GIT

git config --global http.proxy http_proxy=http://juniorjwo:444425631003Ju%40@proxybrasilia.intraer:8080
git config --global http.proxy http_proxy=https://juniorjwo:444425631003Ju%40@proxybrasilia.intraer:8080

# configurar name.user
git config --global user.name "juniorjwo"


# configurar email.user
git config --global user.email "juniorjwo"