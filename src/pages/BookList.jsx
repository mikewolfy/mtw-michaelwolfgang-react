const BookList = () => {
  const books = [
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      category: 'Finance',
      notes: 'Timeless lessons on wealth, greed, and happiness.',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'David Thomas & Andrew Hunt',
      category: 'Software',
      notes: 'Essential reading for any software craftsman.',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Self-Improvement',
      notes: 'Small changes compound into remarkable results.',
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      category: 'Software',
      notes: 'Deep dive into the principles behind reliable, scalable systems.',
    },
    {
      title: 'The Little Book of Common Sense Investing',
      author: 'John C. Bogle',
      category: 'Finance',
      notes: 'The case for low-cost index fund investing.',
    },
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      category: 'Self-Improvement',
      notes: 'Rules for focused success in a distracted world.',
    },
  ];

  const categories = [...new Set(books.map((b) => b.category))];

  const categoryColors = {
    Finance: 'bg-green-100 text-green-700',
    Software: 'bg-blue-100 text-blue-700',
    'Self-Improvement': 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Book List</h1>
        <p className="text-slate-500">
          Books I've read or am currently listening to as audiobooks — spanning software, finance, and personal growth.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <span key={cat} className={`px-2 py-1 rounded text-xs font-semibold ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'}`}>
            {cat}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow duration-200 flex gap-4 items-start"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base font-semibold text-slate-800">{book.title}</h2>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[book.category] ?? 'bg-slate-100 text-slate-600'}`}>
                  {book.category}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">{book.author}</p>
              <p className="text-sm text-slate-600">{book.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
