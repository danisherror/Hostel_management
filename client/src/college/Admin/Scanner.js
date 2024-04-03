//----------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import QrScanner from 'qr-scanner';
// import Navbar from "../Logins/ANavbar";

// const QRScanner = () => {
//     const [scanner, setScanner] = useState(null);
//     // const [tokens, setTokens] = useState([]);
//     // const [showConfirmation, setShowConfirmation] = useState(false);

//     // useEffect(() => {
//     //     const initializeScanner = async () => {
//     //         const videoElem = document.getElementById('qr-video');
//     //         try {
//     //             const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
//     //             videoElem.srcObject = stream;
//     //             const newScanner = new QrScanner(videoElem, handleScan);
//     //             setScanner(newScanner);
//     //             newScanner.start();
//     //         } catch (error) {
//     //             console.error('Error accessing camera:', error);
//     //         }
//     //     };

//     //     initializeScanner();

//     //     return () => {
//     //         if (scanner) {
//     //             scanner.destroy(); // Use 'destroy()' instead of 'stop()' to properly clean up the scanner
//     //         }
//     //     };
//     // }, [scanner]);

//     // const handleScan = (result) => {
//     //     if (result) {
//     //         const currentDate = new Date();
//     //         const dateString = currentDate.toISOString();
//     //         const timeString = currentDate.toLocaleTimeString();
//     //         const scannedData = { _id: result.data, date: dateString, time: timeString };
//     //         setTokens((prevTokens) => [...prevTokens, scannedData]);
//     //         setShowConfirmation(true);
//     //         setTimeout(() => {
//     //             setShowConfirmation(false);
//     //         }, 2000);
//     //     }
//     // };
//     const getToken = () => {
//         return localStorage.getItem('token');
//     }
//     const token = getToken();

//     const sendTokensToBackend = async (e) => {
//         try {
//             e.preventDefault();
//             // console.log(tokens);
//             const op = []
//             const currentDate = new Date();
//             const year = currentDate.getFullYear();
//             const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
//             const day = String(currentDate.getDate()).padStart(2, '0');
//             const dateString = `${year}-${month}-${day}`;
//             const timeString = currentDate.toLocaleTimeString();
//             const scannedData = { _id: '65ebeee60ed429aa251e6cbf', date: dateString, time: timeString };
//             for (let i = 0; i < 10; i++) {
//                 op.push(scannedData);
//             }
//             console.log(op)
//             const response = await fetch('/api/v1/addqrtokens', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify({
//                     op
//                 }),
//             });
//             const data = await response.json();
//             console.log('Backend response:', data);
//         } catch (error) {
//             console.error('Error sending tokens to backend:', error);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             {/* <div>
//                 <video id="qr-video" autoPlay playsInline style={{ width: '100%', maxWidth: '600px' }} />
//                 <button onClick={sendTokensToBackend} disabled={tokens.length === 0}>
//                     Send Tokens to Backend
//                 </button>
//                 <ul>
//                     {tokens.map((token, index) => (
//                         <li key={index}>
//                             <p>Token: {token._id}</p>
//                             <p>Date: {token.date}</p>
//                             <p>Time: {token.time}</p>
//                         </li>
//                     ))}
//                 </ul>
//                 {showConfirmation && <p>QR code scanned successfully!</p>}
//             </div> */}
//             <button onClick={sendTokensToBackend}>
//                 Send Tokens to Backend
//             </button>
//         </>
//     );
// };

// export default QRScanner;
import Navbar from "../Logins/ANavbar";
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import beepSound from "../assets/sounds/beep.mp3";
const QRScanner = () => {
    const [scanResults, setScanResults] = useState([]);
    const [scanner, setScanner] = useState(null);
    const getToken = () => {
        return localStorage.getItem('token');
    }
    const token = getToken();

    useEffect(() => {
        const newScanner = new Html5QrcodeScanner('reader', {
            qrbox: 250,
            fps: 5,
        });

        newScanner.render(handleScan, handleError);
        setScanner(newScanner);

        return () => {
            newScanner.clear();
        };
    }, []);
    const playBeepSound = () => {
        const audio = new Audio(beepSound);
        audio.play();
    };
    const sendTokensToBackend = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('/api/v1/addqrtokens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    scanResults
                }),
            });
            const data = await response.json();
            console.log('Backend response:', data);
        } catch (error) {
            console.error('Error sending tokens to backend:', error);
        }
    };

    const handleScan = (result) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        const timeString = currentDate.toLocaleTimeString();
        const scannedData = { _id: result, date: dateString, time: timeString };
        const existingIndex = scanResults.findIndex(item => item._id === result);
        // playBeepSound();
        if (existingIndex === -1) {
            const newScanner = [...scanResults]
            newScanner.push(scannedData);
            setScanResults(newScanner);

        } else {
            // Optionally, update existing entry here
            console.log(`Token '${result}' already scanned.`);
        }
    };

    const handleError = (err) => {
        console.warn('QR Code Scanner Error:', err);
    };

    return (
        <> <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>QR Code Scanning in React</h1>
            <div id="reader" style={{ width: '400px', height: '400px', border: '1px solid black' }}></div>
            <br></br>
            <button onClick={sendTokensToBackend} class="btn btn-primary">
                Send Tokens to Backend
            </button>
            <br></br>
            <ul className="scroll-container" style={{ maxHeight: '500px', overflowY: 'scroll', width: '400px', height: '400px', }}>

                {scanResults.map((result, index) => (
                    <li key={index}>
                        <p>Token: {result._id}</p>
                        <p>Date: {result.date}</p>
                        <p>Time: {result.time}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default QRScanner;
