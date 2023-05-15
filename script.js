
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function addToCart(){
    alert("Item added to cart");
}

// Add to cart button code
// User account creation and management code

//  FORM VLAIDATION CODE using AJAX or JQUERy
