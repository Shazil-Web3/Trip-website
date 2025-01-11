import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What’s the difference between booking a trip directly through Breathe Bhutan and travel agents abroad?",
      answer: "When you book through Breathe Bhutan, you directly support local tourism. We offer personalized services, better pricing, and a deep understanding of Bhutan's culture and traditions."
    },
    {
      question: "Can I travel single (solo) or must I join a group in Bhutan?",
      answer: "Yes, you can travel single (solo) in Bhutan. You will get an independent guide and driver throughout your tour. We respect the privacy and needs of each individual."
    },
    {
      question: "When is the best time to travel in Bhutan?",
      answer: "The best time to travel to Bhutan is during the spring (March to May) and autumn (September to November) seasons when the weather is pleasant and festivals are in full swing."
    },
    {
      question: "What does it cost to visit Bhutan?",
      answer: "Costs vary based on your travel itinerary, season, and preferences. Bhutan has a Sustainable Development Fee (SDF) that applies to all tourists."
    },
    {
      question: "How do I book my flights into Bhutan?",
      answer: "Flights can be booked through Druk Air or Bhutan Airlines, the two carriers operating flights into Bhutan. We can assist you with flight bookings."
    },
    {
      question: "Would we need travel insurance?",
      answer: "Yes, it is highly recommended to have travel insurance covering medical emergencies, cancellations, and other unforeseen events."
    },
    {
      question: "Are there any restrictions on photography in Bhutan?",
      answer: "Yes, photography is restricted in certain areas such as inside monasteries and temples. Your guide will inform you about the rules to follow."
    },
    {
      question: "Do I need a visa to travel to Bhutan?",
      answer: "Yes, a visa is required to travel to Bhutan. Your tour operator will process your visa application once your trip is confirmed."
    },
    {
      question: "What kind of food can I expect in Bhutan?",
      answer: "Bhutanese cuisine typically includes rice, vegetables, and chili-based dishes. Popular dishes include Ema Datshi (chili and cheese). Vegetarian and other dietary preferences are accommodated."
    },
    {
      question: "Is Bhutan safe for travelers?",
      answer: "Yes, Bhutan is one of the safest countries to travel to. Crime rates are very low, and the people are friendly and welcoming to tourists."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="p-4">
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
          src="lovable-uploads/4.jpg" 
          alt="Description of the image" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>

      {/* Full Screen White Background Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-8">------ FAQ ------</h2>

          {/* Centered h2 content */}
          <p className="font-semibold text-left mb-8 py-2">
            Some frequently asked questions and answers related to traveling in Bhutan. We have tried to put together the most common questions. If you have remaining doubts you can write to us and we will get back to you at the earliest.
          </p>

          <div className="flex">
            {/* Left Side (FAQ Section) */}
            <div className="w-7/10 pr-4">
              <h3 className="text-2xl font-semibold mb-4">SOME FREQUENTLY ASKED QUESTIONS ON TRAVELING TO AND IN BHUTAN:</h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg p-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left font-semibold text-lg"
                    >
                      Q. {faq.question}
                    </button>
                    {activeIndex === index && (
                      <div className="mt-2 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-3/10 pl-4">
              <div className="bg-gray-200 p-4 mb-4">
                <h3 className="font-bold">Explore Our Services</h3>
                <p>Click here to learn more about our unique travel itineraries and tour packages.</p>
                <a href="/services" className="text-blue-500 underline">Learn More</a>
              </div>

              <h3 className="font-bold mb-2">Our Travel Guide</h3>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center">
                    <img 
                      src={`/path/to/small/image${index + 1}.jpg`} 
                      alt={`Small Image ${index + 1}`} 
                      className="w-16 h-16 mr-2 object-cover" 
                    />
                    <p className="text-md">Description for small block {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Below with Cream Background */}
      <div className="bg-bhutan-cream">
        {/* Footer */}
        <footer className="bg-bhutan-maroon p-4 mt-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Faq;
