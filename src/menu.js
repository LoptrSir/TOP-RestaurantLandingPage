// Menu Script

// const contentDiv = document.querySelector('.content')
// const main = document.createElement('div');
// main.classList.add('main');
// contentDiv.appendChild(main);

function createMenu(){
    const main = document.getElementById('main');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        "Birria Tacos", "(pronounced “bee-ree-ah”) Traditional slow-cooked stew made from a combination of sweet, spicy, and smoky dried chiles from Jalisco, Mexico. Served with limes, tortillas (dunked in consume), white onions, cilantro, with a cup of birria consume."
    ));

menu.appendChild(createMenuItem(
    'Tacos Al Pastor', 'Thinly sliced pork marinated in a combination of dried chilies, spices, pineapple, and achiote paste. Charcoal roasted on a vertical trompo. As the meat browns it\'s shaved off and served in corn tortillas with finely chopped onions, cilantro, diced pineapple, and a wedge of lime.'
));

menu.appendChild(createMenuItem(
    'Barbacoa Tacos', 'Shredded beef slowly braised in a broth of toasted chile de arbol, quajillo, onion, garlic, and spices. Served on corn tortillas with finely chopped onion, cilantro, avacado, and a wedge of lime.'
    ));

    menu.appendChild(createMenuItem(
        'Fish Tacos', 'Choice of grilled or fried haddock or salmon. Served on corn tortillas with chredded cabbbage, pico de gallo, and a citrus sour cream sauce.'
        ));
        main.appendChild(menu);
        // return menu;
    };

    function createMenuItem (title, description) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemTitle = document.createElement('h2');
        itemTitle.textContent = title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = description;

        const itemImage = document.createElement('img');
        itemImage.classList.add('tacoImg');
        itemImage.src = `images/tacos/${title}.jpg`;
        itemImage.alt = `${title}`;

        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemDescription);

        return menuItem;
    }

// createMenu();
export default createMenu;