---
layout: archive
title: ""
permalink: /datasets/
author_profile: true
---

<style>
  .dataset-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
  }

  .dataset-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 6px solid;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .dataset-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }

  .dataset-card.blue { border-left-color: #3b82f6; }
  .dataset-card.red { border-left-color: #ef4444; }
  .dataset-card.purple { border-left-color: #8b5cf6; }
  .dataset-card.green { border-left-color: #10b981; }
  .dataset-card.yellow { border-left-color: #f59e0b; }

  .dataset-title {
    font-family: 'Segoe UI', sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .dataset-content {
    font-family: 'Segoe UI', sans-serif;
    color: #374151;
    font-size: 0.95em;
    line-height: 1.6;
  }

  .dataset-content b {
    color: #389eda;
    font-weight: 600;
  }

  .dataset-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dataset-content li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
  }

  .dataset-content li::before {
    content: '■';
    position: absolute;
    left: 0;
    font-size: 0.9em;
  }

  .dataset-card.blue li::before { color: #3b82f6; }
  .dataset-card.red li::before { color: #ef4444; }
  .dataset-card.purple li::before { color: #8b5cf6; }
  .dataset-card.green li::before { color: #10b981; }
  .dataset-card.yellow li::before { color: #f59e0b; }

  .dataset-link {
    display: inline-block;
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none !important;
    font-family: 'Segoe UI', sans-serif;
    font-weight: 600;
    font-size: 0.9em;
    margin-top: 10px;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .dataset-card.red .dataset-link {
    background: linear-gradient(to right, #ef4444, #f87171);
  }

  .dataset-card.purple .dataset-link {
    background: linear-gradient(to right, #8b5cf6, #a78bfa);
  }

  .dataset-card.green .dataset-link {
    background: linear-gradient(to right, #10b981, #34d399);
  }

  .dataset-card.yellow .dataset-link {
    background: linear-gradient(to right, #f59e0b, #fb923c);
  }

  .dataset-link:hover,
  .dataset-link:focus,
  .dataset-link:active {
    text-decoration: none !important;
  }

  .dataset-link:hover {
    filter: brightness(1.1);
  }

  .dataset-link:active {
    transform: scale(0.98);
    filter: brightness(1.05);
  }

  .highlight-text {
    color: #c45d25;
    font-weight: 600;
  }

  .highlight-name {
    color: #6b21a8;
    font-weight: 600;
  }

  .doi-link {
    color: #3b82f6;
    text-decoration: none;
  }

  .doi-link:hover {
    text-decoration: underline;
  }
</style>

<div class="dataset-container">
  <div class="dataset-card blue">
    <div class="dataset-title">Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Motamot</b> dataset (মতামত in Bengali, meaning "Opinion" in English) consists of 7,058 data points focused on political sentiment analysis in the Bengali language. Compiled from a range of online newspapers covering political events and conversations during Bangladeshi elections, it includes 4,132 positive and 2,926 negative sentiment-labeled instances. The data was sourced from reputable news outlets, ensuring a diverse and representative sample of political discourse in Bangladesh.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy, and Mohammad Shafiul Alam<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/hdhnrrwdz2.1" class="doi-link">10.17632/hdhnrrwdz2.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Mumu, Rabeya Islam; Alam, Md Mahabubul; Alfy, Abrar Nawar; Alam, Mohammad Shafiul (2024), “<b>Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</b>”, Mendeley Data, V1, doi: 10.17632/hdhnrrwdz2.1<br>
        <a href="https://data.mendeley.com/datasets/hdhnrrwdz2/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card red">
    <div class="dataset-title">BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>BanglaCalamityMMD</b> dataset is a comprehensive multimodal resource designed to address the significant gap in disaster identification within Bangla language text. Comprising a total of 7,903 instances spanning eight distinct categories: Landslides, Wildfire, Tropical Storm, Drought, Flood, Earthquake, Human Damage, and Non-Disaster—the dataset is meticulously divided into three subsets: 6,323 instances for training, 790 instances for testing, and 790 instances for validation.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, Firoz Mridha<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/7dggbjn5sd.1" class="doi-link">10.17632/7dggbjn5sd.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Rafa, Busra Kamal; Saha, Swarnajit; Rahman, Md. Mahfuzur; Hasib, Khan Md; Mridha, Firoz (2024), “<b>BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</b>”, Mendeley Data, V1, doi: 10.17632/7dggbjn5sd.1<br>
        <a href="https://data.mendeley.com/datasets/7dggbjn5sd/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card purple">
    <div class="dataset-title">MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>MultiBanFakeDetect</b> dataset consists of a total of 9,600 text-image instances from online forums, news websites, and social media. Covering political, social, technology, and entertainment themes, the dataset offers balanced real and fake instances. It includes 7,680 for training, 960 for testing, and 960 for validation. The dataset covers various fake news types—misinformation, rumors, and clickbait—as well as authentic news, ensuring broad representational diversity.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Zayeed Hasan, Md Arafat Alam Khandaker, Khan Md Hasib, Firoz Mridha<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/k5pbz9795f.1" class="doi-link">10.17632/k5pbz9795f.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Hasan, Zayeed; Alam Khandaker, Md Arafat; Hasib, Khan Md (2024), “<b>MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection</b>”, Mendeley Data, V1, doi: 10.17632/k5pbz9795f.1<br>
        <a href="https://data.mendeley.com/datasets/k5pbz9795f/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card green">
    <div class="dataset-title">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Uddessho</b> dataset, meaning "Intent" in English, is designed for multimodal author intent classification. It contains 3,048 post instances categorized into six intent types: Informative, Advocative, Promotive, Exhibitionist, Expressive, and Controversial. The dataset is split into training (2,423), testing (313), and validation (312).<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Md Mahfuzur Rahman Mahim, Md Morshed Alam Lipson, Asif Iftekher Fahim, Md. Moinul Hoque<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/mzxmt8tfjs.1" class="doi-link">10.17632/mzxmt8tfjs.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Mahim, Md Mahfuzur Rahman; Alam Lipson, Md Morshed; Fahim, Asif Iftekher; Hoque, Md. Moinul (2024), “<b>Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</b>”, Mendeley Data, V1, doi: 10.17632/mzxmt8tfjs.1<br>
        <a href="https://data.mendeley.com/datasets/mzxmt8tfjs/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card yellow">
    <div class="dataset-title">Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Vashantor</b> dataset comprises 32,500 sentences from five regions in Bangladesh (Chittagong, Noakhali, Sylhet, Barishal, and Mymensingh) across two formats: Bangla and Banglish. Data was collected from online forums and curated across three splits: training, testing, and validation. It also includes core samples for Bangla, Banglish, and English to support multilingual translation tasks.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Md. Rabius Sani, Mehidi Ahmmed, Tashreef Muhammad<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/bj5jgk878b.2" class="doi-link">10.17632/bj5jgk878b.2</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Al Wase, Ahmed; Sani, Md. Rabius; Ahmmed, Mehidi; Muhammad, Tashreef (2024), “<b>Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</b>”, Mendeley Data, V2, doi: 10.17632/bj5jgk878b.2<br>
        <a href="https://data.mendeley.com/datasets/bj5jgk878b/2" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>
</div>
