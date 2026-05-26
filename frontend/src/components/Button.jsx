export function Button({onClick,label}){
    return(
        <div className="bg-amber-700">
            <button onClick={onClick}>{label}</button>
        </div>
    )
}