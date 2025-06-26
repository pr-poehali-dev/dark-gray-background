import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface NavigationItem {
  name: string;
  path: string;
  icon: string;
  isExternal?: boolean;
}

const navigationItems: NavigationItem[] = [
  { name: "Главная", path: "/", icon: "Home" },
  { name: "Wiki", path: "/wiki", icon: "BookOpen" },
  { name: "Правила", path: "/rules", icon: "Shield" },
  { name: "Builds", path: "/build", icon: "Settings" },
  {
    name: "Поддержка",
    path: "https://t.me/+QgiLIa1gFRY4Y2Iy",
    icon: "MessageCircle",
    isExternal: true,
  },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={24} />
              <span className="font-bold text-xl text-white">GameWiki</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              const baseClasses =
                "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50";
              const activeClasses = isActive
                ? "bg-purple-600/20 text-purple-300"
                : "text-slate-300 hover:text-white";

              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    <Icon name={item.icon} size={18} />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
