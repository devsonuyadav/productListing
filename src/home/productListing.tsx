import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { IStore } from "../redux/store";
import { Products } from "../redux/types";
import ProdutCard from "../components/produtCard";

export const ProdudctListing = () => {
  const { products, loading } = useSelector(
    (state: IStore) => state.productsData
  );

  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10,
    data: [] as any[],
  });

  useEffect(() => {
    if (products.length > 0) {
      handlePagination();
    }
  }, [products]);

  const handlePagination = () => {
    setPagination((prev) => {
      let offset = prev.offset + prev.limit;

      const data = products.slice(0, offset);

      return {
        ...prev,
        offset,
        data,
      };
    });
  };

  if (!loading && !products) return <div>please search</div>;
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="animatedLoader" />
      </div>
    );

  return (
    <div id="listing" style={{ height: "100%", overflow: "auto" }}>
      <InfiniteScroll
        dataLength={pagination.data.length}
        next={handlePagination}
        hasMore={true}
        className="listing"
        scrollableTarget="listing"
        loader={<div className="loader" key={0}></div>}
      >
        {pagination.data.map((product: Products) => (
          <ProdutCard data={product} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
