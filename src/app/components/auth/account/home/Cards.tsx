"use client";
import React, { useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/app/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Handler to go to next card
  const handleSwipe = (info: { offset: any }) => {
    // info.offset.x is the distance dragged horizontally
    if (Math.abs(info.offset.x) > 120 && current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      <div className="relative w-80 h-96 flex items-center justify-center">
        {items
          .slice(current, current + 3)
          .reverse()
          .map((item, idx) => (
            <div
              key={item.title}
              className={`absolute w-full h-full transition-transform duration-300 ${
                idx === 0
                  ? "z-30"
                  : idx === 1
                  ? "z-20 scale-95 translate-y-2"
                  : "z-10 scale-90 translate-y-4"
              }`}
            >
              {idx === 0 ? (
                <DraggableCardBody
                  className="w-full h-full bg-transparent border-0"
                  onDragEnd={(_, info) => handleSwipe(info)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </h3>
                </DraggableCardBody>
              ) : (
                <div className="w-full h-full bg-neutral-100 rounded-md flex flex-col items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none h-80 w-80 object-cover rounded-md opacity-80"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-400 dark:text-neutral-600">
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
      </div>
    </DraggableCardContainer>
  );
}
