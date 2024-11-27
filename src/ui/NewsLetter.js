import { useState } from "react";
import Button from "./Button";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log("Subscribing with email:", email);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section - Text Content */}
        <div className="md:col-span-1 p-8 bg-white/30 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-600 mb-4">
            Get the latest course updates, industry insights, and exclusive
            learning tips delivered straight to your inbox.
          </p>
        </div>

        {/* Right Section - Newsletter Signup */}
        <div className="md:col-span-2 bg-white p-8 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow p-3 text-gray-700 focus:outline-none"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
