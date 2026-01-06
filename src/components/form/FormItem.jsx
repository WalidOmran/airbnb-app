
const FormItem = ({id,type,text,value,setValue,placeholder,error,autoComplete}) => {
  return(
      <div className="flex flex-col text-gray-700 font-medium">
        <label  htmlFor={id}>
          {text}
        </label>
        <input 
              id={id}
              type={type}
              name={value}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete={autoComplete}
              placeholder={placeholder}
              className={`mt-1 p-2 border  rounded focus:outline-none focus:ring-2 ${error? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            />
            <span className="text-red-500 text-sm mt-1" > {error} </span>
      </div>
  )
}

export default FormItem
