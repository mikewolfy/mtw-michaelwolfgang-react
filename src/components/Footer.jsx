const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Michael Wolfgang. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Software Architect &bull; Husband &amp; Dad &bull; Runner &bull; Investor &bull; Lifelong Learner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
