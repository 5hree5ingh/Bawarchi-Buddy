import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Button from "../Button/Button"; //
import milk from "../../assets/milk.png";
import Cards from "../Cards/Cards";

const tabs = ["All", "Spices", "Spices-Powder", "Ready-Made"];

const products = [
  {
    id: 1,
    category: "Spices-Powder",
    product: "Turmeric Powder",
    price: 45,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 2,
    category: "Spices-Powder",
    product: "Red Chili Powder",
    price: 55,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 3,
    category: "Spices-Powder",
    product: "Coriander Powder",
    price: 38,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 4,
    category: "Spices",
    product: "Cumin Seeds",
    price: 65,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 5,
    category: "Spices",
    product: "Black Pepper",
    price: 120,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 6,
    category: "Spices",
    product: "Cloves",
    price: 150,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 7,
    category: "Spices",
    product: "Cardamom",
    price: 200,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 8,
    category: "Spices",
    product: "Fenugreek Seeds",
    price: 40,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 9,
    category: "Spices",
    product: "Mustard Seeds",
    price: 30,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 10,
    category: "Spices",
    product: "Asafoetida (Hing)",
    price: 180,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 11,
    category: "Ready-Made",
    product: "Garam Masala",
    price: 90,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 12,
    category: "Spices",
    product: "Kasuri Methi",
    price: 50,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 13,
    category: "Spices",
    product: "Fennel Seeds",
    price: 35,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 14,
    category: "Spices",
    product: "Bay Leaves",
    price: 25,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 15,
    category: "Spices-Powder",
    product: "Dry Mango Powder",
    price: 60,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 16,
    category: "Spices",
    product: "Cinnamon",
    price: 70,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 17,
    category: "Spices",
    product: "Nutmeg",
    price: 130,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 18,
    category: "Spices",
    product: "Mace (Javitri)",
    price: 160,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 19,
    category: "Spices",
    product: "White Pepper",
    price: 140,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 20,
    category: "Spices",
    product: "Rock Salt",
    price: 20,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 21,
    category: "Ready-Made",
    product: "Chaat Masala",
    price: 35,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 22,
    category: "Ready-Made",
    product: "Kitchen King Masala",
    price: 55,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 23,
    category: "Ready-Made",
    product: "Paneer Masala",
    price: 48,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 24,
    category: "Ready-Made",
    product: "Biryani Masala",
    price: 60,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
  {
    id: 25,
    category: "Ready-Made",
    product: "Tea Masala",
    price: 42,
    image: milk,
    wishlist: <FaHeart />,
    addicon: <MdAdd />,
    button: <Button content="Shop" />,
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");


const renderCards = products
  .filter(product => activeTab === "All" || product.category === activeTab).slice(0,8).map((Product) => {

    return (
      <div
        key={Product.id} // Always add a unique key when mapping
        className="flex-1 basis-[300px] bg-zinc-100 p-4 rounded-xl"
      >
        <Cards
          image={Product.image}
          product={Product.product}
          price={Product.price}
        />
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-10 py-10">
        <Heading highlight="Our" content="Products" />

        {/* TAB */}

        <div className="w-full flex gap-3 justify-center mt-10 flex-wrap">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-5 py-2 text-lg ${
                  activeTab === tab
                    ? "bg-gradient-to-b from-orange-400 to-orange-500"
                    : "bg-zinc-100"
                } `}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="grid md:grid-cols-4 gap-9 mt-12">{renderCards}</div>
      </div>
      <div className="mt-3 mx-auto w-fit "><Button content="View All"/></div>
    </section>
  );
};

// ✅ this is the correct array being mapped

export default Products;
