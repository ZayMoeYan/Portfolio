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
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#0d1b2a]">
        <div className="text-center">
          <h1 className="text-3xl text-[#e0e1dd] mb-4">Article Not Found</h1>
          <Link to="/blogs">
            <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd]">
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
    <div className="min-h-screen pt-20 bg-[#0d1b2a]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/blogs">
          <Button variant="ghost" className="text-[#778da9] hover:text-[#e0e1dd] -ml-4">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <span className="bg-[#415a77] text-[#e0e1dd] px-4 py-2 rounded-full text-sm">
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl text-[#e0e1dd] mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-[#778da9] mb-8">
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
            className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 mb-12"
          >
            <Share2 size={18} className="mr-2" />
            Share Article
          </Button>

          {/* Article Content */}
          <div 
            className="prose prose-invert max-w-none"
            style={{
              color: '#778da9',
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t border-[#415a77]/30">
          <h3 className="text-2xl text-[#e0e1dd] mb-8">More Articles</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.id !== blog.id)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.id}`}
                  className="bg-[#415a77]/50 border border-[#778da9]/20 rounded-lg p-6 hover:bg-[#415a77] transition-all duration-300 hover:scale-105"
                >
                  <div className="text-sm text-[#778da9] mb-3">{relatedBlog.category}</div>
                  <h4 className="text-xl text-[#e0e1dd] mb-3">{relatedBlog.title}</h4>
                  <p className="text-[#778da9] text-sm">{relatedBlog.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <style>{`
        .prose-invert h3 {
          color: #e0e1dd;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose-invert p {
          color: #778da9;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
}
