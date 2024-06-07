document.addEventListener('DOMContentLoaded', () => {
    const burgers = [
        { id: 'cheeseburger', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2019/07/McD_web22_Chesseburger-1024x693.png' },
        { id: 'bigmac', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2019/07/0001s_0014_McD_web2021_BigMac.jpg' },
        { id: 'bigtasty', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2019/07/0001s_0013_McD_web2021_BigTasty.jpg' },
        { id: 'deluxe', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2023/01/web_Deluxe-Beef-burger.png' },
        { id: 'mcroyal', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2019/07/McD_web2021_McRoyal-03.png' },
        { id: 'mcchicken', imgSrc: 'https://mcdonalds.ee/wp-content/uploads/2019/07/McD_web2021_McChicken.png' }
    ];

    burgers.forEach(drink => {
        const drinkElement = document.getElementById(drink.id);
        const imageContainer = drinkElement.querySelector('.image-container');

        if (imageContainer) {
            const img = document.createElement('img');
            img.src = drink.imgSrc;
            img.alt = drink.id;
            img.className = 'burger-image';
            imageContainer.appendChild(img);
        }
    });
});