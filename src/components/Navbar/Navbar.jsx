import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-3 w-10/12 mx-auto sticky top-0 z-50 '>
            <a href=""><img src={Logo} className="logo" alt="Cricket logo" /></a>
            <ul className='flex gap-10 font-medium '>
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
                <li >
                    <a className='border py-2 px-5 rounded-lg'>0 Coin</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;