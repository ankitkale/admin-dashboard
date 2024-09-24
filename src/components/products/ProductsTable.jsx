import { motion } from "framer-motion";
import { Edit, Search, Target, Trash2 } from "lucide-react";
import { useState } from "react";
import * as XLSX from "xlsx";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 1699,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 1099,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 1999,
    stock: 0,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 499,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 899,
    stock: 78,
    sales: 720,
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const [inStock, setInStock] = useState(false);
  const [price, setPrice] = useState(2000);

  const filterProducts = (
    term,
    selectedPrice,
    stockFilter,
    selectedCategory
  ) => {
    const filtered = PRODUCT_DATA.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      const matchesPrice = product.price <= selectedPrice;

      const matchesStock = stockFilter ? product.stock > 0 : true;

      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;

      return matchesSearch && matchesPrice && matchesStock && matchesCategory;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    filterProducts(term, price, inStock, category);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    filterProducts(searchTerm, price, inStock, selectedCategory);
  };

  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    setInStock(checked);

    filterProducts(searchTerm, price, checked, category);
  };

  const handlePrice = (e) => {
    const selectedPrice = Number(e.target.value);
    setPrice(selectedPrice);

    filterProducts(searchTerm, selectedPrice, inStock, category);
  };

  const exportToExcel = () => {
    // Table data
    const data = filteredProducts.map((product) => ({
      Name: product.name,
      Category: product.category,
      Price: product.price,
      Stock: product.stock,
      Sales: product.sales,
    }));
  
    // Create a new workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
  
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  
    // Export to Excel file
    XLSX.writeFile(workbook, "products_data.xlsx");
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-2 flex-col sm:flex-row">
        <h2 className="text-xl font-semibold text-gray-100 mb-4 sm:mb-0">
          Products List
        </h2>

        <div className="relative">
          <input
            type="text"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="flex flex-row gap-8">
        <div>
          <select
            onChange={handleCategoryChange}
            className="bg-gray-700 text-white px-2 py-1 rounded-lg focus:outline-none"
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Fitness">Fitness</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div className="flex flex-col-reverse">
          <label className="text-sm" htmlFor="price">
            price upto ₹{price}
          </label>
          <input
            type="range"
            name="price"
            min={500}
            max={2000}
            step="100"
            id=""
            value={price}
            onChange={handlePrice}
          />
        </div>
        <div>
          <label htmlFor="avaliable" className="select-none mr-2">
            In Sotck
          </label>
          <input
            type="checkbox"
            id="avaliable"
            name="avaliable"
            onChange={handleCheckBox}
            checked={inStock}
          />
        </div>
        </div>
        <button onClick={exportToExcel} className="border-2 border-green-700 text-green-500 active:bg-green-600 active:text-white px-4 py-1 text-sm rounded-lg">Export to Excel</button>
      </div>

      <div className="overflow-x-auto pt-8">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider relative">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider relative">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider relative">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                    alt="err"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ₹{product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
