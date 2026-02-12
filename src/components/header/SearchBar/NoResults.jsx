import { SearchX } from 'lucide-react';

const NoResults = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center text-center space-y-3">
      <div className="bg-gray-50 p-4 rounded-full">
        <SearchX size={32} className="text-gray-300" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-700">No destinations found</p>
        <p className="text-xs text-gray-400 mt-1">Try searching for a city, country, or region</p>
      </div>
    </div>
  );
};

export default NoResults;