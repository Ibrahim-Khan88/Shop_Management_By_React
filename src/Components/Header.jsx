import classes from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStore} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <div className={`${classes.header_container}`}>
                <div className={`${classes.title_menu_container}`}>
                    <FontAwesomeIcon icon={faStore} className='mr-8' />
                    <Link to="/"> <span>BD-SHOP</span> </Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </>
    )
}