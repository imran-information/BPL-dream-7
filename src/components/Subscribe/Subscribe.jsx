const Subscribe = () => {
    return (
        <div className="rounded-lg  border-fuchsia-200 p-5 border-2 my-20 w-10/12 mx-auto z-10 relative top-96">
            <div className="text-center p-44 bg-img">
                <h1 className="text-4xl font-bold my-3">Subscribe to our Newsletter</h1>
                <p className="text-xl font-medium text-gray-500">Get the latest updates and news right in your inbox!</p>
                <input className="border-2 w-96 my-3 rounded-bl-lg border-fuchsia-200 p-3 " type="email" placeholder="Enter your email" name="" id="" />
                <button className='text-base font-semibold bg-gray-200 py-3 px-5 rounded-br-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Subscribe</button>

            </div>
        </div>
    );
};

export default Subscribe;