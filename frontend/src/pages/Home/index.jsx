import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlayers, getSelectedClubs } from './actions';
import classes from './style.module.scss'
import PlayerCard from './components/PlayerCard';

const Home = () => {
  const dispatch = useDispatch();
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
        <div className={classes["player-card-container"]}>
          {playerList && clubList && playerList?.players?.map((player) => (
            <PlayerCard key={player.player_id} playerData={player} clubData={clubList?.response.find(club => club.club_id === parseInt(player.club_id))} />))
          }
        </div>
      </div>
    </>
  );
};

export default Home
