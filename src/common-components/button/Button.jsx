import './Button.css';

export default function Button({ onClickFunctionHandler, children }) {
    return (
        <>
            <button className="basic-button" onClick={onClickFunctionHandler}>
                {children}
            </button>
        </>
    );
}