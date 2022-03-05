import "./FormLogin.css";

export default function FormLogin() {
  return (
    <form className="form-login">
      <div className="all-inputs-login">
        <input
          name="username"
          placeholder="*username"
          className="user-input-login"
        />
        <div className="user-input-login-div">
          <input
            name="password"
            placeholder="*password"
            className="user-input-in-login"
          />
        </div>
        <button className="btn-login">Login</button>
      </div>
    </form>
  );
}
