import { useContext, useState, useEffect } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ReduxContext } from "../context/ReducerContext";
import Button from '../tools/Button.jsx';
import { Link } from 'react-router-dom';
import './form.css';

const Form = () => {
    const { listBuy, emptyCart } = useContext(ReduxContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderID, setOrderId] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [copyText, setCopyText] = useState("")
    const db = getFirestore();
    const ordersCollection = collection(db, 'newProducts');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            dataClient: {
                name: name,
                email: email
            },
            productSelected: listBuy.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    qty: item.qty
                }
            })
        };

        try {
            setIsSubmitDisabled(true);
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            emptyCart();
        } catch (error) {
            console.error("Error al enviar datos a Firestore:", error);
        }
    }

    useEffect(() => {
        if (name.trim() !== '' && email.trim() !== '') {
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(true);
        }
    }, [name, email]);

    useEffect(() => {
        if (orderID) {
            setCopyText(orderID);
        }
    }, [orderID]);

    const handleCopy = () => {
        navigator.clipboard.writeText(orderID)
    }

    return (
        <div>
            <div className='container-link-to-home'>
                <Link to='/'><Button classB='primary-button' title='Return to home'></Button></Link>
            </div>
            <div className="card-form">
                <h4 className="title">Buy Products</h4>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                        <input autoComplete="off" id="logemail" placeholder="Full Name" className="input-field" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field">
                        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path></svg>
                        <input autoComplete="off" id="logpass" placeholder="Email" className="input-field" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button disabled={isSubmitDisabled} className="btn" type="submit">Submit</button>
                    <small className="btn-link-2">You must send us your information to finalize the purchase.</small>
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <h3 className="h3-form">Your ID : <span>{orderID}</span></h3>
                <button onClick={handleCopy} className="copy">
                    <span data-text-end="Copied!" data-text-initial="Copy to clipboard" className="tooltip"></span>
                    <span>
                        <svg space="preserve"  viewBox="0 0 6.35 6.35" y="0" x="0" height="20" width="20" xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className="clipboard">
                            <g>
                                <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                            </g>
                        </svg>
                        <svg space="preserve"  viewBox="0 0 24 24" y="0" x="0" height="18" width="18" xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className="checkmark">
                            <g>
                                <path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Form;
