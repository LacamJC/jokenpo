
# Jokenpo
Um jogo simples de jokenpo contra um algoritmo aleatório.

## Tecnologias 
- HTML
- CSS
- JavaScript

## Screenshots

<img src="screenshots/captura.png" alt="Tela inicial do jogo Jokenpo" width="50%">
<img src="screenshots/captura2.png" alt="Placar do jogo Jokenpo" width="50%">

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/LacamJC/jokenpo.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd jokenpo
   ```

3. Abra o arquivo `index.html` no seu navegador para acessar o conteúdo.

## Funcionalidades
- **Jogar Jokenpo:** Escolha entre Pedra, Papel ou Tesoura e jogue contra o algoritmo.
- **Placar:** A cada rodada, o resultado da jogada é mostrado e adicionado ao placar.
- **Reset:** O placar pode ser resetado a qualquer momento, apagando todos os resultados.

## Estrutura do Projeto

```plaintext
└── jokenpo/
    ├── README.md
    ├── index.html
    ├── style.css
    ├── js/
    │   ├── jokenpo.js
    │   └── reset.js
    └── screenshots/
        ├── captura.png
        └── captura2.png
```

## Como o Jogo Funciona

- O jogo escolhe aleatoriamente entre Pedra, Papel e Tesoura.
- O jogador também escolhe uma das opções e o vencedor é decidido com base nas regras tradicionais do Jokenpo:
  - Pedra vence Tesoura
  - Tesoura vence Papel
  - Papel vence Pedra
- O placar é atualizado a cada rodada, e o jogador pode resetar o placar quando desejar.



Feito por [LacamJC](https://github.com/LacamJC)
