import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";
const Navbar = ({ claimCoin }) => {
    return (
        <div className='flex justify-between items-center my-3 w-10/12 mx-auto sticky top-0 z-40 backdrop-blur-xl'>
            <a href=""><img src={Logo} className="logo" alt="Cricket logo" /></a>
            <ul className='flex gap-10 font-medium items-center'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Fixture</a>
                </li>
                <li>
                    <a href="">Teams</a>
                </li>
                <li>
                    <a href="">Schedules</a>
                </li>
                <li className='flex items-center border border-fuchsia-200 py-2 px-5 rounded-lg'>
                    <a className=''>${claimCoin} Coin </a>
                    <TbCoinFilled className='text-2xl ml-2 text-pink-500'></TbCoinFilled>
                </li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    claimCoin: PropTypes.number,
}
export default Navbar;