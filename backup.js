let lanecount=2;
let positionCar = document.getElementById('car');
let fallcar1 = document.getElementById('car1');
let fallcar2 = document.getElementById('car2');
let fallcar3 = document.getElementById('car3');
let gear = 1;
let speed = 20;
let timeinterval = 100;

document.addEventListener ('keydown', function (e){
  // console.log(e.which);
  // let positionCar = document.getElementById('car');
  // console.log(positionCar.getBoundingClientRect());

  if (e.keyCode == 37){
    if(lanecount==2){
    positionCar.style.left='-100px';
    lanecount=1;
    }
    else if(lanecount == 3){
      positionCar.style.left = '32px';
      lanecount = 2;
    }
   
  }

  if (e.keyCode == 39){
    if (lanecount == 2){
    positionCar.style.left='170px';
    lanecount = 3;
    }

    else if (lanecount ==1){
      positionCar.style.left='32px';
      lanecount =2;
    }

    else if(lanecount == 2){
      positionCar.style.left = '170px';
    }

  }

  if (e.keyCode == 38){
    if (gear <=5 ){
      console.log(gear);
      gear++;
      // timeinterval -=5;
      lefttopcar1 +=5;
      console.log(lefttopcar1);
      lefttopcar2 +=5;
      lefttopcar3 +=5;

      // console.log(lefttopcar1);
      // document.getElementById('displaygear').innerHTMl = hello;
      
    }
  }

  if (e.keyCode == 40){
    if (gear >=1 ){
      console.log(gear);
      gear--;
      lefttopcar1 -=5;
      lefttopcar2 -=5;
      lefttopcar3 -=5;
      // console.log(timeinterval);
      // document.getElementById('displaygear').innerHTMl = hello;
      
    }
  }
})






let lefttopcar1 = 0;
let downfall = setInterval(function(){
  // console.log(timeinterval);
  
  lefttopcar1 +=10;
  

  // let fallcar1 = document.getElementById('car1');
  // console.log(fallcar1.getBoundingClientRect());
  fallcar1.style.top = lefttopcar1 + 'px';

  if (lefttopcar1 >= 400){

    lefttopcar1=0;
  }

  // let autocarTop = fallcar1.offsetTop;
  // let autocarHeight = fallcar1.clientHeight;
  // let poscarLeft = positionCar.offsetLeft;

  // let size = autocarTop+ autocarHeight;

  // if (size >= 390 && poscarLeft == 35){
  //   alert('game over');
  //   // clearInterval (downfall);
  //   location.reload();
  // }
  

collide(positionCar, fallcar1);
},timeinterval);



let lefttopcar2 = -110;
let downfall2 = setInterval(function(){
  lefttopcar2+=10;

  // let fallcar2 = document.getElementById('car2');
  // console.log(fallcar2.getBoundingClientRect());
  fallcar2.style.top = lefttopcar2 + 'px';

  if (lefttopcar2 >= 200){
    lefttopcar2=0;
  }
  collide(positionCar, fallcar2);
  // let autocarTop = fallcar2.offsetTop;
  // let autocarHeight = fallcar2.clientHeight;
  // let poscarLeft = positionCar.offsetLeft;

  // let size = autocarTop+ autocarHeight;

  // if (size >= 390 && poscarLeft == 167){
  //   alert('game over');
  //   location.reload();
  //   // clearInterval (downfall);
  // }
  


},getRandomInt(500,1500));


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






let lefttopcar3 = 0;
let downfall3 = setInterval(function(){
  lefttopcar3+=10+getRandomInt(0,19);
  // console.log(lefttopcar3);
  

  // let fallcar2 = document.getElementById('car2');
  // console.log(fallcar2.getBoundingClientRect());
  fallcar3.style.top = lefttopcar3 + 'px';

  if (lefttopcar3 >= 400){
    lefttopcar3=0;
  }
  collide(positionCar, fallcar3);
  // let autocarTop = fallcar3.offsetTop;
  // let autocarHeight = fallcar3.clientHeight;
  // let poscarLeft = positionCar.offsetLeft;

  // let size = autocarTop+ autocarHeight;

  // if (size >= 390 && poscarLeft == 305){
  //   alert('game over');
  //   // clearInterval (downfall);
  //   location.reload();
  // }
  


},300);

function collide(positionCar, fallcar){
  let autocarTop = fallcar.offsetTop;
  let autocarHeight = fallcar.clientHeight;
  let poscarLeft = positionCar.offsetLeft;

  let size = autocarTop+ autocarHeight;
  switch(fallcar){
    case fallcar1:
        if ((size >= 390) && (poscarLeft == 35)){
          alert('game over');
          // clearInterval (downfall);
          location.reload();
        }
        break;

        case fallcar2:
        if ((size >= 390) && (poscarLeft == 167)){
          alert('game over');
          // clearInterval (downfall);
          location.reload();
        }
        break;

        case fallcar3:
        if ((size >= 390) && (poscarLeft == 305)){
          alert('game over');
          // clearInterval (downfall);
          location.reload();
        }
        break;
  }
}



