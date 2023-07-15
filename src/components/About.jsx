import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        "Hello, I'm Sufiyan Khan, a passionate full stack developer specializing in HTML, CSS, JavaScript, and ReactJS. With a keen eye for detail and a love for clean and efficient code, I strive to create engaging and user-friendly web experiences. My journey as a developer began with a fascination for front-end development, where I honed my skills in HTML, CSS, and JavaScript to bring beautiful designs to life. As I delved deeper into the world of web development, I discovered the power of ReactJS and its ability to build scalable and interactive applications. This propelled me to become a proficient ReactJS developer, allowing me to create dynamic and responsive websites.

With a strong foundation in both front-end and back-end technologies, I enjoy the challenge of seamlessly integrating different components to deliver robust and efficient solutions. I believe in continuously expanding my knowledge and staying up-to-date with the latest industry trends to provide innovative solutions to complex problems.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and immersing myself in the vibrant developer community. I am always excited to collaborate and work with like-minded individuals to create exceptional digital experiences.


        </p>

        <br />

        <p className="text-xl">
        If you have a project in mind or just want to connect, feel free to reach out. Let's turn your ideas into reality!"

Feel free to personalize and modify it according to your preferences and experiences. Good luck with your about section!
        </p>
      </div>
    </div>
  );
};

export default About;