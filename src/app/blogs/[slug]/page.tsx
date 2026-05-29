import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { BlogCard } from "../../../components/pages/blogs/BlogCard";
import { BLOGS_DATA, getBlogBySlug } from "../../../content/blogsData";
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
    <div className="space-y-12">
      <article className="space-y-9">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--brand-primary)]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
              SRD Foundation Blog
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-[2.15rem] lg:text-[2.45rem]">
              {blog.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-[17px]">
              {blog.excerpt}
            </p>
          </div>

          {blog.image && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] shadow-sm lg:aspect-[5/4]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        <div className="mx-auto max-w-3xl border-t border-[var(--border-color)] pt-8">
          <div className="space-y-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-[16px]">
            {blog.content.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
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
