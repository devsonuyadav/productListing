import { memo } from "react";
import { Link } from "react-router-dom";
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
    <Link to="/product" state={data} className="card" key={id}>
      <figure>
        <img src={coverUrl} alt={name} />
      </figure>

      <div>Name: {name}</div>
      <div>Place: {place}</div>
      <div>Type: {type}</div>
      <div>Price: {price}</div>
    </Link>
  );
};

export default memo(ProductCard);
