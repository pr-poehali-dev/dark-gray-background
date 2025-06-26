import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const buildCategories = [
  {
    title: "Билды персонажей",
    description: "Оптимальные сборки для всех классов и ролей",
    icon: "User",
    builds: 15,
  },
  {
    title: "Конфигурации ПК",
    description: "Рекомендуемые системные требования и настройки",
    icon: "Monitor",
    builds: 8,
  },
  {
    title: "Настройки игры",
    description: "Оптимальные параметры для максимальной производительности",
    icon: "Settings",
    builds: 12,
  },
];

const popularBuilds = [
  {
    name: "Танк для PvP",
    author: "ProGamer2024",
    rating: 4.8,
    views: 1240,
  },
  {
    name: "Урон-дилер для рейдов",
    author: "ElitePlayer",
    rating: 4.9,
    views: 2156,
  },
  {
    name: "Поддержка команды",
    author: "HealMaster",
    rating: 4.7,
    views: 892,
  },
];

const Build = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Builds & Конфигурации
          </h1>
          <p className="text-xl text-slate-400">
            Проверенные сборки от топовых игроков сообщества
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Категории
            </h2>
            <div className="space-y-4">
              {buildCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer hover-scale"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                      <Icon
                        name={category.icon}
                        className="text-purple-400"
                        size={24}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-slate-400">{category.description}</p>
                    </div>

                    <div className="flex items-center space-x-2 text-slate-500">
                      <Icon name="FileText" size={16} />
                      <span>{category.builds}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Популярные билды
            </h2>
            <div className="space-y-4">
              {popularBuilds.map((build, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {build.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    от {build.author}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Icon name="Star" size={14} />
                      <span>{build.rating}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-slate-500">
                      <Icon name="Eye" size={14} />
                      <span>{build.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
