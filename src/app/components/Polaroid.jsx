import Image from 'next/image';

export default function Polaroid({ image, caption,comment }) {
  return (
    <div className="relative w-64 p-4 bg-white shadow-lg rounded-lg transform rotate-2 hover:rotate-0 transition-all">
    <span>📍</span>
      {/* Use next/image for optimized image loading */}
      <Image
        src={image} // The image path
        alt={caption} // Alt text for accessibility
        width={256}   // Width of the image
        height={256}  // Height of the image
        className="w-full h-64 object-cover rounded-md"
      />
      <div className="mt-2 text-center font-semibold text-gray-700">{caption}</div>
      <div className="mt-1 text-center font-regular text-gray-600">{comment}</div>
    </div>
  );
}
