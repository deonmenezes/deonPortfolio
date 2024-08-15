'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Hundred Python Projects",
      description: "Completed 100 Python projects involving Machine Learning and various other technologies.",
      image: "/images/python-projects.jpg",
      link: "https://github.com/deonmenezes/Python-Projects"
    },
    {
      id: 2,
      title: "E-commerce Bakery Website",
      description: "Developed a full-stack e-commerce website for a local bakery.",
      image: "/images/bakery-website.jpg",
      link: "/projects/bakery-website"
    },
    {
      id: 3,
      title: "Pet Social Network",
      description: "Created a social networking platform for pet owners.",
      image: "/images/pet-social.jpg",
      link: "/projects/pet-social"
    },
    // Add more projects as needed
  ];
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gold">
      {/* Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg z-50"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl font-bold text-gold">Deon Menezes</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            {["About", "Resume", "Projects", "Contact"].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-300 transition duration-300"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center min-h-screen bg-black text-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.h2 
          className="text-6xl font-extrabold text-gold mb-4"
          variants={slideIn}
        >
          Welcome to My Portfolio
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl"
          variants={slideIn}
        >
          Discover my projects, skills, and achievements in full stack development, VR simulations, and machine learning.
        </motion.p>
        <motion.button 
          className="px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gray-300 transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="p-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-4xl font-bold text-gold mb-8 text-center">
          About Me
        </h3>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
          I'm Deon Menezes, a passionate developer with experience in full stack web development, VR simulations, and machine learning. 
          My journey spans a variety of technologies including C++, Java, Python, Unity, Unreal Engine, React, NodeJS, MongoDB, and blockchain development. 
          I thrive on challenges and am constantly expanding my skillset to stay at the forefront of technology.
        </p>
      </motion.section>
      {/* Entrepreneurial Venture Section */}
      <motion.section 
  id="entrepreneurial-venture" 
  className="p-12 bg-gradient-to-r from-black to-gray-900"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
>
  <h3 className="text-4xl font-bold text-gold mb-8 text-center">
    Entrepreneurial Venture
  </h3>
  <motion.div 
    className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl hover:shadow-gold transition duration-300"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex justify-between items-center mb-4">
  <h4 className="text-3xl font-bold text-gold">Team Vision</h4>
  <Link href="https://visionkjsce-2vh2nhudu-deonmenezes-projects.vercel.app/" passHref>
    <motion.a 
      className="inline-block px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Website
    </motion.a>
  </Link>
</div>

    <p className="text-xl text-gray-300 mb-6">
      Founder & CEO | Innovating in AR/VR Technologies
    </p>
    <p className="text-lg text-gray-300 mb-6">
      Team Vision is a cutting-edge company I founded, specializing in software and hardware development for AR/VR technologies. Our mission is to push the boundaries of immersive experiences and create innovative solutions for various industries.
    </p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Developing custom AR/VR applications for education, healthcare, and entertainment sectors</li>
      <li>Leading a team of skilled developers, designers, and hardware engineers</li>
      <li>Collaborating with industry partners to integrate AR/VR solutions</li>
      <li>Spearheading research in emerging AR/VR technologies</li>
      <li>Securing funding and establishing strategic partnerships</li>
    </ul>
  </motion.div>
</motion.section>
      {/* Resume Section */}
      <motion.section 
        id="resume" 
        className="p-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-4xl font-bold text-gold mb-8 text-center">
          Resume
        </h3>
        
        <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-12">
          
          {/* Education */}
          <motion.div variants={slideIn}>
            <h4 className="text-2xl font-semibold text-gold mb-4">Education</h4>
            <div className="space-y-4">
              {[
                { school: "K.J. Somaiya College of Engineering, India", details: "Branch | CGPA: 9 (2022-2026)" },
                { school: "S.M. Shetty, Powai, India", details: "AISSCE (Class XII), 2022" },
                { school: "Pawar Public School, Bhandup, India", details: "AISSE (Class X), 2020" }
              ].map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h5 className="text-xl font-bold text-gold">{edu.school}</h5>
                  <p>{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={slideIn}>
            <h4 className="text-2xl font-semibold text-gold mb-4">Skills</h4>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>C++ | C | Java | Python | Machine Learning | Unity | Unreal Engine 5 | HTML | CSS | JavaScript | NodeJS | React | MongoDB | Blockchain | Solidity | MySQL | Git</p>
            </div>
          </motion.div>

          {/* Work Experience */}
          {/* Work Experience */}
<motion.div variants={slideIn}>
  <h4 className="text-2xl font-semibold text-gold mb-4">Work Experience</h4>
  <div className="space-y-4">
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h5 className="text-xl font-bold text-gold">Full Stack Developer at Fryt X</h5>
      <p className="italic text-gray-400">June '23 - Dec '23</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Designed and developed dynamic web applications using HTML, CSS, JavaScript, NodeJS, React, and MongoDB.</li>
        <li>Implemented responsive and user-friendly interfaces.</li>
        <li>Collaborated with cross-functional teams to gather requirements, define project scopes, and deliver solutions on time and within budget.</li>
        <li>Contributed to the architecture and database design, optimizing performance and scalability.</li>
        <li>Conducted thorough testing and debugging to ensure robustness and reliability of web applications.</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h5 className="text-xl font-bold text-gold">VR Development Intern (College)</h5>
      <p className="italic text-gray-400">Jan '24 - Present</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Led a team in developing VR simulations using Unity and Unreal Engine.</li>
        <li>Utilized Blender for 3D modeling and asset creation in VR projects.</li>
        <li>Demonstrated proficiency in C# scripting within the Unity environment.</li>
        <li>Gained hands-on experience with Unreal Engine's Blueprint visual scripting system.</li>
        <li>Successfully completed a Mega Project Crane Simulation, accumulating 400 hours of experience.</li>
        <li>Collaborated with interdisciplinary teams to create immersive and interactive VR experiences.</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h5 className="text-xl font-bold text-gold">Machine Learning Intern (College)</h5>
      <p className="italic text-gray-400">Oct '23</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Engaged in practical applications of Machine Learning using R.</li>
        <li>Developed a Skin Disease detection system using Machine Learning techniques.</li>
        <li>Analyzed and preprocessed large datasets for model training and evaluation.</li>
        <li>Collaborated with medical professionals to ensure accuracy and relevance of the detection system.</li>
      </ul>
    </motion.div>
  </div>
</motion.div>
          {/* Projects */}
          <motion.section 
        id="projects" 
        className="p-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-4xl font-bold text-gold mb-8 text-center">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gold mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link href={project.link} passHref>
                  <motion.a 
                    className="inline-block px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

          {/* ... (Add other sections like Extracurricular Achievements and Positions of Responsibility) */}

        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
  id="contact" 
  className="p-12 bg-gradient-to-b from-black to-gray-900 text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
>
  <h3 className="text-4xl font-bold text-gold mb-8 text-center">
    Get In Touch
  </h3>
  <p className="max-w-2xl mx-auto text-center text-lg mb-12 text-gray-400">
    Have a question or want to work together? Feel free to reach out!
  </p>
  <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-semibold text-gray-300 mb-2">Your Name</label>
      <input 
        type="text" 
        id="name" 
        className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none"
        placeholder="Enter your name"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-semibold text-gray-300 mb-2">Your Email</label>
      <input 
        type="email" 
        id="email" 
        className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none"
        placeholder="Enter your email"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="message" className="text-sm font-semibold text-gray-300 mb-2">Your Message</label>
      <textarea 
        id="message" 
        className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none h-32"
        placeholder="Enter your message"
      />
    </div>
    <motion.button 
      className="w-full py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Send Message
    </motion.button>
  </form>
</motion.section>


      {/* Footer */}
      <footer className="p-6 bg-black text-center text-gray-300">
        <p>&copy; 2024 Deon Menezes. All rights reserved.</p>
      </footer>
    </div>
  );
}