import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Full Stack Development",
    skills: [
      "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Tailwind CSS", "Vite", "Git & GitHub",
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "Data Visualization", "EDA",
    ],
  },
  {
    title: "WordPress & Web Design",
    skills: [
      "WordPress", "PHP", "MySQL", "Custom Themes", "Elementor", "Yoast SEO", "HTML", "CSS", "JavaScript",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#f9f9f9] text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{group.title}</h3>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-blue-50 rounded-full border border-blue-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
