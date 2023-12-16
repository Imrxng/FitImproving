let map = L.map('FitMap').setView([51.219937278408196, 4.467006270965586], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let greenIcon = L.icon({
    iconUrl: './assets/Icons/Pointer.webp',

    iconSize:     [40, 40], 
    iconAnchor:   [20, 30], 
    popupAnchor:  [0, -28] 
});

let marker = L.marker([51.219937278408196, 4.467006270965586], {icon: greenIcon}).addTo(map);

marker.bindPopup("Welkom bij FitImproving").openPopup();