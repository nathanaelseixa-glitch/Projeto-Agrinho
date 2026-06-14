# Ponto de Equilíbrio

Projeto para o Concurso Agrinho 2026, subcategoria Programação Front-End.

## Tema

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.**

## Objetivo

O projeto convida o visitante a administrar uma pequena propriedade durante cinco etapas de uma safra. Em cada etapa, uma escolha altera os indicadores de produção, água, solo, biodiversidade e clima.

A proposta é mostrar que uma produção forte não depende apenas da quantidade colhida. Ela também precisa conservar os recursos que tornarão possíveis as próximas safras.

## Como usar

1. Acesse a seção "Desafio da Safra".
2. Leia o contexto apresentado em cada uma das cinco etapas.
3. Escolha uma das três atitudes disponíveis.
4. Observe a resposta do sistema e a mudança nos indicadores.
5. Avance até receber a pontuação final.
6. Consulte o histórico das decisões ou refaça o desafio.
7. Na seção final, crie um compromisso pessoal relacionado ao tema.

## Fluxo e atores

### Ator principal

O visitante assume o papel de uma pessoa responsável pelas decisões de uma propriedade rural.

### Fluxo principal

1. Preparação do solo.
2. Uso da água.
3. Proteção da lavoura.
4. Escolha da fonte de energia.
5. Transporte e aproveitamento da colheita.
6. Cálculo do resultado final.

### Lógica da pontuação

O JavaScript armazena cinco indicadores em um objeto. Cada escolha soma ou retira pontos desses indicadores. Ao final, o sistema calcula:

- a média dos quatro indicadores ambientais;
- o peso da produção e do ambiente;
- uma penalidade quando existe grande diferença entre produção e preservação.

Por isso, aumentar somente a produção não garante a melhor pontuação. O jogador precisa encontrar equilíbrio.

## Funcionalidades

- Simulador com cinco etapas e quinze escolhas possíveis.
- Manipulação do DOM para criar opções e atualizar textos.
- Indicadores visuais atualizados após cada decisão.
- Cálculo de média e pontuação com variáveis, listas, funções, laços e operadores.
- Histórico das decisões.
- Resultado com três classificações possíveis.
- Botão para reiniciar o desafio.
- Modo de alto contraste.
- Controle para aumentar o tamanho do texto.
- Preferência por movimento reduzido respeitada pelo CSS.
- Formulário validado para criar um compromisso pessoal.
- Uso de `localStorage` para guardar preferências e compromisso no navegador.
- Layout responsivo para computador, tablet e celular.

## Tecnologias

- HTML5 semântico.
- CSS3 com Flexbox, Grid, variáveis, transições e Media Queries.
- JavaScript puro, sem frameworks e sem bibliotecas.

## Estrutura de arquivos

```text
ponto-de-equilibrio/
|-- assets/
|   `-- images/
|       |-- favicon.png
|       `-- jornada-campo-escola.webp
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

## Autoria e personalização obrigatória

Esta versão foi criada como base orientada com apoio de inteligência artificial. Antes da inscrição, o estudante deve:

1. Ler e compreender todo o código.
2. Reescrever os textos com suas próprias palavras.
3. Trocar a reflexão da seção "Quatro caminhos para o equilíbrio" por uma opinião pessoal verdadeira.
4. Ajustar cores, decisões ou funcionalidades de acordo com o que aprendeu.
5. Registrar neste README quais partes foram alteradas e por quê.

Não declare como totalmente autoral algo que não foi produzido por você.

## Recurso visual gerado por IA

Arquivo: `assets/images/jornada-campo-escola.webp`

Ferramenta: gerador de imagens da OpenAI.

Prompt utilizado:

> Crie uma paisagem em miniatura isométrica mostrando a jornada de alimentos frescos de uma pequena propriedade familiar sustentável até uma escola pública de uma cidade brasileira. Mostre campos cultivados, estufa, reservatório de água da chuva, painéis solares, estrada, veículo elétrico, escola com horta e estudantes. Use estilo de diorama 3D feito de argila e papel, luz da manhã, cores naturais vivas e composição horizontal 16:9. Não inclua palavras, logotipos ou marcas d'água.

## Fontes de pesquisa

- [Embrapa - Manejo Integrado de Pragas](https://www.embrapa.br/tema-manejo-integrado-de-pragas)
- [Embrapa - Manejo do Solo](https://www.embrapa.br/tema-manejo-do-solo)
- [Agência Nacional de Águas e Saneamento Básico](https://www.gov.br/ana/pt-br)
- Regulamento do Concurso Agrinho 2026 - Categoria Programação.

## Publicação

O regulamento exige:

1. Repositório público no GitHub.
2. Arquivos HTML, CSS e JavaScript separados.
3. GitHub Pages ou Vercel publicado e declarado na seção **About** do repositório.
4. Tópico `agrinho` adicionado corretamente nos **Topics** do repositório.
5. Nome e descrição claros para o repositório.
6. Nenhuma alteração após 23h59 de 14/06/2026 até a divulgação oficial do resultado.

Nome sugerido para o repositório: `ponto-de-equilibrio-agrinho-2026`

Descrição sugerida:

> Simulador interativo sobre o equilíbrio entre produção agrícola e preservação ambiental, desenvolvido para o Agrinho 2026.
