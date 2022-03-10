import "./FormRegister.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import MyContext from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [errorPass, setErrorPass] = useState(false);
  const { setUserAccessToken } = useContext(MyContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async () => {
  //   if (getValues("password") !== getValues("confirmPassword")) {
  //     !errorPass && setErrorPass(true);
  //     console.log("nottt");
  //     return;
  //   }
  //   setErrorPass(false);
  //   const user = {
  //     username: getValues("username"),
  //     password: getValues("password"),
  //   };

  //   axios
  //     .post("http://localhost:5001/users/register", user)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         axios
  //           .post(" http://localhost:5001/users/login", {
  //             user,
  //           })
  //           .then((res) => {
  //             localStorage.setItem("Token", res.data.accessToken);

  //             setUserAccessToken(res.data.accessToken);
  //             if (res.data.accessToken) {
  //               return navigate("/home");
  //             }
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   reset();
  // };

  const onSubmit = async () => {
    if (getValues("password") !== getValues("confirmPassword")) {
      !errorPass && setErrorPass(true);
      console.log("nottt");
      return;
    }
    setErrorPass(false);
    const user = {
      username: getValues("username"),
      password: getValues("password"),
    };
    try {
      const res = await axios.post(
        "http://localhost:5001/users/register",
        user
      );
      console.log(res.data);
      console.log("submited");
    } catch (err) {
      console.log(err);
    }
  };

  // const onSubmit = async () => {
  //   if (getValues("ConfirmPassword") !== getValues("password")) {
  //     !passwordError && setPasswordError(true);
  //     return;
  //   }
  //   setPasswordError(false);
  //   const data = {
  //     username: getValues("username"),
  //     password: getValues("password"),
  //     phone: getValues("phone"),
  //   };

  //   axios
  //     .post("http://3.16.162.99/api/userauth/register", data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         axios
  //           .post("http://3.16.162.99/api/userauth/login", {
  //             username: data.username,
  //             password: data.password,
  //           })
  //           .then((res) => {
  //             localStorage.setItem("Token", res.data.token);

  //             setUserAccessToken(res.data.token);
  //             if (res.data.token) {
  //               return navigate("/home");
  //             }
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   reset();
  // };

  return (
    <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
      <div className="all-inputs-signup">
        <input
          name="username"
          placeholder="*username"
          className="user-input-signup"
          {...register("username", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.username && <div className="error-signup">required</div>}
        <div className="user-input-signup-div">
          <input
            name="password"
            placeholder="*password"
            className="user-input-in-signup"
            {...register("password", {
              required: true,
              minLength: 3,
            })}
          />
        </div>
        {errors.password && <div className="error-signup">required</div>}
        <div className="user-input-signup-div">
          <input
            name="confirmPassword"
            placeholder="*confirmPassword"
            className="user-input-in-signup"
            {...register("confirmPassword", {
              required: true,
              minLength: 3,
            })}
          />
        </div>
        {errors.confirmPassword && <div className="error-signup">required</div>}
        {!errors.confirmPassword && errorPass && (
          <div className="error-signup">password not match</div>
        )}

        <button type="submit" className="btn-signup">
          Sign up
        </button>
      </div>
    </form>
  );
}
