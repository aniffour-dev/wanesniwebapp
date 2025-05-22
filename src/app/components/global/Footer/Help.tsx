// components/HelpSection.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Policy {
  id: string;
  title: string;
  slug: string;
}

const HelpSection = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const res = await fetch("https://wanesni.com/items/policies");
      const data = await res.json();
      setPolicies(data.data); // Directus returns data in a `data` key
    };

    fetchPolicies();
  }, []);

  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
        Help
      </p>

      <ul className="mt-6 space-y-4">
        {policies.map((policy) => (
          <li key={policy.id}>
            <Link
              href={`/policies/${policy.slug}`}
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600"
            >
              {policy.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpSection;
