const { useState, useEffect, useRef, useMemo } = React;

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ["Процедура", "process"],
    ["Зоны", "zones"],
    ["Цены", "pricing"],
    ["Безопасность", "safety"],
    ["Отзывы", "reviews"],
    ["FAQ", "faq"],
  ];
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo">
          <span className="logo__mark"></span>
          <span>Olympia</span>
          <span className="logo__sub">med · Одесса</span>
        </a>
        <nav className="nav__links">
          {links.map(([t, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'nav__link--active' : ''}>{t}</a>
          ))}
        </nav>
        <div className="nav__cta">
          <span className="nav__phone">+380 48 700 04 00</span>
          <a href="#cta" className="btn btn--primary">Записаться</a>
        </div>
      </div>
    </header>
  );
}

function StickyCTA() {
  return (
    <div className="sticky-cta">
      <div>
        <b>Консультация бесплатно</b>
        <span>Скидка 20% на первое посещение</span>
      </div>
      <a href="#cta" className="btn btn--primary">Записаться</a>
    </div>
  );
}

function SectionHead({ eyebrow, title, desc, action }) {
  return (
    <div className="sec-head">
      <div className="sec-head__left">
        {eyebrow && <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>}
        <h2 className="h2">{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {action}
    </div>
  );
}

window.Nav = Nav;
window.StickyCTA = StickyCTA;
window.SectionHead = SectionHead;
