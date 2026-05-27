export const Balance=({value})=>{

    return(
        <div className="flex">
            <div className="font-bold text-lg ">
                Apki Rashi
            </div>
            <div className="font-semibold ml-4 text-shadow-lg">
                ₹{value}
            </div>
        </div>
    )
}