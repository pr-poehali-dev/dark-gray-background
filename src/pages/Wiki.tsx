import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const wikiCategories = [
  {
    title: "Гайды для новичков",
    description: "Основы геймплея, первые шаги",
    icon: "GraduationCap",
    articles: 12,
  },
  {
    title: "Продвинутые стратегии",
    description: "Тактики для опытных игроков",
    icon: "Target",
    articles: 8,
  },
  {
    title: "Мета и обновления",
    description: "Актуальная информация о патчах",
    icon: "TrendingUp",
    articles: 15,
  },
  {
    title: "Персонажи и классы",
    description: "Детальные разборы героев",
    icon: "User",
    articles: 23,
  },
];

const Wiki = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">База знаний</h1>
          <p className="text-xl text-slate-400">
            Все гайды, стратегии и секреты в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {wikiCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer hover-scale"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <Icon
                    name={category.icon}
                    className="text-purple-400"
                    size={24}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-400 mb-3">{category.description}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="FileText" size={16} className="mr-1" />
                    <span>{category.articles} статей</span>
                  </div>
                </div>

                <Icon
                  name="ChevronRight"
                  className="text-slate-500"
                  size={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wiki;
