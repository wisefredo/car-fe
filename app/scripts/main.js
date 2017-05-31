const homeCusBtn = document.querySelector('#hc-btn');
const busCusBtn = document.querySelector('#bc-btn');

/*Nav Buttons*/
const navParent = document.querySelector('.nav-parent');
const sideOptions = document.querySelector('.side-options');
const homebtn = document.querySelector('#home-btn');
const browseAisles = document.querySelector('#browse-aisles');
const deliveryPickup = document.querySelector('#delivery');
const login = document.querySelector('#login');
const register = document.querySelector('#register');

/*elements to be shown depending on what button is clicked*/
const homeScreen = document.querySelector('#home-screen');
const custScreen = document.querySelector('#customer-segment');

/*reusable function to control state of nav selection*/
function setActiveState(el, array) {
  array.forEach(elem => {
    elem.classList.remove('active');
  })
  el.classList.add('active');
}

// nav state
function navState(e) {
  if (!e.target.matches('a')) return;
  const elem = e.target.parentNode;
  const nodeListArr = [...navParent.querySelectorAll('ul li')];
  // console.log(nodeListArr)
  setActiveState(elem, nodeListArr);
}
// side nav state
function sideState(e) {
  if (!e.target.matches('button')) return;
  const elem = e.target;
  const nodeListArr = [...sideOptions.querySelectorAll('button')];
  // console.log(nodeListArr)
  setActiveState(elem, nodeListArr);
}
/*event delegation to handle click of nav items*/
sideOptions.addEventListener('click', sideState);
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
