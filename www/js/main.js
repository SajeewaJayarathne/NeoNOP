/* Scroll Up/Down icon */
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('#scrollUp').fadeIn();
    } else {
        $('#scrollUp').fadeOut();
    }
});

/* Popup */
// Get the modal
let modal = document.getElementById("myModal");
let modalContentCEO = document.getElementById("modalContentCEO");
let modalContentAbout = document.getElementById("modalContentAbout");

// When the user clicks the button, open the modal
function readMoreCEOMsg () {
    modal.style.display = "block";
    modalContentCEO.style.display = "block";
}

function readMoreAbout () {
    modal.style.display = "block";
    modalContentAbout.style.display = "block";
}

function closeModalPopup () {
    modal.style.display = "none";
    modalContentCEO.style.display = "none";
    modalContentAbout.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        modalContentCEO.style.display = "none";
        modalContentAbout.style.display = "none";
    }
}