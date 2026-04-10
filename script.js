const initialTopics = [
  {
    id: 1,
    title: 'Introducción',
    summary: 'El uso de SCRUM fuera de los limites del desarrollo de software.',
    stage: 'todo',
    accent: 'border-board-sand/30',
    presenter: {
      name: 'Michael',
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQE8c7l8nAP4qQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718315583698?e=1777507200&v=beta&t=Au691nCXo4C55w1KX8RjkUlCVSK7bcP9aEzIJfpoxOE',
    },
    content: [
      {
        title: 'SCRUM mas alla del software',
        image: 'https://i.ytimg.com/vi/7KQ0r6B1suw/maxresdefault.jpg',
        text: 'SCRUM ha demostrado ser una metodologia efectiva para gestionar proyectos complejos y dinamicos. Aunque se originó para el desarrollo de software, sus principios de iteracion, colaboracion y adaptacion continua pueden aplicarse en una amplia variedad de contextos, desde proyectos academicos hasta implementaciones en ambitos gubernamentales',
      },
    ],
    tip: 'Damos un contexto general de la exposición. Es importante que la audiencia entienda que Scrum no es solo para programadores, sino una forma de organizar el trabajo en equipo que puede adaptarse a muchos escenarios diferentes.',
  },
  {
    id: 2,
    title: 'Roles en Scrum',
    summary: 'Scrum Master, Product Owner y Developers con sus responsabilidades.',
    stage: 'todo',
    accent: 'border-board-sky/30',
    presenter: {
      name: 'Luis',
      avatar: '',
    },
    content: [
      {
        title: 'Product Owner',
        image: '',
        text: 'Es la persona responsable de maximizar el valor del producto. Ordena prioridades, define que necesita el cliente o usuario y mantiene el Product Backlog alineado con los objetivos del proyecto.',
      },
      {
        title: 'Scrum Master',
        image: '',
        text: 'Acompana al equipo para que Scrum se aplique correctamente. Facilita ceremonias, elimina impedimentos y promueve que el grupo trabaje de manera sana, ordenada y enfocada en la mejora continua.',
      },
      {
        title: 'Developers',
        image: '',
        text: 'Son quienes convierten las ideas priorizadas en resultados concretos. No se limitan a programar; son el equipo que construye, prueba, ajusta y entrega el incremento al final del Sprint.',
      },
    ],
    tip: 'Una tabla o analogia con un equipo de clase suele hacer esta parte mucho mas clara.',
  },
  {
    id: 3,
    title: 'Gobierno',
    summary: 'Uso de SCRUM en el ámbito gubernamental.',
    stage: 'todo',
    accent: 'border-board-coral/30',
    presenter: {
      name: 'Michael',
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQE8c7l8nAP4qQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718315583698?e=1777507200&v=beta&t=Au691nCXo4C55w1KX8RjkUlCVSK7bcP9aEzIJfpoxOE',
    },
    content: [
      {
        title: 'Implementación en Washington D.C. 2012',
        image: 'https://www.ionos.com/digitalguide/fileadmin/_processed_/d/0/csm_EN-smart-5-criteria_00655f7e45.webp',
        text: 'En el 2012, se implementó la metodologia SMART, llamado asi por el equipo de gobierno del gobernador Inslee. Se trata de un metodo similar a SCRUM, adaptado a las necesidades de un gobierno local. El objetivo era mejorar la eficiencia, transparencia y adaptabilidad de los proyectos gubernamentales, permitiendo una mejor respuesta a las necesidades de los ciudadanos. Michael De Angelo, subdirector de información, menciona que el objetivo era entregar politicas practicas e implementables en los departamentos estatales cada semana.',
      },
      {
        title: 'El caso de Islandia en 2008',
        image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/BC42/production/_95149184_iceland2getty.jpg.webp',
        text: 'Islandia sufrio una gran crisis financiera en el 2008. Los bancos perdieron el control de los precios y la población salio a protestar activamente. Esto llevo al gobierno de turno a implementar la metodologia Agile para gestionar la crisis. Se formaron equipos multidisciplinarios que trabajaban en ciclos cortos para abordar los problemas mas urgentes, como la estabilización del sistema financiero, la proteccion de los depositantes y la reestructuración de la economia. Esta aproximacion permitio al gobierno responder de manera rapida y efectiva a los desafios emergentes durante la crisis.',
      },
    ],
    tip: 'Durante 200 años, la politica tradicional se a incrustado fielmente. Procesos burocraticos y poca inclusion de los gobernados en el proceso.',
  },
  {
    id: 4,
    title: 'Artefactos',
    summary: 'Product Backlog, Sprint Backlog e Increment para visualizar progreso.',
    stage: 'todo',
    accent: 'border-board-mint/30',
    presenter: {
      name: 'Mateo',
      avatar: '',
    },
    content: [
      {
        title: 'Product Backlog',
        image: '',
        text: 'Es la lista priorizada de todo lo que podria necesitar el producto. Cambia constantemente segun nuevas ideas, feedback o necesidades del negocio.',
      },
      {
        title: 'Sprint Backlog',
        image: '',
        text: 'Es el conjunto de tareas seleccionadas para el Sprint actual. Representa el plan inmediato del equipo y puede visualizarse facilmente en un tablero como el que usas en esta exposicion.',
      },
      {
        title: 'Increment',
        image: '',
        text: 'Es el resultado util y verificable del trabajo realizado durante el Sprint. Debe cumplir con los criterios de calidad definidos y estar listo para mostrarse o usarse.',
      },
    ],
    tip: 'Conecta esta parte con el tablero que estas mostrando para que el concepto se sienta tangible.',
  },
  {
    id: 5,
    title: 'Beneficios y cierre',
    summary: 'Ventajas, aplicaciones reales y una conclusion final potente.',
    stage: 'todo',
    accent: 'border-fuchsia-300/30',
    presenter: {
      name: 'Julian',
      avatar: '',
    },
    content: [
      {
        title: 'Beneficios principales',
        image: '',
        text: 'Scrum mejora la transparencia del trabajo, ayuda a priorizar mejor, fomenta la comunicacion continua y hace mas facil detectar errores o retrasos desde etapas tempranas.',
      },
      {
        title: 'Donde se aplica',
        image: '',
        text: 'Aunque es muy conocido en desarrollo de software, tambien puede usarse en proyectos academicos, equipos de marketing, diseno, investigacion y cualquier contexto donde haya trabajo colaborativo e iterativo.',
      },
      {
        title: 'Cierre sugerido',
        image: '',
        text: 'Puedes cerrar diciendo que Scrum no solo organiza tareas: tambien crea una forma de trabajar donde el equipo aprende, se adapta y entrega valor de manera constante.',
      },
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
    <div class="mb-4 flex items-center gap-3">
      ${renderPresenterAvatar(topic.presenter)}
      <div class="min-w-0">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Expositor</p>
        <p class="truncate text-sm font-semibold text-slate-200">${topic.presenter.name}</p>
      </div>
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

function renderPresenterAvatar(presenter) {
  if (presenter.avatar) {
    return `
      <img
        src="${presenter.avatar}"
        alt="Foto de ${presenter.name}"
        class="h-12 w-12 rounded-full border border-white/15 object-cover"
      />
    `;
  }

  return `
    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-bold text-white">
      ${presenter.name.slice(0, 1).toUpperCase()}
    </div>
  `;
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

  const presenterBlock = `
    <div class="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      ${renderPresenterAvatar(topic.presenter)}
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Expositor asignado</p>
        <p class="text-sm font-semibold text-white">${topic.presenter.name}</p>
      </div>
    </div>
  `;

  modalContent.innerHTML =
    presenterBlock +
    topic.content
      .map(
        (section) => `
        <article class="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          ${
            section.image
              ? `<img src="${section.image}" alt="${section.title}" class="h-44 w-full object-cover" />`
              : ''
          }
          <div class="p-5">
            <h5 class="text-base font-bold text-white">${section.title}</h5>
            <p class="mt-3 text-sm leading-7 text-slate-200">${section.text}</p>
          </div>
        </article>
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
