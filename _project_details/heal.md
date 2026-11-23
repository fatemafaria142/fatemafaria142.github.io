---
layout: project
title: "HEAL: A Multi-Agent Framework with Disagreement-Gated Validation for Reliable Text-to-SQL on Clinical Patient Records"
date_range: "July 2026 to November 2026"
status: under_review
back_url: /publications
back_label: "Back to Publications"
venue: "Under review at Expert Systems with Applications"
venue_url: https://www.sciencedirect.com/journal/expert-systems-with-applications/issues
authors:
  - Fatema Tuj Johora Faria
  - Mukaffi Bin Moin
  - Md Mehedi Hasan Nipu
  - Khan Md Hasib
  - Md Rafiqul Islam
  - Asif Karim
  - Sami Azam
links:
  - label: "Code"
    icon: "fab fa-github"
    url: "https://github.com/fatemafaria142/HEAL"
---

<div class="row fact-row">
  <div class="col-6 col-lg-3 mb-3">
    <div class="fact-tile"><i class="fas fa-bullseye"></i><div class="fact-label">Task</div><div class="fact-value">Clinical Text-to-SQL</div></div>
  </div>
  <div class="col-6 col-lg-3 mb-3">
    <div class="fact-tile"><i class="fas fa-users-gear"></i><div class="fact-label">Approach</div><div class="keyword-wrap"><span class="keyword-pill">Multi-Agent Systems</span><span class="keyword-pill">Clinical Text-to-SQL</span><span class="keyword-pill">Hallucination Mitigation</span><span class="keyword-pill">Agent Disagreement Resolution</span></div></div>
  </div>
  <div class="col-6 col-lg-3 mb-3">
    <div class="fact-tile"><i class="fas fa-database"></i><div class="fact-label">Benchmark</div><div class="fact-value">SynClin-SQL, 500 questions</div></div>
  </div>
  <div class="col-6 col-lg-3 mb-3">
    <div class="fact-tile"><i class="fas fa-microchip"></i><div class="fact-label">Backbones</div><div class="fact-value">GPT-4o-mini, GPT-5 nano, GPT-5 mini</div></div>
  </div>
</div>

<div class="project-card project-accent-problem">
  <div class="section-eyebrow">01 &middot; Motivation</div>
  <div class="project-card-title"><i class="fas fa-circle-question"></i> The Problem</div>
  <p class="mb-0">A clinician asks a question in plain language, and a Text-to-SQL system returns a query that runs cleanly but selects the <strong>wrong patients</strong>. A term was mapped to the wrong column, or the wrong time window was assumed. Nothing crashes and nothing looks different, so the error goes unnoticed. Most systems only check the SQL <em>after</em> it is written, so a planning mistake survives all the way to a confident, wrong answer.</p>
  <div class="question-callout">
    <span class="callout-label">Example question</span>
    "Which patients currently on insulin have not had an HbA1c test in the last 90 days?"
  </div>
</div>

<div class="project-card project-accent-method">
  <div class="section-eyebrow">02 &middot; Approach</div>
  <div class="project-card-title"><i class="fas fa-diagram-project"></i> The Methodology</div>
  <p><strong>HEAL</strong> (Healthcare Execution-guided Multi-Agent for Logical queries) splits the task across agents that hand each other readable plans, and <strong>checks those plans before any SQL is written</strong>.</p>
  <div class="row">
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">1</div>
        <h6>Plan</h6>
        <p>Decide what is asked (or ask back), resolve vague and time-based words, and choose the join path.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">2</div>
        <h6>Validate</h6>
        <p>Check the plans against the live schema and against each other. Pass, re-plan once, or refuse.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">3</div>
        <h6>Write and repair</h6>
        <p>Only a validated plan reaches SQL synthesis, then an auditor and an execution-guided refiner.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">4</div>
        <h6>Explain</h6>
        <p>Explain the answer using only the rows that were actually returned.</p>
      </div>
    </div>
  </div>
  <div class="project-figure text-center">
    <img class="img-fluid js-lightbox-img" src="{{ '/assets/images/ongoing-research-diagrams/HEAL-Methodology.png' | relative_url }}" alt="HEAL methodology diagram">
  </div>
  <div class="figure-caption"><strong>Figure 1.</strong> The HEAL pipeline. Click to enlarge.</div>
</div>

<div class="project-card project-accent-results">
  <div class="section-eyebrow">03 &middot; Evaluation</div>
  <div class="project-card-title"><i class="fas fa-chart-column"></i> Results</div>
  <p class="small text-muted">Evaluated on <strong>SynClin-SQL</strong>, a benchmark of 500 clinician-style questions over a synthetic patient database. Exact Match, Execution Accuracy and Valid SQL are percentages. The human score is the mean of a four-point correctness rubric. Gains are over the strongest baseline, chain-of-thought.</p>

  <div class="row mb-1">
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+12.0</div><div class="stat-label">points on GPT-4o-mini</div></div></div>
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+10.0</div><div class="stat-label">points on GPT-5 nano</div></div></div>
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+8.6</div><div class="stat-label">points on GPT-5 mini</div></div></div>
  </div>
  <div class="small text-muted text-center mb-3">Execution accuracy gain over the best baseline</div>

  <div class="table-caption"><strong>Table 1.</strong> Main results on SynClin-SQL.</div>
  <div class="table-responsive">
    <table class="table table-sm text-center results-table mb-0">
      <thead>
        <tr>
          <th class="text-left">Backbone</th>
          <th class="text-left">Method</th>
          <th>Exact Match</th>
          <th>Execution Accuracy</th>
          <th>Valid SQL</th>
          <th>Human Score (1-4)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="text-left" rowspan="4">GPT-4o-mini</td><td class="text-left">Zero-shot</td><td>9.4</td><td>48.2</td><td>75.8</td><td>2.012</td></tr>
        <tr><td class="text-left">Few-shot</td><td>11.8</td><td>51.6</td><td>77.4</td><td>2.174</td></tr>
        <tr><td class="text-left">CoT</td><td>13.2</td><td>54.0</td><td>79.2</td><td>2.310</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td>13.6</td><td>66.0</td><td>87.0</td><td>2.580</td></tr>
        <tr><td class="text-left" rowspan="4">GPT-5 nano</td><td class="text-left">Zero-shot</td><td>12.2</td><td>52.8</td><td>78.2</td><td>2.138</td></tr>
        <tr><td class="text-left">Few-shot</td><td>15.2</td><td>57.4</td><td>80.2</td><td>2.334</td></tr>
        <tr><td class="text-left">CoT</td><td>17.0</td><td>59.2</td><td>82.0</td><td>2.442</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td>23.0</td><td>69.2</td><td>90.0</td><td>2.768</td></tr>
        <tr><td class="text-left" rowspan="4">GPT-5 mini</td><td class="text-left">Zero-shot</td><td>14.0</td><td>56.2</td><td>81.0</td><td>2.254</td></tr>
        <tr><td class="text-left">Few-shot</td><td>17.6</td><td>60.0</td><td>82.8</td><td>2.418</td></tr>
        <tr><td class="text-left">CoT</td><td>19.8</td><td>62.6</td><td>84.6</td><td>2.538</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td>29.0</td><td>71.2</td><td>92.6</td><td>2.808</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="project-card project-accent-conclusion">
  <div class="section-eyebrow">04 &middot; Takeaways</div>
  <div class="project-card-title"><i class="fas fa-flag-checkered"></i> Conclusion</div>
  <ul class="takeaway-list">
    <li>HEAL improves execution accuracy on all three backbones, and the gain holds across ambiguity, join-path, temporal, and nested questions.</li>
    <li>Catching errors in the plan, before SQL exists, is what makes the difference.</li>
    <li>The trade-off is cost: about 8 model calls per query instead of one.</li>
    <li>Results come from one synthetic dataset, so validation on real clinical records is the next step.</li>
  </ul>
</div>
