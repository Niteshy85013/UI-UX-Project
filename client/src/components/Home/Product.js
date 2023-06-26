import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <section id="product">
      <div className="container  my-4 p-3">
        <h1 className="text-danger">Products</h1>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <div className="col ">
            <div className="card  card-shadows ">
              <a href="/">
                <img src="./images/demo.png" className="card-img-top" alt="" />
              </a>
              {/* <div class="label-top shadow-sm">
          <a class="text-white" href="/">asus</a>
        </div> */}
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    1.245$
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    random text
                  </a>
                </h5>

                {/* <div className="d-grid gap-2">
                  <a href="/" className="btn btn-warning bold-btn">
                    Buy now
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="small text-muted my-4">Images by <a target="_blank" href="https://www.amazon.com/">Amazon</a></div> */}
    </section>
  );
};

export default Product;
