import {FavoritosTemplate} from "@/src/components/templates/FavoritosTemplate/Favoritos";
import { getAllCardProducts } from "@/src/services/getAllProduct";

export default async function FavoritosPage() {
     const data = await getAllCardProducts();

    return <FavoritosTemplate data={data}/>
}
