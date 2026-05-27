export const Navbar=({username})=>{
    return(
        <div className="flex items-center h-full  shadow-blue-300 justify-around bg-[oklch(97%_0.014_254.604)] py-3">
                <div className="mr-8">
                    <h2>Payment App</h2>
                </div>
                <div  className="flex items-center gap-5">
                    <p>Hello,{username}</p>
                    <div className="rounded-2xl">
                        <img src="" alt="icon" />
                    </div>
                </div>
        </div>
    )
}