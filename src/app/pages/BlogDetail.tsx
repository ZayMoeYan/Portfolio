import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { blogs } from "../data/content";
import { Button } from "../components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

export function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-3xl text-black">Article Not Found</h1>
          <Link to="/blogs">
            <Button className="rounded-full">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/blogs">
          <Button variant="ghost" className="-ml-4 text-[#0046FF] hover:text-black">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8 inline-flex rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-[#0046FF]">
              {blog.category}
          </div>

          <h1 className="mb-6 text-4xl leading-tight tracking-tight text-black sm:text-5xl">
            {blog.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-black/60">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <Button
            onClick={handleShare}
            variant="outline"
            className="mb-12 rounded-full"
          >
            <Share2 size={18} className="mr-2" />
            Share Article
          </Button>

          {/* Article Content */}
          <div
            className="article-content max-w-none rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-10"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-black/10 pt-16">
          <h3 className="mb-8 text-2xl tracking-tight text-black">More Articles</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.id !== blog.id)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.id}`}
                  className="group rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#0046FF]">{relatedBlog.category}</div>
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-black">{relatedBlog.title}</h4>
                  <p className="text-sm leading-relaxed text-black/70">{relatedBlog.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <style>{`
        .article-content h1,
        .article-content h2,
        .article-content h3 {
          color: #000000;
          font-weight: 600;
          line-height: 1.2;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .article-content h1 {
          font-size: 2.25rem;
        }

        .article-content h2 {
          font-size: 1.75rem;
        }

        .article-content h3 {
          font-size: 1.4rem;
        }

        .article-content p,
        .article-content li {
          color: rgba(0, 0, 0, 0.72);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .article-content a {
          color: #0046FF;
          text-decoration: underline;
          text-underline-offset: 0.2em;
        }

        .article-content img {
          border-radius: 1.5rem;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
}
