// Smooth Navbar Shadow

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

if(window.scrollY > 50){
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
}else{
    header.style.boxShadow = 'none';
}

});

// Animated Counter

const counters = document.querySelectorAll('.stat-box h2');

counters.forEach(counter => {

const updateCounter = () => {

    const target = +counter.innerText.replace(/\D/g,'');

    let count = +counter.getAttribute('data-count') || 0;

    const increment = target / 100;

    if(count < target){

        count += increment;

        counter.setAttribute('data-count', count);

        counter.innerText = Math.ceil(count) + '+';

        setTimeout(updateCounter, 20);

    }else{

        counter.innerText = counter.innerText;

    }

}

updateCounter();

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0px)';

    }

});

});

const animatedElements = document.querySelectorAll(
'.service-card,.testimonial-card,.stat-box,.cta-box'
);

animatedElements.forEach(el=>{

el.style.opacity = '0';
el.style.transform = 'translateY(50px)';
el.style.transition = '1s';

observer.observe(el);

});
