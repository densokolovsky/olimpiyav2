function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <div className="hero__offer">
            <span className="dot"></span>
            Скидка 20% на первое посещение · консультация бесплатно
          </div>
          <h1 className="h1">
            Лазерная депиляция<br/>
            в Одессе на <span className="em">Candela GentleLase Pro</span>
          </h1>
          <p className="hero__lede">
            Гладкая кожа без боли, раздражения и постоянного бритья. Современный александритовый лазер с системой охлаждения, деликатный подход и индивидуальный подбор курса.
          </p>
          <div className="hero__cta">
            <a href="#cta" className="btn btn--primary btn--lg">
              Записаться на консультацию
              <Icon name="arrow" size={18} className="arr"/>
            </a>
            <a href="#pricing" className="btn btn--ghost btn--lg">Посмотреть цены</a>
          </div>
          <div className="hero__badges">
            <span className="badge"><span className="d"></span>Candela GentleLase Pro</span>
            <span className="badge"><span className="d"></span>Медицинский центр</span>
            <span className="badge"><span className="d"></span>Индивидуальный подбор</span>
          </div>
        </div>
        <div>
          <div className="hero__figure">
            <div className="hero__stripes"></div>
            <div className="hero__orb"></div>
            <div className="hero__card hero__card--a">
              <div>
                <div className="num">−87%</div>
                <div className="lbl">роста волос<br/>после курса</div>
              </div>
            </div>
            <div className="hero__card hero__card--b">
              <div>
                <div className="num">6–8</div>
                <div className="lbl">процедур<br/>в среднем курсе</div>
              </div>
            </div>
            <div className="hero__placeholder">
              <span className="mono">[ кабинет · аппарат candela ]</span>
              <span className="mono">01/04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["shield", "Сертифицированное оборудование"],
    ["hospital", "Процедура в медицинском центре"],
    ["spark", "Александритовый лазер"],
    ["snow", "Система охлаждения"],
    ["feather", "Деликатный подход"],
  ];
  return (
    <div className="trust">
      <div className="container trust__row">
        {items.map(([ico, t]) => (
          <span key={t}><Icon name={ico} size={18}/> {t}</span>
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  const items = [
    { ico: "spark", t: "Александритовый лазер Candela", d: "Одна из самых точных систем для удаления волос — эффективна на разных типах кожи и волос." },
    { ico: "snow", t: "Система охлаждения кожи", d: "Криогенная защита снижает дискомфорт и бережёт кожу во время импульса." },
    { ico: "target", t: "Меньше процедур", d: "Точное воздействие позволяет достичь результата быстрее, чем на многих других системах." },
    { ico: "feather", t: "Деликатные зоны", d: "Подходит для чувствительных участков: бикини, лицо, подмышки — без грубого воздействия." },
    { ico: "shield", t: "Безопасный протокол", d: "Параметры подбираются индивидуально, соблюдаются медицинские стандарты чистоты." },
    { ico: "hospital", t: "Медицинский центр", d: "Процедура проводится в условиях клиники, а не салона — с контролем и ответственностью." },
  ];
  return (
    <section className="section section--milk">
      <div className="container">
        <SectionHead
          eyebrow="Почему клиенты выбирают нас"
          title="Комфортная процедура, за которой стоит медицина"
          desc="Шесть причин, по которым женщины Одессы выбирают курс лазерной депиляции в Olympia."
        />
        <div className="grid grid-3">
          {items.map((it, i) => (
            <div className="card" key={i}>
              <div className="card__ico"><Icon name={it.ico} size={22}/></div>
              <h3 className="card__title">{it.t}</h3>
              <p className="card__text">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Лазер воздействует на фолликул", d: "Импульс нагревает пигмент в корне волоса. Фолликул теряет способность активно производить новый волос." },
    { n: "02", t: "Волосы растут реже и слабее", d: "После каждой процедуры часть фолликулов выключается. Волоски становятся тоньше, светлее, появляются медленнее." },
    { n: "03", t: "Кожа остаётся гладкой", d: "После завершения курса достаточно одной-двух поддерживающих процедур в год, чтобы сохранить результат." },
  ];
  const timeline = [
    { k: "1 сеанс", v: "Первый заметный эффект", p: 20 },
    { k: "3–4 сеанса", v: "Выраженное уменьшение роста", p: 55 },
    { k: "6–8 сеансов", v: "Основной курс завершён", p: 90 },
    { k: "Далее", v: "Поддержка 1–2 раза в год", p: 100 },
  ];
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead
          eyebrow="О процедуре простым языком"
          title="Как работает лазер — три коротких шага"
          desc="Волосы находятся в разных фазах роста, поэтому нужен курс, а не один сеанс. Ниже — понятная динамика результата."
        />
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__num">{s.n}</div>
              <h3 className="step__title">{s.t}</h3>
              <p className="step__text">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="timeline">
          {timeline.map((t) => (
            <div className="tl-item" key={t.k}>
              <div className="tl-item__k">{t.k}</div>
              <div className="tl-item__v">{t.v}</div>
              <div className="tl-item__bar"><i style={{ width: t.p + '%' }}></i></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    "Вы устали от бритья каждые 2–3 дня и хотите забыть о станках надолго",
    "Постоянное раздражение, краснота и вросшие волосы после бритья или воска",
    "Чувствительная кожа — обычные методы удаления волос даются болезненно",
    "Вы уже пробовали другие виды эпиляции и ищете более долгосрочное решение",
    "Хочется гладкой кожи без ежедневной рутины — на встречи, отпуск, каждый день",
    "Важен комфорт, аккуратный подход и уверенность в уровне клиники",
  ];
  return (
    <section className="section section--mint">
      <div className="container">
        <div className="sec-head" style={{ marginBottom: 36 }}>
          <div className="sec-head__left">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Для кого подходит</div>
            <h2 className="h2">Узнайте себя в одном из пунктов</h2>
            <p>Если хотя бы одно из этого про вас — значит, курс лазерной депиляции решит задачу, с которой вы живёте давно.</p>
          </div>
        </div>
        <ul className="fw-list" style={{ maxWidth: 920, margin: '0 auto' }}>
          {items.map((t, i) => (
            <li className="fw-item" key={i}>
              <span className="chk"><Icon name="check" size={16} stroke={2.2}/></span>
              <p>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustBar, Benefits, Process, ForWhom });
