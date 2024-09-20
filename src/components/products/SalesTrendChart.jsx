import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];

const SalesTrendChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={salesData}>
                <XAxis dataKey={"month"} stroke="#9ca3af" />  
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4b5563"
                }}
                itemStyle={{ color: "#e5e7eb" }}
                />
                <Line 
                type='monotone'
                dataKey='sales'
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ strokeWidth: 2, r: 4}}
                activeDot={{ r:6, strokeWidth:2 }}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesTrendChart
