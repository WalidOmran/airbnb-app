import Select from "./Select";
import Textarea from "./Textarea";

const FormItem = ({id,type,text,value,setValue,placeholder,error,autoComplete,inputStyle,labelStyle,rows , selectOptions}) => {
  const inputClass = inputStyle || "w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2";
 const  propertiesOfElement = {
      id: id,
      name: id,
      placeholder: placeholder,
      value: value,
      onChange: (e) => setValue(e),
      autoComplete: autoComplete,
      className: `${inputClass} ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`,
      rows: rows || 3,   
   }



 

  
  return(
      <div className="flex flex-col text-gray-700 font-medium">
        {
          text &&  <label htmlFor={id} className={labelStyle || "block text-xs font-bold text-gray-500 uppercase"}>{text}</label>
        }
       
        {type === 'textarea' ? (
            <Textarea properties={propertiesOfElement} />
          ) : type === 'select' ? (
            <Select properties={propertiesOfElement} options={selectOptions} />
          ) : (
            <input {...propertiesOfElement} type={type} />
          )}
          
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
       
      </div>
  )
}

export default FormItem
