import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const rules = [
  {
    title: "Уважение к участникам",
    description:
      "Общайтесь вежливо, избегайте оскорблений и токсичного поведения",
    icon: "Heart",
  },
  {
    title: "Никакого спама",
    description:
      "Не флудите, не дублируйте сообщения, используйте поиск перед вопросом",
    icon: "MessageSquare",
  },
  {
    title: "Актуальный контент",
    description: "Делитесь только проверенной и актуальной информацией",
    icon: "CheckCircle",
  },
  {
    title: "Без читов и эксплойтов",
    description: "Запрещено обсуждение читов, ботов и нарушений правил игр",
    icon: "Shield",
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Icon name="Shield" className="text-purple-400" size={40} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Правила сообщества
          </h1>
          <p className="text-xl text-slate-400">
            Простые правила для комфортного общения всех участников
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <Icon
                    name={rule.icon}
                    className="text-purple-400"
                    size={20}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {index + 1}. {rule.title}
                  </h3>
                  <p className="text-slate-400">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Icon
              name="AlertTriangle"
              className="text-red-400 mt-1"
              size={20}
            />
            <div>
              <h3 className="text-lg font-semibold text-red-300 mb-2">
                Нарушение правил
              </h3>
              <p className="text-red-200/80">
                За нарушение правил предусмотрены предупреждения, временная
                блокировка или исключение из сообщества.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
