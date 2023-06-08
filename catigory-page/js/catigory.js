const products = [{
        id: 1,
        name: 'Apple',
        category: 'Fruit',
        description: 'A round fruit with a red, green, or yellow skin and a white, crunchy interior.',
        price: 89,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food0',
    },
    {
        id: 2,
        name: 'Banana',
        category: 'Fruit',
        description: 'A long, curved fruit with a yellow skin and sweet, creamy white flesh.',
        price: 71,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food1',
    },
    {
        id: 3,
        name: 'Bread',
        category: 'Bakery',
        description: 'A staple food made from flour, water, and yeast, baked into a loaf.',
        price: 88,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food2',
    },
    {
        id: 4,
        name: 'Broccoli',
        category: 'Vegetable',
        description: 'A green vegetable with a tree-like appearance, known for its high nutrient content.',
        price: 94,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food3',
    },
    {
        id: 5,
        name: 'Carrot',
        category: 'Vegetable',
        description: 'A root vegetable with a crunchy texture and a sweet, earthy flavor.',
        price: 82,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food4',
    },
    {
        id: 6,
        name: 'Cheese',
        category: 'Dairy',
        description: 'A dairy product made from milk, with a variety of textures and flavors.',
        price: 91,
        rating: 3.5,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food5',
    },
    {
        id: 7,
        name: 'Chicken',
        category: 'Meat',
        description: 'A type of poultry, often used as a source of protein in meals.',
        price: 68,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food6',
    },
    {
        id: 8,
        name: 'Chocolate',
        category: 'Dessert',
        description: 'A sweet food made from cacao beans, used in a variety of desserts and confections.',
        price: 61,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food7',
    },
    {
        id: 9,
        name: 'Coffee',
        category: 'Dessert',
        description: 'A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.',
        price: 98,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food8',
    },
    {
        id: 10,
        name: 'Egg',
        category: 'Dairy',
        description: 'A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.',
        price: 79,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food9',
    },
    {
        id: 11,
        name: 'Fish',
        category: 'Meat',
        description: 'A type of seafood, known for its omega-3 fatty acids and high protein content.',
        price: 89,
        rating: 3.5,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food10',
    },
    {
        id: 12,
        name: 'Grapes',
        category: 'Fruit',
        description: 'A small, sweet fruit that grows in clusters, often used in wine-making.',
        price: 61,
        rating: 4,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food11',
    },
    {
        id: 13,
        name: 'Hamburger',
        category: 'Fast food',
        description: 'A sandwich made with a patty of ground beef, served on a bun with various toppings.',
        price: 87,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food12',
    },
    {
        id: 14,
        name: 'Hot dog',
        category: 'Fast food',
        description: 'A type of sausage served in a long roll, often used as a quick and convenient food.',
        price: 84,
        rating: 4.5,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food13',
    },
    {
        id: 15,
        name: 'Ice cream',
        category: 'Dessert',
        description: 'A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.',
        price: 68,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food14',
    },
    {
        id: 16,
        name: 'Lemon',
        category: 'Fruit',
        description: 'A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.',
        price: 74,
        rating: 3.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food15',
    },
    {
        id: 17,
        name: 'Eggs',
        category: 'Dairy',
        description: 'Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.',
        price: 70,
        rating: 4.5,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food16',
    },
    {
        id: 18,
        name: 'Honey',
        category: 'Dairy',
        description: 'Honey is a sweet, sticky liquid made by bees from the nectar of flowers.',
        price: 87,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food17',
    },
    {
        id: 19,
        name: 'Ice Cream',
        category: 'Dessert',
        description: 'Ice cream is a frozen dessert made from cream, sugar, and flavorings.',
        price: 83,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food18',
    },
    {
        id: 20,
        name: 'Jelly',
        category: 'Fruit',
        description: 'Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.',
        price: 76,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food19',
    },
    {
        id: 21,
        name: 'Ketchup',
        category: 'Dairy',
        description: 'Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.',
        price: 77,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food20',
    },
    {
        id: 22,
        name: 'Mango',
        category: 'Fruit',
        description: 'Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.',
        price: 80,
        rating: 5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food21',
    },
    {
        id: 23,
        name: 'Noodles',
        category: 'Meat',
        description: 'Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.',
        price: 93,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food22',
    },
    {
        id: 24,
        name: 'Oatmeal',
        category: 'Breakfast',
        description: 'Oatmeal is a type of porridge made from oats that is often served for breakfast.',
        price: 94,
        rating: 4.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food23',
    },
    {
        id: 25,
        name: 'Bacon',
        category: 'Breakfast',
        description: 'Bacon is a popular breakfast food made from cured pork belly.',
        price: 71,
        rating: 3.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food24',
    },
    {
        id: 26,
        name: 'Pancakes',
        category: 'Breakfast',
        description: 'Pancakes are a popular breakfast food made from flour, eggs, and milk.',
        price: 63,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food25',
    },
    {
        id: 27,
        name: 'Waffles',
        category: 'Breakfast',
        description: 'Waffles are a type of breakfast food made from batter cooked in a waffle iron.',
        price: 97,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food26',
    },
    {
        id: 28,
        name: 'Fried Rice',
        category: 'Lunch',
        description: 'Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.',
        price: 81,
        rating: 4,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food27',
    },
    {
        id: 29,
        name: 'Spaghetti',
        category: 'Lunch',
        description: 'Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.',
        price: 96,
        rating: 4,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food28',
    },
    {
        id: 30,
        name: 'Pizza',
        category: 'Lunch',
        description: 'Pizza is a popular dish made from dough, sauce, cheese, and toppings.',
        price: 95,
        rating: 4,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food29',
    },
    {
        id: 31,
        name: 'Grilled Cheese',
        category: 'Lunch',
        description: 'A grilled cheese sandwich is a hot sandwich made from cheese and bread.',
        price: 100,
        rating: 5,
        discount: 50,
        image: 'https://picsum.photos/200/300/?food30',
    },
    {
        id: 32,
        name: 'Steak',
        category: 'Dinner',
        description: 'Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.',
        price: 63,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food31',
    },
    {
        id: 33,
        name: 'Salmon',
        category: 'Dinner',
        description: 'Salmon is a type of fish that is often grilled or baked and served as a main course.',
        price: 82,
        rating: 4.5,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food32',
    },
    {
        id: 34,
        name: 'Chicken Alfredo',
        category: 'Dinner',
        description: 'Chicken Alfredo is a pasta dish made with chicken, fettuccine pasta, and a creamy Alfredo sauce.',
        price: 94,
        rating: 4,
        discount: 20,
        image: 'https://picsum.photos/200/300/?food33',
    },
    {
        id: 35,
        name: 'Lasagna',
        category: 'Dinner',
        description: 'Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.',
        price: 70,
        rating: 5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food34',
    },
    {
        id: 36,
        name: 'Chocolate Chip Cookies',
        category: 'Dessert',
        description: 'Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.',
        price: 98,
        rating: 3.5,
        discount: 0,
        image: 'https://picsum.photos/200/300/?food35',
    },
];



const navbarDots = document.querySelector('.navbar__dots'),
    navbarMenus = document.querySelector('.navbar__menus'),
    search = document.getElementById('search');

navbarDots.addEventListener('click', () => {
    navbarMenus.classList.toggle('click__dots')
})

const posts = products.slice(0, 10)
let filterPosts = [...posts]
console.log(posts);
displayPosts(filterPosts)

search.addEventListener('input', (e) => {
    e.preventDefault();
    let text = e.target.value;
    filterPosts = [
        ...filterPosts.filter((p) =>
            p.name.toLowerCase().includes(text.toLowerCase())
        )
    ];
    displayPosts(filterPosts)
})

function displayPosts(filterPosts) {
    searchCards = document.querySelector('.search__cards');
    searchCards.innerHTML = ''
    filterPosts.forEach((data) => {
        const card = document.createElement('div')
        card.className = 'search__cards__card'
        card.innerHTML = `
        <img class="search__cards__card__img" src="${data.image}" alt="image">
        <div class="search__cards__card__texts">
            <span class="search__cards__card__texts__nick">${data.category}</span>
            <h3 class="search__cards__card__texts__title">${data.name}</h3>
            <p class="search__cards__card__texts__text">${data.description} </p>
        </div>
        `;
        searchCards.appendChild(card)
    })

}