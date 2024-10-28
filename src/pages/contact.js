import "../styles/contact.css";

const contact = () => {
    const content = document.querySelector("#content");
    contactLogo(content);
    contactText(content);
};

const contactLogo = (content) => {
    const titles = document.createElement("div");
    titles.className = "titles";

    const title = document.createElement("h1");
    title.textContent = "Burguers";

    titles.appendChild(title);
    content.appendChild(titles);
};

const contactText = (content) => {
    const contactContainer = document.createElement("div");
    contactContainer.className = "contactContainer";

    const title = document.createElement("h2");
    title.textContent = "Find us here:";

    const p1 = document.createElement("p");
    p1.textContent = "Monday - Sunday";
    const p2 = document.createElement("p");
    p2.textContent = "6AM - 4PM";
    const p3 = document.createElement("p");
    p3.textContent = "Rioverde, SLP, MX";
    const p4 = document.createElement("p");
    p4.textContent = "test_email@gmail.com";

    contactContainer.appendChild(title);
    contactContainer.appendChild(p1);
    contactContainer.appendChild(p2);
    contactContainer.appendChild(p3);
    contactContainer.appendChild(p4);

    content.appendChild(contactContainer);
};

export default contact;
