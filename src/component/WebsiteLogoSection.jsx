import { IMAGES } from "../constant/Images"

export const WebLogoSection = () => {
    return(
        <div className="flex">
            <img src={IMAGES.BoldLogo}/>

            <div className="flex flex-wrap items-center pl-3">
                <span className="text-[#101828] font-semibold p-4">Personal</span>
                <span className="text-[#101828] font-semibold bg-[#DCFFC7] px-2 py-1 rounded-[20px]">
                Business
                </span>
            </div>
        </div>
    )
}