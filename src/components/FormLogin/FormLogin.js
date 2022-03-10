import "./FormLogin.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import axios from "axios";
import MyContext from "../Context/MyContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();
  const { setUserAccessToken } = useContext(MyContext);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const user = {
      username: getValues("username"),
      password: getValues("password"),
    };

    try {
      const res = await axios.post("http://localhost:5001/users/login", user);
      const token = await localStorage.setItem("Token", res.data.accessToken);
      setUserAccessToken(res.data.accessToken);
      if (token) {
        return <Navigate to="/home" />;
      }

      console.log(res.data.accessToken);
      console.log("submited");
    } catch (err) {
      console.log(err);
    }

    // axios
    //   .post(" http://localhost:5001/users/login", data)
    //   .then((res) => {
    //     localStorage.setItem("Token", res.data.accessToken);

    //     setUserAccessToken(res.data.token);
    //     if (res.data.accessToken) {
    //       return <Navigate to="/home" />;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    reset();
  };

  // const onSubmit = () => {
  //   const data = {
  //     username: getValues("username"),
  //     password: getValues("password"),
  //   };

  //   axios
  //     .post("http://3.16.162.99/api/userauth/login", data)
  //     .then((res) => {
  //       localStorage.setItem("Token", res.data.token);

  //       setUserAccessToken(res.data.token);
  //       if (res.data.token) {
  //         return navigate1("/home");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   reset();
  // };

  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="all-inputs-login">
        <input
          name="username"
          placeholder="*username"
          className="user-input-login"
          {...register("username", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.username && <div className="error-login">required</div>}

        <div className="user-input-login-div">
          <input
            name="password"
            placeholder="*password"
            className="user-input-in-login"
            {...register("password", {
              required: true,
              minLength: 3,
            })}
          />
        </div>
        {errors.password && <div className="error-login">required</div>}

        <button className="btn-login">Login</button>
      </div>
    </form>
  );
}
