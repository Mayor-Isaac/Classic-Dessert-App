export default function Input({type, name, onChange, placeholder, defaultValue, extraStyle}){

    return <input type={type} name={name} defaultValue={defaultValue || ""} onChange={onChange} placeholder={ placeholder} className={`rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 ${extraStyle} ${name !== "customer"&& "w-full"} ${name ==="customer"&&"grow"}`} required/>
}