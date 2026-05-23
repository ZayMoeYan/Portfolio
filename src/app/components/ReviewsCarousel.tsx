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
          color: #0046FF;
          font-size: 8px;
        }
        .slick-dots li.slick-active button:before {
          color: #000000;
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-3">
            <Card className="bg-[#ffffff] border-[#0046FF]/20 p-6 h-full">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-[#0046FF] text-[#0046FF]" : "text-[#0046FF]/30"}
                  />
                ))}
              </div>
              <p className="text-[#000000] mb-4 leading-relaxed line-clamp-4">
                "{review.comment}"
              </p>
              <div className="mt-auto">
                <p className="text-[#000000] font-medium">{review.name}</p>
                <p className="text-[#0046FF] text-sm">{review.procedure}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#0046FF] hover:bg-[#0046FF] text-[#000000] rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#0046FF] hover:bg-[#0046FF] text-[#000000] rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}