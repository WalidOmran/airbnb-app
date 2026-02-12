"use client";
import { useRouter } from "next/navigation";
import { Heart, Ticket, Settings, Home, Search, ArrowRight, CalendarOff, LucideCalendarOff, HeartOff } from "lucide-react"; 

const iconMap = {
  favorites: { icon: <HeartOff size={32} />, color: "text-rose-500", bg: "bg-rose-50" },
  bookings: { icon: <LucideCalendarOff size={32} />, color: "text-amber-600", bg: "bg-amber-50" },
  settings: { icon: <Settings size={32} />, color: "text-blue-600", bg: "bg-blue-50" },
  properties: { icon: <Home size={32} />, color: "text-emerald-600", bg: "bg-emerald-50" },
  default: { icon: <Search size={32} />, color: "text-gray-400", bg: "bg-gray-50" }
};
// const iconMap = {
//   favorites: <HeartOff size={44} strokeWidth={1.5} />,
//   bookings: <PlaneTakeoff size={44} strokeWidth={1.5} />,
//   settings: <Settings2 size={44} strokeWidth={1.5} />,
//   properties: <HomeOff size={44} strokeWidth={1.5} />,
//   default: <Search size={44} strokeWidth={1.5} />
// };

const EmptyState = ({ 
  type = "default", 
  title, 
  description, 
  buttonText = "Start Exploring", 
  onAction 
}) => {
  const router = useRouter(); 
  const theme = iconMap[type] || iconMap.default;


  const handlePress = () => {
    if (onAction) {
      onAction(); 
    } else {
      router.push('/'); 
    }
  };

  return (
    
    <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-gray-50/50 rounded-[2.5rem] border-2 border-dashed border-gray-200/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="relative mb-8 group">
        
        <div className={`w-24 h-24 ${theme.bg} rounded-[2.5rem] rotate-12 absolute inset-0 transition-transform duration-700 group-hover:rotate-45 opacity-40`} />
        
        <div className="relative w-24 h-24 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 rounded-[2rem] flex items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-2">
           <div className={`${theme.color}`}>
              {theme.icon}
           </div>
        </div>
      </div>

      <div className="max-w-sm">
        <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-base font-medium leading-relaxed mb-10">
          {description}
        </p>
      </div>

      <button 
        onClick={handlePress}
        className="group relative flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-[1.5rem] font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95"
      >
        <span>{buttonText}</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <button 
        onClick={() => router.back()}
        className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
};

export default EmptyState;