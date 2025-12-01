const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white mt-auto shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Michael Wolfgang. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Software Architect | Husband & Dad | Runner | Investor | Lifelong Learner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
