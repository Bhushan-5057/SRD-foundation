import { HeroSection } from "@/components/common/HeroSection";
import { Metadata } from "next";
import { BlogCard } from "@/components/pages/blogs/BlogCard";
import { BLOGS_DATA } from "@/content/blogsData";
import BlogImage1 from "../../../public/assets/community2.jpg";
import BlogImage2 from "../../../public/assets/homepage/volunteers.jpg";
import BlogImage3 from "../../../public/assets/community.jpg";
import BlogImage4 from "../../../public/assets/seniors.jpg"; 

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore stories, insights, and community knowledge from SRD Foundation on supporting newcomers, seniors, and inclusive community building.",
};

export default function BlogsPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Blogs"
        title="Insights from the ground: stories, ideas, and community learning"
        highlightText="community"
        description="Read practical perspectives from SRD Foundation on newcomer support, seniors care, early learning, and inclusive community building."
        primaryAction={{ href: "/services", label: "Explore Services" }}
        secondaryAction={{ href: "/contact", label: "Connect With Us" }}
        tags={["Stories", "Guidance", "Community"]}
        imageSlots={[
          { src: BlogImage1, alt: "Volunteer support story" },
          { src: BlogImage2, alt: "Community event moment" },
          { src: BlogImage3, alt: "Family support in action" },
          { src: BlogImage4, alt: "Seniors care and connection" },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">All Blogs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS_DATA.map((blog, index) => (
            <div key={blog.slug} data-aos="fade-up" data-aos-delay={index * 100}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
