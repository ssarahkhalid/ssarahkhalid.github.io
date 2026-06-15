(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lineDelay = reducedMotion ? 0 : 180;

  /* ── file contents ── */
  var fileContents = {
    'README.md': '# welcome to my application\n\nSenior PM, Remote Build — built as an IDE that compounds.\n\nThe effects aren\'t decoration. They\'re the argument for *make every engagement compound*.\n\n## start here\n\n→ **proof/most-proud-product.md** — Layla, 500K+ daily users, the product I\'m most proud of\n→ **cover-letter.md** — why me, why now, why Remote Build\n→ **why-remote.md** — employment infrastructure, MCP, the agentic shift\n→ **role-fit/** — three files mapped to the posting\n→ **handbook/** — culture ↔ proof\n→ **proof/** — shipped at scale\n→ **agent** on the right · **build engage** in the terminal\n\n*click around. the shell breathes when you pause.*',

    'cover-letter.md': '# cover letter\n\nDear Remote Build team,\n\nRemote Build is the right bet at the right moment. As agents proliferate across HR and finance stacks, someone has to own the messy middle — deploying standard connectors, building bespoke ones, co-building apps and agents on the APIs, MCP, and CLI, then deciding which of those one-offs deserve to become capabilities Remote owns and improves forever. That last decision — making every engagement compound rather than accumulate as technical debt — is the exact problem I\'ve spent the back half of my career learning to make well.\n\n## my arc maps onto this role\n\nI started at AlayaCare as the professional-services consultant standing up bespoke enterprise implementations — configuration, data migration, integrations, the works. I then became the PM who decided which of those recurring patterns graduated into owned, reusable products and which stayed custom, running portfolio triage and lifecycle calls (launch, graduate, retire) across a six-product AI portfolio.\n\nI know what it costs when bespoke work never gets productized, and I know how to build the packaging, pricing, and tooling that lets a services line scale on leverage instead of headcount — including an infrastructure consolidation that cut compute cost ~40% while holding our SLAs.\n\n## agent-facing surfaces\n\nI launched AlayaFlow, a greenfield agentic workflow engine with confidence-threshold escalation and trust demotion, from blank page to production, and re-architected our 500K-daily-user assistant from a monolith into a hierarchical multi-agent system with supervisor routing and tiered action boundaries.\n\nI have a concrete point of view on what changes when an agent, not a person, is the primary caller of an API — idempotency, scoped permissions, structured errors, observability — because I\'ve had to design for it.\n\n## hands-on builder\n\nI ship functional prototypes and internal tooling directly in Claude Code and Cursor, and I run a spec-driven development practice (Gherkin/EARS, a constitution and AGENTS file) that turns ambiguous scope into something an engineer — or an agent — can execute.\n\nI\'m commercial by instinct: $1.1M+ ARR growth, a research prototype to a $130K premium tier via phased launch, and business cases that won pricing and investment decisions.\n\n## async by design\n\nI\'m Montréal-based and built for async, distributed work. I\'d love to help Remote Build turn its first engagements into a compounding product line.\n\nThank you for considering me.\n\n— Sarah Khalid\n\nsar.khalid@outlook.com · [linkedin](https://www.linkedin.com/in/sarkhalid/) · [portfolio](https://sarkhalid.com/)',

    'why-remote.md': '# why remote\n\n## global employment is the infrastructure layer\n\nRemote solves the problem that gets harder as work goes global: compliantly employing anyone, anywhere. Payroll, benefits, taxes, entity structures across 100+ countries — the compliance rail every HR and finance stack eventually routes through.\n\nOwned legal entities, in-house payroll, SOC 2 Type II, ISO 27001 — foundation you build on, not around.\n\n## the agentic shift\n\nAs AI agents proliferate across HR and Finance stacks, they need to route through the employment infrastructure layer.\n\nRemote MCP — OAuth 2.0 with PKCE, role-aware endpoints, no API keys to rotate — is the right design when agents, not humans, are the primary consumer. I\'ve spent two years designing agent-facing surfaces with the same constraints: scoped permissions, structured errors, observability, idempotency.\n\nReading [remote.com/remote-mcp](https://remote.com/remote-mcp/) felt like finding the other half of a problem I\'ve already been solving.\n\n## why remote build specifically\n\nThe posting describes my career arc almost literally:\n\n→ Consultant deploying bespoke implementations\n→ PM deciding what graduates from one-off to owned capability\n→ Ships code, not just specs — Cursor and Claude Code daily\n→ Thinks in unit economics, packaging, and gross-margin leverage\n\nRemote Build is 0→1 with P&L thinking baked in. That\'s the work I want to do next.\n\n→ see **handbook/** and **role-fit/** for proof behind the cover letter.',

    'role-fit/economics-packaging.md': '# economics & packaging\n\n*"Own demand signals and unit economics… packaging and pricing that make Remote Build services repeatable and profitable."*\n\n## I\'ve owned the P&L, not just the roadmap\n\n→ **$1.1M+ ARR growth** — packaging, pricing, GTM\n→ **Visit Optimizer:** PhD prototype → **$130K ARR** premium tier (three-wave launch, 39-flag migration)\n→ **~40% compute cost cut** while holding SLAs — gross-margin leverage, not headcount\n\n## same muscle as Remote Build\n\nStarted as PS consultant ($750K bespoke implementations) → PM running portfolio triage and lifecycle calls (launch, graduate, retire) across a six-product AI portfolio.\n\nAggregate demand across engagements. Decide fixed-fee standard vs custom Build. Own unit economics.\n\n## day 30\n\n→ Engagement taxonomy: standard connector · custom integration · custom agent · managed service\n→ Packaging matrix with target gross margin per tier\n→ Fixed-fee pricing for standard connector deployments from delivery data\n\n*Run `build engage --triage` in the terminal.*',

    'role-fit/integrations-graduation.md': '# integrations & graduation\n\n*"Make standard connectors fast, predictable, and fixed-fee. Build bespoke connectors — decide which graduate into reusable ones."*\n\n## deployment muscle\n\n→ **$750K enterprise programs** — config, migration, integrations, stakeholder alignment across 600+ customers\n→ **50+ feature flags** — read-only first, graduated trust, metric-driven demotion\n→ REST, webhooks, OAuth — production infra; HIPAA/PHIPA navigation without losing velocity\n\n## the graduation decision — my career arc\n\n→ **Consultant:** bespoke, one customer at a time\n→ **PM:** which patterns become owned products vs stay custom\n→ **Proof:** Layla (one use case → platform, 500K+ users) · AlayaFlow (blank page → ~2.5 hrs/provider/day saved) · AI Form Assistant (hackathon → GA)\n\n## judgment framework\n\n→ **Graduate:** 3+ customers, same pattern, templatable delivery, margin improves at scale\n→ **Stay bespoke:** unique compliance surface, customer P&L justifies scope, teaches platform what to build\n→ **Every engagement feeds platform:** connector gaps, API/MCP friction, graduation candidates',

    'role-fit/agents-mcp-platform.md': '# agents, MCP & platform\n\n*"Build custom apps and agents on Remote\'s APIs, MCP, and CLI. Turn engagements into actionable feedback for platform teams."*\n\n## shipped agent-facing surfaces\n\n→ **Layla (500K+ daily users):** hierarchical multi-agent — supervisor routing, tiered action boundaries (read / soft write / hard write) → company safety policy\n→ **200+ query eval suite** before write access graduated\n→ **AlayaFlow:** confidence-threshold escalation, metric-driven trust demotion\n\n## when agents call the API\n\n→ **Idempotency** — agents retry\n→ **Scoped permissions** — OAuth-style role inheritance (same design as Remote MCP)\n→ **Structured errors** — machine-readable failure modes\n→ **Observability** — audit trails, demotion when trust drifts\n\n## builder + connective tissue\n\n→ **Cursor & Claude Code daily** — prototypes, internal tooling, this page\n→ **Spec-driven dev:** Gherkin/EARS, constitution, AGENTS file\n→ **API-first handoffs** — blockers to named owners within 24h; field learnings → platform investment cases\n\nRemote MCP (OAuth 2.0 + PKCE, role-aware, no API keys) is the layer I\'ve been building toward from the product side. I\'d codify engagement patterns into starter kits and friction logs that make the next build faster.',

    'handbook/innovation-action.md': '# innovation & default to action\n\n> *"Automation and AI capabilities into the requirements for every role… empower ownership, proactivity, and default to action."*\n\n## builder, not slide-deck PM\n\n→ **Cursor & Claude Code daily** — prototypes, tooling, this application\n→ **Spec-driven dev:** Gherkin/EARS, constitution, AGENTS file — specs agents and engineers execute\n→ **BagelHacks \'26:** voice + AI MVP in under 24 hours\n\n## act before debt accumulates\n\n→ **Portfolio triage:** weekly launch / graduate / retire decisions\n→ **Hackathon → GA:** AI Form Assistant — saw the pattern, shipped it\n→ **50+ feature flags:** act, measure, demotion when trust drifts\n→ **Five-template system + Product Knowledge Base** — tacit delivery → executable process\n\nRemote Build is 0→1 with unset baselines. I\'m comfortable deciding without perfect data — and building systems so sales, CS, and eng can move without me in every room.',

    'handbook/async-excellence.md': '# async, ownership & excellence\n\n> *"Minimize meetings… create your own schedule… treat each other with kindness… support each other as a team."*\n\n## built for distributed work\n\n→ **Montréal, Americas remote** — async docs, decision logs, timezone-aware handoffs · **EN/FR**\n→ **Weekly triage:** pre-read agendas, owners named before the call ends\n→ **Default to action:** route blockers to named owners within 24h\n\n## excellence as kindness\n\nKindness without excellence is hollow. Excellence without kindness burns people out.\n\n→ **Layla:** read-only first, 200+ evals before write access — action boundaries became company AI safety policy\n→ **AI Form Assistant:** every inferred field visibly tagged — slow and correct beats fast and unreviewed\n→ **API-first handoffs** — clear boundaries for eng and design, not Slack archaeology\n\n→ **Pro bono PM coaching** (women & URM) · **1,600+ member AI community**\n→ Continuous discovery — translate ML complexity into decisions customers can act on',

    'proof/most-proud-product.md': '# product i\'m most proud of\n\n*Application question: Describe the product you\'ve worked on which you\'re the most proud of, what was its impact?*\n\n## layla · hierarchical multi-agent assistant\n\n**Layla** — the AI assistant I re-architected on AlayaCare\'s home healthcare platform, now serving **500K+ daily users** with **28M+ monthly interactions**.\n\nWhen I inherited Layla, it was a monolithic prototype with one use case and no clear safety model for agents that could read and write patient data in a HIPAA-regulated environment. I drove the decision to rebuild it as a **hierarchical multi-agent platform**: a supervisor routes requests to domain agents for documentation, scheduling, and care-plan workflows, with API-first orchestration that gave engineering clear boundaries to build against.\n\n## the product problem: trust at scale\n\n→ Shipped read-only capabilities first — slow and correct beats fast and unreviewed\n→ Built a **200+ query evaluation suite** before write access graduated\n→ Designed three-tier action boundaries (read / soft write / hard write) → **company-wide AI safety policy**\n→ When agents are the primary consumer of your APIs, boundaries aren\'t compliance paperwork — they\'re the product\n\n## impact\n\n→ Expanded from a single workflow into a platform capability across documentation, scheduling, and care plans\n→ Care teams get hours back on high-friction tasks; 28M+ monthly interactions at steady state\n→ Reference architecture for every subsequent agent we shipped — AlayaFlow, AI Form Assistant, and beyond\n→ Same design constraints as Remote MCP: scoped permissions, structured endpoints, observability\n\n## why this one\n\nLayla is the product where product judgment, safety architecture, and platform thinking converged at scale. It\'s also the pattern Remote Build runs on: take a bespoke engagement, make it compound into an owned capability the next customer inherits for free.',

    'proof/layla-agent-platform.md': '# layla · agent platform\n\n**Pattern:** when agents are the primary API consumer, boundaries are a product problem.\n\n→ Hierarchical multi-agent assistant on home healthcare platform serving 500K+ daily users\n→ Supervisor routing to domain agents; API-first orchestration\n→ Three-tier action boundaries (read / soft write / hard write) → company safety policy\n→ 200+ query eval suite; shipped read-only capabilities first\n\n**Remote Build relevance:** Same design constraints as Remote MCP — scoped permissions, structured endpoints, observability. I\'ve shipped the product layer; Remote Build delivers the customer engagement layer on top.',

    'proof/alayaflow-0-to-1.md': '# alayaflow · 0→1 agentic build\n\n**Pattern:** greenfield agentic product from blank page to production.\n\n→ Agentic workflow platform: claims, scheduling, care plans\n→ Graduated trust: manual → HITL → autonomous with metric-driven demotion\n→ Automating ~2.5 hrs/provider/day\n→ Academic partnership for synthetic eval before production\n\n**Remote Build relevance:** Custom apps and agents on platform APIs — the exact engagement model Remote Build runs with customers.',

    'proof/bespoke-to-productized.md': '# bespoke → productized arc\n\n**Pattern:** decide which engagements compound into owned capabilities.\n\n→ Started as PS consultant: $750K bespoke enterprise implementations\n→ Became PM: portfolio triage, lifecycle calls (launch, graduate, retire)\n→ **AI Form Assistant:** hackathon → GA — customer ask became owned product\n→ **Visit Optimizer:** PhD research → $130K ARR premium tier\n→ **Layla:** one use case → platform across documentation, scheduling, care plans\n\n**Remote Build relevance:** The core mission — make every Build engagement compound.',

    'proof/commercial-operator.md': '# commercial operator\n\n→ $1.1M+ ARR growth owned across premium AI products\n→ $130K ARR from Visit Optimizer premium tier (three-wave phased launch)\n→ $2M+ AI roadmap with dependency mapping\n→ ~40% compute cost reduction — gross-margin leverage\n→ Ambient listening business case won executive pricing decisions\n\n**Remote Build relevance:** Own demand signals, packaging, pricing, and unit economics.',

    'proof/builder-fluency.md': '# builder fluency\n\n→ Cursor & Claude Code daily — prototypes, internal tooling, this page\n→ Spec-driven development: Gherkin/EARS, constitution, AGENTS file, five-template system\n→ Python, JavaScript, SQL, HTML/CSS — reads partner docs, identifies integration risks\n→ REST APIs, webhooks, OAuth, MCP — production infra across API, voice, web\n→ BagelHacks \'26 winner — shipped working MVP in under 24 hours\n\n**Remote Build relevance:** Required proficiency — autonomously build, debug, and ship functional code.',

    'resume/sarah-khalid.md': '# sarah khalid\n\n**Senior Product Manager · AI / Agents · Platform & Integrations**\n**Senior PM, AI/ML (Labs)** · AlayaCare · **Founder** · Dialogos Labs\n**Montréal** · remote · EN / FR\n\n---\n\n## stats\n\n→ 7+ years enterprise B2B SaaS · 600+ enterprise customers\n→ 500K+ daily users · 28M+ monthly interactions\n→ $1.1M+ ARR owned · $3.1M grants secured · $2M+ roadmap\n→ 1,600+ member AI community\n\n## experience → remote build\n\n→ **0→1 builder:** AlayaFlow agentic engine, bespoke PS → productized portfolio lifecycle\n→ **Agent-facing surfaces:** Layla multi-agent platform (500K+ users), tiered action boundaries\n→ **Commercial:** packaging, pricing, unit economics, $130K premium tier from research prototype\n→ **Builder fluency:** Cursor & Claude Code daily, spec-driven dev, REST/OAuth/MCP\n→ **Integrations:** $750K enterprise implementations, API-first handoffs, regulatory navigation\n→ **Leverage:** ~40% compute cost reduction, managed services on tooling not headcount\n\n## skills\n\n→ Platform: REST APIs, webhooks, OAuth, MCP, agent-facing surface design\n→ AI/agents: multi-agent orchestration, eval frameworks, red-teaming, RAG\n→ Commercial: packaging & pricing, ARR, roadmap, portfolio lifecycle\n→ Building: Claude Code, Cursor, Python, JavaScript, SQL, HTML/CSS\n\n## education & certs\n\n→ Waterloo BSc · CSPO · Duke AI PM · BlueDot AI Safety · ML4Good (2026)\n\n## links\n\n→ [full resume (docx)](/remote/Sarah_Khalid_Resume_Remote_Build.docx)\n→ [cover letter (docx)](/remote/Sarah_Khalid_Cover_Letter_Remote_Build.docx)\n→ [linkedin](https://www.linkedin.com/in/sarkhalid/)\n→ [portfolio](https://sarkhalid.com/projects)\n→ sar.khalid@outlook.com',

    'build/engagement-triage.ts': '{{TYPESCRIPT}}'
  };

  var tsStub = '<span class="ts-cm">// engagement triage — bespoke vs productize decision</span>\n<span class="ts-kw">import</span> { RemoteBuild } <span class="ts-kw">from</span> <span class="ts-str">"@remote/build-cli"</span>;\n\n<span class="ts-kw">interface</span> <span class="ts-type">EngagementSignal</span> {\n  customerId: <span class="ts-type">string</span>;\n  pattern: <span class="ts-str">"standard-connector"</span> | <span class="ts-str">"custom-integration"</span> | <span class="ts-str">"custom-agent"</span>;\n  demandCount: <span class="ts-type">number</span>;\n  grossMarginTarget: <span class="ts-type">number</span>;\n}\n\n<span class="ts-kw">function</span> <span class="ts-fn">shouldGraduate</span>(signal: <span class="ts-type">EngagementSignal</span>): <span class="ts-type">boolean</span> {\n  <span class="ts-cm">// default to action — compound, don\'t accumulate debt</span>\n  <span class="ts-kw">return</span> signal.demandCount >= <span class="ts-str">3</span> && signal.grossMarginTarget > <span class="ts-str">0.6</span>;\n}\n\n<span class="ts-kw">const</span> acme: <span class="ts-type">EngagementSignal</span> = {\n  customerId: <span class="ts-str">"acme-global"</span>,\n  pattern: <span class="ts-str">"custom-integration"</span>,\n  demandCount: <span class="ts-str">4</span>,\n  grossMarginTarget: <span class="ts-str">0.72</span>\n};\n\n<span class="ts-fn">console</span>.<span class="ts-fn">log</span>(<span class="ts-fn">shouldGraduate</span>(acme) ? <span class="ts-str">"→ graduate to standard connector"</span> : <span class="ts-str">"→ stay bespoke"</span>);';

  var fileTree = [
    { name: 'README.md', path: 'README.md', badge: null },
    { name: 'cover-letter.md', path: 'cover-letter.md', badge: 'U' },
    { name: 'why-remote.md', path: 'why-remote.md', badge: 'U' },
    { folder: 'role-fit', open: true, children: [
      { name: 'economics-packaging.md', path: 'role-fit/economics-packaging.md' },
      { name: 'integrations-graduation.md', path: 'role-fit/integrations-graduation.md' },
      { name: 'agents-mcp-platform.md', path: 'role-fit/agents-mcp-platform.md' }
    ]},
    { folder: 'handbook', open: true, children: [
      { name: 'innovation-action.md', path: 'handbook/innovation-action.md' },
      { name: 'async-excellence.md', path: 'handbook/async-excellence.md' }
    ]},
    { folder: 'proof', open: true, children: [
      { name: 'most-proud-product.md', path: 'proof/most-proud-product.md', badge: '★' },
      { name: 'layla-agent-platform.md', path: 'proof/layla-agent-platform.md' },
      { name: 'alayaflow-0-to-1.md', path: 'proof/alayaflow-0-to-1.md' },
      { name: 'bespoke-to-productized.md', path: 'proof/bespoke-to-productized.md' },
      { name: 'commercial-operator.md', path: 'proof/commercial-operator.md' },
      { name: 'builder-fluency.md', path: 'proof/builder-fluency.md' }
    ]},
    { folder: 'resume', open: false, children: [
      { name: 'sarah-khalid.md', path: 'resume/sarah-khalid.md' }
    ]},
    { folder: 'build', open: false, children: [
      { name: 'engagement-triage.ts', path: 'build/engagement-triage.ts' }
    ]}
  ];

  var agentPrompts = [
    { label: 'Most proud product?', path: 'proof/most-proud-product.md', reply: 'Layla — 500K+ daily users, hierarchical multi-agent platform, trust boundaries that became company safety policy.' },
    { label: 'Why Remote Build?', path: 'role-fit/economics-packaging.md', reply: 'Bespoke → productized arc + unit economics. PS consultant → PM running portfolio graduation. Opening economics-packaging.md.' },
    { label: 'Agent-facing APIs?', path: 'role-fit/agents-mcp-platform.md', reply: 'Layla at 500K+ users with tiered action boundaries — same constraints as Remote MCP. Opening agents-mcp-platform.md.' },
    { label: 'Show me proof', path: 'proof/bespoke-to-productized.md', reply: 'My career arc is the Remote Build thesis: consultant → PM deciding what graduates.' },
    { label: 'Remote MCP story?', path: 'why-remote.md', reply: 'Employment infrastructure + agentic shift — Remote MCP mirrors how I\'ve built safe agent surfaces.' }
  ];

  var triageScript = [
    { type: 'dim', text: '▸ reading engagements/acme-global/signals.json' },
    { type: 'dim', text: '▸ loading skills: demand-parser · margin-calc · graduate-check · package-builder' },
    { type: 'blank' },
    { type: 'step', text: '[01 · parse] custom-integration — HiBob → Remote payroll sync' },
    { type: 'line', text: 'demand: 4 customers asked for same pattern · margin target: 72%' },
    { type: 'line', text: 'blocker: OAuth scope mapping undocumented for agent callers' },
    { type: 'blank' },
    { type: 'step', text: '[02 · classify] engagement type' },
    { type: 'line', text: 'standard connector exists: no · delivery: bespoke Build · fee: T&M' },
    { type: 'line', text: 'graduation threshold: 3+ demand signals ✓ · margin > 60% ✓' },
    { type: 'blank' },
    { type: 'step', text: '[03 · recommend] graduate → standard connector' },
    { type: 'line', text: 'package: fixed-fee HiBob connector · target: 2-week deployment' },
    { type: 'line', text: 'platform feedback: document OAuth scopes for MCP agent callers' },
    { type: 'blank' },
    { type: 'step', text: '[04 · handoff] managed services playbook' },
    { type: 'line', text: 'steady-state: quarterly sync health check · customer-facing status dashboard' },
    { type: 'blank' },
    { type: 'ok', text: '✓ engagement compounds — pattern productized · run again to replay' }
  ];

  /* ── NatureLayer ── */
  var NatureLayer = (function () {
    var canvas, ctx, particles, rafId, reduced, overlayRoot, sproutRoot;
    var activeBursts = 0;
    var maxParticles = 80;
    var waves = [];

    var sproutSvgs = {
      fern: '<svg width="28" height="48" viewBox="0 0 28 48"><path d="M14 48 Q8 30 4 20 Q10 22 14 8 Q18 22 24 20 Q20 30 14 48" fill="#5a9a6a" opacity=".85"/><path d="M14 35 Q6 28 2 18 M14 35 Q22 28 26 18" stroke="#7aba8a" stroke-width="1.5" fill="none"/></svg>',
      sapling: '<svg width="20" height="40" viewBox="0 0 20 40"><rect x="8" y="24" width="4" height="16" fill="#6a4a3a"/><circle cx="10" cy="16" r="12" fill="#4a8a5a" opacity=".8"/></svg>',
      grass: '<svg width="24" height="20" viewBox="0 0 24 20"><path d="M4 20 Q6 8 8 20 M10 20 Q12 4 14 20 M16 20 Q18 10 20 20" stroke="#6aba7a" stroke-width="2" fill="none"/></svg>'
    };

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
        var alpha = (1 - w.age / 180) * .25;
        var y = w.originY + Math.sin((w.age + w.offset) * .04) * 8;
        ctx.strokeStyle = 'rgba(120, 180, 220, ' + alpha + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (var x = 0; x < canvas.width; x += 4) {
          var wy = y + Math.sin((x + w.age * 2) * .02) * 12;
          if (x === 0) ctx.moveTo(x, wy); else ctx.lineTo(x, wy);
        }
        ctx.stroke();
      }
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

    function spawnSprout(x, y, variant) {
      if (!sproutRoot) return;
      var variants = ['fern', 'sapling', 'grass'];
      var v = variant || variants[Math.floor(Math.random() * variants.length)];
      var el = document.createElement('div');
      el.className = 'nature-sprout';
      el.style.left = (x - 14) + 'px';
      el.style.top = (y - 40) + 'px';
      el.innerHTML = sproutSvgs[v];
      sproutRoot.appendChild(el);
      setTimeout(function () { el.remove(); }, 4000);
    }

    function emitPetals(n) {
      for (var i = 0; i < (n || 12); i++) {
        spawnParticle('petal', Math.random() * window.innerWidth, -10 - Math.random() * 100);
      }
    }

    function emitFireflies(n, x, y) {
      for (var i = 0; i < (n || 5); i++) {
        spawnParticle('firefly', (x || window.innerWidth / 2) + (Math.random() - .5) * 80, (y || window.innerHeight / 2) + (Math.random() - .5) * 40);
      }
    }

    function emitWave(originY) {
      waves.push({ originY: originY || canvas.height * .75, age: 0, offset: Math.random() * 100 });
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
      setTimeout(function () { el.remove(); }, 800);
    }

    function setStatusGlyph(glyph) {
      var el = document.getElementById('status-nature');
      if (el) el.textContent = glyph;
    }

    function onFileOpen(path, evt) {
      var x = evt && evt.clientX ? evt.clientX : 120;
      var y = evt && evt.clientY ? evt.clientY : 200;
      spawnSprout(x, y);
      spawnSprout(x + 20, y, 'grass');
      setStatusGlyph('🌿');

      if (path === 'README.md') {
        burst('trees', 4000); setStatusGlyph('🌳');
      } else if (path === 'cover-letter.md') {
        burst('nipa', 3500); setStatusGlyph('🏠');
      } else if (path === 'why-remote.md') {
        burst('sun'); setStatusGlyph('☀️');
      } else if (path.indexOf('handbook/') === 0) {
        burst('forest'); emitPetals(15); setStatusGlyph('🌲');
      } else if (path === 'role-fit/economics-packaging.md') {
        burst('crt', 3000); setStatusGlyph('⚙️');
      } else if (path === 'role-fit/integrations-graduation.md') {
        burst('geometry', 3500); setStatusGlyph('◇');
      } else if (path === 'role-fit/agents-mcp-platform.md') {
        burst('orb', 3500); setStatusGlyph('◉');
      } else if (path === 'proof/most-proud-product.md') {
        burst('orb', 4000); emitFireflies(10); setStatusGlyph('★');
      } else if (path.indexOf('proof/') === 0) {
        burst('beams', 2500);
      } else if (path === 'resume/sarah-khalid.md') {
        burst('orb', 3500); setStatusGlyph('◉');
      } else if (path === 'build/engagement-triage.ts') {
        burst('crt', 2800); emitFireflies(8, x, y); setStatusGlyph('⌘');
      }
    }

    function onAgentPrompt() {
      burst('beams', 2000);
      burst('forest-rays', 2500);
      setStatusGlyph('✦');
    }

    function onTerminalRun() {
      var panel = document.getElementById('bottom-panel');
      var rect = panel ? panel.getBoundingClientRect() : { top: window.innerHeight - 200 };
      emitWave(rect.top);
      burst('chrome', 2000);
      setStatusGlyph('🌊');
    }

    function onTerminalComplete() {
      burst('sun', 2000);
      burst('orb', 3000);
      spawnSprout(window.innerWidth - 80, window.innerHeight - 40, 'sapling');
      setStatusGlyph('☀️');
    }

    return {
      init: init,
      onFileOpen: onFileOpen,
      onAgentPrompt: onAgentPrompt,
      onTerminalRun: onTerminalRun,
      onTerminalComplete: onTerminalComplete,
      lightbeam: lightbeam,
      hoverFirefly: function (x, y) { spawnParticle('firefly', x, y); },
      emitFireflies: emitFireflies
    };
  })();

  /* ── markdown renderer ── */
  function renderMarkdown(text, path) {
    if (path === 'build/engagement-triage.ts') {
      return '<pre class="md-code">' + tsStub + '</pre>';
    }
    var lines = text.split('\n');
    var out = [];
    var inList = false;
    lines.forEach(function (line) {
      if (line.indexOf('{{') === 0) return;
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
      } else if (line.trim() === '') {
        if (inList) { out.push('</ul>'); inList = false; }
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
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
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  /* ── app state ── */
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
    NatureLayer.onFileOpen(path, evt);
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

  /* ── agent ── */
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

    addMsg('Welcome. I\'m a scripted tour of Sarah\'s application for Senior PM, Remote Build — click a prompt, or explore the file tree. The IDE breathes when you pause.', 'bot');

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
          NatureLayer.onAgentPrompt();
          var chipRect = chip.getBoundingClientRect();
          var editorEl = document.getElementById('editor');
          if (editorEl) {
            var er = editorEl.getBoundingClientRect();
            NatureLayer.lightbeam(chipRect.left, chipRect.top + 10, er.left + 40, er.top + 30);
          }
        }, 300);
      });
      chips.appendChild(chip);
    });
  }

  /* ── terminal ── */
  function initTerminal() {
    var linesEl = document.getElementById('terminal-lines');
    var scrollEl = document.getElementById('terminal-scroll');
    var btn = document.getElementById('terminal-run');
    var cursor = document.getElementById('term-cursor');
    var running = false;

    function appendLine(entry) {
      var el = document.createElement('div');
      if (entry.type === 'blank') el.className = 'term-line term-line--blank';
      else { el.className = 'term-line term-line--' + entry.type; el.textContent = entry.text; }
      linesEl.appendChild(el);
      if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
    }

    btn.addEventListener('click', function () {
      if (running) return;
      running = true;
      btn.disabled = true;
      cursor.classList.add('hidden');
      linesEl.innerHTML = '';
      NatureLayer.onTerminalRun();

      var cmd = document.createElement('div');
      cmd.className = 'term-line term-line--dim';
      cmd.textContent = '$ build engage --triage acme-global';
      cmd.style.opacity = '1';
      linesEl.appendChild(cmd);

      var i = 0;
      function next() {
        if (i >= triageScript.length) {
          running = false;
          btn.disabled = false;
          cursor.classList.remove('hidden');
          NatureLayer.onTerminalComplete();
          return;
        }
        appendLine(triageScript[i++]);
        setTimeout(next, lineDelay || 1);
      }
      setTimeout(next, lineDelay || 1);
    });
  }

  /* ── idle breathe ── */
  function resetIdle() {
    var shell = document.getElementById('ide-shell');
    var hint = document.getElementById('breathe-hint');
    shell.classList.remove('breathing');
    hint.classList.remove('visible');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (!reducedMotion) {
        shell.classList.add('breathing');
        hint.classList.add('visible');
        setTimeout(function () { hint.classList.remove('visible'); }, 4000);
      }
    }, 8000);
  }

  /* ── panel tabs ── */
  document.querySelectorAll('.panel-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.panel-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.panel-pane').forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('panel-' + tab.getAttribute('data-panel')).classList.add('active');
    });
  });

  /* ── mobile ── */
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

  /* ── init ── */
  NatureLayer.init({
    canvas: document.getElementById('nature-canvas'),
    overlayRoot: document.getElementById('nature-overlays'),
    sproutRoot: document.getElementById('nature-sprouts'),
    reducedMotion: reducedMotion
  });

  buildTree(fileTree, treeEl);
  openFile('proof/most-proud-product.md', null);
  initAgent();
  initTerminal();
  resetIdle();

  document.addEventListener('mousemove', function (e) {
    if (e.target.closest('.tree-file, .tree-label') && Math.random() < .08) {
      NatureLayer.hoverFirefly(e.clientX, e.clientY);
    }
  });

})();
