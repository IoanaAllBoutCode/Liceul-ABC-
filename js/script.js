$(window).on('load', function(){
   $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut(); 
});
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
 function googleTranslateElementInit() {
			new google.translate.TranslateElement(
				{pageLanguage: 'ro'},
				'google_translate_element'
			);
     var mymenu = document.getElementBy('menu');
    mymenu.style.top = '100px';
		}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function menudropdown() {
  var x = document.getElementById("dropdown-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar-second").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar-second").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01-second").src = element.src;
    document.getElementById("modal01-second").style.display = "block";
    var captionText = document.getElementById("caption-second");
    captionText.innerHTML = element.alt;
}! function (t, d, e, i, n) {
    (n = d.body).insertAdjacentHTML("beforeend", '<div data-formito-id="43y4nEuLd3BjvMgbCHDP" data-trigger="fab" data-color="#fef246" data-button-icon="https://s.formito.com/img/icon-fab/1.png" data-button-shape="round"></div>'), (i = d.createElement("script")).async = !0, i.src = "https://s.formito.com/ft.js", n.appendChild(i)
}(window, document);


function gallery(imgSelected) {
    var bigImg = document.getElementById("big-img");
    bigImg.src = imgSelected.src;
    bigImg.parentElement.style.display = "block";

}
