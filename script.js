class MenuApp {
  constructor(filter, items) {
    this.filter = filter;
    this.items = items;
  }

  clearMenu (parent) {
    // Need to clear menu render each time an event happens. 
  }

  renderMenuCard(parent) {
    let newMenuCard = document.createElement("div");
    newMenuCard.classList.add("menu-card");
    parent.appendChild(newMenuCard);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    newMenuCard.appendChild(imgDiv);
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    newMenuCard.appendChild(textDiv);
    return newMenuCard;
  }

  renderItemName(item, parent) {
    let newItem = document.createElement("h2");
    newItem.textContent = item;
    parent.appendChild(newItem);
    return newItem;
  }

  renderItemDescription(item, parent) {
    let newDescription = document.createElement("p");
    newDescription.textContent = item;
    newDescription.classList.add("description");
    parent.appendChild(newDescription);
    return newDescription;
  }

  renderItemPrice(item, parent) {
    let newPrice = document.createElement("p");
    newPrice.textContent = item;
    newPrice.classList.add("price");
    parent.appendChild(newPrice);
  }

  renderItemImage(item, parent) {
    let newImage = document.createElement("img");
    newImage.classList.add("image");
    newImage.setAttribute("src", item);
    parent.appendChild(newImage);
  }

  renderMenu(filter, items, parent) {
    if (filter === "all") {
      for (let i = 0; i < items.length; i++) {
        let newCard = this.renderMenuCard(parent);
        this.renderItemName(items[i].itemName, newCard.children[1]);
        this.renderItemDescription(
          items[i].itemDescription,
          newCard.children[1]
        );
        this.renderItemPrice(items[i].itemPrice, newCard.children[1]);
        this.renderItemImage(items[i].itemImage, newCard.children[0]);
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemType === filter) {
          let newCard = this.renderMenuCard(parent);
          this.renderItemName(items[i].itemName, newCard.children[1]);
          this.renderItemDescription(
            items[i].itemDescription,
            newCard.children[1]
          );
          this.renderItemPrice(items[i].itemPrice, newCard.children[1]);
          this.renderItemImage(items[i].itemImage, newCard.children[0]);
        }
      }
    }
  }
}
const menuItemsSection = document.querySelector(".menu-items");

let cafeteriaMenu = new MenuApp();

const menu = [
  {
    itemName: "Egg Basket Special",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/basket-egg.jpg",
    itemPrice: "$ 14.75",
    itemType: "breakfast",
  },
  {
    itemName: "Toastie Morning",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/egg-toast.jpg",
    itemPrice: "$ 9.50",
    itemType: "breakfast",
  },
  {
    itemName: "European Breakfast",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/euro-toast.jpg",
    itemPrice: "$ 11.75",
    itemType: "breakfast",
  },
  {
    itemName: "Classic Burger",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/classic-burger.jpg",
    itemPrice: "$ 15.35",
    itemType: "lunch",
  },
  {
    itemName: "Killer Mozzarella Burger",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/mozzarella-burger.jpg",
    itemPrice: "$ 12.29",
    itemType: "lunch",
  },
  {
    itemName: "Pretzel Cheddar Burger",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/pretzel-cheddar-burger.jpg",
    itemPrice: "$ 8.24",
    itemType: "lunch",
  },
  {
    itemName: "Smoked Steak Burger",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/smoked-steak-burger.jpg",
    itemPrice: "$ 14.20",
    itemType: "lunch",
  },
  {
    itemName: "Black Forest Smoothie",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/black-forest-smoothie.jpg",
    itemPrice: "$ 9.18",
    itemType: "shakes",
  },
  {
    itemName: "Blue Lemonade",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/blue-lemonade-shakes.jpg",
    itemPrice: "$ 7.35",
    itemType: "shakes",
  },
  {
    itemName: "Spring Strawberry Shake",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, temporibus inventore necessitatibus fuga deleniti?",
    itemImage: "./assets/img/spring-strawberry-shake.jpg",
    itemPrice: "$ 8.49",
    itemType: "shakes",
  },
];

cafeteriaMenu.renderMenu("all", menu, menuItemsSection);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cafeteriaMenu.renderMenu(button.id, menu, menuItemsSection);
  });
});
