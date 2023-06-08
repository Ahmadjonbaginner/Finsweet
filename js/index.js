const navbarDots = document.querySelector('.navbar__dots'),
    navbarMenus = document.querySelector('.navbar__menus'),
    blogsCards = document.querySelector('.blogs__cards');

// let cardImg = document.createElement('img'),
//     cardTitle = document.createElement('h3'),
//     cardText = document.createElement('p'),
//     cardLink = document.createElement('span');

navbarDots.addEventListener('click', () => {
    navbarMenus.classList.toggle('click__dots')
})




const fatchPosts = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/photos');
    posts = await res.json();
    let homeData = posts.slice(0, 3)
    homeData.map((data) => {
        blogsCards.innerHTML += `<div class="blogs__cards__card">
        <img class="blogs__cards__card__img" src="${data.url}" alt="${data.title}">
        <span class="blogs__cards__card__link">By <a href="#">John Doe</a> l   Aug 23, 2021 </span>
        <h3 class="blogs__cards__card__title">${data.title}</h3>
        <p class="blogs__cards__card__text">${data.title}</p>
    </div>`
    });

}
fatchPosts()