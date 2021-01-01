function Hearing(){
    return(
        <div className="bg-blue-50 border-h-full  md:h-full p-3 flex justify-center ">
            <div className="bg-white min-w-0 w-1/2 h-screen p-10 ">
            <h1 className="font-serif text-md font-semibold  text-2xl text-green-700 text-center">
                SWERTRES HEARING FOR TODAY
            </h1>

            <div className="flex items-start flex-col p-8">
                <h2 className=" font-sans text-2xl font-semibold  text-red-700">Swertres Lasto Pair:</h2>
                <div className="  flex items-center justify-start flex-row  text-xl mt-4">
                <a className="p-2">20</a>
                <a className="p-2">12</a>
                <a className="p-2">30</a>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Hearing;