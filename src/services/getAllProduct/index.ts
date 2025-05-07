import { CardProductProps } from "@/src/services/getAllProduct/type";

const products: CardProductProps[] = [
    { id: "1", imageSrc: "../../img/2.png", title: "Antiseptic Spray", price: "38.00", oldPrice: "45.00" },
    { id: "2", imageSrc: "../../img/2.png", title: "Hydrating Serum", price: "52.50", oldPrice: "60.00" },
    { id: "3", imageSrc: "../../img/2.png", title: "Sunscreen Lotion", price: "29.99" },
    { id: "4", imageSrc: "../../img/2.png", title: "Face Cleanser", price: "24.00", oldPrice: "30.00" },
    { id: "5", imageSrc: "../../img/2.png", title: "Night Cream", price: "67.50" },
    { id: "6", imageSrc: "../../img/2.png", title: "Vitamin C Serum", price: "49.99", oldPrice: "55.00" },
    { id: "7", imageSrc: "../../img/2.png", title: "Moisturizing Lotion", price: "22.50" },
    { id: "8", imageSrc: "../../img/2.png", title: "Eye Cream", price: "34.00", oldPrice: "40.00" },
    { id: "9", imageSrc: "../../img/2.png", title: "Lip Balm", price: "9.99" },
    { id: "10", imageSrc: "../../img/2.png", title: "Facial Toner", price: "18.00", oldPrice: "22.00" },
    { id: "11", imageSrc: "../../img/2.png", title: "Exfoliating Scrub", price: "27.50" },
    { id: "12", imageSrc: "../../img/2.png", title: "Hand Cream", price: "12.99", oldPrice: "15.00" },
    { id: "13", imageSrc: "../../img/2.png", title: "Body Lotion", price: "25.00" },
    { id: "14", imageSrc: "../../img/2.png", title: "Shampoo", price: "14.50", oldPrice: "18.00" },
    { id: "15", imageSrc: "../../img/2.png", title: "Conditioner", price: "16.75" },
    { id: "16", imageSrc: "../../img/2.png", title: "Hair Oil", price: "21.99", oldPrice: "24.99" },
    { id: "17", imageSrc: "../../img/2.png", title: "Facial Mask", price: "19.50" },
    { id: "18", imageSrc: "../../img/2.png", title: "Face Mist", price: "13.00", oldPrice: "16.00" },
    { id: "19", imageSrc: "../../img/2.png", title: "Makeup Remover", price: "17.25" },
    { id: "20", imageSrc: "../../img/2.png", title: "Face Primer", price: "26.00", oldPrice: "30.00" },
];

export function getAllCardProducts(ids?: string[]): CardProductProps[] {
    if (!ids) return products;
    return products.filter(product => ids.includes(product.id));
}
