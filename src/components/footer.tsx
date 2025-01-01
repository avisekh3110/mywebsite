export default function Footer() {
  return (
    <footer className="bg-quarternary-b h-40 text-primary flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-bold">My Portfolio</h2>
        <p className="text-sm">© 2023 My Portfolio. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 font-bold text-slate-700 duration-300">
        <a
          href="https://github.com/avisekh3110"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/avisekh-sabi-660603246/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:avisekh3110@gmail.com"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          Email
        </a>
      </div>
      <div className="mt-2 text-center">
        <p className="text-md font-mono">
          Built with <span className="text-red-500">♥</span> using React and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
