# Ponto de Equilíbrio

Projeto desenvolvido para o Concurso Agrinho 2026, subcategoria Programação Front-End.

## Tema

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.**

## Identificação

- Estudante: Nathanael Iargas Seixa
- Escola: Colégip Estadual Cívico Militar Eleutério Fernandes de Andrade
- Município: Quitandinha - PR
- Série/Turma: 1ºB Agro
- Professor(a) orientador(a): Marcos Rubens Teixeira da Silva

## Objetivo do projeto

O projeto convida o visitante a administrar uma pequena propriedade durante cinco etapas de uma safra. Cada decisão altera os indicadores de produção, água, solo, biodiversidade e clima.

A proposta é mostrar que uma produção forte não depende somente da quantidade colhida. Ela também precisa conservar os recursos naturais, considerar os efeitos de longo prazo e manter condições para as próximas safras.

## Como funciona

1. O jogador lê uma situação relacionada à preparação do solo, irrigação, controle de insetos, energia ou transporte.
2. Em cada etapa existem três estratégias com vantagens e limitações.
3. A escolha altera os cinco indicadores.
4. O modo pedagógico apresenta a explicação de cada consequência.
5. Ao final, o JavaScript calcula a pontuação, desenha um gráfico radar e libera medalhas conforme o desempenho.
6. O visitante pode gerar um certificado e criar um compromisso pessoal.

## Metodologia da pontuação

O JavaScript armazena os cinco indicadores em um objeto. Cada alternativa possui um objeto de impactos, com valores positivos ou negativos.

A pontuação final considera:

- 45% da produção;
- 55% da média entre água, solo, biodiversidade e clima;
- uma penalidade quando existe grande diferença entre produção e preservação.

Essa regra impede que o jogador alcance a melhor nota aumentando apenas a produção ou apenas os indicadores ambientais. O objetivo é manter o conjunto equilibrado.

## Processo de desenvolvimento

### 1. Pesquisa

Foram consultados conteúdos sobre manejo do solo, uso consciente da água, manejo integrado de pragas, energia e redução de desperdícios.

### 2. Planejamento

As situações foram organizadas como uma safra com cinco momentos. Para cada alternativa foram pensadas vantagens, limitações e consequências.

### 3. Desenvolvimento

A página foi estruturada com HTML semântico. O CSS criou a identidade visual, a responsividade, o alto contraste e a impressão do certificado. O JavaScript controla o jogo, os indicadores, o gráfico, as conquistas e os formulários.

### 4. Testes

Foram verificados:

- funcionamento das quinze alternativas;
- cálculo da pontuação;
- atualização dos indicadores;
- modo pedagógico;
- gráfico final;
- conquistas;
- certificado;
- navegação por teclado;
- visualização em computador e celular;
- ausência de erros no console.

### 5. Publicação

Os arquivos foram organizados para funcionar diretamente no GitHub Pages, sem framework, servidor ou banco de dados.

## Tecnologias utilizadas

- HTML5 semântico.
- CSS3 com Grid, Flexbox, variáveis, Media Queries e regras de impressão.
- JavaScript puro com funções, listas, objetos, laços, eventos, Canvas, manipulação do DOM e `localStorage`.

Não foram utilizados frameworks ou bibliotecas externas.

## Funcionalidades

- Simulador com cinco etapas e quinze estratégias.
- Alternativas com vantagens e desvantagens.
- Cinco indicadores atualizados em tempo real.
- Modo de explicação pedagógica.
- Histórico de decisões.
- Gráfico radar feito com Canvas e JavaScript puro.
- Sistema de cinco conquistas.
- Certificado imprimível e opção de salvar como PDF pelo navegador.
- Página de metodologia.
- Diário de desenvolvimento.
- Seção de reflexão pessoal.
- Seções editáveis sobre o autor e sua região.
- Formulário de compromisso.
- Alto contraste.
- Aumento de fonte.
- Preferência por movimento reduzido.
- Layout responsivo.

## Aprendizados adquiridos

Antes de iniciar este projeto eu pensava principalmente na produção agrícola. Durante minhas pesquisas percebi que solo, água, biodiversidade e clima também são fundamentais para garantir a produção no futuro. Aprendi que pequenas decisões podem gerar grandes impactos e que a tecnologia pode ajudar a encontrar soluções mais sustentáveis.


## Participação do estudante

O estudante participou da pesquisa, da escolha do tema, do planejamento das situações, da revisão dos textos, dos testes, da personalização visual e da análise dos resultados do simulador.

Antes da inscrição, o estudante deve:

1. Preencher todos os campos marcados com colchetes.
2. Reescrever a apresentação e a reflexão com suas próprias palavras.
3. Descrever as atividades agrícolas de seu município.
4. Ler e compreender as funções principais do JavaScript.
5. Testar todas as alternativas.
6. Registrar abaixo as mudanças realizadas.

### Personalizações realizadas pelo estudante

## Aprendizados adquiridos

Durante o desenvolvimento deste projeto aprendi que a produção agrícola sustentável depende do equilíbrio entre produtividade e preservação ambiental. As pesquisas realizadas me ajudaram a compreender melhor a importância do manejo adequado do solo, do uso consciente da água, da preservação da biodiversidade e da redução dos impactos ambientais causados pelas atividades humanas.

Também ampliei meus conhecimentos em programação Front-End, utilizando HTML, CSS e JavaScript para criar um simulador interativo capaz de representar situações reais enfrentadas no meio rural. Além disso, desenvolvi habilidades relacionadas ao planejamento de projetos, organização de informações, resolução de problemas e testes de funcionalidades.

A realização deste trabalho mostrou como a tecnologia pode ser utilizada para conscientizar as pessoas sobre a importância de produzir alimentos de forma responsável, garantindo recursos naturais para as futuras gerações.

## Participação do estudante

O estudante participou da pesquisa sobre sustentabilidade no campo, da definição das situações apresentadas no simulador, da revisão dos conteúdos, da organização das informações, dos testes de funcionamento e da análise dos resultados obtidos durante as simulações.

Durante o desenvolvimento, colaborou na avaliação das alternativas propostas, na verificação da coerência entre as decisões e seus impactos ambientais, além de contribuir com sugestões para melhorar a experiência do usuário e a apresentação visual do projeto.

### Personalizações realizadas pelo estudante

* Adaptação e revisão dos textos utilizados nas situações e explicações pedagógicas do simulador.
* Personalização de elementos visuais, organização dos conteúdos e definição de aspectos relacionados à identidade do projeto.
* Realização de testes, validação das alternativas disponíveis e análise dos resultados gerados pelo sistema.

## Participação do professor orientador

O professor orientador acompanhou todas as etapas do desenvolvimento do projeto, auxiliando na interpretação do tema proposto pelo Concurso Agrinho, orientando as pesquisas, promovendo discussões sobre sustentabilidade e incentivando a análise crítica das consequências das decisões apresentadas no simulador.

Também contribuiu com orientações pedagógicas relacionadas à organização do projeto, revisão dos conteúdos, testes de funcionamento e aprimoramento da experiência de aprendizagem, preservando a participação ativa e a autonomia do estudante durante todo o processo.

## Declaração sobre ferramentas digitais

Este projeto foi desenvolvido pelo estudante com orientação pedagógica do professor responsável. Ferramentas digitais foram utilizadas como apoio para pesquisa, revisão, desenvolvimento e testes, contribuindo para o processo de aprendizagem. Todas as adaptações, escolhas, análises, revisões e personalizações apresentadas no trabalho foram realizadas durante o desenvolvimento do projeto, respeitando os objetivos educacionais propostos pelo Concurso Agrinho.


## Participação do professor orientador

O professor orientador acompanhou o processo pedagógico, ajudou na interpretação do tema, indicou fontes de pesquisa, fez perguntas para aprofundar a reflexão e orientou a revisão do projeto sem substituir a participação do estudante.


## Declaração sobre ferramentas digitais

Este projeto foi desenvolvido pelo estudante com orientação pedagógica do professor responsável. Ferramentas digitais foram utilizadas como apoio para pesquisa, revisão e desenvolvimento, mas todas as decisões, adaptações, testes e personalizações foram realizadas durante o processo de aprendizagem.

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