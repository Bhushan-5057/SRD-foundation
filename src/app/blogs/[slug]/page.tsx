import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { BlogCard } from "@/components/pages/blogs/BlogCard";
import { BLOGS_DATA, getBlogBySlug } from "@/content/blogsData";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | SRD Foundation",
    };
  }

  return {
    title: `${blog.title} | SRD Foundation`,
    description: blog.content?.[0]?.slice(0, 150),
  };
}

export function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOGS_DATA.filter((item) => item.slug !== blog.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">

      <article className="mx-auto max-w-4xl">

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl">
          {blog.title}
        </h1>

        {blog.image && (
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--border-color)] aspect-[16/9]">

            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
              priority
            />

          </div>
        )}

        <div className="mt-10 space-y-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-[16px]">

          {blog.content.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}

        </div>

      </article>

      {relatedBlogs.length > 0 && (
        <section className="space-y-6">

          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Related Blogs
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((item, index) => (
              <div key={item.slug} data-aos="fade-up" data-aos-delay={index * 100}>
                <BlogCard blog={item} />
              </div>
            ))}
          </div>

        </section>
      )}

    </div>
  );
}