import classes from './style.module.scss';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const CreatePlayer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        try {
            const encryptedData = encryptPayload(data);
            dispatch(doLogin({ encryptedData }, async () => {
                notifySuccess("Login Successful");
                await delay(1500);
                navigate('/');
            }, (error) => {
                console.log(error)
                notifyError(error || "An error occurred");
            }))
        } catch (error) {
            console.error(error);
        }
    };

    const clubs = [
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
        { id: 1, name: "Manchester United" },
        { id: 2, name: "Real Madrid" },
    ];


    const positions = [
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
        { id: 1, name: "Forward" },
        { id: 2, name: "Midfielder" },
    ];

    return (
        <>
            <div className={classes["page-container"]}>
                <h3>
                    Create Player
                </h3>
                <div className={classes["form-container"]}>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes["login-form-container"]}>
                        <label htmlFor='email'>Player Name:</label><br />
                        <input type='text' id='email' name='email' required {...register("user_email")} /><br />
                        <label htmlFor="club">Club:</label><br />
                        <select id="club" name="club" required {...register("club")}>
                            <option value="" disabled>Select a Club</option>
                            {clubs.map((club) => (
                                <option key={club.id} value={club.id}>{club.name}</option>
                            ))}
                        </select><br />
                        <label htmlFor="position">Position:</label><br />
                        <div className={classes["position-list-container"]}>
                            {positions.map((position) => (
                                <div className={classes["position-list"]} key={position.id}>
                                    <input
                                        type="checkbox"
                                        id={`position-${position.id}`}
                                        name="position"
                                        value={position.id}
                                        {...register("position", {})}
                                    />
                                    <label htmlFor={`position-${position.id}`}>{position.name}</label>
                                </div>
                            ))}
                        </div>
                        <label htmlFor="playerImage">Player Image:</label><br />
                        <input
                            className='image-upload-box'
                            type="file"
                            id="playerImage"
                            name="playerImage"
                            required
                            accept="image/*"
                            {...register("playerImage")}
                        />
                        <button type='submit'>Submit</button>
                        <Toaster />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePlayer