import React from "react";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  hashtag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Darrell Steward",
    username: "@darrels",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "I never thought I’d meet someone so perfect for me online. We’ve been together for 8 months now! 💑💖",
    hashtag: "#another",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    username: "@lesslie",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "The app is easy to use and feels safe. I love the photo verification—no more fake profiles! 💖",
    hashtag: "#Celebration",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    username: "@jennywilson",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "I made real connections, not just small talk. This platform actually works! 💞",
    hashtag: "#make_it_fast",
  },
  {
    id: 4,
    name: "Kristin Watson",
    username: "@kristinwatson2",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "I’ve tried other dating apps, but this one stands out. The match suggestions are on point!",
    hashtag: "#Celebration",
  },
  {
    id: 5,
    name: "Guy Hawkins",
    username: "@jennywilson",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "We met on here, and now we’re planning our wedding. This app changed my life. 💍❤️",
    hashtag: "#make_it_fast",
  },
  {
    id: 6,
    name: "Marvin McKinney",
    username: "@darrels",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "Finally, a dating site that feels modern, respectful, and real. Highly recommend it! 💓",
    hashtag: "#dev #tools",
  },
  {
    id: 7,
    name: "Annette Black",
    username: "@darrels",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "I was skeptical, but I’ve been on some great dates. Definitely worth it! 💗",
    hashtag: "#another",
  },
  {
    id: 8,
    name: "Floyd Miles",
    username: "@darrels",
    avatar:
      "https://i.ibb.co/MkMhkDsb/89a3ccb0-c8b2-459f-bd6f-8ce52fb0055f.png",
    content:
      "Met someone amazing within a week. The chat features make it easy to connect. 💕",
    hashtag: "#Celebration",
  },
];

const TwitterIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
  </svg>
);

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  username,
  avatar,
  content,
  hashtag,
}) => (
  <div className="overflow-hidden bg-white rounded-md">
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <img
          className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
          src={avatar}
          alt={name}
        />
        <div className="min-w-0 ml-3 mr-auto">
          <p className="text-base font-semibold text-black truncate">{name}</p>
          <p className="text-sm text-gray-600 truncate">{username}</p>
        </div>
        <a href="#" title="" className="inline-block text-sky-500">
          <TwitterIcon />
        </a>
      </div>
      <blockquote className="mt-5">
        <p className="text-base text-gray-800">
          {content}
          <span className="block text-pink-500">{hashtag}</span>
        </p>
      </blockquote>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 bg-slate-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
