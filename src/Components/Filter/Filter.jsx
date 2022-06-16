import React from "react";
import { useProductFilter } from "../../Context/product-filter";
import CheckBox from "../CheckBox/CheckBox";
import Radio from "../Radio/Radio";
import "./Filter.css";

function Filter({ mobile }) {
  const { state, dispatch } = useProductFilter();
  const { categories, sortBy, rating, price, includeOutOfStock, fastDelivery } =
    state;
  const { menWatches, womenWatches, boyWatches, girlWatches } = categories;

  return (
    <div>
      <aside className={`${mobile && "mobile-sidebar"} sidebar p-3`}>
        <div className="filter-header flex my-1">
          <h4 className="pb-2">Filter</h4>
          <div
            className="btn-link"
            onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
          >
            Clear
          </div>
        </div>
        <div className="filter flex-column my-1">
          <h4>Price</h4> {`₹${price} / ₹2000`}
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="2000"
            step="500"
            value={price}
            onChange={(e) =>
              dispatch({ type: "SET_PRICE", payload: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="filter flex-column my-2">
          <h4 className="pb-2">Category</h4>
          <div className="option">
            <CheckBox
              type="Include out of stock"
              checked={includeOutOfStock}
              changeHandler={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
            />
            <CheckBox
              type="Fast delivery"
              checked={fastDelivery}
              changeHandler={() => dispatch({ type: "FAST_DELIVERY" })}
            />
          </div>
        </div>
        <div className="filter flex-column my-2">
          <h4 className="pb-2">Ideal for</h4>
          <div className="option">
            <CheckBox
              type="Mens"
              checked={menWatches}
              changeHandler={() => dispatch({ type: "MEN_WATCHES" })}
            />
            <CheckBox
              type="Womens"
              checked={womenWatches}
              changeHandler={() => dispatch({ type: "WOMEN_WATCHES" })}
            />
            <CheckBox
              type="Boys"
              checked={boyWatches}
              changeHandler={() => dispatch({ type: "BOY_WATCHES" })}
            />
            <CheckBox
              type="Girls"
              checked={girlWatches}
              changeHandler={() => dispatch({ type: "GIRL_WATCHES" })}
            />
          </div>
        </div>
        <div className="filter flex-column my-2">
          <h4 className="pb-2">Rating</h4>
          <div className="option">
            <Radio
              value="4"
              label="4 ★ & above"
              name="rating"
              checked={rating === 4}
              changeHandler={() => dispatch({ type: "SET_RATING", payload: 4 })}
            />
            <Radio
              value="3"
              label="3 ★ & above"
              name="rating"
              checked={rating === 3}
              changeHandler={() => dispatch({ type: "SET_RATING", payload: 3 })}
            />
            <Radio
              value="2"
              label="2 ★ & above"
              name="rating"
              checked={rating === 2}
              changeHandler={() => dispatch({ type: "SET_RATING", payload: 2 })}
            />
            <Radio
              value="1"
              label="1 ★ & above"
              name="rating"
              checked={rating === 1}
              changeHandler={() => dispatch({ type: "SET_RATING", payload: 1 })}
            />
          </div>
        </div>
        <div className="filter flex-column my-2">
          <h4 className="pb-2">Sort by</h4>
          <div className="option">
            <Radio
              value="low"
              label="Price - Low to High"
              name="sort"
              checked={sortBy === "low_to_high"}
              changeHandler={() =>
                dispatch({ type: "SET_SORT_BY", payload: "low_to_high" })
              }
            />
            <Radio
              value="high"
              label="Price - High to Low"
              name="sort"
              checked={sortBy === "high_to_low"}
              changeHandler={() =>
                dispatch({ type: "SET_SORT_BY", payload: "high_to_low" })
              }
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Filter;
