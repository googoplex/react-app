import { red } from "@material-ui/core/colors";



function Result(){
    return(
        <div className="bg-blue-50 h-full   p-3 flex justify-center">
        <div className="bg-white min-w-0 w-1/2 h-full p-10 max-w-md mx-auto md:max-w-xl ">
        <h1 className="font-serif text-md font-semibold  text-2xl text-green-700 ">Swertres Result for Today January 30 2021</h1>
            <ul className="p-4 bg-rose-500"> 
                <li className=" p-2 text-2xl">2PM: 280</li>
                <li className=" p-2 text-2xl">5PM: 543</li>
                <li className=" p-2 text-2xl">9PM: 890</li>
               
            </ul>
            <p className="mt-2 text-xl">Here are the PCSO Swertres lotto results today and yesterday at 2PM, 5PM and 9PM draws! Congratulations to all 3D Lotto winners!
            </p>

            <p className="mt-4 text-xl">
            Updated December 31, 2020 – Are you searching for the the latest updates in the PCSO Swertres 3D Lotto results today at 2PM, 5PM and 9PM draws? View here all the lotto results from the Philippine Charity Sweepstakes Office official draws.
            </p>
            <h1 className="mt-4  font-serif text-md font-semibold text-2xl text-green-700">How to play the Swertres lotto game?</h1>

            <div className="list-inside bg-green-200">
                <li className="p-2">Using the play-slip, select one (1) digit (0 to 9) from each column for a total of three digits.</li>
                <li className="p-2">The Lucky Pick (LP) is also available should you prefer the machine to choose the combination.</li>
                <li className="p-2">The Swertres (3D) lotto ticket costs P12.00 inclusive of the Documentary Stamp Tax (DST).</li>
                <li className="p-2">Mark the “Rambolito” if you want to play via lotto system bet.</li>
                <li className="p-2">Players can also play six (6) days in advance for less hassle going to-and-fro the lotto outlet.</li>
                <li className="p-2">Player wins 4,500.00 pesos if he got the standard play combination in exact order.</li>
            </div >
            <h1 className=" mt-4 font-serif text-md font-semibold  text-2xl text-green-700 ">PCSO New Betting Protocols</h1>
                <p className="p-2 ">Amid pandemic, all lotto enthusiasts must follow the new rules and regulations imposed at all PCSO lotto outlets in buying tickets to ensure that the minimum health and safety guidelines are met.
                
                This is to minimize if not stop the spread of the COVID-19.
                </p>

            <div className="list-inside bg-green-200">
                <li>Make sure to wear face mask. Bettor(s) with no face mask will not be allowed to bet.</li>
                <li>Always observe one (1) meter physical distance from one another.</li>
                <li>Bring your own pen.</li>
                <li>Alcohol or sanitizers are available in the lotto outlet. Sanitize before betting.</li>
                <li>Money tray is available to eliminate contact.</li>
                <li>Avoid littering. Throw the play slips in the trash bin.</li>
                <li>Wash your hands with soap and water when returned home.</li>
            </div>

            <h1  className=" mt-4 font-serif text-md font-semibold  text-2xl text-green-700 ">Where to claim the Prize?</h1>
            
            <p className="p-2 font-sans">If you are the legit winner, be sure to write your name and affix the signature behind the winning ticket. Bring and present two (2) valid IDs for verification.
            </p>
            <p className="p-2">
            The lotto jackpot prizes can be claimed at the PCSO main office located at the PCSO head office located at 605 Conservatory Bldg., Shaw Blvrd. Corner Priceton St., Mandaluyong City.
            </p>
            <p className="p-2">
            All prizes above P10,000 are subject to 20% tax pursuant to TRAIN Law.
            </p>
            <p className="p-2">
            Likewise, for claiming the prizes below P10,000, it can be processed at the nearest PCSO Branch.
            </p>
        </div>
    </div>
   
 
    )
}
export default Result;