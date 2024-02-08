import classes from '../../style.module.scss'
import { PersonOutlined } from '@mui/icons-material'
import { Shield } from '@mui/icons-material';

const PlayerCard = ({ playerData, clubData }) => {
    const { player_name, player_img_url } = playerData;
    const { club_name, club_img_url,  } = clubData;
    console.log(club_name,"CLUB NAME")

    return (
        <>
            <div className={classes["player-card-box"]}>
                <div className={classes["player-image-box"]}>
                    {player_img_url ? <img src={player_img_url} alt="" /> : <PersonOutlined className={classes["player-icon"]} />}
                </div>
                <div className={classes["player-desc-box"]}>
                    <div>
                        {player_name}
                    </div>
                    <div className={classes["player-club-row"]}>
                        <div className={classes["club-logo-box"]}>
                            {club_img_url ? <img src={club_img_url} alt="" />:<Shield/>}
                        </div>
                        <p>{club_name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerCard
