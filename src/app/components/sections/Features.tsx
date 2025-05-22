import React from "react";

const Features = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Key Features
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Everything you need to meet, match, and connect—safely and
            effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <span className="text-5xl">🔒</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Secure Messaging
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Your private conversations are protected with end-to-end
              encryption for complete peace of mind.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <span className="text-5xl">🧠</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Smart Matching
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our intelligent algorithm finds the most compatible people based
              on your interests, habits, and preferences.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <span className="text-5xl">📸</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Photo Verification
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Verified photos help you connect with real people, reducing the
              chances of fake profiles and catfishing.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <span className="text-5xl">📍</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Location-Based Matches
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Discover singles near you using precise location filters for
              faster, more relevant local connections.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <span className="text-5xl">🚫</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Block & Report Tools
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Instantly block or report suspicious users to keep your dating
              experience safe and respectful.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <span className="text-5xl">🕒</span>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Activity Status
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Know who’s online or recently active to make your conversations
              more timely and engaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
