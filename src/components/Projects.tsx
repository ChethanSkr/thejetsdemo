export default function Projects() {
  const projects = [
    {
      title: "Next-Gen Fighter Jet",
      status: "In Development",
      completion: 75,
      image: "https://images.unsplash.com/photo-1519899602147-8f37e74b49a1?auto=format&fit=crop&q=80",
      description: "Revolutionary fighter jet with advanced stealth technology"
    },
    {
      title: "Eco-Friendly Engine",
      status: "Testing Phase",
      completion: 90,
      image: "https://images.unsplash.com/photo-1540199049985-c6ee7f86a647?auto=format&fit=crop&q=80",
      description: "Sustainable jet engine with reduced carbon emissions"
    },
    {
      title: "AI Navigation System",
      status: "Early Development",
      completion: 30,
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80",
      description: "AI-powered navigation system for autonomous flight"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Ongoing Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        Completion
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        {project.completion}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <div 
                      style={{ width: `${project.completion}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}