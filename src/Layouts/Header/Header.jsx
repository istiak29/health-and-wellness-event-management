import logo from '../../assets/logo.png.png'
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className=''>
            <img className='mx-auto' src={logo} alt="logo" />
            <Navbar></Navbar>
        </div>
    );
};

export default Header;