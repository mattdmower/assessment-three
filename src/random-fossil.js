import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    const getRandomFossilButton = document.getElementById('get-random-fossil');
    const randomFossilImageDiv = document.getElementById('random-fossil-image');
    const randomFossilNameParagraph = document.getElementById('random-fossil-name');

    getRandomFossilButton.addEventListener('click', async () => {
        try {
            const response = await axios.get('/random-fossil.json');
            const fossilData = response.data;
            randomFossilImageDiv.innerHTML = `<img src="${fossilData.img}" alt="${fossilData.name}">`;
            randomFossilNameParagraph.textContent = fossilData.name;

        } catch (error) {
            console.error("Error fetching random fossil:", error);
        }
    });
});