import Icon from "@/components/ui/icon";

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: Feature[] = [
  {
    title: "Гайды и стратегии",
    description:
      "Подробные руководства от опытных игроков для всех уровней сложности",
    icon: "BookOpen",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Builds и конфигурации",
    description: "Оптимальные сборки персонажей, настройки игр и железа",
    icon: "Settings",
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Активное сообщество",
    description: "Обсуждения, советы и помощь от единомышленников 24/7",
    icon: "Users",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Постоянные обновления",
    description: "Актуальная информация о патчах, мета-изменениях и новинках",
    icon: "Zap",
    color: "from-orange-500 to-red-500",
  },
];

const FeatureGrid = () => {
  return (
    <div className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Наши особенности
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            От новичка до про-игрока — найдешь информацию для любого уровня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={feature.icon} className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
