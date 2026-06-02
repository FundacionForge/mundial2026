# mundIAl 2026 — Documentación del sitio

Prode (juego de pronósticos) del Mundial 2026. Este documento describe cómo funciona todo:
puntajes, habilitación de fases, validaciones, avisos diarios, visualización de pronósticos y el panel de Admin.

---

## 1. Arquitectura general

- **Frontend**: `index.html` + `app.js` (sitio estático servido por GitHub Pages). No hay framework.
- **Backend**: `backend.gs` (Google Apps Script publicado como *Web App*). Persiste en **Google Sheets**.
- **Datos de fútbol**: integración con **api-football.com** (api-sports.io) mediante un *trigger* automático cada 30 min que actualiza puntos de grupos, goles y resultados de eliminatorias.
- **Identidad**: los participantes se identifican **solo por email** (sin contraseña ni login).

### Entornos
| Entorno | Sitio | Backend / Planilla |
|--------|-------|--------------------|
| **Producción** | `fundacionforge.github.io/mundial2026` (repo `FundacionForge/mundial2026`, rama `main`) | Backend de producción → planilla real |
| **Pruebas** | `localhost` (rama `dev`, `npx serve .`) | Backend de prueba → planilla de testing |
| **Backup** | repo `adolforigacci/mundial2026` (privado) | — |

El frontend **elige el backend solo** según el dominio:
```js
const ES_PRODUCCION = (location.hostname === 'fundacionforge.github.io');
SCRIPT_URL = ES_PRODUCCION ? BACKENDS.prod : BACKENDS.test;
```
En cualquier lugar que no sea el dominio oficial (localhost, staging) se usa el **backend de prueba** y aparece abajo el cartel **🧪 ENTORNO DE PRUEBA**. Así es imposible ensuciar los datos reales al probar.

> Flujo de trabajo: se desarrolla en `dev`, se prueba en `localhost`, y al aprobar se hace `merge dev → main` y `push` a producción.

---

## 2. Cálculo de puntajes

Hay **3 tablas**, que se calculan por participante:

### Tabla 1ra Ronda (`pf1`)
Refleja los aciertos de la fase de grupos:
- **+** puntos de cada uno de los **5 mejores** equipos elegidos (según los puntos cargados por equipo).
- **−** puntos de cada uno de los **5 peores** equipos elegidos (restan).
- **+** goles de cada uno de los **5 goleadores** elegidos.

`pf1 = Σ puntos(mejores) − Σ puntos(peores) + Σ goles(goleadores)`

### Tabla Eliminatorias (`pf2`)
Suma puntos por **acertar el ganador de cada cruce**, con distinto valor por fase:

| Fase | Puntos por acierto | Cruces |
|------|:--:|:--:|
| Dieciseisavos (16avos) | **1** | 16 |
| Octavos | **2** | 8 |
| Cuartos | **3** | 4 |
| Semifinales | **5** | 2 |
| Tercer puesto | **5** | 1 |
| Final | **20** | 1 |

Para cada cruce, si el pronóstico del participante == el ganador real cargado, suma los puntos de esa fase.

### Tabla General
`General = pf1 + pf2 + bonus de campeón`

- **Bonus de campeón = +20** si el campeón elegido (en el registro) coincide con el campeón real.
- El bonus suma **solo en la General** (no en la tabla de Eliminatorias). Por eso, acertar la **final** (20) **y** el **campeón** (20) puede dar **40**.
- El **campeón del concurso** es quien lidera la **Tabla General** (puede haber **más de uno** si empatan).

### Visualización de las tablas
- Pestañas: **Tabla 1ra Ronda**, **Tabla Eliminatorias**, **Tabla General**.
- "Tabla Eliminatorias" aparece **grisada/deshabilitada** hasta que la fase de eliminatorias esté disponible.
- Por defecto se muestra "1ra Ronda" durante la fase de grupos, y "General" una vez que hay eliminatorias.
- Se listan hasta **100 participantes**, ordenados de mayor a menor.
- **Resaltado**: el/los **líder(es)** (mismo puntaje más alto) en **dorado** con 👑; los **últimos 4** (con empates) en **rojo**. Si todos están iguales (ej. todo en 0), no se marca a nadie.

---

## 3. Habilitación de las fases

### 3.1. Fase de grupos (Pronósticos / 1ra ronda)
- El **formulario de Pronósticos** está abierto mientras **`ahora < fecha límite`**.
  - La fecha límite se configura en Admin ("Fecha límite para pronósticos"). Si no se configura, por defecto es el inicio del Mundial (11/06/2026 12:00).
  - Cuando vence, el formulario se bloquea automáticamente (con un cartel) y ya no se puede registrar.
- La **solapa "Pronósticos"** se muestra mientras **no haya eliminatorias disponibles**. Cuando ya hay cruces de eliminatorias cargados, la solapa **se oculta** (la fase de grupos terminó)… salvo que se active el toggle **"Forzar solapa Pronósticos"** en Admin.

### 3.2. Fases eliminatorias
Hay **4 ventanas de carga**: **16avos, Octavos, Cuartos, y Semifinal+Final** (esta última agrupa semifinales + tercer puesto + final en una sola carga).

Cada cruce vive en la hoja `Eliminatorias` con: `Clave, Home, Away, KickoffISO, Status, Ganador`.
Las claves son estables: `16avos_1..16`, `8vos_1..8`, `4tos_1..4`, `semis_1..2`, `3ro_1`, `final_1`.

Una fase está **DISPONIBLE / ABIERTA para cargar** cuando se cumplen **las dos** condiciones:
1. **Cruces cargados**: los partidos de esa ronda tienen Home y Away (16avos necesita las 16; la ventana Semifinal necesita `semis_1` y `semis_2`).
2. **No cerrada**: todavía no llegó su **fecha tope** = **12 hs antes del primer partido** de esa fase (el de horario más temprano). Se puede forzar manualmente con el override de Admin ("Fechas tope eliminatorias").

**La pantalla muestra siempre la PRIMERA fase abierta**, en orden 16avos → Octavos → Cuartos → Semifinal.

#### Cómo avanza de una fase a la siguiente (torneo real, automático)
1. 16avos está abierto hasta 12 hs antes de su primer partido; al pasar ese momento, **16avos se cierra**.
2. Al terminar 16avos, se cargan los cruces de Octavos (la API o el Admin) con sus fechas reales.
3. Como 16avos ya está cerrado, la app **saltea 16avos y muestra Octavos**.

> **No se borran las fases anteriores**: sus picks y resultados se necesitan para la Tabla Eliminatorias. Una fase deja de estar disponible por su **fecha tope**, no por borrarla.

#### La ventana Semifinal + Final (estilo llave)
Se carga todo junto: el participante elige el ganador de cada **semifinal** → de esos 2 finalistas elige el **campeón** (1º) → y entre los 2 perdedores de semis elige el **3er puesto**. Se muestra el podio resultante (1º/2º/3º/4º).

---

## 4. Validaciones

### Registro de pronóstico (fase de grupos)
- **Paso 1 (Datos)**: nombre obligatorio; email con formato válido; país elegido. Al avanzar, además se consulta si el **email ya tiene un pronóstico** → si existe, no deja avanzar y avisa amablemente.
- **Paso 2 (5 mejores)**: 5 equipos, sin vacíos y **sin repetir**.
- **Paso 3 (5 peores)**: 5 equipos, sin vacíos, sin repetir y **ninguno puede estar también en los mejores**.
- **Paso 4 (5 goleadores)**: 5 jugadores **distintos** (buscador con autocompletado + panel de ayuda con todos los equipos/jugadores).
- **Paso 5 (Campeón)**: obligatorio.
- **Email duplicado**: se valida en 3 lugares → al avanzar del paso 1, al enviar, y en el **servidor** (no crea fila duplicada). Mensaje: *"¡Ya tenemos tu pronóstico! …"*.

### Pronósticos de eliminatorias
- Hay que **completar todos** los cruces de la ventana antes de guardar.
- El **servidor rechaza** la carga si la fase ya **cerró** (pasó la fecha tope).
- Para cargar hay que **identificarse con el email** con el que se registró (debe existir).

### Avisos del día (Admin)
- **No se permite cargar 2 avisos con la misma fecha** (entrarían en conflicto). Al guardar, avisa cuál fecha está repetida.

---

## 5. Avisos del día (cartel de bienvenida)

Permite mostrar un cartel al entrar (ej. *"¿Sabías que…?"*, *"¡Último momento!"*).

- Se configuran en **Admin → "Avisos del día"**: una lista de filas con **Fecha, Título, Texto y un tilde "Activo"**.
- **Lógica de aparición** (al entrar al sitio): se muestra un aviso si **está Activo**, su **fecha es la de hoy**, y **el texto no está vacío**.
- Se muestra **durante todo ese día**. El Admin lo apaga **desmarcando "Activo"**.
- Para no molestar, **no se repite a un mismo usuario si ya lo cerró ese día** (se cierra con **Aceptar** o con la **✕**).
- El cartel muestra el **Título** (grande, dorado) y el **Texto** (respeta saltos de línea).

---

## 6. Ver pronósticos cargados

### Como usuario (pantalla de Tablas)
- Al **cliquear una fila** de la tabla:
  - Si el sitio ya conoce tu email (porque cargaste tu pronóstico o te identificaste) **y es tu fila** → muestra tu pronóstico directo.
  - Si no, te **pide tu email**. Si coincide con esa fila → lo muestra; si es de otro → *"Solo puedes ver tus propios pronósticos"*.
- El control es **laxo a propósito** (con saber el email ajeno se podría ver): es un juego entre compañeros.

### Como Admin
- En **"Participantes inscriptos"**, al cliquear un participante se muestra su pronóstico **directamente, sin pedir email**.

### Qué muestra el visor
País, **5 mejores**, **5 peores**, **5 goleadores**, **campeón**, y los **pronósticos de eliminatorias** por fase (cada cruce con su "Equipo A vs Equipo B → elegido").

---

## 7. Panel de Admin

**Acceso**: por URL `…/mundial2026/#admin` (no figura en el menú, para que sea discreto). Pide una **clave** (definida en `CONFIG.ADMIN_PASS` dentro de `app.js`).
> Nota de seguridad: la clave viaja en el frontend (público), así que es *ofuscación*, no seguridad real. Apropiado para este juego.

Funcionalidades (cada una es una "card"):

1. **📅 Fecha límite para pronósticos** — fija/borra la fecha y hora en que se cierra el formulario de la fase de grupos.
2. **⏱️ Fechas tope eliminatorias (fallback)** — override manual del cierre de cada fase (16avos, octavos, cuartos, semifinal). Vacío = automático (12 hs antes del primer partido). Sirve también para "cerrar" una fase a mano.
3. **⚽ Forzar solapa Pronósticos** — mantiene visible la solapa "Pronósticos" aunque ya haya eliminatorias (para revisarla).
4. **📣 Avisos del día** — alta/baja de avisos (Fecha, Título, Texto, Activo). Valida que no haya 2 en la misma fecha.
5. **👥 Participantes inscriptos** — lista de inscriptos; **clic en uno → ver su pronóstico**.
6. **⬇️ Exportar pronósticos** — descarga un **CSV (se abre en Excel)** con: cada participante, sus elecciones (mejores/peores/goleadores/campeón), los puntos que aportó cada una, y los totales (1ra Ronda / Eliminatorias / General). Útil para ver los más/menos elegidos.
7. **🥅 Goles por jugador** — cargar los goles de cada goleador elegido (recalcula puntos).
8. **📊 Puntos fase de grupos** — cargar los puntos de tabla de cada selección.
9. **🏆 Ganadores por cruce** — cargar el ganador de cada cruce de eliminatorias (define el puntaje de la Tabla Eliminatorias).
10. **🏆 Campeón del mundo** — definir el campeón real (otorga el bonus de +20).

> Muchos de estos valores (puntos, goles, ganadores) se **actualizan solos** desde api-football vía el trigger; el Admin sirve para **override manual** o si la API falla.

---

## 8. Comportamiento de la interfaz

- **Menú dinámico**: el orden y la visibilidad de las solapas dependen de la fase. Durante grupos: **Pronósticos** primero. Con una ventana de eliminatorias abierta: **Eliminatorias** primero (y Pronósticos se oculta, salvo "Forzar"). La solapa Admin no aparece (acceso por `#admin`).
- **Refrescar (F5)** mantiene la pantalla y la solapa donde estabas (se recuerda en el navegador), con los datos actualizados.
- **Cartel 🧪 ENTORNO DE PRUEBA** abajo cuando no es el dominio oficial.

---

## 9. Backend (Apps Script) — referencia técnica

**Acciones** (vía la URL `/exec`):
- `GET ?action=getData` → devuelve todo: `participantes, puntosEquipos, golesJugadores, resultadosElim, crucesElim, deadlines, campeonFinal, fechaLimite, forzarPronosticos, cierresElim, avisos`.
- `GET ?action=checkEmail&email=…` → `{exists:bool}`.
- `POST` con `action`: `addParticipante`, `updatePicks`, `updateGoles`, `updatePuntosFase`, `updateEliminatorias`, `updateCampeon`, `updateConfig`.

**Hojas de la planilla**:
- `Participantes`: `Timestamp, Nombre, Email, Pais, Mejores, Peores, Goleadores, Campeon, PicksJSON`.
- `Config`: pares clave/valor (`fechaLimite`, `campeonFinal`, `forzar_pronosticos`, `cierre_16avos/8vos/4tos/semifinal`, `avisos`).
- `PuntosEquipos`: `Equipo, Puntos`.
- `GolesJugadores`: `Jugador, Goles`.
- `Eliminatorias`: `Clave, Home, Away, KickoffISO, Status, Ganador`.
- `LogAPI`: registro de las actualizaciones automáticas.

**Conexión a la planilla**: por `SPREADSHEET_ID` (con `openById`) o, si está vacío, la planilla a la que está adjunto el script. Cada entorno (prod/test) usa su propia planilla.

**Trigger automático** (`actualizarDesdeAPI`, cada 30 min): actualiza puntos de grupos, goles de los goleadores elegidos y ganadores de eliminatorias desde api-football.
> ⚠️ El plan gratuito de api-football (100 req/día) no alcanza para correr cada 30 min (~384 req/día). Conviene subir el intervalo o el plan.

---

## 10. Datos

- **48 selecciones** y **1260 jugadores** cargados de forma fija desde un JSON oficial (la carga desde APIs externas de jugadores está desactivada a propósito, para que no se pisen los nombres).
- Los jugadores tienen el formato `"Nombre Apellido (ABR)"` (la abreviatura ayuda a desambiguar nombres repetidos).

---

*Documento generado para referencia del equipo. Ante cambios en el código, actualizar este archivo.*
