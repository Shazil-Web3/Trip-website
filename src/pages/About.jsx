import React from 'react';

const About = () => {
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
          src="lovable-uploads/5.jpg" 
          alt="Description of the image" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>

      {/* Full Screen White Background Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-8">------ About Us ------</h2>

          {/* Centered h2 content */}
          <p className="font-semibold text-center mb-8 py-12">
            We believe in crafting journeys that go beyond the typical tourist destinations. Kinley wanted his guests to meet the locals at his village, understand the monastic life of his brother, savor his favorite local dishes, and experience the vibrant nightlife with his friends. This ethos is intricately woven into every itinerary we design, ensuring that each guest experiences Bhutan through the eyes of its people.
          </p>

          <div className="flex">
            {/* Left Side (70%) */}
            <div className="w-7/10 pr-4">
              <h3 className="text-2xl font-semibold mb-4">Breathe Bhutan – “Authentic, Immersive, and Sustainably Curated” Travel Experiences</h3>
              <p className="mb-4">
                Welcome to Breathe Bhutan, where travel transcends sightseeing and transforms into a journey of deep connection with the heart and spirit of Bhutan – the Bhutan we cherish and call home.
              </p>
              <p className="mb-4">
                Breathe Bhutan was originally founded by Kezang Tashi Rinzin and later revitalized by Kinley Wangchuk after their marriage. Starting as a small family initiative, our journey began with just two cherished guests from Germany in 2015. Since then, as we've grown, each team member has seamlessly become part of the Breathe Bhutan family, united by a shared passion for delivering authentic and immersive travel experiences.
              </p>

              <h3 className="text-xl font-semibold mb-2">Our Story</h3>
              <p className="mb-4">
                Breathe Bhutan was born from a heartfelt vision: to create personalized and deeply immersive travel experiences. Kinley, driven by his entrepreneurial spirit and creative passion, sought to revolutionize the traditional tourism model in Bhutan. His vision was to provide a travel experience that enriches the soul, connecting each traveler with the authentic Bhutan that he treasures.
              </p>

              <h3 className="text-xl font-semibold mb-2">Our Philosophy</h3>
              <p className="mb-4">
                At Breathe Bhutan, we design journeys that delve beyond conventional destinations. Kinley envisioned itineraries that allow guests to truly experience Bhutan – whether by meeting locals in his village, understanding the monastic life of his brother, savoring his favorite traditional dishes, or enjoying vibrant nightlife with friends. This philosophy is woven into every itinerary, offering travelers the opportunity to experience Bhutan through its people’s eyes.
              </p>

              <h3 className="text-xl font-semibold mb-2">Our Promise of Authenticity and Sustainability</h3>
              <p className="mb-4">
                Authenticity lies at the core of every journey we craft. From carefully selected routes to accommodations and dining, every element is chosen to reflect the true essence of Bhutan. Equally, sustainability is embedded in our values, guiding us to protect Bhutan’s cultural and natural heritage while empowering local communities. Our efforts minimize environmental impact and enhance the lives of those who call Bhutan home.
              </p>

              <h3 className="text-xl font-semibold mb-2">Why Travel With Us?</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Local Expertise: Entirely locally managed, we maintain direct and personal communication with all our guests, ensuring a seamless and customized experience.</li>
                <li>Licensed and Trusted: Fully endorsed by Bhutan’s Department of Tourism and Department of Trade and Industry, we uphold the highest standards of service and responsibility.</li>
                <li>Tailored Experiences: Each itinerary is thoughtfully designed to resonate with the traveler’s personality while capturing Bhutan’s beauty and traditions.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Join Us</h3>
              <p className="mb-4">
                At Breathe Bhutan, we don’t just create itineraries – we craft lifelong memories. Our goal is to introduce you to a Bhutan that feels deeply personal and uniquely yours. Join us to explore Bhutan’s wonders, enriched by the authenticity and warmth of its people.
              </p>
            </div>

            {/* Right Side (30%) */}
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

export default About;
