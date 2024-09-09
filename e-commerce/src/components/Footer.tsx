import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="w-full h-[282px] bg-black  px-8">
            <div className="max-w-screen-2xl m-auto h-[60%] border-b border-b-gray-500 flex items-center text-white justify-between">

                <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0561 13.9004L34.5292 3.65257C33.5106 1.75987 31.5182 0.577484 29.3494 0.577484H23.4795V3.48091H23.482C24.5644 3.48091 25.5606 4.07087 26.0697 5.01747L31.595 15.2668C32.0567 16.1211 32.2866 17.0598 32.2866 18C32.2866 18.9402 32.0567 19.8784 31.595 20.7333L26.0697 30.9826C25.5606 31.9291 24.5644 32.5191 23.482 32.5191H23.4795V35.4225H29.3494C31.5182 35.4225 33.5106 34.2402 34.5292 32.3475L40.0561 22.0996C40.7456 20.8171 41.0911 19.4093 41.0911 18C41.0911 16.5907 40.7456 15.1829 40.0561 13.9004ZM11.7408 0.577484H17.6116V3.48091H17.6091C16.5267 3.48091 15.5305 4.07087 15.0205 5.01747L9.49661 15.2668C9.03442 16.1211 8.80457 17.0598 8.80457 18C8.80457 18.9402 9.03442 19.8784 9.49661 20.7333L15.0205 30.9826C15.5305 31.9291 16.5267 32.5191 17.6091 32.5191H17.6116V35.4225H11.7408C9.57289 35.4225 7.58053 34.2402 6.56192 32.3475L1.03507 22.0996C0.345521 20.8171 0 19.4093 0 18C0 16.5907 0.345521 15.1829 1.03507 13.9004L6.56192 3.65257C7.58053 1.75987 9.57289 0.577484 11.7408 0.577484Z" fill="white" />
                </svg>

                <div className="flex justify-center items-center gap-8">
                    <div className="flex gap2 w-10 h-10 rounded-full border items-center justify-center border-gray-900">
                        <BsTelephone color="white" size={20} />

                    </div>
                    <p>(976)7007-1234</p>

                    <div className="flex gap2 w-10 h-10 rounded-full border items-center justify-center  border-gray-800">

                        <IoMailOutline color="white" size={20} />

                    </div>
                    <p>contact@ecommerce.mn</p>
                </div>





            </div>
            <div className="max-w-screen-2xl m-auto flex items-center text-white justify-between pt-10">
                <div className="h-[40%] flex  text-white">
                    <p>© 2024 Ecommerce MN</p>
                </div>
                <div className="flex justify-end gap-4">
                    <p><FaFacebook />
                    </p>
                    <p><FaInstagram />
                    </p>
                    <p><FaTwitter />
                    </p>
                    <p><FaLinkedin />
                    </p>
                </div>
            </div>



        </div>
    )
}