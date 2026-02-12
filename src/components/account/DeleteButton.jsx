import { Trash2 } from "lucide-react";

const DeleteButton = ({ onClick, deleteText="Delete" }) => {
    const handleClick = (e) => {
      e.stopPropagation(); 
      onClick();
    };
  return (
    <button 
        onClick={handleClick}
        className="group/btn w-full py-2.5 rounded-xl bg-red-50 text-red-600 text-xs font-bold hover:bg-red-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Trash2 size={14} className="group-hover/btn:animate-bounce" />
          
          {deleteText && <span>{deleteText}</span>}
    </button>
  )
}

export default DeleteButton
