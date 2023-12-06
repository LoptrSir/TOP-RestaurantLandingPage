// Menu Script


// const tacoImages = require.context("./images/tacos", false, /\.(jpg)$/); //webpack feature to dynamically import tacos folder

function createMenu(menuItems) {
  function createMenuItem(title, description, imageSrc) {
    // console.log('Generated Image Path:', `${tacoImages}/${title}.jpg`);
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = title;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemImage = document.createElement("img");
    itemImage.classList.add("tacoImg");
    console.log('TacoImg classList');
    
    import(`./images/tacos/${imageSrc}`)
    .then((image) => {
      itemImage.src = image.default;
    })
    .catch((error) => {
      console.error(`Error loading image: ${error}`);
    });
    // itemImage.src = imageSrc; //devtool 404 error thrown for this line.
    // itemImage.src = `${tacoImages.resolve(imageSrc).default}`;
    console.log('itemImage.src', title);
    itemImage.alt = title;
    console.log('itemImage.alt', title);

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);

    return menuItem;
  }
  const main = document.getElementById("main");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menuItems.forEach((item) => {
    menu.appendChild(createMenuItem(item.title, item.description, item.imageSrc));
    console.log('menuItems forEach',item);
  });

  main.appendChild(menu);
  return menu;
}

const menuData = [
  {
    title: "Birria Tacos",
    description:
      "(pronounced “bee-ree-ah”) Traditional slow-cooked stew made from a combination of sweet, spicy, and smoky dried chiles from Jalisco, Mexico. Served with limes, tortillas (dunked in consume), white onions, cilantro, with a cup of birria consume.",
    imageSrc: "BirriaTacos.jpg"
  },
  {
    title: "Tacos Al Pastor",
    description:
      "Thinly sliced pork marinated in a combination of dried chilies, spices, pineapple, and achiote paste. Charcoal roasted on a vertical trompo. As the meat roasts it's shaved off and served in corn tortillas with finely chopped onions, cilantro, diced pineapple, and a wedge of lime.",
    imageSrc: "TacosAlPastor.jpg",
  },
  {
    title: "Barbacoa Tacos",
    description:
      "Shredded beef slowly braised in a broth of toasted chile de arbol, quajillo, onion, garlic, and spices. Served on corn tortillas with finely chopped onion, cilantro, avacado, and a wedge of lime.",
    imageSrc: "BarbacoaTacos.jpg",
  },
  {
    title: "Fish Tacos",
    description:
      "Choice of grilled or fried haddock or salmon. Served on corn tortillas with shredded cabbage, pico de gallo, and a citrus sour cream sauce.",
    imageSrc: "FishTacos.jpg",
  },
];

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu(menuData));
}

// createMenu();
export default loadMenu;


//createMenu(menuData);
// createMenu(menuData);
// function createMenu() {

//   const main = document.getElementById("main");
//   const menu = document.createElement("div");
//   menu.classList.add("menu");

//   menu.appendChild(
//     createMenuItem(
//       "Birria Tacos",
//       "(pronounced “bee-ree-ah”) Traditional slow-cooked stew made from a combination of sweet, spicy, and smoky dried chiles from Jalisco, Mexico. Served with limes, tortillas (dunked in consume), white onions, cilantro, with a cup of birria consume."
//     )
//   );

//   menu.appendChild(
//     createMenuItem(
//       "Tacos Al Pastor",
//       "Thinly sliced pork marinated in a combination of dried chilies, spices, pineapple, and achiote paste. Charcoal roasted on a vertical trompo. As the meat browns it's shaved off and served in corn tortillas with finely chopped onions, cilantro, diced pineapple, and a wedge of lime."
//     )
//   );

//   menu.appendChild(
//     createMenuItem(
//       "Barbacoa Tacos",
//       "Shredded beef slowly braised in a broth of toasted chile de arbol, quajillo, onion, garlic, and spices. Served on corn tortillas with finely chopped onion, cilantro, avacado, and a wedge of lime."
//     )
//   );

//   menu.appendChild(
//createMenu(menuData);
// createMenu(menuData);
// function createMenu() {

//   const main = document.getElementById("main");
//   const menu = document.createElement("div");
//   menu.classList.add("menu");

//   menu.appendChild(
//     createMenuItem(
//       "Birria Tacos",
//       "(pronounced “bee-ree-ah”) Traditional slow-cooked stew made from a combination of sweet, spicy, and smoky dried chiles from Jalisco, Mexico. Served with limes, tortillas (dunked in consume), white onions, cilantro, with a cup of birria consume."
//     )
//   );

//   menu.appendChild(
//     createMenuItem(
//       "Tacos Al Pastor",
//       "Thinly sliced pork marinated in a combination of dried chilies, spices, pineapple, and achiote paste. Charcoal roasted on a vertical trompo. As the meat browns it's shaved off and served in corn tortillas with finely chopped onions, cilantro, diced pineapple, and a wedge of lime."
//     )
//   );

//   menu.appendChild(
//     createMenuItem(
//       "Barbacoa Tacos",
//       "Shredded beef slowly braised in a broth of toasted chile de arbol, quajillo, onion, garlic, and spices. Served on corn tortillas with finely chopped onion, cilantro, avacado, and a wedge of lime."
//     )
//   );

//   menu.appendChild(
//     createMenuItem(
//       "Fish Tacos",
//       "Choice of grilled or fried haddock or salmon. Served on corn tortillas with chredded cabbbage, pico de gallo, and a citrus sour cream sauce."
//     )
//   );
//   main.appendChild(menu);
//   return menu;
// }

// function createMenuItem(title, description) {
//   const menuItem = document.createElement("div");
//   menuItem.classList.add("menu-item");

//   const itemTitle = document.createElement("h2");
//   itemTitle.textContent = title;

//   const itemDescription = document.createElement("p");
//   itemDescription.textContent = description;

//   const itemImage = document.createElement("img");
//   itemImage.classList.add("tacoImg");
//   itemImage.src = `images/tacos/${title}.jpg`;
//   itemImage.alt = `${title}`;

//   menuItem.appendChild(itemImage);
//   menuItem.appendChild(itemTitle);
//   menuItem.appendChild(itemDescription);

//   return menuItem;
// }
//     createMenuItem(
//       "Fish Tacos",
//       "Choice of grilled or fried haddock or salmon. Served on corn tortillas with chredded cabbbage, pico de gallo, and a citrus sour cream sauce."
//     )
//   );
//   main.appendChild(menu);
//   return menu;
// }

// function createMenuItem(title, description) {
//   const menuItem = document.createElement("div");
//   menuItem.classList.add("menu-item");

//   const itemTitle = document.createElement("h2");
//   itemTitle.textContent = title;

//   const itemDescription = document.createElement("p");
//   itemDescription.textContent = description;

//   const itemImage = document.createElement("img");
//   itemImage.classList.add("tacoImg");
//   itemImage.src = `images/tacos/${title}.jpg`;
//   itemImage.alt = `${title}`;

//   menuItem.appendChild(itemImage);
//   menuItem.appendChild(itemTitle);
//   menuItem.appendChild(itemDescription);

//   return menuItem;
// }
