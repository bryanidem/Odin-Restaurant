import home from "./pages/home";
import contact from "./pages/contact";
import menu from "./pages/menu";

const main = () => {
    const headerButtons = document.querySelectorAll("nav>button");
    const content = document.querySelector("#content");

    headerButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonId = event.target.id;
            content.innerHTML = "";

            switch (buttonId) {
                case "home":
                    home();
                    break;
                case "contact":
                    contact();
                    break;
                case "menu":
                    menu();
                    break;
                default:
                    home();
            }
            console.log(event.target.id);
        });
    });
};
// home();
contact();
main();
