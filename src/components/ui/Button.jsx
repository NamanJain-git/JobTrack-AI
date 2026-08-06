const Button = ({ children, className = "", onClick, type = "button", }) => {

    return (
        <button type={type} onClick={onClick}
            className={` bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ${className}`}>
            {children}
        </button>
    );
};

export default Button;