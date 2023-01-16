import { Filter } from "./filter";
import { Header } from "../components";
import { ProdudctListing } from "./productListing";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content-wrapper">
        <Filter />
        <div className="productListingWrapper">
          <ProdudctListing />
        </div>
      </div>
    </div>
  );
};
