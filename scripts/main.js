var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');
var imageArray = [
       'images/H125_MeanSigFracConst_50MeV_7p4to11p3Overlap.png',
       'images/H125_MeanSigFracConst_50MeV_7p5to12p5Overlap.png',
       'images/H125_MeanSigFracConst_50MeV_8p0to13p5Overlap_9p0to12p7Calc.png',
       'images/H125_MeanSigFracConst_50MeV_8to13p5Overlap_8p5to12p7Calc.png',
       'images/H125_MeanSigFracConst_50MeV_9p0to13p5Overlap_9p0to10p6Calc.png'
]
myImage.onclick = function() 
{
  var mySrc = myImage.getAttribute('src');
  for (var i = 0; i < imageArray.length; i++)
  {
    if (mySrc === imageArray[i])
    {
      if (i === (imageArray.length - 1) )
        myImage.setAttribute ('src', imageArray[0] );
      else
        myImage.setAttribute ('src', imageArray[i+1]);
    }//if
  }//for
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) 
  setUserName();
else 
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
