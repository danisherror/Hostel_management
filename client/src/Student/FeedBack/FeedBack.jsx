import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
const FormElements = () => {


    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(null);
    const [review, setReview] = useState("");
    const navigate = useNavigate();
    const labels = {
        0: "Unrated",
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    const submitFeedback = async () => {
        const token = localStorage.getItem('token');
        console.log(value)
        console.log(review)
        const response = await fetch(`http://localhost:8000/api/v1/addfeedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                rating: value,
                review: review,
            }),
        });
        //   const res = await fetch(`/api/v1/getfeedback`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${token}`
        //     }
        // });

        const data = await response.json();

        if (response.status === 422 || !data) {
            console.log("Error submitting feedback");
        } else {
            console.log("Feedback submitted successfully:", data);
            navigate('/uhomepage');
            // Optionally, you can handle success actions here
        }
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Leave Application" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">


                {/* <!-- Time and date --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Rate Your Experience
                        </label>
                        <div className="relative">
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                className="items-center justify-center w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
                                onChange={(e) => setValue(e.target.value)}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<FaStar style={{ opacity: 0.55, fontSize: "inherit" }} />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2, fontSize: "16px" }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}

                            <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                                        fill="#64748B"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <label className="mb-3 block text-black dark:text-white">
                                Reason
                            </label>
                            <textarea
                                rows={6}
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Write your feedback here..."
                                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                            ></textarea>
                        </div>
                        <div className="flex justify-center gap-4.5">
                            <button
                                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                type="submit"
                                onClick={submitFeedback}
                            >
                                Save
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </DefaultLayout>
    );
};

export default FormElements;
