// ================================================================
// CONFIG — COMPLETAR ANTES DE PUBLICAR
// ================================================================
const CONFIG = {
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwF5rh3p1gPveL0ut9hfv75CdngD1CnKsxeTgknXLR9SR86oRy0dMomidwaD2oAzMHgIg/exec',
  ADMIN_PASS: 'mundial2026',
};

// Fecha del inicio del Mundial (cierre por defecto si no se configura otra)
const FECHA_MUNDIAL = new Date('2026-06-11T12:00:00');

// 48 equipos clasificados al Mundial 2026
// 48 equipos clasificados al Mundial 2026 (USA · CAN · MEX)
const EQUIPOS_2026 = [
  // CONMEBOL
  'Argentina','Brasil','Colombia','Ecuador','Uruguay','Venezuela',
  // UEFA
  'Albania','Alemania','Austria','Bélgica','Escocia','Eslovaquia',
  'España','Francia','Hungría','Inglaterra','Países Bajos','Portugal',
  'Rumania','Serbia','Suiza','Turquía',
  // CONCACAF
  'Canadá','Costa Rica','Estados Unidos','Honduras','Jamaica','México','Panamá',
  // CAF
  'Argelia','Arabia Saudita','Camerún','Costa de Marfil','Egipto',
  'Ghana','Marruecos','Nigeria','Senegal','Sudáfrica','Túnez',
  // AFC
  'Australia','Corea del Sur','Indonesia','Irak','Irán',
  'Japón','Nueva Zelanda','Uzbekistán',
].sort();

// ================================================================
// JUGADORES — Lista base con Nombre y Apellido
// Se complementa automáticamente desde football-data.org al cargar la app
// ================================================================
let JUGADORES_MUNDIAL = [
  // Argentina
  'Lionel Messi','Julián Álvarez','Rodrigo De Paul','Alejandro Garnacho',
  'Nicolás González','Leandro Paredes','Enzo Fernández','Alexis Mac Allister',
  'Germán Pezzella','Lautaro Martínez','Paulo Dybala','Nicolás Tagliafico',
  // Brasil
  'Vinicius Jr.','Rodrygo Goes','Neymar Jr.','Raphael Dias (Raphinha)',
  'Gabriel Jesus','Endrick Felipe','Bruno Guimarães','Lucas Paquetá',
  'Casemiro','Firmino Roberto','Gabriel Martinelli','Éder Militão',
  // Francia
  'Kylian Mbappé','Antoine Griezmann','Ousmane Dembélé','Randal Kolo Muani',
  'Aurélien Tchouaméni','Adrien Rabiot','Kingsley Coman','Marcus Thuram',
  'Eduardo Camavinga','Christopher Nkunku','Mike Maignan','Dayot Upamecano',
  // Inglaterra
  'Harry Kane','Jude Bellingham','Phil Foden','Bukayo Saka',
  'Marcus Rashford','Declan Rice','Trent Alexander-Arnold','Cole Palmer',
  'Anthony Gordon','Ivan Toney','Ollie Watkins','Jack Grealish',
  // España
  'Lamine Yamal','Pedri González','Dani Olmo','Álvaro Morata',
  'Ferran Torres','Mikel Oyarzabal','Fabián Ruiz','Rodri Hernández',
  'Marcos Llorente','Gavi Páez','Nico Williams','Alejandro Balde',
  // Portugal
  'Cristiano Ronaldo','Bruno Fernandes','Bernardo Silva','Diogo Jota',
  'Rafael Leão','João Félix','Rúben Neves','Vitinha Ferreira',
  'Gonçalo Ramos','Pedro Neto','Rúben Dias','João Cancelo',
  // Alemania
  'Kai Havertz','Florian Wirtz','Jamal Musiala','Serge Gnabry',
  'Leroy Sané','Niclas Füllkrug','Toni Kroos','Joshua Kimmich',
  'Thomas Müller','İlkay Gündoğan','Antonio Rüdiger','Granit Xhaka',
  // Países Bajos
  'Memphis Depay','Cody Gakpo','Steven Bergwijn','Xavi Simons',
  'Frenkie de Jong','Virgil van Dijk','Wout Weghorst','Denzel Dumfries',
  'Teun Koopmeiners','Nathan Aké','Tijjani Reijnders','Jurriën Timber',
  // Bélgica
  'Romelu Lukaku','Kevin De Bruyne','Dries Mertens','Axel Witsel',
  'Yannick Carrasco','Leandro Trossard','Jérémy Doku','Loïs Openda',
  // Colombia
  'Luis Díaz','Duván Zapata','James Rodríguez','Rafael Santos Borré',
  'Cuadrado Juan','Matheus Uribe','Richard Ríos','Jhon Jáder Durán',
  // Uruguay
  'Darwin Núñez','Federico Valverde','Rodrigo Bentancur','Edinson Cavani',
  'Luis Suárez','Ronald Araújo','José María Giménez','Nicolás De La Cruz',
  // Argentina (más)
  'Thiago Almada','Valentín Carboni','Germán Cano',
  // Morocco
  'Hakim Ziyech','Youssef En-Nesyri','Achraf Hakimi','Sofyan Amrabat',
  'Azzedine Ounahi','Tarik Tissoudali','Ilias Chair',
  // Senegal
  'Sadio Mané','Ismaïla Sarr','Nampalys Mendy','Kalidou Koulibaly',
  'Boulaye Dia','Pape Matar Sarr','Lamine Camara',
  // Japón
  'Ritsu Doan','Takumi Minamino','Kaoru Mitoma','Daichi Kamada',
  'Ao Tanaka','Takehiro Tomiyasu','Maya Yoshida','Ayase Ueda',
  // Corea del Sur
  'Heung-min Son','Hwang Hee-chan','Lee Jae-sung','Cho Gue-sung',
  'Kim Min-jae','Hwang In-beom','Kang-in Lee','Oh Hyeon-gyu',
  // Irán
  'Mehdi Taremi','Sardar Azmoun','Alireza Jahanbakhsh','Ali Gholizadeh',
  // Arabia Saudita
  'Salem Al-Dawsari','Firas Al-Buraikan','Mohammed Al-Qasim','Sami Al-Najei',
  // México
  'Hirving Lozano','Henry Martín','Santiago Giménez','Edson Álvarez',
  'Alexis Vega','Raúl Jiménez','Orbelín Pineda','Roberto Alvarado',
  // Estados Unidos
  'Christian Pulisic','Gio Reyna','Weston McKennie','Sergiño Dest',
  'Tyler Adams','Brenden Aaronson','Ricardo Pepi','Folarin Balogun',
  // Canadá
  'Alphonso Davies','Jonathan David','Tajon Buchanan','Cyle Larin',
  'Stephen Eustáquio','Liam Millar','Richie Laryea',
  // Nigeria
  'Victor Osimhen','Kelechi Iheanacho','Moses Simon','Wilfred Ndidi',
  'Samuel Chukwueze','Frank Onyeka','Joe Aribo','Taiwo Awoniyi',
  // Ghana
  'André Ayew','Jordan Ayew','Mohammed Kudus','Inaki Williams',
  'Joseph Paintsil','Daniel Kofi Kyereh',
  // Camerún
  'Vincent Aboubakar','Karl Toko Ekambi','Martin Hongla','André Onana',
  'Nicolas Ngamaleu','Pierre Kunde','Frank Zambo Anguissa',
  // Costa de Marfil
  'Wilfried Zaha','Nicolas Pépé','Sébastien Haller','Ibrahim Sangaré',
  'Franck Kessié','Maxwell Cornet','Jonathan Bamba',
  // Turquía
  'Hakan Çalhanoğlu','Arda Güler','Kerem Aktürkoğlu','Cengiz Ünder',
  'Yusuf Yazıcı','Zeki Çelik','Samet Akaydin',
  // Serbia
  'Dušan Vlahović','Aleksandar Mitrović','Dušan Tadić','Sergej Milinković-Savić',
  'Luka Jović','Nemanja Gudelj','Andrija Živković',
  // Ecuador
  'Ángel Mena','Enner Valencia','Jhegson Méndez','Moisés Caicedo',
  'Gonzalo Plata','Piero Hincapié','Jeremy Sarmiento',
  // Perú (no clasificó - quitar si molesta)
  // Australia
  'Mathew Leckie','Mitchell Duke','Craig Goodwin','Aaron Mooy',
  'Martin Boyle','Ajdin Hrustic','Garang Kuol',
  // Suiza
  'Granit Xhaka','Breel Embolo','Xherdan Shaqiri','Ruben Vargas',
  'Fabian Rieder','Michel Aebischer','Manuel Akanji',
  // Austria
  'Marko Arnautović','David Alaba','Marcel Sabitzer','Christoph Baumgartner',
  'Florian Grillitsch','Konrad Laimer','Patrick Wimmer',
  // Indonesia
  'Ragnar Oratmangoen','Thom Haye','Nathan Tjoe-A-On','Ivar Jenner',
  'Rafael Struick','Sandy Walsh','Jay Idzes',
  // Irak
  'Mohanad Ali','Aimen Hussein','Amjed Atwan',
  // Venezuela
  'Salomón Rondón','Yangel Herrera','Yeferson Soteldo','José Martínez',
  'Eduard Bello','Darwin Machis','Jefferson Savarino',
  // Uzbekistán
  'Eldor Shomurodov','Abbosbek Fayzullayev','Bobur Abdixoliqov','Jasur Yaxshiboyev',
].filter((v,i,a)=>a.indexOf(v)===i).sort();

// Función para enriquecer/actualizar la lista desde football-data.org (gratuita, sin key)
// Se llama al cargar si hay conexión; si falla usa la lista base de arriba
async function cargarJugadoresDesdeAPI() {
  // football-data.org ofrece competiciones de selecciones
  // API pública para Copa del Mundo: endpoint /v4/competitions/WC/teams
  // Nota: requiere key gratuita en x-auth-token header
  // Como alternativa, usamos Open Football Data (JSON estático de GitHub)
  try {
    const url = 'https://raw.githubusercontent.com/openfootball/world-cup/master/2026/squads.json';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timeoutId);
    }
    if (!res.ok) throw new Error('no ok');
    const data = await res.json();
    if (data && Array.isArray(data.squads)) {
      const apiPlayers = [];
      data.squads.forEach(squad => {
        (squad.players || []).forEach(p => {
          const name = p.name || '';
          if (name && !apiPlayers.includes(name)) apiPlayers.push(name);
        });
      });
      if (apiPlayers.length > 50) {
        JUGADORES_MUNDIAL = apiPlayers.sort();
        console.log(`[mundIAl] ${apiPlayers.length} jugadores cargados desde API`);
      }
    }
  } catch(e) {
    console.log('[mundIAl] API jugadores no disponible, usando lista base local');
  }
}


const FASES_ELIM = [
  {id:'16avos', label:'Dieciseisavos de final', pts:1,  cruces:16},
  {id:'8vos',   label:'Octavos de final',       pts:2,  cruces:8},
  {id:'4tos',   label:'Cuartos de final',        pts:3,  cruces:4},
  {id:'semis',  label:'Semifinales',             pts:5,  cruces:2},
  {id:'3ro',    label:'Tercer puesto',           pts:5,  cruces:1},
  {id:'final',  label:'Final',                   pts:20, cruces:1},
];

let currentStep=1, adminLogged=false, currentTab='total', filtroActivo='';
let allData={participantes:[],puntosEquipos:{},golesJugadores:{},resultadosElim:{},campeonFinal:'',fechaLimite:''};

// Goleadores elegidos en Step 4
let golesElegidos=[];

// ================================================================
// INIT
// ================================================================
window.addEventListener('load',()=>{
  // Aviso si se está viendo desde github.com/blob en lugar de GitHub Pages
  if (location.hostname === 'github.com') {
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#7f1d1d;color:#fca5a5;padding:12px 20px;font-size:14px;text-align:center;font-family:sans-serif';
    banner.innerHTML = '⚠️ <strong>URL incorrecta.</strong> Abrí la app desde GitHub Pages: <a href="https://adolforigacci.github.io/mundial2026/" style="color:#fbbf24;font-weight:bold">adolforigacci.github.io/mundial2026</a>';
    document.body.prepend(banner);
  }

  buildTeamPickers();
  buildGoleadoresPickers();
  populateCampeonSelect();
  loadDashboard();
  iniciarCountdown();
  cargarJugadoresDesdeAPI(); // enriquece lista de jugadores si hay conexión
});

// ================================================================
// COUNTDOWN + BLOQUEO AUTOMÁTICO DEL FORMULARIO
// ================================================================
function getFechaLimite(){
  if(allData.fechaLimite) return new Date(allData.fechaLimite);
  return FECHA_MUNDIAL;
}

function iniciarCountdown(){
  tickCountdown();
  setInterval(tickCountdown, 1000);
}

function tickCountdown(){
  const limite = getFechaLimite();
  const ahora = new Date();
  const diff = limite - ahora;

  if(diff <= 0){
    // Bloquear formulario
    document.getElementById('countdownWrap').style.display='none';
    document.getElementById('formCerradoBanner').style.display='block';
    document.getElementById('pronoFormContent').style.display='none';
    return;
  }

  // Formulario abierto
  document.getElementById('formCerradoBanner').style.display='none';
  document.getElementById('pronoFormContent').style.display='block';

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);

  document.getElementById('cdDias').textContent  = String(d).padStart(2,'0');
  document.getElementById('cdHoras').textContent = String(h).padStart(2,'0');
  document.getElementById('cdMins').textContent  = String(m).padStart(2,'0');
  document.getElementById('cdSegs').textContent  = String(s).padStart(2,'0');
}

// ================================================================
// BUILDERS
// ================================================================
function buildTeamPickers(){
  const opts=EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  ['mejoresPicker','peoresPicker'].forEach((id,i)=>{
    const bad=i===1;
    document.getElementById(id).innerHTML=[1,2,3,4,5].map(n=>`
      <div class="team-row">
        <div class="team-num ${bad?'bad':''}">${n}</div>
        <div class="select-wrap" style="flex:1">
          <select class="${bad?'peores-sel':'mejores-sel'}" onchange="checkCruce()">
            <option value="" disabled selected>Elige un equipo</option>${opts}
          </select>
        </div>
      </div>`).join('');
  });
}

function buildGoleadoresPickers(){
  golesElegidos=[];
  renderGolChips();
  actualizarNumGol();
}

function populateCampeonSelect(){
  const opts=EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  ['campeon','campeonFinal'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.innerHTML+=opts;
  });
}

// ---- AUTOCOMPLETE GOLEADORES ----
function onGolInput(q){
  const dd = document.getElementById('golDropdown');
  if(!q.trim()){ dd.classList.remove('open'); dd.innerHTML=''; return; }
  const resultados = JUGADORES_MUNDIAL
    .filter(j=>j.toLowerCase().includes(q.toLowerCase()) && !golesElegidos.includes(j))
    .slice(0,8);
  if(!resultados.length){ dd.classList.remove('open'); dd.innerHTML=''; return; }
  dd.innerHTML = resultados.map((j,i)=>`<div class="autocomplete-item" data-idx="${i}" onmousedown="elegirGol('${j.replace(/'/g,"\\'")}')"><span>⚽</span> ${j}</div>`).join('');
  dd.classList.add('open');
}

function onGolKeydown(e){
  const dd = document.getElementById('golDropdown');
  const items = dd.querySelectorAll('.autocomplete-item');
  const active = dd.querySelector('.ac-active');
  if(e.key==='ArrowDown'){
    e.preventDefault();
    const next = active ? active.nextElementSibling : items[0];
    if(next){ active && active.classList.remove('ac-active'); next.classList.add('ac-active'); }
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    const prev = active ? active.previousElementSibling : items[items.length-1];
    if(prev){ active && active.classList.remove('ac-active'); prev.classList.add('ac-active'); }
  } else if(e.key==='Enter'){
    e.preventDefault();
    if(active) elegirGol(active.textContent.replace('⚽','').trim());
    else {
      const q = document.getElementById('golSearchInput').value.trim();
      if(q && !golesElegidos.includes(q)) elegirGol(q);
    }
  } else if(e.key==='Escape'){
    dd.classList.remove('open');
  }
}

function elegirGol(nombre){
  nombre = nombre.trim();
  if(!nombre || golesElegidos.length>=5 || golesElegidos.includes(nombre)) return;
  golesElegidos.push(nombre);
  renderGolChips();
  actualizarNumGol();
  document.getElementById('golSearchInput').value='';
  document.getElementById('golDropdown').classList.remove('open');
  document.getElementById('golDropdown').innerHTML='';
  document.getElementById('errorGoles').style.display='none';
  if(golesElegidos.length<5) document.getElementById('golSearchInput').focus();
}

function quitarGol(idx){
  golesElegidos.splice(idx,1);
  renderGolChips();
  actualizarNumGol();
}

function renderGolChips(){
  document.getElementById('golChips').innerHTML = golesElegidos.map((g,i)=>`
    <div class="gol-chip">⚽ ${g}<button onclick="quitarGol(${i})" title="Quitar">×</button></div>`).join('');
}

function actualizarNumGol(){
  const n = golesElegidos.length+1;
  const wrap = document.getElementById('golPickerWrap');
  if(golesElegidos.length>=5){
    wrap.style.display='none';
  } else {
    wrap.style.display='block';
    document.getElementById('golNumIndicator').textContent=n;
  }
}

// ================================================================
// VALIDACIÓN CRUZADA mejores ≠ peores
// ================================================================
function checkCruce(){
  const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value).filter(Boolean);
  const peoresSels=[...document.querySelectorAll('.peores-sel')];
  let cruces=[];
  peoresSels.forEach(sel=>{
    const isMala=mejores.includes(sel.value);
    sel.style.borderColor=isMala?'var(--red)':'';
    sel.style.boxShadow=isMala?'0 0 0 3px rgba(248,113,113,.2)':'';
    if(isMala && sel.value) cruces.push(sel.value);
  });
  const errEl=document.getElementById('errorCruce');
  if(errEl){
    if(cruces.length){
      errEl.style.display='block';
      errEl.textContent=`⚠️ "${cruces[0]}" ya está en tus mejores. Un equipo no puede estar en ambas listas.`;
    } else {
      errEl.style.display='none';
    }
  }
}

// ================================================================
// NAVEGACIÓN
// ================================================================
function goStep(n){
  if(n>currentStep && !validateStep(currentStep)) return;
  document.getElementById(`step${currentStep}`).style.display='none';
  currentStep=n;
  document.getElementById(`step${currentStep}`).style.display='block';
  updateStepUI();
  if(n===6) buildResumen();
  window.scrollTo({top:0,behavior:'smooth'});
}

function validateStep(n){
  if(n===1){
    if(!document.getElementById('nombre').value.trim()){notify('Escribe tu nombre 😅');return false}
    const email=document.getElementById('emailInput').value.trim();
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      document.getElementById('emailError').style.display='block';
      document.getElementById('emailError').textContent='⚠️ Ingresá un email válido para identificarte.';
      notify('Ingresá un email válido 📧');return false;
    }
    document.getElementById('emailError').style.display='none';
    if(!document.getElementById('pais').value){notify('¿De dónde eres?');return false}
  }
  if(n===2){
    const sels=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
    if(sels.some(v=>!v)){notify('Elige los 5 mejores equipos');return false}
    if(new Set(sels).size<5){notify('No puedes repetir equipos');return false}
  }
  if(n===3){
    const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
    const peores=[...document.querySelectorAll('.peores-sel')].map(s=>s.value);
    if(peores.some(v=>!v)){notify('Elige los 5 peores equipos');return false}
    if(new Set(peores).size<5){notify('No puedes repetir equipos en los peores');return false}
    const cruce=peores.find(p=>mejores.includes(p));
    if(cruce){notify(`"${cruce}" ya está en tus mejores. Elige otro equipo.`);return false}
  }
  if(n===4){
    if(golesElegidos.length<5){
      document.getElementById('errorGoles').style.display='block';
      document.getElementById('errorGoles').textContent=`⚠️ Elegí ${5-golesElegidos.length} goleador${golesElegidos.length===4?'':'es'} más para completar los 5.`;
      notify('Elegí los 5 goleadores ⚽');return false;
    }
    if(new Set(golesElegidos).size<5){
      notify('Los 5 goleadores deben ser distintos');return false;
    }
  }
  if(n===5){
    if(!document.getElementById('campeon').value){notify('Elige tu campeón 🏆');return false}
  }
  return true;
}

function updateStepUI(){
  for(let i=1;i<=6;i++){
    const dot=document.getElementById(`dot${i}`);
    const lbl=document.getElementById(`lbl${i}`);
    if(i<currentStep){
      dot.className='step-dot done';dot.textContent='✓';
      if(lbl)lbl.className='step-label';
    } else if(i===currentStep){
      dot.className='step-dot active';
      if(i<=5)dot.textContent=i; else dot.textContent='✓';
      if(lbl)lbl.className='step-label active';
    } else {
      dot.className='step-dot';
      if(i<=5)dot.textContent=i; else dot.textContent='✓';
      if(lbl)lbl.className='step-label';
    }
    if(i<6){const line=document.getElementById(`line${i}`);if(line)line.className=i<currentStep?'step-line done':'step-line';}
  }
}

// ================================================================
// RESUMEN
// ================================================================
function buildResumen(){
  const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
  const peores=[...document.querySelectorAll('.peores-sel')].map(s=>s.value);
  const campeon=document.getElementById('campeon').value;
  document.getElementById('resumen').innerHTML=`
    <div class="summary-group">
      <div class="summary-title">👤 Participante</div>
      <div class="summary-chips"><span class="chip chip-green">${document.getElementById('nombre').value} — ${document.getElementById('pais').value}</span></div>
    </div>
    <div class="summary-group">
      <div class="summary-title">⭐ Mis 5 mejores <small style="opacity:.6">(sus puntos suman)</small></div>
      <div class="summary-chips">${mejores.map(e=>`<span class="chip chip-green">${e}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">💀 Mis 5 peores <small style="opacity:.6">(sus puntos restan)</small></div>
      <div class="summary-chips">${peores.map(e=>`<span class="chip chip-red">${e}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">🥅 Mis 5 goleadores <small style="opacity:.6">(cada gol suma)</small></div>
      <div class="summary-chips">${golesElegidos.map(g=>`<span class="chip chip-gold">${g}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">🏆 Mi campeón</div>
      <div class="summary-chips"><span class="chip chip-gold">${campeon} — +20 pts si acierto</span></div>
    </div>`;
}

// ================================================================
// ENVÍO con verificación de email duplicado
// ================================================================
async function enviarPronostico(){
  const btn=document.getElementById('btnEnviar');
  btn.textContent='📡 Enviando...';btn.disabled=true;

  const email = document.getElementById('emailInput').value.trim().toLowerCase();

  // Verificar si el email ya existe
  try{
    const res = await fetch(CONFIG.SCRIPT_URL+'?action=checkEmail&email='+encodeURIComponent(email));
    const data = await res.json();
    if(data && data.exists){
      document.getElementById('step6').style.display='none';
      document.getElementById('stepDuplicado').style.display='block';
      btn.textContent='🚀 Enviar mi pronóstico';btn.disabled=false;
      return;
    }
  }catch(e){
    // Si el check falla, el backend también lo valida con el campo email
  }

  const payload={
    action:'addParticipante',
    nombre:document.getElementById('nombre').value.trim(),
    email:email,
    pais:document.getElementById('pais').value,
    mejores:[...document.querySelectorAll('.mejores-sel')].map(s=>s.value).join(','),
    peores:[...document.querySelectorAll('.peores-sel')].map(s=>s.value).join(','),
    goleadores:golesElegidos.join(','),
    campeon:document.getElementById('campeon').value,
    timestamp:new Date().toISOString(),
  };
  try{
    await fetch(CONFIG.SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    });
    document.getElementById('step6').style.display='none';
    document.getElementById('step7').style.display='block';
  }catch(e){
    notify('Error al enviar. Intenta de nuevo.');
    btn.textContent='🚀 Enviar mi pronóstico';btn.disabled=false;
  }
}

// ================================================================
// DASHBOARD
// ================================================================
async function loadDashboard(){
  try{
    const res=await fetch(CONFIG.SCRIPT_URL+'?action=getData');
    allData=await res.json();
    renderDashboard();
  }catch(e){renderDemoData();}
}

function renderDemoData(){
  allData={
    participantes:[
      {nombre:'María López',    pais:'Argentina',mejores:'Argentina,Francia,Brasil,España,Alemania',  peores:'Arabia Saudita,Bolivia,Indonesia,Ghana,Siria',    goleadores:'Messi,Mbappé,Vinicius Jr.,Kane,Lewandowski', campeon:'Argentina'},
      {nombre:'Carlos Ruiz',    pais:'México',   mejores:'Brasil,España,Inglaterra,Portugal,Francia', peores:'Honduras,Arabia Saudita,Bolivia,Ghana,Guatemala', goleadores:'Vinicius Jr.,Kane,Mbappé,Messi,Benzema',     campeon:'Brasil'},
      {nombre:'Ana Müller',     pais:'Colombia', mejores:'Alemania,Francia,España,Argentina,Portugal',peores:'Arabia Saudita,Bolivia,Siria,Ghana,Indonesia',    goleadores:'Havertz,Mbappé,Musiala,Bellingham,Wirtz',campeon:'Alemania'},
      {nombre:'Pedro Silva',    pais:'Uruguay',  mejores:'Brasil,Argentina,Francia,Inglaterra,España',peores:'Bolivia,Ghana,Siria,Arabia Saudita,Indonesia',    goleadores:'Vinicius Jr.,Rodrygo,Messi,Neymar,Mbappé',   campeon:'Brasil'},
      {nombre:'Sophie Martin',  pais:'Chile',    mejores:'Francia,Brasil,Argentina,España,Alemania',  peores:'Arabia Saudita,Bolivia,Indonesia,Siria,Ghana',   goleadores:'Mbappé,Dembélé,Griezmann,Díaz (L.),Messi',  campeon:'Francia'},
      {nombre:'James Wilson',   pais:'Perú',     mejores:'Inglaterra,Francia,Brasil,España,Argentina',peores:'Arabia Saudita,Bolivia,Indonesia,Siria,Ghana',   goleadores:'Kane,Bellingham,Saka,Rashford,Mbappé',   campeon:'Inglaterra'},
      {nombre:'Laura González', pais:'Ecuador',  mejores:'España,Brasil,Argentina,Francia,Portugal',  peores:'Arabia Saudita,Siria,Bolivia,Ghana,Indonesia',   goleadores:'Yamal,Mbappé,Vinicius Jr.,Messi,Pedri',      campeon:'España'},
    ],
    puntosEquipos:{'Argentina':9,'Brasil':7,'Francia':6,'España':8,'Alemania':5,'Arabia Saudita':1,'Bolivia':0,'Siria':0},
    golesJugadores:{'Messi':3,'Mbappé':4,'Vinicius Jr.':2,'Kane':2,'Lewandowski':1,'Havertz':1,'Bellingham':2,'Dembélé':1,'Yamal':2},
    resultadosElim:{'16avos_1':'Argentina','16avos_2':'Francia'},
    campeonFinal:'',
    fechaLimite:''
  };
  renderDashboard();
}

function calcPuntos(p,tab){
  const mejores=(p.mejores||'').split(',').map(s=>s.trim()).filter(Boolean);
  const peores=(p.peores||'').split(',').map(s=>s.trim()).filter(Boolean);
  const goles=(p.goleadores||'').split(',').map(s=>s.trim()).filter(Boolean);
  let pf1=0;
  mejores.forEach(e=>{pf1+=allData.puntosEquipos[e]||0;});
  peores.forEach(e=>{pf1-=allData.puntosEquipos[e]||0;});
  goles.forEach(g=>{pf1+=allData.golesJugadores[g]||0;});
  let pf2=0;
  FASES_ELIM.forEach(fase=>{
    for(let c=1;c<=fase.cruces;c++){
      const ganador=(allData.resultadosElim[`${fase.id}_${c}`]||'').trim();
      if(!ganador)continue;
      const pick=(p[`pick_${fase.id}_${c}`]||'').trim();
      if(pick===ganador)pf2+=fase.pts;
    }
  });
  const bonus=(allData.campeonFinal&&p.campeon&&p.campeon.trim()===allData.campeonFinal.trim())?20:0;
  if(tab==='fase1')return pf1;
  if(tab==='fase2')return pf2;
  return pf1+pf2+bonus;
}

function renderDashboard(){
  const todos=[...(allData.participantes||[])];
  todos.sort((a,b)=>calcPuntos(b,currentTab)-calcPuntos(a,currentTab));

  const statBar=document.getElementById('statBar');
  if(todos.length){
    const lider=calcPuntos(todos[0],currentTab);
    statBar.innerHTML=`
      <div class="stat-item"><div class="stat-num">${todos.length}</div><div class="stat-label">Participantes</div></div>
      <div class="stat-item"><div class="stat-num">${lider>=0?'+':''}${lider}</div><div class="stat-label">Puntaje líder</div></div>
      <div class="stat-item"><div class="stat-num" style="font-size:16px;margin-top:4px">${allData.campeonFinal||'?'}</div><div class="stat-label">Campeón</div></div>`;
  } else {
    statBar.innerHTML='';
  }

  const filtro=filtroActivo.toLowerCase().trim();
  const tbody=document.getElementById('tablaBody');

  if(!todos.length){
    tbody.innerHTML='<tr><td colspan="4" style="text-align:center;padding:3rem;color:var(--text-muted)">Aún no hay participantes inscriptos</td></tr>';
    return;
  }

  tbody.innerHTML=todos.map((p,i)=>{
    const pts=calcPuntos(p,currentTab);
    const rank=i+1;
    let rankClass='rank-n';
    if(rank===1)rankClass='rank-1';
    else if(rank===2)rankClass='rank-2';
    else if(rank===3)rankClass='rank-3';
    else if(rank>todos.length-3)rankClass='rank-last';
    const initials=(p.nombre||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const hasCamp=allData.campeonFinal&&p.campeon&&p.campeon.trim()===allData.campeonFinal.trim();
    const ptsClass=pts>0?'pts-pos':pts<0?'pts-neg':'pts-zero';
    const nombre=p.nombre||'';
    const isMatch=filtro&&nombre.toLowerCase().includes(filtro);
    const hidden=filtro&&!isMatch?'hidden-row':'';
    const hl=isMatch?'highlight':'';
    return `<tr class="${hidden} ${hl}">
      <td><div class="rank-badge ${rankClass}">${rank}</div></td>
      <td><div class="player-cell">
        <div class="avatar">${initials}</div>
        <div><div class="player-name">${nombre}</div><div class="player-country">${p.pais||''}</div></div>
      </div></td>
      <td style="text-align:right"><span class="pts ${ptsClass}">${pts>0?'+':''}${pts}</span></td>
      <td style="text-align:right;font-size:13px;color:var(--text-muted)">${p.campeon||'—'}${hasCamp?' 🏆':''}</td>
    </tr>`;
  }).join('');

  if(todos.length>=4){
    const ultimos=todos.slice(-3).reverse();
    document.getElementById('zonaPeligro').style.display='block';
    document.getElementById('zonaPeligroCards').innerHTML=ultimos.map((p,i)=>{
      const pos=todos.length-i;
      const initials=(p.nombre||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      return `<div class="zona-card">
        <div class="avatar" style="width:48px;height:48px;font-size:16px;margin:0 auto 10px">${initials}</div>
        <div class="player-name" style="font-size:14px">${p.nombre||''}</div>
        <div class="player-country" style="font-size:11px">${p.pais||''}</div>
        <div class="zona-rank">🔥 #${pos}</div>
      </div>`;
    }).join('');
  }
}

function filtrarTabla(val){
  filtroActivo=val;
  renderDashboard();
}

function showTab(tab,btn){
  currentTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderDashboard();
}

// ================================================================
// ADMIN
// ================================================================
function showPage(page,btn){
  if(page==='admin'){
    if(!adminLogged){document.getElementById('loginOverlay').style.display='flex';return;}
    loadAdminData();
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  btn.classList.add('active');
  if(page==='dashboard')loadDashboard();
}

// MEJORA: botón "Volver" en el overlay de login
function cerrarLoginOverlay(){
  document.getElementById('loginOverlay').style.display='none';
  document.getElementById('adminPass').value='';
  document.getElementById('loginError').textContent='';
}

function checkLogin(){
  if(document.getElementById('adminPass').value===CONFIG.ADMIN_PASS){
    adminLogged=true;
    document.getElementById('loginOverlay').style.display='none';
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    document.getElementById('page-admin').classList.add('active');
    document.getElementById('adminBtn').classList.add('active');
    loadAdminData();
  }else{document.getElementById('loginError').textContent='Contraseña incorrecta';}
}

async function loadAdminData(){
  try{const res=await fetch(CONFIG.SCRIPT_URL+'?action=getData');allData=await res.json();}
  catch(e){renderDemoData();}
  renderAdminParticipantes();
  renderAdminGoles();
  renderAdminPuntosFase();
  renderAdminEliminatorias();
  renderFechaLimiteAdmin();
}

// ---- ADMIN FECHA LÍMITE ----
function renderFechaLimiteAdmin(){
  const status = document.getElementById('fechaLimiteStatus');
  const input  = document.getElementById('fechaLimiteInput');
  if(allData.fechaLimite){
    const d = new Date(allData.fechaLimite);
    // Convertir a formato datetime-local (local timezone)
    const offset = d.getTimezoneOffset()*60000;
    const localISO = new Date(d-offset).toISOString().slice(0,16);
    input.value = localISO;
    status.textContent = `✅ Cierre configurado: ${d.toLocaleString('es-AR')}`;
    status.style.color='var(--verde)';
  } else {
    input.value='';
    status.textContent='Sin fecha configurada. Se usa el inicio del Mundial (11 Jun 2026 12:00) por defecto.';
    status.style.color='var(--text-muted)';
  }
}

async function guardarFechaLimite(){
  const val = document.getElementById('fechaLimiteInput').value;
  if(!val){notify('Elegí una fecha primero');return;}
  const isoFecha = new Date(val).toISOString();
  await saveToSheet({action:'updateConfig',key:'fechaLimite',value:isoFecha});
  allData.fechaLimite=isoFecha;
  notify('Fecha límite guardada ✓');
  renderFechaLimiteAdmin();
}

async function borrarFechaLimite(){
  await saveToSheet({action:'updateConfig',key:'fechaLimite',value:''});
  allData.fechaLimite='';
  notify('Fecha límite eliminada ✓');
  renderFechaLimiteAdmin();
}

function renderAdminParticipantes(){
  const p=allData.participantes||[];
  document.getElementById('adminParticipantes').innerHTML=p.length
    ?p.map((x,i)=>`<tr>
        <td style="padding:6px 4px">${i+1}. <strong>${x.nombre}</strong></td>
        <td style="padding:6px 4px;color:var(--text-dim);font-size:11px">${x.email||'—'}</td>
        <td style="padding:6px 4px;text-align:right;color:var(--verde)">${x.pais}</td>
      </tr>`).join('')
    :'<tr><td style="color:var(--text-muted)">Sin inscriptos aún</td></tr>';
}

function renderAdminGoles(){
  const goleadores=[...new Set((allData.participantes||[]).flatMap(x=>(x.goleadores||'').split(',').map(g=>g.trim()).filter(Boolean)))].sort();
  document.getElementById('golesAdmin').innerHTML=goleadores.length
    ?goleadores.map(g=>`<div class="result-row"><span class="team-name">${g}</span><input type="number" class="goals-input" min="0" value="${allData.golesJugadores[g]||0}" data-gol="${g}"><span class="vs">goles</span></div>`).join('')
    :'<div style="color:var(--text-muted);font-size:13px">Los goleadores aparecen aquí una vez que los participantes se inscriban.</div>';
}

function renderAdminPuntosFase(){
  document.getElementById('puntosFaseAdmin').innerHTML=EQUIPOS_2026.map(e=>`
    <div class="result-row">
      <span class="team-name" style="font-size:12px">${e}</span>
      <input type="number" class="goals-input" min="0" value="${allData.puntosEquipos[e]||0}" data-equipo="${e}">
      <span class="vs" style="font-size:11px">pts</span>
    </div>`).join('');
}

function renderAdminEliminatorias(){
  const opts='<option value="">— Sin resultado —</option>'+EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  let html='';
  FASES_ELIM.forEach(fase=>{
    html+=`<div class="bracket-section"><div class="bracket-section-title">⚡ ${fase.label} — ${fase.pts} pt${fase.pts>1?'s':''} por acierto</div>`;
    for(let c=1;c<=fase.cruces;c++){
      const key=`${fase.id}_${c}`;
      const val=allData.resultadosElim[key]||'';
      html+=`<div class="result-row">
        <span class="vs">Cruce ${c}</span>
        <div class="select-wrap" style="flex:1">
          <select data-elim="${key}" style="font-size:12px;padding:7px 10px">
            ${opts.replace(`value="${val}"`,`value="${val}" selected`)}
          </select>
        </div>
      </div>`;
    }
    html+='</div>';
  });
  document.getElementById('eliminatoriasAdmin').innerHTML=html;
}

async function guardarGoles(){
  const goles={};document.querySelectorAll('[data-gol]').forEach(i=>{goles[i.dataset.gol]=parseInt(i.value)||0;});
  await saveToSheet({action:'updateGoles',goles});allData.golesJugadores=goles;notify('Goles actualizados ✓');renderDashboard();
}
async function guardarPuntosFase(){
  const puntos={};document.querySelectorAll('[data-equipo]').forEach(i=>{puntos[i.dataset.equipo]=parseInt(i.value)||0;});
  await saveToSheet({action:'updatePuntosFase',puntos});allData.puntosEquipos=puntos;notify('Puntos guardados ✓');renderDashboard();
}
async function guardarEliminatorias(){
  const resultados={};document.querySelectorAll('[data-elim]').forEach(s=>{if(s.value)resultados[s.dataset.elim]=s.value;});
  await saveToSheet({action:'updateEliminatorias',resultados});allData.resultadosElim=resultados;notify('Resultados guardados ✓');renderDashboard();
}
async function guardarCampeon(){
  const val=document.getElementById('campeonFinal').value;
  await saveToSheet({action:'updateCampeon',campeon:val});allData.campeonFinal=val;notify('Campeón guardado ✓');renderDashboard();
}
async function saveToSheet(payload){
  try{await fetch(CONFIG.SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(payload)
  });}
  catch(e){console.log('Error:',e);}
}
function notify(msg){
  const n=document.getElementById('notif');n.textContent=msg;n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),3000);
}
