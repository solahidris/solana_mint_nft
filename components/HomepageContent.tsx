import { ChevronLastIcon, ChevronLeft } from "lucide-react";


const HomepageContent = () => {
    return (
        <main className="flex flex-col items-center p-6 min-h-screen font-rubik">
            <p className="font-semibold text-2xl">PFP GENERATOR</p>
            <p className="font-weight-[500] text-xs text-center pt-2">GENERATE YOUR FAVORITE PFP TOKEN AND MINT IT!</p>
            {/* <p className="text-[80px] pt-20">GOT EM</p> */}
            <div className="flex justify-between">
                <ChevronLeft />

            </div>
        </main>
    )
};

export default HomepageContent;