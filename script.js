const stages = [
    {
        kicker: "Preparação",
        title: "O que fazer com o solo?",
        context: "A área está pronta para o plantio. Você precisa decidir como preparar a terra pensando na colheita atual e nas próximas.",
        season: "Preparando a terra",
        options: [
            {
                label: "Repetir uma única cultura",
                description: "É mais simples agora, mas deixa o sistema agrícola menos diverso.",
                impact: { production: 11, water: -3, soil: -13, biodiversity: -11, climate: -2 },
                feedbackTitle: "Resultado rápido, base enfraquecida",
                feedback: "A produção cresce no curto prazo, enquanto solo e biodiversidade perdem resistência."
            },
            {
                label: "Fazer rotação e manter cobertura",
                description: "Alternar cultivos e proteger a superfície do solo.",
                impact: { production: 8, water: 4, soil: 12, biodiversity: 9, climate: 2 },
                feedbackTitle: "O solo também entra no planejamento",
                feedback: "A cobertura e a diversidade ajudam a conservar umidade e a capacidade produtiva da terra."
            },
            {
                label: "Abrir uma nova área",
                description: "Aumentar o espaço plantado sem mudar o modo de produção.",
                impact: { production: 15, water: -6, soil: -10, biodiversity: -18, climate: -10 },
                feedbackTitle: "Mais espaço, mais pressão",
                feedback: "A colheita aumenta, mas o custo ambiental cria um desequilíbrio difícil de recuperar."
            }
        ]
    },
    {
        kicker: "Irrigação",
        title: "Quando e quanto irrigar?",
        context: "A previsão indica dias secos. A plantação precisa de água, mas o reservatório da propriedade não é infinito.",
        season: "Crescimento da lavoura",
        options: [
            {
                label: "Irrigar em horário fixo",
                description: "Ligar o sistema todos os dias, mesmo sem verificar o solo.",
                impact: { production: 9, water: -14, soil: -2, biodiversity: 0, climate: -2 },
                feedbackTitle: "Água usada sem informação",
                feedback: "A plantação recebe água, porém parte dela pode ser aplicada quando não é necessária."
            },
            {
                label: "Medir a umidade e usar gotejamento",
                description: "Aplicar água perto das raízes somente quando o solo indicar necessidade.",
                impact: { production: 9, water: 12, soil: 4, biodiversity: 2, climate: 3 },
                feedbackTitle: "Tecnologia com propósito",
                feedback: "O monitoramento transforma dados em economia de água sem abandonar a produção."
            },
            {
                label: "Esperar apenas pela chuva",
                description: "Não irrigar e torcer para o tempo mudar.",
                impact: { production: -8, water: 5, soil: -3, biodiversity: 1, climate: 0 },
                feedbackTitle: "Economia sem planejamento",
                feedback: "Poupar água é importante, mas ignorar a necessidade da cultura também ameaça a safra."
            }
        ]
    },
    {
        kicker: "Proteção",
        title: "Apareceram insetos na lavoura.",
        context: "Algumas folhas foram atacadas. Antes de agir, é preciso decidir como proteger o cultivo e os outros seres vivos da área.",
        season: "Protegendo o cultivo",
        options: [
            {
                label: "Aplicar o mesmo produto em toda a área",
                description: "Tratar rapidamente, sem verificar onde está o problema.",
                impact: { production: 12, water: -8, soil: -5, biodiversity: -16, climate: -2 },
                feedbackTitle: "Controle amplo, impacto amplo",
                feedback: "A resposta rápida protege parte da produção, mas também atinge organismos que ajudam a lavoura."
            },
            {
                label: "Usar manejo integrado",
                description: "Monitorar, identificar e combinar controles na área realmente afetada.",
                impact: { production: 8, water: 3, soil: 5, biodiversity: 12, climate: 2 },
                feedbackTitle: "Observar antes de agir",
                feedback: "O manejo integrado procura controlar o problema com decisão, monitoramento e menor impacto."
            },
            {
                label: "Não fazer acompanhamento",
                description: "Deixar a natureza resolver tudo sem observar a evolução.",
                impact: { production: -12, water: 0, soil: 0, biodiversity: 3, climate: 0 },
                feedbackTitle: "Preservar não é abandonar",
                feedback: "Sustentabilidade também exige acompanhamento para evitar perdas e decisões tardias."
            }
        ]
    },
    {
        kicker: "Energia",
        title: "Como alimentar as máquinas?",
        context: "Bombas, iluminação e equipamentos precisam de energia. A escolha afeta o custo e a pegada da produção.",
        season: "Operação da propriedade",
        options: [
            {
                label: "Manter geradores antigos",
                description: "Evitar mudanças e continuar usando equipamentos pouco eficientes.",
                impact: { production: 8, water: -1, soil: -1, biodiversity: -2, climate: -14 },
                feedbackTitle: "Funciona hoje, pesa amanhã",
                feedback: "A produção continua, mas a baixa eficiência aumenta o impacto climático da propriedade."
            },
            {
                label: "Combinar eficiência e energia solar",
                description: "Reduzir desperdícios e gerar parte da energia no local.",
                impact: { production: 8, water: 1, soil: 2, biodiversity: 2, climate: 13 },
                feedbackTitle: "Energia que participa do equilíbrio",
                feedback: "Economizar primeiro e usar fonte renovável depois reduz impacto sem paralisar a produção."
            },
            {
                label: "Desligar equipamentos essenciais",
                description: "Cortar todo o consumo, mesmo prejudicando a operação.",
                impact: { production: -10, water: 2, soil: 0, biodiversity: 1, climate: 8 },
                feedbackTitle: "Reduzir sem estratégia",
                feedback: "Uma solução sustentável precisa funcionar na prática e manter a produção de alimentos."
            }
        ]
    },
    {
        kicker: "Destino",
        title: "A colheita precisa chegar à escola.",
        context: "Os alimentos estão prontos. Agora é hora de organizar o transporte e evitar que parte do trabalho vire desperdício.",
        season: "Colheita e entrega",
        options: [
            {
                label: "Fazer várias viagens pequenas",
                description: "Enviar cada pedido assim que ele aparece, mesmo com o veículo quase vazio.",
                impact: { production: 7, water: 0, soil: 0, biodiversity: -1, climate: -12 },
                feedbackTitle: "Entrega rápida, rota ineficiente",
                feedback: "O alimento chega, mas viagens mal planejadas aumentam consumo de energia e emissões."
            },
            {
                label: "Planejar rota e aproveitar os alimentos",
                description: "Agrupar entregas e destinar produtos fora do padrão visual, mas próprios para consumo.",
                impact: { production: 9, water: 2, soil: 2, biodiversity: 3, climate: 11 },
                feedbackTitle: "A safra vale até o destino final",
                feedback: "Logística e combate ao desperdício completam o cuidado iniciado dentro da propriedade."
            },
            {
                label: "Descartar o que parece imperfeito",
                description: "Transportar apenas os alimentos com aparência uniforme.",
                impact: { production: -6, water: -5, soil: -3, biodiversity: 0, climate: -5 },
                feedbackTitle: "Recurso produzido também pode ser perdido",
                feedback: "Quando alimento próprio para consumo é descartado, a água, o solo e a energia usados nele também são desperdiçados."
            }
        ]
    }
];

const initialMetrics = {
    production: 35,
    water: 65,
    soil: 65,
    biodiversity: 65,
    climate: 65
};

const metricNames = {
    production: "Produção",
    water: "Água",
    soil: "Solo",
    biodiversity: "Biodiversidade",
    climate: "Clima"
};

let currentStage = 0;
let metrics = { ...initialMetrics };
let decisions = [];
let choiceLocked = false;

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
    contrastToggle: document.querySelector("#contrast-toggle"),
    fontToggle: document.querySelector("#font-toggle"),
    commitmentForm: document.querySelector("#commitment-form"),
    commitmentOutput: document.querySelector("#commitment-output"),
    commitmentText: document.querySelector("#commitment-text")
};

// Mantém qualquer indicador dentro da escala de 0 a 100.
function clamp(value) {
    return Math.max(0, Math.min(100, value));
}

function getEnvironmentAverage() {
    const environmentalValues = [metrics.water, metrics.soil, metrics.biodiversity, metrics.climate];
    const total = environmentalValues.reduce((sum, value) => sum + value, 0);
    return Math.round(total / environmentalValues.length);
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
            </span>
        `;
        button.addEventListener("click", () => selectOption(optionIndex));
        elements.choiceList.append(button);
    });

    renderStageDots();
}

// Aplica os impactos da escolha e atualiza todos os elementos visuais.
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
        choice: option.label
    });

    document.querySelectorAll(".choice-button").forEach((button, index) => {
        button.disabled = true;
        button.classList.toggle("is-selected", index === optionIndex);
    });

    elements.feedbackTitle.textContent = option.feedbackTitle;
    elements.feedbackText.textContent = option.feedback;
    elements.feedback.hidden = false;
    elements.nextButton.hidden = false;

    updateMetrics();
    updateDecisionLog();
    elements.feedback.focus?.();
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

function updateDecisionLog() {
    elements.decisionLog.replaceChildren();

    decisions.forEach((decision) => {
        const item = document.createElement("li");
        item.textContent = `${decision.stage}: ${decision.choice}`;
        elements.decisionLog.append(item);
    });
}

function calculateScore() {
    const environment = getEnvironmentAverage();
    const differencePenalty = Math.abs(metrics.production - environment) * 0.15;
    return clamp(Math.round((metrics.production * 0.45) + (environment * 0.55) - differencePenalty));
}

function showResult() {
    const environment = getEnvironmentAverage();
    const score = calculateScore();
    let title;
    let message;

    if (score >= 80 && metrics.production >= 65 && environment >= 65) {
        title = "Safra em equilíbrio";
        message = "Você mostrou que produtividade e preservação podem fazer parte do mesmo planejamento. O futuro fica mais forte quando nenhum indicador é deixado para trás.";
    } else if (score >= 60) {
        title = "Equilíbrio em construção";
        message = "Sua safra avançou, mas algumas decisões concentraram o resultado em apenas um lado. Reveja o histórico e tente proteger produção e ambiente ao mesmo tempo.";
    } else {
        title = "Sinal de alerta";
        message = "A propriedade chegou ao fim da safra com recursos importantes sob pressão. Produzir sem cuidar da base natural coloca as próximas colheitas em risco.";
    }

    elements.missionContent.hidden = true;
    elements.result.hidden = false;
    elements.scoreValue.textContent = score;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.finalProduction.textContent = `${metrics.production}%`;
    elements.finalEnvironment.textContent = `${environment}%`;
    elements.seasonBadge.textContent = "Safra concluída";
    elements.resultTitle.focus?.();
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

    elements.result.hidden = true;
    elements.missionContent.hidden = false;
    elements.decisionLog.innerHTML = "<li>Nenhuma decisão tomada ainda.</li>";
    updateMetrics();
    renderStage();
}

function applySavedPreferences() {
    const contrastEnabled = localStorage.getItem("pontoEquilibrioContrast") === "true";
    const largeTextEnabled = localStorage.getItem("pontoEquilibrioLargeText") === "true";

    document.body.dataset.theme = contrastEnabled ? "contrast" : "";
    document.body.classList.toggle("large-text", largeTextEnabled);
    elements.contrastToggle.setAttribute("aria-pressed", contrastEnabled);
    elements.fontToggle.setAttribute("aria-pressed", largeTextEnabled);
}

function toggleContrast() {
    const enabled = document.body.dataset.theme !== "contrast";
    document.body.dataset.theme = enabled ? "contrast" : "";
    elements.contrastToggle.setAttribute("aria-pressed", enabled);
    localStorage.setItem("pontoEquilibrioContrast", enabled);
}

function toggleFontSize() {
    const enabled = !document.body.classList.contains("large-text");
    document.body.classList.toggle("large-text", enabled);
    elements.fontToggle.setAttribute("aria-pressed", enabled);
    localStorage.setItem("pontoEquilibrioLargeText", enabled);
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
    localStorage.setItem("pontoEquilibrioCommitment", message);
}

function loadCommitment() {
    const savedCommitment = localStorage.getItem("pontoEquilibrioCommitment");

    if (savedCommitment) {
        elements.commitmentText.textContent = savedCommitment;
        elements.commitmentOutput.hidden = false;
    }
}

elements.nextButton.addEventListener("click", goToNextStage);
elements.restartButton.addEventListener("click", restartChallenge);
elements.contrastToggle.addEventListener("click", toggleContrast);
elements.fontToggle.addEventListener("click", toggleFontSize);
elements.commitmentForm.addEventListener("submit", saveCommitment);

applySavedPreferences();
loadCommitment();
updateMetrics();
renderStage();
