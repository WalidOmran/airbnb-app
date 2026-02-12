import useImageUpload from "@/customHooks/useImageUpload";
import { ImagePlus, X } from "lucide-react";

const ImageUploadSection = () => {
    const { images,handleImageChange,removeImage } = useImageUpload();
  return (
        <div className='mt-8'>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-4 tracking-wider">
                Property Photos
            </label>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div key={img.preview} className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 group">
                        <img 
                            src={img.preview} 
                            alt="preview" 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />    
                        <button
                            type="button" 
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all"
                        >
                            <X size={14} /> 
                        </button>
                    </div>
                ))}

               



                <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-[#FF385C] hover:bg-[#FFF0F3] transition-all group">
                    <div className="bg-gray-50 p-2 rounded-full group-hover:bg-white transition-colors">
                        <ImagePlus className="text-gray-400 group-hover:text-[#FF385C]" size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase group-hover:text-[#FF385C]">
                        Add More
                    </span>
                    <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageChange} 
                    />
                </label>
            </div>
        </div>
    );
}

export default ImageUploadSection
