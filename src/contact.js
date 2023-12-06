//Contact js

function createContactList() {
  console.log("create home funct");
  const contactList = document.createElement("div");
  contactList.classList.add("contactList");
  contactList.appendChild(createContact("Phone:", "888.EAT.TACO"));
  contactList.appendChild(createContact("Website:", "LoptrsTACOS.com"));
  contactList.appendChild(createContact("Location:", "1234 Taco Drive, SLC, UT 84111"));
  return contactList;
}

function createContact (title, description) {
    const contactItem = document.createElement('div');
    contactItem.classList.add('contactItem');
    const contactHeader = document.createElement('h4');
    // contactHeader.classList.add('contactHeader');
    contactHeader.textContent = title;
    const contactData = document.createElement('p');
    contactData.textContent = description;
    contactItem.appendChild(contactHeader);
    contactItem.appendChild(contactData);
    console.log('CreateContact');
    return contactItem;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContactList());
}
console.log("Contact.js");
// loadContact();
export default loadContact;
