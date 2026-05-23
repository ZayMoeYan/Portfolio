import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { blogs } from "../data/content";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

export function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl text-[#000000] mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-[#0046FF] max-w-3xl mx-auto leading-relaxed mb-8">
              Expert advice, educational content, and the latest updates in plastic surgery.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0046FF]" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-[#ffffff] border-[#0046FF]/30 text-[#000000] placeholder:text-[#0046FF] py-6"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#0046FF] text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blogs/${blog.id}`}>
                    <Card className="bg-[#ffffff] border-[#0046FF]/20 p-8 hover:bg-black/10 transition-all duration-300 hover:scale-105 h-full group">
                      <div className="flex items-center gap-3 text-sm text-[#0046FF] mb-4">
                        <span className="bg-[#ffffff] px-3 py-1 rounded-full">{blog.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl text-[#000000] mb-4 group-hover:text-[#0046FF] transition-colors">
                        {blog.title}
                      </h2>

                      <p className="text-[#0046FF] mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center text-[#0046FF] group-hover:text-[#000000] transition-colors">
                        Read Full Article
                        <ArrowRight size={18} className="ml-2" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
