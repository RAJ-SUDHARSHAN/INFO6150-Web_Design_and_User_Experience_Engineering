import { useState } from "react";
import "../css/Modal.css";

function Modal({ showModal, setShowModal }) {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const [promocode, setPromocode] = useState("");
    const [address, setAddress] = useState("");

    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [promoCodeError, setPromoCodeError] = useState("");
    const [addressError, setAddressError] = useState("");

    const [thankyouModal, setThankyouModal] = useState(false);

    const handleCancel = (e) => {
        e.preventDefault();
        setEmail("");
        setEmailError("");
        setConfirmEmail("");
        setConfirmEmailError("");
        setPromocode("");
        setPromoCodeError("");
        setAddress("");
        setAddressError("");
        setChecked(false);
        setShowModal(false);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setEmail("");
        setEmailError("");
        setConfirmEmail("");
        setConfirmEmailError("");
        setPromocode("");
        setPromoCodeError("");
        setAddress("");
        setAddressError("");
        setChecked(false);
        setShowModal(false);
        setThankyouModal(false);
    };

    const regex = "@";

    const handleSubmit = (e) => {
        e.preventDefault();
        let isEmailValid = true;
        let isConfirmEmailValid = true;
        let isPromocodeValid = true;
        let isAddressValid = true;

        if (email === "") {
            setEmailError("* Please enter email ID");
            isEmailValid = false;
        } else if (!email.match(regex)) {
            setEmailError("Please enter valid email id");
            isEmailValid = false;
        } else if (email) {
            setEmailError("");
            isEmailValid = true;
        }

        if (confirmEmail === "") {
            setConfirmEmailError("* Please enter email ID");
            isConfirmEmailValid = false;
        } else if (!confirmEmail.match(regex)) {
            setConfirmEmailError("Please enter valid email id");
            isConfirmEmailValid = false;
        } else if (confirmEmail) {
            setConfirmEmailError("");
            isConfirmEmailValid = true;
        }

        if (email !== confirmEmail) {
            setConfirmEmailError("Email not matching");
            isConfirmEmailValid = false;
        } else {
            setConfirmEmailError("");
            isConfirmEmailValid = true;
        }
        
        if (checked && promocode === "") {
            setPromoCodeError("Please enter Promo code");
            isPromocodeValid = false;
        } else if (checked && promocode) {
            setPromoCodeError("");
            isPromocodeValid = true;
        }
        if (address === "") {
            setAddressError("* Please enter Shipping Address");
            isAddressValid = false;
        } else if (address) {
            setAddressError("");
            isAddressValid = true;
        }
        if (
            isEmailValid === true &&
            isConfirmEmailValid === true &&
            isPromocodeValid === true &&
            isAddressValid === true
        ) {
            setThankyouModal(true);
        }
    };

    return (
        <dialog open={showModal}>
            {!thankyouModal ? (
                <form
                    className="preorder-form"
                    method="POST"
                    onSubmit={handleSubmit}
                    onReset={handleCancel}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="text"
                                className="preorder-email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <span className="req">* required</span>
                        <br />
                        {emailError ? (
                            <span className="req preorder-email-error invalid-email">
                                {emailError}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <br />
                    <div>
                        <label>
                            Confirm Email:
                            <input
                                type="text"
                                className="preorder-confirm-email"
                                value={confirmEmail}
                                onChange={(e) => {
                                    setConfirmEmail(e.target.value);
                                }}
                            />
                        </label>
                        <span className="req">* required</span>
                        <br />
                        {confirmEmailError ? (
                            <span className="req preorder-confirm-email-error invalid-email">
                                {confirmEmailError}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <br />
                    <div>
                        <label>
                            Do you have promo code?
                            <input
                                className="promocode-checkbox"
                                type="checkbox"
                                checked={checked}
                                name="want-spam"
                                onChange={(e) => {
                                    setChecked(!checked);
                                }}
                            />
                        </label>
                    </div>
                    
                    {checked && (
                        <div>
                            <br />
                            <label>
                                Enter Promo Code:
                                <input
                                    type="text"
                                    className="preorder-promocode"
                                    value={promocode}
                                    onChange={(e) => {
                                        setPromocode(e.target.value);
                                    }}
                                />
                            </label>
                            <span className="req">* required</span>
                            <br />
                            {promoCodeError ? (
                                <span className="req preorder-promocode-error">
                                    {promoCodeError}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                    )}
                    <br />
                    <div>
                        <label>
                            Shipping Address
                            <input
                                className="address"
                                type="text"
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    {addressError ? (
                            <span className="req preorder-address-error">
                                {addressError}
                            </span>
                        ) : (
                            <></>
                        )}
                    <br /> <br />
                    <div className="modal-button">
                        <button className="preorder-button" type="submit">
                            preorder
                        </button>
                        <button className="cancel-button" type="reset">
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <form className="preorder-form" method="POST" onSubmit={handleClose}>
                    <div>
                        <p>
                            Thank you for placing the Order. You will receive further payment
                            instructions in your email.
                        </p>

                        <br />
                        {emailError ? (
                            <span className="req preorder-email-error invalid-email">
                                {emailError}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="modal-button">
                        <button className="preorder-button" type="submit">
                            close
                        </button>
                    </div>
                </form>
            )}
        </dialog>
    );
}

export default Modal;
