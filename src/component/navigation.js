
import { Link } from 'react-router-dom';



function Nav(){
    return(
      
        <div className ="bg-blue-50 h-20  flex items-center position-sticky font-sans text-md subpixel-antialiased">
            <div className=" w-full flex  flex flex-row flex justify-center">
            <ul className="flex flex-row  flex items-center   flex-shrink space-x-6">
            <li><svg className="w-8 h-8 bg-black-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" stroke="gray">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg><Link to={"/home"}>HOME</Link></li>
            <li><Link to={"/result"}>Swertres Result</Link></li>
            <li><Link to={"/history"}>Swertres History</Link></li>
            <li><Link to={"/hearing"}>Swertres Hearing</Link></li>
            </ul>
            </div>
        </div>
        
    )
}
export default Nav;
