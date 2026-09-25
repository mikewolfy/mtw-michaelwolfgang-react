const SpellPress = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Spell Press</h1>
        <p className="text-slate-500">
          Six letters, four words, beat the clock. A quick spelling game I built &mdash; your best
          score is saved in this browser.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <iframe
          src="/games/spellpress.html"
          title="Spell Press"
          className="w-full border-0"
          style={{ height: '760px' }}
        />
      </div>
    </div>
  );
};

export default SpellPress;
