import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Articol — Dance Art Studio" };
  return { title: `${post.title} — Dance Art Studio`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <Link href="/blog" className="text-muted hover:text-rose text-sm no-underline transition-colors">
            ← Înapoi la blog
          </Link>
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
            Acest articol face parte din seria de ghiduri și sfaturi ale Dance Art
            Studio. Vă invităm să descoperiți lumea baletului clasic
            și să vă înscrieți la cursurile noastre pentru a vă dezvolta
            pasiunea pentru dans.
          </p>
        </div>

        <div className="mt-12 p-6 bg-night-light border border-border-dark text-center">
          <p className="text-cream mb-4">Vrei să începi cursurile de balet?</p>
          <Link
            href="/inscriere"
            className="inline-block px-8 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-rose-light"
          >
            Înscrie-te acum
          </Link>
        </div>
      </div>
    </div>
  );
}
