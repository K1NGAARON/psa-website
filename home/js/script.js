function changeReviews() {
    const reviews = [
        {
            name: "Client name 1",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
        {
            name: "Client name x",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
        {
            name: "Client name 3",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    
    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
    
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('animated-1');
let text2 = document.getElementById('animated-2');
let text3 = document.getElementById('animated-3');

let animatedSection = document.getElementById('animated-section');

function load() {
    animate(text1, 0, 22127, 3000);
    animate(text2, 0, 167400, 3000);
    animate(text3, 0, 2100, 3000);
}

// Intersection Observer configuration
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

// Flag to ensure load() runs only once
let hasRun = false;

const sectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
        load();
        hasRun = true;
        // Disconnect the observer after running the animation
        sectionObserver.disconnect();
    }
}, observerOptions);

sectionObserver.observe(animatedSection);