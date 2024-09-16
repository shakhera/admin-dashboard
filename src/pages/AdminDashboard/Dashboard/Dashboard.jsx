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
  ResponsiveContainer,
} from "recharts";
import { FaUsers } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineStock } from "react-icons/ai";
import { useState } from "react";
import DetailModal from "../../../components/DetailModal/DetailModal";
import StatsCard from "../../../components/StatsCard/StatsCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Customers Card */}
        <StatsCard
          title="Total Customers"
          value={totalCustomers}
          icon={<FaUsers size={24} className="text-white" />}
          bgColor="bg-accentGreen"
          onClick={() =>
            openModal(
              "Total Customers",
              `The total number of customers is ${totalCustomers}.`
            )
          }
          buttonLabel="↑ Show details"
          buttonColor="text-primary"
        />
        {/* Total Medicine Card */}
        <StatsCard
          title="Total Medicine"
          value="751"
          icon={<GiMedicines size={24} className="text-white" />}
          bgColor="bg-primary"
          onClick={() =>
            openModal("Total Medicine", `The total number of medicines is 751.`)
          }
          buttonLabel="↑ Show details"
          buttonColor="text-secondary"
        />
        {/* Out of Stock Card */}
        <StatsCard
          title="Out of Stock"
          value="751"
          icon={<AiOutlineStock size={24} className="text-white" />}
          bgColor="bg-accentRed"
          onClick={() =>
            openModal(
              "Out of Stock",
              `The total number of out of stock items is 751.`
            )
          }
          buttonLabel="↑ Show details"
          buttonColor="text-accentGreen"
        />
        {/* Expired Medicine Card */}
        <StatsCard
          title="Expired Medicine"
          value="31"
          icon={<SlCalender size={24} className="text-white" />}
          bgColor="bg-warmOrange"
          onClick={() =>
            openModal(
              "Expired Medicine",
              `The total number of expired medicines is 31.`
            )
          }
          buttonLabel="↑ Show details"
          buttonColor="text-accentYellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income Express Statement */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            Income Express Statement
          </h3>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataIncome}
                  cx="50%" // Center the PieChart dynamically
                  cy="50%"
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
            </ResponsiveContainer>
          </div>
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
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tick={{ angle: -30 }} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Monthly Progress Report */}
        <div className="bg-white p-6 rounded-lg shadow col-span-2">
          <h3 className="text-lg font-semibold mb-4">
            Monthly Progress Report
          </h3>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataProgress} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tick={{ angle: -50 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
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
