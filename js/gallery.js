/*Name this external file gallery.js*/

function upDate(previewPic){
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below or use tab to display here.";
}

function addTabindex() {
    var previewImages = document.querySelectorAll('.preview');
    previewImages.forEach(function(img) {
        img.setAttribute('tabindex', '0');
    });
}

window.onload = addTabindex;
