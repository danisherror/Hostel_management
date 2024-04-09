import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/AdminLayout';
import React, { useEffect, useState } from 'react'
import { useID } from '../../Auth/Auth';
import ReactApexChart from 'react-apexcharts';
const TableOne = () => {
    const storeIdInLs = useID();
    const [roomissues, setRoomIssues] = useState([]);
    const [uniqueDate, setuniqueDate] = useState([]);
    const [hostelNames, setHostelNames] = useState([]);
    const [selectedData, setSelectedData] = useState('All');
    const state = {
        series: [
            {
                name: 'Count',
                data: uniqueDate.map(item => item.count),
            }
        ]
    };

    const convertTo24HourFormat = (timeStr) => {
        const [time, period] = timeStr.split(" ");
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (period === "PM" && hours < 12) {
          hours += 12;
        } else if (period === "AM" && hours === 12) {
          hours = 0;
        }

        return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    };
    const options = {
        colors: ['#3C50E0'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'line',
            height: 335,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: uniqueDate.map(item => item.date),
        },
        markers: {
            size: 6,
            strokeWidth: 0,
            hover: {
                size: 8
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        }
    };

    const getToken = () => {
        return localStorage.getItem('token');
    }
    const token = getToken();

    const getdata = async () => {
        const res = await fetch(`http://localhost:8000/api/v1/getUniqueHostelNames`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await res.json();
        data.hostelName.reverse();
        setHostelNames(data.hostelName);
    }

    const getchartData = async () => {
        if (selectedData === "All") {
            const res = await fetch(`http://localhost:8000/api/v1/getallqrtokens`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });


            const data = await res.json();
            if (res.status === 404) {
                console.error("404 Error: Resource not found");
                // Handle the error appropriately, e.g., display an error message to the user
            }

            if (res.status === 422 || !data) {
                console.log("error ");

            } else {
                setRoomIssues(data.result)
                const dateCounts = {};
                data.result.forEach(entry => {
                    const timm = entry.time;
                    const firstFourChars = timm.slice(0, 4); // Get characters from index 0 to 3
                    const lastTwoChars = timm.slice(-2); // Get last 2 characters
                    const date =firstFourChars+" "+lastTwoChars;
                    if (dateCounts[date]) {
                        dateCounts[date]++;
                    } else {
                        dateCounts[date] = 1;
                    }
                });
                const uniqueDatesArray = Object.keys(dateCounts).map(date => ({ date, count: dateCounts[date] }));
                uniqueDatesArray.sort((a, b) => {
                    const timeA = convertTo24HourFormat(a.date);
                    const timeB = convertTo24HourFormat(b.date);
                    return timeA.localeCompare(timeB);
                });
                setuniqueDate(uniqueDatesArray);
            }
        }
        else {
            const res = await fetch(`http://localhost:8000/api/v1/getallqrtokensbyhostel/${selectedData}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });


            const data = await res.json();
            if (res.status === 404) {
                console.error("404 Error: Resource not found");
                // Handle the error appropriately, e.g., display an error message to the user
            }

            if (res.status === 422 || !data) {
                console.log("error ");

            } else {
                setRoomIssues(data.result)
                const dateCounts = {};
                data.result.forEach(entry => {
                    const timm = entry.time;
                    const firstFourChars = timm.slice(0, 4); // Get characters from index 0 to 3
                    const lastTwoChars = timm.slice(-2); // Get last 2 characters
                    const date =firstFourChars+" "+lastTwoChars;
                    if (dateCounts[date]) {
                        dateCounts[date]++;
                    } else {
                        dateCounts[date] = 1;
                    }
                });
                const uniqueDatesArray = Object.keys(dateCounts).map(date => ({ date, count: dateCounts[date] }));
                uniqueDatesArray.sort((a, b) => {
                    const timeA = convertTo24HourFormat(a.date);
                    const timeB = convertTo24HourFormat(b.date);
                    return timeA.localeCompare(timeB);
                });
                setuniqueDate(uniqueDatesArray);
            }

        }
    }
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedData(selectedValue);
    }

    useEffect(() => {
        getdata();
        getchartData();
    }, [selectedData]);

    return (


        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">                <div className="flex justify-end gap-4.5 mb-2.5">
            <h4 className="absolute left-25 mb-2 text-xl font-semibold text-black dark:text-white">
                No of Qrcode Scanned per Time
            </h4>
            <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="fullName"
            >
                Filter by Hostel Name:
            </label>
            <div className="relative">
                <select value={selectedData} onChange={handleDropdownChange}
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                    {hostelNames.map((hostel, index) => (
                        <option key={index} value={hostel}>{hostel}</option>
                    ))}
                </select>

            </div>
        </div>
            <ReactApexChart
                options={options}
                series={state.series}
                type="line"
                name="extra"
                height={350}
            />
        </div>

    );
};

export default TableOne;

