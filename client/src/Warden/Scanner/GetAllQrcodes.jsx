import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/WardenLayout';
import React, { useEffect, useState } from 'react'
import { useID } from '../../Auth/Auth';
import ReactApexChart from 'react-apexcharts';
const TableOne = () => {
    const storeIdInLs = useID();
    const [roomissues, setRoomIssues] = useState([]);
    const [uniqueDate, setuniqueDate] = useState([]);
    const state = {
        series: [
            {
                name: 'Count',
                data: uniqueDate.map(item => item.count),
            }
        ]
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

    console.log(token)
    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/api/v1/wgetallqrtokens`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log("asd"+data.result);
        if (res.status === 404) {
            console.error("404 Error: Resource not found");
            // Handle the error appropriately, e.g., display an error message to the user
        }

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setRoomIssues(data.result)
            console.log(roomissues)
            const dateCounts = {};
            data.result.forEach(entry => {
                const date = entry.date;
                if (dateCounts[date]) {
                    dateCounts[date]++;
                } else {
                    dateCounts[date] = 1;
                }
            });
            const uniqueDatesArray = Object.keys(dateCounts).map(date => ({ date, count: dateCounts[date] }));

            setuniqueDate(uniqueDatesArray);
            console.log(uniqueDatesArray);
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <DefaultLayout>
            <Breadcrumb pageName="No of Qrcode Scanned per day" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <ReactApexChart
                    options={options}
                    series={state.series}
                    type="line"
                    height={350}
                />
            </div>
        </DefaultLayout>
    );
};

export default TableOne;

