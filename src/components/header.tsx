import { useDispatch, useSelector } from "react-redux";

import { search } from "../api";
import { Input, Button } from "../components";

import { IStore } from "../redux/store";
import { setQuery } from "../redux/product";

export const Header = () => {
  const { loading, query }: any = useSelector(
    (state: IStore) => state.productsData
  );
  const dispatch = useDispatch<any>();
  return (
    <div className="header">
      <Input onChangeText={(text) => dispatch(setQuery(text))} />

      <Button
        disabled={loading}
        title="Search"
        onClick={() => dispatch(search({ query }))}
      />
    </div>
  );
};
