import {Link} from 'react-router-dom';
import './css/navbar.css'
function Navbar(){
    return (
        <div className="">
            <ul className='nav-list-container'>
                <li className='nav-list-item'>
                    <Link className='link' to= '/'>Home</Link>
                </li>

                <li className='nav-list-item'>
                    <Link className='link' to='/create-post'>Create Post</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;