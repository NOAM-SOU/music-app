import "./Login.css";
import mu from "./mu.png";
import FormLogin from "../../components/FormLogin/FormLogin";
export default function Login() {
  return (
    <div className="containerr-login">
      <div className="div-img-login">
        <img src={mu} alt="img" id="img-login" />
      </div>
      <div className="div-form-login">
        <div className="header-div-login">
          <div className="first-header-login">WeLlCoMe </div>
          <div className="div-2-header-login">To PoLiMuSiC</div>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}
