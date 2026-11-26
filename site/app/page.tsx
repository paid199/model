/*
  type: software (site-kind software), a developer tool
  deal: hero triptych, nav nav-centre, close close-type, footer footer-columns, rhythm dark-band,
        buttons tonal, mark dots, radius sharp, lit ground sage,
        palette graphite-safety-orange (a near-black ground with one safety orange: the colour of a
        terminal and of the warning a lock check raises), type instrument (Instrument Sans + DM Mono)
  effect: grain-gradient in the one [data-visual] frame (#rules)
  moments: pinned-chapters in #how (the three steps of a review, one frame changing to each step)
  sections: hero (1) · review app-frame (1) · how pinned-chapters (2) · frameworks diagram on the
            inverse band (1) · rules split with the effect (1) · pricing-three (1) · faq (1) · footer.closing (1)
*/
import type { CSSProperties, ReactNode } from 'react';

const MAIN_ACTION = 'Add to GitHub';
// Stand-in until the GitHub App's install link exists (listed in the report).
const MAIN_HREF = 'mailto:hello@alterly.example?subject=Add%20Alterly%20to%20GitHub';

const css = (o: Record<string, string | number>) => o as CSSProperties;

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="m4.5 8.2 2.3 2.3 4.7-5" />
    </svg>
  );
}

/* one row of the unified diff: old number, new number, indent level, code */
function Ln({ o, n, i, kind, children }: { o?: number; n?: number; i: number; kind?: 'add' | 'del'; children?: ReactNode }) {
  return (
    <div className={'ui-diff__ln' + (kind ? ' is-' + kind : '')}>
      <i>{o ?? ''}</i>
      <i>{n ?? ''}</i>
      <span className="ui-diff__code" data-i={i}>
        <span className="ui-diff__ind">{'  '.repeat(i)}</span>
        {children}
      </span>
    </div>
  );
}

const PRS: [string, string, string, string, string, string][] = [
  // tone, initials, author, title · detail, status (Checking is worked on by the loop), age
  ['1', 'MR', 'mrios', 'Index orders by customer · +6 −1', 'Checking', '2m'],
  ['3', 'TK', 'tkovac', 'Widen invoices.total to numeric · +4 −0', 'Checking', '9m'],
  ['4', 'JA', 'j-adeyemi', 'Drop legacy_sessions table · +3 −0', 'Blocked', '17m'],
  ['2', 'SL', 'sleung', 'Backfill users.locale · +22 −0', 'Checking', '26m'],
  ['5', 'PB', 'pbarros', 'Add warehouse to order_items · +5 −0', 'Safe', '41m'],
  ['3', 'HN', 'hnakamura', 'Unique email on accounts · +7 −2', 'Blocked', '1h'],
  ['1', 'DV', 'dvoss', 'Rename carts.state to status · +9 −3', 'Safe', '2h'],
  ['4', 'EO', 'eokafor-dev', 'Partition events by month · +48 −0', 'Safe', '3h'],
  ['2', 'RG', 'rgarza', 'Add check on refunds.amount · +4 −0', 'Safe', '5h'],
  ['5', 'AL', 'alindqvist', 'Remove default on plans.tier · +2 −2', 'Safe', '6h'],
];

export default function Home() {
  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Skip to content</a>
          <a className="nav__logo" href="#top">
            <span className="mark" data-mark="dots" aria-hidden="true"></span>Alterly
          </a>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item"><a className="nav__link" href="#review">Review</a></div>
            <div className="nav__item"><a className="nav__link" href="#how">Steps</a></div>
            <div className="nav__item">
              <a className="nav__link" href="#rules">
                Rules{' '}
                <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="nav__menu">
                <div className="wrap grid">
                  <div className="menu-col span-3">
                    <p className="t-label">Checks</p>
                    <a href="#rules">Lock rules<span>38 rules from the lock table</span></a>
                    <a href="#how">Table sizes<span>Row counts copied each night</span></a>
                  </div>
                  <div className="menu-col span-3">
                    <p className="t-label">Sources</p>
                    <a href="#frameworks">Frameworks<span>Rails, Django, Prisma, Laravel</span></a>
                    <a href="#review">Pull requests<span>One comment per risky statement</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav__item"><a className="nav__link" href="#frameworks">Frameworks</a></div>
            <div className="nav__item"><a className="nav__link" href="#pricing">Pricing</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href={MAIN_HREF}>{MAIN_ACTION}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO: triptych. The collage shows three sets of Alterly's own output, changing every 2.8 s. */}
        <section className="hero hero--triptych" data-enter aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="span-3">
                <h1 id="hero-h">Migration checks for Postgres</h1>
                <p className="hero__lead">
                  Alterly reads each migration in a pull request, times the locks it takes on your real table sizes and
                  posts a safer rewrite. Free for up to 3 repositories.
                </p>
              </div>
              <div
                className="ly-collage span-6 start-4"
                role="img"
                aria-label="Alterly's review of an index migration: the warning that it blocks writes to orders for about 6 minutes, the concurrent rewrite, and the passing check"
              >
                <div className="ly-collage__set is-on">
                  <div className="ly-piece pc-sql" style={{ left: '4%', top: '4%', width: '66%', height: '30%' }}>
                    <span className="pc-file">add_customer_index.rb</span>
                    <code>
                      <span className="pc-k">def</span> change{'\n'}
                      {'  '}add_index <span className="pc-s">:orders</span>, <span className="pc-s">:customer_id</span>{'\n'}
                      <span className="pc-k">end</span>
                    </code>
                  </div>
                  <div className="ly-piece pc-warn" style={{ left: '30%', top: '38%', width: '66%', height: '58%' }}>
                    <span className="pc-tag"><i aria-hidden="true"></i>Blocks writes</span>
                    <strong>orders is locked while the index builds</strong>
                    <span className="pc-row"><span>Lock</span><b>SHARE</b></span>
                    <span className="pc-row"><span>Rows</span><b>41.2M</b></span>
                    <span className="pc-row"><span>Estimate</span><b>about 6 min</b></span>
                    <span className="pc-row"><span>Waits</span><b>INSERT, UPDATE, DELETE</b></span>
                    <span className="pc-fix">Rewrite: build the index concurrently</span>
                  </div>
                  <div className="ly-piece pc-chip" style={{ left: '4%', top: '40%', width: '22%' }}>
                    <span className="pc-x" aria-hidden="true"></span>1 blocking lock
                  </div>
                </div>
                <div className="ly-collage__set" aria-hidden="true">
                  <div className="ly-piece pc-sql pc-sql--ok" style={{ left: '4%', top: '4%', width: '70%', height: '50%' }}>
                    <span className="pc-file">Suggested rewrite</span>
                    <code>
                      disable_ddl_transaction!{'\n\n'}
                      <span className="pc-k">def</span> change{'\n'}
                      {'  '}add_index <span className="pc-s">:orders</span>, <span className="pc-s">:customer_id</span>,{'\n'}
                      {'    '}algorithm: <span className="pc-s">:concurrently</span>{'\n'}
                      <span className="pc-k">end</span>
                    </code>
                  </div>
                  <div className="ly-piece pc-sizes" style={{ left: '46%', top: '58%', width: '50%', height: '38%' }}>
                    <span className="pc-label">Table sizes, last night</span>
                    <span className="pc-row"><span>orders</span><b>41.2M</b></span>
                    <span className="pc-row"><span>order_items</span><b>133M</b></span>
                    <span className="pc-row"><span>customers</span><b>2.9M</b></span>
                  </div>
                </div>
                <div className="ly-collage__set" aria-hidden="true">
                  <div className="ly-piece pc-check" style={{ left: '4%', top: '4%', width: '64%' }}>
                    <span className="pc-ok" aria-hidden="true"></span>
                    <span><b>Alterly</b> · All migrations safe to merge</span>
                  </div>
                  <div className="ly-piece pc-plan" style={{ left: '4%', top: '22%', width: '62%', height: '44%' }}>
                    <span className="pc-label">Backfill plan for users.locale</span>
                    <span className="pc-row"><span>Batch size</span><b>10,000 rows</b></span>
                    <span className="pc-row"><span>Batches</span><b>412</b></span>
                    <span className="pc-row"><span>Pause between</span><b>50 ms</b></span>
                  </div>
                  <div className="ly-piece pc-sql" style={{ left: '40%', top: '72%', width: '56%', height: '24%' }}>
                    <span className="pc-file">Added before the migration</span>
                    <code>SET lock_timeout = <span className="pc-s">&apos;2s&apos;</span>;</code>
                  </div>
                </div>
              </div>
              <div className="span-3 start-10 hero__cta">
                <a className="btn btn--primary" href={MAIN_HREF}>{MAIN_ACTION}<Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEW: app-frame. The pull requests beside the open review of one migration. */}
        <section className="section" id="review" aria-labelledby="review-h">
          <div className="wrap">
            <div className="grid">
              <h2 id="review-h" className="span-5">Every migration pull request, reviewed</h2>
              <p className="span-6 start-7">
                Open a pull request that touches a migration. Alterly lists it, reads the SQL and leaves one comment
                per risky statement, with a rewrite you can apply. <a className="link" href="#rules">See the rules</a>
              </p>
            </div>
            <div className="ui app fill" role="img" aria-label="Alterly's window: ten migration pull requests with their status beside an open Rails migration, where Alterly suggests building the orders index concurrently" data-ui-pause-host>
              <div className="app__pane app__pane--list">
                <div className="ui ui-panel ui-win" data-ui="window" data-open="Checking" data-work="Reading" data-done="Reviewed">
                  <div className="ui-win__bar">
                    <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                    <span className="ui-win__crumb">
                      <img className="ui-brand" src="/assets/icons/github-icon.svg" alt="" width="14" height="14" loading="lazy" />
                      shopline/api <i>/</i> <b>Migrations</b>
                    </span>
                    <span className="ui-spacer"></span>
                    <span className="ui-win__search" aria-hidden="true">
                      <svg className="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
                      <span className="ui-win__ph">Search</span>
                      <span className="ui-kbd">/</span>
                    </span>
                  </div>
                  <div className="ui-win__body">
                    <nav className="ui-win__side" aria-hidden="true">
                      <span className="ui-win__nav is-on">Open<em>10</em></span>
                      <span className="ui-win__nav">Blocked<em>2</em></span>
                      <span className="ui-win__nav">Safe<em>5</em></span>
                      <span className="ui-win__nav">Merged</span>
                      <span className="ui-win__label">Views</span>
                      <span className="ui-win__nav"><span className="ui-win__hash">#</span>Billing</span>
                      <span className="ui-win__nav"><span className="ui-win__hash">#</span>Search</span>
                    </nav>
                    <div className="ui-win__main">
                      <div className="ui-win__cols" aria-hidden="true"><span>Author</span><span>Pull request</span><span>Status</span><span>Age</span></div>
                      <ul className="ui-win__rows">
                        {PRS.map(([tone, ini, who, sub, st, age]) => (
                          <li className="ui-win__row" data-row key={who}>
                            <span className="ui-avatar" data-tone={tone}>{ini}</span>
                            <span className="ui-win__who">{who}</span>
                            <span className="ui-win__sub">{sub}</span>
                            <span className={'ui-win__st' + (st === 'Blocked' ? ' is-you' : st === 'Safe' ? ' is-done' : '')} data-st>{st}</span>
                            <span className="ui-win__age">{age}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app__pane app__pane--open" data-ui-loop>
                <div className="ui ui-panel ui-diff" data-ui="diff-review">
                  <div className="ui-diff__head">
                    <svg className="ui-icon ui-diff__fold" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.25 3.5 3.5 3.5-3.5" /></svg>
                    <span className="ui-diff__tool" aria-hidden="true"><img src="/assets/icons/ruby.svg" alt="" width="16" height="16" loading="lazy" /></span>
                    <span className="ui-diff__repo">shopline/api</span><i className="ui-diff__slash" aria-hidden="true">/</i>
                    <span className="ui-diff__path"><span className="ui-diff__dir">db/migrate/</span><b>add_customer_index.rb</b></span>
                    <span className="ui-spacer"></span>
                    <span className="ui-diff__stat">
                      <b className="is-add"><span className="ui-diff__was">+6</span><span className="ui-diff__now">+7</span></b>
                      <b className="is-del"><span className="ui-diff__was">&minus;1</span><span className="ui-diff__now">&minus;2</span></b>
                      <span className="ui-diff__bar" aria-hidden="true"><i className="is-add"></i><i className="is-add"></i><i className="is-add"></i><i className="is-add"></i><i className="is-del"></i></span>
                    </span>
                  </div>
                  <div className="ui-diff__hunk"><span>@@ -1,18 +1,23 @@</span> <em className="ui-diff__sig">class AddCustomerIndexToOrders</em></div>
                  <div className="ui-diff__lines">
                    <Ln o={1} n={1} i={0}><span className="k">class</span> <span className="f">AddCustomerIndexToOrders</span> &lt; ActiveRecord::Migration</Ln>
                    <Ln o={2} n={2} i={1}><span className="k">def</span> <span className="f">change</span></Ln>
                    <Ln o={3} i={2} kind="del">add_column <span className="s">:orders</span>, <span className="s">:fulfilled_at</span>, <span className="s">:date</span></Ln>
                    <Ln n={3} i={2} kind="add">add_column <span className="s">:orders</span>, <span className="s">:fulfilled_at</span>, <mark className="ui-diff__w"><span className="s">:datetime</span></mark></Ln>
                    <div className="ui-diff__ln is-target" data-diff-target>
                      <i>4</i><i>4</i>
                      <span className="ui-diff__code" data-i="2"><span className="ui-diff__ind">    </span>add_index <span className="s">:orders</span>, <span className="s">:customer_id</span><mark className="ui-diff__w"></mark></span>
                    </div>
                    <div className="ui-diff__sug" data-diff-sug>
                      <div className="ui-diff__ln is-add"><i></i><i>4</i><span className="ui-diff__code" data-i="2"><span className="ui-diff__ind">    </span>add_index <span className="s">:orders</span>, <span className="s">:customer_id</span>, <mark className="ui-diff__w">algorithm: <span className="s">:concurrently</span></mark></span></div>
                    </div>
                    <div className="ui-diff__thread">
                      <div className="ui-diff__by">
                        <span className="ui-avatar" data-tone="4">AL</span>
                        <span className="ui-diff__name">Alterly</span>
                        <span className="ui-diff__time">40s</span>
                        <span className="ui-spacer"></span>
                        <span className="ui-diff__act" data-diff-act>
                          <button className="ui-btn ui-btn--sm ui-diff__apply" type="button" tabIndex={-1} data-diff-apply>
                            <span className="ui-diff__lbl">Apply rewrite</span><i className="ui-diff__spin" aria-hidden="true"></i>
                          </button>
                          <span className="ui-chip ui-diff__done">
                            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 8.4 2.6 2.6L12 5.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Applied
                          </span>
                        </span>
                      </div>
                      <div className="ui-diff__msg">Blocks writes to orders (41.2M rows) for about 6 min. Build it <code>concurrently</code>.</div>
                    </div>
                    <Ln n={5} i={2} kind="add">add_reference <span className="s">:order_items</span>, <span className="s">:warehouse</span>, index: <span className="k">false</span></Ln>
                    <Ln n={6} i={2} kind="add">add_foreign_key <span className="s">:order_items</span>, <span className="s">:warehouses</span>, validate: <span className="k">false</span></Ln>
                    <Ln o={5} n={7} i={1}><span className="k">end</span></Ln>
                    <Ln o={6} n={8} i={0}></Ln>
                    <Ln o={7} n={9} i={1}><span className="k">def</span> <span className="f">down</span></Ln>
                    <Ln n={10} i={2} kind="add">remove_foreign_key <span className="s">:order_items</span>, <span className="s">:warehouses</span></Ln>
                    <Ln n={11} i={2} kind="add">remove_reference <span className="s">:order_items</span>, <span className="s">:warehouse</span></Ln>
                    <Ln o={8} n={12} i={2}>remove_index <span className="s">:orders</span>, <span className="s">:customer_id</span></Ln>
                    <Ln o={9} n={13} i={2}>remove_column <span className="s">:orders</span>, <span className="s">:fulfilled_at</span></Ln>
                    <Ln o={10} n={14} i={1}><span className="k">end</span></Ln>
                    <Ln o={11} n={15} i={0}><span className="k">end</span></Ln>
                    <Ln o={12} n={16} i={0}></Ln>
                    <Ln o={13} n={17} i={0}><span className="n"># Alterly: 2 statements checked, 1 rewrite</span></Ln>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW: pinned-chapters, two screens live. Three steps beside one frame. */}
        <section className="section" id="how" style={css({ '--h': 2 })} data-moment="pinned-chapters" aria-labelledby="how-h">
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <h2 id="how-h">How Alterly reviews a migration</h2>
              <ol className="mo-pc__steps">
                <li className="mo-pc__step">
                  <h3>1. Reads the SQL your framework sends</h3>
                  <p>It runs the migration against an empty copy of your schema and records each statement Postgres receives.</p>
                  <figure className="mo-pc__visual">
                    <div className="pcv" role="img" aria-label="The three SQL statements recorded from the Rails migration">
                      <span className="pcv__head">Recorded statements · 3</span>
                      <code>ALTER TABLE orders ALTER COLUMN fulfilled_at TYPE timestamp;</code>
                      <code className="is-hot">CREATE INDEX index_orders_on_customer_id ON orders (customer_id);</code>
                      <code>ALTER TABLE order_items ADD COLUMN warehouse_id bigint;</code>
                    </div>
                  </figure>
                </li>
                <li className="mo-pc__step">
                  <h3>2. Times each lock on your table sizes</h3>
                  <p>A read-only role copies row counts and sizes from pg_class each night. No rows leave your database.</p>
                  <figure className="mo-pc__visual">
                    <div className="pcv" role="img" aria-label="Estimated lock times: the type change 2 minutes, the index 6 minutes, the new column under a second">
                      <span className="pcv__head">Estimated lock time on orders, 41.2M rows</span>
                      <span className="pcv__bar"><span>Type change</span><i style={css({ '--w': '34%' })}></i><b>2 min</b></span>
                      <span className="pcv__bar is-hot"><span>Index build</span><i style={css({ '--w': '100%' })}></i><b>6 min</b></span>
                      <span className="pcv__bar"><span>New column</span><i style={css({ '--w': '2%' })}></i><b>under 1 s</b></span>
                    </div>
                  </figure>
                </li>
                <li className="mo-pc__step">
                  <h3>3. Comments on the pull request</h3>
                  <p>Each risky statement gets one comment on the pull request with the reason and the rewrite, and the check turns red.</p>
                  <figure className="mo-pc__visual">
                    <div className="pcv" role="img" aria-label="The GitHub check: Alterly found two blocking locks in one file">
                      <span className="pcv__head">Checks · shopline/api #2291</span>
                      <span className="pcv__check"><span className="pc-x" aria-hidden="true"></span><b>Alterly</b>2 blocking locks in 1 file</span>
                      <span className="pcv__check"><span className="pc-ok" aria-hidden="true"></span><b>CI</b>All 1,204 tests passed</span>
                      <span className="pcv__note">Merging is blocked until the rewrite is applied or the comment is resolved.</span>
                    </div>
                  </figure>
                </li>
              </ol>
            </div>
            <div className="mo-pc__visuals frame"></div>
          </div>
        </section>

        {/* FRAMEWORKS: the dark band (inverse ground), a hub diagram with the real marks. */}
        <section className="section ground-inverse" id="frameworks" aria-labelledby="frameworks-h">
          <div className="wrap">
            <div className="grid">
              <h2 id="frameworks-h" className="span-5">Works with the migrations you write</h2>
              <p className="span-6 start-7">
                Alterly reads Rails, Django, Prisma and Laravel migrations and plain .sql files, then reports on the pull request.
              </p>
            </div>
            <div className="frame frame--diagram fill">
              <div
                className="dg"
                data-icon-base="/assets/icons/"
                data-diagram={JSON.stringify({
                  layout: 'hub',
                  size: 'band',
                  alt: 'Alterly reads migrations from Rails, Django, Prisma and Laravel, checks them against PostgreSQL and reports to GitHub.',
                  center: { label: 'Alterly' },
                  spokes: [
                    { label: 'Rails', icon: 'logos:rails' },
                    { label: 'Django', icon: 'logos:django-icon' },
                    { label: 'Prisma', icon: 'logos:prisma' },
                    { label: 'Laravel', icon: 'logos:laravel' },
                    { label: 'PostgreSQL', icon: 'logos:postgresql' },
                    { label: 'GitHub', icon: 'logos:github-icon' },
                  ],
                })}
              ></div>
            </div>
          </div>
        </section>

        {/* RULES: split-text-left; the frame is the page's one [data-visual] and holds the effect. */}
        <section className="section" id="rules" aria-labelledby="rules-h">
          <div className="wrap">
            <div className="grid">
              <div className="span-5 stack-5">
                <h2 id="rules-h">38 lock rules for Postgres</h2>
                <p className="t-lead">
                  Written from the Postgres lock table, they catch what stops writes: index builds, type changes that rewrite every row, unbatched backfills.
                </p>
                <ul className="plain-facts">
                  <li>Postgres 13 to 17</li>
                  <li>About 40 seconds a pull request</li>
                  <li>Mutes a rule per table, with a reason</li>
                </ul>
                <a className="link" href="#pricing">Compare the plans</a>
              </div>
              <div className="frame frame--split span-6 start-7" data-visual data-fx="grain-gradient" data-fx-seed="14">
                <div className="stage stage--fade-br">
                  <div className="at-rise fit" style={css({ '--fit-max': '340px', '--ax': 'max(24px, 50% - 170px)', '--ay': '40px', '--ay-sm': '24px' })}>
                    <div className="ui ui-panel ui-checks" data-ui="checklist">
                      <div className="ui-checks__head">
                        <div className="ui-title">Checks on #2291</div>
                        <span className="ui-spacer"></span>
                        <div className="ui-meta" data-checks-count>3 of 5</div>
                      </div>
                      <div className="ui-checks__bar"><i data-checks-bar style={css({ '--k': 0.6 })}></i></div>
                      <ul className="ui-checks__list">
                        <li className="ui-check is-done"><span className="ui-check__box"><Check /></span><span className="ui-check__label">No table rewrite</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Foreign key added NOT VALID</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><Check /></span><span className="ui-check__label">lock_timeout set to 2s</span></li>
                        <li className="ui-check"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Index built concurrently</span></li>
                        <li className="ui-check"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Backfill split into batches</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING: pricing-three, still. */}
        <section className="section" id="pricing" aria-labelledby="pricing-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="pricing-h">Pricing. <span className="muted">Every plan runs all 38 rules.</span></h2>
            </div>
            <div className="grid">
              <article className="card card--plan span-4 m-nolift">
                <h3>Free</h3>
                <p className="muted">For side projects and small teams</p>
                <p className="price"><span className="t-stat">$0</span></p>
                <span className="plan-icons"><img src="/assets/icons/github-icon.svg" alt="GitHub" width="24" height="24" loading="lazy" /><img src="/assets/icons/postgresql.svg" alt="PostgreSQL" width="24" height="24" loading="lazy" /></span>
                <a className="btn btn--secondary" href="mailto:hello@alterly.example?subject=Free%20plan">Get the free plan</a>
                <ul className="checks">
                  <li>Up to 3 repositories</li>
                  <li>Comments and a GitHub check</li>
                  <li>Table stats copied nightly</li>
                  <li>30 days of review history</li>
                </ul>
              </article>
              <article className="card card--plan span-4 is-featured m-nolift">
                <h3>Team</h3>
                <span className="badge plan-badge">14-day trial</span>
                <p className="muted">For teams that ship migrations every week</p>
                <p className="price"><span className="t-stat">$24</span><span className="muted">per developer a month</span></p>
                <span className="plan-icons"><img src="/assets/icons/github-icon.svg" alt="GitHub" width="24" height="24" loading="lazy" /><img src="/assets/ui/icons/slack.svg" alt="Slack" width="24" height="24" loading="lazy" /><img src="/assets/icons/postgresql.svg" alt="PostgreSQL" width="24" height="24" loading="lazy" /></span>
                <a className="btn btn--primary" href="mailto:hello@alterly.example?subject=Team%20trial">Start a Team trial</a>
                <ul className="checks">
                  <li>Unlimited repositories</li>
                  <li>Slack alert when a merge is blocked</li>
                  <li>Lock timeouts suggested per table</li>
                  <li>Review history kept for a year</li>
                </ul>
              </article>
              <article className="card card--plan span-4 m-nolift">
                <h3>Self-hosted</h3>
                <p className="muted">For teams whose stats stay in their network</p>
                <p className="price"><span className="t-stat">Price on request</span></p>
                <span className="plan-icons"><img src="/assets/ui/icons/kubernetes.svg" alt="Kubernetes" width="24" height="24" loading="lazy" /><img src="/assets/ui/icons/github.svg" alt="GitHub Enterprise Server" width="24" height="24" loading="lazy" /><img src="/assets/icons/postgresql.svg" alt="PostgreSQL" width="24" height="24" loading="lazy" /></span>
                <a className="btn btn--secondary" href="mailto:hello@alterly.example?subject=Self-hosted">Request a quote</a>
                <ul className="checks">
                  <li>Runs in your Kubernetes cluster</li>
                  <li>SAML sign-in</li>
                  <li>Audit log export</li>
                  <li>GitHub Enterprise Server</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ: the page's split, every answer open. */}
        <section className="section" id="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-4">
                <h2 id="faq-h">Questions</h2>
                <p className="muted">About your data, setup and what Alterly does not check.</p>
                <a className="link" href="#contact">Email the team</a>
                <div className="pcv pcv--role" role="img" aria-label="The read-only role Alterly asks for: it can read table statistics and nothing else">
                  <span className="pcv__head">The role Alterly asks for</span>
                  <code>CREATE ROLE alterly LOGIN;{'\n'}GRANT pg_read_all_stats TO alterly;</code>
                  <span className="pcv__check"><span className="pc-ok" aria-hidden="true"></span>Reads row counts, sizes and indexes</span>
                  <span className="pcv__check"><span className="pc-x" aria-hidden="true"></span>No SELECT on your tables</span>
                </div>
              </div>
              <div className="faq span-6 start-7">
                <div className="faq__item">
                  <h3>Does Alterly read rows from my database?</h3>
                  <p>No. Its read-only role sees pg_class and pg_stat_user_tables: row counts, sizes and indexes. It never selects from your tables.</p>
                </div>
                <div className="faq__item">
                  <h3>Does Alterly work with MySQL?</h3>
                  <p>No. Alterly checks Postgres 13 to 17 only, because lock rules differ too much between databases.</p>
                </div>
                <div className="faq__item">
                  <h3>Can Alterly block a merge?</h3>
                  <p>Yes, when you make its check required in your branch rules. Otherwise it comments and the check turns red.</p>
                </div>
                <div className="faq__item">
                  <h3>How exact are the lock estimates?</h3>
                  <p>They use last night&apos;s row counts, so a table that grew today reads low. Each comment shows the counts it used.</p>
                </div>
                <div className="faq__item">
                  <h3>Can I cancel a plan at any time?</h3>
                  <p>Yes. Remove the app from GitHub and billing stops at the end of the month.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Check your next migration before it ships</h2>
              <p className="t-small muted">Free for up to 3 repositories. No card needed.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href={MAIN_HREF}>{MAIN_ACTION}<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true"></span>Alterly</a>
                <p className="footer__lede">Lock checks for Postgres migrations.</p>
              </div>
              <div className="span-2 footer__col"><h3>Review</h3><ul><li><a href="#review">Pull requests</a></li><li><a href="#how">Steps</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Rules</h3><ul><li><a href="#rules">Lock rules</a></li><li><a href="#frameworks">Frameworks</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Pricing</h3><ul><li><a href="#pricing">Plans</a></li><li><a href="#faq">Questions</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Company</h3><ul><li><a href="mailto:hello@alterly.example">Email us</a></li><li><a href="/privacy.html">Privacy</a></li></ul></div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Alterly &nbsp; <a href="/privacy.html">Privacy</a> &nbsp; <a href="/terms.html">Terms</a></span>
              <div className="socials"></div>
              <span className="credits">Product names and logos are trademarks of their owners</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
