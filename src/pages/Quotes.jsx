import { useMemo, useState } from 'react';
import { quotes } from '../data/quotes';

const SORT_FIELDS = {
  author: (q) => q.author.toLowerCase(),
  quote: (q) => q.quote.toLowerCase(),
  tags: (q) => q.tags.join(', ').toLowerCase(),
};

const Quotes = () => {
  const [sortField, setSortField] = useState('author');
  const [sortDirection, setSortDirection] = useState('asc');
  const [authorFilter, setAuthorFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const authors = useMemo(
    () => [...new Set(quotes.map((q) => q.author))].sort((a, b) => a.localeCompare(b)),
    []
  );

  const tags = useMemo(
    () => [...new Set(quotes.flatMap((q) => q.tags))].sort((a, b) => a.localeCompare(b)),
    []
  );

  const visibleQuotes = useMemo(() => {
    const filtered = quotes.filter((q) => {
      if (authorFilter && q.author !== authorFilter) return false;
      if (tagFilter && !q.tags.includes(tagFilter)) return false;
      return true;
    });

    const getKey = SORT_FIELDS[sortField];
    const sorted = [...filtered].sort((a, b) => {
      const result = getKey(a).localeCompare(getKey(b));
      return sortDirection === 'asc' ? result : -result;
    });

    return sorted;
  }, [authorFilter, tagFilter, sortField, sortDirection]);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortIndicator = (field) => {
    if (field !== sortField) return null;
    return <span className="ml-1 text-slate-400">{sortDirection === 'asc' ? '▲' : '▼'}</span>;
  };

  const columns = [
    { field: 'author', label: 'Author', width: 'w-48' },
    { field: 'quote', label: 'Quote', width: '' },
    { field: 'tags', label: 'Tags', width: 'w-56' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Quotes</h1>
        <p className="text-slate-500">
          A collection of quotes from{' '}
          <a
            href="https://quotes.emptywolf.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            quotes.emptywolf.com
          </a>
          . Sort by clicking a column header, or filter by author and tag below.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6 flex flex-wrap gap-4">
        <label className="flex flex-col text-sm text-slate-600">
          Author
          <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            className="mt-1 border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All authors</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col text-sm text-slate-600">
          Tag
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            className="mt-1 border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All tags</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>

        {(authorFilter || tagFilter) && (
          <button
            onClick={() => {
              setAuthorFilter('');
              setTagFilter('');
            }}
            className="self-end text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Clear filters
          </button>
        )}

        <span className="self-end text-sm text-slate-400 ml-auto">
          {visibleQuotes.length} of {quotes.length} quotes
        </span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              {columns.map(({ field, label, width }) => (
                <th
                  key={field}
                  onClick={() => handleSort(field)}
                  className={`${width} text-left px-4 py-3 font-semibold text-slate-700 cursor-pointer select-none hover:bg-slate-50 whitespace-nowrap`}
                >
                  {label}
                  {sortIndicator(field)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleQuotes.map((q, idx) => (
              <tr
                key={`${q.author}-${idx}`}
                className="border-b border-slate-100 last:border-0 align-top hover:bg-slate-50"
              >
                <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">
                  <button
                    onClick={() => setAuthorFilter(q.author)}
                    className="hover:text-blue-600 hover:underline text-left"
                  >
                    {q.author}
                  </button>
                </td>
                <td className="px-4 py-3 text-slate-700">{q.quote}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {q.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setTagFilter(tag)}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700 hover:bg-blue-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
            {visibleQuotes.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-slate-400">
                  No quotes match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quotes;
