import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { BlogPostData } from "@/content/blogsData";

interface BlogCardProps {
  blog: BlogPostData;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {blog.image ? (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">{blog.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{blog.excerpt}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] transition-colors group-hover:text-[var(--brand-secondary)]"
        >
          Read More
          <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
