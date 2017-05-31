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

function setActiveState(el, array) {
  // if(!e.target.matches('a')) return;
  array.forEach(elem => {
    elem.classList.remove('active');
  })
  el.parentNode.classList.add('active');
}

function navState(e) {
  if (!e.target.matches('a')) return;
  const elem = e.target;
  const nodeListArr = [...navParent.querySelectorAll('ul li')];
  console.log(nodeListArr)
  setActiveState(elem, nodeListArr);
}
navParent.addEventListener('click', navState);


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
