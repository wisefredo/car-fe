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


/*CLient side Routing for fun but not needed*/
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


/*Data fetching here*/
let arrayOfData;
let groceryContainer = document.querySelector('.items')
let html;


const fetchJson = (path, options) => {
  return fetch(path, options)
    .then(res => res.json())
}

const fetchAll = () => fetchJson('http://localhost:8080/products');

const loadData = () => {
  return fetchAll()
    .then(data => {
      arrayOfData = [...data]
      return arrayOfData;
    })
    .catch(err => console.error('something went wrong fetching data: ', err))
}

function loadALL() {
  loadData()
    .then((val) => {
      console.log(val)
      val.forEach((element, index) => {
        html = (
          `
            <div class="item" id="item-${index}">
              <img src="../images/${element.ProductDescription.description}.jpg" alt=""/>
              <div style="font-weight: bold;">
               ${element.ProductDescription.productName}
              </div>
              <div>Available for $${element.price}/lbs</div>
              <div>
                Add ${element.ProductDescription.productName} to your cart
               
              </div>
              <form action="http://localhost:8080/customer/bucket/${element.id}" method="post">
                <input class="btn" type="submit" value="Add To Cart" />
              </form>
            </div>
          `
        );

        let newItem = document.createElement('div');
        newItem.innerHTML = html;
        groceryContainer.insertBefore(newItem.firstElementChild, groceryContainer.childNodes[0]);
       
      })
    })
    .then(() => document.querySelector('.contain img[data-id="loader"]').style.display = 'none')
}

const dairyOpt = document.querySelector('.side-options button[data-id="dairy"]')
window.addEventListener('load', loadALL)
