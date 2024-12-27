import TestimonialCarousel from './testimonial-carousel';

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10 ">
      <div className="flex-col items-start justify-center space-y-5">
        <h2 className="text-4xl font-bold capitalize">Testimonials</h2>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
