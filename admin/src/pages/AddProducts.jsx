import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { LuImageUp } from "react-icons/lu";


const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [howToUse, setHowToUse] = useState("");
  const [benifits, setBenifits] = useState("");
  const [topRated, setTopRated] = useState(false);
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productQuantity, setProductQuantity] = useState([]);
  const { api, currency } = useContext(AuthContext);

  const addProductQuantity = () => {
    setProductQuantity((pre) => [
      ...pre,
      { quantity: quantity, price: price, discount_price: discountPrice },
    ]);
    setPrice("");
    setDiscountPrice("");
    setQuantity("");
  };

  const removeProductQuantity = (quantityToRemove) => {
    const result = productQuantity.filter(
      (item) => item.quantity !== quantityToRemove
    );
    setProductQuantity(result);
  };

    const editProductQuantity = (editQuantity, editPrice, editDiscountPrice) => {
    const result = productQuantity.filter(
      (item) => item.quantity !== editQuantity
    );
    setProductQuantity(result);
    setQuantity(editQuantity)
    setPrice(editPrice)
    setDiscountPrice(editDiscountPrice)
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(topRated, howToUse, productQuantity);
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleAddProduct} className="flex flex-col gap-3 mt-4">
        <div className="">
          <input type="file"  >
            <LuImageUp /></input>
        
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="border border-gray-400 rounded py-2 pl-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border border-gray-400 rounded py-2 pl-2"
          rows="3"
        ></textarea>
        <textarea
          value={howToUse}
          onChange={(e) => setHowToUse(e.target.value)}
          placeholder=" How to use"
          className="border border-gray-400 rounded py-2 pl-2"
          rows="3"
        ></textarea>
        <textarea
          value={benifits}
          onChange={(e) => setBenifits(e.target.value)}
          placeholder="Benifits"
          className="border border-gray-400 rounded py-2 pl-2"
          rows="3"
        ></textarea>
        <div className="flex gap-2 items-center">
          <label className="cursor-pointer" htmlFor="top_rated">
            Top Rated
          </label>
          <input
            checked={topRated}
            onChange={() => setTopRated(!topRated)}
            className="cursor-pointer"
            id="top_rated"
            type="checkbox"
          />
        </div>
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          placeholder="Rating"
          className="border border-gray-400 rounded py-2 pl-2"
        />
        {/* product Quantity listout  */}
        {productQuantity.length > 0 ? (
          <div className="flex flex-col gap-2">
            {productQuantity.map((item, index) => (
              <div
                className="flex gap-2 bg-sky-100 rounded p-2 w-full "
                key={index}
              >
                <div className="grid grid-cols-2  w-full ">
                  <p>Quantity :</p>
                  <p> {item.quantity}</p>
                  <p>Price :</p>
                  <p>
                    {" "}
                    {currency} {item.price}
                  </p>
                  <p>Discount Price :</p>
                  <p>
                    {currency} {item.discount_price}
                  </p>
                </div>
                <button
                  onClick={() => removeProductQuantity(item.quantity)}
                  className="cursor-pointer bg-red-500 text-white py-2 rounded w-1/6 h-fit self-end  "
                >
                  Remove
                </button>
                <button onClick={() => editProductQuantity(item.quantity, item.price, item.discount_price)} className="bg-gray-500 cursor-pointer text-white py-2 w-1/6 rounded h-fit self-end">
                  Edit
                </button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {/* product quantity section  */}
        <div className="grid grid-cols-3 gap-2">
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            placeholder="Quantity"
            className="border border-gray-400 rounded py-2 pl-2"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
            className="border border-gray-400 rounded py-2 pl-2"
          />
          <input
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            type="number"
            placeholder="Discount Price"
            className="border border-gray-400 rounded py-2 pl-2"
          />

          <button
            type="button"
            className="bg-gray-500 text-white py-2 w-full rounded"
            onClick={() => {
              setPrice("");
              setDiscountPrice("");
              setQuantity("");
            }}
          >
            Cancel
          </button>
          <button
            onClick={addProductQuantity}
            type="button"
            className="bg-green-500 text-white py-2 w-full rounded"
          >
            Add
          </button>
        </div>

        <button className="bg-blue-500 text-white py-2 w-full rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
