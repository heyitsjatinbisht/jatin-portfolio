import React from "react";

const About = () => {
  return (
    <div
      className="bg-black text-white max-w-[1200px] mx-auto my-12"
      id="about"
    >
      <div className="mt-4 md:mt-0 text-left flex flex-col py-6 md:py-0">
        <div className="my-auto mx-6">
          <h2 className="text-4xl font-bold mb-4 primary">About Me</h2>

          <p className="text-base lg:text-lg mb-4">
            I'm{" "}
            <span className="text-yellow-400 font-semibold">Jatin Bisht</span>,
            a dedicated{" "}
            <span className="font-semibold text-green-400">
              full-stack developer
            </span>{" "}
            with a strong commitment to creating innovative, user-friendly
            applications. I recently completed my{" "}
            <span className="font-semibold text-blue-400">
              Master's in Computer Applications (MCA)
            </span>{" "}
            from Dr. A.P.J. Abdul Kalam Technical University (AKTU), where I
            gained a deep understanding of software development, system design,
            and modern web technologies.
          </p>

          <p className="text-base lg:text-lg mb-4">
            Throughout my academic journey and hands-on projects, I have honed
            my skills in key technologies such as{" "}
            <span className="font-semibold text-purple-400">JavaScript</span>,{" "}
            <span className="font-semibold text-indigo-400">TypeScript</span>,{" "}
            <span className="font-semibold text-red-400">React</span>,{" "}
            <span className="font-semibold text-yellow-400">Node.js</span>,{" "}
            <span className="font-semibold text-green-400">Express.js</span>,
            and <span className="font-semibold text-blue-400">MongoDB</span>. I
            thrive on solving complex problems and transforming ideas into
            functional, visually appealing digital solutions. Whether it's
            building responsive front-end interfaces or architecting efficient
            back-end systems, I focus on delivering clean, maintainable code
            that meets both business goals and user needs.
          </p>

          <p className="text-base lg:text-lg mb-4">
            My experience includes working on diverse projects, from real-time
            applications to dynamic web platforms, where I emphasized the
            importance of performance, scalability, and user experience. I am
            particularly passionate about the intersection of technology and
            design, always striving to make applications that are not only
            powerful but also intuitive and enjoyable to use.
          </p>

          <p className="text-base lg:text-lg mb-4">
            Beyond coding, I am committed to continuous learning and
            professional growth. I stay updated with the latest tech trends,
            experiment with new tools and frameworks, and contribute to the
            developer community. My long-term goal is to evolve as a developer,
            taking on more challenging projects, mentoring others, and making a
            meaningful impact in the tech industry.
          </p>

          <p className="text-base lg:text-lg">
            In every project, I bring a blend of technical expertise, creative
            problem-solving, and a passion for innovation. I am excited to
            continue my journey in tech, creating solutions that drive growth
            and enhance digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
