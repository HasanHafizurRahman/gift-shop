import teddybear from "../images/teddy bear (1).jpg";
import rose from "../images/red rose (1).jpg";
import car from "../images/toy car (1).jpg";
import smallgift from "../images/small gift (1).jpg";
import mediumgift from "../images/medium gift box.jpg";
import biggift from "../images/big gift box (1).jpg";
const giftItems = [
  {
    id: 1,
    image: teddybear,
    name: "Teddy Bear",
    price: 40.0,
  },
  {
    id: 2,
    image: rose,
    name: "Red Rose",
    price: 78.0,
  },
  {
    id: 3,
    image: car,
    name: "Toy Car",
    price: 98.0,
  },
];

const giftBoxes = [
  {
    id: 1,
    image: smallgift,
    name: "Small Gift Box",
    price: 5.99,
  },
  {
    id: 2,
    image: mediumgift,
    name: "Medium Gift Box",
    price: 9.99,
  },
  {
    id: 3,
    image: biggift,
    name: "Large Gift Box",
    price: 12.29,
  },
];

export { giftItems, giftBoxes };
