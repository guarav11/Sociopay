import React, { useEffect, useMemo, useState } from 'react';

const stats = [
  { value: 'All-in-one', label: 'Members, payments, expenses, reports, and complaints in one workflow' },
  { value: 'Razorpay-ready', label: 'Online maintenance collection with server-side verification and linked accounts' },
  { value: 'Cross-platform', label: 'Built for Android and iOS with resident and admin flows' },
];

const features = [
  {
    id: '01',
    title: 'Resident payment tracking',
    body: 'Residents can review dues, payment status, receipts, and monthly history without chasing updates manually.',
  },
  {
    id: '02',
    title: 'Online maintenance collection',
    body: 'Collect maintenance through Razorpay-backed flows with server-side order creation and verification.',
  },
  {
    id: '03',
    title: 'Member management',
    body: 'Admins can manage residents, payment state, and society membership from one clear dashboard.',
  },
  {
    id: '04',
    title: 'Expense records and reports',
    body: 'Track expenses, filter categories, and export summaries so financial operations stay organized.',
  },
  {
    id: '05',
    title: 'PDF receipts and reminders',
    body: 'Generate shareable receipts and send monthly reminders to keep collections predictable.',
  },
  {
    id: '06',
    title: 'Complaints and admin visibility',
    body: 'Residents can raise issues while admins review activity, reports, and operational details in one place.',
  },
];

const steps = [
  {
    title: 'Create your society workspace',
    body: 'Register your society and let the first approved account become the admin for setup and control.',
  },
  {
    title: 'Add members and configure billing',
    body: 'Set default maintenance amounts, organize residents, and prepare monthly payment operations.',
  },
  {
    title: 'Collect and verify payments',
    body: 'Residents pay through the app while admins track status, confirmations, and receipts.',
  },
  {
    title: 'Monitor finances and operations',
    body: 'Review expenses, reports, reminders, and complaints from a single operational view.',
  },
];

const trustPoints = [
  'Supabase-backed authentication and persistent sessions',
  'Server-side payment order creation and signature verification',
  'Transparent reports, payment history, and exportable receipts',
];

const investorPoints = [
  {
    title: 'Sticky operational product',
    body: 'Maintenance billing, expenses, receipts, and complaints create recurring usage instead of one-time engagement.',
  },
  {
    title: 'Multi-role value',
    body: 'Residents, admins, and society owners all get distinct value, which strengthens retention and word-of-mouth adoption.',
  },
  {
    title: 'Fintech + operations layer',
    body: 'Payments are only the entry point. Sociopay grows into reporting, reminders, compliance, exports, and community workflows.',
  },
];

const useCases = [
  'Apartment societies collecting monthly maintenance dues',
  'Resident admins tracking expenses and financial summaries',
  'Communities that need reminders, receipts, and complaint management',
];

const testimonials = [
  {
    quote: 'Our collection follow-up used to happen across calls, chats, and spreadsheets. Sociopay made the whole process visible in one place.',
    name: 'R. Mehta',
    role: 'Society Treasurer',
  },
  {
    quote: 'Residents immediately understood where to pay, what was pending, and how to access receipts. That alone reduced confusion dramatically.',
    name: 'A. Shah',
    role: 'Housing Committee Admin',
  },
  {
    quote: 'The strongest part is that it does not stop at payments. Expenses, reports, reminders, and complaints all stay connected.',
    name: 'N. Patel',
    role: 'Property Operations Lead',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹0',
    cadence: '/pilot',
    description: 'For early trials with one society validating the workflow.',
    features: ['Single society setup', 'Resident payments and receipts', 'Basic member and expense tracking'],
  },
  {
    name: 'Growth',
    price: 'Custom',
    cadence: '/society',
    description: 'For active housing societies that want a full digital operations layer.',
    features: ['Reports and exports', 'Complaints and reminders', 'Razorpay-linked collection setup'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    cadence: '',
    description: 'For larger operators managing multiple communities or custom workflows.',
    features: ['Multi-society rollout planning', 'Custom onboarding and deployment', 'Priority support and roadmap alignment'],
  },
];

const deploymentSteps = [
  'Run `npm install` and `npm run build` to produce the static site in `dist`.',
  'Deploy to Netlify for built-in form handling, or deploy to Vercel with `VITE_CONTACT_FORM_ENDPOINT` set.',
  'Point the contact form to your own API if you want CRM capture, email routing, or lead automation.',
];

const previewScreens = [
  {
    title: 'Dashboard',
    subtitle: 'Welcome back, Admin',
    badge: 'Monthly View',
    metric: '₹48,000',
    metricLabel: 'Closing Balance',
    variant: 'dashboard',
    stats: [
      { label: 'Total Members', value: '128' },
      { label: 'Paid', value: '92' },
      { label: 'Pending', value: '36' },
    ],
    rows: [
      { label: 'Opening Balance', value: '₹22,000' },
      { label: 'Net Collected', value: '₹3,56,000' },
      { label: 'Expenses', value: '₹1,18,000' },
    ],
  },
  {
    title: 'Members',
    subtitle: 'Members',
    badge: '128 residents',
    metric: 'May',
    metricLabel: 'Billing month',
    variant: 'members',
    actions: ['Export PDF', 'Export CSV'],
    rows: [
      { label: 'A-102 • Priya Shah', value: 'Paid' },
      { label: 'B-204 • Amit Jain', value: 'Pending' },
      { label: 'C-310 • Neha Patel', value: 'Paid' },
    ],
  },
  {
    title: 'Reports',
    subtitle: 'Monthly snapshot',
    badge: 'Export reports',
    metric: '₹3,56,000',
    metricLabel: 'Net Collected',
    variant: 'reports',
    tiles: [
      { label: 'Opening Balance', value: '₹22,000' },
      { label: 'Gateway Charges', value: '₹2,140' },
      { label: 'Pending Flats', value: '36' },
      { label: 'Receipts Shared', value: '24' },
    ],
    rows: [
      { label: 'Share My Receipt', value: 'Enabled' },
      { label: 'Export PDF', value: 'Ready' },
    ],
  },
  {
    title: 'Profile',
    subtitle: 'Resident and admin settings',
    badge: 'Payment Settings',
    metric: 'acc_xxxxx',
    metricLabel: 'Linked Account ID',
    variant: 'profile',
    details: [
      { label: 'Society', value: 'Palm Residency' },
      { label: 'Residents', value: '128' },
      { label: 'Payment status', value: 'Paid' },
    ],
    rows: [
      { label: 'Monthly reminders', value: 'Enabled' },
      { label: 'Raise Complaint', value: 'Available' },
      { label: 'Edit Maintenance Amount', value: 'Admin' },
    ],
  },
];

const faqItems = [
  {
    question: 'What does Sociopay help a housing society manage?',
    answer:
      'Sociopay brings together member management, maintenance payments, receipts, expenses, reminders, reports, and complaint handling in one app.',
  },
  {
    question: 'Can residents pay online?',
    answer:
      'Yes. The app is designed around online maintenance collection using Razorpay-backed payment flows with server-side verification.',
  },
  {
    question: 'Is there an admin view?',
    answer:
      'Yes. Admins can manage members, monitor payment status, review expenses, export reports, and oversee operational activity across the society.',
  },
  {
    question: 'Does the app support receipts and reminders?',
    answer:
      'Yes. Residents can access PDF receipts, and the product includes monthly reminder flows and push-notification scaffolding for due alerts.',
  },
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
  botField: '',
};

const supportEmail = 'hello@sociopay.app';

function encodeForm(data) {
  return new URLSearchParams(data).toString();
}

function PreviewCard({ screen }) {
  return (
    <article className={`screen-card screen-card-${screen.variant} reveal`}>
      <div className="screen-card-top">
        <div>
          <p>{screen.subtitle}</p>
          <h3>{screen.title}</h3>
        </div>
        <span className="screen-badge">{screen.badge}</span>
      </div>
      <div className="screen-metric">
        <strong>{screen.metric}</strong>
        <span>{screen.metricLabel}</span>
      </div>

      {screen.stats ? (
        <div className="screen-stat-grid">
          {screen.stats.map((item) => (
            <div className="screen-stat-pill" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {screen.actions ? (
        <div className="screen-action-row">
          {screen.actions.map((item) => (
            <span className="screen-action-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {screen.tiles ? (
        <div className="screen-tile-grid">
          {screen.tiles.map((tile) => (
            <div className="screen-tile" key={tile.label}>
              <span>{tile.label}</span>
              <strong>{tile.value}</strong>
            </div>
          ))}
        </div>
      ) : null}

      {screen.details ? (
        <div className="screen-detail-list">
          {screen.details.map((detail) => (
            <div className="screen-detail" key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>
      ) : null}

      <div className="screen-rows">
        {screen.rows.map((row) => (
          <div className="screen-row" key={row.label}>
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="page-shell legal-page">
      <header className="topbar reveal is-visible">
        <a className="brand" href="/#hero">
          <img className="brand-logo" src="/sociopay-icon.png" alt="Sociopay logo" />
          <span>
            Sociopay
            <small>Society operations</small>
          </span>
        </a>
        <nav className="nav">
          <a href="/#features">Features</a>
          <a href="/#contact">Contact</a>
          <a href="/#privacy">Privacy</a>
        </nav>
      </header>

      <main className="legal-card">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Sociopay Privacy Policy</h1>
        <p className="legal-updated">Last updated: 20 May 2026</p>

        <section>
          <h2>1. Who We Are</h2>
          <p>
            Sociopay is a society maintenance management app for residential societies,
            administrators, and residents. It helps manage member records, maintenance dues,
            payments, receipts, expenses, complaints, reminders, and operational reports.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect account and society information such as name, email address, phone
            number, flat or unit number, society name, role, payment status, complaint details,
            expense records, reminder preferences, and technical logs needed to operate and secure
            the service.
          </p>
        </section>

        <section>
          <h2>3. Payments</h2>
          <p>
            Sociopay uses Razorpay-backed payment flows for maintenance collection. Payment orders
            and verification are handled server-side. We do not store card numbers, UPI PINs, CVV
            codes, or other sensitive payment instrument credentials in the app.
          </p>
        </section>

        <section>
          <h2>4. How We Use Information</h2>
          <p>
            We use information to authenticate users, manage society operations, show dues and
            receipts, process and verify payments, generate reports, send reminders, manage
            complaints, improve reliability, prevent abuse, and provide support.
          </p>
        </section>

        <section>
          <h2>5. Sharing and Service Providers</h2>
          <p>
            We share data only when needed to run the service, such as with backend infrastructure,
            authentication, notifications, payment processing, hosting, analytics, support tools, or
            when required by law. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We use reasonable technical and organizational safeguards, including authenticated
            access, role-based flows, server-side payment verification, and database access controls.
            No online service can guarantee absolute security, but we work to protect user data.
          </p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>
            We retain information for as long as needed to provide the service, maintain payment and
            operational records, meet legal obligations, resolve disputes, and support society
            administration.
          </p>
        </section>

        <section>
          <h2>8. Your Choices</h2>
          <p>
            You may request correction, access, or deletion of applicable personal information by
            contacting us. Some records may need to be retained for legal, payment, security, or
            accounting reasons.
          </p>
        </section>

        <section>
          <h2>9. Children</h2>
          <p>
            Sociopay is intended for society administrators and residents, not for children under 13.
            We do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            For privacy questions or support, contact us at{' '}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [route]);

  if (route === '#privacy') {
    return <PrivacyPolicyPage />;
  }

  const canSubmit = useMemo(() => form.name.trim() && form.email.trim() && form.message.trim(), [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit || form.botField) {
      return;
    }

    setStatus({ type: 'pending', message: 'Sending your message...' });

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            message: form.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Custom endpoint rejected the request.');
        }
      } else {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm({
            'form-name': 'sociopay-contact',
            name: form.name,
            email: form.email,
            company: form.company,
            message: form.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Netlify form submission failed.');
        }
      }

      setForm(initialForm);
      setStatus({
        type: 'success',
        message: 'Thanks. Your message was sent successfully.',
      });
    } catch {
      setStatus({
        type: 'error',
        message:
          'The form could not be submitted from this environment. Deploy on Netlify or set VITE_CONTACT_FORM_ENDPOINT to enable production submissions.',
      });
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar reveal">
        <a className="brand" href="#hero">
          <img className="brand-logo" src="/sociopay-icon.png" alt="Sociopay logo" />
          <span>
            Sociopay
            <small>Society operations</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#preview">Preview</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small button-ghost" href="#contact">
          Book a Demo
        </a>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">Maintenance payments made simpler</p>
            <h1>
              A modern app for <em>society billing, payments, and resident operations</em>.
            </h1>
            <p className="hero-text">
              Sociopay helps housing societies manage monthly maintenance collection, resident records,
              receipts, reminders, expenses, complaints, and reporting from one clean mobile experience.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Request a Demo
              </a>
              <a className="button button-ghost" href="#preview">
                See the App
              </a>
            </div>
            <div className="mini-proof">
              <span>Residents can track payments and receipts</span>
              <span>Admins control members, reports, and expenses</span>
              <span>Online collection is ready for Razorpay flows</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orb orb-violet"></div>
            <div className="orb orb-lilac"></div>
            <div className="dashboard-card main-dashboard">
              <div className="dashboard-topline">
                <span className="status-pill">Monthly View</span>
                <span>Resident operations</span>
              </div>
              <div className="balance-panel">
                <p>Collections overview</p>
                <h2>₹4.8L</h2>
                <span>Track dues, paid months, and pending collections</span>
              </div>
              <div className="quick-actions">
                <div>
                  <strong>Members</strong>
                  <span>resident records</span>
                </div>
                <div>
                  <strong>Payments</strong>
                  <span>dues and status</span>
                </div>
                <div>
                  <strong>Reports</strong>
                  <span>exports and summaries</span>
                </div>
              </div>
              <div className="fund-card">
                <div>
                  <p>Current billing cycle</p>
                  <span>Receipts and reminders active</span>
                </div>
                <strong>May 2026</strong>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div>
                    <p>Payment captured</p>
                    <span>Flat B-204</span>
                  </div>
                  <strong>₹3,500</strong>
                </div>
                <div className="activity-item activity-muted">
                  <div>
                    <p>Expense logged</p>
                    <span>Water maintenance</span>
                  </div>
                  <strong>₹12,000</strong>
                </div>
              </div>
            </div>
            <div className="dashboard-card side-dashboard">
              <p className="mini-label">Admin snapshot</p>
              <h3>24/7</h3>
              <span>Access to payment status, complaints, and records</span>
              <div className="bar-chart" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip reveal" aria-label="Key product statistics">
          {stats.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About Sociopay</p>
            <h2>Sociopay turns society maintenance administration into one connected, transparent workflow.</h2>
          </div>
          <div className="about-grid">
            <article className="info-card reveal">
              <h3>For residents</h3>
              <p>
                Residents can review dues, pay maintenance, access shareable receipts, and stay informed
                without depending on scattered messages or offline follow-up.
              </p>
            </article>
            <article className="info-card reveal">
              <h3>For admins</h3>
              <p>
                Admins get visibility into members, payment status, expenses, exports, reminders, and
                complaints so daily society operations stay manageable.
              </p>
            </article>
            <article className="info-card info-card-accent reveal">
              <h3>For growth</h3>
              <p>
                The platform already supports modern mobile workflows and can expand with automation,
                richer reports, notifications, and deeper financial operations over time.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>A category-ready product for operators, buyers, and long-term platform growth.</h2>
          </div>
          <div className="investor-grid">
            {investorPoints.map((item) => (
              <article className="investor-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading reveal">
            <p className="eyebrow">Key Features</p>
            <h2>Purpose-built for the real maintenance workflow inside a residential society.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card reveal" key={feature.id}>
                <span className="feature-number">{feature.id}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading reveal">
            <p className="eyebrow">Pricing</p>
            <h2>Position Sociopay as an easy pilot first, then expand into a full operating layer.</h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''} reveal`} key={plan.name}>
                <div className="pricing-top">
                  <h3>{plan.name}</h3>
                  {plan.featured ? <span className="pricing-badge">Recommended</span> : null}
                </div>
                <p className="pricing-amount">
                  {plan.price}
                  <span>{plan.cadence}</span>
                </p>
                <p>{plan.description}</p>
                <ul className="pricing-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="preview">
          <div className="section-heading reveal">
            <p className="eyebrow">App Preview</p>
            <h2>Product-faithful previews based on the real Dashboard, Members, Reports, and Profile screens.</h2>
          </div>
          <div className="preview-grid">
            <article className="preview-panel reveal">
              <div className="preview-phone">
                <div className="preview-phone-top">
                  <span className="preview-phone-dot"></span>
                  <span>Sociopay</span>
                  <span>Society</span>
                </div>
                <img src="/app-preview.png" alt="Sociopay mobile splash preview" />
              </div>
            </article>
            <article className="preview-copy reveal">
              <h3>From branding to workflow</h3>
              <p>
                The app already includes dedicated flows for Dashboard, Members, Expenses, Reports,
                and Profile, with real actions like `Export PDF`, `Share My Receipt`, monthly reminders,
                complaint handling, and Razorpay linked-account settings. These previews now mirror that
                actual product language more closely.
              </p>
              <ul className="use-case-list">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="screen-grid">
            {previewScreens.map((screen) => (
              <PreviewCard key={screen.title} screen={screen} />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From setup to monthly collection in four practical steps.</h2>
          </div>
          <div className="workflow-grid">
            {steps.map((step, index) => (
              <article className="step-card reveal" key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section comparison-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Why Choose Sociopay</p>
            <h2>Replace scattered spreadsheets, manual reminders, and fragmented follow-up with one app.</h2>
          </div>
          <div className="comparison-panel reveal">
            <div>
              <h3>With Sociopay</h3>
              <ul>
                <li>Residents and admins work from the same source of truth</li>
                <li>Maintenance billing, expenses, reports, and receipts stay connected</li>
                <li>Online collection and verification flows are productized</li>
                <li>Complaints and reminders live inside the same operational system</li>
              </ul>
            </div>
            <div>
              <h3>Without it</h3>
              <ul>
                <li>Payment follow-up becomes manual and repetitive</li>
                <li>Resident updates, receipts, and reports stay fragmented</li>
                <li>Admins lose time switching between tools and records</li>
                <li>Collection visibility is weaker for both residents and managers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">Proof & Trust</p>
            <h2>Strong enough for a sales conversation, concrete enough for a stakeholder review.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card reveal" key={item.name}>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="security">
          <div className="section-heading reveal">
            <p className="eyebrow">Trust & Infrastructure</p>
            <h2>Built on a practical backend foundation for payment reliability and operational clarity.</h2>
          </div>
          <div className="security-grid">
            {trustPoints.map((point) => (
              <article className="security-card reveal" key={point}>
                <h3>{point}</h3>
                <p>
                  Sociopay is grounded in production-minded flows for authentication, payment checks,
                  receipts, reminders, and traceable operational data.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">Deployment</p>
            <h2>Ready for a clean handoff to Netlify, Vercel, or your own lead-capture backend.</h2>
          </div>
          <div className="deployment-grid">
            <article className="deployment-card reveal">
              <h3>Website delivery</h3>
              <p>This React + Vite site already builds cleanly and publishes as static assets.</p>
              <ul className="deployment-list">
                {deploymentSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
            <article className="deployment-card deployment-card-accent reveal">
              <h3>Lead capture options</h3>
              <p>Use Netlify Forms for a fast start, or connect a custom endpoint for CRM, email, or sales routing.</p>
              <div className="deployment-tags">
                <span>Netlify Forms</span>
                <span>Vercel</span>
                <span>Custom API</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Answers for societies evaluating a better way to handle maintenance operations.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item reveal" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section download-section">
          <div className="download-card reveal">
            <div>
              <p className="eyebrow">Download & Demo</p>
              <h2>Launch Sociopay as a product story, a sales demo, or the front door to your real app.</h2>
              <p>
                Use this site to pitch societies, onboard pilot customers, and guide prospects toward a walkthrough, waitlist, or app release.
              </p>
            </div>
            <div className="download-actions">
              <a className="button" href="#contact">
                Book a Demo
              </a>
              <a className="button button-ghost" href={`mailto:${supportEmail}`}>
                Request App Access
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">Contact</p>
              <h2>Want Sociopay for your society, residents, or admin team?</h2>
              <p>
                Use the form to request a walkthrough, discuss customization, or plan deployment for your society maintenance workflow.
              </p>
              <ul className="contact-points">
                <li>Netlify-ready contact handling is already configured</li>
                <li>Custom backend submission is supported through environment configuration</li>
                <li>React, Vite, and deployable static hosting setup are already in place</li>
              </ul>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <input type="hidden" name="botField" value={form.botField} onChange={handleChange} />
              <label>
                Name
                <input name="name" type="text" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Society or Company
                <input name="company" type="text" value={form.company} onChange={handleChange} />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="button" type="submit" disabled={!canSubmit || status.type === 'pending'}>
                {status.type === 'pending' ? 'Sending...' : 'Send Message'}
              </button>
              <p className={`form-status form-status-${status.type}`.trim()} aria-live="polite">
                {status.message}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer reveal">
        <div>
          <strong>Sociopay</strong>
          <p>Society maintenance payments, records, receipts, expenses, and reporting in one mobile-first system.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#preview">Preview</a>
          <a href="#faq">FAQ</a>
          <a href="#privacy">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
