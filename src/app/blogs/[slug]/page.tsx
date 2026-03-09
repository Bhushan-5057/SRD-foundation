import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { BlogCard } from "@/components/pages/blogs/BlogCard";
import { BLOGS_DATA, getBlogBySlug } from "@/content/blogsData";
import type { Metadata } from "next"; 

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | SRD Foundation",
    };
  }

  return {
    title: `${blog.title} | SRD Foundation`,
    description: blog.content?.[0]?.slice(0, 150),

    openGraph: {
      title: blog.title,
      description: blog.content?.[0]?.slice(0, 150),
      url: `https://yourdomain.com/blogs/${blog.slug}`,
      siteName: "SRD Foundation",
      images: blog.image
        ? [
            {
              url: blog.image,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content?.[0]?.slice(0, 150),
      images: blog.image ? [blog.image] : [],
    },

    alternates: {
      canonical: `https://yourdomain.com/blogs/${blog.slug}`,
    },
  };
}
interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOGS_DATA.filter((item) => item.slug !== blog.slug).slice(0, 3);

  return (
    <div className="space-y-8 md:space-y-10">
      <article className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface)]">
        <div className="p-6 sm:p-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--brand-primary)]"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl">
            {blog.title}
          </h1>
        </div>

        {blog.image ? (
          <div className="relative h-64 w-full sm:h-80">
            <Image src={blog.image} alt={blog.title} fill sizes="100vw" className="object-cover" priority />
          </div>
        ) : null}

        <div className="space-y-5 p-6 sm:p-8">
          {blog.content.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {relatedBlogs.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Related Blogs</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((item, index) => (
              <div key={item.slug} data-aos="fade-up" data-aos-delay={index * 100}>
                <BlogCard blog={item} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}