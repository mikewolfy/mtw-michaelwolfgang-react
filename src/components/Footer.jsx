const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500">
      <p>&copy; {new Date().getFullYear()} Michael Wolfgang. All rights reserved.</p>
      <p className="mt-1">
        Software Architect &bull; Husband &amp; Dad &bull; Runner &bull; Investor &bull; Lifelong Learner
      </p>
    </footer>
  );
};

export default Footer;
