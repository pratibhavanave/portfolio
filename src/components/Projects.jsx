import { motion } from "framer-motion";

const projects = [
  {
    title: "SheetSense",
    description:
      "A MERN + Python web app to upload and analyze business CSV data with interactive visualizations and an intuitive dashboard.",
    techStack: [
      "MongoDB", "Express.js", "React", "Node.js", "Python", "Pandas", "FastAPI",
    ],
    features: [
      "CSV Upload & Parsing",
      "Sales/Revenue Breakdown",
      "Pie, Bar & Line Charts",
    ],
    github: "https://github.com/pratibhavanave/SheetSense",
    live: null,
  },
  {
    title: "Kisan Agro Chemicals",
    description:
      "A modern WordPress website for a leading agrochemical company, built with a custom theme and optimized for SEO and UX.",
    techStack: [
      "WordPress", "PHP", "MySQL", "Elementor", "Yoast SEO", "HTML", "CSS", "JavaScript",
    ],
    features: [
      "Custom Theme",
      "Product Catalog",
      "Responsive Design",
      "SEO Optimized",
    ],
    github: "https://github.com/pratibhavanave/kisanagrochemicals",
    live: "https://kisanagrochemicals.com/",
  },
  {
    title: "Coming Soon",
    description:
      "A new full-stack or analytics-based project is currently under development. Stay tuned!",
    techStack: ["React", "Node.js", "Python"],
    features: ["TBA"],
    github: null,
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-gray-100 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="font-medium text-gray-700 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 border border-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-700 mb-1">Features:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
