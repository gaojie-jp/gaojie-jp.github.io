//let myHeading = document.querySelector('h1');
//myHeading.textContent = '山河令';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/02.png') {
      myImage.setAttribute('src', 'images/01.png');
    } else {
      myImage.setAttribute('src', 'images/02.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');

    if(!myName || myName === null) {
        myHeading.textContent = '山河令';
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '山河令' + myName;
      }
  }

  myButton.onclick=function(){
      setUserName();
  }