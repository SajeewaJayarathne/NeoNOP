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
const ModalPopupTypes = {
    1: 'modalPrivacyPolicy',
    2: 'modalTermsOfUse',
    /*3: 'modalContentCEO',
    4: 'modalContentAbout'*/
};

let modal = document.getElementById("myModal");
let modalContentElem;

// When the user clicks the button, open the modal
function openModalPopup(mode) {
    modal.style.display = "block";

    modalContentElem = document.getElementById(ModalPopupTypes[mode]);
    modalContentElem.style.display = "block";
}

function closeModalPopup() {
    modal.style.display = "none";
    modalContentElem.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        modalContentElem.style.display = "none";
    }
}

function clearForm() {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}