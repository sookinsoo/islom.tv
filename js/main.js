let url = 'https://islomapi.uz/api/present/day?region=Toshkent';

let sahar = document.getElementById('sahar');
let quyosh = document.getElementById('quyosh');
let peshn = document.getElementById('peshin');  
let asr = document.getElementById('asr');  
let shom = document.getElementById('shom iftor');
let hufton = document.getElementById('hufton');






fetch(url)
.then((res) => res.json())
.then((data) => {
    let saharlik = data.times.tong_saharlik;
    sahar.textContent = saharlik
    let qysh = data.times.quyosh;
    quyosh.textContent= qysh
    let qyshs = data.times.quyosh;
    quyosh.textContent= qyshs
    let pshn = data.times.peshin;
    peshn.textContent=pshn
    let asrs = data.times.asr;
    asr.textContent=asrs
    let shoms = data.times.shom_iftor;
    shom.textContent=shoms
    let huftons = data.times.hufton;
    hufton.textContent=huftons

})

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.list--menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})




function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function displayClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    const clockDisplay = document.getElementById("clock");
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayClock, 1000); 





