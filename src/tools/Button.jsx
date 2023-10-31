import '../tools/button.css'

const Button = ({ title, classB, addToCart }) => {
    return (
        <>
            <div className="button-borders button2">
                <button onClick={addToCart} className={classB}>{title}</button>
            </div>
        </>
    )
}

export default Button