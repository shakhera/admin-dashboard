import { FaTrash } from "react-icons/fa";
import {
  useDeleteCustomerMutation,
  useGetCustometsQuery,
} from "../../../redux/features/api/baseApi";
import { useState } from "react";
import Swal from "sweetalert2";

const Customers = () => {
  const [deleting, setDeleting] = useState(false);

  const { data: customers, refetch, isLoading } = useGetCustometsQuery();
  console.log(customers);
  const [deleteCustomer] = useDeleteCustomerMutation();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        setDeleting(true);
        await deleteCustomer(id);
        refetch();
        Swal.fire("Deleted!", "The customer has been deleted.", "success");
      } catch (error) {
        console.error("Failed to delete the customer", error);
        Swal.fire(
          "Error!",
          "There was a problem deleting the customer.",
          "error"
        );
      } finally {
        setDeleting(false);
      }
    }
  };

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  return (
    <div className="p-4">
      <div className="bg-gray-300 overflow-x-auto shadow-md rounded-lg">
        {/* Table for larger screens */}
        <div className="overflow-x-auto">
          <table className="hidden md:table min-w-full bg-white ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-r">Id</th>
                <th className="py-2 px-4 border-b border-r">Name</th>
                <th className="py-2 px-4 border-b border-r">User Name</th>
                <th className="py-2 px-4 border-b border-r">Email</th>
                <th className="py-2 px-4 border-b border-r">Phone</th>
                <th className="py-2 px-4 border-b border-r">Address</th>
                <th className="py-2 px-4 border-b border-r">Company</th>
                <th className="py-2 px-4 border-b border-r">Website</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"} `}
                >
                  <td className="py-2 px-4 border-b border-r">{customer.id}</td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.name}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.username}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.email}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.phone}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.address.street}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    {customer.company.name}
                  </td>
                  <td className="py-2 px-4 border-b border-r">
                    <a
                      href={`https://${customer.website}`}
                      className="text-blue-500 hover:underline"
                    >
                      {customer.website}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className={`text-red-500 hover:text-red-700 ${
                        deleting ? "opacity-50" : ""
                      }`}
                      disabled={deleting}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for mobile screens */}
        <div className="md:hidden">
          {customers?.map((customer, index) => (
            <div
              key={customer.id}
              className={`p-4 mb-2 rounded-lg shadow-md ${
                index % 2 === 0 ? "bg-green-50" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{customer.name}</h3>
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Username: {customer.username}
              </p>
              <p className="text-sm text-gray-600">Email: {customer.email}</p>
              <p className="text-sm text-gray-600">Phone: {customer.phone}</p>
              <p className="text-sm text-gray-600">
                Address: {customer.address.street}
              </p>
              <p className="text-sm text-gray-600">
                Company: {customer.company.name}
              </p>
              <a
                href={`https://${customer.website}`}
                className="text-blue-500 hover:underline text-sm"
              >
                {customer.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
