import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "AI Engineer at Google",
    review: "The curriculum is incredibly comprehensive. I went from knowing basic Python to building complex RAG systems in just 6 months. The mentors are top-notch!",
    image: "https://picsum.photos/seed/alex/100/100",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist at Microsoft",
    review: "The placement assistance was a game-changer for me. They helped me refine my resume and prepared me for tough technical interviews. Highly recommended!",
    image: "https://picsum.photos/seed/priya/100/100",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "ML Engineer at Tesla",
    review: "Hands-on projects are the best part of this course. Working on real-world datasets gave me the confidence to handle any AI challenge in my professional career.",
    image: "https://picsum.photos/seed/david/100/100",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-lg text-slate-600">
            Hear from our alumni who have successfully transitioned into AI roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0 text-center">
                      <div className="mb-8 flex justify-center">
                        <div className="relative">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-24 h-24 rounded-full border-4 border-blue-50 shadow-xl"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full shadow-lg">
                            <Quote className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-2xl font-medium text-slate-800 italic leading-relaxed mb-8">
                        "{t.review}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
                        <p className="text-blue-600 font-medium">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 h-12 w-12 border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600" />
            <CarouselNext className="-right-12 h-12 w-12 border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
