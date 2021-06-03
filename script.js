// console.log('Connected To JS Server');  (For Testing Purpose!)

setInterval(setClock, 1000)
setInterval(time, 1000)

const hrhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-min-hand]')
const sechand = document.querySelector('[data-sec-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(sechand, secondsRatio)
    setRotation(minhand, minutesRatio)
    setRotation(hrhand, hoursRatio)

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

function time(){
    let ctime = document.getElementById('currentTime');
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    ctime.innerHTML = hours +":" + minutes +''+ ampm;
}

time()

