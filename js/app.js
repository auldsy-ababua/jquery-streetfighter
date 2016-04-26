$(document).ready(function() {
    var coolRyuActive = false;
    $('.ryu').mouseenter(function() {
        if (coolRyuActive === false) {
            $(".ryu-still").hide();
            $(".ryu-ready").show();
        }
    })
    .mouseleave(function() {
        if (coolRyuActive === false) {
            $(".ryu-ready").hide();
            $(".ryu-still").show();
        }
    })
    .mousedown(function () {
        playHadouken();
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '591px');
            }
        );
    })
    .mouseup(function() {
       $(".ryu-throwing").hide();
       $(".ryu-ready").show();
    })
    $('body').keydown(function(e) {
        if (e.which === 88) {
            coolRyuActive = true;
            playSexySong();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.hadouken').hide();
            $('.ryu-cool').show();
            
        }
    })
    .keyup(function (e) {
        if (e.which === 88) {
            coolRyuActive = false;
            stopSexySong();
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        }
    });
});
function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
};
function playSexySong() {
    $("#sexy-song")[0].play();
};
function stopSexySong() {
    $('#sexy-song')[0].pause();
    $('#sexy-song')[0].currentTime=0;
}
