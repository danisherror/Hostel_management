import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
const FormElements = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        hostelName: '',
        block: '',
        roomNo: ''
    });

    const getToken = () => {
        return localStorage.getItem('token');
    }
    const token = getToken();
    console.log(token);


    const handlehostelNameChange = (event) => {
        const selectedHostel = event.target.value;
        const blockOptions = selectedHostel === 'fresher' ? ['A', 'B', 'C'] : ['X', 'Y', 'Z'];
        setFormData((prevData) => ({ ...prevData, hostelName: selectedHostel, block: '' }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // console.log(formData)
            const { hostelName, block, roomNo } = formData;
            console.log(hostelName, block, roomNo);
            const response = await fetch(`http://localhost:8000/api/v1/applyHostel`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    hostelName, block,
                    roomNumber: roomNo
                })
            });
            console.log(response);
            if (response.status === 200) { // Assuming 201 (Created) for successful signup
                alert(`Registered successfully!`);
                navigate('/uhomepage'); // Use appropriate redirect logic
            }
            else if (response.status === 400) {
                alert("student is already assigned to a room")
            }
            else if (response.status === 401) {
                alert("Room is already full. Please choose another room.")
            }
            else if (response.status === 402) {
                alert("Student is already assigned to this room")
            }
            else {
                // Handle other status codes appropriately
                // Consider using more granular error handling
                console.error('Error:', response.status, response.error);
                alert(`Error registering.${response.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Apply Hostel" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">


                {/* <!-- Time and date --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Hostel Name
                        </label>
                        <div className="relative">
                            <select
                                id="hostelName"
                                name="hostelName"
                                value={formData.hostelName}
                                onChange={handlehostelNameChange}
                                className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                            >
                                <option>select the option below</option>
                                <option value="Fresher">Fresher Block</option>
                                <option value="aryabhata">Aryabhata Hostel</option>
                            </select>
                        </div>

                            {formData.hostelName && (
                                <div className="relative">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Block
                        </label>
                                    <select
                                        id="block"
                                        name="block"
                                        value={formData.block}
                                        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                        onChange={(event) => setFormData((prevData) => ({ ...prevData, block: event.target.value }))}
                                    >
                                        <option >select the Block</option>
                                        {formData.hostelName === 'Fresher' &&
                                            ['A', 'B', 'C'].map((block) => (
                                                <option key={block} value={block}>
                                                    {block}
                                                </option>
                                            ))}
                                        {formData.hostelName === 'aryabhata' &&
                                            ['Block X', 'Block Y', 'Block Z'].map((block) => (
                                                <option key={block} value={block}>
                                                    {block}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            )}
                        <div className="relative">
                    <label htmlFor="roomNo">Room Number</label>
                    <input
                        id="roomNo"
                        name="roomNo"
                        type="text"
                        placeholder='001'
                        value={formData.roomNo}
                        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                        onChange={(event) => setFormData((prevData) => ({ ...prevData, roomNo: event.target.value }))}
                    />
                </div>

                        <div className="flex justify-center gap-4.5">
                            <button
                                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                type="submit"
                                onClick={handleSubmit}
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
