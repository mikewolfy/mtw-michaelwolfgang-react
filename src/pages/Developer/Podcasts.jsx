const Podcasts = () => {
  const podcasts = [
    { name: ".NET Rocks", description: "The internet audio talk show for .NET developers", image: "/images/dotnetrocks.jpg" },
    { name: "Hanselminutes", description: "Fresh Air for Developers", image: "/images/hanselminutes.jpg" },
    { name: "Azure Friday", description: "Learn about Microsoft Azure", image: "/images/azure-friday.jpg" },
    { name: "Azure Podcast", description: "Discussions about Microsoft Azure", image: "/images/azurepodcast.jpg" },
    { name: "Darknet Diaries", description: "True stories from the dark side of the Internet", image: "/images/darknet-diaries.jpg" },
    { name: "Lex Fridman Podcast", description: "Conversations about AI, science, and technology", image: "/images/lexfridman.jpg" },
    { name: "Freakonomics Radio", description: "Discover the hidden side of everything", image: "/images/freakenomics-radio-podcast.jpeg" },
    { name: "The Knowledge Project", description: "Master the best of what other people have figured out", image: "/images/knowledge-project-podcast.png" },
    { name: "Marketplace", description: "Make sense of today's business and economy", image: "/images/marketplace-podcast.jpg" },
    { name: "Up First", description: "NPR's morning news podcast", image: "/images/upfirst.jpg" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">Favorite Podcasts</h1>
        <p className="text-gray-600 text-lg">Tech podcasts I listen to during my commute and runs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
            <div className="mb-4 overflow-hidden rounded-xl">
              <img 
                src={podcast.image} 
                alt={podcast.name}
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(podcast.name);
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">{podcast.name}</h3>
            <p className="text-gray-600">{podcast.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
