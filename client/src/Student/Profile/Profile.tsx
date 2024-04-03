import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import CoverOne from '../../images/cover/cover-01.png';
import userSix from '../../images/user/user-06.png';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import React, { useEffect, useState } from 'react'

const Profile = () => {

  const [getuserdata, setStudentDetail] = useState({});
  console.log("dsdsds ", getuserdata);
  const getToken = () => {
      return localStorage.getItem('token');
  }
  const token = getToken();

  console.log(token)
  const [qrCodeText, setQRCodeText] = useState('');
  const getdata = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/studentProfile`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          }
      });

      const data = await res.json();
      console.log(data);
      if (res.status === 404) {
          alert("404 Error: Resource not found");
          // Handle the error appropriately, e.g., display an error message to the user
      }

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setStudentDetail(data.user)
          setQRCodeText(data.user._id)
          console.log("get data");
      }
  }
  // const downloadQRCode = () => {
  //     const qrCodeURL = document.getElementById('qrCodeEl')
  //         .toDataURL("image/png")
  //         .replace("image/png", "image/octet-stream");
  //     console.log(qrCodeURL)
  //     let aEl = document.createElement("a");
  //     aEl.href = qrCodeURL;
  //     aEl.download = "QR_Code.png";
  //     document.body.appendChild(aEl);
  //     aEl.click();
  //     document.body.removeChild(aEl);
  // }
  useEffect(() => {
      getdata();
  }, [])

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={getuserdata.url} alt="profile" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            {getuserdata.name}
            </h3>
            {/* <p className="font-medium">Ui/Ux Designer</p> */}
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="text-sm">Student ID</span>
                <span className="font-semibold text-black dark:text-white">
                {getuserdata.collegeid}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="text-sm">Semester</span>
                <span className="font-semibold text-black dark:text-white">
                {getuserdata.semester}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="text-sm">email</span>
                <span className="font-semibold text-black dark:text-white">
                {getuserdata.email}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="text-sm">Phone No</span>
                <span className="font-semibold text-black dark:text-white">
                {getuserdata.phone}
                </span>
              </div>

            </div>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">

            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="text-sm">Token</span>
                <span className="font-semibold text-black dark:text-white">
                <QRCode  id="qrCodeEl" size={150} value={qrCodeText} renderAs="canvas" />
                </span>
              </div>
              </div>


          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
