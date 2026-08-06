const Card = ({ children, className = "" }) => {

    return (
        <div className={` bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-slate-700 transition-all duration-300 ${className} `}>
            {children}
        </div>
    );

}

export default Card;