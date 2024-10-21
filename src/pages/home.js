import heartBread from "../assets/images/heart-bread-image.png";
import "../styles/home.css";

const home = () => {
    const content = document.querySelector("#content");
    heroContent(content);
    heroImage(content);
};

const heroContent = (content) => {
    const heroText = document.createElement("div");
    heroContent.className = "hero-content";

    const title = document.createElement("h1");
    title.textContent = "Panfilo's Bakery";

    const slogan = document.createElement("h2");
    slogan.textContent = "Where Love and Bread Rise Togheter";

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy Now";

    heroText.appendChild(title);
    heroText.appendChild(slogan);
    heroText.appendChild(buyButton);

    content.appendChild(heroText);
};

const heroImage = (content) => {
    const heroImage = document.createElement("img");
    heroImage.src = heartBread;
    heroImage.className = "hero-image";
    content.appendChild(heroImage);
};
export default home;
