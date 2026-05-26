export function Inputbox({label,placeholder,onChange}){
    return(
        <div>
            <div>
                {label}
            </div>
        <input onChange={onChange} type="text" placeholder={placeholder} />
            
        </div>
    )
}   