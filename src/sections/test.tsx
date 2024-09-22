'use client'

import { Input } from "@/components/ui/input";

const SignIn = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left section */}
            <div className="lg:w-3/5 w-full relative overflow-hidden bg-black text-white flex items-center p-4 lg:p-10">
                <div className="absolute inset-0 z-10">
                    {/* bhiya yaha background image laga dena vo wire node wali  */}
                    {/* <img
                        src="/path-to-background-image.jpg"
                        className="w-full h-full object-cover opacity-70"
                        alt="Background"
                    /> */}
                </div>
                <div className="relative z-20 h-full flex flex-col justify-center lg:pl-[50%] text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold">BUZZVERSE</h1>
                    <p className="text-base lg:text-lg mt-2">The very first to connect talents to brands.</p>
                </div>
            </div>

            {/* Right section for sign-in form */}
            <div className="lg:w-2/5 w-full flex flex-col justify-center items-center bg-white p-4 lg:p-10">
                <h2 className="text-xl lg:text-2xl font-semibold mb-6">Hello Again!</h2>
                <p className="text-sm lg:text-gray-600 mb-4">Welcome Back</p>

                <form className="w-full max-w-md space-y-4 flex flex-col items-center">
                    <div className="relative w-full">
                        <Input className="pl-10 border border-black" placeholder="Email Address" />
                        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/mail.png" alt="email-icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[50%]" />
                    </div>

                    <div className="relative w-full">
                        <Input className="pl-10 border border-black" type="password" placeholder="Password" />
                        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/lock--v1.png" alt="password-icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[50%]" />
                    </div>

                    <button className="w-full lg:w-48 py-3 mt-4 bg-black text-white rounded-3xl text-center">
                        Login
                    </button>

                    <div className="text-center mt-4">
                        <a href="#" className="text-gray-500 text-sm lg:text-base">Forgot Password?</a>
                    </div>

                    <button className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        Continue with LinkedIn
                    </button>

                    <button
                        className="w-full py-3 mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center"
                    >
                        <img width="20" height="20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="mr-2" />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
