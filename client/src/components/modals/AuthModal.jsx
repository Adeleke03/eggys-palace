import React, { useState } from "react";
import SignIn from "../../auth/SignIn";
import SignUp from "../../auth/SignUp";
import navLogo from "../../assets/nav-logo.svg"

const AuthModal = ({ text, isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  function closeModal() {
    const modal = document.getElementById('my_modal_2');
    modal.close()
  }
  return (
    <>

      {/* <div >
        {text}
      </div>
      <dialog id="my_modal_2"  className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box bg-[#100101]">
          <div className="flex justify-center">

          <img src={navLogo} alt="nav-logo" />
          </div>
        <h2 onClick={closeModal} className="text-end cursor-pointer text-white">X</h2>
          {isSignUp ?  <SignUp switchToSignIn={() => setIsSignUp(false)}/> : <SignIn switchToSignUp={() => setIsSignUp(true)} /> }
        </div>
      </dialog> */}
      <div onClick={() => document.getElementById("my_modal_2").showModal()}>
        {text}
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-[#100101]">
          <h2 onClick={closeModal} className="text-end cursor-pointer text-white">X</h2>

          <div className="flex justify-center">

            <img src={navLogo} alt="nav-logo" />
          </div>
          {isSignUp ? <SignUp switchToSignIn={() => setIsSignUp(false)} /> : <SignIn switchToSignUp={() => setIsSignUp(true)} />}
        </div>
      </dialog>
    </>
  );
};

export default AuthModal;
