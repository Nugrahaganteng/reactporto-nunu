import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export default function Testimonials() {
  const [testimonials] = useState([
    {
      id: 1,
      quote: "Working with Syed was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution.",
      name: "Harris Kareem",
      position: "Developer @Outlets",
      avatar: "/image/testimonials/rich-harris.png"
    },
    {
      id: 2,
      quote: "Syed is a fantastic UI/UX designer and developer with a keen sense for marketing, and lead generation. He's the only designer I know who also has a deep understanding for code and front-end development.",
      name: "Andrew Mead",
      position: "Chief Scientist @Logos",
      avatar: "/image/testimonials/frank-mcsherry.webp"
    },
    {
      id: 3,
      quote: "Talented artist, experienced with various media and can make any project you are working on look good. He is easy to work with and is a self starter. I would work with Syed again.",
      name: "Brian Hirsh",
      position: "Head @Zero-in",
      avatar: "/image/testimonials/brian-hirsh.png"
    },
    {
      id: 4,
      quote: "Syed is a true professional with amazing talent. He is a creative thinker, has his finger on the pulse of whats to come, and absolutely one of the quickest and best problem solvers I have ever met.",
      name: "Adam Argalye",
      position: "SWE @Google",
      avatar: "/image/testimonials/adam.png"
    },
    {
      id: 5,
      quote: "Syed is one of my favourite people to work with. He's my go-to colleague when trouble shooting any new technique or technology because she understands how to tackle unknown problems with gumption.",
      name: "Val Head",
      position: "CEO @Engines",
      avatar: "/image/testimonials/val-head.png"
    },
    {
      id: 6,
      quote: "Syed is a talented artist. He is very experienced with various media and can make any project you are working on look good. He is easy to work with and is a self starter. I would work with Syed again.",
      name: "Gary Simon",
      position: "A11y Advocate @W3C",
      avatar: "/image/testimonials/tim-satterwhite.webp"
    }
  ]);

  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div 
      className="border-t border-gray-800 dark:border-gray-800 pt-8 pb-10 px-4 h-full flex flex-col justify-between bg-gradient-to-br from-gray-50 to-gray-100 dark:from-transparent dark:to-transparent rounded-lg shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="text-gray-700 dark:text-[#989793] mb-6 flex-grow">
        {testimonial.quote}
      </p>
      
      <motion.div 
        className="flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200 dark:border-gray-700"
        >
          <img 
            src={testimonial.avatar} 
            alt={`${testimonial.name}'s profile`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 dark:text-[#989793]">{testimonial.position}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}