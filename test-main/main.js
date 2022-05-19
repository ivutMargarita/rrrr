$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});

var Quest = new Array(9); //this sets up an array for all of the answers that are given

function populate() {
  // alert("function populate started");
  // this function gives each of the answers 0 points so if someone doesn't answer a question
  // the whole thing will continue to work
  for (var i = 0; i <9 ; i++) {
    Quest[i] = 0;
  }
}

function total() {
  // alert("Pusk");
  // // alert("function total started");
  // // this function adds the number of points each answer is worth together
  myScore = 0;
  for (var i = 0; i < 9; i++) {
    myScore = myScore + Quest[i];
  }
  analyzer(myScore);
}

myContents = new Array();
myContents[0] = 'По результатам теста мы определили, что вы человек, знающий толк в еде, и мы бы посоветовали вам посидеть где-нибудь с друзьями и поделиться с ними новостями, поэтому предлагаем вам посетить места из категории <a href="../prog-main/index.html"class="cafe">«кафе»</a> <a href="../prog-main/index.html"> <button class="learn-more"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">УЗНАТЬ БОЛЬШЕ</span></button></a>';
myContents[1] = 'По результатам теста мы определили, что вам важен внутренний мир человека, и вы предпочитаете обогощать свой, поэтому мы предлагаем вам посетить места из категории <a href="../g/index.html"class="muzei" >«выставки/музеи»</a> <a href="../g/index.html"> <button class="learn-more"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">УЗНАТЬ БОЛЬШЕ</span></button></a>';
myContents[2] = 'По результатам теста мы определили, что сейчас вам лучше побыть одному и погрузиться в себя, поэтому мы предлагаем вам посетить места из категории <a href="../park2-main/index.html" class="parki">«парки»</a> <a href="../park2-main/index.html"> <button class="learn-more"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">УЗНАТЬ БОЛЬШЕ</span></button></a>';
myContents[3] = 'По результатам теста мы определили, что вы человек, который не может долго сидеть на месте и предпочитает повеселиться с друзьями, поэтому мы предлагаем вам посетить места из категории <a href="../Марго активный отдых/index.html" class="act">«активный отдых»</a> <a href="../Марго активный отдых/index.html"> <button class="learn-more"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">УЗНАТЬ БОЛЬШЕ</span></button></a>';

function analyzer(myScore) {
  // this function uses the total calculated score to figure out which personality type they are
      if (myScore > 27) {
        myContentsPtr = 3;
      } //4
      else {
        if (myScore > 18) {
          myContentsPtr = 2;
        } //3
        else {
          if (myScore > 9) {
            myContentsPtr = 1;
          } //2
          else {
            myContentsPtr = 0;
          } //1
        }
      }
  // alert(myContents[myContentsPtr]);
  myDisplay(myContents[myContentsPtr]);
}

function myDisplay(myContents) {
  //This function will open a new window and show the results calculated
  // alert(myContents); **use alert for testing only**.
  document.getElementById("result").innerHTML = myContents;
}

function saver(q, points) {
  // this function puts the points that each answer is worth into the array
  q = q - 1;
  Quest[q] = points;
}
