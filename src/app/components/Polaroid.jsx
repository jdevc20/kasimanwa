import Image from 'next/image';

export default function Polaroid({ image, caption, comment, width = 256, height = 256 }) {
  return (
    <div className="relative p-4 bg-white shadow-lg rounded-lg transform rotate-2 hover:rotate-0 transition-all" style={{ width: width + 32, height: height+120 }}>
      <span>📍</span>
      {/* Use next/image for optimized image loading */}
      <Image
        src={image} // The image path
        alt={caption} // Alt text for accessibility
        width={width}   // Dynamic width
        height={height}  // Dynamic height
        className="w-full object-cover rounded-md"
        style={{ height }}
      />
      <div className="mt-2 text-center font-semibold text-gray-700">{caption}</div>
      <div className="mt-1 text-center text-gray-600">{comment}</div>
    </div>
  );
}
