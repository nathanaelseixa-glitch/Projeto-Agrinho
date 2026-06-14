const stages = [
    {
        kicker: "Preparação",
        title: "Como preparar o solo?",
        context: "A análise mostrou partes compactadas e outras com boa cobertura. O calendário está apertado, então você precisa equilibrar custo, tempo e conservação.",
        season: "Preparando a terra",
        options: [
            {
                label: "Preparo convencional com correção rápida",
                description: "Revolver o solo e aplicar a correção recomendada para uniformizar a área antes do plantio.",
                tradeoff: "Agiliza o plantio e favorece a produção inicial, mas deixa a superfície mais exposta.",
                impact: { production: 10, water: -4, soil: -8, biodiversity: -3, climate: -2 },
                feedbackTitle: "Rapidez com custo ambiental",
                feedback: "A área fica pronta mais rápido, porém o revolvimento intenso reduz a proteção contra erosão e perda de umidade.",
                explanation: {
                    production: "O plantio uniforme e a correção rápida favorecem o início da cultura.",
                    water: "Solo exposto perde umidade com mais facilidade e aumenta o escoamento superficial.",
                    soil: "O revolvimento frequente pode desestruturar o solo e aumentar o risco de erosão.",
                    biodiversity: "A perturbação da superfície reduz abrigo e alimento para parte dos organismos.",
                    climate: "Mais operações com máquinas significam maior consumo de combustível."
                }
            },
            {
                label: "Plantio direto mantendo a cultura atual",
                description: "Manter a palhada e semear sem revolver, usando os equipamentos que já existem.",
                tradeoff: "Conserva melhor o solo com menor investimento, mas a pouca diversidade limita ganhos futuros.",
                impact: { production: 7, water: 6, soil: 6, biodiversity: 2, climate: 4 },
                feedbackTitle: "Proteção importante, diversidade limitada",
                feedback: "A palhada conserva água e solo. Repetir a mesma cultura, porém, aproveita menos os benefícios da rotação.",
                explanation: {
                    production: "A técnica mantém uma produção estável sem atrasar muito o calendário.",
                    water: "A palhada diminui evaporação e ajuda a água a infiltrar.",
                    soil: "A superfície protegida sofre menos erosão e impacto direto da chuva.",
                    biodiversity: "Há mais abrigo no solo, embora a repetição da cultura limite a diversidade.",
                    climate: "Menos passadas de máquinas reduzem o uso de combustível."
                }
            },
            {
                label: "Rotação planejada, cobertura e correção por área",
                description: "Usar análise de solo, plantas de cobertura e correção apenas onde for necessário.",
                tradeoff: "Exige mais planejamento e investimento inicial, mas fortalece a propriedade no longo prazo.",
                impact: { production: 7, water: 8, soil: 12, biodiversity: 8, climate: 5 },
                feedbackTitle: "Planejamento para várias safras",
                feedback: "A estratégia não busca apenas velocidade. Ela melhora a base produtiva e evita aplicar recursos onde não são necessários.",
                explanation: {
                    production: "A produção cresce de forma moderada porque parte do esforço é investida na saúde futura da área.",
                    water: "Cobertura e melhor estrutura do solo aumentam infiltração e conservação de umidade.",
                    soil: "Rotação, raízes diferentes e correção localizada melhoram estrutura e fertilidade.",
                    biodiversity: "Mais espécies cultivadas criam diferentes fontes de alimento e abrigo.",
                    climate: "A aplicação localizada e o menor número de operações evitam emissões desnecessárias."
                }
            }
        ]
    },
    {
        kicker: "Irrigação",
        title: "Como atravessar o período seco?",
        context: "A previsão indica pouca chuva por três semanas. O reservatório é limitado e a cultura está entrando em uma fase importante.",
        season: "Crescimento da lavoura",
        options: [
            {
                label: "Instalar sensores e gotejamento por setores",
                description: "Investir em sensores de umidade e aplicar água perto das raízes de cada setor.",
                tradeoff: "Economiza água e melhora o controle, mas exige investimento e manutenção.",
                impact: { production: 8, water: 12, soil: 3, biodiversity: 2, climate: 2 },
                feedbackTitle: "Dados usados para irrigar melhor",
                feedback: "A tecnologia ajuda a aplicar água no lugar e no momento necessários, sem eliminar o trabalho de acompanhamento.",
                explanation: {
                    production: "A cultura recebe água de forma regular nas fases de maior necessidade.",
                    water: "Sensores e gotejamento diminuem perdas por excesso, vento e evaporação.",
                    soil: "Menos encharcamento preserva a estrutura e reduz o carregamento de nutrientes.",
                    biodiversity: "A retirada controlada de água diminui pressão sobre ambientes próximos.",
                    climate: "A eficiência reduz o tempo de funcionamento das bombas, embora o sistema ainda consuma energia."
                }
            },
            {
                label: "Usar os aspersores existentes durante a noite",
                description: "Aproveitar o equipamento atual e irrigar em horários com menor evaporação.",
                tradeoff: "Custa menos agora e mantém boa produtividade, mas distribui água com menor precisão.",
                impact: { production: 10, water: 3, soil: 0, biodiversity: 0, climate: -1 },
                feedbackTitle: "Melhoria possível com a estrutura atual",
                feedback: "Mudar o horário reduz perdas, mas o sistema continua aplicando água de forma mais ampla que o necessário.",
                explanation: {
                    production: "A quantidade de água disponível sustenta bem o crescimento da cultura.",
                    water: "Irrigar à noite reduz evaporação, mas aspersores ainda perdem água fora da zona das raízes.",
                    soil: "O efeito depende do volume aplicado; por isso o indicador permanece estável.",
                    biodiversity: "Não há mudança significativa na diversidade da área.",
                    climate: "O equipamento existente pode exigir mais tempo de bombeamento que um sistema localizado."
                }
            },
            {
                label: "Priorizar apenas as fases críticas da cultura",
                description: "Reduzir a irrigação e concentrar a água nos momentos de maior sensibilidade.",
                tradeoff: "Poupa água e energia, mas aceita uma possível redução no rendimento.",
                impact: { production: 5, water: 9, soil: -2, biodiversity: 2, climate: 4 },
                feedbackTitle: "Economia acompanhada de risco",
                feedback: "A irrigação deficitária planejada conserva recursos, mas depende de conhecimento da cultura e pode reduzir a colheita.",
                explanation: {
                    production: "A cultura atravessa as fases principais, mas pode não alcançar o rendimento máximo.",
                    water: "O reservatório é preservado porque a aplicação se concentra nos períodos críticos.",
                    soil: "Períodos mais secos podem reduzir a cobertura e a atividade biológica superficial.",
                    biodiversity: "Menor retirada de água deixa mais recurso disponível para o ambiente.",
                    climate: "Bombas funcionando por menos tempo consomem menos energia."
                }
            }
        ]
    },
    {
        kicker: "Proteção",
        title: "Como controlar o aumento de insetos?",
        context: "O monitoramento encontrou insetos em parte da lavoura. O nível de dano está próximo do limite econômico e a colheita ainda vai demorar.",
        season: "Protegendo o cultivo",
        options: [
            {
                label: "Começar por controle biológico e reavaliar",
                description: "Liberar inimigos naturais e acompanhar a área antes de decidir por outra intervenção.",
                tradeoff: "Preserva mais organismos, mas a resposta pode ser lenta se a infestação avançar.",
                impact: { production: 5, water: 3, soil: 3, biodiversity: 12, climate: 2 },
                feedbackTitle: "A biodiversidade participa do controle",
                feedback: "O controle biológico pode reduzir a população de insetos, mas exige monitoramento para não perder o momento de agir.",
                explanation: {
                    production: "A produção recebe proteção moderada, com risco caso o controle demore.",
                    water: "Menor uso de produtos reduz o risco de resíduos alcançarem a água.",
                    soil: "Organismos do solo ficam menos expostos a aplicações amplas.",
                    biodiversity: "Inimigos naturais são valorizados e a cadeia de vida é menos afetada.",
                    climate: "Há pequena redução de operações e fabricação de insumos."
                }
            },
            {
                label: "Aplicar manejo integrado por nível de dano",
                description: "Combinar armadilhas, controle biológico e aplicação localizada somente onde o limite foi atingido.",
                tradeoff: "Exige acompanhamento constante, mas combina segurança produtiva e menor impacto.",
                impact: { production: 8, water: 4, soil: 5, biodiversity: 9, climate: 3 },
                feedbackTitle: "Intervir na medida do problema",
                feedback: "O manejo integrado usa informação para escolher onde, quando e como controlar, evitando uma resposta igual para toda a área.",
                explanation: {
                    production: "O controle localizado protege a cultura nos pontos em que o dano ameaça o rendimento.",
                    water: "Aplicações menores e direcionadas reduzem o risco de contaminação.",
                    soil: "A menor quantidade de produto diminui impactos sobre organismos e processos do solo.",
                    biodiversity: "Áreas sem necessidade de intervenção mantêm inimigos naturais e polinizadores.",
                    climate: "Menos aplicações diminuem combustível e energia usados na operação."
                }
            },
            {
                label: "Fazer aplicação preventiva em toda a área",
                description: "Controlar rapidamente os insetos antes que o dano aumente.",
                tradeoff: "Traz maior previsibilidade para a produção, mas também atinge áreas sem necessidade.",
                impact: { production: 11, water: -7, soil: -5, biodiversity: -13, climate: -3 },
                feedbackTitle: "Segurança imediata, impacto espalhado",
                feedback: "A resposta protege a colheita no curto prazo, porém não diferencia os locais realmente afetados.",
                explanation: {
                    production: "O controle rápido reduz o risco de perda causada pelos insetos.",
                    water: "Uma aplicação ampla aumenta a possibilidade de resíduos serem transportados pela chuva.",
                    soil: "Mais produto chega à superfície e pode afetar organismos não alvo.",
                    biodiversity: "Insetos benéficos e inimigos naturais também podem ser atingidos.",
                    climate: "Produção, transporte e aplicação de maior quantidade de insumo consomem energia."
                }
            }
        ]
    },
    {
        kicker: "Energia",
        title: "Como reduzir o custo energético?",
        context: "A conta de energia aumentou e parte dos equipamentos está envelhecida. Há resíduos orgânicos disponíveis, mas o orçamento é limitado.",
        season: "Operação da propriedade",
        options: [
            {
                label: "Financiar painéis solares em etapas",
                description: "Trocar primeiro os equipamentos mais ineficientes e ampliar a geração solar aos poucos.",
                tradeoff: "Reduz emissões gradualmente, mas cria compromisso financeiro por alguns anos.",
                impact: { production: 6, water: 1, soil: 1, biodiversity: 1, climate: 10 },
                feedbackTitle: "Transição planejada",
                feedback: "A propriedade melhora a eficiência antes de ampliar a geração, evitando instalar um sistema maior que o necessário.",
                explanation: {
                    production: "Equipamentos mais eficientes reduzem paradas e mantêm a operação.",
                    water: "Bombas eficientes podem usar menos energia para entregar a mesma quantidade de água.",
                    soil: "O efeito direto é pequeno, por isso o indicador quase não muda.",
                    biodiversity: "A instalação em estruturas existentes evita ocupar novas áreas.",
                    climate: "Eficiência e fonte solar diminuem o uso de energia com maior emissão."
                }
            },
            {
                label: "Manter a rede e trocar apenas motores críticos",
                description: "Investir nos motores que mais consomem, mantendo o restante da estrutura.",
                tradeoff: "Tem custo menor e resultado rápido, mas reduz as emissões de forma limitada.",
                impact: { production: 8, water: 2, soil: 0, biodiversity: 0, climate: 4 },
                feedbackTitle: "Eficiência com alcance limitado",
                feedback: "A troca dos maiores consumidores melhora a operação, embora a fonte de energia continue a mesma.",
                explanation: {
                    production: "Motores novos aumentam confiabilidade e eficiência da atividade.",
                    water: "Bombas mais eficientes melhoram o controle da irrigação.",
                    soil: "A decisão não altera diretamente o manejo do solo.",
                    biodiversity: "Não há mudança significativa nos habitats da propriedade.",
                    climate: "O consumo cai, mas a matriz de energia permanece igual."
                }
            },
            {
                label: "Produzir biogás e manter a rede como apoio",
                description: "Aproveitar resíduos orgânicos em um biodigestor e usar a rede nos períodos de maior demanda.",
                tradeoff: "Transforma resíduos em energia e adubo, mas exige controle técnico e manutenção.",
                impact: { production: 7, water: 0, soil: 4, biodiversity: 3, climate: 12 },
                feedbackTitle: "Resíduo transformado em recurso",
                feedback: "O biodigestor pode gerar energia e biofertilizante, desde que seja operado corretamente para evitar vazamentos e perdas.",
                explanation: {
                    production: "A geração própria dá mais segurança para atividades essenciais.",
                    water: "O sistema precisa de manejo cuidadoso; por isso o indicador permanece estável.",
                    soil: "O material tratado pode retornar como biofertilizante quando usado com orientação.",
                    biodiversity: "O tratamento adequado reduz o descarte de resíduos no ambiente.",
                    climate: "Capturar o gás dos resíduos evita emissões e substitui parte da energia comprada."
                }
            }
        ]
    },
    {
        kicker: "Destino",
        title: "Como entregar a colheita à comunidade?",
        context: "A escola e o comércio local fizeram pedidos diferentes. Parte dos alimentos está fora do padrão visual, mas continua própria para consumo.",
        season: "Colheita e entrega",
        options: [
            {
                label: "Organizar rota coletiva com outros produtores",
                description: "Agrupar pedidos, dividir o transporte e incluir alimentos fora do padrão em kits e refeições.",
                tradeoff: "Reduz viagens e desperdício, mas exige acordo de horários e organização entre propriedades.",
                impact: { production: 8, water: 3, soil: 2, biodiversity: 4, climate: 10 },
                feedbackTitle: "Cooperação que aproveita a safra",
                feedback: "Planejamento coletivo aumenta o aproveitamento dos alimentos e reduz veículos percorrendo a mesma rota.",
                explanation: {
                    production: "Mais alimentos encontram destino e geram retorno para os produtores.",
                    water: "A água usada para produzir itens fora do padrão deixa de ser desperdiçada.",
                    soil: "Aproveitar a colheita valoriza todo o trabalho feito na terra.",
                    biodiversity: "O melhor aproveitamento reduz pressão para ampliar a área produzida.",
                    climate: "Cargas agrupadas diminuem a quantidade de viagens."
                }
            },
            {
                label: "Fazer entregas próprias e frequentes",
                description: "Usar veículo refrigerado para atender rapidamente cada pedido e controlar a qualidade.",
                tradeoff: "Oferece flexibilidade e reduz perdas no transporte, mas aumenta viagens e custo energético.",
                impact: { production: 11, water: 1, soil: 0, biodiversity: 0, climate: -7 },
                feedbackTitle: "Qualidade com mais deslocamentos",
                feedback: "A cadeia refrigerada protege os alimentos, mas entregas pequenas e frequentes elevam o consumo de energia.",
                explanation: {
                    production: "Entrega rápida e conservação aumentam o valor e reduzem perdas comerciais.",
                    water: "Há pequeno ganho porque menos alimentos estragam.",
                    soil: "A escolha de transporte não muda diretamente o solo.",
                    biodiversity: "O efeito direto na propriedade é pequeno.",
                    climate: "Refrigeração e maior número de viagens elevam o gasto energético."
                }
            },
            {
                label: "Processar parte da produção na propriedade",
                description: "Transformar excedentes em molhos ou conservas e entregar em menos viagens.",
                tradeoff: "Aumenta a durabilidade e o valor, mas exige água, energia e cuidados sanitários.",
                impact: { production: 9, water: -2, soil: 1, biodiversity: 2, climate: 4 },
                feedbackTitle: "Valor agregado com novos cuidados",
                feedback: "O processamento evita descarte e reduz viagens, mas precisa controlar o consumo de água e energia.",
                explanation: {
                    production: "Produtos com maior duração podem ser vendidos depois e aproveitam o excedente.",
                    water: "Higienização e processamento aumentam o consumo de água.",
                    soil: "O aproveitamento reduz o descarte do que foi produzido na terra.",
                    biodiversity: "Menos desperdício diminui a pressão por produzir em novas áreas.",
                    climate: "Menos viagens compensam parte da energia usada no processamento."
                }
            }
        ]
    }
];

const initialMetrics = {
    production: 40,
    water: 60,
    soil: 60,
    biodiversity: 60,
    climate: 60
};

const metricNames = {
    production: "Produção",
    water: "Água",
    soil: "Solo",
    biodiversity: "Biodiversidade",
    climate: "Clima"
};

const achievements = [
    { icon: "🌱", title: "Protetor do Solo", description: "Terminou com pelo menos 75 pontos de solo.", test: (score) => metrics.soil >= 75 },
    { icon: "💧", title: "Guardião da Água", description: "Terminou com pelo menos 75 pontos de água.", test: (score) => metrics.water >= 75 },
    { icon: "🌎", title: "Defensor do Clima", description: "Terminou com pelo menos 75 pontos de clima.", test: (score) => metrics.climate >= 75 },
    { icon: "🚜", title: "Produtor Consciente", description: "Manteve produção e ambiente acima de 65.", test: (score) => metrics.production >= 65 && getEnvironmentAverage() >= 65 },
    { icon: "🏆", title: "Mestre do Equilíbrio", description: "Alcançou 80 pontos e nenhum indicador ficou abaixo de 70.", test: (score) => score >= 80 && Math.min(...Object.values(metrics)) >= 70 }
];

let currentStage = 0;
let metrics = { ...initialMetrics };
let decisions = [];
let choiceLocked = false;
let pedagogicalMode = false;
let lastScore = 0;
let chartResizeTimer;

const elements = {
    stageCounter: document.querySelector("#stage-counter"),
    stageDots: document.querySelector("#stage-dots"),
    missionKicker: document.querySelector("#mission-kicker"),
    missionTitle: document.querySelector("#mission-title"),
    missionContext: document.querySelector("#mission-context"),
    choiceList: document.querySelector("#choice-list"),
    feedback: document.querySelector("#feedback"),
    feedbackTitle: document.querySelector("#feedback-title"),
    feedbackText: document.querySelector("#feedback-text"),
    pedagogicalFeedback: document.querySelector("#pedagogical-feedback"),
    impactExplanation: document.querySelector("#impact-explanation"),
    pedagogicalToggle: document.querySelector("#pedagogical-toggle"),
    pedagogicalGuide: document.querySelector("#pedagogical-guide"),
    nextButton: document.querySelector("#next-button"),
    missionContent: document.querySelector("#mission-content"),
    result: document.querySelector("#result"),
    scoreValue: document.querySelector("#score-value"),
    resultTitle: document.querySelector("#result-title"),
    resultMessage: document.querySelector("#result-message"),
    finalProduction: document.querySelector("#final-production"),
    finalEnvironment: document.querySelector("#final-environment"),
    restartButton: document.querySelector("#restart-button"),
    seasonBadge: document.querySelector("#season-badge"),
    environmentAverage: document.querySelector("#environment-average"),
    farmVisual: document.querySelector("#farm-visual"),
    visualStatusLabel: document.querySelector("#visual-status-label"),
    decisionLog: document.querySelector("#decision-log"),
    radarChart: document.querySelector("#radar-chart"),
    chartFallback: document.querySelector("#chart-fallback"),
    achievementsList: document.querySelector("#achievements-list"),
    certificate: document.querySelector("#certificate"),
    certificateButton: document.querySelector("#certificate-button"),
    certificateForm: document.querySelector("#certificate-form"),
    certificateName: document.querySelector("#certificate-name"),
    certificatePerson: document.querySelector("#certificate-person"),
    certificateScore: document.querySelector("#certificate-score"),
    pdfCertificate: document.querySelector("#pdf-certificate"),
    printHelp: document.querySelector("#print-help"),
    contrastToggle: document.querySelector("#contrast-toggle"),
    fontToggle: document.querySelector("#font-toggle"),
    commitmentForm: document.querySelector("#commitment-form"),
    commitmentOutput: document.querySelector("#commitment-output"),
    commitmentText: document.querySelector("#commitment-text"),
    authorForm: document.querySelector("#author-form"),
    regionForm: document.querySelector("#region-form")
};

function clamp(value) {
    return Math.max(0, Math.min(100, value));
}

function readStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        // O projeto continua funcional mesmo quando o navegador bloqueia armazenamento.
    }
}

function getEnvironmentAverage() {
    const values = [metrics.water, metrics.soil, metrics.biodiversity, metrics.climate];
    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function renderStageDots() {
    elements.stageDots.replaceChildren();

    stages.forEach((stage, index) => {
        const dot = document.createElement("span");

        if (index < currentStage) {
            dot.classList.add("is-done");
        } else if (index === currentStage) {
            dot.classList.add("is-current");
        }

        elements.stageDots.append(dot);
    });
}

function renderStage() {
    const stage = stages[currentStage];
    choiceLocked = false;

    elements.stageCounter.textContent = `Etapa ${currentStage + 1} de ${stages.length}`;
    elements.missionKicker.textContent = stage.kicker;
    elements.missionTitle.textContent = stage.title;
    elements.missionContext.textContent = stage.context;
    elements.seasonBadge.textContent = stage.season;
    elements.choiceList.replaceChildren();
    elements.feedback.hidden = true;
    elements.pedagogicalFeedback.hidden = true;
    elements.nextButton.hidden = true;
    elements.nextButton.firstChild.textContent = currentStage === stages.length - 1
        ? "Ver resultado "
        : "Próxima etapa ";

    stage.options.forEach((option, optionIndex) => {
        const button = document.createElement("button");
        const letter = String.fromCharCode(65 + optionIndex);

        button.type = "button";
        button.className = "choice-button";
        button.dataset.optionIndex = optionIndex;
        button.innerHTML = `
            <span class="choice-letter" aria-hidden="true">${letter}</span>
            <span class="choice-copy">
                <strong>${option.label}</strong>
                <small>${option.description}</small>
                <span class="choice-tradeoff">${option.tradeoff}</span>
            </span>
        `;
        button.addEventListener("click", () => selectOption(optionIndex));
        elements.choiceList.append(button);
    });

    renderStageDots();
}

function renderImpactExplanation(option) {
    elements.impactExplanation.replaceChildren();

    Object.keys(metricNames).forEach((metric) => {
        const term = document.createElement("dt");
        const description = document.createElement("dd");
        const change = option.impact[metric];
        const sign = change > 0 ? "+" : "";

        term.textContent = `${metricNames[metric]} (${sign}${change})`;
        description.textContent = option.explanation[metric];
        elements.impactExplanation.append(term, description);
    });
}

function selectOption(optionIndex) {
    if (choiceLocked) {
        return;
    }

    choiceLocked = true;
    const option = stages[currentStage].options[optionIndex];

    Object.entries(option.impact).forEach(([metric, change]) => {
        metrics[metric] = clamp(metrics[metric] + change);
    });

    decisions.push({
        stage: stages[currentStage].kicker,
        choice: option.label,
        impact: { ...option.impact }
    });

    document.querySelectorAll(".choice-button").forEach((button, index) => {
        button.disabled = true;
        button.classList.toggle("is-selected", index === optionIndex);
    });

    elements.feedbackTitle.textContent = option.feedbackTitle;
    elements.feedbackText.textContent = option.feedback;
    renderImpactExplanation(option);
    elements.feedback.hidden = false;
    elements.pedagogicalFeedback.hidden = !pedagogicalMode;
    elements.nextButton.hidden = false;

    updateMetrics();
    updateDecisionLog();
    elements.feedback.focus();
}

function updateMetrics() {
    Object.entries(metrics).forEach(([metric, value]) => {
        const metricElement = document.querySelector(`[data-metric="${metric}"]`);
        const valueElement = document.querySelector(`#${metric}-value`);
        const track = metricElement.querySelector(".metric-track");
        const fill = metricElement.querySelector(".metric-fill");

        valueElement.textContent = value;
        track.setAttribute("aria-valuenow", value);
        fill.style.setProperty("--value", `${value}%`);
    });

    const environment = getEnvironmentAverage();
    elements.environmentAverage.textContent = `${environment}%`;
    elements.farmVisual.classList.remove("is-warning", "is-critical", "is-thriving");

    if (environment >= 78) {
        elements.farmVisual.classList.add("is-thriving");
        elements.visualStatusLabel.textContent = "A propriedade está ganhando equilíbrio";
    } else if (environment < 40) {
        elements.farmVisual.classList.add("is-critical");
        elements.visualStatusLabel.textContent = "Os recursos ambientais estão em risco";
    } else if (environment < 58) {
        elements.farmVisual.classList.add("is-warning");
        elements.visualStatusLabel.textContent = "A propriedade apresenta sinais de alerta";
    } else {
        elements.visualStatusLabel.textContent = "A propriedade está estável";
    }
}

function formatImpact(impact) {
    return Object.entries(impact)
        .map(([metric, value]) => `${metricNames[metric]} ${value > 0 ? "+" : ""}${value}`)
        .join(", ");
}

function updateDecisionLog() {
    elements.decisionLog.replaceChildren();

    decisions.forEach((decision) => {
        const item = document.createElement("li");
        const title = document.createElement("strong");
        const details = document.createElement("span");

        title.textContent = `${decision.stage}: ${decision.choice}`;
        details.textContent = formatImpact(decision.impact);
        item.append(title, details);
        elements.decisionLog.append(item);
    });
}

function calculateScore() {
    const environment = getEnvironmentAverage();
    const differencePenalty = Math.abs(metrics.production - environment) * 0.15;
    return clamp(Math.round((metrics.production * 0.45) + (environment * 0.55) - differencePenalty));
}

function renderAchievements(score) {
    elements.achievementsList.replaceChildren();

    achievements.forEach((achievement) => {
        const earned = achievement.test(score);
        const item = document.createElement("article");
        item.className = `achievement${earned ? " is-earned" : ""}`;
        item.innerHTML = `
            <span class="achievement-icon" aria-hidden="true">${achievement.icon}</span>
            <div>
                <strong>${achievement.title}</strong>
                <small>${earned ? "Conquista desbloqueada" : achievement.description}</small>
            </div>
        `;
        elements.achievementsList.append(item);
    });
}

function renderChartFallback() {
    elements.chartFallback.replaceChildren();

    Object.entries(metrics).forEach(([metric, value]) => {
        const item = document.createElement("li");
        item.innerHTML = `<span>${metricNames[metric]}</span><strong>${value}</strong>`;
        elements.chartFallback.append(item);
    });
}

// Desenha um gráfico radar responsivo usando somente a API Canvas.
function drawRadarChart() {
    if (elements.result.hidden) {
        return;
    }

    const canvas = elements.radarChart;
    const context = canvas.getContext("2d");
    const width = Math.max(280, Math.floor(canvas.clientWidth || 460));
    const height = Math.floor(width * 0.76);
    const scale = window.devicePixelRatio || 1;
    const styles = getComputedStyle(document.body);
    const lineColor = styles.getPropertyValue("--line").trim();
    const inkColor = styles.getPropertyValue("--ink").trim();
    const forestColor = styles.getPropertyValue("--forest").trim();
    const tomatoColor = styles.getPropertyValue("--tomato").trim();
    const labels = Object.values(metricNames);
    const values = Object.values(metrics);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.32;
    const sides = labels.length;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, width, height);
    context.lineJoin = "round";

    for (let level = 1; level <= 5; level += 1) {
        context.beginPath();
        labels.forEach((label, index) => {
            const angle = (-Math.PI / 2) + (index * Math.PI * 2 / sides);
            const levelRadius = radius * level / 5;
            const x = centerX + Math.cos(angle) * levelRadius;
            const y = centerY + Math.sin(angle) * levelRadius;

            if (index === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        });
        context.closePath();
        context.strokeStyle = lineColor;
        context.lineWidth = 1;
        context.stroke();
    }

    labels.forEach((label, index) => {
        const angle = (-Math.PI / 2) + (index * Math.PI * 2 / sides);
        const edgeX = centerX + Math.cos(angle) * radius;
        const edgeY = centerY + Math.sin(angle) * radius;
        const labelX = centerX + Math.cos(angle) * (radius + 30);
        const labelY = centerY + Math.sin(angle) * (radius + 30);

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(edgeX, edgeY);
        context.strokeStyle = lineColor;
        context.stroke();

        context.fillStyle = inkColor;
        context.font = "700 12px Trebuchet MS, sans-serif";
        context.textAlign = labelX < centerX - 10 ? "right" : labelX > centerX + 10 ? "left" : "center";
        context.textBaseline = labelY < centerY ? "bottom" : "top";
        context.fillText(label, labelX, labelY);
    });

    context.beginPath();
    values.forEach((value, index) => {
        const angle = (-Math.PI / 2) + (index * Math.PI * 2 / sides);
        const valueRadius = radius * value / 100;
        const x = centerX + Math.cos(angle) * valueRadius;
        const y = centerY + Math.sin(angle) * valueRadius;

        if (index === 0) {
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
        }
    });
    context.closePath();
    context.fillStyle = `${forestColor}55`;
    context.strokeStyle = tomatoColor;
    context.lineWidth = 3;
    context.fill();
    context.stroke();

    values.forEach((value, index) => {
        const angle = (-Math.PI / 2) + (index * Math.PI * 2 / sides);
        const valueRadius = radius * value / 100;
        const x = centerX + Math.cos(angle) * valueRadius;
        const y = centerY + Math.sin(angle) * valueRadius;

        context.beginPath();
        context.arc(x, y, 4, 0, Math.PI * 2);
        context.fillStyle = tomatoColor;
        context.fill();
    });
}

function showResult() {
    const environment = getEnvironmentAverage();
    const score = calculateScore();
    let title;
    let message;

    lastScore = score;

    if (score >= 80 && metrics.production >= 65 && environment >= 65) {
        title = "Safra em equilíbrio";
        message = "Você combinou produtividade e conservação sem abandonar os limites da propriedade. Nenhuma escolha resolveu tudo sozinha: o resultado veio do conjunto.";
    } else if (score >= 60) {
        title = "Equilíbrio em construção";
        message = "Sua safra avançou, mas alguns indicadores ficaram distantes. Reveja o histórico e procure decisões que distribuam melhor os benefícios e os custos.";
    } else {
        title = "Sinal de alerta";
        message = "A propriedade terminou com recursos importantes sob pressão. Uma decisão pode parecer vantajosa agora e criar dificuldades para as próximas safras.";
    }

    elements.missionContent.hidden = true;
    elements.result.hidden = false;
    elements.scoreValue.textContent = score;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.finalProduction.textContent = `${metrics.production}%`;
    elements.finalEnvironment.textContent = `${environment}%`;
    elements.certificateScore.textContent = score;
    elements.seasonBadge.textContent = "Safra concluída";
    renderAchievements(score);
    renderChartFallback();

    requestAnimationFrame(() => {
        drawRadarChart();
        elements.resultTitle.focus();
    });
}

function goToNextStage() {
    if (currentStage < stages.length - 1) {
        currentStage += 1;
        renderStage();
    } else {
        showResult();
    }
}

function restartChallenge() {
    currentStage = 0;
    metrics = { ...initialMetrics };
    decisions = [];
    choiceLocked = false;
    lastScore = 0;

    elements.result.hidden = true;
    elements.certificate.hidden = true;
    elements.missionContent.hidden = false;
    elements.decisionLog.innerHTML = "<li>Nenhuma decisão tomada ainda.</li>";
    updateMetrics();
    renderStage();
    document.querySelector("#desafio").scrollIntoView({ behavior: "smooth" });
}

function togglePedagogicalMode() {
    pedagogicalMode = !pedagogicalMode;
    document.body.classList.toggle("pedagogical-mode", pedagogicalMode);
    elements.pedagogicalToggle.setAttribute("aria-pressed", pedagogicalMode);
    elements.pedagogicalGuide.hidden = !pedagogicalMode;

    if (!elements.feedback.hidden) {
        elements.pedagogicalFeedback.hidden = !pedagogicalMode;
    }

    writeStorage("pontoEquilibrioPedagogical", pedagogicalMode);
}

function applySavedPreferences() {
    const contrastEnabled = readStorage("pontoEquilibrioContrast") === "true";
    const largeTextEnabled = readStorage("pontoEquilibrioLargeText") === "true";
    pedagogicalMode = readStorage("pontoEquilibrioPedagogical") === "true";

    document.body.dataset.theme = contrastEnabled ? "contrast" : "";
    document.body.classList.toggle("large-text", largeTextEnabled);
    document.body.classList.toggle("pedagogical-mode", pedagogicalMode);
    elements.contrastToggle.setAttribute("aria-pressed", contrastEnabled);
    elements.fontToggle.setAttribute("aria-pressed", largeTextEnabled);
    elements.pedagogicalToggle.setAttribute("aria-pressed", pedagogicalMode);
    elements.pedagogicalGuide.hidden = !pedagogicalMode;
}

function toggleContrast() {
    const enabled = document.body.dataset.theme !== "contrast";
    document.body.dataset.theme = enabled ? "contrast" : "";
    elements.contrastToggle.setAttribute("aria-pressed", enabled);
    writeStorage("pontoEquilibrioContrast", enabled);
    drawRadarChart();
}

function toggleFontSize() {
    const enabled = !document.body.classList.contains("large-text");
    document.body.classList.toggle("large-text", enabled);
    elements.fontToggle.setAttribute("aria-pressed", enabled);
    writeStorage("pontoEquilibrioLargeText", enabled);
}

function showCertificate() {
    elements.certificate.hidden = false;
    const visitorName = document.querySelector("#visitor-name").value.trim();

    if (visitorName && !elements.certificateName.value) {
        elements.certificateName.value = visitorName;
        elements.certificatePerson.textContent = visitorName;
    }

    elements.certificate.scrollIntoView({ behavior: "smooth", block: "start" });
}

function printCertificate(event) {
    event.preventDefault();
    const name = elements.certificateName.value.trim();

    if (!name) {
        elements.certificateName.focus();
        return;
    }

    elements.certificatePerson.textContent = name;
    elements.certificateScore.textContent = lastScore;
    document.body.classList.add("printing-certificate");
    window.print();
}

function downloadCertificate() {
    const name = elements.certificateName.value.trim();

    if (!name) {
        elements.certificateName.focus();
        elements.printHelp.textContent = "Digite o nome antes de criar o PDF.";
        return;
    }

    elements.printHelp.textContent = "Na janela aberta, escolha o destino “Salvar como PDF”.";
    printCertificate(new Event("submit"));
}

function saveCommitment(event) {
    event.preventDefault();
    const formData = new FormData(elements.commitmentForm);
    const name = formData.get("visitorName").trim();
    const action = formData.get("visitorAction");

    if (!name || !action) {
        return;
    }

    const message = `${name}, eu me comprometo a ${action}. Equilíbrio também começa nas minhas escolhas.`;
    elements.commitmentText.textContent = message;
    elements.commitmentOutput.hidden = false;
    writeStorage("pontoEquilibrioCommitment", message);

    if (!elements.certificateName.value) {
        elements.certificateName.value = name;
        elements.certificatePerson.textContent = name;
    }
}

function loadCommitment() {
    const savedCommitment = readStorage("pontoEquilibrioCommitment");

    if (savedCommitment) {
        elements.commitmentText.textContent = savedCommitment;
        elements.commitmentOutput.hidden = false;
    }
}

function updateText(selector, value) {
    document.querySelector(selector).textContent = value;
}

function saveAuthor(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(elements.authorForm));

    updateText("#author-name-display", data.authorName);
    updateText("#author-school-display", data.authorSchool);
    updateText("#author-city-display", data.authorCity);
    updateText("#author-class-display", data.authorClass);
    updateText("#teacher-display", data.teacherName);
    updateText("#author-presentation", data.authorBio);
    writeStorage("pontoEquilibrioAuthor", JSON.stringify(data));
}

function loadAuthor() {
    const saved = readStorage("pontoEquilibrioAuthor");

    if (!saved) {
        return;
    }

    try {
        const data = JSON.parse(saved);

        Object.entries(data).forEach(([name, value]) => {
            const field = elements.authorForm.elements[name];
            if (field) {
                field.value = value;
            }
        });

        updateText("#author-name-display", data.authorName);
        updateText("#author-school-display", data.authorSchool);
        updateText("#author-city-display", data.authorCity);
        updateText("#author-class-display", data.authorClass);
        updateText("#teacher-display", data.teacherName);
        updateText("#author-presentation", data.authorBio);
    } catch (error) {
        // Ignora dados antigos inválidos.
    }
}

function saveRegion(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(elements.regionForm));

    updateText("#region-municipality", data.municipality);
    updateText("#region-activities", data.activities);
    updateText("#region-relationship", data.communityRelation);
    writeStorage("pontoEquilibrioRegion", JSON.stringify(data));
}

function loadRegion() {
    const saved = readStorage("pontoEquilibrioRegion");

    if (!saved) {
        return;
    }

    try {
        const data = JSON.parse(saved);

        Object.entries(data).forEach(([name, value]) => {
            const field = elements.regionForm.elements[name];
            if (field) {
                field.value = value;
            }
        });

        updateText("#region-municipality", data.municipality);
        updateText("#region-activities", data.activities);
        updateText("#region-relationship", data.communityRelation);
    } catch (error) {
        // Ignora dados antigos inválidos.
    }
}

elements.nextButton.addEventListener("click", goToNextStage);
elements.restartButton.addEventListener("click", restartChallenge);
elements.pedagogicalToggle.addEventListener("click", togglePedagogicalMode);
elements.contrastToggle.addEventListener("click", toggleContrast);
elements.fontToggle.addEventListener("click", toggleFontSize);
elements.certificateButton.addEventListener("click", showCertificate);
elements.certificateForm.addEventListener("submit", printCertificate);
elements.pdfCertificate.addEventListener("click", downloadCertificate);
elements.certificateName.addEventListener("input", (event) => {
    elements.certificatePerson.textContent = event.target.value.trim() || "participante";
});
elements.commitmentForm.addEventListener("submit", saveCommitment);
elements.authorForm.addEventListener("submit", saveAuthor);
elements.regionForm.addEventListener("submit", saveRegion);

window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-certificate");
});

window.addEventListener("resize", () => {
    clearTimeout(chartResizeTimer);
    chartResizeTimer = setTimeout(drawRadarChart, 160);
});

applySavedPreferences();
loadCommitment();
loadAuthor();
loadRegion();
updateMetrics();
renderStage();
