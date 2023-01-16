import { memo } from "react";
import { Products } from "../redux/types";

export interface ProductProps {
  id: string;
  name: string;
  type: string;
  place: string;
  coverUrl: string;
  price: number;
}
const ProductCard = ({ data }: any) => {
  const {
    club: { id, name, type, place, coverUrl },
    price,
  }: Products = data;

  return (
    <div className="card" key={id}>
      <figure>
        <img src={coverUrl} alt={name} />
      </figure>

      <div>Name: {name}</div>
      <div>Place: {place}</div>
      <div>Type: {type}</div>
      <div>Price: {price}</div>
    </div>
  );
};

export default memo(ProductCard);
