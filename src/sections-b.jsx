const zonesData = [
  { name: "Верхняя губа", cat: "face", dur: "10 мин", price: 450, popular: true },
  { name: "Подбородок", cat: "face", dur: "15 мин", price: 500 },
  { name: "Щёки", cat: "face", dur: "15 мин", price: 550 },
  { name: "Шея", cat: "face", dur: "20 мин", price: 600 },
  { name: "Подмышки", cat: "body", dur: "15 мин", price: 650, popular: true },
  { name: "Руки до локтя", cat: "body", dur: "30 мин", price: 950 },
  { name: "Руки полностью", cat: "body", dur: "45 мин", price: 1450 },
  { name: "Голени", cat: "body", dur: "45 мин", price: 1450 },
  { name: "Ноги полностью", cat: "body", dur: "80 мин", price: 2400, popular: true },
  { name: "Бикини классика", cat: "intimate", dur: "20 мин", price: 900 },
  { name: "Глубокое бикини", cat: "intimate", dur: "30 мин", price: 1200, popular: true },
  { name: "Межъягодичная складка", cat: "intimate", dur: "15 мин", price: 500 },
  { name: "Живот / дорожка", cat: "body", dur: "15 мин", price: 550 },
  { name: "Спина полностью", cat: "body", dur: "45 мин", price: 1600 },
  { name: "Поясница", cat: "body", dur: "20 мин", price: 650 },
  { name: "Пальцы рук / ног", cat: "face", dur: "10 мин", price: 300 },
];

function Zones() {
  const [tab, setTab] = useState("all");
  const tabs = [
    ["all", "Все зоны"],
    ["face", "Лицо"],
    ["body", "Тело"],
    ["intimate", "Интимные"],
    ["popular", "Популярные"],
  ];
  const shown = useMemo(() => {
    if (tab === "all") return zonesData;
    if (tab === "popular") return zonesData.filter(z => z.popular);
    return zonesData.filter(z => z.cat === tab);
  }, [tab]);

  return (
    <section className="section" id="zones">
      <div className="container">
        <SectionHead
          eyebrow="Популярные зоны"
          title="Найдите свою зону — мы работаем со всеми"
          desc="От деликатных участков лица до комплексной работы с телом. Длительность сеанса — ориентировочная, цена — за одну процедуру."
          action={<a href="#cta" className="btn btn--ghost">Подобрать курс<Icon name="arrow" size={16} className="arr"/></a>}
        />
        <div className="zone-tabs">
          {tabs.map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`zone-tab ${tab === k ? 'zone-tab--active' : ''}`}
            >{l}</button>
          ))}
        </div>
        <div className="zones">
          {shown.map((z) => (
            <div className="zone" key={z.name}>
              {z.popular && <span className="zone__tag">Популярная</span>}
              <div className="zone__ill"><Icon name="dot" size={18}/></div>
              <h3 className="zone__name">{z.name}</h3>
              <div className="zone__dur">
                <Icon name="clock" size={12} stroke={1.8}/> · {z.dur}
              </div>
              <div className="zone__price">
                <span className="from">от</span>
                {z.price}
                <span className="uah">грн</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const singles = [
    { name: "Верхняя губа", dur: "10 мин", price: 450 },
    { name: "Подбородок", dur: "15 мин", price: 500 },
    { name: "Подмышки", dur: "15 мин", price: 650 },
    { name: "Руки до локтя", dur: "30 мин", price: 950 },
    { name: "Руки полностью", dur: "45 мин", price: 1450 },
    { name: "Бикини классика", dur: "20 мин", price: 900 },
    { name: "Глубокое бикини", dur: "30 мин", price: 1200 },
    { name: "Голени", dur: "45 мин", price: 1450 },
    { name: "Ноги полностью", dur: "80 мин", price: 2400 },
  ];
  const packs = [
    {
      tag: "Базовый комфорт",
      title: "Подмышки + глубокое бикини",
      list: ["Подмышки", "Глубокое бикини"],
      price: 1650,
      save: 200,
    },
    {
      tag: "Оптимум",
      title: "Глубокое бикини + голени",
      list: ["Глубокое бикини", "Голени"],
      price: 2450,
      save: 200,
      featured: true,
    },
    {
      tag: "Полный комфорт",
      title: "Подмышки · глубокое бикини · ноги полностью",
      list: ["Подмышки", "Глубокое бикини", "Ноги полностью"],
      price: 3650,
      save: 600,
    },
  ];
  return (
    <section className="section section--milk" id="pricing">
      <div className="container">
        <SectionHead
          eyebrow="Цены и комплексы"
          title="Прозрачная стоимость. Выгодные сочетания зон."
          desc="Точная стоимость и количество процедур зависят от зоны, типа волос и индивидуальных особенностей. Специалист поможет подобрать оптимальный курс на консультации."
        />
        <div style={{ display: 'grid', gap: 32 }}>
          <div>
            <div className="ptable">
              <div className="ptable__row ptable__head">
                <div>Отдельная зона</div>
                <div>Длительность</div>
                <div style={{ textAlign: 'right' }}>Стоимость</div>
              </div>
              {singles.map((r) => (
                <div className="ptable__row" key={r.name}>
                  <div className="ptable__name">{r.name}</div>
                  <div className="ptable__dur">{r.dur}</div>
                  <div className="ptable__price">
                    <span className="from">от </span>{r.price} <span className="from">грн</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="note">
              <Icon name="shield" size={18}/>
              <span>Цены указаны за одну процедуру. Пакеты из 5 и 10 процедур — дополнительная скидка до 15%. Консультация и подбор параметров — бесплатно.</span>
            </div>
          </div>

          <div>
            <h3 className="h3" style={{ marginBottom: 18 }}>Комплексы — выгоднее, чем по отдельности</h3>
            <div className="packs">
              {packs.map((p) => (
                <div className={`pack ${p.featured ? 'pack--featured' : ''}`} key={p.title}>
                  <div className="pack__badge">{p.tag}</div>
                  <h4 className="pack__title">{p.title}</h4>
                  <ul className="pack__list">
                    {p.list.map((l) => (
                      <li key={l}><span className="dot"></span>{l}</li>
                    ))}
                  </ul>
                  <div className="pack__price">{p.price} <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>грн</span></div>
                  <div className="pack__save">Экономия {p.save} грн</div>
                  <div className="pack__foot">
                    <a href="#cta" className="btn btn--primary">Записаться</a>
                    <span className="pack__link">Состав зон</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const items = [
    { t: "Сертифицированное оборудование", d: "Работаем только на оригинальном александритовом лазере Candela GentleLase Pro — одной из самых точных систем для удаления волос." },
    { t: "Индивидуальный подбор параметров", d: "Перед процедурой специалист оценивает фототип кожи, тип волос, чувствительность. Настройки подбираются под вас, а не по шаблону." },
    { t: "Охлаждение во время импульса", d: "Криогенная защита снижает дискомфорт и дополнительно охраняет кожу во время воздействия — процедура проходит заметно комфортнее." },
    { t: "Медицинские стандарты чистоты", d: "Соблюдаются протоколы обработки поверхностей и расходных материалов. Процедура проводится в условиях медицинского центра." },
  ];
  return (
    <section className="section" id="safety">
      <div className="container safety">
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Почему это безопасно</div>
          <h2 className="h2">Медицинский подход к эстетической процедуре</h2>
          <p className="lede">Лазерная депиляция — это деликатное, неинвазивное воздействие. Оно безопасно, когда соблюдаются правильные параметры и протокол. В Olympia за этим следят.</p>
          <ul className="safety__list">
            {items.map((it, i) => (
              <li className="safety__item" key={i}>
                <span className="safety__num">0{i + 1}</span>
                <div>
                  <h4 className="safety__t">{it.t}</h4>
                  <p className="safety__d">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="figure-card">
          <div className="figure-card__glass">
            <b>Candela GentleLase Pro</b>
            <span style={{ color: 'var(--ink-2)' }}>Александритовый лазер 755 нм</span>
          </div>
          <div className="figure-card__tag">
            <span className="mono">[ аппарат · деталь ]</span>
            <span className="mono">02/04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Zones, Pricing, Safety });
