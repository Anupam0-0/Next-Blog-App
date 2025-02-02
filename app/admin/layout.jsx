import Sidebar from "@/components/AdminComponents/Sidebar";
import { assets } from "@/assets/assets";
import Image from "next/image";


export default function Layout({children}) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full ">
                    <div className="flex items-center justify-between w-full py-3 px-12 max-h-[60px] border-b border-black ">
                        <h3 className="font-medium " >Admin Panel</h3>
                        <Image src={assets.profile_icon} alt='' width={40} ></Image>

                    </div>
                    {children}

                </div>
                

            </div>

            
        </>
    )
}