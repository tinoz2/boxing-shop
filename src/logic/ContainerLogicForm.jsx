import Form from '../components/Form.jsx'
import { ReduxContext } from "../context/ReducerContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useContext, useState, useEffect } from 'react';

const ContainerLogicForm = () => {

    const { listBuy, emptyCart } = useContext(ReduxContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderID, setOrderId] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [copyText, setCopyText] = useState("")

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
            toast.success('Data sent successfully')
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

    const db = getFirestore();
    const ordersCollection = collection(db, 'newProducts');

    return (
        <Form 
        handleCopy={handleCopy}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        orderID={orderID}
        isSubmitDisabled={isSubmitDisabled}
        />
    )
}

export default ContainerLogicForm