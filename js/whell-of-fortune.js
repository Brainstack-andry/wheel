 var btnShowWof = document.querySelector(".btn-wheel-of-fortune"),
     fieldWof = document.querySelector(".wof"),
     btnCloseWof = document.querySelectorAll(".js-close-wof"),
     wofDrum = document.querySelector(".wof_drum"),


     wofTimerDisplay = document.querySelector('#time'),
     wofTimerDuration = 599;


 /// DiscountTimer
 var removeOneDiscount;
 var timeAfterRemoveOneDisc = 15000;
 removeOneDiscount = function(){
     var curentDiscount =   document.querySelector(".js-wof-discount");
     var curentDiscountNumber = + curentDiscount.innerHTML;
    return setInterval(function () {
        if(curentDiscountNumber > 0){
            curentDiscount.innerHTML = curentDiscountNumber--;
        }

     }, timeAfterRemoveOneDisc)
 };

 var delayTime = 8000; // Time to animate wheel

 function discountTimerStart() {
     var currNum = + document.querySelector(".js-wof-discount").innerHTML;


     if(currNum > 1 ){
         setTimeout(function() {
             removeOneDiscount();
         }, delayTime);
     }
    }

 btnShowWof.addEventListener("click", function () {
     fieldWof.classList.add("active");
     discountTimerStart();
 });

/////
 for(var i = 0; i < btnCloseWof.length; i++){
     btnCloseWof[i].addEventListener("click", function () {
         fieldWof.classList.remove("active");
         clearInterval(removeOneDiscount);   /// TODO DON't clear time interval

         if(this.classList.contains('btn-wof-closeMin')){
             wofDrum.classList.add("wof_drum__finished");
         }
     });
 }



 var btnSecondSpin = document.querySelector(".wof-btn_spin");
 btnSecondSpin.addEventListener("click", function () {


     document.querySelector(".wof_icon__arrow").classList.add("deactivate");
     wofDrum.classList.add("spinActiv");
     document.querySelector(".wof_marker").classList.add("spinActiv");

    setTimeout(function () {
        fieldWof.classList.add("GotPrize");
        document.querySelector(".wof_final").classList.add("active");
        setTimeout(startTimer(wofTimerDuration), 3000) /// Start timer

    }, 9000);




 });


 ///// Start Timer after//
var startTimer = function(duration) {
     var timer = duration, minutes, seconds;
     setInterval(function () {
         minutes = parseInt(timer / 60, 10);
         seconds = parseInt(timer % 60, 10);

         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;

         wofTimerDisplay.textContent = minutes + ":" + seconds;

         if (--timer < 0) {
             timer = duration;
         }

         return wofTimerDuration = timer;

     }, 1000);
 };



 var btnSendWof = document.querySelector(".btn-wof-send");
 btnSendWof.addEventListener("click", function () {
    var url = this.dataset.href;

    window.location = url;
 });