const initialTopics = [
  {
    id: 1,
    title: 'Que es Scrum',
    summary: 'Una introduccion simple al marco de trabajo agil y su proposito.',
    stage: 'todo',
    accent: 'border-board-sand/30',
    bullets: [
      'Define Scrum como un marco agil para organizar trabajo en ciclos cortos.',
      'Explica por que se centra en colaboracion, adaptacion y entrega continua de valor.',
      'Aterriza la idea con una frase breve y un ejemplo cotidiano.',
    ],
    tip: 'Empieza con una definicion corta y conecta rapido con un ejemplo para enganchar al publico.',
  },
  {
    id: 2,
    title: 'Roles en Scrum',
    summary: 'Scrum Master, Product Owner y Developers con sus responsabilidades.',
    stage: 'todo',
    accent: 'border-board-sky/30',
    bullets: [
      'Muestra los tres roles principales y que decision toma cada uno.',
      'Evita describirlos como cargos jerarquicos; enfatiza responsabilidad.',
      'Puedes compararlos con un equipo de proyecto real o universitario.',
    ],
    tip: 'Una tabla o analogia con un equipo de clase suele hacer esta parte mucho mas clara.',
  },
  {
    id: 3,
    title: 'Eventos de Scrum',
    summary: 'Sprint, Planning, Daily, Review y Retrospective como ritmo del equipo.',
    stage: 'todo',
    accent: 'border-board-coral/30',
    bullets: [
      'Presenta los eventos como reuniones con un objetivo concreto, no solo como lista.',
      'Relaciona cada evento con una pregunta: que haremos, como vamos, que aprendimos.',
      'Deja visible que todos ocurren dentro del Sprint.',
    ],
    tip: 'Si narras los eventos como una semana de trabajo, la audiencia entiende mejor el flujo.',
  },
  {
    id: 4,
    title: 'Artefactos',
    summary: 'Product Backlog, Sprint Backlog e Increment para visualizar progreso.',
    stage: 'todo',
    accent: 'border-board-mint/30',
    bullets: [
      'Explica que los artefactos hacen visible el trabajo y el valor entregado.',
      'Asocia cada artefacto con una pregunta: que se quiere, que se hara ahora, que ya esta listo.',
      'Puedes mostrar que este tablero es una representacion visual cercana al Sprint Backlog.',
    ],
    tip: 'Conecta esta parte con el tablero que estas mostrando para que el concepto se sienta tangible.',
  },
  {
    id: 5,
    title: 'Beneficios y cierre',
    summary: 'Ventajas, aplicaciones reales y una conclusion final potente.',
    stage: 'todo',
    accent: 'border-fuchsia-300/30',
    bullets: [
      'Resume beneficios como transparencia, enfoque, colaboracion y mejora continua.',
      'Menciona rapidamente en que tipos de proyectos o equipos puede aplicarse.',
      'Cierra con una idea final: Scrum ayuda a aprender y ajustar mientras se avanza.',
    ],
    tip: 'Termina con una conclusion de una sola frase que sea facil de recordar.',
  },
];

let topics = structuredClone(initialTopics);
let activeTopicId = null;

const columns = {
  todo: document.getElementById('todo-column'),
  working: document.getElementById('working-column'),
  done: document.getElementById('done-column'),
};

const modal = document.getElementById('topic-modal');
const modalStage = document.getElementById('modal-stage');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalContent = document.getElementById('modal-content');
const modalTip = document.getElementById('modal-tip');

const countEls = {
  todo: document.getElementById('todo-count'),
  working: document.getElementById('working-count'),
  done: document.getElementById('done-count'),
  total: document.getElementById('total-count'),
};

function getStageLabel(stage) {
  return {
    todo: 'TODO',
    working: 'WORKING',
    done: 'DONE',
  }[stage];
}

function createCard(topic) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = `topic-card ${topic.accent} block w-full text-left`;
  card.dataset.id = String(topic.id);
  card.draggable = true;

  card.innerHTML = `
    <div class="mb-4 flex items-start justify-between gap-3">
      <span class="pill ${topic.stage}">${getStageLabel(topic.stage)}</span>
      <span class="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">Tema ${topic.id}</span>
    </div>
    <h4 class="pr-4 font-display text-xl font-bold text-white">${topic.title}</h4>
    <p class="mt-3 text-sm leading-6 text-slate-300">${topic.summary}</p>
    <div class="mt-5 flex items-center justify-between text-xs text-slate-400">
      <span>Click para abrir</span>
      <span>Mover al avanzar</span>
    </div>
  `;

  card.addEventListener('click', () => openModal(topic.id));
  card.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', String(topic.id));
  });

  return card;
}

function renderBoard() {
  Object.values(columns).forEach((column) => {
    column.innerHTML = '';
  });

  topics.forEach((topic) => {
    columns[topic.stage].appendChild(createCard(topic));
  });

  updateCounts();
}

function updateCounts() {
  const totals = topics.reduce(
    (acc, topic) => {
      acc[topic.stage] += 1;
      return acc;
    },
    { todo: 0, working: 0, done: 0 }
  );

  countEls.todo.textContent = totals.todo;
  countEls.working.textContent = totals.working;
  countEls.done.textContent = totals.done;
  countEls.total.textContent = topics.length;
}

function openModal(topicId) {
  const topic = topics.find((item) => item.id === topicId);

  if (!topic) {
    return;
  }

  activeTopicId = topicId;
  modalStage.textContent = `Estado actual: ${getStageLabel(topic.stage)}`;
  modalTitle.textContent = topic.title;
  modalSubtitle.textContent = topic.summary;
  modalTip.textContent = topic.tip;
  modalContent.innerHTML = topic.bullets
    .map(
      (bullet) => `
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          ${bullet}
        </div>
      `
    )
    .join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  activeTopicId = null;
}

function moveTopic(topicId, nextStage) {
  topics = topics.map((topic) =>
    topic.id === topicId ? { ...topic, stage: nextStage } : topic
  );

  renderBoard();

  if (activeTopicId === topicId) {
    openModal(topicId);
  }
}

Object.entries(columns).forEach(([stage, column]) => {
  column.addEventListener('dragover', (event) => {
    event.preventDefault();
    column.classList.add('is-active');
  });

  column.addEventListener('dragleave', () => {
    column.classList.remove('is-active');
  });

  column.addEventListener('drop', (event) => {
    event.preventDefault();
    column.classList.remove('is-active');
    const topicId = Number(event.dataTransfer.getData('text/plain'));
    if (topicId) {
      moveTopic(topicId, stage);
    }
  });
});

document.getElementById('close-modal').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

document.querySelectorAll('.move-btn').forEach((button) => {
  button.addEventListener('click', () => {
    if (activeTopicId !== null) {
      moveTopic(activeTopicId, button.dataset.moveTarget);
    }
  });
});

document.getElementById('reset-board').addEventListener('click', () => {
  topics = structuredClone(initialTopics);
  closeModal();
  renderBoard();
});

renderBoard();
