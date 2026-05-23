import { motion } from "motion/react";
import { reviews } from "../data/content";
import { Card } from "../components/ui/card";
import { Star } from "lucide-react";
import { ReviewsCarousel } from "../components/ReviewsCarousel";

export function Reviews() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#0046FF]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Patient stories</p>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-black mb-6">
              Patient Reviews
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-black/70">
              Hear from our satisfied patients about their experience and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 bg-black/10 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Verified feedback</p>
            <h2 className="mb-4 text-3xl tracking-tight text-black">All Reviews</h2>
            <p className="text-black/75">
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
                <Card className="h-full border border-white/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? "fill-[#0046FF] text-[#0046FF]" : "text-black/20"}
                      />
                    ))}
                  </div>

                  <p className="mb-6 leading-relaxed text-black/75">
                    "{review.comment}"
                  </p>

                  <div className="mt-auto border-t border-black/10 pt-4">
                    <p className="font-medium text-black">{review.name}</p>
                    <p className="text-sm text-[#0046FF]">{review.procedure}</p>
                    <p className="mt-1 text-xs text-black/50">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border border-black/10 bg-black/60 p-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div className="mb-4 text-6xl text-white">5.0</div>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-[#0046FF] text-[#0046FF]" />
                ))}
              </div>
              <p className="text-lg text-white/75">
                Based on {reviews.length} verified patient reviews
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
