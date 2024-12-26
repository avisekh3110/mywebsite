export default function Footer() {
  return (
    <footer className="bg-quarternary-c h-40 text-primary flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-bold">My Portfolio</h2>
        <p className="text-sm">© 2023 My Portfolio. All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/avisekh3110"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/avisekh-sabi-660603246/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTTWPvHhCVJHjfvTXkTKqfRnNgCQrpNglqszMNpNqgtCkzPkSJDRDRVbPnCkvZPgNdxV"
          className="hover:text-gray-700 transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
