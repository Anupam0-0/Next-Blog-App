import Sidebar from "@/components/AdminComponents/Sidebar";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from 'react-toastify';


export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className="flex flex-col w-full ">
                    <div className="flex items-center justify-between w-full py-3 px-12 max-h-[60px] border-b border-black ">
                        <Link href='/admin/blogList'>
                            <h3 className="font-medium " >Admin Panel</h3>
                        </Link>
                        <Link href='/admin/blogList'>
                            <Image src={assets.profile_icon} alt='' height={40} width={40} />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}