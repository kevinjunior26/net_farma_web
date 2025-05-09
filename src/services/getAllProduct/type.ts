export interface CardProductProps {
    id: string;
    slug: string;
    imageSrc: string;
    title: string;
    price: string;
    oldPrice?: string;
    showFavoriteIcon?: boolean;
    date?: string;
    isOnSale?: boolean;
}
