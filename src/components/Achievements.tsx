import { Award, Star, Trophy, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-blue-400" />,
      title: "Industry Leader",
      description: "Ranked #1 in aerospace innovation for 5 consecutive years"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Excellence Award",
      description: "Received the Global Aviation Excellence Award 2023"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Global Impact",
      description: "Serving 100+ countries with cutting-edge technology"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-400" />,
      title: "Innovation Patents",
      description: "Over 500 patents in aerospace technology"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Our Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-black p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}