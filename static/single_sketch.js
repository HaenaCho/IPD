/* FONTS AND IMAGES */
let myFont;
let imgs = [];
let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Button Positions
let leftX = 90;
let rightX = 180;
let horY = 545;

let backX = 310;
let backY = horY + 85;
let confirmX = 350;
let confirmY = horY - 60;

// y Positions
let titleY = 50;
let subY = 80;
let pressY = 270;
let timerY = 205;
let unitY = 238;
let audioRectY = 170;

// Font sizes
let titleSize = 22;
let subtitleSize = 13;
let pressSize = 10;
let timerSize = 90;
let unitSize = 13;

// Set timer
var setFirst = 0;
var setSecond = 0;
var setTime = 60*setFirst + setSecond;

// Time variables
var studyHrs = 0;
var studyMins = 0;
var studySecs = 0;

var resetTime = 250;
var resetSec = resetTime % 60;
var resetMin = (resetTime - resetSec) / 60;

// TEST
var mode = 1;
var selCount1 = 1;

function preload () {
  myFont = loadFont ('./assets/EIGHTBITDRAGON-ANQX.TTF');
  imgs[0] = loadImage ('./assets/goldMedal.png');
  imgs[1] = loadImage ('./assets/silverMedal.png');
  imgs[2] = loadImage ('./assets/bronzeMedal.png');
}

function setup (){
  createCanvas (1080, 1920);
  background("pink");
  textFont (myFont);

  // Buttons
  noStroke ();
  ellipseMode (CENTER);
  // Back
  fill (255, 0, 0);
  ellipse (backX, backY, 60, 60);
  // Confirm
  fill (0, 155, 20);
  ellipse (confirmX, confirmY, 60, 60);
  fill (255);
  // Left
  ellipse (leftX, horY, 45, 45);
  // Right
  ellipse (rightX, horY, 45, 45);
}

function draw(){
  // Partitioning
  fill (255);
  noStroke ();
  rectMode (CENTER);
  rect (450/2, 300/2, 450, 300);

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
    case 30:
      hallOfFame (); break;
    case 40:
      brainTwisters (); break;
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
  text ("1. Set Timer", width/2, 113);
  text ("2. Set Background Audio", width/2, 147);
  text ("3. Hall of Fame", width/2, 181);
  text ("4. Brain Twisters", width/2 - 50, 215);
  fill (255, 0, 0);
  textSize (10);
  text (addZeros (resetMin, 2) + " : " + addZeros (resetSec, 2), width/2 + 100, 215);
  
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
  rect (width/2, 108 + 34*(selCount1 - 1), width - 75, 30);
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
  text (" : ", width/2, timerY);
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
  stroke (0);
  rect (width/2 - 100, audioRectY, 150, 90);
  rect (width/2 + 100, audioRectY, 150, 90);

  fill (0);
  noStroke ();
  textSize (15);
  text ("Default", width/2 - 100, audioRectY + 5);
  text ("Choose from \n Phone", width/2 + 100, audioRectY - 2);

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
  image (imgs[0],30, 101, 14, 18);
  image (imgs[1],30, 121, 14, 18);
  image (imgs[2],30, 141, 14, 18);
  textAlign (CENTER);
  textSize (13);
  text ("4", 37, 176);
  text ("5", 37, 196);
  text ("6", 37, 216);
  text ("7", 37, 236);
  text ("8", 37, 256);

  // Records
  textAlign (LEFT);
  textSize (13);
  text ("00 hr 00 min 00 sec" + "                      " + "2019. 00. 00", width/2 - 120, 115);
  text ("00 hr 00 min 00 sec" + "                      " + "2019. 00. 00", width/2 - 120, 135);

  /* stroke (0); noFill ();
  rectMode (CENTER);
  rect (width/2, 109, width - 50, 20);
  rect (width/2, 209, width - 50, 20); */

  // Press
  fill (0);
  textAlign (CENTER);
  textSize (pressSize);
  text ("Press           to delete record.", width/2, pressY);
  fill (255, 0, 0);
  ellipse (width/2 - 34, pressY - 3, 10, 10);
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
  rect (width/2 - 100, audioRectY, 150, 90);
  rect (width/2 + 100, audioRectY, 150, 90);

  fill (0);
  noStroke ();
  textSize (15);
  text ("Arithmetic\nGames", width/2 - 100, audioRectY - 2);
  text ("Game 2", width/2 + 100, audioRectY + 5);

  // Press
  fill (0);
  textSize (pressSize);
  text ("Press           to select.", width/2, pressY);
  fill (0, 155, 50);
  ellipse (width/2 - 12, pressY - 3, 10, 10);
}

function mousePressed () {
  print (mouseX +", " + mouseY);
  if (leftX - 22 < mouseX && mouseX < leftX + 22 && horY - 22 < mouseY && mouseY < horY + 22) {
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

    } else if (mode == 30) {

    } else if (mode == 40) {
      
    }
  }
  if (rightX - 22 < mouseX && mouseX < rightX + 22 && horY - 22 < mouseY && mouseY < horY + 22) {
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
    }
  }
  if (backX - 30 < mouseX && mouseX < backX + 30 && backY - 30 < mouseY && mouseY < backY + 30) {
    print ("back");
    if (mode % 10 == 0) {
      mode = 1;
    } else if (mode % 10 != 0 && mode != 1) {
      mode --;
    }
  }
  if (confirmX - 30 < mouseX && mouseX < confirmX + 30 && confirmY - 30 < mouseY && mouseY < confirmY + 30) {
    print ("confirm");
    if (mode == 1) {
      mode = 10*selCount1;
    } else if (9 < mode && mode < 11) {
      mode ++;
    }
  }
}