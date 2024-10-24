import LogoFooter from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className='bg-[#06091A] pt-96'>
            <div className='flex justify-center '>
                <img src={LogoFooter} alt="" />
            </div>
            <div className='flex justify-between  w-10/12 mx-auto my-10 '>
                <div className="">
                    <h3 className='text-xl mb-4 font-semibold text-white'>About Us</h3>
                    <p className='font-semibold text-slate-400 my-2'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div className="">
                    <h3 className='text-xl mb-4 font-semibold text-white'>Quick Links</h3>
                    <ul>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Home</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Service</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">About</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Contact</a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xl mb-4 font-semibold text-white'>Subscribe</h3>
                    <p className='font-semibold text-slate-400 my-2'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className="">
                        <input className="w-64 border-2 my-3 rounded-bl-lg border-fuchsia-200 py-2 px-3 " type="email" placeholder="Enter your email" name="" id="" />
                        <button className='text-base font-semibold bg-gray-200 py-2 px-3 rounded-br-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-600' />
            <p className='text-center py-5 '><small className='font-semibold text-slate-400'>@2024 Your Company All Rights Reserved.</small></p>
        </footer>
    );
};

export default Footer;