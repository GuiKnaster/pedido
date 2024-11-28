const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');
const lovePopup = document.getElementById('love-popup');

// Quando passa o mouse sobre o botão "Não", ele desaparece
noButton.addEventListener('mouseover', () => {
    noButton.classList.add('shrinking');

    // Opcional: remove o botão do DOM após desaparecer completamente
    setTimeout(() => {
        noButton.style.display = 'none';
    }, 500); // Tempo igual à duração da transição CSS
});

// Quando clica no botão "Sim", mostra a mensagem de amor
yesButton.addEventListener('click', () => {
    lovePopup.style.display = 'block';
});
