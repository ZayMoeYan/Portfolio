import { motion } from "motion/react";
import { reviews } from "../data/content";
import { Card } from "../components/ui/card";
import { Star } from "lucide-react";
import { ReviewsCarousel } from "../components/ReviewsCarousel";

export function Reviews() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl text-[#e0e1dd] mb-6">
              Patient Reviews
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied patients about their experience and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-4">All Reviews</h2>
            <p className="text-[#778da9]">
              Real experiences from real patients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? "fill-[#778da9] text-[#778da9]" : "text-[#778da9]/30"}
                      />
                    ))}
                  </div>

                  <p className="text-[#e0e1dd] mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#778da9]/20">
                    <p className="text-[#e0e1dd] font-medium">{review.name}</p>
                    <p className="text-[#778da9] text-sm">{review.procedure}</p>
                    <p className="text-[#778da9] text-xs mt-1">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-12">
              <div className="text-6xl text-[#e0e1dd] mb-4">5.0</div>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-[#778da9] text-[#778da9]" />
                ))}
              </div>
              <p className="text-[#778da9] text-lg">
                Based on {reviews.length} verified patient reviews
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
