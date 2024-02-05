import { FormattedMessage } from 'react-intl';
import { useForm } from "react-hook-form";
import { setLogin } from './actions'
import { useDispatch } from 'react-redux';

import encryptPayload from '@utils/encryptionHelper';

import classes from './style.module.scss'

const Login = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const encryptedData = encryptPayload(data);
      dispatch(setLogin({encryptedData}, () => {
      }, (error) => {
        console.log(error)
      }))
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes["login-page-wrapper"]}>
        <div className={classes["login-box-container"]}>
          <h3>
            <FormattedMessage id='login_title' />
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className={classes["login-form-container"]}>
            <label htmlFor='email'>email:</label><br />
            <input type='email' id='email' name='email' required {...register("user_email")} /><br />
            <label htmlFor='password'>Password:</label><br />
            <input type='password' id='password' name='password' required  {...register("user_password")} /><br />
            <button type='submit'>Login</button>
          </form>
          <p className={classes["register-text"]}>
            <FormattedMessage id='login_to_register' />&nbsp;
            <a href="/register"><FormattedMessage id='register_now' /></a>
          </p>
          <p className={classes["register-text"]}>
            <FormattedMessage id='login_to_forgot_password' />&nbsp;
            <a href="/register"><FormattedMessage id='click_here' /></a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login