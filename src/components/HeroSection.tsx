import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-yellow-900/20 to-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.05)_1px,transparent_0)] [background-size:20px_20px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30">
            <Icon name="Trophy" className="text-yellow-400" size={24} />
            <span className="text-yellow-300 font-semibold">
              Игровое сообщество
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-left">
          STONEHAND
        </h1>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Собираем гайды, строим комьюнити, делимся опытом. Все что нужно знать
          о твоих любимых играх — в одном месте.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 hover-scale">
            <Icon name="BookOpen" size={20} />
            <span>Открыть Wiki</span>
          </button>

          <button className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 border border-slate-600 hover:border-slate-500">
            <Icon name="Users" size={20} />
            <span>Присоединиться</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
