import { useGetCustometsQuery } from "../../../redux/features/api/baseApi";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { FaUsers } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineStock } from "react-icons/ai";
import DetailModal from "../../DetailModal/DetailModal";
import { useState } from "react";

// Random data for charts
const dataIncome = [
  { name: "Today", value: 400 },
  { name: "Weekly", value: 300 },
  { name: "Monthly", value: 300 },
];
const COLORS = ["#28A745", "#4A90E2", "#E74C3C"];

const dataSales = [
  { name: "Napa", sales: 1000 },
  { name: "Zinc", sales: 1600 },
  { name: "Antiva", sales: 1100 },
  { name: "Lumefan", sales: 900 },
  { name: "Rupa", sales: 1000 },
];

const dataProgress = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 2000 },
  { name: "Sep", value: 2780 },
  { name: "Oct", value: 1890 },
  { name: "Nov", value: 4000 },
  { name: "Dec", value: 3000 },
];

const summaryData = [
  { label: "Total Sales", amount: 2930 },
  { label: "Total Purchase", amount: 1232 },
  { label: "Cash Received", amount: 1780 },
  { label: "Bank Received", amount: 510 },
  { label: "E-Banking", amount: 510 },
  { label: "Mobile Banking", amount: 710 },
  { label: "Others", amount: 500 },
];

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const { data: customers } = useGetCustometsQuery();
  const totalCustomers = customers?.length || 0;
  // console.log("totalCustomers", totalCustomers);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* <div className="flex flex-wrap gap-2">
        <div className="w-20 h-20 bg-secondary">1</div>
        <div className="w-20 h-20 bg-bgLight">2</div>
        <div className="w-20 h-20 bg-bgDark">3</div>
        <div className="w-20 h-20 bg-accentGreen">4</div>
        <div className="w-20 h-20 bg-accentYellow">5</div>
        <div className="w-20 h-20 bg-primary">6</div>
        <div className="w-20 h-20 bg-accentRed">7</div>
        <div className="w-20 h-20 bg-brightBlue">8</div>
        <div className="w-20 h-20 bg-warmOrange">9</div>
        <div className="w-20 h-20 bg-lightGray">10</div>
        <div className="w-20 h-20 bg-darkGrayBlue">11</div>
        <div className="w-20 h-20 bg-brightRed">12</div>
        <div className="w-20 h-20 bg-[#00C49F]">13</div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center space-x-2">
          <div>
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-3xl font-extrabold">{totalCustomers}</p>
            <button
              onClick={() =>
                openModal(
                  "Total Customers",
                  `The total number of customers is ${totalCustomers}.`
                )
              }
              className="text-sm text-primary hover:underline"
            >
              ↑ Show details
            </button>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accentGreen border">
            <FaUsers size={24} className="text-white" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center space-x-2">
          <div>
            <h2 className="text-lg font-semibold">Total Medicine</h2>
            <p className="text-3xl font-extrabold">751</p>
            <button
              onClick={() =>
                openModal(
                  "Total Customers",
                  `The total number of customers is ${751}.`
                )
              }
              className="text-sm secondary hover:underline"
            >
              ↑ Show details
            </button>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary ">
            <GiMedicines size={24} className="text-white" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center space-x-2">
          <div>
            <h2 className="text-lg font-semibold">Out of Stock</h2>
            <p className="text-3xl font-extrabold">751</p>
            <button
              onClick={() =>
                openModal(
                  "Total Customers",
                  `The total number of customers is ${751}.`
                )
              }
              className="text-sm accentGreen hover:underline"
            >
              ↑ Show details
            </button>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accentRed border">
            <AiOutlineStock size={24} className="text-white" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center space-x-2">
          <div>
            <h2 className="text-lg font-semibold">Expired Medicine</h2>
            <p className="text-3xl font-extrabold">31</p>
            <button
              onClick={() =>
                openModal(
                  "Total Customers",
                  `The total number of customers is ${31}.`
                )
              }
              className="text-sm accentYellow hover:underline"
            >
              ↑ Show details
            </button>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-warmOrange border">
            <SlCalender size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income Express Statement */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            Income Express Statement
          </h3>
          <PieChart width={300} height={300}>
            <Pie
              data={dataIncome}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {dataIncome.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="flex justify-around mt-4">
            {/* Legend */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-accentGreen"></div>
              <span className="text-sm">Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-brightBlue"></div>
              <span className="text-sm">Weekly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-brightRed"></div>
              <span className="text-sm">Monthly</span>
            </div>
          </div>
        </div>
        {/* Best Sales of the Month */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            Best Sales of the Month
          </h3>
          <LineChart width={450} height={300} data={dataSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Monthly Progress Report */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            Monthly Progress Report
          </h3>
          <BarChart width={450} height={300} data={dataProgress} barSize={15}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Summary Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Today Report</th>
                <th className="px-4 py-2 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"} `}
                >
                  <td className="px-4 py-2 border">{item.label}</td>
                  <td className="px-4 py-2 border">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default Dashboard;
