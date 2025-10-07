export default function ContactPage() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-100">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Please send me a message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 
                         dark:bg-blue-500 dark:hover:bg-blue-600 
                         rounded-lg transition-all shadow-md font-medium"
            >
              Send Email →
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-4">
          ✉️ Email: <span className="font-medium">tungt392@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
