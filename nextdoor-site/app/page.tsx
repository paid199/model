/*
  type: service (site-kind other): Next Door Photos, Cincinnati / Dayton, real estate photography
  deal: hero photo, nav nav-mega, close close-type, footer footer-dark (footer-visit dealt, re-dealt:
        the listing gives no street), rhythm surface-pairs, buttons tonal, mark wordmark, radius soft,
        palette white-signal-red (white like a freshly shot, bright room, one red for the action),
        type hanken (Hanken Grotesk)
  moments: pinned-chapters in #process (the three steps from request to delivery, one photograph each)
  sections: hero (1) · services peek-list (1) · process pinned-chapters (2) · quote booking-form (1) · footer.closing (1)
  Every photograph is a stand-in from Wikimedia Commons until the company's own work replaces it.
*/
import type { CSSProperties } from 'react';

const MAIN_ACTION = 'Request a quote';
// The quote form posts to a form service (Formspree, Web3Forms, Basin...) when this is set at build time:
//   NEXT_PUBLIC_QUOTE_ENDPOINT=https://formspree.io/f/xxxxxxx npm run build
// Without it the form falls back to opening the visitor's email app (a stand-in address).
const QUOTE_ENDPOINT = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT ?? '';
const QUOTE_EMAIL = process.env.NEXT_PUBLIC_QUOTE_EMAIL ?? 'quotes@nextdoorphotos.example';

const css = (o: Record<string, string | number>) => o as CSSProperties;

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Skip to content</a>
          <a className="nav__logo" href="#top">Next Door Photos</a>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item">
              <a className="nav__link" href="#services">
                Services{' '}
                <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="nav__menu">
                <div className="wrap grid">
                  <div className="menu-col span-3">
                    <p className="t-label">Photographs</p>
                    <a href="#services">Interior photos<span>Every room, bright and level</span></a>
                    <a href="#services">Aerial photos<span>The house, the lot, the street</span></a>
                  </div>
                  <div className="menu-col span-3">
                    <p className="t-label">Video</p>
                    <a href="#services">Video walkthroughs<span>A tour for the listing page</span></a>
                    <a href="#process">How a shoot works<span>From request to delivery</span></a>
                  </div>
                  <a className="menu-card span-3 start-10" href="#quote">
                    <div className="panel"><img className="frame__img" src="/img/aerial-town-960.jpg" alt="A small town of houses and fields seen from a drone" loading="lazy" width="960" height="640" /></div>
                    <span className="t-card">Quotes for every listing</span>
                    <span className="t-small muted">Send the address and what you need</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav__item"><a className="nav__link" href="#process">Process</a></div>
            <div className="nav__item"><a className="nav__link" href="#quote">Quotes</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href="#quote">{MAIN_ACTION}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO: the photo hero, the words in a solid box on the photograph's left */}
        <section className="hero hero--photo" data-enter data-calm="left" aria-labelledby="hero-h">
          <img
            className="hero__bg"
            src="/img/house-tudor-1920.jpg"
            srcSet="/img/house-tudor-960.jpg 960w, /img/house-tudor-1920.jpg 1920w"
            sizes="100vw"
            alt="A half-timbered brick house on a wide green lawn under a blue spring sky"
            style={css({ '--ly-pos': '62% 50%', '--ly-pos-phone': '60% 50%' })}
            fetchPriority="high"
            width="1920"
            height="1439"
          />
          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text">
                <h1 id="hero-h">Real estate photos in Cincinnati</h1>
                <p className="hero__lead">
                  Next Door Photos shoots homes for sale across Cincinnati and Dayton: interiors, aerials and video for
                  the listing. Send the address and get a quote.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#quote">{MAIN_ACTION}<Arrow /></a>
                  <a className="btn btn--secondary" href="#services">See the services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES: peek-list, each row with its own photograph */}
        <section className="section ground-surface" id="services" aria-labelledby="services-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="services-h">Photos, aerials and video for listings</h2>
              <p>Each quote is put together for the property and the services it needs.</p>
            </div>
            <div className="grid grid--top fill" data-peek>
              <ul className="rows span-5">
                <li data-peek-to="interior" tabIndex={0}>
                  <span className="rows__name">Interior photos</span>
                  <p>Every room shot bright and level, with straight walls and the view through the windows kept.</p>
                </li>
                <li data-peek-to="aerial" tabIndex={0}>
                  <span className="rows__name">Aerial photos</span>
                  <p>The house, the lot lines and the neighborhood from above, shot by drone.</p>
                </li>
                <li data-peek-to="video" tabIndex={0}>
                  <span className="rows__name">Video walkthroughs</span>
                  <p>A steady walk through the home, room by room, for the listing page and social posts.</p>
                </li>
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" data-peek-for="interior" src="/img/kitchen-wood-1280.jpg" srcSet="/img/kitchen-wood-640.jpg 640w, /img/kitchen-wood-1280.jpg 1280w" sizes="(max-width: 639px) 170vw, (max-width: 1023px) 100vw, 50vw" alt="A kitchen with wood slat walls, under-cabinet lights and a white stone counter" width="1280" height="854" />
                <img className="frame__img" data-peek-for="aerial" src="/img/aerial-dusk-1920.jpg" srcSet="/img/aerial-dusk-960.jpg 960w, /img/aerial-dusk-1920.jpg 1920w" sizes="(max-width: 639px) 170vw, (max-width: 1023px) 100vw, 50vw" alt="Tree-lined streets of houses seen from above in evening light" width="1920" height="1080" hidden />
                <img className="frame__img" data-peek-for="video" src="/img/living-kitchen-1920.jpg" srcSet="/img/living-kitchen-960.jpg 960w, /img/living-kitchen-1920.jpg 1920w" sizes="(max-width: 639px) 170vw, (max-width: 1023px) 100vw, 50vw" alt="An open living room and kitchen under a wood-beamed ceiling with large windows" width="1920" height="1281" hidden />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS: pinned-chapters, two screens live */}
        <section className="section" id="process" style={css({ '--h': 2 })} data-moment="pinned-chapters" aria-labelledby="process-h">
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <h2 id="process-h">Listing shoots in 3 steps</h2>
              <ol className="mo-pc__steps">
                <li className="mo-pc__step">
                  <h3>1. Send the property details</h3>
                  <p>Fill in the quote form with the address, the services you need and a date that suits the sellers.</p>
                  <figure className="mo-pc__visual"><img src="/img/kitchen-dining-1280.jpg" alt="A white kitchen and dining table, ready to be photographed" width="1280" height="854" loading="lazy" /></figure>
                </li>
                <li className="mo-pc__step">
                  <h3>2. Get a quote and book the shoot</h3>
                  <p>We reply with a quote for that home and a time to shoot. Have the rooms tidy and the lights on.</p>
                  <figure className="mo-pc__visual"><img src="/img/kitchen-window-1280.jpg" alt="A kitchen counter with a sink under a wide window" width="1280" height="854" loading="lazy" /></figure>
                </li>
                <li className="mo-pc__step">
                  <h3>3. Receive the finished photos</h3>
                  <p>The edited photos arrive online, sized for the MLS and for print, ready to upload.</p>
                  <figure className="mo-pc__visual"><img src="/img/bedroom-1280.jpg" alt="A made bed with white linen beside a dark patterned wall" width="1280" height="854" loading="lazy" /></figure>
                </li>
              </ol>
            </div>
            <div className="mo-pc__visuals frame"></div>
          </div>
        </section>

        {/* QUOTE: booking-form in the page's split */}
        <section className="section ground-surface" id="quote" aria-labelledby="quote-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-5">
                <h2 id="quote-h">Quote form for listing photos</h2>
                <p className="t-lead">Tell us about the home and what it needs. We reply with a price and the first open time to shoot.</p>
                <ul className="plain-facts">
                  <li>Homes for sale in Cincinnati and Dayton</li>
                  <li>Interior photos, aerials and video</li>
                  <li>Reply by email, or by phone if you leave a number</li>
                </ul>
                <div className="frame frame--photo quote-photo"><img className="frame__img" src="/img/dining-1280.jpg" srcSet="/img/dining-640.jpg 640w, /img/dining-1280.jpg 1280w" sizes="(max-width: 1023px) 100vw, 40vw" alt="A dining table set for four beside a kitchen with wood panels" width="1280" height="854" loading="lazy" /></div>
              </div>
              <form
                className="form quote-form span-6 start-7"
                action={QUOTE_ENDPOINT || `mailto:${QUOTE_EMAIL}`}
                method="post"
                encType={QUOTE_ENDPOINT ? 'multipart/form-data' : 'text/plain'}
                data-endpoint={QUOTE_ENDPOINT}
                data-sent="Your quote request is in. We reply with a price and a time to shoot."
                noValidate
              >
                <input type="hidden" name="_subject" value="New quote request from the website" />
                <div className="field">
                  <label htmlFor="f-name">Your name</label>
                  <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
                  <p className="field__error" id="f-name-err" hidden>Write your name so we know who to reply to.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
                  <p className="field__error" id="f-email-err" hidden>Write an email address with an @, like name@example.com.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-phone">Phone (optional)</label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
                </div>
                <div className="field">
                  <label htmlFor="f-address">Property address</label>
                  <input id="f-address" name="property_address" type="text" autoComplete="street-address" required aria-describedby="f-address-err" />
                  <p className="field__error" id="f-address-err" hidden>Write the street and town of the home to photograph.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-service">Service</label>
                  <select id="f-service" name="service" required aria-describedby="f-service-err" defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option>Interior and exterior photos</option>
                    <option>Photos and aerials</option>
                    <option>Photos, aerials and video</option>
                    <option>Video walkthrough only</option>
                    <option>Not sure yet</option>
                  </select>
                  <p className="field__error" id="f-service-err" hidden>Choose the service you need, or Not sure yet.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-notes">About the home (optional)</label>
                  <textarea id="f-notes" name="notes" rows={3}></textarea>
                </div>
                <div className="btn-row"><button className="btn btn--primary" type="submit">{MAIN_ACTION}</button></div>
                <p className="form__status" role="status" data-form-status></p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Get your next listing photographed</h2>
              <p className="t-small">Homes for sale in Cincinnati and Dayton.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#quote">{MAIN_ACTION}<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo footer__name" href="#top">Next Door Photos</a>
                <p className="footer__lede">Real estate photography in Cincinnati and Dayton.</p>
              </div>
              <div className="span-2 footer__col"><h3>Services</h3><ul><li><a href="#services">Interior photos</a></li><li><a href="#services">Aerials and video</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Process</h3><ul><li><a href="#process">How it works</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Quotes</h3><ul><li><a href="#quote">Quote form</a></li><li><a href={`mailto:${QUOTE_EMAIL}`}>Email us</a></li></ul></div>
              <div className="span-2 footer__col"><h3>About</h3><ul><li><a href="/privacy.html">Privacy</a></li><li><a href="/credits.html">Photo credits</a></li></ul></div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Next Door Photos Cincinnati / Dayton &nbsp; <a href="/privacy.html">Privacy</a></span>
              <div className="socials"></div>
              <a className="credits" href="/credits.html">Photographs via Wikimedia Commons</a>
            </div>
          </div>
        </div>
      </footer>
      <nav className="actionbar" aria-label="Quick actions">
        <a className="btn btn--primary" href="#quote">{MAIN_ACTION}</a>
      </nav>
    </>
  );
}
