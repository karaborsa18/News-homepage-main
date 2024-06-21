function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    
    document.getElementById("overlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
    document.getElementById("overlay").classList.remove("active");
}

function setResponsiveImage() {
    const image = document.getElementById('responsiveImage');
    if (window.innerWidth <= 1300) { // Mobil için sınır
        image.src = 'assets/images/image-web-3-mobile.jpg';
    } else {
        image.src = 'assets/images/image-web-3-desktop.jpg';
    }
}
window.addEventListener('load', setResponsiveImage);
window.addEventListener('resize', setResponsiveImage);