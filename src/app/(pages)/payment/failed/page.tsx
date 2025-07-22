import Image from "next/image";

const PaymentFailed = () => {
    return <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div
            className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">

            <Image src={"/payment/failed.svg"} className="mx-auto" width={80} height={80} alt="logo" />



            <h1 className="mb-6 text-4xl font-extrabold text-red-500">
                OH! NO! Payment Failed!
            </h1>

            {/* <p className="mb-8 text-xl text-gray-700">
               Do
            </p> */}

            <div className="p-6 mb-8 rounded-lg bg-red-50">
                <p className="text-lg font-medium text-red-700">
                    Please contact our support team as soon as possible!
                </p>
            </div>


            <div className="pt-8 mt-8 border-t border-gray-100">
                <p className="text-lg text-gray-700">
                    Have questions? Contact us at:
                </p>
                <a href="mailto:admin@eliteai.tools"
                    className="inline-block mt-2 text-xl font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800">
                    admin@caardify.com
                </a>
            </div>


            <div className="mt-12">
                <a href="http://127.0.0.1:8000"
                    className="inline-block hover:text-black px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-primary rounded-lg hover:bg-secondary">
                    Return to Dashboard
                </a>
            </div>
        </div>
    </div>
}



export default PaymentFailed