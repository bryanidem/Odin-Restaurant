import heartBread from "../assets/images/burguer.png";
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
    title.textContent = "Burguers";

    const slogan = document.createElement("h2");
    slogan.textContent = "No beef with our burgers, just pure joy!";

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
