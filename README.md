# MP3 Player

## Aplicação feita em [Electron](https://www.electronjs.org/) para tocar arquivos .mp3.

### Índice

<!--ts-->
   * [MP3 Player](#mp3-player)
   * [Índice](#índice)
   * [Status do Projeto](#status-do-projeto)
   * [Ideia inicial](#ideia-inicial)
   * [Desafios](#desafios)
   * [Rodando a aplicação](#rodando-a-aplicação)
   * [Tecnologias](#tecnologias)
   * [Contribuidores](#contribuidores)
   * [Autor](#autor)
   * [Licença](#licença)
<!--te-->

### Status do projeto: 
- 🚧Em construção🚧

### Ideia inicial:

Depois de pensar bastante tempo, pensei em criar um clone do [Spotify](https://www.spotify.com/br/), contudo me lembrei dos diversos conselhos de amigos e dos vídeos da [RocketSeat](https://rocketseat.com.br/) no youtube sobre começar simples, então pensei em criar um MP3 player bem básico.

### Desafios:

De começo, acreditei que seria bem simples... Fui enganado, tive que procurar bastante ajuda nas docs do Electron e no Stack Overflow, percebi que o Electron trabalhava utilizando *Event Emitters*, ainda bem que como já havia tido contado no meu projeto de web-socket eu já tinha uma certa familiaridade.

Após tive alguns problemas utilizando o dialog para navegar entre as pastas para inserir as músicas no programas, notei que também há uma certa dificuldade em mexer com arquivos, diferentemente de objetos.


### Rodando a aplicação

Para rodar a aplicação, é necessário ter o [git](https://git-scm.com/) e o [Node.JS](https://nodejs.org/en/) instalado em sua máquina e um editor para mexer no código (e.g [VSCode](https://code.visualstudio.com/))

```bash
# Clonando repositório
$ git clone <https://github.com/brenno3b/MP3-Player.git>

# Acesse o projeto
$ cd MP3-Player

# Instale as dependências
$ npm install electron

# Rode a aplicação
$ npm start

# E então poderá usar a aplicação livremente :)
```

### Tecnologias
- [Electron](https://www.electronjs.org/)

### Autor
---

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/32822924?s=460&u=f953be218af6e0d68b218f90e828bb21c6222de2&v=4" width="100px;" alt=""/>
<br />
<sub><b>Brenno Barbosa</b></sub></a>

Entre em contato comigo:

[![Linkedin Badge](https://img.shields.io/badge/-Brenno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brenno-barbosa-96a0841a2/)](https://www.linkedin.com/in/brenno-barbosa-96a0841a2/)
[![Gmail Badge](https://img.shields.io/badge/-brennover@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brennover@gmail.com)](mailto:brennover@gmail.com)

### Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/KernelDN"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/34862688?s=400&u=e94ee6c9e82232f10857308026a1ed1d4f9ea99d&v=4" width="100px;" alt=""/><br /><sub><b>Diego Natalo</b></sub></a><br /><a href="https://github.com/KernelDN" title="Diego Natalo">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/YuriUliam"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/21960752?s=460&u=f028ead5324269ac32b4f8e8ce1f15b80460589f&v=4" width="100px;" alt=""/><br /><sub><b>Yuri Uliam</b></sub></a><br /><a href="https://github.com/YuriUliam" title="Yuri Uliam">👨‍🚀</a></td>
  </tr>
</table>

### Licença

- [MIT](https://github.com/brenno3b/MP3-Player/blob/main/LICENSE)
