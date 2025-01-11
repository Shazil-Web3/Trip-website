import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [showTripDetails, setShowTripDetails] = useState(false);
  const [tripTitle, setTripTitle] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [tripDuration, setTripDuration] = useState(1); // Default duration
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren612, setNumChildren612] = useState(0);
  const [numChildren26, setNumChildren26] = useState(0);
  const [numChildrenBelow2, setNumChildrenBelow2] = useState(0);
  const [numTravelers, setNumTravelers] = useState(1);
  const [showTravelerDetails, setShowTravelerDetails] = useState(false);

  const images = [
    {
      url: '/lovable-uploads/1a28998e-8b6c-4c36-87df-14c7d6dd4287.png',
      caption: 'Punakha Dzong - The Palace of Great Bliss'
    },
    {
      url: '/lovable-uploads/d64d91fe-3395-43aa-ad70-1af00820bb28.png',
      caption: 'Prayer Flags in the Himalayas'
    },
    {
      url: '/lovable-uploads/62f5b927-89cf-4e2d-a6e7-3191c88d0dfa.png',
      caption: 'River Rafting Adventure'
    }
  ];

  const reviews = [
    {
      name: "Sarah Thompson",
      location: "United States",
      text: "An incredible journey through Bhutan! The monasteries and warm hospitality made this trip unforgettable.",
      rating: 5
    },
    {
      name: "James Wilson",
      location: "United Kingdom",
      text: "Himalayan Mystique provided an authentic experience. The guides were knowledgeable and the cultural immersion was perfect.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      location: "Spain",
      text: "From trekking to visiting temples, every moment was magical. A perfect blend of adventure and spirituality.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Singapore",
      text: "The attention to detail made our Bhutan trip exceptional. Highly recommend Himalayan Mystique!",
      rating: 5
    },
    {
      name: "Emma Brown",
      location: "Australia",
      text: "A life-changing experience in Bhutan. The festivals and cultural tours were beyond amazing!",
      rating: 5
    },
    {
      name: "Michael Lee",
      location: "Canada",
      text: "The trekking routes were breathtaking. Our guide's knowledge of local traditions added so much value.",
      rating: 5
    },
    {
      name: "Liam Johnson",
      location: "New Zealand",
      text: "An unforgettable experience! The landscapes were stunning, and the local culture was rich and vibrant.",
      rating: 5
    }
  ];

  const packages = [
    {
      title: "CULTURAL TOURS",
      image: "/lovable-uploads/f3d29ebc-b7b9-430a-a534-b0098adb6d0f.png",
      description: "Pick a package ranging from 4 days to 11 days – designed to give you a wholesome travel experience of Bhutan, today, may be man's last unventured destination on earth."
    },
    {
      title: "FESTIVALS",
      image: "/lovable-uploads/08a15401-e752-4d0f-8171-3c8cb371e0a5.png",
      description: "Festivals in Bhutan are typically known as Tshechu (meaning 10th day) and they are celebrated with great fervor across the many monasteries, dzongs and temples."
    },
    {
      title: "TREKKING TOURS",
      image: "/lovable-uploads/7a8eeb01-7ffb-4034-b39a-679e638e741f.png",
      description: "Whether you are looking for a day hike or a gruelling 31 day adventure, Bhutan has it all. Pristine mountain lakes, imposing glaciers and some of the world's most endangered species."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollSpeed = 7; // Adjust this value for speed
      const carousel = document.querySelector('.carousel-content'); // Adjust the selector as needed

      if (carousel) {
        carousel.scrollLeft += scrollY * scrollSpeed; // Move carousel based on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Regex for valid Gmail
    return regex.test(email);
  };

  return (
    <div className="min-h-screen bg-bhutan-cream">
      {/* Hero Section */}
      <div className="relative h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-20 left-0 right-0 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{image.caption}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-bhutan-maroon mb-8">
          Discover the Magic of Bhutan
        </h2>
        <p className="text-bhutan-slate text-lg mb-8">
          Nestled in the heart of the Himalayas, Bhutan is a land of mystical monasteries, 
          ancient traditions, and breathtaking landscapes. Experience the last Shangri-La 
          where happiness is measured in GNH (Gross National Happiness) and where ancient 
          Buddhist culture thrives in harmony with nature.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-bhutan-maroon text-center mb-12">
            Our Traveler Reviews
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: "trimSnaps",
              autoplay: false,
            }}
            className="w-full"
          >
            <CarouselContent className="flex">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4">
                  <Card className="bg-bhutan-cream">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-bhutan-maroon">{review.name}</h3>
                          <p className="text-sm text-bhutan-slate">{review.location}</p>
                        </div>
                        <p className="text-bhutan-slate">{review.text}</p>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-bhutan-gold">★</span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
          
          </Carousel>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-bhutan-cream">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_RZm7E9E-CM"
              title="Scenic Relaxation: Himalayas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-bhutan-maroon">
              WHY SHOULD YOU CHOOSE HIMALAYAN MYSTIQUE?
            </h2>
            <p className="text-bhutan-slate">
              Discover Bhutan with Himalayan Mystique Adventures & Holidays, where every journey is a step into a world of cultural wonders and natural beauty. Our unique travel experiences are designed to provide you with an authentic and enriching exploration of Bhutan. With a focus on sustainability, we ensure that you connect deeply with nature and local traditions, making your visit both enlightening and unforgettable.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="bg-bhutan-maroon text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Travel Packages Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bhutan-maroon mb-4">
              TRAVEL PACKAGES
            </h2>
            <p className="text-bhutan-slate">
              Culture, Festivals, Treks and lots of Happiness
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="space-y-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-bold text-bhutan-maroon">{pkg.title}</h3>
                <p className="text-bhutan-slate">{pkg.description}</p>
                <button
                  onClick={() => navigate('/about')}
                  className="text-bhutan-maroon hover:underline"
                >
                  Read More »
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section for Travel Itineraries */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bhutan-maroon mb-4">
              BHUTAN TRAVEL ITINERARIES
            </h2>
            <p className="text-bhutan-slate">
              These Itineraries Can Be Further Customized To Your Needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add your images here */}
            <div className="space-y-4 text-center"> {/* Centered text */}
              <img
                src="/lovable-uploads//3.jpg"
                alt="Punakha Festival"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-bhutan-slate font-bold">PUNAKHA FESTIVAL + ESSENTIAL BHUTAN, 9TH – 14TH MARCH 2025 (6 NIGHTS, 7 DAYS)</p>
              <button
                onClick={() => navigate('/punakha-festival')}
                className="text-bhutan-maroon hover:underline"
              >
                Read More »
              </button>
            </div>
            <div className="space-y-4 text-center"> {/* Centered text */}
              <img
                src="/lovable-uploads/5.jpg"
                alt="Paro Festival"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-bhutan-slate font-bold">PARO FESTIVAL 2025 + ESSENTIAL BHUTAN, 6TH – 12TH APRIL 2025 (6 NIGHTS, 7 DAYS)</p>
              <button
                onClick={() => navigate('/paro-festival')}
                className="text-bhutan-maroon hover:underline"
              >
                Read More »
              </button>
            </div>
            <div className="space-y-4 text-center"> {/* Centered text */}
              <img
                src="/lovable-uploads/7.jpg"
                alt="Thimphu Festival"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-bhutan-slate font-bold">THIMPHU FESTIVAL + ESSENTIAL BHUTAN, 2ND – 8TH OCTOBER 2025 (6 NIGHTS, 7 DAYS)</p>
              <button
                onClick={() => navigate('/thimphu-festival')}
                className="text-bhutan-maroon hover:underline"
              >
                Read More »
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section for Unique Adventures */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-bhutan-maroon text-center mb-12">
            UNIQUE ADVENTURES
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: "trimSnaps",
              autoplay: true,
              autoplayInterval: 3000, // Adjust the interval as needed
            }}
            className="w-full"
          >
            <CarouselContent className="flex">
              {[
                  { src: '/lovable-uploads/2.jpg', text: 'Explore Bhutans tranquil rivers and iconic monasteries.' },
                  { src: '/lovable-uploads/5.jpg', text: ' Connect with the vibrant traditions of Bhutanese locals' },
                  { src: '/lovable-uploads/6.jpg', text: 'Discover ancient dzongs surrounded by breathtaking mountains.' },
                  { src: '/lovable-uploads/7.jpg', text: 'Witness the elegance of black-necked cranes in their natural haven.' },
                  { src: '/lovable-uploads/9.jpg', text: 'Savor a peaceful meal amidst Bhutans sacred temples.' },
                  { src: '/lovable-uploads/10.jpg', text: ' Experience the energy of Bhutans colorful traditional dances.' },
                  { src: '/lovable-uploads/11.jpg', text: 'Graceful black-necked cranes in a natural habitat.' },
              ].map((item, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                  <div className="relative group">
                    <img
                      src={item.src}
                      alt={item.text}
                      className="w-full h-64 object-cover rounded-lg transition duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                      <p className="text-white text-lg font-bold text-center">{item.text}</p> {/* Centered text */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>

      {/* New Section for Deals and Discount Offers */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-bhutan-maroon text-center mb-12">
            DEALS AND DISCOUNT OFFERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/111.jpg"
                alt="Pemako Punakha"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-bhutan-maroon">
                  Offer At Pemako in Punakha, a Luxury Tented Resort
                </h3>
                <p className="text-bhutan-slate">
                  Pemako in Punakha is a tented luxury resort that offers a rare opportunity to think and feel more deeply. Each tented villa is a plush hideaway, where time slows and almost ceases to matter. Each tented villa features: Copper Fixtures, Private Heated Pool, Expansive Decks, Bhutanese Design & Serge Ferrari Fabrics. For 2025, their Luxury [...]
                </p>
                <button
                  onClick={() => navigate('/pemako-punakha')}
                  className="mt-4 bg-bhutan-maroon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Read More »
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/222.jpg"
                alt="Discount Offers"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-bhutan-maroon">
                  Discount Offers & Incentives For Bhutan Travel Visa
                </h3>
                <p className="text-bhutan-slate">
                  A fifty percent discount shall be granted on the prevailing SDF of USD 200 for US Dollar paying tourists visiting Bhutan. The effective SDF with the discount shall be USD 100 per person per day for US Dollar paying tourists.
                </p>
                <button
                  onClick={() => navigate('/bhutan-visa-discount')}
                  className="mt-4 bg-bhutan-maroon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Read More »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section for Our Guests */}
      <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/333.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Dimmed overlay */}
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10"> {/* Ensure text is above the overlay */}
          <h2 className="text-3xl font-bold mb-4">OUR GUESTS</h2>
          <p className="mb-12">Our guests who experienced the beauty of Bhutan</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/lovable-uploads/5.jpg', text: 'TANYA MANTERFIELD, CAPE TOWN – JULY 2024' },
              { src: '/lovable-uploads/p2.jpg', text: 'KELZANG DORJI, TRASHIGANG – JULY 2023' },
              { src: '/lovable-uploads/p3.jpeg', text: 'PEMA TSERING, GASA – NOVEMBER 2024' },
              { src: '/lovable-uploads/p4.jpg', text: 'CHENCHO WANGCHUK, WANGDUE – MAY 2023' },
              { src: '/lovable-uploads/p5.jpeg', text: 'PEMA CHODEN, PARO – JUNE 2024' },
              { src: '/lovable-uploads/p6.jpeg', text: 'KARMA DENDUP, BUMTHANG – DECEMBER 2024' },
              { src: '/lovable-uploads/p7.jpeg', text: 'JIGME TSHERING, PHUENTSHOLING – OCTOBER 2023' },
              { src: '/lovable-uploads/p8.jpeg', text: 'SONAM DORJI, THIMPHU – AUGUST 2023' },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-64 object-cover rounded-lg transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                  <p className="text-lg font-bold text-center">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section for Follow Us */}
      <div className="py-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">FOLLOW US</h2>
            <p>
              If Bhutan is on your bucket list and you want to know what's going on in Bhutan, follow us on Instagram, Facebook, Twitter, Pinterest, and YouTube.
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
      </div>

      

      {/* Contact Us Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-bhutan-maroon mb-4">CONTACT US</h1>
          <p className="text-bhutan-slate mb-8">
            Feel free to get in touch with us for our unique travel itineraries and tour packages.
          </p>
    
        </div>
      </div>

      {/* New Section for Experience Bhutan */}
      <div className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start">
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/5.jpg"
              alt="Experience Bhutan"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-0">
            <h2 className="text-3xl font-bold text-bhutan-maroon mb-4">Experience Bhutan</h2>
            <p className="text-bhutan-slate mb-4">
              Discover the unique culture, breathtaking landscapes, and warm hospitality of Bhutan. Our tailored itineraries ensure that you experience the best of this magical kingdom, from its ancient monasteries to vibrant festivals. Join us for an unforgettable journey that will leave you with cherished memories and a deeper understanding of Bhutanese culture.
            </p>
          </div>
        </div>
      </div>








      








      

      {/* New Section for Contact Form */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-bhutan-maroon rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-bhutan-maroon mb-4 text-center">
              Get in touch with us for an obligation-free tour quote or anything related to our travel products and services.
            </h2>
            <p className="text-bhutan-slate mb-8 text-center">
              If you have any special interest or specific needs and constraints, we are happy to discuss and offer a personalized service to suit your needs. Call us at (WhatsApp) +975 77430698 / 17110975 or email us at breathebhutan@gmail.com
            </p>
            <div className="flex flex-col items-center">
              {!showContactDetails ? (
                <>
                  <label className="text-bhutan-slate mb-2">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-bhutan-slate rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-bhutan-maroon"
                    placeholder="Enter your name"
                  />
                  <button
                    onClick={() => setShowContactDetails(true)}
                    className="bg-bhutan-maroon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-64"
                  >
                    NEXT
                  </button>
                </>
              ) : showTripDetails ? (
                <>
                  <label className="text-bhutan-slate mb-2 font-bold">Travel Dates (Or Month & Year)</label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    className="border border-bhutan-slate rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-bhutan-maroon"
                    placeholder="Enter travel dates"
                  />
                  <label className="text-bhutan-slate mb-2 font-bold">Trip Duration (In Days)</label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setTripDuration(tripDuration > 1 ? tripDuration - 1 : 1)} // Prevent going below 1
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={tripDuration}
                      onChange={(e) => setTripDuration(Math.max(1, e.target.value))} // Ensure it doesn't go below 1
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setTripDuration(tripDuration + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                 
                  <label className="text-bhutan-slate mb-2">Number of Adults</label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setNumAdults(numAdults > 0 ? numAdults - 1 : 0)} // Prevent going below 0
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    
                    <input
                      type="number"
                      value={numAdults}
                      onChange={(e) => setNumAdults(Math.max(0, e.target.value))} // Ensure it doesn't go below 0
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setNumAdults(numAdults + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div> <h3 className="text-xl font-bold text-bhutan-maroon mb-4">Number of Children</h3>
                  <label className="text-bhutan-slate mb-2">Ages: 6-12</label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setNumChildren612(numChildren612 > 0 ? numChildren612 - 1 : 0)} // Prevent going below 0
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numChildren612}
                      onChange={(e) => setNumChildren612(Math.max(0, e.target.value))} // Ensure it doesn't go below 0
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setNumChildren612(numChildren612 + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                  <label className="text-bhutan-slate mb-2">Ages: 2-6</label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setNumChildren26(numChildren26 > 0 ? numChildren26 - 1 : 0)} // Prevent going below 0
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numChildren26}
                      onChange={(e) => setNumChildren26(Math.max(0, e.target.value))} // Ensure it doesn't go below 0
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setNumChildren26(numChildren26 + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                  <label className="text-bhutan-slate mb-2">Ages: Below 2</label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setNumChildrenBelow2(numChildrenBelow2 > 0 ? numChildrenBelow2 - 1 : 0)} // Prevent going below 0
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numChildrenBelow2}
                      onChange={(e) => setNumChildrenBelow2(Math.max(0, e.target.value))} // Ensure it doesn't go below 0
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setNumChildrenBelow2(numChildrenBelow2 + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-bhutan-maroon mb-4">Total Number of Travelers</h3>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setNumTravelers(numTravelers > 1 ? numTravelers - 1 : 1)} // Prevent going below 1
                      className="bg-gray-300 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numTravelers}
                      onChange={(e) => setNumTravelers(Math.max(1, e.target.value))} // Ensure it doesn't go below 1
                      className="border border-bhutan-slate rounded-md p-2 w-32 text-center"
                    />
                    <button
                      onClick={() => setNumTravelers(numTravelers + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => setShowTripDetails(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-32"
                    >
                      PREVIOUS
                    </button>
                    <button
                      onClick={() => {
                        // Handle form submission or further actions here
                      }}
                      className="bg-bhutan-maroon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-32"
                    >
                      NEXT
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <label className="text-bhutan-slate mb-2">WhatsApp Number</label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      setWhatsapp(value);
                    }}
                    className="border border-bhutan-slate rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-bhutan-maroon"
                    placeholder="Enter your WhatsApp number"
                  />
                  <label className="text-bhutan-slate mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-bhutan-slate rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-bhutan-maroon"
                    placeholder="Enter your email"
                  />
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => setShowContactDetails(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-32"
                    >
                      PREVIOUS
                    </button>
                    <button
                      onClick={() => {
                        if (isValidEmail(email)) {
                          setShowTripDetails(true); // Move to trip title input
                        }
                      }}
                      className={`bg-bhutan-maroon text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-32 ${!isValidEmail(email) ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!isValidEmail(email)} // Disable button if email is invalid
                    >
                      NEXT
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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

export default Index;