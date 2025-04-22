// components/SelectedWork.js
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import {motion} from 'framer-motion';
export default function SelectedWork() {
    const projects = [
        {
            id: 1,
            title: "food and health",
            description: "web ini menjelaskan tentang pemesanan makanan digital agar mudah dan simple.",
            technologies: ["html", "css", "button", "card", "flex", "icon", "image"],
            image: "/image/Selected-my-Work/geoporto1.jpeg",
            link: "#",
        },
        {
            id: 2,
            title: "website hotel",
            description: "Website ini berfungsi untuk anda memesan tiket untuk anda beristirahat atau menginap di hotel impian anda.",
            technologies: ["php", "html", "mysql", "button", "card", "flex", "icon", "image", "crud", "bootstrap", "xampp"],
            image: "/image/Selected-my-Work/geoporto3.png",
            link: "#",
        },
        {
            id: 3,
            title: "website travel",
            description: "Website ini untuk mmemesan anda tiket liburan terbaik anda dan menampilkan destinasi terbaik di daerah tersebut dan kuliner",
            technologies: ["grid", "slide", "form", "navbar", "flex", "aos", "bootstrap", "html", "css"],
            image: "/image/Selected-my-Work/geoporto5.png",
            link: "#",
        },
        {
            id: 4,
            title: "website pernikahan",
            description: "Website ini untuk pernikahan antara dua pasangn yang ingin membuat undangan dalam bentuk digital",
            technologies: ["grid", "slide", "form", "navbar", "flex", "aos", "bootstrap", "html", "time", "date"],
            image: "/image/Selected-my-Work/geoporto6.png",
            link: "#",
        }
    ];

    const ProjectCard = ({ project, isReversed = false }) => {
        return (
            <div className={`grid md:grid-cols-2 gap-12 mb-32 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center w-full md:w-4/6"
                >
                    <motion.h3 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-semibold text-[#414141] dark:text-white mb-4 text-3xl md:text-4xl"
                    >
                        {project.title}
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[#757575] mb-6 text-lg md:text-xl font-normal"
                    >
                        {project.description}
                    </motion.p>
                    <motion.ul 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-[#757575] mb-8 text-xl md:text-2xl font-thin"
                    >
                        {project.technologies.map((tech, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                className="flex items-start"
                            >
                                <span className="mr-4">•</span>
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
                            className="text-white py-3 font-semibold relative group border-b-gray-500 border-b-2"
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${isReversed ? 'md:order-first' : ''}`}
                >
                    <div className="relative w-full pt-[97%] overflow-hidden rounded shadow-2xl shadow-black">
                        <motion.div
                            // whileHover={{ scale: 1.05 }}
                            // transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="absolute inset-0 object-cover object-top w-full h-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        );
    };

    return (
        <section className=" py-20" id="work">

            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    isReversed={false}
                />
            ))}

        </section>
    );
}
