(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lineDelay = reducedMotion ? 0 : 220;

  var nodeData = {
    intake: {
      file: 'intake-brief.txt',
      notes: 'Structure ambiguity before anyone over-commits.\n\n→ Parse stakeholder brief into hard scope boundaries\n→ Map decision-makers, blockers, and compliance gates\n→ Separate "board wants a demo" from "we need GA"\n→ Output: discovery brief · stakeholder map · no over-promise'
    },
    skills: {
      file: 'skills-library.txt',
      notes: 'Gherkin/EARS specs that survive agent handoffs.\n\n→ Five-template system: scope · deps · sequence · draft · cut\n→ AGENTS file + PKB in GitHub — versioned like code\n→ Skills are composable: triage chains into scope-parser\n→ Every handoff has an artifact, not a Slack thread'
    },
    agents: {
      file: 'coordination-layer.txt',
      notes: 'Draft updates, summarize, unblock eng/design.\n\n→ Meeting summaries → structured action items\n→ Stakeholder drafts from triage output\n→ Coordination layer between PM, eng, design, compliance\n→ Agents handle repetition; humans own judgment calls'
    },
    feedback: {
      file: 'eval-gates.txt',
      notes: 'Eval gates before autonomy.\n\n→ 200+ query eval suite on Layla before write access\n→ Three-tier action boundaries: read / soft write / hard write\n→ Graduated trust: manual → HITL → autonomous\n→ Metric-driven demotion when drift shows up in prod'
    },
    ship: {
      file: 'phased-rollout.txt',
      notes: 'Phased rollout · what graduates vs stays custom.\n\n→ 50+ feature flags across AI portfolio\n→ Weekly triage: what ships, what waits, what cuts\n→ P0 read-only first — same pattern as Form Assistant demo\n→ Clear v1 scope: slow and correct beats fast and unreviewed'
    },
    learnings: {
      file: 'rnd-foldback.txt',
      notes: 'Fold back to R&D — Zero\'s 50/50.\n\n→ Retro specs after every engagement\n→ Reusable workflow PRs, not one-off client magic\n→ $3.1M grants → POC → internal prototype → shipped product\n→ Client work compounds into studio R&D and back'
    }
  };

  var osWrap = document.getElementById('os-diagram-wrap');
  var notesEl = document.getElementById('os-notes');
  var notesFile = document.getElementById('os-notes-filename');
  var notesBody = document.getElementById('os-notes-body');
  var nodes = document.querySelectorAll('.os-node-btn');
  var activeNode = null;
  var hideTimer = null;

  function cancelHide() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function scheduleHide() {
    cancelHide();
    hideTimer = setTimeout(hideNotes, 60);
  }

  function showNode(key) {
    cancelHide();
    var d = nodeData[key];
    if (!d || !notesEl) return;
    activeNode = key;
    nodes.forEach(function (n) {
      n.classList.toggle('active', n.getAttribute('data-node') === key);
    });
    if (notesFile) notesFile.textContent = d.file;
    if (notesBody) notesBody.textContent = d.notes;
    if (osWrap) osWrap.classList.add('notes-open');
    notesEl.setAttribute('aria-hidden', 'false');
  }

  function hideNotes() {
    cancelHide();
    activeNode = null;
    if (osWrap) osWrap.classList.remove('notes-open');
    if (notesEl) notesEl.setAttribute('aria-hidden', 'true');
    nodes.forEach(function (n) { n.classList.remove('active'); });
  }

  function staysInNotesArea(target) {
    if (!target || !osWrap) return false;
    return osWrap.contains(target) && (
      target.closest('.os-node-btn') || target.closest('.os-notes')
    );
  }

  nodes.forEach(function (node) {
    var key = node.getAttribute('data-node');
    node.addEventListener('mouseenter', function () { showNode(key); });
    node.addEventListener('mouseleave', function (e) {
      if (!staysInNotesArea(e.relatedTarget)) scheduleHide();
    });
    node.addEventListener('focus', function () { showNode(key); });
    node.addEventListener('click', function () { showNode(key); });
  });

  if (notesEl) {
    notesEl.addEventListener('mouseleave', function (e) {
      if (!staysInNotesArea(e.relatedTarget)) scheduleHide();
    });
  }

  if (osWrap) {
    osWrap.addEventListener('mouseover', function (e) {
      if (activeNode && !staysInNotesArea(e.target)) scheduleHide();
    });
    osWrap.addEventListener('mouseleave', function (e) {
      if (!osWrap.contains(e.relatedTarget)) hideNotes();
    });
    osWrap.addEventListener('focusout', function (e) {
      if (!osWrap.contains(e.relatedTarget)) hideNotes();
    });
  }

  /* ── terminal triage stream ── */
  var triageScript = [
    { type: 'dim', text: '▸ reading briefs/incoming.txt' },
    { type: 'brief', text: '"AI to help coordinators document visits — ASAP, mobile? Board wants a prototype next month. HIPAA can\'t be an afterthought."' },
    { type: 'dim', text: '▸ loading skills: scope-parser · dep-mapper · phase-sequencer · stakeholder-draft · scope-cutter' },
    { type: 'blank' },
    { type: 'step', text: '[01 · parse] scope locked — not EHR' },
    { type: 'line', text: 'mobile doc assistant for home-health coordinators' },
    { type: 'line', text: 'pattern: accountable autofill — dictation → schema map → clinician review' },
    { type: 'line', text: 'board prototype in 4 wks · HIPAA/PHIPA gates before GA' },
    { type: 'blank' },
    { type: 'step', text: '[02 · deps] blockers flagged' },
    { type: 'line', text: 'design → AI-tagged fields + override UI (trust surface, not model)' },
    { type: 'line', text: 'eng → mobile capture + LLM field mapping + audit trail' },
    { type: 'line', text: 'compliance → PHI review before autofill graduates to prod' },
    { type: 'line', text: 'eval → academic partnership · synthetic cases before real PHI' },
    { type: 'blank' },
    { type: 'step', text: '[03 · sequence] phased ship plan' },
    { type: 'line', text: 'P0 prototype + 50-case eval suite (2 wk) — read-only first, like Layla' },
    { type: 'line', text: 'P1 dictation preview + visible uncertainty tags (4 wk)' },
    { type: 'line', text: 'P2 accountable autofill + demotion on drift (6 wk) — AlayaFlow pattern' },
    { type: 'line', text: 'P3 GA + feature flags · graduated trust' },
    { type: 'blank' },
    { type: 'step', text: '[04 · update] stakeholder draft' },
    { type: 'draft', text: 'scope: mobile doc assistant for coordinators' },
    { type: 'draft', text: 'parallel: design system + compliance review' },
    { type: 'draft', text: 'pattern: AI tags every inferred field — slow and correct > fast and unreviewed' },
    { type: 'draft', text: 'target: 50–80% documentation time reduction' },
    { type: 'blank' },
    { type: 'step', text: '[05 · cut] deferred — protect v1' },
    { type: 'cut', text: 'offline mode → v2' },
    { type: 'cut', text: 'multi-language → v2' },
    { type: 'cut', text: '"full automation" → accountable autofill only' },
    { type: 'cut', text: 'admin analytics dash → post-GA' },
    { type: 'blank' },
    { type: 'ok', text: '✓ triage complete — 5 steps · stakeholder draft ready · run again to replay' }
  ];

  var triageLines = document.getElementById('triage-lines');
  var triageTerminal = document.getElementById('triage-terminal');
  var triageBtn = document.getElementById('triage-run');
  var triageCursor = document.getElementById('triage-cursor');
  var triageRunning = false;

  function appendLine(entry) {
    if (!triageLines) return;
    var el = document.createElement('div');
    if (entry.type === 'blank') {
      el.className = 'term-line term-line--blank';
    } else {
      el.className = 'term-line term-line--' + entry.type;
      el.textContent = entry.text;
    }
    triageLines.appendChild(el);
    if (triageTerminal) triageTerminal.scrollTop = triageTerminal.scrollHeight;
  }

  function appendCmdLine() {
    if (!triageLines) return;
    var el = document.createElement('div');
    el.className = 'term-line term-line--cmd';
    el.innerHTML = '<span class="term-path">~/zero</span><span class="term-branch">main*</span><span class="term-chevron">❯</span> zero triage --brief incoming.txt';
    triageLines.appendChild(el);
    if (triageTerminal) triageTerminal.scrollTop = triageTerminal.scrollHeight;
  }

  function clearLines() {
    if (triageLines) triageLines.innerHTML = '';
  }

  function runTriage() {
    if (triageRunning) return;
    triageRunning = true;
    if (triageBtn) {
      triageBtn.disabled = true;
      triageBtn.textContent = 'running…';
    }
    if (triageCursor) triageCursor.classList.add('hidden');

    clearLines();
    appendCmdLine();

    var i = 0;
    function next() {
      if (i >= triageScript.length) {
        triageRunning = false;
        if (triageBtn) {
          triageBtn.disabled = false;
          triageBtn.textContent = 'zero triage --brief incoming.txt';
        }
        if (triageCursor) triageCursor.classList.remove('hidden');
        return;
      }
      appendLine(triageScript[i]);
      i++;
      setTimeout(next, lineDelay || 1);
    }
    setTimeout(next, lineDelay || 1);
  }

  if (triageBtn) triageBtn.addEventListener('click', runTriage);
})();
