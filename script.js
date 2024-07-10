document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 3000); // Change interval to match the animation duration (9s / 3 images = 3s per image)
});