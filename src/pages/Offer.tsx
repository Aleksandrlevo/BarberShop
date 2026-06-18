import { ArrowLeft } from "lucide-react";

interface OfferProps {
  onBack: () => void;
}

export default function Offer({ onBack }: OfferProps) {
  return (
    <div className="min-h-screen bg-light">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-dark-600 hover:text-dark-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-dark-900 mb-2">
          Договор-оферта
        </h1>
        <p className="text-xs text-dark-600 mb-10">
          Последнее обновление: 18 июня 2026 г.
        </p>

        <div className="space-y-8 text-sm text-dark-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              1. Термины и определения
            </h2>
            <p className="mb-2">
              1.1. <strong>Исполнитель</strong> — Индивидуальный предприниматель, оказывающий услуги барбершопа под наименованием «Классика».
            </p>
            <p className="mb-2">
              1.2. <strong>Заказчик</strong> — физическое лицо, посетившее Сайт и/или воспользовавшееся услугами Исполнителя.
            </p>
            <p className="mb-2">
              1.3. <strong>Сайт</strong> — интернет-сайт, расположенный по адресу <a href="https://barbershopclassic.ru" className="text-dark-900 underline underline-offset-2">https://barbershopclassic.ru</a>.
            </p>
            <p>
              1.4. <strong>Услуги</strong> — парикмахерские услуги (мужские стрижки, моделирование бороды, бритьё, уход за лицом и иные услуги), оказываемые Исполнителем.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              2. Предмет договора
            </h2>
            <p className="mb-2">
              2.1. Исполнитель обязуется оказать Заказчику услуги в соответствии с действующим прайс-листом, а Заказчик обязуется оплатить и принять оказанные услуги.
            </p>
            <p>
              2.2. Настоящий договор является публичной офертой в соответствии со ст. 437 Гражданского кодекса РФ. Акцептом оферты является факт записи на услугу или непосредственное посещение барбершопа.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              3. Порядок оказания услуг
            </h2>
            <p className="mb-2">
              3.1. Заказчик может записаться на услугу через онлайн-сервис YCLIENTS, по телефону +7 (918) 128-08-65 или через Telegram @classic_br.
            </p>
            <p className="mb-2">
              3.2. В случае опоздания более чем на 15 минут без предупреждения Исполнитель вправе сократить время оказания услуги или перенести запись.
            </p>
            <p>
              3.3. Исполнитель вправе рекомендовать Заказчику услуги, однако окончательное решение о выборе услуг принимает Заказчик.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              4. Стоимость услуг и порядок расчётов
            </h2>
            <p className="mb-2">
              4.1. Стоимость услуг определяется действующим прайс-листом, размещённым на Сайте и в помещении барбершопа.
            </p>
            <p className="mb-2">
              4.2. Исполнитель вправе изменять цены в одностороннем порядке с обязательным уведомлением Заказчика путём размещения актуального прайс-листа на Сайте.
            </p>
            <p className="mb-2">
              4.3. Оплата производится в рублях наличными или безналичным способом после оказания услуги.
            </p>
            <p>
              4.4. Скидки и акции действуют в соответствии с условиями, указанными при их объявлении, и не суммируются между собой без отдельного указания.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              5. Права и обязанности сторон
            </h2>
            <p className="mb-2">
              5.1. Исполнитель обязуется оказать услуги качественно, с использованием профессиональных инструментов и материалов.
            </p>
            <p className="mb-2">
              5.2. Заказчик обязуется своевременно оплачивать услуги и соблюдать правила посещения барбершопа.
            </p>
            <p>
              5.3. Заказчик имеет право отказаться от услуги до начала её оказания. В случае если отказ произошёл после начала оказания услуги, оплата производится за фактически выполненную часть.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              6. Ответственность сторон
            </h2>
            <p className="mb-2">
              6.1. Исполнитель несёт ответственность за качество оказанных услуг в соответствии с Законом РФ «О защите прав потребителей».
            </p>
            <p className="mb-2">
              6.2. Претензии по качеству услуг принимаются в течение 3 (трёх) дней с момента оказания услуги.
            </p>
            <p>
              6.3. Исполнитель не несёт ответственности за возможный вред, причинённый здоровью Заказчика, при наличии у Заказчика медицинских противопоказаний, о которых он не сообщил.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              7. Заключительные положения
            </h2>
            <p className="mb-2">
              7.1. Настоящая оферта вступает в силу с момента её размещения на Сайте и действует до момента её отзыва.
            </p>
            <p className="mb-2">
              7.2. Все споры решаются путём переговоров. При недостижении согласия спор подлежит рассмотрению в суде по месту нахождения Исполнителя.
            </p>
            <p>
              7.3. Признание недействительным какого-либо положения настоящей оферты не влечёт недействительность остальных положений.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              8. Реквизиты Исполнителя
            </h2>
            <p className="mb-1">Барбершоп «Классика»</p>
            <p className="mb-1">Краснодар, Ростовское шоссе, 30/7к1</p>
            <p className="mb-1">Телефон: <a href="tel:+79181280865" className="text-dark-900 underline underline-offset-2">+7 (918) 128-08-65</a></p>
            <p>Telegram: <a href="https://t.me/classic_br" target="_blank" rel="noopener noreferrer" className="text-dark-900 underline underline-offset-2">@classic_br</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
