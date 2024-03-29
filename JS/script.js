    let slideIndex = 0;

    function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 20}%)`;
    }
    }

    document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlides();
    });

    document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlides();
    });

    function openModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }
    
        function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    