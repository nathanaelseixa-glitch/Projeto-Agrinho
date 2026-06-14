# Ponto de Equilíbrio

Projeto desenvolvido para o Concurso Agrinho 2026, subcategoria Programação Front-End.

## Tema

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.**

## Identificação

- Estudante: Nathanael Iargas Seixas
- Escola: Colégio Estadual Civico Militar Eleutério Fernandes de Andrade
- Município: Quitandinha - PR
- Série/Turma: 1ºB Agronegócio
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

> O estudante deve revisar este parágrafo e registrar sua experiência real antes da entrega.

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

### Personalizações realizadas pelo estudante

- Escolha do tema e análise das situações que compõem o desafio da safra.
- Ajustes nos textos, mensagens e reflexões apresentadas ao longo da experiência interativa.
- Testes completos das alternativas, validação das pontuações e avaliação dos resultados finais do simulador.

## Participação do professor orientador

O professor orientador acompanhou o processo pedagógico, ajudou na interpretação do tema, indicou fontes de pesquisa, fez perguntas para aprofundar a reflexão e orientou a revisão do projeto sem substituir a participação do estudante.

> Ajustar este texto para descrever somente o que realmente ocorreu durante a orientação.

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

## Publicação no GitHub Pages

1. Crie um repositório público chamado `ponto-de-equilibrio-agrinho-2026`.
2. Envie todos os arquivos mantendo a estrutura de pastas.
3. Abra **Settings > Pages**.
4. Escolha a branch principal e a pasta raiz.
5. Adicione o endereço publicado na seção **About** do repositório.
6. Adicione o tópico `agrinho` nos **Topics**.
7. Preencha a descrição do repositório.

Descrição sugerida:

> Simulador educativo sobre o equilíbrio entre produção agrícola e preservação ambiental, desenvolvido para o Agrinho 2026.

## Observação importante

Os formulários de autor e região salvam dados somente no navegador do usuário. Para que as informações apareçam para todos no GitHub Pages, substitua também os textos marcados diretamente no arquivo `index.html` antes da publicação.
