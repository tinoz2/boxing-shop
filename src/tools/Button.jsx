import '../tools/button.css'

const Button = ({ title, classB }) => {
    return (
        <>
            <div className="button-borders button2">
                <button className={classB}>{title}</button>
            </div>
        </>
    )
}

export default Button