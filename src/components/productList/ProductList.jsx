
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = (img,link) => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Created & inspired. It's <span>LogicTech</span></h1>
        <p className="pl-desc">
          LogicTech  create a new portfolio that your work has been waiting for.
          , stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;