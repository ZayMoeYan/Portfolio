import { useRef } from "react";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <style>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          color: #778da9;
          font-size: 8px;
        }
        .slick-dots li.slick-active button:before {
          color: #e0e1dd;
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-3">
            <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 h-full">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-[#778da9] text-[#778da9]" : "text-[#778da9]/30"}
                  />
                ))}
              </div>
              <p className="text-[#e0e1dd] mb-4 leading-relaxed line-clamp-4">
                "{review.comment}"
              </p>
              <div className="mt-auto">
                <p className="text-[#e0e1dd] font-medium">{review.name}</p>
                <p className="text-[#778da9] text-sm">{review.procedure}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}