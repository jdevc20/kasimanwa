const Message = () => {
    return (
      <div className="flex flex-col justify-center items-center  text-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome sa Kasimanwa!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Ang lugar nga nagahalin sa tanan nga katahum kag kultura sang Western Visayas!
        </p>
        <p className="text-xl text-gray-800 font-semibold mb-6">
          Kari kamo, explore naton ang aton pinalanggang rehiyon!
        </p>
  
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Information:</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Explore popular destinations like Boracay and Iloilo City.</li>
            <li>Discover rich history, culture, and local delicacies.</li>
            <li>Stay updated with events, festivals, and more in Western Visayas!</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Message
  