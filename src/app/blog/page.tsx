import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog — Dance Art Studio",
  description: "Descoperă articole despre balet, dans clasic, sfaturi pentru părinți și noutăți din Dance Art Studio.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ballet/ballet-shoes.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">Blog</h1>
            <p className="text-muted text-lg">Articole, sfaturi și noutăți</p>
            <div className="w-24 h-px rose-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

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
                <h2 className="font-display text-xl font-bold text-cream mb-2 group-hover:text-rose transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm mb-3">{post.excerpt}</p>
                <span className="text-rose text-sm font-semibold">Vezi tot →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
