// components/SelectedWork.js
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SelectedWork() {
    const projects = [
        {
            id: 1,
            title: "APP jaki clone",
            description: "Video ini menjelaskan tentang pembuatan remake dari aplikasi jaki clone pemesanan digital",
            technologies: ["react native", "libray", "expo router", "(twrnc)", "Icons", "android studio", "ScrollView"],
            video: "/video/clone.mp4",
            link: "#",
            isVideo: true
        },
        {
            id: 2,
            title: "Website Hotel",
            description: "Website ini berfungsi untuk anda memesan tiket untuk menginap di hotel impian anda.",
            technologies: ["PHP", "HTML", "MySQL", "Button", "Card", "Flex", "CRUD", "Bootstrap", "XAMPP"],
            image: "/image/Selected-my-Work/geoporto3.png",
            link: "https://github.com/Nugrahaganteng/web-hotel",
            isVideo: false
        },
        {
            id: 3,
            title: "Website Travel",
            description: "Website ini untuk memesan tiket liburan dan menampilkan destinasi terbaik dan kuliner.",
            technologies: ["Grid", "Slide", "Form", "Navbar", "AOS", "Bootstrap", "HTML", "CSS"],
            image: "/image/Selected-my-Work/geoporto5.png",
            link: "#",
            isVideo: false
        },
        {
            id: 4,
            title: "Website Pernikahan",
            description: "Website ini untuk pasangan yang ingin membuat undangan digital.",
            technologies: ["Grid", "Form", "Navbar", "Flex", "Time", "Date", "HTML", "Bootstrap"],
            image: "/image/Selected-my-Work/geoporto6.png",
            link: "https://github.com/Nugrahaganteng/undangan",
            isVideo: false
        }
    ];

    const ProjectCard = ({ project, isReversed = false }) => {
        return (
            <div className={`grid md:grid-cols-2 items-center gap-10 mb-28`}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full space-y-6`}
                >
                    <motion.h3   /* ini untuk judul yang subjudul atau paling atas */
                  
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-extrabold text-[#414141] dark:text-white text-3xl md:text-4xl"  
                    >    
                   
                        {project.title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[#757575] text-lg md:text-xl font-medium"
                    >
                        {project.description}
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-[#757575] text-xl md:text-2xl font-semibold space-y-1"
                    >
                        {project.technologies.map((tech, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start"
                            >
                                <span className="mr-2">•</span>
                                <span>{tech}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        <Link
                            href={project.link}
                            className="text-white font-semibold relative group"
                        >
                            <span className="relative z-10 text-[#414141] dark:text-white">
                                Explore this project
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#414141] dark:bg-white transition-all group-hover:w-full"></span>
                        </Link>
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaGithub className="dark:text-gray-400 text-[#414141] text-3xl" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl shadow-black">
                        {project.isVideo ? (
                            <video
                                className="w-full h-full object-contain rounded-lg"
                                controls
                                autoPlay
                                muted
                                loop
                            >
                                 <source src="./image/vidio/clone.mp4" type="video/mp4" />    
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top"
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        );
    };

    return (
        <section className="py-20 px-6 md:px-16 max-w-screen-xl mx-auto" id="work">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    isReversed={index % 2 === 1}
                />
            ))}
        </section>
    );
}
