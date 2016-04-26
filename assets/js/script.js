$(document).ready(function() {

$('.sub-article-button').click(function() {
    var height = parseInt($(this).parent().css('height').replace("px", ""))
    if (height == 250) {
        $(this).parent().css('height', 50);
        $(this).children().attr('src','assets/img/arrow-up.png');
    } else {
        $(this).parent().css('height', 250);
        $(this).children().attr('src','assets/img/arrow-down.png');
    }
});

$('.title').hover(function() {
    $('.title').css('border-bottom', '5px solid #ff0066');
},  function() {
    $('.title').css('border-bottom', '5px solid #5bf26e');
})

$("#card").flip();

});
