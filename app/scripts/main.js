const homeCusBtn = document.querySelector('#hc-btn');
const busCusBtn = document.querySelector('#bc-btn');
const homebtn = document.querySelector('#home-button');
const homeScreen = document.querySelector('#home-screen');
const custScreen = document.querySelector('#customer-segment');

function navigate(path) {
    var current = window.location.href;
    window.location.href = current.replace(/#(.*)$/, '') + '#' + path;
}

function customerScreen(evt) {
    homeScreen.style.display = 'none';
    custScreen.style.display = 'block';
    navigate('customer');
}

function goHome(evt) {
    evt.preventDefault();
    navigate("");
}



homeCusBtn.addEventListener('click', customerScreen);
homebtn.addEventListener('click', goHome)