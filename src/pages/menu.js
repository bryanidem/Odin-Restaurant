import ham1 from "../assets/images/menu/ham1.jpg";
import ham2 from "../assets/images/menu/ham2.jpg";
import ham3 from "../assets/images/menu/ham3.jpg";

const menuItems = [
    {
        title: "Classic Cheeseburger",
        image: ham1,
        description:
            "A timeless burger with a juicy beef patty, melted cheddar cheese, fresh lettuce, tomato, and a hint of mayo on a toasted bun.",
        price: 5.99,
    },
    {
        title: "Bacon BBQ Burge",
        image: ham2,
        description:
            "A smoky delight featuring a beef patty, crispy bacon, tangy BBQ sauce, melted cheddar, and crunchy onion rings on a soft brioche bun.",
        prince: 7.49,
    },
    {
        title: "Spicy Jalapeño Burger",
        image: ham3,
        description:
            "A bold choice with a beef patty, spicy jalapeños, pepper jack cheese, fresh lettuce, and a dash of chipotle mayo on a toasted sesame bun.",
        price: 6.99,
    },
];

const menu = () => {
    const content = document.querySelector("#content");
    menuItems.forEach((item) => {
        card(item, content);
    });
};

const card = (menuItem, content) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = menuItem.image;
    img.className = "burguer-img";
    const textContainer = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = menuItem.title;
    const price = document.createElement("p");
    price.textContent = `$${menuItem.price}`;
    const description = document.createElement("p");
    description.textContent = menuItem.description;

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    item.appendChild(img);
    item.appendChild(textContainer);
    content.appendChild(item);
};

export default menu;
