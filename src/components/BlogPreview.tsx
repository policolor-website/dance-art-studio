import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Reveal from "./Reveal";

export default function BlogPreview() {
  return (
    <section className="py-24 bg-night-light">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Noutăți
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Descoperă zona
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm">{post.excerpt}</p>
                <span className="text-gold text-sm font-semibold mt-3 inline-block">
                  Vezi tot →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
