import Banner from '../../assets/banner-main.png'
import './Header.css'
const Header = () => {

    return (
        <div className='bg-img relative w-10/12 mx-auto my-6 text-center'>
            <div className='h-[500px]'>
                <div className='flex justify-center pt-10'>
                    <img src={Banner} alt="" />
                </div>

                <h1 className='text-5xl font-bold my-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl font-bold text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <button className='text-base font-bold bg-[#E7FE29] py-3 px-5 my-5 rounded-lg border-2'>Claim Free Credit</button>

            </div>
        </div>
    );
};

export default Header;