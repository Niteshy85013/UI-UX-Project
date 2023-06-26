import { Input } from "antd";
import React from "react";

const categories = [
  {
    name: "Electronics",
    value: "electronics",
  },
  {
    name: "Cars",
    value: "cars",
  },
  {
    name: "Fashion",
    value: "fashion",
  },
  {
    name: "Real Estate",
    value: "real-estate",
  },
  {
    name: "Furnishing",
    value: "furnishing",
  },
];

function Filters({ showFilters, setShowFilters, filters, setFilters }) {
  return (
    <div className="w-80 flex flex-col">
      <div className="flex justify-between text-xl">
        <h1 className="text-orange-900 text-xl">Filters</h1>
        <i
          className="ri-close-line cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        ></i>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <h2 className="text-gray-600">Categories</h2>
        <div className="flex flex-row gap-3">
          {categories.map((category) => (
            <div className="flex items-center gap-3" key={category.value}>
              <Input
                type="checkbox"
                name="category"
                className="max-width"
                checked={filters.category.includes(category.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({
                      ...filters,
                      category: [...filters.category, category.value],
                    });
                  } else {
                    setFilters({
                      ...filters,
                      category: filters.category.filter(
                        (item) => item !== category.value
                      ),
                    });
                  }
                }}
              />
              <label htmlFor={category.value}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
