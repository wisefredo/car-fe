const homeCusBtn = document.querySelector('#hc-btn');
const busCusBtn = document.querySelector('#bc-btn');
const homebtn = document.querySelector('#home-btn');
const homeScreen = document.querySelector('#home-screen');
const custScreen = document.querySelector('#customer-segment');

function customerScreen(evt) {
  homeScreen.style.display = 'none';
  custScreen.style.display = 'block';
}

function goHome(evt) {

  homeScreen.style.display = 'flex';
  custScreen.style.display = 'none';
}


const routes = {
  '/': goHome,
  '/customer': customerScreen,
  '/business': customerScreen

};

const router = Router(routes);
router.init();
