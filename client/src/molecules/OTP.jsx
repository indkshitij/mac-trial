import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const OTP = () => {
  const [mobNo, setMobNo] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const regex = /^[6-9]\d{9}$/;

  const HandleOtpSend = () => {
    try {
      if (mobNo.length !== 10 || !regex.test(mobNo)) {
        toast.error("Enter a valid mobile number");
        return;
      }

      setOtpSent(true);
    } catch (err) {
      toast.error("Error in sending OTP");
      console.error(err);
    }
  };

  const HandleOtpSubmit = () => {
    console.log("Hello HandleOtpSubmit");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-sm w-full bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-800">
        {/* Title */}
        <h2 className="text-xl font-semibold text-white text-center mb-2">
          Verify OTP
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-zinc-400 text-center mb-6">
          {otpSent
            ? "Enter the OTP sent to your registered number"
            : "Enter the mobile number to send OTP"}
        </p>

        {/* Mobile Input */}
        <div className="space-y-2 mb-3">
          <label className="text-sm text-zinc-300">Mobile Number</label>
          <input
            type="tel"
            minLength={10}
            maxLength={10}
            value={mobNo}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); 
              setMobNo(value);
            }}
            disabled={otpSent}
            placeholder="Enter mobile number"
            className={`w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              otpSent && "cursor-not-allowed opacity-60"
            }`}
          />
        </div>

        {!otpSent && (
          <button
            onClick={HandleOtpSend}
            className="w-full py-2.5 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-all"
          >
            Send OTP
          </button>
        )}

        {otpSent && (
          <div className="mt-10 space-y-10">
            <OTPInput length={4} />

            <button
              onClick={HandleOtpSubmit}
              className="w-full py-2.5 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition-all"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTP;

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) {
      onOtpSubmbit(combinedOtp);
    }

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key == "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onOtpSubmbit = async (otp) => {
    console.log(`OTP Verified Successfull ${otp}`);
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="tel"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onClick={() => handleClick(index)}
            maxLength={1}
            className="w-14 h-14 bg-zinc-800 text-white text-3xl text-center rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        ))}
      </div>
    </>
  );
};
