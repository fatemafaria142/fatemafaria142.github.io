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
    max-width: 800px;
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
  }

  .dataset-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .dataset-card.blue {
    border-left-color: #3b82f6;
  }

  .dataset-card.red {
    border-left-color: #ef4444;
  }

  .dataset-card.purple {
    border-left-color: #8b5cf6;
  }

  .dataset-card.green {
    border-left-color: #10b981;
  }

  .dataset-card.yellow {
    border-left-color: #f59e0b;
  }

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

  .dataset-card.blue li::before {
    color: #3b82f6;
  }

  .dataset-card.red li::before {
    color: #ef4444;
  }

  .dataset-card.purple li::before {
    color: #8b5cf6;
  }

  .dataset-card.green li::before {
    color: #10b981;
  }

  .dataset-card.yellow li::before {
    color: #f59e0b;
  }

  .dataset-link {
    display: inline-block;
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-family: 'Segoe UI', sans-serif;
    font-weight: 600;
    font-size: 0.9em;
    margin-top: 10px;
    transition: background 0.3s ease;
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

  .dataset-link:hover {
    filter: brightness(1.1);
    text-decoration: none;
  }

  .highlight-text {
    color: #c45d25;
    font-weight: 600;
  }

  .highlight-name {
    color: #6b21a8;
    font-weight: 600;
  }
</style>

<div class="dataset-container">
  <div class="dataset-card blue">
    <div class="dataset-title">Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Motamot</b> dataset (মতামত in Bengali, meaning "Opinion" in English) consists of 7,058 data points focused on political sentiment analysis in the Bengali language. Compiled from a range of online newspapers covering political events and conversations during Bangladeshi elections, it includes 4,132 positive and 2,926 negative sentiment-labeled instances. The data was sourced from reputable news outlets, ensuring a diverse and representative sample of political discourse in Bangladesh, providing valuable insights into the opinions shaping the country's political landscape.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy, and Mohammad Shafiul Alam<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/hdhnrrwdz2.1" style="color: #c45d25; text-decoration: none;">10.17632/hdhnrrwdz2.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Mumu, Rabeya Islam; Alam, Md Mahabubul; Alfy, Abrar Nawar; Alam, Mohammad Shafiul (2024), “Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis”, Mendeley Data, V1, doi: 10.17632/hdhnrrwdz2.1<br>
        <a href="https://data.mendeley.com/datasets/hdhnrrwdz2/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card red">
    <div class="dataset-title">BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>BanglaCalamityMMD</b> dataset is a comprehensive multimodal resource designed to address the significant gap in disaster identification within Bangla language text. Comprising a total of 7,903 instances spanning eight distinct categories: Landslides, Wildfire, Tropical Storm, Drought, Flood, Earthquake, Human Damage, and Non-Disaster—the dataset is meticulously divided into three subsets: 6,323 instances for training, 790 instances for testing, and 790 instances for validation. This structured division ensures that models can be trained effectively, tested rigorously, and validated accurately, thereby enhancing the overall reliability and applicability of disaster identification systems in Bangla.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, Firoz Mridha<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/7dggbjn5sd.1" style="color: #c45d25; text-decoration: none;">10.17632/7dggbjn5sd.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Rafa, Busra Kamal; Saha, Swarnajit; Rahman, Md. Mahfuzur; Hasib, Khan Md; Mridha, Firoz (2024), “BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language”, Mendeley Data, V1, doi: 10.17632/7dggbjn5sd.1<br>
        <a href="https://data.mendeley.com/datasets/7dggbjn5sd/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card purple">
    <div class="dataset-title">MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>MultiBanFakeDetect</b> dataset consists of a total of 9,600 text-image instances from online forums, news websites, and social media. Covering political, social, Technology, and entertainment themes, the dataset offers balanced real and fake instances. It includes a balanced set of real and fake news examples, with 7,680 instances for training, 960 for testing, and 960 for validation. The dataset covers different types of fake news—misinformation, rumors, and clickbait—as well as non-fake news, ensuring a comprehensive representation of various types of content. The dataset is also categorized into 12 topics, including entertainment, sports, politics, and more, with equal distribution across all categories for balanced evaluation.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Zayeed Hasan, Md Arafat Alam Khandaker, Khan Md Hasib, Firoz Mridha<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/k5pbz9795f.1" style="color: #c45d25; text-decoration: none;">10.17632/k5pbz9795f.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Hasan, Zayeed; Alam Khandaker, Md Arafat; Hasib, Khan Md (2024), “MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection”, Mendeley Data, V1, doi: 10.17632/k5pbz9795f.1<br>
        <a href="https://data.mendeley.com/datasets/k5pbz9795f/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card green">
    <div class="dataset-title">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Uddessho</b> dataset, meaning "Intent" in English, is designed for multimodal author intent classification. It contains 3048 post instances categorized into six intent types: Informative, Advocative, Promotive, Exhibitionist, Expressive, and Controversial. The dataset is divided into a training set with 2423 posts, a testing set with 313 posts, and a validation set with 312 posts, totaling 3048 posts.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Md Mahfuzur Rahman Mahim, Md Morshed Alam Lipson, Asif Iftekher Fahim, Md. Moinul Hoque<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/mzxmt8tfjs.1" style="color: #c45d25; text-decoration: none;">10.17632/mzxmt8tfjs.1</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Mahim, Md Mahfuzur Rahman; Alam Lipson, Md Morshed; Fahim, Asif Iftekher; Hoque, Md. Moinul (2024), “Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language”, Mendeley Data, V1, doi: 10.17632/mzxmt8tfjs.1<br>
        <a href="https://data.mendeley.com/datasets/mzxmt8tfjs/1" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dataset-card yellow">
    <div class="dataset-title">Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</div>
    <div class="dataset-content">
      <ul>
        <li>The <b>Vashantor</b> dataset comprises 32,500 sentences from five regions in Bangladesh (Chittagong, Noakhali, Sylhet, Barishal, and Mymensingh) across two language formats: Bangla and Banglish (a mix of Bangla and English written in the English alphabet). The name "Vashantor" (ভাষান্তর), meaning "Translation," reflects its focus on Bangla and translations involving the language. Data was curated from websites, social media, and discussion boards to capture natural, real-world dialogues. Each region and language having 2,500 samples distributed across training, testing, and validation sets. Additionally, the dataset includes a core set with 2,500 samples each for Bangla, Banglish, and English.<br>
        <span class="highlight-text">Contributors:</span> <span class="highlight-name">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Md. Rabius Sani, Mehidi Ahmmed, Tashreef Muhammad<br>
        <span class="highlight-text">DOI:</span> <a href="https://doi.org/10.17632/bj5jgk878b.2" style="color: #c45d25; text-decoration: none;">10.17632/bj5jgk878b.2</a><br>
        <span class="highlight-text">Cite dataset:</span> Faria, Fatema Tuj Johora; Bin Moin, Mukaffi; Al Wase, Ahmed; Sani, Md. Rabius; Ahmmed, Mehidi; Muhammad, Tashreef (2024), “Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language”, Mendeley Data, V2, doi: 10.17632/bj5jgk878b.2<br>
        <a href="https://data.mendeley.com/datasets/bj5jgk878b/2" class="dataset-link">See Dataset</a>
        </li>
      </ul>
    </div>
  </div>
</div>