import { Link } from 'react-router-dom';



function Nav(){
    return(
        <div>
            <ul>
            <li><Link to={"/home"}>HOME</Link></li>
            <li><Link to={"/history"}>Swertres History</Link></li>
            <li><Link to={"/hearing"}>Swertres Hearing</Link></li>
            </ul>
        </div>
    )
}
export default Nav;