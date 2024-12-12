let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function () {
    let value = window.scrollY;   
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 2+ 'px';

    nouvil.style.fontSize = value + 'px'; 
    if (value >= 67) {
        nouvil.style.fontSize = '67px';
        nouvil.style.position = 'fixed';
        if (value >= 478) {
            nouvil.style.display = 'none';
        } else {
            nouvil.style.display = 'block';
        }
        if (value >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
};
