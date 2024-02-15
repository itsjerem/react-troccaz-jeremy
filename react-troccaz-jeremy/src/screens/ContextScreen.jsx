import { useEffect, useState } from "react";
import "../App.css";
import UserContext from "../UserContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemScreen from "../components/ItemScreen";
import User, { UserContextProvider } from "../components/User";
import CheeseContext from "./CheeseContext";

const cheeses = [
  {
    name: "Brie",
    photo:
      "https://img.cuisineaz.com/1024x1024/2016/06/06/i92261-brie-au-four-au-miel-et-romarin.webp",
    isAdmin: true,
  },
  {
    name: "Cheddar",
    photo:
      "https://leloft-restaurant.com/wp-content/uploads/2020/05/frites-cheddar.jpg",
    isAdmin: true,
  },
  {
    name: "Gouda",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/32/c9/46/caption.jpg?w=500&h=400&s=1",
    isAdmin: false,
  },
  {
    name: "Pepper Jack",
    photo:
      "https://www.sargento.com/assets/00122_SL_PpprJck_7-5oz_Frnt__PadWzc2Miw4NzIsIkZGRkZGRiIsMF0.png",
    isAdmin: false,
  },
];

const ContextScreen = () => {
  const [isSelected, setIsSelected] = useState(false);
  const value = { cheeses, isSelected };

  return (
    <CheeseContext.Provider value={value}>
      <UserContextProvider>
        <div>
          ss
          <Header />
          <ItemScreen />
        </div>
      </UserContextProvider>
      <Footer onClick={() => setIsSelected(!isSelected)} />
    </CheeseContext.Provider>
  );
};

export default ContextScreen;
