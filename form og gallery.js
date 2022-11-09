const modalimage = document.getElementById('modalimg');
const galleryimage = document.getElementsByClassName('galleryimg');
const modaldiv = document.getElementById('modaldiv');
const imagetext = document.getElementById('imgtext');

function openmodal (imgNumber) {
    modalimage.src = imgNumber.src;
    imagetext.innerHTML = imgNumber.title;
    modaldiv.style.display = "block";

}
function closemodal () {
    modaldiv.style.display = "none";
}

const tilmeld = document.getElementById('tilmeld');
const navn = document.getElementById('name');
const email = document.getElementById('email');
const labname = document.getElementById('labname');
const labemail = document.getElementById('labemail');

function tilmeldfunktion () {
    if (navn.value == "") {
        labname.innerHTML = "Navn skal være udfyldt!"
    }
    if (navn.value != "") {
        labname.innerHTML = "Navn"
    }
    if (email.value == "") {
        labemail.innerHTML = "E-mail skal være udfyldt!"
    }
    if (email.value != "") {
        labemail.innerHTML = "E-mail"
    }
    if (navn.value != "" && email.value != ""){
       tilmeld.value = "Tak!";
       setTimeout(() => { tilmeld.value = "Tilmeld" }, 1200);
    }
}