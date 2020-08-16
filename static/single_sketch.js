/* FONTS AND IMAGES */
let myFont;
let imgs = [];
let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let mySound = [];

// Button Positions
let leftX = 45;
let rightX = 140;
let horY = 470;

let backX = 270;
let backY = horY + 100;
let confirmX = 310;
let confirmY = horY - 85;

// y Positions
let titleY = 40;
let subY = 61;
let pressY = 213;
let timerY = 160;
let unitY = 183;
let audioRectY = 132;

// Menu sizes
let audioRectWidth = 120;
let audioRectHeight = 72;

// Font sizes
let titleSize = 18;
let subtitleSize = 11;
let pressSize = 10;
let timerSize = 80;
let unitSize = 11;

// Set timer
var setFirst = 0;
var setSecond = 0;
var setTime = 60*setFirst + setSecond;

// Time variables
var studyTime = 0;
var studyHrs = 0;
var studyMins = 0;
var studySecs = 0;

var resetTime = 250;
var resetSec = resetTime % 60;
var resetMin = (resetTime - resetSec) / 60;

// TEST
var mode = 1;
var selCount1 = 1;
var selCount2 = 1;
var selCount3 = 1;
var gameMode = 0; // 0 for false, 1 for true

function preload () {
  myFont = loadFont ('./assets/EIGHTBITDRAGON-ANQX.TTF');
  imgs[0] = loadImage ('./assets/goldMedal.png');
  imgs[1] = loadImage ('./assets/silverMedal.png');
  imgs[2] = loadImage ('./assets/bronzeMedal.png');
  soundFormats('mp3');
  mySound[0] = loadSound('assets/Pen_Writing');
  mySound[1] = loadSound('assets/Rain_Water_Dripping_Softly)');
  mySound[2] = loadSound('assets/Kiss_the_Sky');
}

function setup (){
  createCanvas (360, 616);
  background("black");
  textFont (myFont);

  // Buttons
  noStroke ();
  ellipseMode (CENTER);
  // Back
  fill (255, 0, 0);
  ellipse (backX, backY, 80, 80);
  // Confirm
  fill (0, 155, 20);
  ellipse (confirmX, confirmY, 80, 80);
  fill (255);
  // Left
  ellipse (leftX, horY, 80, 80);
  // Right
  ellipse (rightX, horY, 80, 80);
}

function draw(){
  // Partitioning
  fill (255);
  noStroke ();
  rectMode (CENTER);
  rect (360/2, 240/2, 360, 240);

  // Current time
  var today = new Date ();
  
  var month = today.getMonth () + 1;
  var date = today.getDate ();
  var dayNum = today.getDay ();
  var hoursTwoDigits = today.getHours ();
  var hours = hoursTwoDigits;
  var amPm = "AM";
  // Unify form
  if (hours > 12) {
    hours = hoursTwoDigits - 12;
    amPm = "PM"; 
  }
  if (hours < 10) {
    hours = addZeros (hours, 2);
  }
  var minutes = today.getMinutes ();
  // Unify form
  if (minutes < 10) {
    minutes = addZeros (minutes, 2);
  }
  fill (100);
  noStroke ();
  textAlign (RIGHT);
  textSize (10);
  text (month + "/" + date + " " + week [dayNum] + "  " + hours + ":" + minutes + " " + amPm, width - 2, 12);

  // Study counter
  fill (255, 0, 0, 180);
  studyHrs = addZeros (studyHrs, 2);
  studyMins = addZeros (studyMins, 2);
  studySecs = addZeros (studySecs, 2);
  text (studyHrs + ":" + studyMins + ":" + studySecs, width - 2, 25);
  
  // TEST
  switch (mode) {
    case 1:
      menu (); break;
    case 10:
      setTimer (); break;
    case 11:
      setTimer2 (); break;
    case 20:
      setBackgroundAudio (); break;
    case 21:
      setBackgroundAudio2 (); break;
    case 2:
      setBackgroundAudio3 (); break;
    case 30:
      hallOfFame (); break;
    case 40:
      brainTwisters (); break;
    case 41:
      brainTwisters2 (); break;
    case 42:
      brainTwisters3 (); break;
    case 50:
      studyMode (); break;
    case 60:
      timeUp (); break;
  }
}

function addZeros (num, digit) {
  var zero = "";
  num = num.toString ();
  if (num.length < digit) {
    for (i = 0; i < digit - num.length; i++) {
      zero += "0";
    }
  }

  return zero + num;
}

function menu () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Menu", width/2, titleY);

  // Context
  fill (0);
  textAlign (CENTER);
  textSize (13);
  text ("1. Set Timer", width/2, 83);
  text ("2. Set Background Audio", width/2, 114);
  text ("3. Hall of Fame", width/2, 145);
  text ("4. Brain Teasers", width/2 - 50, 176);
  fill (255, 0, 0);
  textSize (10);
  text (addZeros (resetMin, 2) + " : " + addZeros (resetSec, 2), width/2 + 100, 176);
  
  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);

  // Selection
  noFill ();
  strokeWeight (3);
  stroke (255, 0, 0);
  rect (width/2, 78 + 31*(selCount1 - 1), width - 75, 27);
}

function setTimer () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Set Timer", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("How long are you going to study?", width/2, subY);

  // Context
  textSize (timerSize);
  fill (0);
  text (addZeros (setFirst, 2), width/2 - 100, timerY);
  fill (120);
  text (":", width/2, timerY);
  text (addZeros (setSecond, 2), width/2 + 100, timerY);
  textSize (unitSize);
  fill (0);
  text ("Min", width/2 -55, unitY);
  fill (120);
  text ("Sec", width/2 + 145, unitY);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to confirm.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 15, pressY - 3, 10, 10);
}

function setTimer2 () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Set Timer", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("How long are you going to study?", width/2, subY);

  // Context
  textSize (timerSize);
  fill (120);
  text (addZeros (setFirst, 2), width/2 - 100, timerY);
  text (" : ", width/2, timerY);
  fill (0);
  text (addZeros (setSecond, 2), width/2 + 100, timerY);
  textSize (unitSize);
  fill (120);
  text ("Min", width/2 - 55, unitY);
  fill (0);
  text ("Sec", width/2 + 145, unitY);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to confirm.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 15, pressY - 3, 10, 10);
}

function setBackgroundAudio () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Set Background Audio", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Choose your background audio.", width/2, subY);

  // Context
  rectMode (CENTER);
  fill (255);
  strokeWeight (2);
  stroke (0);
  rect (width/2 - 80, audioRectY, audioRectWidth, audioRectHeight);
  rect (width/2 + 80, audioRectY, audioRectWidth, audioRectHeight);

  fill (0);
  noStroke ();
  textSize (13);
  text ("Default", width/2 - 80, audioRectY + 5);
  text ("Choose from \n Phone", width/2 + 80, audioRectY - 2);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);

  // Selection
  noFill ();
  strokeWeight (3);
  stroke (255, 0, 0);
  rect (width/2 - 80 + 160*(selCount2 - 1), audioRectY, audioRectWidth, audioRectHeight);
}

function setBackgroundAudio2 () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Set Background Audio", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Choose among default audio.", width/2, subY);

  // Context
  mySound[2].play();

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function setBackgroundAudio3 () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Set Background Audio", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Choose among internal audio.", width/2, subY);

  // Context
  

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function hallOfFame () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Hall of Fame", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("You have done well ! ! !", width/2, subY);

  // Context
  // Rankings
  image (imgs[0],25, 78, 14, 18);
  image (imgs[1],25, 98, 14, 18);
  image (imgs[2],25, 118, 14, 18);
  textAlign (CENTER);
  textSize (13);
  text ("4", 32, 153);
  text ("5", 32, 173);
  text ("6", 32, 193);
  text ("7", 32, 213);

  // Records
  textAlign (LEFT);
  textSize (12);
  text ("00 hr 00 min 00 sec" + "               " + "2019. 00. 00", width/2 - 113, 92);
  text ("00 hr 00 min 00 sec" + "               " + "2019. 00. 00", width/2 - 113, 112);

  /* stroke (0); noFill ();
  rectMode (CENTER);
  rect (width/2, 109, width - 50, 20);
  rect (width/2, 209, width - 50, 20); */

  // Press
  /* fill (0);
  textAlign (CENTER);
  textSize (pressSize);
  text ("Press           to delete record.", width/2, pressY);
  fill (255, 0, 0);
  ellipse (width/2 - 34, pressY - 3, 10, 10); */
}

function brainTwisters () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Brain Teasers", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Let's have some rest :)", width/2, subY);

  // Context
  rectMode (CENTER);
  fill (255);
  stroke (0);
  strokeWeight (2);
  rect (width/2 - 80, audioRectY, audioRectWidth, audioRectHeight);
  rect (width/2 + 80, audioRectY, audioRectWidth, audioRectHeight);

  fill (0);
  noStroke ();
  textSize (13);
  text ("Arithmetic\nGames", width/2 - 80, audioRectY - 2);
  text ("Memory\nGames", width/2 + 80, audioRectY + 5);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);

  // Selection
  noFill ();
  strokeWeight (3);
  stroke (255, 0, 0);
  rect (width/2 - 80 + 160*(selCount3 - 1), audioRectY, audioRectWidth, audioRectHeight);
}

function brainTwisters2 () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Brain Teasers", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Choose the correct answer!", width/2, subY);

  // Context

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function brainTwisters3 () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Brain Teasers", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Memorize the order of arrows!", width/2, subY);

  // Context
  

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function studyMode () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Study Mode", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  // text ("Study hard! ! !", width/2, subY);
  text (setTime, width/2, subY);

  // Context
  setInterval (setTime --, 1000);
  setSecond = setTime % 60;
  setFirst = (setTime - setSecond)/60;

  if (setTime == 0) mode = 60;

  textSize (timerSize);
  fill (0);
  text (addZeros (setFirst, 2), width/2 - 100, timerY);
  text (" : ", width/2, timerY);
  text (addZeros (setSecond, 2), width/2 + 100, timerY);
  textSize (unitSize);
  text ("Min", width/2 - 55, unitY);
  text ("Sec", width/2 + 145, unitY);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to pause.", width/2, pressY);
  fill (255, 0, 0);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function timeUp () {
  // Title
  fill (0);
  noStroke ();
  textAlign (CENTER);
  textSize (titleSize);
  text ("Times up!", width/2, titleY);

  // Subtitle
  textSize (subtitleSize);
  text ("Congrats! ! You did a nice job :)", width/2, subY);

  // Press
  fill (0);
  textSize (pressSize);
  textAlign (CENTER);
  text ("Press any button to go back to menu.", width/2, pressY);
}

function mousePressed () {
  print (mouseX +", " + mouseY);
  if (leftX - 40 < mouseX && mouseX < leftX + 40 && horY - 40 < mouseY && mouseY < horY + 40) {
    print ("left");
    if (mode == 1) {
      selCount1 --;
      if (selCount1 < 1) selCount1 = 4;
    } else if (mode == 10) {
      setFirst --;
      if (setFirst < 0) setFirst = 59;
    } else if (mode == 11) {
      setSecond --;
      if (setSecond < 0) setSecond = 59;
    } else if (mode == 20) {
      selCount2 --;
      if (selCount2 < 1) selCount2 = 2;
    } else if (mode == 30) {

    } else if (mode == 40) {
      selCount3 --;
      if (selCount3 < 1) selCount3 = 2;
    } else if (mode == 60) {
      mode = 1;
    }
  }
  if (rightX - 40 < mouseX && mouseX < rightX + 40 && horY - 40 < mouseY && mouseY < horY + 40) {
    print ("right");
    if (mode == 1) {
      selCount1 ++;
      if (selCount1 > 4) selCount1 = 1;
    } else if (mode == 10) {
      setFirst ++;
      if (setFirst > 59) setFirst = 0;
    } else if (mode == 11) {
      setSecond ++;
      if (setSecond > 59) setSecond = 0;
    } else if (mode == 20) {
      selCount2 ++;
      if (selCount2 > 2) selCount2 = 1;
    } else if (mode == 40) {
      selCount3 ++;
      if (selCount3 > 2) selCount3 = 1;
    } else if (mode == 60) {
      mode = 1;
    }
  }
  if (backX - 40 < mouseX && mouseX < backX + 40 && backY - 40 < mouseY && mouseY < backY + 40) {
    print ("back");
    if (mode % 10 == 0) {
      mode = 1;
    } else if (mode % 10 != 0 && mode != 1) {
      mode --;
    }
  }
  if (confirmX - 40 < mouseX && mouseX < confirmX + 40 && confirmY - 40 < mouseY && mouseY < confirmY + 40) {
    print ("confirm");
    if (mode == 1) {
      mode = 10*selCount1;
    } else if (9 < mode && mode < 11) {
      mode ++;
    } else if (mode == 11) {
      setTime = 60*setFirst + setSecond;
      if (setTime > 0) mode = 50;
    } else if (mode == 20) {
      mode += selCount2;
    } else if (mode == 40) {
      mode += selCount3;
    } else if (mode == 60) {
      mode = 1;
    }
  }
}