import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';
import content from '../../data/data.json';

const TestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="py-2">
        {content.testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <TestimonialCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;
