export interface CardProductProps {
    id: string;
    imageSrc: string;
    title: string;
    price: string;
    oldPrice?: string;
    showFavoriteIcon?: boolean;
}