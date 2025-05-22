// import React from "react";

// const Screenshots = () => {
//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
// <div className="text-center">
//   <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
//     Love in Your Pocket 💖
//   </h2>
//   <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
//     Swipe, match, and fall in love—anytime, anywhere with our mobile
//     app.
//   </p>
// </div>
//       </div>
//     </section>
//   );
// };
// export default Screenshots;

// Screenshots.tsx
"use client";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

const AppleCardsCarouselDemo = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Love in Your Pocket 💖
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
          Swipe, match, and fall in love—anytime, anywhere with our mobile app.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
};

export default AppleCardsCarouselDemo;

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fMF8xNjY3NDIwNTEwXzA4OQ/screen-0.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fMV8xNjY3NDIwNTExXzA1Mg/screen-1.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fMl8xNjY3NDIwNTEzXzAyMQ/screen-2.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fM18xNjY3NDIwNTE0XzAzOQ/screen-3.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Photography just got better.",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fNF8xNjY3NDIwNTE1XzA4Nw/screen-4.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "https://image.winudf.com/v2/image1/Y29tLndhbmVzbmlhcHAubGl2ZV9zY3JlZW5fMF8xNjY3NDIwNTEwXzA4OQ/screen-0.webp?fakeurl=1&type=.webp",
    content: <DummyContent />,
  },
];
