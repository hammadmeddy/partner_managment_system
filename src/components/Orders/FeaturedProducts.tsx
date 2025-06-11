import React from "react";

const products = [
  {
    title: "Industrial IoT Temperature Sensor",
    category: "Sensors",
    price: "$125.00",
    stockStatus: "In Stock",
    stockColor: "#22c55e", // Green
    buttonGradient: "from-[#3b82f6] to-[#9333ea]", // Blue to Purple
    icon: "🌡️",
  },
  {
    title: "Multi-Protocol Gateway Hub",
    category: "Gateways",
    price: "$890.00",
    stockStatus: "Low Stock",
    stockColor: "#ef4444", // Red
    buttonGradient: "from-[#3b82f6] to-[#9333ea]", // Blue to Purple
    icon: "🔌",
  },
  {
    title: "Smart Building Controller",
    category: "Controllers",
    price: "$340.00",
    stockStatus: "In Stock",
    stockColor: "#22c55e", // Green
    buttonGradient: "from-[#3b82f6] to-[#9333ea]", // Blue to Purple
    icon: "🎛️",
  },
  {
    title: "Long-Range Wireless Module",
    category: "Wireless",
    price: "$78.00",
    stockStatus: "In Stock",
    stockColor: "#22c55e", // Green
    buttonGradient: "from-[#3b82f6] to-[#9333ea]", // Blue to Purple
    icon: "📡",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="max-w-6xl w-full mx-auto lg:w-[40%] px-4">
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow rounded-2xl p-6">
            <div>
              <div className="flex items-center justify-start gap-2">
                {product.icon}
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {product.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500">{product.category}</p>
              <span className="flex mt-2 justify-between items-center">
                <p className="text-xl font-bold text-[#1e293b]">
                  {product.price}
                </p>
                <span
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${product.stockColor}33`,
                    color: product.stockColor,
                  }}
                >
                  {product.stockStatus}
                </span>
              </span>
            </div>
            <button
              className={`mt-4 text-white font-semibold px-6 py-2 w-full rounded-xl bg-gradient-to-r ${product.buttonGradient}`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
