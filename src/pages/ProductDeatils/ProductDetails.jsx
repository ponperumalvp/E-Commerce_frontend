import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bedroomImg from "../../assets/images/bedroom/bedroom4.png";
import Button from "../../components/button/Button";
import Accordion from "../../components/accordion/Accordion";
import { cartProduct, setCountOnly } from "../../Redux/productSlice";
import IncrementButton from "../../components/incrementButton/IncrementButton";

const ProductDetails = () => {
  const { Products, count } = useSelector((store) => store.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  const ProductDeatils = Products.filter((item) => item._id === id);
  console.log(ProductDeatils);
  console.log(count);
  const navigate = useNavigate();
  const handleCartProduct = async (name, image, price) => {
    const userId = sessionStorage.getItem("userId");
    await dispatch(
      cartProduct({
        userId: userId,
        productId: id,
        name: name,
        count: count,
        image: image,
        price: price,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="md:p-10 md:w-[70%] p-2 mx-auto text-textClr">
      {ProductDeatils.map((product, idx) => (
        <div key={idx} className="md:flex gap-8">
          <div className="md:w-[50%] flex flex-col gap-4">
            <div className="">
              <img
                src={product.image ? product.image : bedroomImg}
                alt=""
                className="w-[100%] lg:h-[500px] "
              />
            </div>
            <div className="text-zinc-500">
              <p className="">{product.desc}</p>
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col gap-6">
            <div className="mt-4">
              <h1 className="font-semibold font-serif text-secondaryClr">
                {product.name}
              </h1>
              <p className="font-light">{product.number}</p>
            </div>
            <p className="text-lg font-medium ">$ {product.price}</p>
            <div>
              <p>Color:{product.color}</p>
              <div className="w-6 h-6 border-2 border-zinc-400 rounded-[50%] flex items-center justify-center gap-2">
                <p
                  style={{ backgroundColor: `${product.color}` }}
                  className="w-4 h-4 rounded-[50%]  "
                ></p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Quantity</label>
              <IncrementButton count={count} />
            </div>
            <div>
              <div className="md:w-[80%] flex flex-col gap-4">
                <Button
                  className="bg-primaryClr hover:bg-thirdClr hover:ease-in-out duration-300 h-10 text-white font-semibold text-lg"
                  onclick={() =>
                    handleCartProduct(
                      product.name,
                      product.image,
                      product.price
                    )
                  }
                >
                  Add to Cart
                </Button>
                {/* <Button className="bg-btClr2 h-10 hover:bg-btHover hover:ease-in-out duration-300 text-white font-medium text-lg">
                  Buy Now
                </Button> */}
              </div>
            </div>
            <div>
              <div className="">
                <Accordion title="PRODUCT INFO" answer={product.productInfo} />
              </div>
              <div className="">
                <Accordion
                  title="RETURN AND REFUND POLICY"
                  answer={product.refundPolicy}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
