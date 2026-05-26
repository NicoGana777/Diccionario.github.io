const pointOptions = [3, 4, 5, 6, 7, 8];

const palabras = [
  { texto: 'Capital', tipo: 'vision', nico: 'Para Nico, capital no es solo dinero: es energía acumulada, reputación, criterio y posibilidad de mover el tablero.' },
  { texto: 'Estrategia', tipo: 'vision', nico: 'Para Nico, estrategia es pensar antes de gastar fuerza; elegir la jugada que ordena las demás.' },
  { texto: 'Emprendimiento', tipo: 'accion', nico: 'Para Nico, emprendimiento es convertir una incomodidad en sistema, producto o movimiento.' },
  { texto: 'Elegancia', tipo: 'identidad', nico: 'Para Nico, elegancia es precisión: decir menos, escoger mejor y sostener presencia sin ruido.' },
  { texto: 'Silencio', tipo: 'identidad', nico: 'Para Nico, silencio es control. No todo se explica; algunas cosas se demuestran con resultado.' },
  { texto: 'Riesgo', tipo: 'accion', nico: 'Para Nico, riesgo es la entrada a una versión más grande de la vida, siempre que haya cálculo detrás.' },
  { texto: 'Mercado', tipo: 'vision', nico: 'Para Nico, mercado es el lugar donde la claridad se prueba contra la realidad.' },
  { texto: 'Identidad', tipo: 'identidad', nico: 'Para Nico, identidad es la marca invisible que deja una persona cuando decide cómo quiere ser leída.' },
  { texto: 'Inversión', tipo: 'vision', nico: 'Para Nico, inversión es paciencia con dirección: poner recursos donde el futuro puede responder.' },
  { texto: 'Liderazgo', tipo: 'accion', nico: 'Para Nico, liderazgo es ordenar energía ajena sin perder dominio de la propia.' },
  { texto: 'Sistema', tipo: 'vision', nico: 'Para Nico, sistema es una forma de no depender del ánimo del día.' },
  { texto: 'Poder', tipo: 'identidad', nico: 'Para Nico, poder es capacidad de decidir, ejecutar y sostener consecuencias.' },
  { texto: 'Proyecto', tipo: 'accion', nico: 'Para Nico, proyecto es una intención que ya dejó de ser idea y empezó a pedir estructura.' },
  { texto: 'Carácter', tipo: 'identidad', nico: 'Para Nico, carácter es lo que queda cuando nadie está aplaudiendo.' },
  { texto: 'Criterio', tipo: 'vision', nico: 'Para Nico, criterio es saber qué sí, qué no y qué jamás.' },
  { texto: 'Legado', tipo: 'identidad', nico: 'Para Nico, legado es hacer que una decisión dure más que el impulso que la inició.' },
  { texto: 'Liquidez', tipo: 'vision', nico: 'Para Nico, liquidez es libertad táctica: poder moverse cuando aparece la oportunidad.' },
  { texto: 'Disciplina', tipo: 'accion', nico: 'Para Nico, disciplina es hacer que el deseo obedezca a una dirección.' },
  { texto: 'Ambición', tipo: 'accion', nico: 'Para Nico, ambición es hambre con forma; grandeza que todavía está buscando cuerpo.' },
  { texto: 'Visión', tipo: 'vision', nico: 'Para Nico, visión es mirar una escena común y detectar la estructura de oportunidad escondida.' },
  { texto: 'Éxito', tipo: 'identidad', nico: 'Para Nico, éxito es validación, pero también evidencia de método.' },
  { texto: 'Pereza', tipo: 'sombra', nico: 'Para Nico, pereza es una amenaza silenciosa: no destruye de golpe, erosiona dirección.' },
  { texto: 'Drama', tipo: 'sombra', nico: 'Para Nico, drama es energía mal administrada.' },
  { texto: 'Hipocresía', tipo: 'sombra', nico: 'Para Nico, hipocresía es incoherencia con buena escenografía.' },
  { texto: 'Sencillez', tipo: 'sombra', nico: 'Para Nico, sencillez puede ser virtud o renuncia: depende de si nace de paz o de miedo.' },
  { texto: 'Reservado', tipo: 'identidad', nico: 'Para Nico, ser reservado es administrar presencia: no todo valor necesita estar expuesto.' },
  { texto: 'Ventaja', tipo: 'vision', nico: 'Para Nico, ventaja es leer antes que otros y moverse cuando el tablero todavía parece quieto.' },
  { texto: 'Capitalista', tipo: 'vision', nico: 'Para Nico, capitalista es quien entiende recursos, propiedad y oportunidad como una arquitectura de poder.' },
  { texto: 'Convicción', tipo: 'identidad', nico: 'Para Nico, convicción es sostener una decisión cuando el entorno todavía no la entiende.' },
  { texto: 'Patrimonio', tipo: 'vision', nico: 'Para Nico, patrimonio es memoria material: decisiones que aprendieron a quedarse.' },
  { texto: 'Negociación', tipo: 'accion', nico: 'Para Nico, negociación es elegancia bajo presión: ganar sin romper la mesa.' },
  { texto: 'Rentabilidad', tipo: 'vision', nico: 'Para Nico, rentabilidad es la prueba fría de que una idea no solo emociona, también responde.' },
  { texto: 'Expansión', tipo: 'accion', nico: 'Para Nico, expansión es crecimiento con cálculo: ocupar más espacio sin perder estructura.' },
  { texto: 'Autoridad', tipo: 'identidad', nico: 'Para Nico, autoridad es presencia que ordena sin tener que levantar la voz.' },
  { texto: 'Enfoque', tipo: 'accion', nico: 'Para Nico, enfoque es proteger la energía de todo lo que no construye.' },
  { texto: 'Prestigio', tipo: 'identidad', nico: 'Para Nico, prestigio es reputación acumulada: una forma silenciosa de crédito.' },
  { texto: 'Oportunidad', tipo: 'vision', nico: 'Para Nico, oportunidad es una puerta que solo se abre para quien ya estaba mirando.' },
  { texto: 'Alianza', tipo: 'accion', nico: 'Para Nico, alianza es multiplicar alcance sin entregar el criterio.' },
  { texto: 'Influencia', tipo: 'identidad', nico: 'Para Nico, influencia es mover decisiones incluso cuando no se firma el documento.' },
  { texto: 'Estatus', tipo: 'identidad', nico: 'Para Nico, estatus es señal externa; importa solo si está sostenida por método.' },
  { texto: 'Determinación', tipo: 'accion', nico: 'Para Nico, determinación es seguir cuando la emoción inicial ya se fue.' },
  { texto: 'Método', tipo: 'vision', nico: 'Para Nico, método es volver repetible lo que otros dejan al azar.' },
  { texto: 'Autonomía', tipo: 'identidad', nico: 'Para Nico, autonomía es libertad con responsabilidad: decidir sin pedir permiso emocional.' },
  { texto: 'Excelencia', tipo: 'accion', nico: 'Para Nico, excelencia es una exigencia privada antes de ser una vitrina pública.' },
  { texto: 'Competencia', tipo: 'accion', nico: 'Para Nico, competencia es presión útil: obliga a afinar la jugada.' },
  { texto: 'Táctica', tipo: 'vision', nico: 'Para Nico, táctica es resolver el movimiento inmediato sin traicionar la estrategia.' },
  { texto: 'Valor', tipo: 'vision', nico: 'Para Nico, valor es lo que queda cuando se separa el ruido de la utilidad real.' },
  { texto: 'Gestión', tipo: 'accion', nico: 'Para Nico, gestión es hacer que las cosas pasen sin depender del caos.' },
  { texto: 'Marca', tipo: 'identidad', nico: 'Para Nico, marca es la forma en que una persona sigue hablando cuando ya salió de la sala.' },
  { texto: 'Propiedad', tipo: 'vision', nico: 'Para Nico, propiedad es control sobre el futuro: no solo tener, sino decidir.' },
];

const lecturasPorTipo = {
  vision: 'Tu constelación mira hacia estructura, oportunidad y lectura del entorno. Elegiste palabras que intentan entender el tablero antes de moverse.',
  accion: 'Tu constelación pide movimiento. Hay deseo de ejecutar, competir y convertir intención en algo visible.',
  identidad: 'Tu constelación habla de presencia. Lo que escogiste revela una preocupación por carácter, estilo y forma de ser recordado.',
  sombra: 'Tu constelación no evita la tensión. Hay palabras que muestran fricción, límites o cosas que la persona necesita mirar sin maquillarlas.',
};

let objetivo = 5;
let seleccionadas = [];
let animacionActiva = false;
let inicioEvaluacion = 0;
let ultimoMovimiento = 0;
let exploradas = [];
let eventosSeleccion = [];
let evaluacionActual = null;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function byId(id) {
  return document.getElementById(id);
}

async function typewriter(el, text, speed = 58) {
  for (let i = 0; i <= text.length; i++) {
    el.textContent = text.slice(0, i);
    await sleep(speed);
  }
}

async function iniciarIntro() {
  await sleep(500);
  await typewriter(byId('intro-name'), 'Nicolás Espinosa Restrepo');
  await sleep(500);
  byId('intro-question').classList.remove('hidden');
  await sleep(700);
  byId('btn-entrar').classList.remove('hidden');
}

function cambiarPantalla(actual, siguiente) {
  byId(actual).classList.add('fade-out');
  setTimeout(() => {
    byId(actual).classList.remove('active', 'fade-out');
    byId(siguiente).classList.add('active');
  }, 650);
}

function mostrarSoloPantalla(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.toggle('active', screen.id === id);
    screen.classList.remove('fade-out');
  });
}

function reiniciarEvaluacion() {
  seleccionadas = [];
  exploradas = [];
  eventosSeleccion = [];
  evaluacionActual = null;
  inicioEvaluacion = performance.now();
  ultimoMovimiento = inicioEvaluacion;
}

function crearOpcionesDePuntos() {
  const contenedor = byId('point-options');
  contenedor.innerHTML = '';

  pointOptions.forEach(numero => {
    const btn = document.createElement('button');
    btn.className = 'point-option';
    btn.type = 'button';
    btn.textContent = numero;
    btn.setAttribute('aria-label', `Conectar ${numero} puntos`);
    if (numero === objetivo) btn.classList.add('active');

    btn.addEventListener('click', () => {
      objetivo = numero;
      reiniciarEvaluacion();
      document.querySelectorAll('.point-option').forEach(el => el.classList.toggle('active', Number(el.textContent) === objetivo));
      colocarPalabras();
      actualizarEstado();
    });

    contenedor.appendChild(btn);
  });
}

function iniciarMain() {
  reiniciarEvaluacion();
  crearOpcionesDePuntos();
  colocarPalabras();
  actualizarEstado();
}

function colocarPalabras() {
  const layer = byId('stars-layer');
  layer.innerHTML = '';
  byId('constellation-lines').innerHTML = '';

  const ordenadas = palabras;
  const ancho = window.innerWidth;
  const columnas = ancho < 520 ? 4 : ancho < 760 ? 5 : ancho < 1080 ? 7 : 10;
  const filas = Math.ceil(ordenadas.length / columnas);

  ordenadas.forEach((palabra, index) => {
    const col = index % columnas;
    const row = Math.floor(index / columnas);
    const jitterX = (Math.random() - 0.5) * 3.5;
    const jitterY = (Math.random() - 0.5) * 3.5;
    const x = ((col + 0.5) / columnas) * 100 + jitterX;
    const y = ((row + 0.5) / filas) * 100 + jitterY;

    const btn = document.createElement('button');
    btn.className = 'star-word';
    btn.type = 'button';
    btn.textContent = palabra.texto;
    btn.dataset.texto = palabra.texto;
    btn.dataset.tipo = palabra.tipo;
    btn.style.left = `${Math.min(94, Math.max(6, x))}%`;
    btn.style.top = `${Math.min(94, Math.max(6, y))}%`;
    btn.addEventListener('mouseenter', () => registrarExploracion(palabra.texto));
    btn.addEventListener('focus', () => registrarExploracion(palabra.texto));
    btn.addEventListener('click', () => alternarPalabra(palabra.texto));
    layer.appendChild(btn);
  });
}

function registrarExploracion(texto) {
  if (!exploradas.includes(texto)) {
    exploradas.push(texto);
  }
}

function alternarPalabra(texto) {
  if (animacionActiva) return;

  if (seleccionadas.includes(texto)) {
    seleccionadas = seleccionadas.filter(item => item !== texto);
    eventosSeleccion = eventosSeleccion.filter(evento => evento.texto !== texto);
  } else if (seleccionadas.length < objetivo) {
    const ahora = performance.now();
    const palabra = palabras.find(item => item.texto === texto);
    seleccionadas.push(texto);
    eventosSeleccion.push({
      texto,
      tipo: palabra?.tipo || 'vision',
      at: ahora - inicioEvaluacion,
      delta: ahora - ultimoMovimiento,
    });
    ultimoMovimiento = ahora;
  }

  actualizarEstado();
}

function actualizarEstado() {
  const restantes = objetivo - seleccionadas.length;
  byId('counter').textContent = `${seleccionadas.length} / ${objetivo}`;
  byId('hint').textContent = seleccionadas.length === objetivo
    ? 'La figura está cerrada. Ya podés leer la constelación.'
    : `Conectá ${restantes} ${restantes === 1 ? 'estrella más' : 'estrellas más'}.`;

  document.querySelectorAll('.star-word').forEach(btn => {
    const index = seleccionadas.indexOf(btn.dataset.texto);
    const estaSeleccionada = index >= 0;
    btn.classList.toggle('selected', estaSeleccionada);
    btn.classList.toggle('disabled', seleccionadas.length >= objetivo && !estaSeleccionada);
    btn.querySelector('.order-badge')?.remove();

    if (estaSeleccionada) {
      const badge = document.createElement('span');
      badge.className = 'order-badge';
      badge.textContent = index + 1;
      btn.appendChild(badge);
    }
  });

  const btnAnalizar = byId('btn-analizar');
  btnAnalizar.textContent = 'Analizar constelación';
  btnAnalizar.classList.toggle('hidden', seleccionadas.length !== objetivo);
  dibujarLineas();
}

function centroDeElemento(el, contenedor) {
  const rect = el.getBoundingClientRect();
  const base = contenedor.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - base.left,
    y: rect.top + 7 - base.top,
  };
}

function dibujarLineas() {
  const svg = byId('constellation-lines');
  const sky = byId('sky');
  svg.innerHTML = '';

  const puntos = seleccionadas
    .map(texto => [...document.querySelectorAll('.star-word')].find(el => el.dataset.texto === texto))
    .filter(Boolean)
    .map(el => centroDeElemento(el, sky));

  for (let i = 0; i < puntos.length - 1; i++) {
    svg.appendChild(crearLinea(puntos[i], puntos[i + 1]));
  }

  if (puntos.length === objetivo && puntos.length > 2) {
    svg.appendChild(crearLinea(puntos[puntos.length - 1], puntos[0], true));
  }
}

function crearLinea(a, b, cierre = false) {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', a.x);
  line.setAttribute('y1', a.y);
  line.setAttribute('x2', b.x);
  line.setAttribute('y2', b.y);
  line.setAttribute('class', 'connection-line');
  if (cierre) line.setAttribute('stroke-dasharray', '5 8');
  return line;
}

function evaluarSociedad(conteo) {
  const totalMs = eventosSeleccion.at(-1)?.at || 0;
  const totalSeg = totalMs / 1000;
  const deltas = eventosSeleccion.slice(1).map(evento => evento.delta / 1000);
  const pausaPromedio = deltas.length
    ? deltas.reduce((sum, value) => sum + value, 0) / deltas.length
    : totalSeg;
  const primerasExploradas = exploradas.slice(0, 4);
  const primerasSeleccionadas = eventosSeleccion.slice(0, 3).map(evento => evento.texto);
  const ultimaSeleccionada = eventosSeleccion.at(-1)?.texto || '';
  const estrategicas = ['Capital', 'Estrategia', 'Criterio', 'Sistema', 'Inversión', 'Mercado', 'Disciplina', 'Visión'];
  const impulsivas = ['Pereza', 'Drama', 'Hipocresía', 'Sencillez'];

  let score = 36;
  score += (conteo.vision || 0) * 8;
  score += (conteo.accion || 0) * 6;
  score += (conteo.identidad || 0) * 4;
  score -= (conteo.sombra || 0) * 10;

  if (primerasSeleccionadas.some(texto => estrategicas.includes(texto))) score += 14;
  if (primerasSeleccionadas.some(texto => impulsivas.includes(texto))) score -= 18;
  if (primerasExploradas.some(texto => estrategicas.includes(texto))) score += 8;
  if (estrategicas.includes(ultimaSeleccionada)) score += 8;
  if (impulsivas.includes(ultimaSeleccionada)) score -= 10;

  if (pausaPromedio >= 1.2 && pausaPromedio <= 8) score += 14;
  if (pausaPromedio < 0.75) score -= 14;
  if (pausaPromedio > 11) score -= 8;
  if (totalSeg >= 18 && totalSeg <= 85) score += 10;
  if (totalSeg < 10) score -= 12;
  if (totalSeg > 120) score -= 8;

  const aceptado = score >= 58;
  const tiempo = `${Math.round(totalSeg)} segundos`;
  const ritmo = pausaPromedio < 0.75
    ? 'demasiado rápido'
    : pausaPromedio > 11
      ? 'demasiado cauteloso'
      : 'calculado';
  const primerFoco = primerasExploradas[0] || primerasSeleccionadas[0] || 'ninguna palabra';
  const primeras = primerasSeleccionadas.join(', ') || 'ninguna señal clara';
  const ultima = ultimaSeleccionada || 'sin cierre';
  const lecturaDelRitmo = pausaPromedio < 0.75
    ? 'el pulso fue acelerado, pero la ruta sostuvo una intención clara'
    : pausaPromedio > 11
      ? 'el pulso fue reservado, pero no perdió dirección'
      : 'hubo suficiente velocidad para no quedarse dudando y suficiente pausa para no parecer impulsivo';
  const alertaDelRitmo = pausaPromedio < 0.75
    ? 'el cierre fue demasiado rápido para demostrar dominio pleno'
    : pausaPromedio > 11
      ? 'la cautela pesó más que la decisión'
      : 'el ritmo no fue el problema; la tensión estuvo en el orden de prioridades';
  const virtudes = [];
  if ((conteo.vision || 0) > 0) virtudes.push('lectura estratégica');
  if ((conteo.accion || 0) > 0) virtudes.push('voluntad de ejecución');
  if ((conteo.identidad || 0) > 0) virtudes.push('presencia con carácter');
  if ((conteo.sombra || 0) > 0) virtudes.push('honestidad para mirar tensión');

  const virtudCentral = virtudes.length
    ? virtudes.slice(0, 3).join(', ')
    : 'criterio en construcción';
  const perfilSocio = aceptado
    ? 'perfil de socio operador: convierte intención en dirección y no necesita demasiada explicación para moverse'
    : 'perfil de socio en formación: tiene señales valiosas, pero todavía debe ordenar impulso, foco y consistencia';
  const ritmoInterno = pausaPromedio < 0.75
    ? 'mente rápida, lectura inmediata y hambre de cerrar; su reto es demostrar calma bajo presión'
    : pausaPromedio > 11
      ? 'observación profunda, prudencia y cuidado por el detalle; su reto es no confundir análisis con espera'
      : 'ritmo equilibrado, atención al detalle y capacidad de decidir sin perder elegancia';
  const selloPersonal = aceptado
    ? 'genera confianza porque parece elegir desde criterio, no desde necesidad de impresionar'
    : 'genera curiosidad porque hay potencial, aunque Nicolás pediría más prueba antes de firmar';

  return {
    aceptado,
    titulo: aceptado ? 'Nicolás te aceptaría como socio' : 'Nicolás no te aceptaría como socio',
    lectura: aceptado
      ? `Nicolás te aceptaría como socio porque tu constelación no se comportó como una lista de gustos, sino como una secuencia de criterio. Primero miraste ${primerFoco}, cerraste en ${tiempo} y tu ritmo fue ${ritmo}: ${lecturaDelRitmo}. Empezaste por ${primeras} y terminaste en ${ultima}; esa ruta sugiere que sabes combinar visión, carácter y decisión sin perder el control. Para Nicolás, un socio no es quien promete grandeza, sino quien ordena prioridades cuando nadie le está explicando las reglas.`
      : `Nicolás no te aceptaría como socio, al menos no todavía. La constelación cerró en ${tiempo}, con un ritmo ${ritmo}; ${alertaDelRitmo}. Empezaste por ${primeras} y terminaste en ${ultima}; ahí el contrato detecta una tensión entre deseo, control y criterio. Para Nicolás, un socio debe proteger la dirección incluso cuando la dinámica parece un juego. Esta vez no se rechaza tu potencial: se rechaza la inconsistencia para sentarse a negociar.`,
    detalle: [
      `Virtudes espejo: ${virtudCentral}.`,
      `Perfil leído: ${perfilSocio}.`,
      `Ritmo interno: ${ritmoInterno}.`,
      `Sello personal: ${selloPersonal}.`,
    ],
  };
}

function analizarSeleccion() {
  const seleccion = seleccionadas.map(texto => palabras.find(palabra => palabra.texto === texto));
  const conteo = seleccion.reduce((acc, palabra) => {
    acc[palabra.tipo] = (acc[palabra.tipo] || 0) + 1;
    return acc;
  }, {});
  const dominante = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0]?.[0] || 'vision';
  const sombras = conteo.sombra || 0;
  const verbos = seleccion.map(item => item.texto).join(', ');
  const evaluacion = evaluarSociedad(conteo);

  let conjunto = lecturasPorTipo[dominante];

  if (sombras >= 2) {
    conjunto += ' También aparece una zona de tensión: la persona no solo está escogiendo aspiraciones, también está señalando lo que le pesa o lo que quiere superar.';
  } else if ((conteo.accion || 0) >= 2 && (conteo.vision || 0) >= 2) {
    conjunto += ' La mezcla entre visión y acción sugiere una persona que no quiere quedarse imaginando: necesita que la idea tome forma.';
  } else if ((conteo.identidad || 0) >= 2) {
    conjunto += ' Hay una búsqueda fuerte de autoría personal: no basta lograr algo, importa cómo se ve, cómo se sostiene y qué dice de quien lo hizo.';
  }

  conjunto += ` En conjunto, ${verbos} forman una figura sobre cómo esa persona se acerca al mundo de Nico: con deseo de leerlo, apropiarlo o discutirlo.`;

  return { seleccion, conjunto, evaluacion };
}

function mostrarResultado() {
  const { seleccion, conjunto, evaluacion } = analizarSeleccion();
  const grid = byId('word-meanings');
  grid.innerHTML = '';
  evaluacionActual = evaluacion;

  byId('result-title').textContent = `Constelación de ${seleccion.length} puntos`;
  byId('combined-text').textContent = conjunto;

  seleccion.forEach((palabra, index) => {
    const card = document.createElement('article');
    card.className = 'meaning-card';
    card.innerHTML = `
      <h3>${index + 1}. ${palabra.texto}</h3>
      <p>${palabra.nico}</p>
    `;
    grid.appendChild(card);
  });

  cambiarPantalla('main', 'resultado');
}

function mostrarContrato() {
  if (!evaluacionActual) return;

  const paper = byId('contract-paper');
  paper.classList.remove('contract-enter');
  void paper.offsetWidth;
  paper.classList.add('contract-enter');

  byId('contract-title').textContent = evaluacionActual.titulo;
  byId('contract-body').textContent = evaluacionActual.lectura;
  byId('contract-metrics').innerHTML = evaluacionActual.detalle
    .map(item => `<span>${item}</span>`)
    .join('');

  cambiarPantalla('resultado', 'contrato');
}

function reiniciarSeleccion() {
  reiniciarEvaluacion();
  colocarPalabras();
  actualizarEstado();
}

function volverAlInicio() {
  reiniciarEvaluacion();
  byId('intro-name').textContent = 'Nicolás Espinosa Restrepo';
  byId('intro-question').classList.remove('hidden');
  byId('btn-entrar').classList.remove('hidden');
  byId('point-options').innerHTML = '';
  byId('stars-layer').innerHTML = '';
  byId('constellation-lines').innerHTML = '';
  mostrarSoloPantalla('intro');
}

byId('btn-entrar').addEventListener('click', () => {
  if (animacionActiva) return;
  animacionActiva = true;
  cambiarPantalla('intro', 'main');
  setTimeout(() => {
    iniciarMain();
    animacionActiva = false;
  }, 720);
});

byId('btn-reiniciar').addEventListener('click', reiniciarSeleccion);
byId('btn-analizar').addEventListener('click', mostrarResultado);
byId('btn-terminar-lectura').addEventListener('click', mostrarContrato);
byId('btn-volver-inicio').addEventListener('click', volverAlInicio);
window.addEventListener('resize', dibujarLineas);

iniciarIntro();
