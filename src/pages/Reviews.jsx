import React from 'react';

const reviewsData = [
  { name: "Tanya Manterfield, South Africa", date: "July 2024", image: "lovable-uploads/a1.jpeg", hoverText: "Bhutan exceeded all my expectations! A magical experience!" },
  { name: "Janna Taninbaum, USA", date: "November 2024", image: "lovable-uploads/a2.jpg", hoverText: "The culture, the people, the landscapes—simply unforgettable!" },
  { name: "Philipp & Maria, Germany", date: "May 2024", image: "lovable-uploads/a3.jpg", hoverText: "A perfect blend of adventure and serenity!" },
  { name: "Christine May, Philippines", date: "May 2024", image: "lovable-uploads/a4.jpeg", hoverText: "Bhutan’s beauty left us in awe. Highly recommend this agency!" },
  { name: "Elena Garcia, Spain", date: "October 2023", image: "lovable-uploads/a5.jpg", hoverText: "The best travel experience I’ve ever had. Thank you!" },
  { name: "Ryan Patel, Canada", date: "February 2024", image: "lovable-uploads/5.jpg", hoverText: "Seamless planning and incredible service throughout!" },
  { name: "Masaki Yamamoto, Japan", date: "August 2024", image: "lovable-uploads/7.jpg", hoverText: "The Dzongs and monasteries are breathtaking!" },
  { name: "Lisa & David, Australia", date: "March 2024", image: "lovable-uploads/p8.jpeg", hoverText: "The guides were knowledgeable, and the hospitality was amazing!" },
  { name: "Emily Carter, United Kingdom", date: "June 2024", image: "lovable-uploads/p1.jpeg", hoverText: "Bhutan stole my heart. Such a peaceful and beautiful country!" },
  { name: "Arjun Reddy, India", date: "December 2023", image: "lovable-uploads/p2.jpg", hoverText: "A well-organized trip. We couldn’t have asked for more!" },
  { name: "Mei Ling, China", date: "April 2024", image: "lovable-uploads/p3.jpeg", hoverText: "The landscapes and food were unforgettable!" },
  { name: "Sofia Ribeiro, Portugal", date: "September 2023", image: "lovable-uploads/p4.jpg", hoverText: "Bhutan felt like a dream come true. Thank you for everything!" },
  { name: "Carlos Martinez, Mexico", date: "January 2024", image: "lovable-uploads/p5.jpeg", hoverText: "The most authentic travel experience I’ve ever had!" },
  { name: "Nina Ivanova, Russia", date: "October 2024", image: "lovable-uploads/p6.jpeg", hoverText: "Everything was perfectly planned. We’ll be back for sure!" },
  { name: "Liam O’Connor, Ireland", date: "May 2023", image: "lovable-uploads/p7.jpeg", hoverText: "The lush valleys and serene monasteries are a must-see!" },
  { name: "Ali Khan, Pakistan", date: "July 2024", image: "lovable-uploads/3.jpg", hoverText: "Amazing hospitality and stunning views at every turn!" },
  { name: "Isabella Rossi, Italy", date: "November 2023", image: "lovable-uploads/1.jpg", hoverText: "A once-in-a-lifetime journey. Bhutan is magical!" },
  { name: "Hans Müller, Switzerland", date: "March 2024", image: "lovable-uploads/2.jpg", hoverText: "Bhutan’s tranquility is unmatched. Highly recommended!" },
  { name: "Grace Kim, South Korea", date: "August 2023", image: "lovable-uploads/a5.jpg", hoverText: "An unforgettable experience with exceptional service!" },
  { name: "Ahmed Ali, UAE", date: "December 2024", image: "lovable-uploads/a14.png", hoverText: "The agency took care of everything. A stress-free trip!" },
];


const Reviews = () => {
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

      {/* Review Section */}
      <div className="bg-bhutan-cream">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">GUEST REVIEWS</h1>
          <h3 className="text-center mb-8">What our guests have to say about their experience of Bhutan</h3>
          <h2 className="text-center mb-8">
            Discover what our guests have to say about their unforgettable journeys to Bhutan. From breathtaking landscapes to warm hospitality, these stories capture the magic of their experiences. Let their words inspire your next adventure!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviewsData.map((review, index) => (
              <div key={index} className="relative group">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-50" 
                />
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{review.hoverText}</h3>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-md font-light">{review.name} - {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bhutan-maroon p-4 mt-1">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;