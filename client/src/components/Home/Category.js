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
    value: "realestate",
  },
  {
    name: "Furnishing",
    value: "furnishing",
  },
];

function Filters({ showFilters, setShowFilters, filters, setFilters }) {
  return (
    <div className="container">
      <div className="w-full flex flex-col">
        <div className="flex justify-around text-xl"></div>

        <div className="flex flex-row gap-1 mt-5">
          <h3 className="text-gray-600">Categories</h3>
          <div className="flex flex-row gap-5 ms-5">
            {categories.map((category) => (
              <div className="flex items-center gap-2" key={category.value}>
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
    </div>
  );
}

export default Filters;
