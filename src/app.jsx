function CTABlock() {
  const [form, setForm] = useState({ name:'', phone:'', channel:'phone' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Укажите имя";
    const digits = form.phone.replace(/\D/g,'');
    if (digits.length < 9) e.phone = "Введите корректный номер";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const fmtPhone = (v) => {
    const d = v.replace(/\D/g,'').slice(0,12);
    if (!d) return '';
    let out = '+';
    out += d.slice(0,3);
    if (d.length > 3) out += ' (' + d.slice(3,5);
    if (d.length >= 5) out += ') ';
    if (d.length > 5) out += d.slice(5,8);
    if (d.length > 8) out += '-' + d.slice(8,10);
    if (d.length > 10) out += '-' + d.slice(10,12);
    return out.trim();
  };

  return (
    <section className="section--graphite cta" id="cta">
      <div className="container cta__grid">
        <div>
          <div className="eyebrow" style={{ color:'#6BCEC8', marginBottom: 18 }}>Запись</div>
          <h2 className="h2">Запишитесь на лазерную депиляцию — подберём курс под вас</h2>
          <p>Оставьте заявку — специалист свяжется в течение рабочего дня, ответит на вопросы и поможет подобрать подходящие зоны и удобное время.</p>

          <div className="cta__side" style={{ marginTop: 32 }}>
            <div className="cta__tile">
              <span className="ico"><Icon name="spark" size={18}/></span>
              <div><b>Консультация — бесплатно</b><span>Без обязательств и записи на процедуру</span></div>
            </div>
            <div className="cta__tile">
              <span className="ico"><Icon name="heart" size={18}/></span>
              <div><b>Скидка 20% на первое посещение</b><span>Действует при записи через сайт</span></div>
            </div>
            <div className="cta__tile">
              <span className="ico"><Icon name="phone" size={18}/></span>
              <div><b>+380 48 700 04 00</b><span>Ежедневно с 9:00 до 20:00</span></div>
            </div>
          </div>
        </div>

        <form className="cta__form" onSubmit={onSubmit} noValidate>
          {sent ? (
            <div className="success">
              <div className="success__ico"><Icon name="check" size={26} stroke={2.4}/></div>
              <h3>Заявка отправлена</h3>
              <p>Спасибо, {form.name}. Мы свяжемся с вами в ближайшее время — будьте на связи.</p>
            </div>
          ) : (
            <>
              <div className={`field ${errors.name?'field--err':''}`}>
                <label>Как к вам обращаться</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e)=>setForm({...form, name:e.target.value})}
                />
                {errors.name && <span className="field__err">{errors.name}</span>}
              </div>
              <div className={`field ${errors.phone?'field--err':''}`}>
                <label>Телефон</label>
                <input
                  type="tel"
                  placeholder="+380 (00) 000-00-00"
                  value={form.phone}
                  onChange={(e)=>setForm({...form, phone: fmtPhone(e.target.value)})}
                />
                {errors.phone && <span className="field__err">{errors.phone}</span>}
              </div>
              <div className="field">
                <label>Удобный способ связи</label>
                <div className="radio-row">
                  {[['phone','Телефон','phone'],['whatsapp','WhatsApp','whatsapp'],['telegram','Telegram','msg']].map(([v,l,ico])=>(
                    <div className="radio" key={v}>
                      <input type="radio" id={`ch-${v}`} name="channel" checked={form.channel===v} onChange={()=>setForm({...form, channel:v})}/>
                      <label htmlFor={`ch-${v}`}><Icon name={ico} size={14}/>{l}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="submit-row">
                <button type="submit" className="btn btn--primary btn--lg" style={{ flex:1 }}>
                  Записаться <Icon name="arrow" size={16} className="arr"/>
                </button>
              </div>
              <p className="consent" style={{ marginTop: 14 }}>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Мы не передаём ваши контакты третьим лицам.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Contacts() {
  const rows = [
    { ico:"pin", t:"Одесса, ул. Генуэзская, 24Б", s:"Аркадия · удобный въезд и паркинг" },
    { ico:"clock", t:"Ежедневно 9:00 — 20:00", s:"Без выходных и перерыва" },
    { ico:"phone", t:"+380 48 700 04 00", s:"Звонки принимает администратор" },
    { ico:"msg", t:"Telegram · WhatsApp · Viber", s:"Пишите — отвечаем в рабочее время" },
  ];
  return (
    <section className="section" id="contacts">
      <div className="container">
        <SectionHead
          eyebrow="Контакты и расположение"
          title="Как нас найти"
          desc="Удобное расположение в Одессе. Есть парковка рядом с клиникой."
        />
        <div className="contact">
          <div className="contact__info">
            {rows.map((r, i) => (
              <div className="contact__row" key={i}>
                <span className="ico"><Icon name={r.ico} size={18}/></span>
                <div>
                  <b>{r.t}</b>
                  <span>{r.s}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="map">
            <div className="map__grid"></div>
            <div className="map__roads">
              <div className="map__road" style={{ left:0, right:0, top:'48%', height:18 }}></div>
              <div className="map__road" style={{ top:0, bottom:0, left:'46%', width:14 }}></div>
              <div className="map__road" style={{ left:'10%', right:'10%', top:'20%', height:6, transform:'rotate(-4deg)' }}></div>
            </div>
            <div className="map__pin">
              <div className="map__label">Olympia · Генуэзская 24Б</div>
              <div className="p"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="logo">
          <span className="logo__mark"></span>
          <span>Olympia</span>
          <span className="logo__sub">med · Одесса</span>
        </div>
        <p>Медицинский центр эстетической косметологии · Лицензия МОЗ Украины</p>
        <div className="footer__meta">
          <span>© 2026</span>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Публичный договор</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TrustBar/>
      <Benefits/>
      <Process/>
      <ForWhom/>
      <Zones/>
      <Pricing/>
      <Safety/>
      <Prep/>
      <Specialist/>
      <Results/>
      <Reviews/>
      <FAQ/>
      <CTABlock/>
      <Contacts/>
      <Footer/>
      <StickyCTA/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
