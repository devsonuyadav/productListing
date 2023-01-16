import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { search } from "../api";
import { Button } from "../components";
import { IStore } from "../redux/store";

export enum PriceFilter {
  LOW = "LOW",
  HIGH = "HIGH",
}
export const Filter = () => {
  const [filter, setFilter] = useState<PriceFilter | null>(null);

  const handleFilter = (value: PriceFilter) => {
    if (value === filter) {
      setFilter(null);
      localStorage.setItem("priceFilter", "");
      return;
    }
    setFilter(value);

    localStorage.setItem("priceFilter", value);
  };

  useEffect(() => {
    const appliedFilters: any = localStorage.getItem("priceFilter");

    setFilter(appliedFilters);
  }, []);

  const dispatch = useDispatch<any>();
  const { query }: any = useSelector((state: IStore) => state.productsData);
  return (
    <div className="filter">
      Filter By Price
      <Button
        disabled={false}
        title="Apply"
        onClick={() => dispatch(search({ query }))}
      />
      <div>
        <div className="filterwrapper">
          <input
            checked={filter === PriceFilter.LOW}
            type="checkbox"
            onChange={() => handleFilter(PriceFilter.LOW)}
          />
          <p className="priceFilterText">Low to High</p>
        </div>
        <div className="filterwrapper">
          <input
            checked={filter === PriceFilter.HIGH}
            type="checkbox"
            onChange={() => handleFilter(PriceFilter.HIGH)}
          />
          <p className="priceFilterText">High to Low</p>
        </div>
      </div>
    </div>
  );
};
