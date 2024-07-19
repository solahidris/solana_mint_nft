import Image from "next/image";
import nftSampleData from "@/data/nftSampleData.json"
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./ui/button";

const MintingPageContent = () => {

    const router = useRouter();
    const tokenNamePath = router.asPath.substring(1); // Get tokenName by path without "/"
    console.log("tokenNamePath:", tokenNamePath)

    return (
        <main className="flex flex-col items-center p-6 min-h-screen font-rubik">
            <Link href="#" onClick={(e) => { e.preventDefault(); router.back(); }} className="w-full"><Button>Go Back</Button></Link>
            <div className="flex flex-col gap-8 pt-20 w-full">
                <div className="flex flex-col mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {nftSampleData.filter((data) => data.tokenName === tokenNamePath).map((card, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <Image src={card.baseImagePath} alt={card.baseImagePath} width={140} height={140}
                                    className="rounded-xl w-full shadow" />
                                <Link href={`/${card.tokenName}`}><p className="hover:cursor-pointer bg-gray-200 hover:bg-gray-300 text-lg py-3 w-full rounded-xl text-center font-medium">${card.tokenName}</p></Link>
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