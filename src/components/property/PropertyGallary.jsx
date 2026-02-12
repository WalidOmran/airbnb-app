import Image from "next/image";

const PropertyGallary = ({property}) => {
    const images = property?.images || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 h-[300px] md:h-[450px]">
   
      {images[0] && (
        <div className="md:col-span-2 relative h-full bg-gray-100 overflow-hidden rounded-2xl">
          <Image
            src={images[0]}
            alt={property.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      )}

      <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-4 h-full">
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="relative h-full bg-gray-100 overflow-hidden rounded-2xl">
            <Image
              src={img}
              alt={`${property.title}-${index}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallary





