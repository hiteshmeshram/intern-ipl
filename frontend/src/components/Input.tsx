
export const Input = ({type,placeholder,onChange}: {
    type: string,
    placeholder: string,
    onChange: (value: string)=>void
})=>{
    return <input className="w-full py-2 px-2 mt-2 border rounded-md" 
                type={type} 
                placeholder={placeholder} 
                onChange={(e)=>{
                onChange(e.target.value);
        }}></input>
}