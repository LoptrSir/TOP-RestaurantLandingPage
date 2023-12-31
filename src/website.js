//Build Website Script

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Loptr's house of TACOS";
  header.appendChild(restaurantName);
  header.appendChild(createTabs());
  return header;
}

const createTabs = () => {
  const navigation = document.createElement("nav");
  navigation.classList.add('navigation');
  const tabsData = [
    //Will need to be modified for new page links.
    { name: "Home", importFunction: loadHome }, // live-server mod './<folders>.html'
    { name: "Menu", importFunction: loadMenu },
    { name: "Contact", importFunction: loadContact },
    // { name: "Home", url: "./home.js" }, // live-server mod './<folders>.html'
    // { name: "Menu", url: "./menu.js" },
    // { name: "Contact", url: "./contact.js" },
  ];
  // tabsData.classList.add('tabsData');
  tabsData.forEach((tabInfo) => {
    const tab = document.createElement("a");
    tab.classList.add("tab");
    tab.textContent = tabInfo.name;
    tab.href = "#";
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      if (!tab.classList.contains("active")) {
        document.querySelectorAll(".tab").forEach((otherTab) => {
          otherTab.classList.remove("active");
        });
        tab.classList.add("active");
        tabInfo.importFunction();
      }
      // window.location.href = tabInfo.url;
    });
    navigation.appendChild(tab);
  });
  return navigation;
};

// function createMain() {
//   const main = document.createElement("div");
//   main.classList.add("main");
//   return main;
// }

function myFooter() {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "loptrSir";
  return footer;
}

function createWebsite() {
  const contentDiv = document.querySelector(".content");
  contentDiv.appendChild(createHeader());
  const mainDiv = contentDiv.querySelector('.main');
  contentDiv.appendChild(mainDiv);
  // contentDiv.appendChild(createMain());
  contentDiv.appendChild(myFooter());
  loadHome();
}

// document.addEventListener("DOMContentLoaded", function () {
//   //  createWebsite();
// });
    // createWebsite();
export default createWebsite;

