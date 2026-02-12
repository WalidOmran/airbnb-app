
import { Pencil, Trash2 } from "lucide-react";


const CardButton = ({ type,  onClick, buttonText , buttonStyle }) => {
    const deleteStyle = "group/btn p-2.5 w-full rounded-full bg-red-50 text-red-600 text-xs font-bold hover:bg-red-600 hover:text-white transition-all duration-200 ";
                       
    const editStyle =  "group/btn p-2.5 w-full rounded-full bg-blue-50 text-blue-500 text-xs font-bold hover:bg-blue-500 hover:text-white transition-all duration-200 ";
    const btnStyle = buttonStyle ? buttonStyle :  (type === 'edit') ? editStyle :  deleteStyle ;


    const handleClick = (e) => {
      e.stopPropagation(); 
      onClick();
    };


  return (
    <button 
        type="button"
        onClick={handleClick}
        className={btnStyle}
        title={(type === 'edit') ? 'edit' : 'delete'}
        >
            {
               (type === 'edit') ? <Pencil size={14} className="group-hover/btn:animate-bounce" /> : <Trash2 size={14} className="group-hover/btn:animate-bounce" />
            }
          
          
          {buttonText && <span>{buttonText}</span>}
    </button>
  )
}

export default CardButton
