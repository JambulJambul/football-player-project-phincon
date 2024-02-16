import classes from './style.module.scss'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPlayers, getSelectedClubs } from '@pages/Home/actions';


const PlayerList = () => {
    const dispatch = useDispatch()
    const playerList = useSelector((state) => state.home.playerList);
    const clubList = useSelector((state) => state.home.clubList);
    const club_id_array = [];

    useEffect(() => {
        dispatch(getAllPlayers());
    }, []);

    useEffect(() => {
        if (club_id_array && club_id_array.length > 0) {
            dispatch(getSelectedClubs(club_id_array));
        }
    }, [playerList]);
    playerList?.players?.forEach((player) => {
        if (!club_id_array.includes(player.club_id)) {
            club_id_array.push(player.club_id);
        }
    });

    return (
        <>
            <div className={classes["page-container"]}>
                <h3>
                    Player List
                </h3>
                <Link to={'/admin/create-player'}>
                    <button class>
                        Create Player
                    </button>
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Club Name</th>
                            <th>Position</th>
                            <th>View Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {playerList && clubList && playerList?.players?.map((player) => (
                        <>
                            <tbody>
                                <tr>
                                    <td>{player.player_name}</td>
                                    <td>{clubList?.response.find(club => club.club_id === parseInt(player.club_id)).club_name}</td>
                                    <td>Forward</td>
                                    <td>{player.player_view_count}</td>
                                    <td className={classes["action-column"]}>
                                        <div className={classes["table-button"]}>
                                            <CreateIcon />
                                        </div>
                                        <div className={classes["table-button"]}>
                                            <DeleteIcon />
                                        </div>
                                    </td>
                                </tr>
                            </tbody></>))
                    }
                </table>
            </div>
        </>
    )
}

export default PlayerList