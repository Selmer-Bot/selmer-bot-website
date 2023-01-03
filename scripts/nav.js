// I'm not sure this will contain any of the html scripts
// This is because every file's functions (even sendData) are unique to that file


window.onload = function() {
     
    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 500) {
            document.querySelector(".main-header").classList.add('is-scrolling');
        } else {
            document.querySelector(".main-header").classList.remove('is-scrolling');
        }
    }); 

}