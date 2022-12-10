import React from "react";
import { Filter, ProductCard, Spinner } from "../../Components";
import "./ProductList.css";
import { useProductFilter } from "../../Context/product-filter";
import {
  filterProducts,
  sortProducts,
  rateProducts,
  priceFilter,
  filterCategory,
  getUrlPrefix,
} from "../../utils";
import { useDataFetch, useToggle } from "../../Hooks";

function ProductList() {
  const { state } = useProductFilter();
  const [isFilterVisible, toggleFilter] = useToggle();
  const { categories, sortBy, rating, price, includeOutOfStock, fastDelivery } =
    state;
  const [{ data, isLoading, isError }] = useDataFetch(
    `${getUrlPrefix()}/api/products`,
    []
  );
  const { products } = data;

  const pricedFiltered = priceFilter(products, price);
  const filteredProducts = filterProducts(pricedFiltered, categories);
  const ratedProducts = rateProducts(filteredProducts, rating);
  const sortedProducts = sortProducts(ratedProducts, sortBy);
  const filteredAvailability = filterCategory(
    sortedProducts,
    includeOutOfStock,
    fastDelivery
  );

  return (
    <div>
      <div className="content">
        <div className="content-section grid-1-5-col">
          <Filter mobile={isFilterVisible} />
          <div className="content">
            <main className="px-3">
              <div className="heading p-2 flex center-div">
                <h3>Showing All Products</h3>
                <small className="px-2">
                  (showing {filteredAvailability.length} products)
                </small>
              </div>

              <div className="product-list">
                {!isLoading &&
                  !isError &&
                  filteredAvailability.length === 0 && (
                    <p>No products matching the filter😔</p>
                  )}
                {isError && <div>Something went wrong 😣</div>}
                {isLoading ? (
                  <Spinner />
                ) : (
                  filteredAvailability?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="mobile-filter p-3">
        <h3>Filters</h3>
        <div className="nav-icon" onClick={() => toggleFilter()}>
          {isFilterVisible ? (
            <i className="fas fa-window-close" title="Close Filter"></i>
          ) : (
            <i className="fas fa-filter" title="Filter"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
