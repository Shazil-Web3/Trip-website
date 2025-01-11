import { Link } from 'react-router-dom';

const Tips = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className=" text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Simple Navbar</h1>
          <div className="flex space-x-4">
            <h1 className="hover:underline">Home</h1>
            <h1 className="hover:underline">About</h1>
            <h1 className="hover:underline">Contact</h1>
          </div>
        </div>
      </nav>

      {/* Full-Screen Background Image Below Navbar */}
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('lovable-uploads/4v.jpg')" }}>
        <div className="absolute inset-0 " /> {/* Optional overlay */}
      </div>

    {/* Blog Section */}
<div className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center mb-8">Tips & Info</h2>
  <p className="text-center mb-8">
    Read our comprehensive travel guide containing essential tips and information to help you plan your trip to Bhutan and ensure you have a safe, enjoyable, and memorable holiday.
  </p>
  <p className="text-center mb-12">
    If you need any information not answered in our guides, please feel free to ask us at our Whatsapp Number <strong>+975 7743698</strong>
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* First Row of Blog Posts */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/t3.jpg" alt="Trashigang" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">Trashigang: Nature Hikes and Trails</h3>
        <p className="text-gray-600">
          Trashigang, Bhutan’s easternmost district, is one of the least visited by travelers. It is a haven for those seeking an off-the-beaten-path experience in Bhutan. This virgin region, barely touched by modernization, offers breathtaking landscapes, traditional villages, and a chance to experience Eastern Bhutan’s culture in its most authentic form. From exploring the historic Trashigang Dzong […]
        </p>
        <Link to="/blog/trashigang-nature-hikes" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/y2.jpg" alt="Travel Tips" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">Travel Tips & Information While Travelling Bhutan</h3>
        <p className="text-gray-600">
          Drukair and Bhutan Airlines are the only two commercial airlines that fly to and out of Bhutan. Seats on Drukair and Bhutan Airlines are not assigned while purchasing the air ticket. If you want to get a good view of the Himalayas while flying to Bhutan, request a window seat on the left side of the aircraft while checking in your baggage…
        </p>
        <Link to="/blog/travel-tips-bhutan" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/t1.jpg" alt="Best Time to Travel" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">When Is The Best Time To Travel Bhutan</h3>
        <p className="text-gray-600">
          The best time to visit Bhutan is when you happen to be in Asia or in the neighboring countries like Nepal, India, Bangladesh, Thailand, and Singapore. The reason being that there is a direct flight from these countries and also because it takes about two days to travel to Bhutan from the continents of America or Europe.
        </p>
        <Link to="/blog/best-time-travel" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>
  </div>

  {/* Second Row of Blog Posts */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/111.jpg" alt="Payment Tips" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">How To Make A Payment Or Transfer Money To Bhutan</h3>
        <p className="text-gray-600">
          The most simple way of making a wire transfer to Bhutan is to visit a bank and make the transfer in person. There are three ways to make a payment for your trip to Bhutan. Each one may have its advantages and disadvantages. Note: All payments should be made in USD.
        </p>
        <Link to="/blog/payment-transfer" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/222.jpg" alt="Trekking Guide" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">A Brief Guide On Trekking In Bhutan</h3>
        <p className="text-gray-600">
          The day starts off with a wake-up call, around 6:30 am, if you are not already awake by then. A staff will come with a bowl of warm water to wash up along with tea/coffee brought to your tent. Before heading over to the dining tent for breakfast, usually around 7-8, we suggest you […]
        </p>
        <Link to="/blog/trekking-guide" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/lovable-uploads/333.jpg" alt="Gold in Bhutan" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">Gold Price In Bhutan: Tourists & Visitors Can Buy Gold At Duty-Free Rate</h3>
        <p className="text-gray-600">
          All tourists and visitors can buy 20 grams of gold from the Duty-Free Shop in Thimphu and Phuntsholing, provided they fulfill the following requirements: 1. Pay Sustainable Development Fee (SDF) 2. Produce a receipt for spending a minimum of one night in a Department of Tourism-certified hotel. 3. Pay in USD. 4. Produce visa/permit copy. Or […]
        </p>
        <Link to="/blog/gold-price" className="mt-2 text-bhutan-maroon hover:underline">
          Read More
        </Link>
      </div>
    </div>
  </div>
</div>



      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>© 2023 Your Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <img src="/lovable-uploads/instagram.png" alt="Instagram" className="w-8 h-8" />
            <img src="/lovable-uploads/facebook.png" alt="Facebook" className="w-8 h-8" />
            <img src="/lovable-uploads/twitter.png" alt="Twitter" className="w-8 h-8" />
            <img src="/lovable-uploads/youtube.png" alt="YouTube" className="w-8 h-8" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tips;