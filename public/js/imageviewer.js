console.log("loaded script");

const galleries = document.getElementsByClassName('gallery');

//modal
var modal = document.getElementById("image-view");
var img = $('.gallery-item');
var modalImg = $("#modal-content");






$('.gallery-item').click(function(){
    console.log("clicked image");
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
});

var span = document.getElementsByClassName("close-img")[0];


span.onclick = function() { 
   modal.style.display = "none";
}

//add eventlisteners to galleries
for(var i = 0; i < galleries.length; i++){
    console.log(i)
    scrollLeftEventAdder(i); 
}

function scrollLeftEventAdder(i) {
    galleries[i].addEventListener("wheel", (evt) => {
        evt.preventDefault();
        galleries[i].scrollLeft += evt.deltaY;
    });
    return;
}