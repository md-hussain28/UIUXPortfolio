// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaFigma, FaLink, FaEye } from "react-icons/fa";

// const FigmaProjectShowcase = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "Comprehensive UX redesign for a modern shopping experience",
//       thumbnail: "/path/to/ecommerce-thumbnail.png",
//       figmaLink: "https://www.figma.com/your-ecommerce-link",
//       tags: ["UX Design", "E-Commerce", "Responsive Design"],
//       details: {
//         duration: "4 weeks",
//         role: "Lead UX Designer",
//         challenges: [
//           "Simplify user navigation",
//           "Improve checkout process",
//           "Create intuitive product filtering",
//         ],
//       },
//     },
//     {
//       id: 2,
//       title: "Health Tracking App",
//       description:
//         "Innovative mobile app design for personal health monitoring",
//       thumbnail: "/path/to/health-app-thumbnail.png",
//       figmaLink: "https://www.figma.com/your-health-app-link",
//       tags: ["Mobile Design", "Healthcare", "Data Visualization"],
//       details: {
//         duration: "6 weeks",
//         role: "Product Designer",
//         challenges: [
//           "Create intuitive health tracking",
//           "Design data-rich dashboards",
//           "Ensure accessibility",
//         ],
//       },
//     },
//     {
//       id: 3,
//       title: "Fintech Dashboard",
//       description: "Complex financial management interface",
//       thumbnail: "/path/to/fintech-thumbnail.png",
//       figmaLink: "https://www.figma.com/your-fintech-link",
//       tags: ["Dashboard", "Finance", "Data Design"],
//       details: {
//         duration: "5 weeks",
//         role: "UI/UX Specialist",
//         challenges: [
//           "Simplify complex financial data",
//           "Create clean, professional interface",
//           "Implement advanced data visualizations",
//         ],
//       },
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto"
//       >
//         <h1 className="text-5xl font-bold mb-12 text-center flex items-center justify-center">
//           <FaFigma className="mr-4" /> My Figma Projects
//         </h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="relative">
//                 <img
//                   src={project.thumbnail}
//                   alt={project.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.figmaLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white bg-opacity-20 p-3 rounded-full"
//                     >
//                       <FaLink className="text-white" />
//                     </a>
//                     <div
//                       onClick={() => setSelectedProject(project)}
//                       className="bg-white bg-opacity-20 p-3 rounded-full"
//                     >
//                       <FaEye className="text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-purple-600 text-xs px-2 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Project Details Modal */}
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
//             onClick={() => setSelectedProject(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto p-8"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <img
//                     src={selectedProject.thumbnail}
//                     alt={selectedProject.title}
//                     className="w-full rounded-2xl mb-6"
//                   />
//                   <div className="flex justify-between">
//                     <a
//                       href={selectedProject.figmaLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center"
//                     >
//                       <FaFigma className="mr-2" /> Open in Figma
//                     </a>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4">
//                     {selectedProject.title}
//                   </h2>
//                   <p className="text-gray-300 mb-6">
//                     {selectedProject.description}
//                   </p>

//                   <div className="bg-gray-700 rounded-2xl p-6">
//                     <h3 className="text-xl font-semibold mb-4">
//                       Project Details
//                     </h3>
//                     <div className="space-y-2">
//                       <p>
//                         <strong>Duration:</strong>{" "}
//                         {selectedProject.details.duration}
//                       </p>
//                       <p>
//                         <strong>Role:</strong> {selectedProject.details.role}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     <h3 className="text-xl font-semibold mb-4">
//                       Key Challenges
//                     </h3>
//                     <ul className="space-y-2">
//                       {selectedProject.details.challenges.map(
//                         (challenge, index) => (
//                           <li
//                             key={index}
//                             className="bg-gray-700 rounded-lg px-4 py-2"
//                           >
//                             {challenge}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default FigmaProjectShowcase;

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFigma,
  FaLink,
  FaExpand,
  FaArrowRight,
  FaLayerGroup,
} from "react-icons/fa";

const FigmaProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Quantum UX Platform",
      description:
        "Revolutionizing digital interaction through immersive design",
      thumbnail: "/path/to/quantum-ux.jpg",
      figmaLink: "https://figma.com/quantum-ux",
      type: "Web Platform",
      color: "from-blue-600 to-purple-700",
      technologies: ["React", "Design Systems", "Interaction Design"],
      detailedDescription: `
        A groundbreaking UX platform that reimagines user interactions 
        through advanced design principles and cutting-edge technology.
      `,
      challenges: [
        "Create seamless cross-platform experience",
        "Develop intuitive navigation",
        "Implement adaptive design patterns",
      ],
      keyFeatures: [
        "Adaptive Interface",
        "Micro-interactions",
        "Contextual Design",
      ],
    },
    // Add more projects with similar structure
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className={`
            relative w-full max-w-5xl bg-gradient-to-br ${selectedProject.color} 
            rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 gap-8 p-8
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Side - Project Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-white text-opacity-80 mb-6">
                {selectedProject.detailedDescription}
              </p>
            </motion.div>

            {/* Challenges Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white bg-opacity-10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaLayerGroup className="mr-3" /> Key Challenges
              </h3>
              <ul className="space-y-2">
                {selectedProject.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-white flex items-center"
                  >
                    <FaArrowRight className="mr-3 text-purple-300" />
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.a
                href={selectedProject.figmaLink}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-800 px-6 py-3 rounded-full flex items-center"
              >
                <FaFigma className="mr-2" /> View in Figma
              </motion.a>
            </div>
          </div>

          {/* Right Side - Project Visualization */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <img
              src={selectedProject.thumbnail}
              alt={selectedProject.title}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">
              <div className="flex justify-between items-center">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white text-sm bg-black bg-opacity-20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold mb-16 text-center"
        >
          Design Odyssey
        </motion.h1>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              className={`
                relative overflow-hidden rounded-3xl 
                bg-gradient-to-br ${project.color} 
                transform transition-all duration-300
                cursor-pointer
              `}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>

              <div className="p-6 relative z-10">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />

                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-white text-opacity-80 mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>

                  <div className="flex space-x-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white bg-opacity-20 p-2 rounded-full"
                    >
                      <FaLink className="text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white bg-opacity-20 p-2 rounded-full"
                    >
                      <FaExpand className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && renderProjectModal()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FigmaProjectShowcase;
