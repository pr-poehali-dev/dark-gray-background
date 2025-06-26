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

        <p className="mb-12 max-w-3xl leading-relaxed text-left font-light px-0 text-slate-400 text-xl">
          Приватный сервер Майнкрафт с приятным сообществом и интересным
          сюжетом. Никаких гриферов или доната - только ванильный геймплей!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
