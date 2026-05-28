import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Madhusudhan',
    location: 'HOD, Andhra University',
    rating: 5,
    review:
      'TARAK CONSTRUCTIONS has delivered outstanding work with exceptional precision and professionalism. The structural quality, finishing standards, and timely execution reflect true engineering excellence. I highly recommend them for any residential or commercial construction project.',
  },
  {
    name: 'Vasupalli Ashok & Satya Garu',
    location: 'Mangamaripeta',
    rating: 5,
    review:
      'My dream house construction was completed perfectly by TARAK CONSTRUCTIONS. Strong structure, neat finishing, and budget-friendly execution.',
  },
  {
    name: 'Satish Chandrashekhar Sharma Garu',
    location: 'Ramadri',
    rating: 5,
    review:
      'We had a great experience with TARAK CONSTRUCTIONS. Their team maintained quality, transparency, and proper communication throughout the project. Highly recommended for residential construction.',
  },
  {
    name: 'Dumpala Ratnakar Garu',
    location: 'Timmapuram',
    rating: 5,
    review:
      'Trusted builder with quality work and good finishing. Very satisfied with TARAK CONSTRUCTIONS.',
  },
  {
    name: 'Bade Kodanda Garu',
    location: 'Rushikonda',
    rating: 5,
    review:
      'TARAK CONSTRUCTIONS work is excellent. Quality, finishing, and planning are superb. They completed the work on time. A truly trusted construction team.',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = testimonials.length;

  const go = (dir: 1 | -1) => {
    if (isAnimating) return;

    setIsAnimating(true);

    setCurrent((prev) => (prev + dir + total) % total);

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal')
              .forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      go(1);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className="section-subtitle">Client Testimonials</p>

          <h2 className="section-title mb-5">
            What Our Clients{' '}
            <span className="text-orange-500">Say About Us</span>
          </h2>

          <p
            className="text-gray-500 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Real feedback from our trusted clients across Visakhapatnam.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-14 reveal">
          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              4.9
            </div>

            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>

            <div className="text-sm text-gray-500 mt-2">
              Average Rating
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-200" />

          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              100+
            </div>

            <div className="text-sm text-gray-500 mt-2">
              Happy Clients
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-200" />

          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              98%
            </div>

            <div className="text-sm text-gray-500 mt-2">
              Satisfaction Rate
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto reveal">
          <div
            className={`bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
              isAnimating ? 'opacity-70 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Icon */}
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
              <Quote className="w-7 h-7 text-orange-500" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-400 text-orange-400"
                />
              ))}
            </div>

            {/* Review */}
            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              "{testimonials[current].review}"
            </p>

            {/* Client */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              {/* Empty Profile Image Slot */}
              <div className="w-14 h-14 rounded-full border-2 border-orange-100 bg-orange-50 flex items-center justify-center overflow-hidden">
                {/* Add client image here later */}

                {/* Example:
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
                */}
              </div>

              <div>
                <h4
                  className="font-semibold text-gray-900 text-base md:text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {testimonials[current].name}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-7 h-2 bg-orange-500'
                      : 'w-2 h-2 bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}