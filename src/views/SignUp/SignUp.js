import "./SignUp.css";
import mu from "./mu.png";
import FormRegister from "../../components/FormRegister/FormRegister";

export default function SignUp() {
  return (
    <div className="containerr-sign-up">
      <div className="div-img-signup">
        <img src={mu} alt="img" id="img-signup" />
      </div>
      <div className="div-form-signup">
        <div className="header-div-signup">
          <div className="first-header-signup">WeLlCoMe </div>
          <div className="div-2-header">To PoLiMuSiC</div>
        </div>
        <FormRegister />
      </div>
    </div>
  );
}
