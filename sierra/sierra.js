(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lineDelay = reducedMotion ? 0 : 160;

  var mappingRows = [
    {
      sierra: 'Agents that replace lengthy paper intake forms with conversational experiences, boosting pre-visit intake conversion',
      shipped: '**AI Form Assistant** — dictation → LLM schema-mapping → accountable conversational autofill; HIPAA/PHIPA-aligned; 0→1 hackathon prototype to GA'
    },
    {
      sierra: 'Agents for health plans answering "what\'s my co-pay for a primary care visit?" / "how many PT sessions do I have left?"',
      shipped: '**Layla** — hierarchical multi-agent conversational assistant on a 500K+ user platform; supervisor routing → domain agents; read-only-first'
    },
    {
      sierra: 'Voice/chat agents that help members find in-network specialists, check availability, locate providers',
      shipped: '**Layla + Visit Optimizer** — domain routing for provider/coverage queries; ALNS routing engine for availability/scheduling'
    },
    {
      sierra: 'Net-new agentic products that cut cost and drive revenue across the healthcare ecosystem',
      shipped: '**AlayaFlow** — agentic workflows (claims reconciliation, emergency scheduling, care-plan generation); ~2.5h saved/provider. **Visit Optimizer** — dormant feature → premium SKU, ~47% travel reduction'
    },
    {
      sierra: 'Secure, compliant phone/voice interactions at scale',
      shipped: '**AI Form Assistant voice layer + red-team suite** — 38 test cases, 9 attack categories incl. multilingual translation-layer injection'
    },
    {
      sierra: 'Strict HIPAA compliance and the trust healthcare demands',
      shipped: '**Notable** — PHI purge/flag/clean pipeline, self-hosted in VPC; helped secure signatory status on Canada\'s voluntary generative-AI code of conduct'
    }
  ];

  function mappingHtml() {
    var table = '<div class="mapping-wrap"><table class="mapping-table"><thead><tr><th>sierra wants to build…</th><th></th><th>i\'ve already shipped…</th></tr></thead><tbody>';
    mappingRows.forEach(function (row) {
      table += '<tr><td class="sierra-col">' + row.sierra + '</td><td class="arrow-col">→</td><td class="shipped-col">' + row.shipped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</td></tr>';
    });
    table += '</tbody></table>';
    table += '<div class="mapping-cards">';
    mappingRows.forEach(function (row) {
      table += '<div class="mapping-card"><div class="mapping-card__sierra">' + row.sierra + '</div><div class="mapping-card__arrow">→ shipped</div><div class="mapping-card__shipped">' + row.shipped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</div></div>';
    });
    table += '</div></div>';
    return table;
  }

  var fileContents = {
    'README.md': '# welcome\n\nProduct Manager, Agent Development — Healthcare @ Sierra.\n\n## start here\n\n→ **01-thesis.md** — i\'ve built your example projects\n→ **02-mapping.md** — sierra\'s roadmap, already shipped *(centerpiece)*\n→ **03-demo.md** — run the member-agent demo in the panel below\n→ **toronto/the-6.md** — why first PM hire in toronto\n→ **proof/** — six pattern stories\n→ **member agent** panel · **run conversation** below',

    '01-thesis.md': '# 01 · the thesis\n\n> **healthcare agents customers trust.**\n> it\'s also the last seven years of my work — six production AI products in regulated home-healthcare, 500K+ daily users, 28M+ monthly interactions, built under HIPAA with the eval and red-team rigor those conversations demand. sierra\'s example-projects list isn\'t a wishlist to me. it\'s a description of things i\'ve shipped.\n\nfor seven years i\'ve owned product strategy across a six-product AI/ML portfolio at AlayaCare — conversational intake, member-facing benefits agents, agentic claims and scheduling workflows — all under HIPAA/PHIPA, serving 600+ enterprise healthcare customers on a $2M+ roadmap.\n\nthe mapping in **02-mapping.md** is the sharpest move: sierra\'s own example projects, line by line, matched to what\'s already in production.\n\n→ open **02-mapping.md** next.',

    '02-mapping.md': '# 02 · the mapping\n\n*sierra\'s roadmap, already shipped.*\n\n{{MAPPING}}\n\n> i didn\'t build these *for* sierra. i built them because the same problems exist in home-healthcare — and solving them taught me that in this domain, trust is the product.\n\n→ run the **member agent** demo below · then explore **proof/**',

    '03-demo.md': '# 03 · live demo\n\n*a member conversation, the way i\'d build it.*\n\nThe panel below runs a deterministic simulation of a Sierra-style healthcare member-services agent — modeled on Layla — with two synchronized panes:\n\n→ **left:** what the member sees\n→ **right:** reasoning + guardrail trace — what the PM designed\n\n## scenarios\n\n→ **co-pay lookup** — happy path, read-only, grounded answer\n→ **PT sessions** — eligibility check + utilization count\n→ **injection attempt** — guardrail catches instruction override; agent stays on-task\n\nclick **run conversation** in the Member Agent panel. sample data only — not real PHI.',

    '04-stack.md': '# 04 · stack\n\n*build · deliver · agents · trust*\n\n{{STACK}}\n\n→ see **resume/sarah-khalid.md** for ATS-formatted version',

    'toronto/the-6.md': '# toronto · the 6\n\n*why i want to be sierra\'s first canada-based PM hire.*\n\n[Sierra landed in The 6](https://sierra.ai/blog/sierra-lands-in-the-6) — about a dozen employees, growing customers, investing in Canada\'s thriving tech hub. agents on sierra now serve over 40% of the Fortune 50. singtel launched in 10 weeks. cigna cut patient authentication time by 80%.\n\nthis is the moment i\'d want to join.\n\n## what i bring to toronto\n\n→ **seven years in canadian healthcare SaaS** — AlayaCare, CIUSSS field sessions, HIPAA/PHIPA fluency\n→ **bilingual EN/FR** — quebec health networks, national payers, cross-border delivery\n→ **shipped the products your healthcare roadmap describes** — not slideware, production at 500K+ daily users\n→ **customer-facing from day one** — professional services → PM arc; i\'ve sat in the field with the people the agent serves\n→ **builder credibility** — this page, the demo, the specs; i ship what i scope\n\n## why toronto, why now\n\nsierra is expanding sales and opening its first toronto office while healthcare agents are the highest-trust, highest-stakes surface in the portfolio. canada\'s healthcare ecosystem — payers, providers, home-care, provincial networks — is where i\'ve built my career.\n\ni\'m primarily based in montréal and genuinely open to relocating to SF or NY for this role. but if sierra is planting a flag in toronto, i want to be the PM who helps that office earn trust with canadian healthcare customers from the first partnership.\n\n> when that hotline bling, it can only mean one thing — they\'re first in line. i\'d build agents that keep it that way.',

    'cover-letter.md': '# cover letter\n\nSierra\'s healthcare example-projects list reads like a description of products I\'ve already shipped — conversational intake, member-facing benefits agents, agentic claims and scheduling workflows — built for 500K+ daily users and 28M+ monthly interactions in regulated home-healthcare, under HIPAA, with the red-team and eval rigor those conversations demand.\n\nFor seven years I\'ve owned product strategy across a six-product AI/ML portfolio at AlayaCare. Layla handles the same member questions your agents do — co-pays, coverage, provider search — as a hierarchical multi-agent system with evaluation and safety discipline across Claude, GPT, Qwen, and LLaMA. AI Form Assistant replaced paper intake with accountable conversational autofill. AlayaFlow automates claims reconciliation and emergency scheduling with graduated trust.\n\nSierra\'s expansion into Toronto is the moment I\'d want to join. Canada\'s healthcare ecosystem, bilingual delivery, and enterprise customers are where I\'ve built my career.\n\nRather than restate my resume, I built a short page that maps your roadmap to what I\'ve already delivered: dialogoslabs.xyz/sierra.\n\n— Sarah Khalid',

    'proof/ai-form-assistant.md': '# AI Form Assistant\n\n`0-to-1 · hackathon → GA · conversational intake`\n\n> *remove the friction between observation and documentation so clinical judgment stays present.*\n\n→ dictation → LLM schema-mapping → accountable autofill with visible AI tags and graceful per-field override\n→ designed the prompt-injection red-team suite and eval harness myself (38 cases, 9 attack categories, incl. multilingual translation-layer attacks)\n→ HIPAA / PHIPA-aligned; multilingual capture → form-language translation\n→ the closest analog to sierra\'s "conversational intake" example project — already shipped\n\n`outcome ·` documentation-time reduction · GA shipping · the page\'s live demo runs this scoping pattern\n\n`conversational intake` `responsible-ai` `voice`',

    'proof/layla.md': '# Layla\n\n`applied research pm · alayacare · 500K+ users · 28M+ monthly interactions`\n\n> *multi-agent boundaries are a UX problem, not just an engineering one.*\n\n→ monolith → supervisor routing to domain agents on a 500K+ user healthcare platform\n→ three-tier action boundaries (read / soft-write / hard-write) mapped to company safety policy\n→ 200+ query eval suite; shipped read-only capabilities first\n→ handles exactly the member-facing benefits/coverage/provider questions sierra\'s agents do\n\n`outcome ·` hierarchical multi-agent assistant live in daily clinical workflow\n\n`multi-agent` `member-facing` `healthcare`',

    'proof/alayaflow.md': '# AlayaFlow\n\n`agentic workflows · alayacare · ~2.5h saved/provider`\n\n> *production AI in high-stakes domains needs infrastructure for trust, not just capable models.*\n\n→ claims reconciliation, emergency scheduling, care-plan generation workflows\n→ graduated trust: manual → human-in-the-loop → autonomous, with metric-driven demotion\n→ matched agent topology to task shape — not one-size orchestration\n→ academic eval partnership (MILA) before production rollout\n\n`outcome ·` ~2.5h saved per provider · blank page to production · agentic cost reduction\n\n`agentic` `trust` `healthcare`',

    'proof/notable.md': '# Notable\n\n`clinical NLP · self-hosted · 95% category accuracy`\n\n> *self-hosted, bounded-scope LLMs beat generic integrations when PHI and determinism matter.*\n\n→ three-stage pipeline: purge → flag → clean unstructured home-care notes\n→ self-hosted in VPC; BERT → instruction-tuned production model\n→ helped secure signatory status on Canada\'s voluntary generative-AI code of conduct\n→ the compliance/PHI-handling muscle sierra\'s "even better" list asks for\n\n`outcome ·` 95% category accuracy · regulated NLP in production\n\n`nlp` `compliance` `PHI handling`',

    'proof/visit-optimizer.md': '# Visit Optimizer\n\n`optimization · premium GTM · ~47%`\n\n> *optimization as product — and the build-and-sell proof point.*\n\n→ ALNS multi-depot vehicle routing with time windows\n→ ~47% travel reduction on agency historical data; 40K+ visits optimized Q1 post-launch\n→ resurrected a dormant feature into a premium SKU; co-led GTM with marketing\n→ the "drive revenue" half of sierra\'s net-new-products mandate\n\n`outcome ·` premium SKU · cost-out + revenue-in\n\n`optimization` `gtm` `revenue`',

    'proof/hana.md': '# Hana\n\n`bagelhacks \'26 winner · 24h build`\n\n> *ships fast and small — intensity and craftsmanship are compatible.*\n\n→ voice + AI MVP shipped in 24h; now live at [hana.intentional.company](https://hana.intentional.company)\n→ same unstructured → structured-with-accountability DNA as AI Form Assistant\n\n`outcome ·` hackathon win · live product · velocity proof\n\n`0-to-1` `voice` `velocity`',

    'resume/sarah-khalid.md': '# sarah khalid\n\n**Senior AI/ML Product Manager**\n\nMontreal, QC · sar.khalid@outlook.com · [sarkhalid.com](https://sarkhalid.com) · +1-416-272-6280\n\n---\n\n## summary\n\nSenior AI/ML Product Manager with 7+ years shipping production AI systems at enterprise scale — multi-agent assistants, agentic workflow engines, NLP platforms, and ML-powered routing and risk prediction. Deep experience leading cross-functional execution across research, design, engineering, and clinical stakeholders; building evaluation frameworks for LLM-based products; and translating novel ML approaches into reliable, observable, customer-facing features.\n\n## experience\n\n### Founder — Dialogos Labs\n**Aug 2025 – Present** · Montreal, QC\n\n→ Founded a creative product studio for AI/ML spanning six service lines — applied research PM, product-market fit and positioning, coaching and advisory, editorial, community, and end-to-end product builds.\n\n### Senior AI/ML Product Manager — AlayaCare\n**Mar 2022 – Present** · Montreal, QC\n\n→ Own product strategy across a 6-product AI/ML portfolio serving 600+ enterprise healthcare customers; $2M+ roadmap driving $1.1M+ ARR growth\n→ Re-platformed Layla into hierarchical multi-agent system — 500K+ daily users, 28M+ monthly interactions\n→ ML infra consolidation cut compute costs 40%; production stack across Ray/Anyscale, Modal, vLLM, AWS Bedrock\n→ Eval and safety discipline: MLflow + Langfuse pipeline, red-team suite (prompt injection, jailbreaking, clinical regressions)\n→ Feedback-to-detection pipeline improved accuracy 74%\n\n### R&D Innovation, Delivery Manager — AlayaCare\n**Jan 2021 – May 2022**\n\n→ Secured $3.1M in research grants; 20+ clinical AI evaluations and 3 POC implementations\n\n### Professional Services Consultant — AlayaCare\n**Sep 2019 – Jan 2021**\n\n→ Enterprise implementations generating $750K across product, engineering, and support\n\n### Clinical Operations Specialist — eQOL Inc\n**Oct 2018 – Apr 2020** · Toronto, ON\n\n→ Technical support for 500+ users across 11 clinical sites; ML product development and clinical decision-support\n\n### Biology Teaching Assistant — University of Waterloo\n**Sep 2015 – Apr 2018**\n\n→ Educated 200+ students; curriculum and mentorship programs\n\n### Psychology Research Assistant — CAMH\n**Apr 2015 – Feb 2016** · Toronto, ON\n\n→ Published author in Schizophrenia Journal; neuropsychology and TMS efficacy research\n\n## community\n\n→ Horizon Omega (HΩ) — Chief of Staff capacity, 1,600+ member AI safety community (2026–present)\n→ All Tech Is Human — Responsible AI Apprentice (2025)\n→ MLOps Community — Keynote speaker (2022–2023)\n→ Women in AI — Community lead, Canada Chapter (2022–2023)\n\n## technical skills\n\n→ **AI/ML:** LLMs/SLMs, multi-agent orchestration, RAG, eval framework design\n→ **Infrastructure:** MLflow, Langfuse, Docker, Kubernetes, Ray, Anyscale, Snowflake, Airflow\n→ **Development:** Python, TypeScript, JavaScript, SQL, HTML/CSS\n→ **Product:** Jira, Linear, Figma, Pendo, Amplitude, Cursor\n→ **Languages:** English (native), French (intermediate), Korean (limited), Arabic (elementary)\n\n## education & certifications\n\n→ ML4Good — AI Safety Technical Bootcamp (2026)\n→ BlueDot Impact — AI Safety Fundamentals and Writing Intensive (2025)\n→ Duke University — AI Product Manager Specialization (2022–2023)\n→ University of Waterloo — Honours BSc (2013–2019), Dean\'s Honours List\n→ Certified Scrum Product Owner (CSPO)\n\n## links\n\n→ [portfolio](https://sarkhalid.com/projects)\n→ [linkedin](https://www.linkedin.com/in/sarkhalid/)',

    'build/member-agent-guardrails.ts': '{{TYPESCRIPT}}'
  };

  var tsStub = '<span class="ts-cm">// member agent guardrails — action boundary design</span>\n<span class="ts-kw">type</span> <span class="ts-type">ActionTier</span> = <span class="ts-str">"READ_ONLY"</span> | <span class="ts-str">"SOFT_WRITE"</span> | <span class="ts-str">"HARD_WRITE"</span>;\n\n<span class="ts-kw">interface</span> <span class="ts-type">GuardrailCheck</span> {\n  intent: <span class="ts-type">string</span>;\n  injectionDetected: <span class="ts-type">boolean</span>;\n  tier: <span class="ts-type">ActionTier</span>;\n  confidence: <span class="ts-type">number</span>;\n}\n\n<span class="ts-kw">function</span> <span class="ts-fn">evaluateBoundary</span>(check: <span class="ts-type">GuardrailCheck</span>): <span class="ts-type">boolean</span> {\n  <span class="ts-kw">if</span> (check.injectionDetected) <span class="ts-kw">return false</span>;\n  <span class="ts-kw">if</span> (check.tier === <span class="ts-str">"HARD_WRITE"</span>) <span class="ts-kw">return false</span>; <span class="ts-cm">// never armed for member channel</span>\n  <span class="ts-kw">return</span> check.confidence >= <span class="ts-str">0.85</span>;\n}\n\n<span class="ts-kw">const</span> copayLookup: <span class="ts-type">GuardrailCheck</span> = {\n  intent: <span class="ts-str">"benefits_lookup.copay"</span>,\n  injectionDetected: <span class="ts-kw">false</span>,\n  tier: <span class="ts-str">"READ_ONLY"</span>,\n  confidence: <span class="ts-str">0.94</span>\n};\n\n<span class="ts-fn">console</span>.<span class="ts-fn">log</span>(<span class="ts-fn">evaluateBoundary</span>(copayLookup) ? <span class="ts-str">"→ grounded answer"</span> : <span class="ts-str">"→ escalate"</span>);';

  var stackHtml = '<div class="stack-grid">' +
    '<div class="stack-quad"><div class="stack-quad__label">ai/ml</div><div class="stack-quad__chips"><span>LLMs/SLMs</span><span>multi-agent</span><span>RAG</span><span>eval frameworks</span><span>ML platforms</span></div></div>' +
    '<div class="stack-quad"><div class="stack-quad__label">infrastructure</div><div class="stack-quad__chips"><span>MLflow</span><span>Langfuse</span><span>Ray/Anyscale</span><span>Modal</span><span>vLLM</span><span>Bedrock</span><span>Kubernetes</span></div></div>' +
    '<div class="stack-quad"><div class="stack-quad__label">development</div><div class="stack-quad__chips"><span>Python</span><span>TypeScript</span><span>JavaScript</span><span>SQL</span><span>HTML/CSS</span><span>Cursor</span></div></div>' +
    '<div class="stack-quad"><div class="stack-quad__label">product</div><div class="stack-quad__chips"><span>Jira</span><span>Linear</span><span>Figma</span><span>Pendo</span><span>Amplitude</span><span>CSPO</span><span>EN/FR</span></div></div>' +
    '</div>';

  var fileTree = [
    { name: 'README.md', path: 'README.md', badge: null },
    { name: '01-thesis.md', path: '01-thesis.md', badge: '★' },
    { name: '02-mapping.md', path: '02-mapping.md', badge: '★' },
    { name: '03-demo.md', path: '03-demo.md', badge: '▶' },
    { name: '04-stack.md', path: '04-stack.md', badge: null },
    { name: 'cover-letter.md', path: 'cover-letter.md', badge: 'U' },
    { folder: 'toronto', open: true, children: [
      { name: 'the-6.md', path: 'toronto/the-6.md', badge: '🇨🇦' }
    ]},
    { folder: 'proof', open: true, children: [
      { name: 'ai-form-assistant.md', path: 'proof/ai-form-assistant.md' },
      { name: 'layla.md', path: 'proof/layla.md' },
      { name: 'alayaflow.md', path: 'proof/alayaflow.md' },
      { name: 'notable.md', path: 'proof/notable.md' },
      { name: 'visit-optimizer.md', path: 'proof/visit-optimizer.md' },
      { name: 'hana.md', path: 'proof/hana.md' }
    ]},
    { folder: 'resume', open: false, children: [
      { name: 'sarah-khalid.md', path: 'resume/sarah-khalid.md' }
    ]},
    { folder: 'build', open: false, children: [
      { name: 'member-agent-guardrails.ts', path: 'build/member-agent-guardrails.ts' }
    ]}
  ];

  var agentPrompts = [
    { label: 'Show the mapping', path: '02-mapping.md', reply: 'Sierra\'s example projects → products I\'ve shipped. Opening the centerpiece.' },
    { label: 'Run the demo', path: '03-demo.md', reply: 'Member-agent demo in the panel below — co-pay, PT sessions, injection guardrail.' },
    { label: 'Why Toronto?', path: 'toronto/the-6.md', reply: 'Sierra landed in The 6. I want to be the first Canada-based PM hire.' },
    { label: 'Layla proof', path: 'proof/layla.md', reply: '500K+ users, 28M+ monthly interactions, multi-agent boundaries — same questions Sierra\'s agents handle.' },
    { label: 'Trust & HIPAA', path: 'proof/notable.md', reply: 'PHI pipeline, self-hosted VPC, red-team suite — trust is the product.' }
  ];

  var terminalScript = [
    { type: 'dim', text: '▸ loading sierra healthcare example-projects.json' },
    { type: 'dim', text: '▸ matching against sarah_khalid.shipped_products' },
    { type: 'blank' },
    { type: 'step', text: '[01 · intake] conversational intake → AI Form Assistant ✓' },
    { type: 'line', text: 'HIPAA/PHIPA · 38-case red-team · hackathon → GA' },
    { type: 'blank' },
    { type: 'step', text: '[02 · benefits] co-pay / PT sessions → Layla ✓' },
    { type: 'line', text: '500K+ users · 28M+ monthly interactions · supervisor routing · read-only-first' },
    { type: 'blank' },
    { type: 'step', text: '[03 · provider] search + scheduling → Layla + Visit Optimizer ✓' },
    { type: 'line', text: 'ALNS routing · ~47% travel reduction · premium SKU' },
    { type: 'blank' },
    { type: 'step', text: '[04 · agentic] cost + revenue → AlayaFlow ✓' },
    { type: 'line', text: 'claims · emergency scheduling · ~2.5h saved/provider' },
    { type: 'blank' },
    { type: 'step', text: '[05 · trust] HIPAA + voice → red-team suite + Notable ✓' },
    { type: 'line', text: 'PHI purge/flag/clean · self-hosted VPC · 95% accuracy' },
    { type: 'blank' },
    { type: 'ok', text: '✓ 6/6 example projects mapped · roadmap already shipped · toronto-ready' }
  ];

  /* ── NatureLayer (adapted from remote) ── */
  var NatureLayer = (function () {
    var canvas, ctx, particles, rafId, reduced, overlayRoot, sproutRoot;
    var activeBursts = 0;
    var maxParticles = 70;
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
      var p = { x: x, y: y, type: type, life: 1, vx: (Math.random() - .5) * 1.0, vy: type === 'mote' ? -.3 - Math.random() * .4 : (Math.random() - .5) * .6 };
      if (type === 'mote') p.size = 1 + Math.random() * 2;
      if (type === 'leaf') { p.size = 3 + Math.random() * 3; p.rot = Math.random() * 360; }
      particles.push(p);
    }

    function updateParticles() {
      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= .007;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.globalAlpha = p.life * .6;
        if (p.type === 'leaf') {
          ctx.fillStyle = '#ff9ec8';
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx.restore();
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
        var alpha = (1 - w.age / 180) * .2;
        var y = w.originY + Math.sin((w.age + w.offset) * .04) * 6;
        ctx.strokeStyle = 'rgba(255, 110, 180, ' + alpha + ')';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (var x = 0; x < canvas.width; x += 4) {
          var wy = y + Math.sin((x + w.age * 2) * .02) * 10;
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

    function emitLeaves(n) {
      for (var i = 0; i < (n || 10); i++) {
        spawnParticle('leaf', Math.random() * window.innerWidth, -10 - Math.random() * 80);
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

    function setStatusGlyph(g) {
      var el = document.getElementById('status-nature');
      if (el) el.textContent = g;
    }

    function onFileOpen(path, evt) {
      var x = evt && evt.clientX ? evt.clientX : 120;
      var y = evt && evt.clientY ? evt.clientY : 200;
      spawnSprout(x, y);
      setStatusGlyph('🍂');

      if (path === 'README.md') { burst('rug', 4000); burst('sun', 3000); }
      else if (path === '01-thesis.md') { burst('sun', 3500); emitLeaves(12); setStatusGlyph('☀️'); }
      else if (path === '02-mapping.md') { burst('geometry', 4000); burst('beams', 2500); setStatusGlyph('◇'); }
      else if (path === '03-demo.md') { burst('crt', 3000); setStatusGlyph('▶'); }
      else if (path === 'toronto/the-6.md') { burst('trees', 4000); burst('nipa', 3000); butterfly(x, y); setStatusGlyph('🇨🇦'); }
      else if (path.indexOf('proof/') === 0) {
        if (path === 'proof/layla.md') { burst('orb', 4000); emitLeaves(8); }
        else if (path === 'proof/ai-form-assistant.md') { burst('soft', 3000); }
        else if (path === 'proof/notable.md') { burst('forest', 3500); }
        else burst('glow', 2500);
      }
      else if (path === 'cover-letter.md') { burst('sketch', 3000); }
      else if (path === 'build/member-agent-guardrails.ts') { burst('crt', 2800); setStatusGlyph('⌘'); }
      else if (path === 'resume/sarah-khalid.md') { burst('orb', 3000); }
    }

    function onAgentPrompt() { burst('beams', 2000); burst('chrome', 2500); setStatusGlyph('✦'); }
    function onTerminalRun() { emitWave(); burst('sun', 2000); setStatusGlyph('🌊'); }
    function onTerminalComplete() { burst('orb', 3000); spawnSprout(window.innerWidth - 80, window.innerHeight - 40, 'sapling'); setStatusGlyph('✓'); }
    function onDemoComplete() { burst('soft', 2500); emitLeaves(6); setStatusGlyph('🛡'); }

    return {
      init: init, onFileOpen: onFileOpen, onAgentPrompt: onAgentPrompt,
      onTerminalRun: onTerminalRun, onTerminalComplete: onTerminalComplete,
      onDemoComplete: onDemoComplete, lightbeam: lightbeam,
      hoverMote: function (x, y) { spawnParticle('mote', x, y); }
    };
  })();

  function renderMarkdown(text, path) {
    if (path === 'build/member-agent-guardrails.ts') {
      return '<pre class="md-code">' + tsStub + '</pre>';
    }
    text = text.replace('{{MAPPING}}', mappingHtml()).replace('{{STACK}}', stackHtml);

    if (path === '01-thesis.md') {
      var accent = '<div class="texture-accent"><img src="../assets/services/forest-rays-pink.png" alt="" loading="lazy"></div>';
      text = text.replace('→ open **02-mapping.md** next.', accent + '\n\n→ open **02-mapping.md** next.');
    }
    if (path === 'toronto/the-6.md') {
      text += '\n\n<div class="texture-accent"><img src="../assets/services/trees-sky.png" alt="" loading="lazy"></div>';
    }

    var lines = text.split('\n');
    var out = [];
    var inList = false;

    lines.forEach(function (line) {
      if (line.indexOf('{{') === 0) return;
      if (line.indexOf('`outcome ·`') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<div class="md-outcome">' + line.replace(/`/g, '') + '</div>');
      } else if (/^`[^`]+`(?: `[^`]+`)+$/.test(line)) {
        if (inList) { out.push('</ul>'); inList = false; }
        var chips = line.match(/`([^`]+)`/g).map(function (c) { return '<span class="md-chip">' + c.replace(/`/g, '') + '</span>'; }).join('');
        out.push('<div class="md-chips">' + chips + '</div>');
      } else if (/^`[^`]+`$/.test(line)) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<div class="pattern-card__tag">' + line.replace(/`/g, '') + '</div>');
      } else if (line.indexOf('# ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        if (path.indexOf('proof/') === 0 && out.length === 0) out.push('<div class="pattern-card">');
        out.push('<h1 class="md-h1">' + inline(line.slice(2)) + '</h1>');
      } else if (line.indexOf('## ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<h2 class="md-h2">' + inline(line.slice(3)) + '</h2>');
      } else if (line.indexOf('### ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<h3 class="md-h3">' + inline(line.slice(4)) + '</h3>');
      } else if (line.indexOf('> ') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        var cls = path.indexOf('proof/') === 0 ? ' pattern-card__thesis' : '';
        out.push('<blockquote class="md-quote' + cls + '">' + inline(line.slice(2)) + '</blockquote>');
      } else if (line.indexOf('---') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<hr class="md-hr">');
      } else if (line.indexOf('→ ') === 0 || line.indexOf('- ') === 0) {
        if (!inList) { out.push('<ul class="md-ul">'); inList = true; }
        var bullet = line.indexOf('→ ') === 0 ? line.slice(2) : line.slice(2);
        out.push('<li class="md-li">' + inline(bullet) + '</li>');
      } else if (line.trim() === '') {
        if (inList) { out.push('</ul>'); inList = false; }
      } else if (line.indexOf('<div') === 0) {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push(line);
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push('<p class="md-p">' + inline(line) + '</p>');
      }
    });
    if (inList) out.push('</ul>');
    if (path.indexOf('proof/') === 0) out.push('</div>');
    return out.join('');
  }

  function inline(s) {
    return s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
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
    NatureLayer.onFileOpen(path, evt);
    if (path === '03-demo.md') activateDemoPanel();
    if (window.innerWidth <= 1100) document.getElementById('sidebar').classList.remove('open');
  }

  function activateDemoPanel() {
    document.querySelectorAll('.panel-tab').forEach(function (t) { t.classList.remove('active'); });
    document.querySelectorAll('.panel-pane').forEach(function (p) { p.classList.remove('active'); });
    var tab = document.querySelector('.panel-tab[data-panel="member-agent"]');
    if (tab) tab.classList.add('active');
    var pane = document.getElementById('panel-member-agent');
    if (pane) pane.classList.add('active');
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

    addMsg('Healthcare agents customers trust. Click a prompt or explore the file tree.', 'bot');

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
          if (p.path === '03-demo.md') document.getElementById('demo-run').click();
          NatureLayer.onAgentPrompt();
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
      cmd.textContent = '$ sierra map --roadmap-to-shipped';
      cmd.style.opacity = '1';
      linesEl.appendChild(cmd);

      var i = 0;
      function next() {
        if (i >= terminalScript.length) {
          running = false;
          btn.disabled = false;
          cursor.classList.remove('hidden');
          NatureLayer.onTerminalComplete();
          return;
        }
        appendLine(terminalScript[i++]);
        setTimeout(next, lineDelay || 1);
      }
      setTimeout(next, lineDelay || 1);
    });
  }

  function initDemo() {
    if (typeof MemberAgentDemo === 'undefined') return;
    var demo = new MemberAgentDemo({
      chatEl: document.getElementById('demo-chat'),
      traceEl: document.getElementById('demo-trace'),
      scenarioBtns: Array.prototype.slice.call(document.querySelectorAll('.demo-scenario')),
      runBtn: document.getElementById('demo-run'),
      liveRegion: document.getElementById('demo-live')
    });
    demo.setOnComplete(function () { NatureLayer.onDemoComplete(); });
  }

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

  document.querySelectorAll('.panel-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.panel-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.panel-pane').forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('panel-' + tab.getAttribute('data-panel')).classList.add('active');
    });
  });

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

  NatureLayer.init({
    canvas: document.getElementById('nature-canvas'),
    overlayRoot: document.getElementById('nature-overlays'),
    sproutRoot: document.getElementById('nature-sprouts'),
    reducedMotion: reducedMotion
  });

  buildTree(fileTree, treeEl);
  openFile('02-mapping.md', null);
  initAgent();
  initTerminal();
  initDemo();
  resetIdle();

  document.addEventListener('mousemove', function (e) {
    if (e.target.closest('.tree-file, .tree-label') && Math.random() < .06) {
      NatureLayer.hoverMote(e.clientX, e.clientY);
    }
  });

})();
