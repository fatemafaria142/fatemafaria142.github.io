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
  <div class="col-6 col-lg-3 mb-2">
    <div class="fact-tile"><i class="fas fa-bullseye"></i><div class="fact-label">Task</div><div class="fact-value">Clinical Text-to-SQL</div></div>
  </div>
  <div class="col-6 col-lg-3 mb-2">
    <div class="fact-tile"><i class="fas fa-lightbulb"></i><div class="fact-label">What we do</div><div class="fact-value">Agents plan and cross-check clinical questions before writing any SQL.</div></div>
  </div>
  <div class="col-6 col-lg-3 mb-2">
    <div class="fact-tile"><i class="fas fa-database"></i><div class="fact-label">Evaluation set</div><div class="fact-value">SynClin-SQL, 500 questions</div></div>
  </div>
  <div class="col-6 col-lg-3 mb-2">
    <div class="fact-tile"><i class="fas fa-microchip"></i><div class="fact-label">Backbones tested</div><div class="fact-value">GPT-4o-mini, GPT-5 nano, GPT-5 mini</div></div>
  </div>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">01 &middot; The problem</div>
  <h5 class="project-card-title"><i class="fas fa-circle-question"></i> A query that runs is not a query that is right</h5>
  <p>Hospital staff keep patient data in relational databases, but most clinicians do not write SQL. A Text-to-SQL system lets them ask in plain language instead. The danger is a <strong>silent failure</strong>: the generated query runs without error and returns a tidy list of patients, but it is the <strong>wrong list</strong>. Nothing crashes, and nothing on screen tells the clinician it is wrong.</p>

  <div class="io-grid">
    <div class="io-box">
      <div class="io-label"><i class="fas fa-arrow-right-to-bracket"></i> Given</div>
      <ul>
        <li>a clinician's question</li>
        <li>the earlier turns of the conversation</li>
        <li>the patient-record database schema</li>
      </ul>
    </div>
    <div class="io-box">
      <div class="io-label"><i class="fas fa-arrow-right-from-bracket"></i> Return one of</div>
      <ul>
        <li>a single <strong>read-only SQL query</strong> whose result answers the question, or</li>
        <li>a <strong>clarifying question</strong>, when the request is too vague to answer safely</li>
      </ul>
    </div>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">01 &middot; Why it is hard</div>
  <h5 class="project-card-title"><i class="fas fa-list-check"></i> One short question, four hidden decisions</h5>
  <p>Here is a question a clinician might type:</p>
  <div class="chat">
    <div class="chat-row">
      <div class="avatar avatar-user"><i class="fas fa-user-doctor"></i></div>
      <div class="bubble bubble-user"><span class="bubble-who">Clinician</span>Which patients currently on insulin have not had an HbA1c test in the last 90 days?</div>
    </div>
  </div>

  <p class="mt-3 mb-2"><strong>One short sentence hides four separate decisions.</strong> A single model call must get all of them right at once:</p>
  <div class="decision-list">
    <div class="decision"><span class="decision-num">1</span><div><strong>"Currently on insulin"</strong> is a therapy status, not a name match. It means an insulin prescription that has started and has no end date yet (or one in the future). A plain name filter brings back patients who stopped the drug years ago.</div></div>
    <div class="decision"><span class="decision-num">2</span><div><strong>"Have not had a test in 90 days"</strong> is a negative. It needs a "no matching row exists" check on the lab date, not an ordinary filter.</div></div>
    <div class="decision"><span class="decision-num">3</span><div><strong>"Which patients"</strong> means one row per patient. Joining to prescriptions without care repeats anyone with several insulin orders.</div></div>
    <div class="decision"><span class="decision-num">4</span><div><strong>"HbA1c"</strong> must match the exact test name stored in the database, not the clinician's spelling.</div></div>
  </div>
  <p class="mt-3 mb-0">Most existing systems check only the finished SQL, by running it or by voting among attempts. Neither notices a <em>reasoning</em> mistake that still produces valid SQL. <strong>HEAL's goal is to catch that mistake before any SQL exists.</strong></p>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">02 &middot; Examples</div>
  <h5 class="project-card-title"><i class="fas fa-comments"></i> What the system is asked to do</h5>
  <p>The system has two possible outputs. It answers when it can, and it asks back when two readings of the question would give different results.</p>

  <div class="row">
    <div class="col-lg-6 mb-3">
      <div class="example-panel">
        <div class="example-tag example-tag-ok"><i class="fas fa-check"></i> Answer: a follow-up question</div>
        <div class="chat">
          <div class="chat-row"><div class="avatar avatar-user"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Which patients have diabetes?</div></div>
          <div class="chat-row"><div class="avatar avatar-sys"><i class="fas fa-robot"></i></div><div class="bubble bubble-sys">Here are the patients with a diabetes diagnosis.</div></div>
          <div class="chat-row"><div class="avatar avatar-user"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Only those over 60.</div></div>
          <div class="chat-row"><div class="avatar avatar-sys"><i class="fas fa-robot"></i></div><div class="bubble bubble-sys">The earlier turn supplies the cohort, so HEAL writes one read-only <code>SELECT</code> for diabetic patients over 60.</div></div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-3">
      <div class="example-panel">
        <div class="example-tag example-tag-ask"><i class="fas fa-question"></i> Ask back: the question is underspecified</div>
        <div class="chat">
          <div class="chat-row"><div class="avatar avatar-user"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Which patients live in the city?</div></div>
          <div class="chat-row"><div class="avatar avatar-sys"><i class="fas fa-robot"></i></div><div class="bubble bubble-sys">Which city do you mean? No SQL is written for this turn.</div></div>
        </div>
        <p class="example-note">Guessing a city would return a confident list for the wrong place. Asking once costs less than a wrong cohort.</p>
      </div>
    </div>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">02 &middot; Question types</div>
  <h5 class="project-card-title"><i class="fas fa-layer-group"></i> Four kinds of difficulty</h5>
  <p>Every question in the evaluation set is labeled with the reasoning that makes it hard, so results can be broken down by type.</p>
  <div class="row">
    <div class="col-md-6 mb-3">
      <div class="type-card type-a">
        <div class="type-head"><span class="type-badge">A</span> Ambiguity <span class="type-count">125 questions</span></div>
        <div class="chat-row"><div class="avatar avatar-user avatar-sm"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Find patients with dangerously high heart rate (tachycardia).</div></div>
        <p class="type-note">A vague word must become a concrete column and threshold.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="type-card type-j">
        <div class="type-head"><span class="type-badge">J</span> Join path <span class="type-count">125 questions</span></div>
        <div class="chat-row"><div class="avatar avatar-user avatar-sm"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Find patients from Sylhet who have hypertension and were prescribed amlodipine.</div></div>
        <p class="type-note">Three tables must be joined, and each patient must still appear once.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="type-card type-t">
        <div class="type-head"><span class="type-badge">T</span> Temporal <span class="type-count">125 questions</span></div>
        <div class="chat-row"><div class="avatar avatar-user avatar-sm"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Find patients whose most recent diagnosis was made more than 1 year ago.</div></div>
        <p class="type-note">"Most recent" and "more than a year ago" both need the right date anchor.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="type-card type-n">
        <div class="type-head"><span class="type-badge">N</span> Nested <span class="type-count">125 questions</span></div>
        <div class="chat-row"><div class="avatar avatar-user avatar-sm"><i class="fas fa-user-doctor"></i></div><div class="bubble bubble-user">Find patients whose HbA1c has improved (last value lower than the one before) but is still above 7.</div></div>
        <p class="type-note">Each patient's last two readings must be ranked before filtering.</p>
      </div>
    </div>
  </div>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">03 &middot; The method</div>
  <h5 class="project-card-title"><i class="fas fa-diagram-project"></i> How HEAL works, in plain terms</h5>
  <p><strong>HEAL</strong> (Healthcare Execution-guided Multi-Agent for Logical queries) works like a small team where every member has one job. Each agent hands the next a <strong>written plan in plain language</strong>, so a person can read what was assumed. A plan only becomes SQL after the team has checked it.</p>

  <div class="row">
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">1</div>
        <h6>Plan</h6>
        <p>Three agents read the question. One decides what is asked, or asks back. One turns vague words and time phrases into exact columns and dates. One decides the join path and what one output row is.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">2</div>
        <h6>Check the plans</h6>
        <p>A validator compares the three plans with the live database and with each other. It passes them, sends them back for one repair, or refuses.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">3</div>
        <h6>Write and repair</h6>
        <p>Only a validated plan reaches SQL writing. An auditor reviews the query, and a refiner fixes it if the database errors or returns nothing.</p>
      </div>
      <i class="fas fa-chevron-right pipeline-arrow"></i>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3 pipeline-col">
      <div class="step-card">
        <div class="step-num">4</div>
        <h6>Explain</h6>
        <p>The answer is explained in plain language, using only the rows that came back.</p>
      </div>
    </div>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">03 &middot; Worked example</div>
  <h5 class="project-card-title"><i class="fas fa-shoe-prints"></i> The insulin question, step by step</h5>
  <p>What each stage produces for the question from the problem section.</p>
  <div class="walk">
    <div class="walk-row"><span class="walk-chip">Intent</span><div>One row per patient. The test is dated by when it was measured. The question is clear enough, so no clarification is needed.</div></div>
    <div class="walk-row"><span class="walk-chip">Terms and dates</span><div>"Currently on insulin" becomes an insulin prescription with no end date or a future one. "Last 90 days" becomes the lab test date, counted back from today.</div></div>
    <div class="walk-row"><span class="walk-chip">Join and shape</span><div>Patients to prescriptions. "No HbA1c test" is a not-exists check on lab results, and an exists check keeps each patient to one row.</div></div>
    <div class="walk-row"><span class="walk-chip">Validation</span><div>Every table and column in the plan is confirmed to exist, and the three plans agree on grain and date column.</div></div>
    <div class="walk-row"><span class="walk-chip">SQL and answer</span><div>The query is written from the validated plan, audited, run, and the patient list is explained from the returned rows.</div></div>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">03 &middot; The validator</div>
  <h5 class="project-card-title"><i class="fas fa-shield-halved"></i> The validator: the part that makes HEAL different</h5>
  <p>Before SQL exists, the validator (CAV+) runs four checks in order. Each catches something the one before it cannot:</p>
  <div class="row">
    <div class="col-6 col-lg-3 mb-3"><div class="check-card"><i class="fas fa-table-list"></i><h6>Schema check</h6><p>Does every table and column the plans mention actually exist?</p></div></div>
    <div class="col-6 col-lg-3 mb-3"><div class="check-card"><i class="fas fa-code-compare"></i><h6>Disagreement score</h6><p>Do the three agents differ on grain, date column, clinical domain or tables?</p></div></div>
    <div class="col-6 col-lg-3 mb-3"><div class="check-card"><i class="fas fa-magnifying-glass"></i><h6>Independent re-read</h6><p>A separate agent rereads the original question against each plan.</p></div></div>
    <div class="col-6 col-lg-3 mb-3"><div class="check-card"><i class="fas fa-scale-balanced"></i><h6>Final audit</h6><p>A last model call weighs all the evidence and rules consistent or not.</p></div></div>
  </div>

  <div class="chat">
    <div class="chat-row">
      <div class="avatar avatar-sys"><i class="fas fa-robot"></i></div>
      <div class="bubble bubble-sys"><span class="bubble-who">Caught before SQL exists</span>The join planner wrote a path through a table called <code>medications</code>. That table is not in the schema, so the plan is rejected. The planners are re-run once with the hint "use <code>prescriptions</code>". If the plan still fails, HEAL asks the clinician instead of writing SQL it cannot stand behind.</div>
    </div>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">03 &middot; Full pipeline</div>
  <h5 class="project-card-title"><i class="fas fa-sitemap"></i> The whole pipeline in one picture</h5>
  <div class="project-figure text-center">
    <img class="img-fluid js-lightbox-img" src="{{ '/assets/images/ongoing-research-diagrams/HEAL-Methodology.png' | relative_url }}" alt="Diagram of the HEAL pipeline: planning and validation, SQL writing and checking, and answering the clinician">
  </div>
  <div class="figure-caption"><strong>Figure 1.</strong> The full pipeline, from a clinician's question to an explained answer. Planning and validation (top), SQL writing and repair (middle), and the response (bottom). Click to enlarge.</div>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">04 &middot; The evaluation set</div>
  <h5 class="project-card-title"><i class="fas fa-database"></i> SynClin-SQL</h5>
  <p>Real patient records cannot be shared, so we built an evaluation set on a <strong>synthetic</strong> patient database with no real patient information. Every question has a reference SQL query, and each query was written and checked by two annotators. The set is used only to test the system, never to train it.</p>
  <div class="row">
    <div class="col-12 col-md-4 mb-2"><div class="stat-tile"><div class="stat-value">500</div><div class="stat-label">questions, each with a reference (gold) SQL query</div></div></div>
    <div class="col-6 col-md-4 mb-2"><div class="stat-tile"><div class="stat-value">100 / 11</div><div class="stat-label">synthetic patients / database tables</div></div></div>
    <div class="col-6 col-md-4 mb-2"><div class="stat-tile"><div class="stat-value">0.861</div><div class="stat-label">annotator agreement (Cohen's &kappa;)</div></div></div>
  </div>
  <div class="split-panel">
    <div class="split-head">
      <div class="split-title"><i class="fas fa-chart-pie"></i> How the 500 questions are divided</div>
      <div class="split-sub">Each question is labeled with the one reasoning challenge that makes it hardest. The four types are perfectly balanced, so no single type can dominate the results.</div>
    </div>
    <div class="split-body">
      <div class="split-donut-wrap">
        <div class="split-donut" role="img" aria-label="500 questions split equally: 125 ambiguity, 125 join path, 125 temporal, 125 nested">
          <div class="split-hole"><div class="split-total">500</div><div class="split-total-label">questions</div></div>
        </div>
      </div>
      <div class="split-rows">
      <div class="split-row type-a">
        <span class="type-badge">A</span>
        <div class="split-text"><div class="split-name">Ambiguity</div><div class="split-desc">Informal words mapped to exact columns and stored values</div></div>
        <div class="split-figures"><span class="split-count">125</span><span class="split-share">25%</span></div>
        <div class="split-track"><span></span></div>
      </div>
      <div class="split-row type-j">
        <span class="type-badge">J</span>
        <div class="split-text"><div class="split-name">Join path</div><div class="split-desc">Several tables joined at the right grain, with no duplicated patients</div></div>
        <div class="split-figures"><span class="split-count">125</span><span class="split-share">25%</span></div>
        <div class="split-track"><span></span></div>
      </div>
      <div class="split-row type-t">
        <span class="type-badge">T</span>
        <div class="split-text"><div class="split-name">Temporal</div><div class="split-desc">Date windows, age from birth date, and active-therapy status</div></div>
        <div class="split-figures"><span class="split-count">125</span><span class="split-share">25%</span></div>
        <div class="split-track"><span></span></div>
      </div>
      <div class="split-row type-n">
        <span class="type-badge">N</span>
        <div class="split-text"><div class="split-name">Nested</div><div class="split-desc">A patient's latest or first reading, which needs a subquery</div></div>
        <div class="split-figures"><span class="split-count">125</span><span class="split-share">25%</span></div>
        <div class="split-track"><span></span></div>
      </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">05 &middot; Evaluation</div>
  <h5 class="project-card-title"><i class="fas fa-chart-column"></i> Results</h5>
  <p class="small text-muted">HEAL is compared with zero-shot, few-shot and chain-of-thought prompting (CoT) on three backbones. Exact Match, Execution Accuracy and Valid SQL are percentages. The human score is the mean of a four-point correctness rubric. Gains are measured against the strongest baseline, CoT.</p>

  <div class="row mb-1">
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+12.0</div><div class="stat-label">points on GPT-4o-mini</div></div></div>
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+10.0</div><div class="stat-label">points on GPT-5 nano</div></div></div>
    <div class="col-4"><div class="stat-tile"><div class="stat-value">+8.6</div><div class="stat-label">points on GPT-5 mini</div></div></div>
  </div>
  <div class="small text-muted text-center mb-3">Execution accuracy gain over chain-of-thought. On GPT-5 mini the gain is statistically significant (p = 0.011).</div>

  <div class="table-caption"><strong>Table 1.</strong> Main results on SynClin-SQL. The best value in each column for each backbone is in bold.</div>
  <div class="table-responsive results-wrap">
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
        <tr class="group-start"><td class="text-left group-name" rowspan="4">GPT-4o-mini</td><td class="text-left">Zero-shot</td><td>9.4</td><td>48.2</td><td>75.8</td><td>2.012</td></tr>
        <tr><td class="text-left">Few-shot</td><td>11.8</td><td>51.6</td><td>77.4</td><td>2.174</td></tr>
        <tr><td class="text-left">CoT</td><td>13.2</td><td>54.0</td><td>79.2</td><td>2.310</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td><strong>13.6</strong></td><td><strong>66.0</strong> <span class="gain">+12.0</span></td><td><strong>87.0</strong></td><td><strong>2.580</strong></td></tr>
        <tr class="group-start"><td class="text-left group-name" rowspan="4">GPT-5 nano</td><td class="text-left">Zero-shot</td><td>12.2</td><td>52.8</td><td>78.2</td><td>2.138</td></tr>
        <tr><td class="text-left">Few-shot</td><td>15.2</td><td>57.4</td><td>80.2</td><td>2.334</td></tr>
        <tr><td class="text-left">CoT</td><td>17.0</td><td>59.2</td><td>82.0</td><td>2.442</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td><strong>23.0</strong></td><td><strong>69.2</strong> <span class="gain">+10.0</span></td><td><strong>90.0</strong></td><td><strong>2.768</strong></td></tr>
        <tr class="group-start"><td class="text-left group-name" rowspan="4">GPT-5 mini</td><td class="text-left">Zero-shot</td><td>14.0</td><td>56.2</td><td>81.0</td><td>2.254</td></tr>
        <tr><td class="text-left">Few-shot</td><td>17.6</td><td>60.0</td><td>82.8</td><td>2.418</td></tr>
        <tr><td class="text-left">CoT</td><td>19.8</td><td>62.6</td><td>84.6</td><td>2.538</td></tr>
        <tr class="row-heal"><td class="text-left">HEAL</td><td><strong>29.0</strong></td><td><strong>71.2</strong> <span class="gain">+8.6</span></td><td><strong>92.6</strong></td><td><strong>2.808</strong></td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">05 &middot; Ablation</div>
  <h5 class="project-card-title"><i class="fas fa-puzzle-piece"></i> Is every agent needed? Remove one at a time</h5>
  <p class="small text-muted mb-2">Execution accuracy on GPT-5 mini (%). Each row removes a single component from the full system.</p>
  <div class="bar-list">
    <div class="bar-row"><div class="bar-name">Chain-of-thought baseline</div><div class="bar-track"><div class="bar-fill bar-base" style="width: 62.6%"></div></div><div class="bar-val">62.6</div></div>
    <div class="bar-row"><div class="bar-name">without CIP (intent and clarification)</div><div class="bar-track"><div class="bar-fill" style="width: 58.0%"></div></div><div class="bar-val">58.0</div></div>
    <div class="bar-row"><div class="bar-name">without HEAL-AT (terms and dates)</div><div class="bar-track"><div class="bar-fill" style="width: 59.6%"></div></div><div class="bar-val">59.6</div></div>
    <div class="bar-row"><div class="bar-name">without HEAL-NJ (joins and grain)</div><div class="bar-track"><div class="bar-fill" style="width: 61.4%"></div></div><div class="bar-val">61.4</div></div>
    <div class="bar-row"><div class="bar-name">without CAV+ (validator)</div><div class="bar-track"><div class="bar-fill" style="width: 63.2%"></div></div><div class="bar-val">63.2</div></div>
    <div class="bar-row"><div class="bar-name">without EGR (execution repair)</div><div class="bar-track"><div class="bar-fill" style="width: 64.2%"></div></div><div class="bar-val">64.2</div></div>
    <div class="bar-row bar-row-heal"><div class="bar-name">Full HEAL</div><div class="bar-track"><div class="bar-fill bar-heal" style="width: 71.2%"></div></div><div class="bar-val">71.2</div></div>
  </div>
  <p class="small text-muted mt-2 mb-0">Removing any one component lowers accuracy. Removing the clarification planner hurts most: that variant falls below the chain-of-thought baseline.</p>
</div>

<div class="project-card reveal-on-scroll">
  <div class="section-eyebrow">06 &middot; Takeaways</div>
  <h5 class="project-card-title"><i class="fas fa-flag-checkered"></i> Conclusion</h5>
  <div class="row">
    <div class="col-md-6 mb-3">
      <div class="takeaway-card">
        <div class="takeaway-icon"><i class="fas fa-magnifying-glass-chart"></i></div>
        <h6>What we found</h6>
        <p>Checking the plan before any SQL is written makes clinical question answering more accurate. The improvement appeared on every model we tested and across every type of question, from vague wording to dates, joins and nested logic.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="takeaway-card">
        <div class="takeaway-icon"><i class="fas fa-shield-halved"></i></div>
        <h6>What we solved</h6>
        <p>A query can run cleanly and still return the wrong patients, and nobody notices. HEAL catches that kind of mistake at the planning stage, before it can turn into a confident but wrong answer.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="takeaway-card">
        <div class="takeaway-icon"><i class="fas fa-puzzle-piece"></i></div>
        <h6>Every part earns its place</h6>
        <p>Taking out any single agent made results worse. The agent that decides whether to ask the clinician a question first mattered most, which shows that knowing when to ask back is as important as writing good SQL.</p>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="takeaway-card">
        <div class="takeaway-icon"><i class="fas fa-triangle-exclamation"></i></div>
        <h6>What is still open</h6>
        <p>The results come from a synthetic database, so the next step is testing HEAL on real clinical records and in real hospital workflows.</p>
      </div>
    </div>
  </div>
</div>
