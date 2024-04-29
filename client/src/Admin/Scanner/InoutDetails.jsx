import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/AdminLayout';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const TableThree = () => {
    const [inout, setinout] = useState([]);
    const getToken = () => {
        return localStorage.getItem('token');
    }
    const token = getToken();
    const id = localStorage.getItem('id');
    const getdata = async () => {
        const res = await fetch(`http://localhost:8000/api/v1/agetinoutdetail/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await res.json();
        if (res.status === 404) {
            alert("404 Error: Resource not found");
            // Handle the error appropriately, e.g., display an error message to the user
        }

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setinout(data.array.reverse())
        }

    }
    useEffect(() => {
        getdata();
    }, [])
    const generatePDFReport = () => {
        const doc = new jsPDF();

        // Define table column headers
        const headers = ['Out Date', 'In Date'];

        // Convert inout data into an array of arrays for the table
        const tableData = inout.map(student => [student.out_date, student.in_date]);

        // Add title to the PDF
        doc.text("Student Time Log Report", 10, 10);

        // Add table to the PDF
        doc.autoTable({
            startY: 20,
            head: [headers], // Use the headers array
            body: tableData
        });
        // Save the PDF
        doc.save('student_time_log_report.pdf');
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Check-in and Check-out" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="flex justify-end gap-2.5">
                    <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90" onClick={generatePDFReport}>Generate Report</button>
                </div>
                <br></br>
                <div className="scroll-container" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Out Date
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Out Time
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    In Date
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    In Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {inout.map((inout, key) => (
                                <tr key={key}>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {inout.out_date}
                                        </h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark ">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {inout.out_time}
                                        </h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-2 dark:border-strokedark ">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {inout.in_date}
                                        </h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-2 dark:border-strokedark ">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {inout.in_time}
                                        </h5>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default TableThree;
