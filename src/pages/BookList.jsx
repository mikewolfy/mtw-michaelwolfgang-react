const BookList = () => {
  const books = [
    {
      title: 'Hidden Potential',
      author: 'Adam Grant',
      date: 'June 2024',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/hidden-potential.jpg',
      notes:
        'A book about being our best and producing at a high level. Key ideas include getting comfortable with discomfort, failing often, avoiding perfectionism, and learning through teaching.',
    },
    {
      title: 'Outlive, the Science and Art of Longevity',
      author: 'Peter Attia',
      date: 'May 2024',
      category: 'Health',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/outlive.jpg',
      notes:
        'A book about expanding lifespan and healthspan, including focus on exercise, sleep, nutrition, strength, and VO2 max.',
    },
    {
      title: 'Chatter: The Voice in Our Head, Why It Matters and How to Harness It',
      author: 'Ethan Kross',
      date: 'January 2024',
      category: 'Psychology',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/chatter.jpg',
      notes:
        'A book about inner dialogue, rumination, and practical techniques to create distance and regain perspective.',
    },
    {
      title: '7 Habits of Highly Effective People',
      author: 'Stephen Covey',
      date: 'June 2023',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/seven-habits.jpg',
      notes:
        'A classic on moving from individual effectiveness to team effectiveness through seven foundational habits.',
    },
    {
      title: 'Essentialism, The Disciplined Pursuit of Less',
      author: 'Greg McKeown',
      date: 'May 2023',
      category: 'Self-Improvement',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/essentialism.jpg',
      notes:
        "A book about deliberately focusing on what matters most and removing what doesn't.",
    },
    {
      title: 'Jack Reacher - Personal (#19)',
      author: 'Lee Child',
      date: '2023',
      category: 'Fiction',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/reacher-personal.jpg',
      notes: 'Another Jack Reacher story focused on tracking down a rogue sniper in Paris.',
    },
    {
      title: 'Jack Reacher - The Persuader (#7)',
      author: 'Lee Child',
      date: '2022',
      category: 'Fiction',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/reacher-persuader.jpg',
      notes: 'A Jack Reacher story with undercover work against a drug dealer and an old nemesis.',
    },
    {
      title: 'The Great Influenze',
      author: 'John M Barry',
      date: 'January 2021',
      category: 'History',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/great.influenze.jpg',
      notes: 'A book about the 1918 influenza outbreak and the state of medicine at that time.',
    },
    {
      title: 'Antifragile',
      author: 'Nassim Nicholas Taleb',
      date: 'November 2020',
      format: 'Audiobook',
      category: 'Business',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/anti-fragile.jpg',
      notes: 'A book about how people and systems can benefit and grow from volatility and uncertainty.',
    },
    {
      title: 'Jack Reacher - The Midnight Line',
      author: 'Lee Child',
      date: 'October 2020',
      format: 'Audiobook',
      category: 'Fiction',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/midnight.line.jpg',
      notes: 'A Reacher story involving the search for an army veteran caught in an opioid ring.',
    },
    {
      title: 'Drive',
      author: 'Daniel H. Pink',
      date: 'September 2020',
      format: 'Audiobook',
      category: 'Leadership',
      status: "Didn't finish",
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/drive.png',
      notes:
        'A book about motivation. Key theme: intrinsic motivation tends to outperform carrot-and-stick for creative work.',
      summaryUrl: 'https://www.samuelthomasdavies.com/book-summaries/business/drive/',
    },
    {
      title: 'Dare to Lead',
      author: 'Brene Brown',
      date: 'September 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/dare.to.lead.jpg',
      notes: 'A leadership book centered on courage, vulnerability, and values-based leadership.',
      summaryUrl: 'https://paulminors.com/blog/dare-to-lead-by-brene-brown-book-summary-pdf/',
    },
    {
      title: 'Skin in the Game',
      author: 'Nassim Nicholas Taleb',
      date: '2020',
      format: 'Audiobook',
      category: 'Business',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/skin-in-the-game.png',
      notes: 'A book about responsibility and the importance of having real stake in the outcomes you advocate.',
    },
    {
      title: 'Start with Why',
      author: 'Simon Sinek',
      date: 'August 2020',
      format: 'Ebook',
      category: 'Leadership',
      status: 'In Progress',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/start.with.why.png',
      notes: 'How successful companies and leaders inspire by clarifying and communicating purpose.',
      summaryUrl: 'https://fourminutebooks.com/start-with-why-summary/',
    },
    {
      title: 'Rework',
      author: 'Jason Fried',
      date: 'August 2020',
      format: 'Audiobook',
      category: 'Business',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/rework.jpg',
      notes:
        'A practical take on building companies by staying focused, keeping things simple, and avoiding unnecessary complexity.',
      summaryUrl: 'https://sipreads.com/rework',
    },
    {
      title: 'Leonardo da Vinci',
      author: 'Walter Isaacson',
      date: 'July 2020',
      format: 'Audiobook',
      category: 'Biography',
      status: 'In Progress',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/leonardo.da.vinci.jpg',
      notes: 'A biography of Leonardo da Vinci with emphasis on curiosity across many disciplines.',
      summaryUrl: 'https://fourminutebooks.com/leonardo-da-vinci-summary/',
    },
    {
      title: 'Measure What Matters',
      author: 'John Doerr',
      date: 'July 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/measure.what.matters.png',
      notes:
        'A book on OKRs, including focus, alignment, accountability, tracking, and stretch goals.',
      summaryUrl: 'https://wisewords.blog/book-summaries/measure-what-matters/',
    },
    {
      title: 'Extreme Ownership',
      author: 'Jocko Willink and Leif Babin',
      date: 'June 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/extreme.ownership.jpg',
      notes:
        'A leadership book based on owning outcomes, simplifying plans, decentralized command, and prioritizing execution.',
      summaryUrl: 'https://readingraphics.com/book-summary-extreme-ownership/',
    },
    {
      title: 'Call Sign Chaos - Learning to Lead',
      author: 'Jim Mattis',
      date: 'June 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/call.sign.chaos.jpg',
      notes:
        'Leadership lessons from military service across direct, executive, and strategic leadership levels.',
      summaryUrl: 'https://www.threestarleadership.com/books/book-review-call-sign-chaos',
    },
    {
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      date: 'May 2020',
      format: 'Audiobook',
      category: 'Self-Improvement',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/duhigg.power.of.habits.jpg',
      notes: 'A practical exploration of habit loops and how to intentionally change habits.',
    },
    {
      title: 'Decisive',
      author: 'Chip and Dan Heath',
      date: 'February 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/decisive.jpg',
      notes: 'A framework for better decisions, centered on the WRAP model.',
      summaryUrl: 'https://www.samuelthomasdavies.com/book-summaries/business/decisive/',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      date: 'February 2020',
      format: 'Audiobook',
      category: 'Self-Improvement',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/atomic.habits.jpg',
      notes: 'A book about compounding small habits into meaningful long-term outcomes.',
      summaryUrl: 'https://www.samuelthomasdavies.com/book-summaries/self-help/atomic-habits/',
    },
    {
      title: 'Accelerate',
      author: 'Nicole Forsgren, Jez Humble, and Gene Kim',
      date: 'February 2020',
      format: 'Audiobook',
      category: 'Software',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/accelerate.jpg',
      notes: 'Evidence-based insights on software delivery performance and organizational outcomes.',
      summaryUrl: 'https://medium.com/@tdevroome/book-summary-accelerate-c531efe4c34c',
    },
    {
      title: 'Power of Moments',
      author: 'Chip and Dan Heath',
      date: 'February 2020',
      format: 'Audiobook',
      category: 'Psychology',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/power.of.moments.png',
      notes:
        'A book about how memorable moments are created, including the EPIC model: Elevation, Pride, Insight, and Connection.',
      summaryUrl: 'https://www.samuelthomasdavies.com/book-summaries/business/the-power-of-moments/',
    },
    {
      title: 'Range: Why Generalists Triumph in a Specialized World',
      author: 'David Epstein',
      date: 'January 2020',
      format: 'Audiobook',
      category: 'Self-Improvement',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/range.jpg',
      notes: 'A case for broad learning and cross-domain thinking over narrow specialization.',
      summaryUrl:
        'https://www.summary.com/magazine/range-why-generalists-triumph-in-a-specialized-world-by-david-epstein/',
    },
    {
      title: 'The Infinite Game',
      author: 'Simon Sinek',
      date: 'January 2020',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/infinite.game.jpg',
      notes: 'A long-term mindset for leadership focused on trust, loyalty, and mission over short-term wins.',
      summaryUrl:
        'http://www.15minutebusinessbooks.com/blog/2019/11/06/the-infinite-game-by-simon-sinek-here-are-my-five-lessons-and-takeaways/',
    },
    {
      title: 'Never Split the Difference',
      author: 'Chris Voss',
      date: 'November 2019',
      format: 'Audiobook',
      category: 'Leadership',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/never.split.the.difference.jpg',
      notes:
        'Negotiation principles from a former FBI hostage negotiator with practical examples for work and life.',
      summaryUrl: 'https://www.samuelthomasdavies.com/book-summaries/business/never-split-the-difference/',
    },
    {
      title: 'Why We Sleep',
      author: 'Matthew Walker',
      date: 'September 2019',
      format: 'Audiobook',
      category: 'Health',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/why.we.sleep.jpg',
      notes:
        'A deep dive into sleep science and the physical and cognitive cost of sleep deprivation.',
      summaryUrl:
        'https://www.grahammann.net/book-notes/why-we-sleep-matthew-walker#:~:text=It%20is%20a%20summary%20of,as%20sleep%20affects%20us%20all.',
    },
    {
      title: 'Thinking Fast and Slow',
      author: 'Daniel Kahneman',
      date: 'August 2019',
      format: 'Audiobook',
      category: 'Psychology',
      imageUrl: 'https://michael-wolfgang.azurewebsites.net/images/fast.and.slow.jpg',
      notes: 'A classic on cognitive biases and how human decision making often departs from strict rationality.',
    },
  ];

  const recommendationLists = [
    {
      label: 'Collins Book List',
      url: 'https://www.amazon.com/dp/B07VVHPSZC?searchxofy=true&ref_=dbs_s_aps_series_rwt',
    },
    {
      label: 'Sam Davies Book Lists and Summaries',
      url: 'https://www.samuelthomasdavies.com/book-summaries/',
    },
    {
      label: 'A list with several favorites',
      url: 'https://rickkettner.com/the-best-self-help-books/',
    },
  ];

  const toRead = [
    'The First 90 Days',
    'The Art of Strategic Execution: Finding Success in Technical Program Leadership',
    'Travis Lowdermilk - The Customer-Driven Playbook and The Customer-Driven Culture',
    'How to Know a Person by David Brooks',
    'Reclaiming Conversation by Sherry Turkle',
  ];

  const categories = [...new Set(books.map((b) => b.category))];

  const categoryColors = {
    Leadership: 'bg-blue-100 text-blue-700',
    Business: 'bg-indigo-100 text-indigo-700',
    Psychology: 'bg-purple-100 text-purple-700',
    Health: 'bg-emerald-100 text-emerald-700',
    Software: 'bg-sky-100 text-sky-700',
    Biography: 'bg-amber-100 text-amber-700',
    History: 'bg-orange-100 text-orange-700',
    Fiction: 'bg-rose-100 text-rose-700',
    'Self-Improvement': 'bg-violet-100 text-violet-700',
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Book List</h1>
        <p className="text-slate-500">
          Books I've read or listened to, along with notes and summaries.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Book Discovery Lists</h2>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          {recommendationLists.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
        <h2 className="text-base font-semibold text-slate-800 mb-2">On My To-Read List</h2>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          {toRead.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-20 h-28 object-cover rounded border border-slate-200 bg-slate-50 shrink-0"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h2 className="text-base font-semibold text-slate-800">{book.title}</h2>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[book.category] ?? 'bg-slate-100 text-slate-600'}`}>
                  {book.category}
                </span>
                {book.status && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                    {book.status}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-1">
                {book.author}
                {book.format ? ` (${book.format})` : ''}
                {book.date ? ` • ${book.date}` : ''}
              </p>
              <p className="text-sm text-slate-600">{book.notes}</p>
              {book.summaryUrl && (
                <a
                  href={book.summaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Book Summary
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
