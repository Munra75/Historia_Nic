// Array de colores para los popups
const popupColors = ["#ffcccc", "#ffe6cc", "#ffffcc", "#e6ffcc", "#ccffe6", "#cce6ff", "#e6ccff", "#ffccff"];

// Función para obtener un color aleatorio
function getRandomColor() {
    return popupColors[Math.floor(Math.random() * popupColors.length)];
}

// Crear el mapa
const map = L.map('map').setView([13.1014444, -85.61475], 7); // Asegúrate de ajustar la latitud y longitud

// Agregar capa de mapa (por ejemplo, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Crear los marcadores
const marker = L.marker([12.339688126549204, -86.02221050547669]).addTo(map);
const marker1 = L.marker([12.436662065577448, -86.88075527391875]).addTo(map);
const marker2 = L.marker([12.5424444,-86.897444]).addTo(map);
const marker3 = L.marker([11.40825,-85.788128]).addTo(map);
const marker4 = L.marker([15.0064851, -83.1301235]).addTo(map);
const marker5 = L.marker([11.856114, -86.240308]).addTo(map);
const marker6 = L.marker([8.2098958,-77.0474086]).addTo(map)
const marker7 = L.marker([8.4382497,-79.1837382 ]).addTo(map)
const marker8 = L.marker([7.577091377468596, -81.07396327145683 ]).addTo(map)
const marker9 = L.marker([8.342355, -82.286734  ]).addTo(map)

// Crear el popup con colores dinámicos para el primer marcador
marker.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Hacienda San Jacinto</b><br>
            En este sitio tuvo lugar la histórica batalla de 1856, donde fuerzas nicaragüenses derrotaron a los filibusteros.
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Hacienda San Jacinto</h2>
        <p>En la Hacienda San Jacinto tuvo lugar la histórica batalla de 1856...</p>
        <p>Más detalles...</p>
    `;
});

// Crear el popup con colores dinámicos para el segundo marcador
marker1.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Casa del Obrero</b><br>
            Rigoberto López Pérez asestó un duro golpe a la dictadura de Somoza.
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Casa del Obrero</h2>
        <p>Lugar épico para la Historia de nuestro país...</p>
        <p>Más detalles...</p>
    `;
    
});

marker2.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Hacienda el Pozo</b><br>
            Liberales y Conservadores libran la primera de muchas batallas.
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Hacienda el Pozo</h2>
        <p>Don Frutos Chamorro, lider conservador estuvo a punto de perder la vida</p>
        <p>Más detalles...</p>
    `;
   
});

marker3.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Encuentro de dos mundos.</b><br>
           ¿Posible reunión entre Gil González de Ávila y el Cacique Nicarao? en abril de 1523
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Encuentro</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
    `;
   
});

marker4.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Descubrimiento</b><br>
           Cristóbal Colón en su cuarto y último viaje descubre las Costas de Nicaragua el 17 de septiembre de 1502.
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Descubrimiento</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});

marker5.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Resistencia</b><br>
           17 de abril de 1523 Diriangén lucha contra los españoles en la Quebrada del Perro en lo que hoy es Diriamba.
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Resistencia</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});

marker6.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Colonización</b><br>
          Santa María la Antigua del Darién, asentamiento español, siendo su primer gobernador Pedrarias Dávila. 
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Conquista</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});

marker7.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Colonización</b><br>
           Archipielago de las Perlas, parten las expediciones españolas el dia 21 de enero de 1522 para la conquista de Nicaragua, por mar 100 leguas. 
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Conquista</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});
   
marker8.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Colonización</b><br>
           Continua la expedición de Gil González Dávila y Andrés Niño. 
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Conquista</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});

marker9.bindPopup(() => {
    const color = getRandomColor();
    return `
        <div class="custom-popup" style="background-color: ${color};">
            <b>Colonización</b><br>
           Continua la expedición, esta vez Dávila continúa a pie y Niño lo hace por mar para descubrir Corinto y el Golfo de Fonseca. 
        </div>`;
}).on('click', () => {
    document.getElementById('info-popup').style.display = 'block';
    document.getElementById('info-popup').innerHTML = `
        <h2>Conquista</h2>
        <p>Encuentro entre dos mundos diferentes</p>
        <p>Más detalles...</p>
          `;
          
});