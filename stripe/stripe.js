(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lineDelay = reducedMotion ? 0 : 150;

  var fileContents = {
    'synopsis.md': '# synopsis\n\n*An application for Stripe · Growth AI Outreach Motion · Platform · Toronto*\n\n---\n\nAlayaCare professional services → PM who productized bespoke delivery into a six-product AI/ML portfolio.\n\n→ **500K+** daily users · **28M+** monthly interactions on Layla\n→ Monolith → hierarchical multi-agent conversational assistant\n→ AlayaFlow agentic workflows: manual → HITL → autonomous, metric-driven demotion\n→ AI Form Assistant: hackathon → GA, red-team eval suite shipped with product\n→ **$1.1M+** ARR on **$2M+** roadmap · **600+** enterprise customers\n→ Spec-driven dev + product knowledge base across six-product portfolio\n\nThis application — console, motion, proof — built end to end in Cursor.\n\n— Sarah Khalid',

    '00-console.md': '# chapter 00 · the console\n\n## AI Specialist Console\n\nThe console below runs **triage and qualification → route → handoff with context preserved**.\n\n### how to use it\n\n1. Pick an **inbound prospect message** in the Console panel below\n2. Run `specialist triage --inbound`\n3. Watch parse → qualify → route → draw-the-line\n\n### three scenarios\n\n→ **early-stage founder** — first product, self-serve path\n→ **scaling SMB** — Billing + pricing, activation + cross-sell\n→ **enterprise prospect** — sales-qualified, rich handoff packet\n\n> *Scripted demo with pre-authored responses — honest about what it is. The judgment and architecture are production-tested; the Stripe-specific routing is illustrative.*\n\n### why this exists\n\nA résumé can list "conversational and agentic products." This shows the **AI specialist motion** — the exact product this role hires someone to define and ship.\n\n→ confidence-threshold escalation mirrors **AlayaFlow** graduated trust in production\n→ handoff packets mirror how I route blockers with context preserved across eng, support, and sales stakeholders\n\n*Run the console. Then read **01-the-motion.md** for how I\'d wire Stripe\'s building blocks.*',

    '01-the-motion.md': '# chapter 01 · the motion\n\n*How I\'d build the Growth AI Outreach Motion at Stripe — opinionated, synthesizing, not greenfield.*\n\nStripe has strong building blocks: product recommendations, merchant context, onboarding flows, outreach infrastructure. No unified motion tying them together. I\'d start by wiring what exists.\n\n## sequence\n\n**Phase 1 — Inbound (chat, voice, email).** Launch the AI specialist on inbound prospects seeking help with products, pricing, and getting started. Rapid iteration on answer quality and resolution rates. This is where triage and qualification earn trust.\n\n**Phase 2 — Triage & qualification layer.** Assess every user: business stage, size, complexity, product interest. Classify self-serve vs. sales-worthy with visible confidence. Route smaller users through their full journey; qualify larger prospects with rich context for AE handoff.\n\n**Phase 3 — Escalation paths.** Define where the specialist stops: vendor support for technical blockers, sales for qualified opportunities. Handoffs seamless, context preserved, no interaction left unresolved.\n\n**Phase 4 — Onboarding & cross-sell.** Extend past first interaction. Leverage existing recommendation engine, merchant context, onboarding systems, outreach platform. Help users activate products, discover new ones, grow usage — **own the revenue** from conversion through expansion.\n\n**Phase 5 — Outbound.** Once inbound motion proves resolution rates and pipeline quality, extend the same specialist intelligence into outbound — each interaction makes Stripe smarter about what a business needs and when.\n\n## operating principles\n\n→ **Hypothesis-driven experimentation at scale** — feature flags, eval suites, metric-driven demotion when trust drifts\n→ **Synthesize, don\'t rebuild** — connective tissue across recommendations, context, onboarding, outreach\n→ **Scaling high-touch human experiences through technology** — my PS → productized-AI arc is the thesis\n→ **Own self-serve revenue** — success metrics from first question through activation and expansion\n\n## flow\n\n{{FLOW}}\n\n*This is the motion I\'ve been building toward — in healthcare, where "works reliably" is the whole game. Payments demands the same discipline.*',

    'proof/alayaflow-trust.md': '# AlayaFlow · trust infrastructure\n\n**triage/qualify + escalation/handoff · agentic workflows**\n\n## pattern\n\nProduction AI in high-stakes domains needs infrastructure for trust, not just capable models.\n\n→ Agentic workflows: claims reconciliation, emergency scheduling, care-plan generation\n→ Graduated trust: manual → human-in-the-loop → autonomous with metric-driven demotion\n→ Confidence-threshold escalation — same "where it draws the line, when it hands off" as the AI specialist motion\n→ Matched agent topology to task shape — not one-size orchestration\n→ Academic partnership for synthetic eval before production rollout\n\n{{OUTCOME}}~2.5h saved per provider · blank page to production · trust demotion when metrics drift{{/OUTCOME}}\n\n{{TAGS}}agentic · escalation · HITL · triage{{/TAGS}}',

    'proof/layla-conversational.md': '# Layla · conversational AI at scale\n\n**conversational and agentic products · 500K+ users**\n\n## pattern\n\nMulti-agent boundaries are a product problem, not just an engineering problem.\n\n→ Monolith → supervisor routing to domain agents on 500K+ user platform\n→ Three-tier action boundaries (read / soft write / hard write) → company safety policy\n→ 200+ query eval suite; shipped read-only capabilities first\n→ 28M+ monthly interactions at steady state\n→ API-first orchestration for eng/design handoffs\n\n{{OUTCOME}}Platform capability across documentation, scheduling, care plans{{/OUTCOME}}\n\n{{TAGS}}multi-agent · chat · evals · scale{{/TAGS}}',

    'proof/visit-optimizer-revenue.md': '# Routing optimization · own the revenue\n\n**product-led commercialization · portfolio ARR**\n\n## pattern\n\nOptimization as product — routing intelligence across a six-product AI/ML portfolio driving measurable commercial outcomes.\n\n→ ALNS multi-depot vehicle routing with time windows — part of AlayaCare\'s routing optimization product line\n→ Translated research prototype into production SKU on $2M+ roadmap\n→ Packaging, pricing, and phased rollout across 600+ enterprise customers\n→ Hypothesis-driven experimentation with feature flags and portfolio triage\n\n{{OUTCOME}}$1.1M+ ARR growth owned across premium AI portfolio{{/OUTCOME}}\n\n{{TAGS}}ARR · GTM · routing · expansion{{/TAGS}}',

    'proof/ai-form-assistant.md': '# AI Form Assistant · shipped AI that works\n\n**voice + chat · hackathon → GA · accountable autofill**\n\n## pattern\n\nRemove friction between observation and documentation — slow and correct beats fast and unreviewed.\n\n→ Dictation → LLM schema mapping → accountable autofill with visible AI tags\n→ Graceful manual override on every field\n→ Prompt-injection red-team suite before GA\n→ Cross-platform surfaces: voice dictation + chat guidance\n→ The console below runs this exact scoping pattern on inbound messages\n\n{{OUTCOME}}0→1 hackathon → GA · eval harness shipped with product{{/OUTCOME}}\n\n{{TAGS}}voice · chat · LLM · reliability{{/TAGS}}',

    'colophon.md': '# colophon\n\n## stack\n\n**build** → Cursor · Claude Code · spec-driven dev · Gherkin/EARS · this edition\n\n**deliver** → CSPO · feature flags · phased rollout · portfolio triage · stakeholders\n\n**agents** → multi-agent · graduated trust · evals · red-team · RAG · orchestration\n\n**data** → Amplitude · Pendo · SQL · ARR · hypothesis-driven experimentation\n\n## credentials\n\n→ Waterloo Honours BSc · Dean\'s Honours List · CSPO · Duke AI PM · BlueDot AI Safety · ML4Good (2026)\n→ Founder, Dialogos Labs · Horizon Omega contributor (Chief of Staff capacity, 1,600+ member AI safety community)\n→ MLOps keynote speaker · All Tech Is Human Responsible AI Apprentice\n→ EN / FR (intermediate) · Montréal · **Toronto-bound**\n\n## downloads\n\n→ [Resume (markdown)](/stripe/Sarah_Khalid_Resume_Growth_AI_Outreach.md) — ATS-optimized for Growth AI Outreach Motion\n→ [Cover letter (markdown)](/stripe/Sarah_Khalid_Cover_Letter_Growth_AI_Outreach.md)\n\n## contact\n\n→ sar.khalid@outlook.com · +1-416-272-6280\n→ [linkedin.com/in/sarkhalid](https://www.linkedin.com/in/sarkhalid/)\n→ [sarkhalid.com](https://sarkhalid.com/)\n\n*built by hand with Claude Code — pink chrome, breathing shell. the medium is the argument.*',

    'resume/sarah-khalid.md': '# sarah khalid\n\n**Senior AI/ML Product Manager · Growth AI · Conversational & Agentic Products**\n**Senior AI/ML PM** · AlayaCare · **Founder** · Dialogos Labs\n**Montréal · Toronto-bound** · sar.khalid@outlook.com · +1-416-272-6280\n\n---\n\n## summary\n\nSenior AI/ML PM with 7+ years shipping production AI at enterprise scale — multi-agent assistants, agentic workflows, NLP platforms, ML routing and risk prediction. Career arc from high-touch professional services ($750K delivered) → productized AI for 500K+ daily users. Owns $1.1M+ ARR on a $2M+ roadmap across 600+ healthcare customers.\n\n## stats\n\n→ 7+ years · PS → productized AI arc\n→ 500K+ daily users · 28M+ monthly interactions\n→ $1.1M+ ARR · $2M+ roadmap · $3.1M grants · 40% ML compute reduction\n→ 6 AI products · eval + red-team discipline across Claude, GPT, Qwen, LLaMA\n\n## experience → growth AI outreach motion\n\n→ **AI specialist motion:** triage, qualification, escalation, handoff with context preserved\n→ **Conversational and agentic:** Layla hierarchical multi-agent (500K+ users) · AlayaFlow workflows · AI Form Assistant\n→ **Own the revenue:** $1.1M+ ARR · $2M+ roadmap steering · feedback-to-detection pipeline (+74% accuracy)\n→ **Scaling high-touch → scaled:** PS consultant → PM who productized bespoke delivery for 600+ enterprises\n→ **Synthesize existing systems:** MLflow + Langfuse eval pipeline · spec-driven dev across six-product portfolio\n→ **Reliability discipline:** red-team suite (prompt injection, jailbreaking, clinical regressions) before GA\n\n## community\n\n→ Horizon Omega (HΩ) — contributor, Chief of Staff capacity · 1,600+ member AI safety community\n→ MLOps Community keynote · Women in AI Canada lead · All Tech Is Human Responsible AI Apprentice\n\n## education\n\n→ Waterloo Honours BSc · Dean\'s Honours List · CSPO · Duke AI PM · BlueDot · ML4Good (2026)\n→ Published author, Schizophrenia Journal (CAMH neuropsychology research)\n\n## links\n\n→ [full resume (md)](/stripe/Sarah_Khalid_Resume_Growth_AI_Outreach.md)\n→ [cover letter (md)](/stripe/Sarah_Khalid_Cover_Letter_Growth_AI_Outreach.md)\n→ [this application](https://dialogoslabs.xyz/stripe/)',

    'build/specialist-triage.ts': '{{TYPESCRIPT}}'
  };

  var flowDiagram = 'inbound message (chat · voice · email)\n        │\n        ▼\n   ┌─────────┐\n   │  parse  │  intent · stage · size · product interest\n   └────┬────┘\n        ▼\n   ┌─────────┐\n   │ triage  │  self-serve vs sales-qualified · confidence score\n   └────┬────┘\n        ▼\n   ┌─────────┐\n   │ qualify │  merchant context · recommendations · urgency\n   └────┬────┘\n        ├──────────────────┐\n        ▼                  ▼\n  self-serve path    sales handoff\n  guide + activate   rich context packet\n        │                  │\n        └────────┬─────────┘\n                 ▼\n        onboarding · cross-sell · outbound\n                 │\n                 ▼\n           own the revenue';

  var readmeHtml = '<div class="press-cover" aria-label="Living cover — Stripe Application">' +
    '<div class="press-cover-inner">' +
    '<p class="press-eyebrow">Stripe Press Edition · Ideas for progress</p>' +
    '<h1 class="press-title">Stripe Application</h1>' +
    '<p class="press-subtitle">Bringing high-touch guidance to every business, at scale</p>' +
    '<p class="press-byline">by <span>Sarah Khalid</span> · An application for Stripe · Growth AI Outreach Motion</p>' +
    '</div></div>' +
    '<div class="stat-row">' +
    '<span class="stat-chip">7+ yrs delivery</span>' +
    '<span class="stat-chip">500K+ daily users</span>' +
    '<span class="stat-chip">$2M+ roadmap</span>' +
    '<span class="stat-chip">$1.1M ARR growth</span>' +
    '<span class="stat-chip">6 AI products shipped</span>' +
    '</div>' +
    '<div class="cred-strip">' +
    '<span class="cred-chip">AI specialist motion</span>' +
    '<span class="cred-chip">triage & qualification</span>' +
    '<span class="cred-chip">product-led growth</span>' +
    '<span class="cred-chip">conversational & agentic</span>' +
    '<span class="cred-chip">scaling high-touch → scaled</span>' +
    '</div>' +
    '<hr class="md-hr">' +
    '<h2 class="md-h2">start here</h2>' +
    '<ul class="md-ul">' +
    '<li class="md-li"><strong>synopsis.md</strong> — short impact memo</li>' +
    '<li class="md-li"><strong>00-console.md</strong> — AI Specialist Console (run triage below)</li>' +
    '<li class="md-li"><strong>01-the-motion.md</strong> — how I\'d build at Stripe</li>' +
    '<li class="md-li"><strong>proof/</strong> — pattern stories from production</li>' +
    '<li class="md-li"><strong>colophon.md</strong> — stack, downloads, contact</li>' +
    '<li class="md-li">Run <strong>specialist triage --inbound</strong> in the Console · ask the <strong>AI Specialist</strong> panel</li>' +
    '</ul>';

  var tsStub = '<span class="ts-cm">// AI specialist triage — inbound → qualify → route → handoff</span>\n' +
    '<span class="ts-kw">interface</span> <span class="ts-type">InboundMessage</span> {\n' +
    '  text: <span class="ts-type">string</span>;\n' +
    '  channel: <span class="ts-str">"chat"</span> | <span class="ts-str">"voice"</span> | <span class="ts-str">"email"</span>;\n' +
    '}\n\n' +
    '<span class="ts-kw">interface</span> <span class="ts-type">TriageResult</span> {\n' +
    '  intent: <span class="ts-type">string</span>;\n' +
    '  stage: <span class="ts-str">"startup"</span> | <span class="ts-str">"smb"</span> | <span class="ts-str">"enterprise"</span>;\n' +
    '  confidence: <span class="ts-type">number</span>; <span class="ts-cm">// 0–100</span>\n' +
    '  route: <span class="ts-str">"self-serve"</span> | <span class="ts-str">"sales"</span> | <span class="ts-str">"support"</span>;\n' +
    '  handoffPacket?: <span class="ts-type">Record</span>&lt;<span class="ts-type">string</span>, <span class="ts-type">unknown</span>&gt;;\n' +
    '}\n\n' +
    '<span class="ts-kw">function</span> <span class="ts-fn">triage</span>(msg: <span class="ts-type">InboundMessage</span>): <span class="ts-type">TriageResult</span> {\n' +
    '  <span class="ts-kw">const</span> signals = <span class="ts-fn">parseSignals</span>(msg.text);\n' +
    '  <span class="ts-kw">const</span> confidence = <span class="ts-fn">qualify</span>(signals);\n' +
    '  <span class="ts-kw">if</span> (confidence &lt; <span class="ts-str">70</span>) <span class="ts-kw">return</span> <span class="ts-fn">escalateToHuman</span>(signals);\n' +
    '  <span class="ts-kw">return</span> signals.arrPotential &gt; <span class="ts-str">100_000</span>\n' +
    '    ? <span class="ts-fn">buildSalesHandoff</span>(signals) <span class="ts-cm">// context preserved</span>\n' +
    '    : <span class="ts-fn">guideSelfServe</span>(signals);\n' +
    '}\n\n' +
    '<span class="ts-cm">// AlayaFlow pattern: confidence-threshold escalation in production</span>';

  var fileTree = [
    { name: 'README.md', path: 'README.md', badge: '◈' },
    { name: 'synopsis.md', path: 'synopsis.md', badge: null },
    { name: '00-console.md', path: '00-console.md', badge: '▶' },
    { name: '01-the-motion.md', path: '01-the-motion.md', badge: null },
    { folder: 'proof', open: true, children: [
      { name: 'alayaflow-trust.md', path: 'proof/alayaflow-trust.md', badge: '★' },
      { name: 'layla-conversational.md', path: 'proof/layla-conversational.md' },
      { name: 'visit-optimizer-revenue.md', path: 'proof/visit-optimizer-revenue.md' },
      { name: 'ai-form-assistant.md', path: 'proof/ai-form-assistant.md' }
    ]},
    { name: 'colophon.md', path: 'colophon.md', badge: null },
    { folder: 'resume', open: false, children: [
      { name: 'sarah-khalid.md', path: 'resume/sarah-khalid.md' }
    ]},
    { folder: 'build', open: false, children: [
      { name: 'specialist-triage.ts', path: 'build/specialist-triage.ts' }
    ]}
  ];

  var agentPrompts = [
    { label: 'Run the console', path: '00-console.md', reply: 'Pick an inbound message in the Console panel and run specialist triage. Opening Chapter 00.', openConsole: true },
    { label: 'Why this role?', path: 'synopsis.md', reply: 'High-touch PS → productized AI at 500K+ users. The JD spine is my résumé arc. Opening synopsis.' },
    { label: 'The motion at Stripe', path: '01-the-motion.md', reply: 'Wire existing building blocks — recommendations, merchant context, onboarding, outreach — into one AI specialist motion. Opening Chapter 01.' },
    { label: 'Trust & handoff', path: 'proof/alayaflow-trust.md', reply: 'AlayaFlow graduated trust + confidence-threshold escalation — production pattern for "where it draws the line." Opening proof.' },
    { label: 'Own the revenue', path: 'proof/visit-optimizer-revenue.md', reply: 'Routing optimization on a $2M+ roadmap — $1.1M+ ARR growth owned across the portfolio. I own outcomes, not just roadmaps.' },
    { label: 'Resume & contact', path: 'colophon.md', reply: 'Downloads, stack, Toronto-bound. Opening colophon.' }
  ];

  var inboundBriefs = [
    {
      id: 'founder',
      label: 'early founder',
      text: '"Hi — I\'m launching a subscription box for local artisans next month. Should I use Stripe Checkout or build custom payments? I\'ve never done this before."',
      script: [
        { type: 'brief', text: 'inbound · chat · early-stage founder' },
        { type: 'blank' },
        { type: 'step', text: '[01 · parse] intent + signals' },
        { type: 'line', text: 'intent: product selection + getting started' },
        { type: 'line', text: 'stage: pre-launch startup · team: solo · urgency: moderate' },
        { type: 'line', text: 'product interest: Checkout, subscriptions' },
        { type: 'blank' },
        { type: 'step', text: '[02 · triage & qualify]' },
        { type: 'score', text: 'route: self-serve · confidence: 91/100' },
        { type: 'line', text: 'logic: pre-revenue, first product, no complex billing — below sales threshold' },
        { type: 'line', text: 'qualification: subscription use case, monthly cadence, domestic only' },
        { type: 'blank' },
        { type: 'step', text: '[03 · route] self-serve guidance' },
        { type: 'route', text: 'recommend: Stripe Checkout + Billing for subscriptions\nnext step: create account → enable Checkout → subscription price setup\nactivation: guided onboarding flow, first payment in <30 min' },
        { type: 'blank' },
        { type: 'step', text: '[04 · draw the line]' },
        { type: 'line', text: 'AI handles: product recommendation, setup walkthrough, pricing FAQ' },
        { type: 'line', text: 'hand off to support if: payment failures after 2 retries, tax nexus questions' },
        { type: 'line', text: 'hand off to sales if: ARR potential exceeds $100K or multi-entity structure emerges' },
        { type: 'blank' },
        { type: 'ok', text: '✓ self-serve path · no user left unresolved · run again to replay' }
      ]
    },
    {
      id: 'smb',
      label: 'scaling SMB',
      text: '"We\'re doing $40K MRR on Stripe Payments but our billing is a mess — usage-based pricing, failed renewals, customers asking about invoices. Can Billing fix this?"',
      script: [
        { type: 'brief', text: 'inbound · email · scaling SMB' },
        { type: 'blank' },
        { type: 'step', text: '[01 · parse] intent + signals' },
        { type: 'line', text: 'intent: pricing complexity + activation/expansion' },
        { type: 'line', text: 'stage: growth SMB · $40K MRR · existing Stripe Payments customer' },
        { type: 'line', text: 'product interest: Billing, Invoicing, usage-based pricing' },
        { type: 'blank' },
        { type: 'step', text: '[02 · triage & qualify]' },
        { type: 'score', text: 'route: self-serve + expansion · confidence: 84/100' },
        { type: 'line', text: 'logic: established customer, clear upgrade path, expansion revenue opportunity' },
        { type: 'line', text: 'signals: failed renewals = activation gap · invoice questions = Billing fit' },
        { type: 'blank' },
        { type: 'step', text: '[03 · route] cross-sell + onboarding' },
        { type: 'route', text: 'recommend: migrate to Stripe Billing with usage-based meters\nnext step: audit current pricing model → phased Billing migration\nactivation: dunning automation for failed renewals · Customer Portal for self-serve invoices' },
        { type: 'blank' },
        { type: 'step', text: '[04 · draw the line]' },
        { type: 'line', text: 'AI handles: migration plan, pricing model mapping, feature comparison' },
        { type: 'line', text: 'hand off to support if: data migration errors or API integration blockers' },
        { type: 'handoff', text: 'monitor for sales if: MRR crosses $100K or requests enterprise contract terms\ncontext preserved: $40K MRR, usage-based need, failed renewal pattern, Billing-ready' },
        { type: 'blank' },
        { type: 'ok', text: '✓ expansion motion · onboarding + cross-sell · run again to replay' }
      ]
    },
    {
      id: 'enterprise',
      label: 'enterprise',
      text: '"We\'re a Series C fintech processing $12M/month. Need Stripe Connect for marketplace payouts across 14 countries, plus dedicated support and custom pricing. Who do I talk to?"',
      script: [
        { type: 'brief', text: 'inbound · voice transcript · enterprise prospect' },
        { type: 'blank' },
        { type: 'step', text: '[01 · parse] intent + signals' },
        { type: 'line', text: 'intent: complex product fit + sales engagement' },
        { type: 'line', text: 'stage: Series C fintech · $12M/month volume · 14-country marketplace' },
        { type: 'line', text: 'product interest: Connect, global payouts, enterprise support, custom pricing' },
        { type: 'blank' },
        { type: 'step', text: '[02 · triage & qualify]' },
        { type: 'score', text: 'route: sales-qualified · confidence: 96/100' },
        { type: 'line', text: 'logic: volume + complexity + explicit sales ask → above self-serve threshold' },
        { type: 'line', text: 'qualification: high ARR potential, multi-product, regulatory surface (fintech)' },
        { type: 'blank' },
        { type: 'step', text: '[03 · route] sales handoff with context preserved' },
        { type: 'handoff', text: 'SALES HANDOFF PACKET\n─────────────────────\ncompany: Series C fintech · $12M/mo processing\nneed: Connect marketplace payouts · 14 countries\nasks: custom pricing · dedicated support · implementation timeline\nrecommended AE focus: Connect global + compliance + enterprise SLA\nnext step: schedule specialist call within 24h · share Connect architecture guide' },
        { type: 'blank' },
        { type: 'step', text: '[04 · draw the line]' },
        { type: 'line', text: 'AI handled: initial triage, product mapping, urgency assessment' },
        { type: 'line', text: 'human specialist owns: custom pricing, multi-entity setup, compliance review' },
        { type: 'line', text: 'no interaction left unresolved — warm handoff with full context' },
        { type: 'blank' },
        { type: 'ok', text: '✓ sales-qualified lead · pipeline generated · run again to replay' }
      ]
    }
  ];

  var activeBrief = 0;

  var proofImages = {
    'proof/alayaflow-trust.md': '../assets/services/liquid-chrome.png',
    'proof/layla-conversational.md': '../assets/services/light-beams.png',
    'proof/visit-optimizer-revenue.md': '../assets/services/sacred-geometry.png',
    'proof/ai-form-assistant.md': '../assets/services/crt-monitor.png'
  };

  /* ── NatureLayer (pink, browsercompany-style) ── */
  var VisualLayer = (function () {
    var canvas, ctx, particles, rafId, reduced, overlayRoot, sproutRoot;
    var activeBursts = 0;
    var maxParticles = 80;
    var waves = [];

    function init(opts) {
      canvas = opts.canvas;
      ctx = canvas ? canvas.getContext('2d') : null;
      overlayRoot = opts.overlayRoot;
      sproutRoot = opts.sproutRoot;
      reduced = opts.reducedMotion;
      particles = [];
      resize();
      window.addEventListener('resize', resize);
      if (!reduced && canvas) {
        document.addEventListener('visibilitychange', function () {
          if (document.hidden) stopLoop(); else startLoop();
        });
        startLoop();
      }
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 33;
    }

    function startLoop() {
      if (rafId || reduced) return;
      function loop() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawWaves();
        updateParticles();
        rafId = requestAnimationFrame(loop);
      }
      loop();
    }

    function stopLoop() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    function spawnParticle(type, x, y) {
      if (reduced || particles.length >= maxParticles) return;
      var p = { x: x, y: y, type: type, life: 1, vx: (Math.random() - .5) * 1.2, vy: type === 'petal' ? .4 + Math.random() * .8 : (Math.random() - .5) * .8 };
      if (type === 'firefly') { p.vy = (Math.random() - .5) * .4; p.size = 2 + Math.random() * 2; }
      if (type === 'petal') { p.size = 3 + Math.random() * 4; p.rot = Math.random() * 360; }
      if (type === 'mote') { p.size = 1 + Math.random() * 2; p.vy = -.3 - Math.random() * .5; }
      particles.push(p);
    }

    function updateParticles() {
      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= .008;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.globalAlpha = p.life * .7;
        if (p.type === 'petal') {
          ctx.fillStyle = '#ff9ec8';
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx.restore();
        } else if (p.type === 'firefly') {
          ctx.fillStyle = '#ffe8a0';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.fillStyle = '#ffd0e8';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size || 2, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawWaves() {
      for (var i = waves.length - 1; i >= 0; i--) {
        var w = waves[i];
        w.age += 1;
        if (w.age > 180) { waves.splice(i, 1); continue; }
        var alpha = (1 - w.age / 180) * .22;
        var y = w.originY + Math.sin((w.age + w.offset) * .04) * 8;
        ctx.strokeStyle = 'rgba(255, 142, 196, ' + alpha + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (var x = 0; x < canvas.width; x += 4) {
          var wy = y + Math.sin((x + w.age * 2) * .02) * 12;
          if (x === 0) ctx.moveTo(x, wy); else ctx.lineTo(x, wy);
        }
        ctx.stroke();
      }
    }

    function emitWave(originY) {
      waves.push({ originY: originY || canvas.height * .7, age: 0, offset: Math.random() * 100 });
    }

    function burst(type, duration) {
      if (!overlayRoot || activeBursts >= 3) return;
      activeBursts++;
      var el = document.createElement('div');
      el.className = 'nature-burst nature-burst--' + type;
      overlayRoot.appendChild(el);
      requestAnimationFrame(function () { el.classList.add('active'); });
      setTimeout(function () {
        el.classList.add('fading');
        setTimeout(function () { el.remove(); activeBursts--; }, 2000);
      }, duration || 3500);
    }

    function butterfly(x, y) {
      if (!sproutRoot || reduced) return;
      var el = document.createElement('div');
      el.className = 'nature-butterfly';
      el.style.left = (x || 200) + 'px';
      el.style.top = (y || 300) + 'px';
      sproutRoot.appendChild(el);
      setTimeout(function () { el.remove(); }, 5000);
    }

    function lightbeam(x1, y1, x2, y2) {
      if (!sproutRoot || reduced) return;
      var el = document.createElement('div');
      var len = Math.hypot(x2 - x1, y2 - y1);
      var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      el.className = 'lightbeam';
      el.style.left = x1 + 'px';
      el.style.top = y1 + 'px';
      el.style.width = len + 'px';
      el.style.transform = 'rotate(' + angle + 'deg)';
      sproutRoot.appendChild(el);
      setTimeout(function () { el.remove(); }, 700);
    }

    function setStatusGlyph(glyph) {
      var el = document.getElementById('status-nature');
      if (el) el.textContent = glyph;
    }

    function onFileOpen(path, evt) {
      var x = evt && evt.clientX ? evt.clientX : 120;
      var y = evt && evt.clientY ? evt.clientY : 200;
      if (Math.random() < .45) spawnParticle('petal', x, y);
      setStatusGlyph('◇');

      if (path === 'README.md') {
        burst('orb', 4500); burst('sun', 3000); setStatusGlyph('◈');
      } else if (path === 'synopsis.md') {
        burst('soft', 3500); setStatusGlyph('§');
      } else if (path === '00-console.md') {
        burst('crt', 3000); setStatusGlyph('⌘');
      } else if (path === '01-the-motion.md') {
        burst('geometry', 3500); setStatusGlyph('→');
      } else if (path === 'proof/alayaflow-trust.md') {
        burst('chrome', 4000); butterfly(x, y); setStatusGlyph('★');
      } else if (path === 'proof/layla-conversational.md') {
        burst('beams', 3500); setStatusGlyph('✦');
      } else if (path === 'proof/visit-optimizer-revenue.md') {
        burst('geometry', 3000); setStatusGlyph('$');
      } else if (path === 'proof/ai-form-assistant.md') {
        burst('crt', 3000); setStatusGlyph('◉');
      } else if (path.indexOf('proof/') === 0) {
        burst('soft', 2500);
      } else if (path === 'colophon.md') {
        burst('forest', 3500); setStatusGlyph('⚙');
      } else if (path === 'resume/sarah-khalid.md') {
        burst('orb', 3500);
      } else if (path === 'build/specialist-triage.ts') {
        burst('crt', 2800); setStatusGlyph('⌘');
      }
    }

    function onAgentPrompt() {
      burst('beams', 2000);
      burst('orb', 2500);
      setStatusGlyph('✦');
    }

    function onTerminalRun() {
      var panel = document.getElementById('bottom-panel');
      var rect = panel ? panel.getBoundingClientRect() : { top: window.innerHeight - 200 };
      emitWave(rect.top);
      burst('sun', 2000);
      setStatusGlyph('▸');
    }

    function onTerminalComplete() {
      burst('orb', 3000);
      burst('chrome', 2000);
      butterfly(window.innerWidth * .55, window.innerHeight * .45);
      setStatusGlyph('✓');
    }

    return {
      init: init,
      onFileOpen: onFileOpen,
      onAgentPrompt: onAgentPrompt,
      onTerminalRun: onTerminalRun,
      onTerminalComplete: onTerminalComplete,
      lightbeam: lightbeam
    };
  })();

  function renderMarkdown(text, path) {
    if (path === 'README.md') return readmeHtml;
    if (path === 'build/specialist-triage.ts') {
      return '<pre class="md-code">' + tsStub + '</pre>';
    }
    if (text.indexOf('{{FLOW}}') !== -1) {
      text = text.replace('{{FLOW}}', '__FLOW_DIAGRAM__');
    }
    var lines = text.split('\n');
    var out = [];
    var inList = false;

    if (proofImages[path]) {
      out.push('<img class="proof-visual" src="' + proofImages[path] + '" alt="Visual accent for ' + path.split('/').pop().replace('.md', '') + ' proof story" loading="lazy">');
    }

    lines.forEach(function (line) {
      if (line.trim() === '__FLOW_DIAGRAM__') {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<pre class="flow-diagram">' + flowDiagram + '</pre>');
        return;
      }
      if (line.indexOf('{{OUTCOME}}') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        var outcome = line.replace('{{OUTCOME}}', '').replace('{{/OUTCOME}}', '');
        out.push('<div class="outcome-line">' + inline(outcome) + '</div>');
        return;
      }
      if (line.indexOf('{{TAGS}}') === 0) {
        var tags = line.replace('{{TAGS}}', '').replace('{{/TAGS}}', '').split('·');
        out.push('<div class="tag-row">' + tags.map(function (t) {
          return '<span class="tag">' + t.trim() + '</span>';
        }).join('') + '</div>');
        return;
      }
      if (line.indexOf('# ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<h1 class="md-h1">' + inline(line.slice(2)) + '</h1>');
      } else if (line.indexOf('## ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<h2 class="md-h2">' + inline(line.slice(3)) + '</h2>');
      } else if (line.indexOf('### ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<h3 class="md-h3">' + inline(line.slice(4)) + '</h3>');
      } else if (line.indexOf('> ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<blockquote class="md-quote">' + inline(line.slice(2)) + '</blockquote>');
      } else if (line.indexOf('---') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<hr class="md-hr">');
      } else if (line.indexOf('→ ') === 0 || line.indexOf('- ') === 0) {
        if (!inList) { out.push('<ul class="md-ul">'); inList = true; }
        var bullet = line.indexOf('→ ') === 0 ? line.slice(2) : line.slice(2);
        out.push('<li class="md-li">' + inline(bullet) + '</li>');
      } else if (line.trim() === '' && lines.indexOf(line) > 0 && lines[lines.indexOf(line) - 1] && lines[lines.indexOf(line) - 1].indexOf('## flow') === 0) {
        /* skip */
      } else if (line.indexOf('inbound message') === 0 || line.indexOf('        ') === 0) {
        /* handled by flow replacement */
      } else if (line.trim() === '{{FLOW}}') {
        /* skip */
      } else if (line.trim() === '') {
        if (inList) { out.push('</ul>'); inList = false; }
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
        if (line.indexOf('inbound') === 0 || line.indexOf('   ┌') === 0 || line.indexOf('   │') === 0 || line.indexOf('   └') === 0 || line.indexOf('        ') === 0) {
          return;
        }
        out.push('<p class="md-p">' + inline(line) + '</p>');
      }
    });
    if (inList) out.push('</ul>');

    return out.join('');
  }

  function inline(s) {
    return s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="font-family:Fira Code,monospace;font-size:.85em;color:var(--accent-warm)">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  var openTabs = [];
  var activeTab = null;
  var treeEl = document.getElementById('file-tree');
  var tabBar = document.getElementById('tab-bar');
  var editor = document.getElementById('editor');
  var idleTimer = null;

  function buildTree(items, container) {
    items.forEach(function (item) {
      if (item.folder) {
        var folder = document.createElement('div');
        folder.className = 'tree-folder' + (item.open ? ' open' : '');
        var label = document.createElement('div');
        label.className = 'tree-label';
        label.innerHTML = '<span class="tree-icon">📁</span> ' + item.folder;
        label.addEventListener('click', function () { folder.classList.toggle('open'); });
        folder.appendChild(label);
        var children = document.createElement('div');
        children.className = 'tree-children';
        buildTree(item.children, children);
        folder.appendChild(children);
        container.appendChild(folder);
      } else {
        var file = document.createElement('div');
        file.className = 'tree-file';
        file.setAttribute('data-path', item.path);
        file.setAttribute('tabindex', '0');
        file.innerHTML = '<span class="tree-icon">📄</span> ' + item.name + (item.badge ? '<span class="tree-badge">' + item.badge + '</span>' : '');
        file.addEventListener('click', function (e) { openFile(item.path, e); });
        file.addEventListener('keydown', function (e) { if (e.key === 'Enter') openFile(item.path, e); });
        container.appendChild(file);
      }
    });
  }

  function openFile(path, evt) {
    resetIdle();
    if (openTabs.indexOf(path) === -1) openTabs.push(path);
    activeTab = path;
    renderTabs();
    renderEditor(path);
    document.querySelectorAll('.tree-file').forEach(function (f) {
      f.classList.toggle('active', f.getAttribute('data-path') === path);
    });
    VisualLayer.onFileOpen(path, evt);
    if (window.innerWidth <= 1100) {
      document.getElementById('sidebar').classList.remove('open');
    }
  }

  function closeTab(path, e) {
    e.stopPropagation();
    var idx = openTabs.indexOf(path);
    if (idx === -1) return;
    openTabs.splice(idx, 1);
    if (activeTab === path) {
      activeTab = openTabs[Math.max(0, idx - 1)] || 'README.md';
      if (openTabs.length === 0) { openTabs.push('README.md'); activeTab = 'README.md'; }
    }
    renderTabs();
    renderEditor(activeTab);
  }

  function renderTabs() {
    tabBar.innerHTML = '';
    openTabs.forEach(function (path) {
      var name = path.split('/').pop();
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'tab' + (path === activeTab ? ' active' : '');
      tab.setAttribute('role', 'tab');
      tab.innerHTML = name + ' <span class="tab-close" aria-label="Close">×</span>';
      tab.addEventListener('click', function (e) {
        if (e.target.classList.contains('tab-close')) closeTab(path, e);
        else openFile(path, e);
      });
      tabBar.appendChild(tab);
    });
  }

  function renderEditor(path) {
    var content = fileContents[path] || '*file not found*';
    editor.innerHTML = renderMarkdown(content, path);
    var lines = content.split('\n').length;
    document.getElementById('status-ln').textContent = 'Ln ' + lines + ', Col 1';
    document.getElementById('status-lang').textContent = path.endsWith('.ts') ? 'TypeScript' : 'Markdown';
  }

  function initAgent() {
    var messages = document.getElementById('agent-messages');
    var chips = document.getElementById('agent-chips');

    function addMsg(text, type) {
      var div = document.createElement('div');
      div.className = 'agent-msg agent-msg--' + (type || 'bot');
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    addMsg('AI Specialist — scripted tour of Sarah\'s Stripe application. I triage inbound prospects the way this role asks: parse, qualify, route, hand off with context preserved.', 'bot');

    agentPrompts.forEach(function (p) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'agent-chip';
      chip.textContent = p.label;
      chip.addEventListener('click', function () {
        addMsg(p.label, 'user');
        setTimeout(function () {
          addMsg(p.reply, 'bot');
          addMsg('opened `' + p.path + '`', 'system');
          openFile(p.path, null);
          VisualLayer.onAgentPrompt();
          if (p.openConsole) {
            document.querySelector('.panel-tab[data-panel="terminal"]').click();
          }
          var chipRect = chip.getBoundingClientRect();
          var editorEl = document.getElementById('editor');
          if (editorEl) {
            var er = editorEl.getBoundingClientRect();
            VisualLayer.lightbeam(chipRect.left, chipRect.top + 10, er.left + 40, er.top + 30);
          }
        }, 300);
      });
      chips.appendChild(chip);
    });
  }

  function initTerminal() {
    var linesEl = document.getElementById('terminal-lines');
    var scrollEl = document.getElementById('terminal-scroll');
    var btn = document.getElementById('terminal-run');
    var cursor = document.getElementById('term-cursor');
    var picker = document.getElementById('brief-picker');
    var running = false;

    inboundBriefs.forEach(function (brief, idx) {
      var bbtn = document.createElement('button');
      bbtn.type = 'button';
      bbtn.className = 'brief-btn' + (idx === 0 ? ' active' : '');
      bbtn.textContent = brief.label;
      bbtn.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
      bbtn.addEventListener('click', function () {
        activeBrief = idx;
        picker.querySelectorAll('.brief-btn').forEach(function (b, i) {
          b.classList.toggle('active', i === idx);
          b.setAttribute('aria-pressed', i === idx ? 'true' : 'false');
        });
      });
      picker.appendChild(bbtn);
    });

    function appendLine(entry, briefText) {
      var el = document.createElement('div');
      if (entry.type === 'blank') el.className = 'term-line term-line--blank';
      else if (entry.type === 'brief') {
        el.className = 'term-line term-line--brief';
        el.textContent = '"' + briefText + '"';
      } else {
        el.className = 'term-line term-line--' + entry.type;
        el.textContent = entry.text;
      }
      linesEl.appendChild(el);
      scrollEl.scrollTop = scrollEl.scrollHeight;
      return new Promise(function (resolve) {
        setTimeout(resolve, lineDelay);
      });
    }

    function runScript() {
      if (running) return;
      running = true;
      btn.disabled = true;
      cursor.classList.add('hidden');
      linesEl.innerHTML = '';
      VisualLayer.onTerminalRun();

      var brief = inboundBriefs[activeBrief];
      var script = [{ type: 'dim', text: '▸ specialist triage --inbound --channel auto' },
        { type: 'dim', text: '▸ loading: merchant-context · recommendations · qualification-rules' },
        { type: 'blank' }].concat(brief.script);

      var chain = Promise.resolve();
      script.forEach(function (entry) {
        chain = chain.then(function () {
          return appendLine(entry, entry.type === 'brief' ? brief.text : brief.text);
        });
      });

      chain.then(function () {
        running = false;
        btn.disabled = false;
        cursor.classList.remove('hidden');
        VisualLayer.onTerminalComplete();
      });
    }

    btn.addEventListener('click', runScript);
  }

  function resetIdle() {
    var shell = document.getElementById('ide-shell');
    var hint = document.getElementById('breathe-hint');
    shell.classList.remove('breathing');
    hint.classList.remove('visible');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      shell.classList.add('breathing');
      hint.classList.add('visible');
    }, 8000);
  }

  function initPanels() {
    document.querySelectorAll('.panel-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var panel = tab.getAttribute('data-panel');
        document.querySelectorAll('.panel-tab').forEach(function (t) { t.classList.remove('active'); });
        document.querySelectorAll('.panel-pane').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        document.getElementById('panel-' + panel).classList.add('active');
      });
    });
  }

  function initMobile() {
    document.getElementById('toggle-sidebar').addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('agent-panel').classList.remove('open');
    });
    document.getElementById('toggle-agent').addEventListener('click', function () {
      document.getElementById('agent-panel').classList.toggle('open');
      document.getElementById('sidebar').classList.remove('open');
    });
    document.getElementById('sidebar-close').addEventListener('click', function () {
      document.getElementById('sidebar').classList.remove('open');
    });
  }

  buildTree(fileTree, treeEl);
  openTabs.push('README.md');
  activeTab = 'README.md';
  renderTabs();
  renderEditor('README.md');

  VisualLayer.init({
    canvas: document.getElementById('nature-canvas'),
    overlayRoot: document.getElementById('nature-overlays'),
    sproutRoot: document.getElementById('nature-sprouts'),
    reducedMotion: reducedMotion
  });

  initAgent();
  initTerminal();
  initPanels();
  initMobile();
  resetIdle();

  document.querySelectorAll('.activity-icon').forEach(function (icon, i) {
    icon.addEventListener('click', function () {
      document.querySelectorAll('.activity-icon').forEach(function (ic) { ic.classList.remove('active'); });
      icon.classList.add('active');
      if (i === 0) document.getElementById('sidebar').classList.toggle('open');
      if (i === 1) document.querySelector('.panel-tab[data-panel="terminal"]').click();
      if (i === 2) document.getElementById('agent-panel').classList.toggle('open');
    });
  });
})();
