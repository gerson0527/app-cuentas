import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/card/Card'
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai';
import maskImage from '../../assets/MaskGroup.png';

import'./Dashboard.css'

const Dashboard = () => {
  const maskImageUrl = maskImage;
  return (
    <div className='container'>
        <Sidebar/>
        <Card/>
        <div
          className="card2"
          style={{ 
            maskImage: `url(${maskImageUrl})`,
            WebkitMaskImage: `url(${maskImageUrl})`
          }} >
          <div className="card2__text">
            <h2>Compruebe sus cuentas bancarias</h2>
          </div>
          <div className="card2__flecha">
            <AiOutlineRight  size={18} />
          </div>
        </div>
        <div className="container__navbar">
          <Navbar/>
        </div>
    </div>
  )
}

export default Dashboard