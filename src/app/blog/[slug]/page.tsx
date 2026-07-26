import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Articol — Cabanele Rus Budești" };
  return { title: `${post.title} — Cabanele Rus Budești`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <a href="/blog" className="text-muted hover:text-gold text-sm no-underline transition-colors">
            ← Înapoi la blog
          </a>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
          {post.title}
        </h1>

        <div className="relative aspect-video overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-cream/80 leading-relaxed text-lg mb-4">
            {post.excerpt}
          </p>
          <p className="text-cream/70 leading-relaxed">
            Acest articol face parte din seria de ghiduri turistice Cabanele
            Rus Budești. Vă invităm să descoperiți frumusețile Maramureșului
            și să vă cazați la noi pentru o experiență de neuitat la munte.
          </p>
        </div>

        <div className="mt-12 p-6 bg-night-light border border-border-dark text-center">
          <p className="text-cream mb-4">Vrei să vizitezi zona?</p>
          <a
            href="/camere"
            className="inline-block px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
          >
            Rezervă cazare
          </a>
        </div>
      </div>
    </div>
  );
}
