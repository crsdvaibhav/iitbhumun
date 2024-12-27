import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialCard = ({ data }) => {
  return (
    <Card className="bg-teal-50 border-none h-full">
      <CardHeader>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star size={16} key={index} color="red" />
          ))}
        </div>
        <div className="flex flex-col items-start">
          <span>{data.name}</span>
          <span className="text-xs font-light">{data.designation}</span>
        </div>
      </CardHeader>
      <CardContent className="">
        <p className="text-sm font-extralight">{data.review}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
