import PropTypes from 'prop-types';
import Banner from '../../assets/banner-main.png'

import './Header.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ handleClaimCoin }) => {
    const notify = () => {
        toast.success("Success Claim !", {
            position: "top-center"
        });
    }

    return (
        <div className='bg-img relative w-10/12 mx-auto my-6 text-center'>
            <div className='h-[500px]'>
                <div className='flex justify-center pt-10'>
                    <img src={Banner} alt="" />
                </div>

                <h1 className='text-5xl font-bold my-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl font-bold text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <span className='rounded-lg border-2 px-2 py-5 border-fuchsia-200'>
                    <button onClick={() => handleClaimCoin(10000000, notify)} className='text-base font-bold rounded-lg bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500  py-3 px-5 my-5 '>Claim Free Credit</button>
                </span>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

Header.propTypes = {
    handleClaimCoin: PropTypes.func,
}

export default Header;