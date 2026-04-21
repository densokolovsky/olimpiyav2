function Prep() {
  const [tab, setTab] = useState("before");
  const before = [
    "Не загорать 7–10 дней до процедуры и не использовать автозагар",
    "Не удалять волосы воском, пинцетом и шугарингом минимум 3 недели до сеанса",
    "За 12–24 часа аккуратно сбрить волосы в обрабатываемой зоне",
    "В день процедуры прийти на чистую кожу без кремов и масел",
  ];
  const after = [
    "Избегать активного солнца, сауны и бассейна первые 2–3 дня",
    "Использовать SPF 30+ на открытых участках в течение курса",
    "Не травмировать кожу механически — первые дни без скрабов и жёстких мочалок",
    "Следовать индивидуальным рекомендациям специалиста — они выдаются после процедуры",
  ];
  const data = tab === 'before' ? before : after;
  return (
    <section className="section section--milk">
      <div className="container">
        <SectionHead
          eyebrow="Подготовка и уход"
          title="Что делать до и после процедуры"
          desc="Короткие, понятные правила — чтобы процедура прошла комфортно, а результат закрепился надолго."
        />
        <div className="prep">
          <div className="prep__tabs">
            <button className={`prep__tab ${tab==='before'?'prep__tab--active':''}`} onClick={()=>setTab('before')}>До процедуры</button>
            <button className={`prep__tab ${tab==='after'?'prep__tab--active':''}`} onClick={()=>setTab('after')}>После процедуры</button>
          </div>
          <div className="prep__body">
            {data.map((t, i) => (
              <div className="prep__li" key={i}>
                <span className="n">{i+1}</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="muted" style={{ textAlign:'center', marginTop:22, fontSize:14 }}>Подробные рекомендации вы получите на консультации с учётом вашей зоны и типа кожи.</p>
      </div>
    </section>
  );
}

function Specialist() {
  return (
    <section className="section">
      <div className="container spec">
        <div className="figure-card" style={{ aspectRatio: '5/6' }}>
          <div className="figure-card__glass">
            <b>Команда Olympia</b>
            <span style={{ color:'var(--ink-2)' }}>Сертифицированные специалисты</span>
          </div>
          <div className="figure-card__tag">
            <span className="mono">[ портрет специалиста ]</span>
            <span className="mono">03/04</span>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Клиника и специалисты</div>
          <h2 className="h2">Мы не работаем по шаблону</h2>
          <p className="lede">Для каждого клиента параметры процедуры подбираются с учётом зоны, типа кожи, чувствительности и ожидаемого результата. Это ключевая разница между медицинским центром и случайным салоном.</p>
          <div className="spec__stats">
            <div className="spec__stat">
              <div className="num">10+</div>
              <div className="lbl">лет опыта клиники</div>
            </div>
            <div className="spec__stat">
              <div className="num">15k</div>
              <div className="lbl">проведённых сеансов</div>
            </div>
            <div className="spec__stat">
              <div className="num">4.9</div>
              <div className="lbl">средняя оценка</div>
            </div>
          </div>
          <div className="hero__cta" style={{ marginTop: 28 }}>
            <a href="#cta" className="btn btn--primary">Записаться на консультацию<Icon name="arrow" size={16} className="arr"/></a>
            <a href="#contacts" className="btn btn--ghost">Адрес и контакты</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    { zone: "Подмышки", stage: "после 4 процедур", hue: "#EAF3F1" },
    { zone: "Глубокое бикини", stage: "после курса 6 сеансов", hue: "#EEF5F3" },
    { zone: "Голени", stage: "динамика 3 сеансов", hue: "#F1F6F4" },
  ];
  return (
    <section className="section section--mint">
      <div className="container">
        <SectionHead
          eyebrow="Результаты"
          title="Видимая динамика — зона за зоной"
          desc="Реальные кейсы клиентов Olympia. Подписи показывают, на каком этапе курса сделано фото."
          action={<a href="#cta" className="btn btn--ghost">Подобрать курс<Icon name="arrow" size={16} className="arr"/></a>}
        />
        <div className="results">
          {cases.map((c, i) => (
            <div className="result" key={i}>
              <div className="result__img" style={{ background:`linear-gradient(160deg, ${c.hue}, #DFECE9 70%, #E8D6CE)` }}></div>
              <div className="result__split"></div>
              <div className="result__lbl">
                <span>До</span>
                <span>После</span>
              </div>
              <div className="result__foot">
                <b>{c.zone}</b>
                <span>{c.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const items = [
    { t: "Очень боялась боли, но оказалось заметно комфортнее, чем ожидала. Охлаждение реально работает, дискомфорт минимальный.", n: "Анна", c: "клиентка с 2024 года", a: "А" },
    { t: "После трёх процедур волосы стали намного тоньше и растут гораздо медленнее. Бритьё ушло из рутины — и это главное.", n: "Мария", c: "глубокое бикини · подмышки", a: "М" },
    { t: "Понравилось, что всё спокойно объяснили, подобрали параметры под чувствительную кожу. Никакого раздражения после.", n: "Елена", c: "лицо · руки", a: "Е" },
    { t: "Чувствуется уровень клиники. Не салон «по скидке», а медцентр с аккуратным подходом. Рекомендую тем, кто сомневается.", n: "Ольга", c: "ноги полностью", a: "О" },
    { t: "Был неудачный опыт лазера в другом месте — ожоги, страх. Здесь всё спокойно, грамотно, без боли. Рада, что решилась снова.", n: "Катерина", c: "вернулась к процедуре", a: "К" },
    { t: "Результат реально виден уже после первой процедуры. За 5 сеансов — минимум волос. Очень благодарна специалисту.", n: "Дарья", c: "голени · бикини", a: "Д" },
  ];
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHead
          eyebrow="Отзывы"
          title="Нам доверяют клиентки Одессы"
          desc="Коротко и по сути — то, что чаще всего говорят после курса в Olympia."
          action={
            <div className="row">
              <div style={{ display:'flex', gap:3, color:'var(--mint-deep)' }}>
                {[1,2,3,4,5].map(i=>(<Icon key={i} name="star" size={16}/>))}
              </div>
              <span style={{ fontWeight:600 }}>4.9</span>
              <span className="muted" style={{ fontSize:14 }}>· более 800 отзывов</span>
            </div>
          }
        />
        <div className="reviews">
          {items.map((r, i) => (
            <div className="review" key={i}>
              <div className="review__stars">
                {[1,2,3,4,5].map(j=>(<Icon key={j} name="star" size={14}/>))}
              </div>
              <p className="review__text">«{r.t}»</p>
              <div className="review__who">
                <div className="review__avatar">{r.a}</div>
                <div>
                  <b>{r.n}</b>
                  <span>{r.c}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qa = [
    ["Это больно?", "Благодаря системе охлаждения процедура переносится комфортно. Большинство клиентов описывают ощущения как короткое тёплое покалывание. В чувствительных зонах возможен лёгкий дискомфорт, но он терпимый и кратковременный."],
    ["Когда я увижу результат?", "Первый заметный эффект появляется уже после первой процедуры: часть волос выпадает, новые растут медленнее. Выраженное уменьшение — после 3–4 сеансов. Основной результат — после полного курса из 6–8 процедур."],
    ["Сколько процедур нужно?", "В среднем курс — 6–8 процедур с интервалом 4–8 недель в зависимости от зоны. Волосы растут поэтапно, поэтому одним сеансом задачу не решить — нужен курс. Точное количество специалист определит на консультации."],
    ["Можно ли делать летом?", "Да, можно. Главное условие — не быть загорелой в момент процедуры и избегать активного солнца 2–3 дня после. Если планируется отпуск, мы подберём удобное расписание или возьмём паузу."],
    ["Подходит ли для чувствительной кожи?", "Да. Candela GentleLase Pro совместим с чувствительной кожей — параметры подбираются индивидуально, а охлаждение дополнительно снижает нагрузку. Если был негативный опыт в другом месте — это не повод отказываться от лазера."],
    ["Можно ли брить волосы между процедурами?", "Да, только бритвой. Воск, шугаринг, пинцет и крем-депилятор исключены — они удаляют волос с корнем, а именно по нему работает лазер."],
    ["Есть ли противопоказания?", "Есть общие ограничения: беременность, загар, некоторые заболевания кожи, приём фотосенсибилизирующих препаратов. Специалист уточнит всё на консультации и подскажет, безопасно ли проводить процедуру сейчас."],
    ["Что лучше: бритьё, воск или лазер?", "Бритьё и воск — это временные решения с постоянным раздражением и рутиной. Лазер воздействует на корень волоса и даёт длительный результат. По комфорту и качеству кожи после курса — это принципиально другое ощущение."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section section--milk" id="faq">
      <div className="container">
        <SectionHead
          eyebrow="Ответы на частые вопросы"
          title="Всё, что важно знать до записи"
        />
        <div className="faq">
          {qa.map(([q, a], i) => (
            <div className={`faq__item ${open===i?'faq__item--open':''}`} key={i}>
              <button className="faq__btn" onClick={()=>setOpen(open===i?-1:i)}>
                <span>{q}</span>
                <span className="faq__toggle"><Icon name="plus" size={14} stroke={2.2}/></span>
              </button>
              <div className="faq__panel">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Prep, Specialist, Results, Reviews, FAQ });
