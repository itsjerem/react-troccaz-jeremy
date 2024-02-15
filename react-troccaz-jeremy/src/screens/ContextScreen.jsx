import "../App.css";
import Header from "../components/Header";
import ItemScreen from "../components/ItemScreen";

const cheeses = [
  {
    name: "Brie",
    photo:
      "https://www.fromagerie-abbaye.fr/images/Image/Image/094-WEB_EFG1281RPRIBIERE.jpg?1673863745930",
  },
  {
    name: "Cheddar",
    photo:
      "https://offloadmedia.feverup.com/lyonsecret.com/wp-content/uploads/2020/10/28053604/FROMAGE-1024x597.png",
  },
  {
    name: "Gouda",
    photo:
      "https://www.lacaveafromages.fr/public/img/big/AdobeStock16608010jpeg_62e10d4b25c32.jpeg",
  },
  {
    name: "Pepper Jack",
    photo:
      "https://cdn.laetis.fr/i/herault/large/https://cdt34.media.tourinsoft.eu/upload/La-fromagerie--1--2.jpg",
  },
];

const ContextScreen = () => {
  return (
    <div>
      <Header />
      <ItemScreen cheese={cheeses} />
    </div>
  );
};

export default ContextScreen;
