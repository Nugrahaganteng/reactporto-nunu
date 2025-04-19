// components/SelectedWork.js
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

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
            image: "/image/Selected-my-Work/geoporto1.jpeg",
            link: "#",
        }
    ];

    const ProjectCard = ({ project, isReversed = false }) => {
        return (
            <div className={`grid md:grid-cols-2 gap-12 mb-32 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex flex-col justify-center w-4/6">
                    <h3 className=" font-semibold text-white mb-4 text-4xl">{project.title}</h3>
                    <p className="text-[#757575] mb-6 text-xl font-normal">
                        {project.description}
                    </p>
                    <ul className="text-[#757575]  mb-8 text-2xl font-thin">
                        {project.technologies.map((tech, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-4">•</span>
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4 ">
                        <Link
                            href={project.link}
                            className="text-white py-3 font-semibold relative group border-b-gray-500 border-b-2"
                        >
                            <span className="relative z-10">
                                Explore this project
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                        </Link>
                        <FaGithub className="text-gray-400 text-3xl" />
                    </div>

                </div>
                <div className={`${isReversed ? 'md:order-first' : ''}`}>
                    <div className="relative w-full pt-[97%] overflow-hidden rounded">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="absolute inset-0 object-cover object-top w-full h-full transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
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
