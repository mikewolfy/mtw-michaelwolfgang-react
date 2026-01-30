const Footer = () => {
  // Get current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = new Date().getDay();
  
  // Define gradients for each day
  const gradients = {
    0: 'bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600', // Sunday - orange
    1: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600', // Monday - current/default
    2: 'bg-gradient-to-r from-red-500 via-rose-600 to-red-700',        // Tuesday - reddish
    3: 'bg-gradient-to-r from-teal-500 via-cyan-600 to-teal-700',      // Wednesday - teal
    4: 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700',    // Thursday - blue
    5: 'bg-gradient-to-r from-green-500 via-emerald-600 to-green-700', // Friday - green
    6: 'bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600'       // Saturday - pink
  };
  
  const gradientClass = gradients[dayOfWeek];
  
  return (
    <footer className={`${gradientClass} text-white mt-auto shadow-2xl`}>
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
