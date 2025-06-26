
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/30">
            <Icon name="Trophy" className="text-purple-400" size={24} />
            <span className="text-purple-300 font-semibold">Игровое сообщество</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          База знаний для
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">
            настоящих геймеров
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Собираем гайды, строим комьюнити, делимся опытом. 
          Все что нужно знать о твоих любимых играх — в одном месте.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 hover-scale">
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
