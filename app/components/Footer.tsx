const columns = [
  { title: 'About', links: ['How it works', 'Featured', 'Partnership', 'Bussiness Relation'] },
  { title: 'Community', links: ['Events', 'Blog', 'Podcast', 'Invite a friend'] },
  { title: 'Socials', links: ['Discord', 'Instagram', 'Twitter', 'Facebook'] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="logo">MORENT</span>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {columns.map((c) => (
            <div className="footer__col" key={c.title}>
              <h2>{c.title}</h2>
              <div className="footer__links">
                {c.links.map((l) => <a href="#" key={l}>{l}</a>)}
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="footer__legal">
          <a href="#">Privacy &amp; Policy</a>
          <a href="#">Terms &amp; Condition</a>
        </div>
      </div>
    </footer>
  );
}
