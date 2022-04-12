import genJoke from './genJoke';
import './styles/main.scss';
import stingray from './assets/sting-logo.svg';


const stingRay = document.getElementById('stingRay')
stingRay.src = stingray

const awesomeBtn = document.getElementById('awesomeBtn')
awesomeBtn.addEventListener('click', genJoke)

genJoke();