const M = document.getElementById('mainImage');
const K = document.querySelectorAll('.thumbnail');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

const updateMainImage = (index) => {
    M.src = K[index].src;
    K.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % K.length;
    updateMainImage(currentIndex);
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + K.length) % K.length;
    updateMainImage(currentIndex);
};

K.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);