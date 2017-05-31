const homeCusBtn = document.querySelector('#hc-btn');
const busCusBtn = document.querySelector('#bc-btn');

/*Nav Buttons*/
const navParent = document.querySelector('.nav-parent');
const homebtn = document.querySelector('#home-btn');
const browseAisles = document.querySelector('#browse-aisles');
const deliveryPickup = document.querySelector('#delivery');
const login = document.querySelector('#login');
const register = document.querySelector('#register');

/*elements to be shown depending on what button is clicked*/
const homeScreen = document.querySelector('#home-screen');
const custScreen = document.querySelector('#customer-segment');

function setActiveState(e) {
  if(!e.target.matches('a')) return;
  navParent.querySelectorAll('ul li').forEach(elem => {
    elem.classList.remove('active');
  })
  e.target.parentNode.classList.add('active');
}

navParent.addEventListener('click', setActiveState);


/*Routing*/
function customerScreen(e) {
  homeScreen.style.display = 'none';
  custScreen.style.display = 'block';
}

function goHome(e) {
  homeScreen.style.display = 'flex';
  custScreen.style.display = 'none';
}

const routes = {
  '/': goHome,
  '/customer': customerScreen,
  '/business': customerScreen
};
//routing contructor
const router = Router(routes);
router.init();
