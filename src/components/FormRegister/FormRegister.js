import "./FormRegister.css";

export default function FormRegister() {
  return (
    <form className="form-register">
      <div className="all-inputs-signup">
        <input
          name="username"
          placeholder="*username"
          className="user-input-signup"
        />
        <div className="user-input-signup-div">
          <input
            name="password"
            placeholder="*password"
            className="user-input-in-signup"
          />
        </div>
        <div className="user-input-signup-div">
          <input
            name="confirmPassword"
            placeholder="*confirmPassword"
            className="user-input-in-signup"
          />
        </div>
        <button className="btn-signup">Sign up</button>
      </div>
    </form>
  );
}
