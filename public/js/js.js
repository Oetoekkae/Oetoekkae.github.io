

var rotationBool = false;

$('.work-intro-div').click(function(){
    $(this).children('.work-info-container').slideToggle("slow", function() {
    });

    rotateChevron.call(this);
    
});

function rotateChevron() {
    if(!rotationBool){
        $(this).children('.work-intro-chevrons').css("rotate", "180deg");
        rotationBool = true;
    } else {
        $(this).children('.work-intro-chevrons').css("rotate", "0deg");
        rotationBool = false;
    }
}


