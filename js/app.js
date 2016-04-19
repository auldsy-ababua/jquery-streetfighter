$(document).ready(function () {
    $('.ryu').mouseenter(function() {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .mouseleave(function() {
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    })
    .mousedown(function () {
        // play hadouken sound
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").show()
;        // show hadouken and animate it to the right of the screen
    })
    .mouseup(function () {
       $(".ryu-throwing").hide();
       $(".ryu-ready").show();
    });
});

/*$(".ryu-still").mousedown(function () {
 $(".ryu-still").hide();
 $(".ryu-throwing").show();
 $(".hadouken").show();
 });

 $(".ryu-throwing").mouseup(function () {
 $(".ryu-throwing").hide();
 $(".ryu-still").show();
 });

 $(".ryu-still").mouseover(function () {
 $(".ryu-still").hide();
 $(".ryu-ready").show();
 });

 $(".ryu-ready").mouseout(function () {
 $(".ryu-ready").hide();
 $(".ryu-still").show();
 });*/
