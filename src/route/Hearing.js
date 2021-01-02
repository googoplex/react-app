function Hearing(){
    return(
        <div className="bg-blue-50 h-screen p-2 flex justify-center ">
            <div className="bg-white max-w-sm mx-auto md:max-w-xl p-8 mx-auto ">
            <h1 className="font-serif text-2xl font-semibold   text-green-700 text-center">
                SWERTRES HEARING FOR TODAY
            </h1>

            <div className="flex items-start flex-col p-8">
                <h2 className=" font-sans text-2xl font-semibold  text-red-700">Swertres Lasto Pair:</h2>
                <div className="  flex items-center justify-start flex-row  text-xl mt-4 font-semibold  ">
                <a className="p-2 text-xl">20</a>
                <a className="p-2">12</a>
                <a className="p-2">30</a>
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