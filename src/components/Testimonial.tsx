import React from "react";

const testimonials = [
  {
    quote:"Transcend Business Consultancy transformed our business. Their expert guidance and strategic insights were instrumental in securing our first round of funding. We couldn't have done it without them." ,
    name: "Rohit Verma",
    role: "CEO of Startup India Solutions",
    image: "https://pbs.twimg.com/profile_images/1609760305763975170/Tx2TVkPI_400x400.jpg",
  },
  {
    quote: "Thanks to Transcend, we were able to streamline our operations and scale our business rapidly. Their team is knowledgeable, professional, and always ready to help." ,
    name: "Priya Menon",
    role: "Founder of Tech Innovators Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:"The comprehensive support provided by Transcend Business Consultancy was crucial to our success. From company registration to growth strategy, they were with us every step of the way.",
    name: "Akash Patel",
    role: "Co-Founder of Green Ventures",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div id="testimonials"
    className="p-6 bg-gray-100 rounded-lg overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
              <blockquote className="mt-4 text-xl leading-9 font-medium text-gray-900">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <footer className="mt-8 flex flex-col items-center">
                <img
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-16 w-16 rounded-full"
                  src={testimonial.image}
                />
                <div className="mt-4">
                  <div className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
