var height = 0;
var width = 0;
var tempo = 10
var criat = 1500

function AdjustSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}

AdjustSize();

var lvl = window.location.search
lvl = lvl.replace('?','')

if(lvl === 'normal'){
    criat = 1500
}
else if(lvl === 'dificil'){
    criat = 1000
}
else if(lvl === 'mestre'){
     criat = 750
}


var cronometro = setInterval(function(){
     document.getElementById('cron').innerHTML = tempo
     tempo -= 1

     if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(create)
        window.location.href = 'win.html';
     }
}, 1000)

function PositionRand() {
    if (document.getElementById('par')) {
        document.getElementById('par').remove();
        decrementLife();
    }

    var x = Math.floor(Math.random() * width) - 85;
    var y = Math.floor(Math.random() * height) - 85;

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    var alvo = document.createElement('img');
    alvo.src = 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F88d26018-fa1a-4b92-a8b9-d8ed3f9e178e_3840x2160.png';
    alvo.className = SizeRand() + ' ' + RandLook();
    alvo.style.left = x + 'px';
    alvo.style.top = y + 'px';
    alvo.style.position = 'absolute';
    alvo.style.cursor = 'pointer';
    alvo.id = 'par';
    alvo.onclick = function() {
        this.remove();
        
    }

    document.body.appendChild(alvo);
}

function SizeRand() {
    var define = Math.floor(Math.random() * 3);
    switch (define) {
        case 0:
            return 'mos';
        case 1:
            return 'mos2';
        case 2:
            return 'mos3';
    }
}

function RandLook() {
    var define = Math.floor(Math.random() * 2);
    switch (define) {
        case 0:
            return 'right';
        case 1:
            return 'left';
    }
}

function decrementLife() {
    var lifeDiv = document.getElementById('life');
    var currentLife = parseInt(lifeDiv.textContent.match(/\d+/)[0]);
    if (currentLife > 0) {
        currentLife--;
        lifeDiv.textContent = 'Vidas: ' + currentLife + ' ♥';
    }
    else{
        window.location.href = 'gameover.html';
    }
}
