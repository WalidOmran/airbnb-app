
import { 
  Wifi, Utensils, AirVent, Heater, Monitor, 
  Waves, Dumbbell, Car, ArrowUpCircle, WashingMachine,
  ShieldCheck, TreePine, Navigation
} from "lucide-react";

export const AVAILABLE_AMENITIES = [
  { id: "wifi", label: "WiFi", icon: <Wifi size={20} /> },
  { id: "kitchen", label: "Kitchen", icon: <Utensils size={20} /> },
  { id: "ac", label: "Air Conditioning", icon: <AirVent size={20} /> },
  { id: "pool", label: "Swimming Pool", icon: <Waves size={20} /> },
  { id: "parking", label: "Parking", icon: <Car size={20} /> },
  { id: "tv", label: "Smart TV", icon: <Monitor size={20} /> },
  { id: "gym", label: "Gym", icon: <Dumbbell size={20} /> },
  { id: "elevator", label: "Elevator", icon: <ArrowUpCircle size={20} /> },
  { id: "sea_view", label: "Sea View", icon: <Navigation size={20} /> },
  { id: "garden", label: "Garden", icon: <TreePine size={20} /> },
  { id: "safety", label: "First Aid Kit", icon: <ShieldCheck size={20} /> },
];

