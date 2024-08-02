import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaMoneyBill, FaExchangeAlt, FaCreditCard, FaBars} from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <div className='hamburger__header'>
                <FaBars className="icon__header" />
            </div>
            <div className="profile__header">
                <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic__header" />

            </div>
        </div>
        <div className="nombre__header">
                <h2 className="saludo__header">Buenos dias </h2>
                <p className='saludo2__header'>Juan Carlos</p>
        </div>
        <div className="sidebar-ocultar">
            <div className="profile">
                <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
                <div className="profile-info">
                    <strong>Dhyana</strong>
                    <span>Dhyana_@1008</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/payments">
                            <FaMoneyBill className="icon" /> Payment
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions">
                            <FaExchangeAlt className="icon" /> Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-cards">
                            <FaCreditCard className="icon" /> My Cards
                        </Link>
                    </li>
                </ul>
            </nav>  
        </div>    
    </div>
  )
}

export default Sidebar