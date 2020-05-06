const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");

const sectionOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
}

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    })
}, 
sectionOneOptions);

sectionOneObserver.observe(h1);

 

