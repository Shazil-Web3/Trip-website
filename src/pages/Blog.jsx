import { Link } from 'react-router-dom';

const Blog = () => {
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
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('lovable-uploads/4.jpg')" }}>
        <div className="absolute inset-0 " /> {/* Optional overlay */}
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Row of Images */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/1v.jpg" alt="Post 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Drukpa Kunley, The Divine Madman</h3>
              <p className="text-gray-600">The Great Lama Drukpa Kunley, the “Divine Madman”, was a hardcore radical anti-institutional...</p>
              <Link to="/blog/drukpa-kunley" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/6v.jpg" alt="Post 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Top 10 Facts About The King Of Bhutan</h3>
              <p className="text-gray-600">Very few people know that His Majesty was born in Kathmandu, Nepal...</p>
              <Link to="/blog/top-10-facts" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/5v.jpg" alt="Post 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Thingkab – The Acumen Of A Lady</h3>
              <p className="text-gray-600">Long ago, during the reign of the second King, a lady was shown into the King’s chamber...</p>
              <Link to="/blog/thingkab" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
            </div>
          </div>
        </div>

        {/* Second Row of Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/4v.jpg" alt="Post 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Post Title 4</h3>
              <p className="text-gray-600">Brief description of the post goes here...</p>
              <Link to="/blog/post-4" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/3v.jpg" alt="Post 5" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Post Title 5</h3>
              <p className="text-gray-600">Brief description of the post goes here...</p>
              <Link to="/blog/post-5" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/lovable-uploads/2v.jpg" alt="Post 6" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Post Title 6</h3>
              <p className="text-gray-600">Brief description of the post goes here...</p>
              <Link to="/blog/post-6" className="mt-2 text-bhutan-maroon hover:underline">Read More</Link>
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

export default Blog;