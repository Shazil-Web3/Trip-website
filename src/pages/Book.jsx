import React from 'react';

const Book = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className=" p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-lg font-bold">Home</a>
          <div>
            <a href="/book" className="text-white mx-4">Book</a>
            {/* Add other links as needed */}
          </div>
        </div>
      </nav>

      {/* Image Below Navbar */}
      <div className="relative w-full h-screen overflow-hidden">
        <img 
          src="/lovable-uploads/21.jpg" 
          alt="Description of the image" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>

      {/* New Section Below Image */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">---- BOOK NOW ----</h2>
        <p className="text-lg mb-8">
          Feel free to get in touch with us for our unique travel itineraries and tour packages.
        </p>
        <p className="text-md mb-4 font-light text-left">
          Kuzu Zangpo la. Warm greetings from Bhutan.
        </p>
        <p className="text-md mb-4 font-light text-left">
        Planning a trip to Bhutan can quickly become overwhelming with conflicting information, exaggerated reviews, and endless accommodation options to sift through. There’s also the risk of getting “Dzongged Out”—spending all your time visiting monasteries and dzongs without fully experiencing the vibrant diversity Bhutan has to offer.
        </p>
        <p className="text-md mb-4 font-light text-left">
        Over the years, we’ve helped countless travelers who, after weeks or even months of planning and research, felt stuck and unsure of how to proceed. They reached out to us, and after understanding their interests and reasons for visiting Bhutan, we were able to craft their perfect itinerary in just a day. Recently, we’ve also supported individuals who applied for their visas independently, only to later discover they couldn’t modify their travel plans.
        </p>
        <p className="text-md mb-4 font-light text-left">
          With us, we ensure that every aspect of your journey is seamlessly handled, so you can focus on enjoying Bhutan without the stress of navigating these challenges.
        </p>
        <p className="text-md mb-4 font-light text-left">
        While you dedicate your energy to what matters most, we’ll take care of the planning. This has been our expertise since 2014.
        </p>
        <p className="text-md mb-4 font-light text-left">
        Share your interests with us, and we’ll create the ideal Bhutan experience for you. No stress, no guesswork—just the most authentic, immersive, and sustainable journey Bhutan has to offer. Let us handle the details so you can explore Bhutan to the fullest, without getting ‘Dzongged Out’.
        </p>
        <p className="text-md font-light text-left">Tashi Delek la.</p>
      </div>
         {/* Footer Section */}
         <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
          <p>
              If Bhutan is on your bucket list and you want to know what's going on in Bhutan, follow us on Instagram, Facebook, Twitter, Pinterest, and YouTube.
            </p>
            <p className="text-sm">
              Copyright © 2025. Breathe Bhutan. All Rights Reserved.
            </p>
           
            
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/facebook.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/twitter.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/youtube.png" alt="YouTube" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Book;