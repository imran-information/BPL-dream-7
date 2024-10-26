import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selected = ({ pla, handleRemovePlayer }) => {
    const { img, name, country, category, hand_batting } = pla;
    const notifyPlayerRemove = () => {
        toast.warn("Remove Success !", {
            position: "top-center"
        });
    }

    return (
        <div className="border border-fuchsia-200 w-full p-5 rounded flex  justify-between items-center">
            <div className="flex items-center">
                <div>
                    <img className="rounded w-96 h-64" src={img} alt="" />
                </div>
                <div className="ml-8">
                    <h2 className="text-2xl font-semibold ">{name}</h2>
                    <p className="text-lg   text-gray-500">{country}</p>
                    <p className="text-base  text-gray-500">{category}</p>
                    <p className="text-base  text-gray-500">{hand_batting}</p>
                </div>
            </div>
            <div className="text-center">
                <button onClick={() => handleRemovePlayer(pla, notifyPlayerRemove)} className='text-base font-semibold hover:from-pink-500 hover:to-orange-500 bg-gray-200 py-3 px-3 rounded-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200'>Remove Player</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

Selected.propTypes = {
    pla: PropTypes.object,
    handleRemovePlayer: PropTypes.func,
}
export default Selected;