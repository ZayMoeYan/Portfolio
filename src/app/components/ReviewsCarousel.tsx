import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";

interface Review {
  id: number;
  name: string;
  procedure: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const sliderRef = useRef<Slider>(null);
  const [slideToShowCount, setSlideToShowCount] = useState(1);

  useEffect(() => {
    const updateSlideCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlideToShowCount(3);
      } else if (width >= 768) {
        setSlideToShowCount(2);
      } else {
        setSlideToShowCount(1);
      }
    };

    updateSlideCount();
    window.addEventListener("resize", updateSlideCount);
    return () => window.removeEventListener("resize", updateSlideCount);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShowCount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="relative pb-12">
      <style>{`
        .slick-dots {
          bottom: -35px;
        }

        .slick-dots li button:before {
          color: #0046FF;
          font-size: 8px;
        }

        .slick-dots li.slick-active button:before {
          color: #000000;
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-2 md:px-3">
            <Card className="bg-white border-[#0046FF]/20 p-4 md:p-6 h-full min-h-[260px] flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-[#0046FF] text-[#0046FF]"
                        : "text-[#0046FF]/30"
                    }
                  />
                ))}
              </div>

              <p className="text-black mb-4 leading-relaxed text-sm md:text-base flex-grow line-clamp-5">
                "{review.comment}"
              </p>

              <div>
                <p className="text-black font-medium text-sm md:text-base">
                  {review.name}
                </p>
                <p className="text-[#0046FF] text-xs md:text-sm">
                  {review.procedure}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      {/* Previous Button */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="
          absolute left-2 md:left-0
          top-1/2 -translate-y-1/2
          md:-translate-x-4
          bg-[#0046FF]
          text-white
          rounded-full
          p-2
          md:p-3
          shadow-lg
          z-10
          hover:scale-110
          transition-all
          hidden
          sm:block
        "
        aria-label="Previous"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="
          absolute right-2 md:right-0
          top-1/2 -translate-y-1/2
          md:translate-x-4
          bg-[#0046FF]
          text-white
          rounded-full
          p-2
          md:p-3
          shadow-lg
          z-10
          hover:scale-110
          transition-all
          hidden
          sm:block
        "
        aria-label="Next"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
}