import { notFound } from "next/navigation";
import { Metadata } from "next";

type Policy = {
  title: string;
  content: string;
};

// ✅ Fixed: params is now a Promise in Next.js 15
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const policy = await getPolicy(slug);

  return {
    title: policy?.title ?? "Policy",
    description: `Read our ${policy?.title ?? "Policy"} on Wanesni.`,
  };
}

async function getPolicy(slug: string): Promise<Policy | null> {
  try {
    const res = await fetch(
      `https://wanesni.com/items/policies?filter[slug][_eq]=${slug}`,
      { next: { revalidate: 60 } }
    );

    const data = await res.json();
    return data.data?.[0] ?? null;
  } catch {
    return null;
  }
}

// ✅ Fixed: params is now a Promise in Next.js 15
const PolicyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const policy = await getPolicy(slug);

  if (!policy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          {policy.title}
        </h1>

        <article
          className="page-content prose prose-lg prose-p:mb-6 prose-p:leading-relaxed text-gray-700 max-w-none"
          dangerouslySetInnerHTML={{ __html: policy.content }}
        />
      </div>
    </main>
  );
};

export default PolicyPage;