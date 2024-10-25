import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import Selected from "../Selected/Selected";
import PropTypes from "prop-types";

const Players = ({ handleToggleBtn, toggle, handleSelectedPlayer, selectedPlayers }) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const playersDataLoad = async () => {
            const res = await fetch('players.json')
            const data = await res.json()
            setPlayers(data);

        }
        playersDataLoad()
    }, [])

    return (
        <div className=" mt-24">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Available Players {players.length}</h1>
                <div>
                    <button onClick={() => handleToggleBtn('available')} className={`${toggle ? "m-3 text-base font-semibold bg-gray-200 py-3 px-5 rounded-bl-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200" : "m-3 text-base font-semibold py-3 px-5 rounded-bl-lg border-2  border-fuchsia-200"}`}>Available</button>
                    <button onClick={() => handleToggleBtn('selected')} className={`${toggle ? "text-base font-semibold py-3 px-5 rounded-br-lg border-2  border-fuchsia-200" : "text-base font-semibold bg-gray-200 py-3 px-5 rounded-br-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200"}`}>Selected {selectedPlayers.length}</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 my-6">
                {
                    toggle ? players.map(player => <Player handleSelectedPlayer={handleSelectedPlayer} key={player.id} player={player}></Player>) : selectedPlayers.map(pla => <Selected key={pla.id} pla={pla}></Selected>)
                }

            </div>
        </div>
    );
};

Players.propTypes = {
    handleToggleBtn: PropTypes.func,
    toggle: PropTypes.bool,
    handleSelectedPlayer: PropTypes.func,
    selectedPlayers: PropTypes.array,
}
export default Players;