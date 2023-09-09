import image1 from "../public/images/slide-1.jpg";
import image2 from "../public/images/slide-2.jpg";
import image3 from "../public/images/slide-3.jpg";
import image4 from "../public/images/slide-4.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

const products = [
    {
        id: "1",
        name: "MANURE",
        price: 400,
        description: "this is the description",
    },
    {
        id: "2",
        name: "MANURE",
        price: 400,
        description: "this is the description",
    },
];
