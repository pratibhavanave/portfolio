import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#f9f9f9] text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Meaningful
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hello? I'm always open to connect!
        </motion.p>

        <form
          action="mailto:your.email@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-6 text-left"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-sm text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-medium text-sm text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-sm text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
