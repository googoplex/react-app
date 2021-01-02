function History(){
    return(
        <div className="bg-blue-50 h-full  md:h-full p-3 flex justify-center ">
        <div className="bg-white max-w-xl md: max-w-xl  p-10 h-full ">
        <h1 className="font-serif text-md font-semibold  text-3xl text-red-700 text-center">Swertres Result History and Summary</h1>
        <p className="p-2 mt-4 text-xl">The Swertres result history, 3D lotto summary for the year 2021 & 2020 as well as the 
            Swertres results today are available at this website for everyone’s consumption. 
        The results of the Swertres hearing is courtesy of the Philippine Charity Sweepstakes Office (PCSO).</p>
        <p className="p-2 text-xl">The three (3) digit game, popularly referred as Swertres Lotto or 3D is conducted by PCSO 
            from Monday to Sunday at 2PM, 5PM and 9PM time-slots.</p>
        <p className="p-2 text-xl">
        To view the results of other PCSO Lotto games as well as know their specific playing rules,
         here are the latest results for the 6/58 Ultra Lotto, 6/55 Grand Lotto, 6/49 Super 
         Lotto, 6/45 Mega Lotto, 6/42 Lotto, EZ2 Lotto and STL Lotto. 
        You may also want to view the summary of all lotto results today.
        </p>
        <h1 className="font-serif text-md font-semibold  text-2xl text-red-700 mt-4 text-center">Swertres Result History and Summary</h1>
        <table className="table-auto bg-blue-100 h-full w-full ml-2 ">
            <thead className="">
                <tr >
                   <th>3D Swetres Result Year 2021</th> 
                   <th className="20">2PM</th>
                   <th className="w/2">5PM</th>
                   <th className="w/2">9PM</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>3D Swetres Result Year 2020</th> 
                </tr>
                <tr className="border  ml-2"> 
                   <td className="p-2 ">January 30 2021</td>
                   <td className="ml-2">123</td>
                   <td>435</td>
                   <td>426</td>

                </tr>

            </tbody>
        </table>
        </div>
    </div>
    )
}
export default History;