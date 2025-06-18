import React from "react";
import Card from "./ProductCard";

function Product() {
  const products = [
    { imgUrl: "https://www.shutterstock.com/image-photo/gourmet-summer-dessert-artisanal-craft-600nw-1647372625.jpg", dishName: "Ice Cream", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg", dishName: "Pizza", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg", dishName: "Cake", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://www.shutterstock.com/image-photo/french-fries-260nw-510881971.jpg", dishName: "French Fries", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg", dishName: "Burger", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740", dishName: "Pasta", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    { imgUrl: "https://t3.ftcdn.net/jpg/02/93/22/02/360_F_293220207_aSKIua6mTAymZDbIJOSOApeJ7vNoD6Zd.jpg", dishName: "Salad", hotelName: "Gujarat Hotel", buttonText: "Add to cart" },
    
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 max-w-full w-full text-white">
        <div className="text-center text-2xl font-bold mb-6">
          <h1>Product List</h1>
        </div>
        {/* Grid container with 7 columns */}
        <div className="gap-4 flex flex-wrap justify-center">
          {products.map((product, index) => (
            <Card
              key={index}
              imgUrl={product.imgUrl}
              dishName={product.dishName}
              hotelName={product.hotelName}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

