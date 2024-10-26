import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Player = ({ player, handleSelectedPlayer }) => {
    const { category, country, hand_batting, img, name, price } = player

    const notify = () => {
        toast.success("Selected Success  !", {
            position: "top-center"
        });
    }

    const notifyWarning = () => {
        toast.warn("Not enough money to by this player Claim some Credit !", {
            position: "top-center"
        });
    }
    const notifyAlradyAddWarning = () => {
        toast.warn("Already Add The player !", {
            position: "top-center"
        });
    }
    const notifyAlready6Players = () => {
        toast.warn("Sorry 6 Player Selected !", {
            position: "top-center"
        });
    }

    return (
        <div className="border-2 p-5 rounded-md border-fuchsia-200">
            <img className="rounded w-full h-72" src={img} alt="" />
            <div className="flex items-center font-semibold text-xl mt-4">
                <p className="text-2xl text-gray-500 mr-1">
                    <IoPersonCircleOutline></IoPersonCircleOutline>
                </p>
                <h1 className="">{name}</h1>
            </div>
            <div className="flex justify-between items-center  text-base text-gray-500 font-semibold">
                <div className="flex justify-center items-center">
                    <FaFlag className="font-bold text-lg text-gray-500 mr-3"></FaFlag>
                    <p className="">{country}</p>
                </div>
                <p className="font-bold border-2 rounded-lg px-3 py-2 border-fuchsia-200">{category}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
                <p className="text-base font-semibold">Rating</p>
                <p className="text-yellow-300 flex gap-2">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </p>
            </div>
            <div className="flex justify-between text-base font-semibold my-3">
                <p>{category}</p>
                <p>{hand_batting}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-base text-gray-500 font-semibold">Price: ${price}</p>
                <button onClick={() => handleSelectedPlayer(player, notify, notifyWarning, notifyAlradyAddWarning, notifyAlready6Players)} className='text-base font-semibold hover:from-pink-500 hover:to-orange-500 bg-gray-200 py-3 px-3 rounded-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Choose Player</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayer: PropTypes.func,
}
export default Player;