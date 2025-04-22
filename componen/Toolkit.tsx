import React from "react";

interface TechLogoProps {
  name: string;
  imgSrc: string;
}

class TechLogo extends React.Component<TechLogoProps> {
  render() {
    const { name, imgSrc } = this.props;

    return (
      <div className="flex flex-col items-center group relative">
        <div
          className={`w-36 h-36 md:w-40 md:h-40 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105 `}
        >
          <img
            src={imgSrc}
            alt={name}
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </div>
      </div>
      
    );
  }
}

class Toolkit extends React.Component {
  technologies = [
    { name: "React", imgSrc: "/image/skills/react.webp" },
    { name: "svelte", imgSrc: "/image/skills/svelte.webp" },
    { name: "TypeScript", imgSrc: "/image/skills/typescript.webp" },
    { name: "Accessibility", imgSrc: "/image/skills/a11y.webp" },
    { name: "Node.js", imgSrc: "/image/skills/node-js.webp" },
    { name: "Next.js", imgSrc: "/image/skills/next-js.webp" },
    { name: "GraphQL", imgSrc: "/image/skills/graphql.webp" },
    { name: "Git", imgSrc: "/image/skills/git.webp" },
    { name: "CSS3", imgSrc: "/image/skills/html.webp" },
    { name: "JavaScript", imgSrc: "/image/skills/js.webp" },
  ];

  render() {
    return (
      <div className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-14">
            {this.technologies.map((tech, index) => (
              <TechLogo
                key={index}
                name={tech.name}
                imgSrc={tech.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Toolkit;
