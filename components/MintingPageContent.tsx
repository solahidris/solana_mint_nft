import Image from "next/image";
import nftSampleData from "@/data/nftSampleData.json"
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

const MintingPageContent = () => {

    const router = useRouter();
    const tokenNamePath = router.asPath.substring(1); // Get tokenName by path without "/"
    console.log("tokenNamePath:", tokenNamePath)

    return (
        <main className="flex flex-col items-center p-6 min-h-screen font-rubik text-lg">
            <p className="font-medium pt-6">PFP GENERATOR</p>
            
            <div className="flex justify-between w-full mt-7 max-w-[1080px]">
                <Link href="#" onClick={(e) => { e.preventDefault(); router.back(); }} className="w-full"><Button className="rounded-full h-[48px] w-[48px] bg-gray-200 hover:bg-gray-300"><ChevronLeft className="-ml-1 min-h-8 min-w-8 text-black"/></Button></Link>
                <Button className="px-9 py-6 bg-gray-200 hover:bg-gray-300"><p className="text-black font-[450]">CONNECT WALLET</p></Button>
            </div>

            <div className="flex flex-col gap-8 pt-10 w-full">
                <div className="flex flex-col lg:mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                        {nftSampleData.filter((data) => data.tokenName === tokenNamePath).map((card, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <Image src={card.baseImagePath} alt={card.baseImagePath} width={140} height={140}
                                    className="rounded-xl w-full shadow" />
                                <Link href={`/${card.tokenName}`}><Button className="hover:cursor-pointer bg-gray-200 hover:bg-gray-300 text-lg py-6 w-full rounded-xl text-center text-black font-medium">GENERATE RANDOMLY</Button></Link>
                                <div className="grid grid-cols-2 gap-5 w-full">
                                    <Button className="hover:cursor-pointer bg-gray-200 hover:bg-gray-300 text-lg py-6 rounded-xl text-center font-medium text-black">MINT</Button>
                                    <Button className="hover:cursor-pointer bg-gray-200 hover:bg-gray-300 text-lg py-6 rounded-xl text-center font-medium text-black">DOWNLOAD</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <p className="hover:cursor-pointer font-medium text-lg w-full text-center py-3 bg-gray-200 hover:bg-gray-300 rounded-xl mt-10">MUCH MORE</p> */}
                </div>
            </div>
        </main>
    )
};

export default MintingPageContent;