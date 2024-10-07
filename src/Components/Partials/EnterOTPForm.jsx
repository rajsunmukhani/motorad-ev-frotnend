import { useState } from "react";

const EnterOTPForm = ({ onClose, onSubmit }) => {
    const [otp, setOtp] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {  // Only allow numeric input, max length 6
            setOtp(value);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md">
                <h2 className="text-lg font-bold mb-4">Enter OTP</h2>
                <p className="mb-4 text-gray-600">Please enter the OTP sent to your registered email address.</p>
                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    className="border p-2 rounded w-full mb-4 text-center text-lg"
                />
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => otp.length === 6 && onSubmit(otp)} // Submit only when OTP is 6 digits
                        className={`px-4 py-2 rounded ${otp.length === 6 ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                        disabled={otp.length !== 6}
                    >
                        Submit OTP
                    </button>
                </div>
            </div>
        </div>
    );
};
 export default EnterOTPForm;