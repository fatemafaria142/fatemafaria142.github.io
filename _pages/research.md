
---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<p style="text-align:justify; color:black; font-family:Georgia">
My research focuses on advancing the fields of Large Language Models, LLM Agents, Natural Language Processing, Vision-Language Models, Large Vision Models, Multimodal AI, Trustworthy AI, Computer Vision, Medical Imaging Analysis, and Explainable AI. I am deeply engaged in exploring their theoretical foundations as well as practical applications across diverse domains. Below are some of the research areas I have worked on or am currently investigating.
</p>

## 1. Sentiment Analysis and Hate Speech Detection in Social Media
<p style="text-align:justify; color:black; font-family:Georgia">
Sentiment analysis is a way to find and categorize feelings expressed in text, especially in social media and reviews. It determines whether the emotional tone is positive, negative, or neutral. Hate speech detection, however, focuses on finding and classifying language that promotes violence or discrimination against people based on race, religion, gender, or sexual orientation. Both tasks are very important in today’s digital world, where online communication can greatly impact society. Large Language Models (LLMs) like Gemini 1.5 Pro and GPT-3.5 Turbo have changed the game in natural language processing (NLP). They use large amounts of text data and advanced techniques to understand and create human-like text. This helps them capture the nuances of language and context. Traditional machine learning methods often require a lot of manual work to extract features, which can be slow and may overlook important details. In contrast, LLMs automatically learn features from raw text, reducing the need for special knowledge. They are also very good at understanding the context of words, leading to better sentiment analysis and hate speech detection. This ability to understand context is especially important for low-resource languages like Bangla, where traditional methods may struggle due to limited data.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #1e3a8a; font-size: 1.1em; font-weight: bold;">Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #3b82f6; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span><b>*</b>, Mukaffi Bin Moin<b>*</b>, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy, and Mohammad Shafiul Alam <br/>
        <b>Conference:</b> <em>The IEEE Region 10 Symposium (TENSYMP 2024)</em> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Motamot2024_abstract').style.display = document.getElementById('Motamot2024_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://ieeexplore.ieee.org/document/10752197/" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Motamot2024_bib').style.display = document.getElementById('Motamot2024_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Motamot2024_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@INPROCEEDINGS{10752197,
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Mumu, Rabeya Islam and Abir, Md Mahabubul Alam and Alfy, Abrar Nawar and Alam, Mohammad Shafiul},
  booktitle={2024 IEEE Region 10 Symposium (TENSYMP)},
  title={Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis},
  year={2024},
  pages={1-6},
  doi={10.1109/TENSYMP55864.2024.10752197}
}
      </pre>
    </div>
    <div id="Motamot2024_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Sentiment analysis in low-resource languages like Bengali poses significant challenges due to limited datasets and complex linguistic structures. This study introduces Motamot, a comprehensive dataset for Bengali political sentiment analysis, comprising 10,000 annotated social media posts. We compare the performance of Large Language Models (LLMs) such as Gemini 1.5 Pro and GPT-3.5 Turbo against Transformer-based models like BanglaBERT and mBERT. Our experiments demonstrate that LLMs achieve superior performance, with GPT-3.5 Turbo reaching an accuracy of 90.12% in few-shot settings, outperforming BanglaBERT by 5.67%. The dataset's diversity and the LLMs' contextual understanding highlight their dominance in capturing nuanced political sentiments, offering insights for improving NLP applications in low-resource settings.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7f1d1d; font-size: 1.1em; font-weight: bold;">Investigating the Predominance of Large Language Models in Low-Resource Bangla Language Over Transformer Models for Hate Speech Detection: A Comparative Analysis</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #ef4444; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Laith H. Baniata, and Sangwoo Kang <br/>
        <b>Journal:</b> <em>MDPI Mathematics</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q1</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('HateSpeech2024_abstract').style.display = document.getElementById('HateSpeech2024_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://www.mdpi.com/2227-7390/12/23/3687" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('HateSpeech2024_bib').style.display = document.getElementById('HateSpeech2024_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="HateSpeech2024_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@article{faria2024investigating,
  title={Investigating the Predominance of Large Language Models in Low-Resource Bangla Language Over Transformer Models for Hate Speech Detection: A Comparative Analysis},
  author={Faria, Fatema Tuj Johora and Baniata, Laith H. and Kang, Sangwoo},
  journal={Mathematics},
  volume={12},
  number={23},
  pages={3687},
  year={2024},
  publisher={MDPI},
  doi={10.3390/math12233687}
}
      </pre>
    </div>
    <div id="HateSpeech2024_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Hate speech detection in low-resource languages like Bangla is challenging due to limited annotated datasets and linguistic complexity. This study compares Large Language Models (LLMs) such as GPT-3.5 Turbo and Gemini 1.5 Pro with Transformer-based models like BanglaBERT for hate speech detection in Bangla social media texts. Using a dataset of 8,000 annotated posts, we find that LLMs achieve a higher F1-score of 88.45% compared to BanglaBERT’s 82.13% in few-shot settings. The superior contextual understanding of LLMs enables better detection of subtle hate speech cues, particularly in code-mixed texts. This work underscores the potential of LLMs to enhance hate speech moderation in low-resource settings.
      </p>
    </div>
  </div>
</div>

## 2. Multimodal AI
<p style="text-align:justify; color:black; font-family:Georgia">
Multimodal deep learning is a method that improves understanding by combining images and text. This approach uses three main techniques: early fusion, late fusion, and intermediate fusion. In early fusion, raw images and text are combined into a single input before the model processes them. This allows the model to learn a shared representation, but it can also make it sensitive to noise from either the images or the text. Late fusion works differently. Here, images and text are processed separately using different models. The results are combined later on. This method is flexible and allows each model to be optimized independently, but it might miss important connections between the two modalities that could improve performance. Intermediate fusion is a middle ground. It combines features from images and text at different stages of processing. This way, it keeps the unique qualities of each type of data while also sharing useful information between them. A major challenge in using multimodal deep learning for the Bangla language is the lack of annotated datasets that pair images and text. Most existing datasets are not diverse enough, which can lead to models that don't work well in different situations. There is still a significant need for high-quality, labeled image-text datasets in Bangla.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #8b5cf6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #ede9fe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #4c1d95; font-size: 1.1em; font-weight: bold;">MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #8b5cf6; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Zayeed Hasan, Md Arafat Alam Khandaker, Niful Islam, Khan Md Hasib, and M. F. Mridha <br/>
        <b>Journal:</b> <em>International Journal of Information Management Data Insights</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q1</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('FakeNews2025_abstract').style.display = document.getElementById('FakeNews2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://www.sciencedirect.com/science/article/pii/S2667096825000291" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection" style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Code</a>
          <a href="javascript:void(0)" onclick="document.getElementById('FakeNews2025_bib').style.display = document.getElementById('FakeNews2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="FakeNews2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@article{faria2025multibanfakedetect,
  title={MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts},
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Hasan, Zayeed and Khandaker, Md Arafat Alam and Islam, Niful and Hasib, Khan Md and Mridha, M. F.},
  journal={International Journal of Information Management Data Insights},
  volume={5},
  number={1},
  pages={100231},
  year={2025},
  publisher={Elsevier},
  doi={10.1016/j.jjimei.2025.100231}
}
      </pre>
    </div>
    <div id="FakeNews2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Fake news detection in low-resource languages like Bangla is challenging due to limited multimodal datasets. This study introduces MultiBanFakeDetect, a dataset with 15,000 image-text pairs for Bangla fake news detection. We propose a novel framework integrating early, late, and intermediate fusion techniques to combine visual and textual features. Using models like CLIP and BanglaBERT, our approach achieves an F1-score of 91.23%, surpassing single-modality models by 8.45%. The study highlights the effectiveness of multimodal fusion in under-resourced contexts, providing a robust benchmark for future research in Bangla fake news detection.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #10b981; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #e6f4ea; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #065f46; font-size: 1.1em; font-weight: bold;">SentimentFormer: A Transformer-Based Multi-Modal Fusion Framework for Enhanced Sentiment Analysis of Memes in Under-Resourced Bangla Language</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #10b981; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Laith H. Baniata, Mohammad H. Baniata, Mohannad A. Khair, Ahmed Ibrahim Bani Ata, Chayut Bunterngchit, and Sangwoo Kang <br/>
        <b>Journal:</b> <em>MDPI Electronics</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q2</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('SentimentFormer2025_abstract').style.display = document.getElementById('SentimentFormer2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://www.mdpi.com/2079-9292/14/4/799" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('SentimentFormer2025_bib').style.display = document.getElementById('SentimentFormer2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="SentimentFormer2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@article{faria2025sentimentformer,
  title={SentimentFormer: A Transformer-Based Multi-Modal Fusion Framework for Enhanced Sentiment Analysis of Memes in Under-Resourced Bangla Language},
  author={Faria, Fatema Tuj Johora and Baniata, Laith H. and Baniata, Mohammad H. and Khair, Mohannad A. and Ata, Ahmed Ibrahim Bani and Bunterngchit, Chayut and Kang, Sangwoo},
  journal={Electronics},
  volume={14},
  number={4},
  pages={799},
  year={2025},
  publisher={MDPI},
  doi={10.3390/electronics14040799}
}
      </pre>
    </div>
    <div id="SentimentFormer2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Sentiment analysis of memes in low-resource languages like Bangla is complex due to the multimodal nature of memes, combining text and images. This study proposes SentimentFormer, a Transformer-based framework that leverages intermediate fusion to integrate visual and textual features for sentiment analysis. Using a dataset of 7,000 Bangla memes, we compare SentimentFormer with unimodal and early/late fusion models. SentimentFormer achieves an accuracy of 87.56%, outperforming baselines by 6.32%. The framework’s ability to capture cross-modal interactions enhances sentiment detection, offering a scalable solution for multimodal NLP in Bangla.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #1e3a8a; font-size: 1.1em; font-weight: bold;">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #3b82f6; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim, and Md. Moinul Hoque <br/>
        <b>Conference:</b> <em>18th International Conference on Information Technology and Applications (ICITA 2024)</em> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Uddessho2024_abstract').style.display = document.getElementById('Uddessho2024_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://link.springer.com/chapter/10.1007/978-981-96-1758-6_32" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Uddessho2024_bib').style.display = document.getElementById('Uddessho2024_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Uddessho2024_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@inproceedings{faria2024uddessho,
  title={Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language},
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Rahman, Md. Mahfuzur and Shanto, Md Morshed Alam and Fahim, Asif Iftekher and Hoque, Md. Moinul},
  booktitle={18th International Conference on Information Technology and Applications (ICITA 2024)},
  year={2024},
  publisher={Springer},
  doi={10.1007/978-981-96-1758-6_32}
}
      </pre>
    </div>
    <div id="Uddessho2024_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Author intent classification in Bangla social media is challenging due to limited multimodal datasets. This study presents Uddessho, a dataset of 9,000 image-text pairs annotated for author intent (e.g., informative, persuasive, critical). We propose a multimodal framework combining CLIP and BanglaBERT with intermediate fusion, achieving an accuracy of 89.67%, outperforming unimodal baselines by 7.12%. The dataset and framework address the scarcity of resources for Bangla multimodal NLP, enabling robust intent classification in low-resource settings.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7f1d1d; font-size: 1.1em; font-weight: bold;">BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #ef4444; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha <br/>
        <b>Journal:</b> <em>Under Review in International Journal of Disaster Risk Reduction</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q1</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Calamity2025_abstract').style.display = document.getElementById('Calamity2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Calamity2025_bib').style.display = document.getElementById('Calamity2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Calamity2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@article{faria2025banglacalamitymmd,
  title={BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language},
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Rafa, Busra Kamal and Saha, Swarnajit and Rahman, Md. Mahfuzur and Hasib, Khan Md and Mridha, M. F.},
  journal={International Journal of Disaster Risk Reduction},
  year={2025},
  note={Under Review}
}
      </pre>
    </div>
    <div id="Calamity2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Disaster identification in Bangla social media is critical for timely response but lacks multimodal datasets. BanglaCalamityMMD provides 12,000 image-text pairs annotated for disaster types (e.g., flood, cyclone). We evaluate a multimodal framework combining CLIP and BanglaBERT with late fusion, achieving an F1-score of 90.12%, outperforming unimodal models by 9.34%. This dataset and framework enhance disaster identification in low-resource Bangla settings, supporting real-time crisis management.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #8b5cf6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width:  mental health domain, LLMs can provide empathetic and contextually appropriate advice. By training these models on specialized datasets, they can produce responses that resonate culturally with Bengali speakers, ensuring the advice is relatable and effective. However, developing LLMs for low-resource languages like Bangla comes with challenges, such as limited training data.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #10b981; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #e6f4ea; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #065f46; font-size: 1.1em; font-weight: bold;">Enhancing Bangla NLP Tasks with LLMs: A Study on Few-Shot Learning, RAG, and Fine-Tuning Techniques</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #10b981; font-size: 0.9em;">■</span>
        <b>Authors:</b> Saidur Rahman Sujon, Ahmadul Karim Chowdhury, <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, and Faisal Muhammad Shah <br/>
        <b>Conference:</b> <em>Submitted to 2025 IEEE 9th International Conference on Software Engineering & Computer Systems (ICSECS)</em> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('EnhancingBangla2025_abstract').style.display = document.getElementById('EnhancingBangla2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="javascript:void(0)" onclick="document.getElementById('EnhancingBangla2025_bib').style.display = document.getElementById('EnhancingBangla2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="EnhancingBangla2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@inproceedings{sujon2025enhancing,
  title={Enhancing Bangla NLP Tasks with LLMs: A Study on Few-Shot Learning, RAG, and Fine-Tuning Techniques},
  author={Sujon, Saidur Rahman and Chowdhury, Ahmadul Karim and Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Shah, Faisal Muhammad},
  booktitle={2025 IEEE 9th International Conference on Software Engineering & Computer Systems (ICSECS)},
  year={2025},
  note={Under Review}
}
      </pre>
    </div>
    <div id="EnhancingBangla2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        This study explores the enhancement of Bangla NLP tasks using Large Language Models (LLMs) through few-shot learning, Retrieval-Augmented Generation (RAG), and fine-tuning. We evaluate tasks like paraphrase generation, reading comprehension, and formal document generation using models like GPT-3.5 Turbo and Gemini 1.5 Pro on a Bangla dataset of 5,000 samples. Our results show that RAG improves contextual accuracy by 12.34% over baseline LLMs, while fine-tuning boosts performance in low-data settings by 9.87%. This work advances Bangla NLP for educational and professional applications.
      </p>
    </div>
  </div>
</div>

### Ongoing Work
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #1e3a8a; font-size: 1.1em; font-weight: bold;">MindSpeak-Bangla: A Domain-Specific Dataset for Automatic Chain-of-Thought Adaptation in Mental Health Support for Low-Resource Bengali Language Settings</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #3b82f6; font-size: 0.9em;">■</span>
        <b>Status:</b> Ongoing Research <br/>
      </li>
    </ul>
  </div>
</div>

## 5. Explainable AI in Medical Image Analysis
<p style="text-align:justify; color:black; font-family:Georgia">
Medical image analysis is important for diagnosing and treating diseases, especially in eye care and cancer treatment. This field uses advanced machine learning methods, especially convolutional neural networks (CNNs), to study medical images. However, these models can be complex and hard to understand, which is a problem in clinical settings where knowing how decisions are made is crucial. To address this, explainable AI techniques are developed to clarify how CNNs classify different eye conditions from retinal images. Additionally, new segmentation models are introduced to accurately identify blood vessels in these images, which helps doctors assess vascular health. By combining classification and segmentation, eye doctors can make better decisions and provide timely care, ultimately improving patient outcomes. Segmentation is vital in medical imaging as it helps separate images into important parts, allowing healthcare providers to focus on specific features for accurate diagnosis and treatment. For lung and colon cancer detection, explainable AI techniques also enhance understanding by showing how certain image features affect predictions, which helps build trust among healthcare professionals and improves communication with patients about their diagnoses.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7f1d1d; font-size: 1.1em; font-weight: bold;">Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #ef4444; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Pronay Debnath, Asif Iftekher Fahim, and Faisal Muhammad Shah <br/>
        <b>Journal:</b> <em>Under Review in Journal of Visual Communication and Image Representation</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q1</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Retinal2025_abstract').style.display = document.getElementById('Retinal2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://arxiv.org/pdf/2405.07338" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Retinal2025_bib').style.display = document.getElementById('Retinal2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Retinal2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@misc{faria2025explainable,
  title={Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images},
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Debnath, Pronay and Fahim, Asif Iftekher and Shah, Faisal Muhammad},
  year={2025},
  eprint={2405.07338},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  note={Under Review}
}
      </pre>
    </div>
    <div id="Retinal2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        This study addresses the interpretability of CNNs in retinal fundus classification and proposes advanced segmentation models for retinal blood vessels. Using a dataset of 6,000 fundus images, we apply explainable AI techniques like Grad-CAM and SHAP to highlight critical features in classifications of conditions like diabetic retinopathy. Our segmentation model, based on U-Net++, achieves a Dice score of 0.92, outperforming baselines by 5.43%. The integration of explainable AI enhances trust in clinical settings, improving diagnostic accuracy and patient outcomes.
      </p>
    </div>
  </div>

  <div style="background-color: white; border-left: 5px solid #8b5cf6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #ede9fe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #4c1d95; font-size: 1.1em; font-weight: bold;">Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #8b5cf6; font-size: 0.9em;">■</span>
        <b>Authors:</b> Mukaffi Bin Moin, <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Swarnajit Saha, Busra Kamal Rafa, and Mohammad Shafiul Alam <br/>
        <b>Conference:</b> <em>4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Cancer2024_abstract').style.display = document.getElementById('Cancer2024_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://arxiv.org/pdf/2405.04610" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="https://github.com/Mukaffi28/Explainable-AI-for-Lung-and-Colon-Cancer-Classification" style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Code</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Cancer2024_bib').style.display = document.getElementById('Cancer2024_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Cancer2024_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@misc{moin2024exploring,
  title={Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification},
  author={Moin, Mukaffi Bin and Faria, Fatema Tuj Johora and Saha, Swarnajit and Rafa, Busra Kamal and Alam, Mohammad Shafiul},
  year={2024},
  eprint={2405.04610},
  archivePrefix={arXiv},
  primaryClass={eess.IV},
  url={https://arxiv.org/abs/2405.04610}
}
      </pre>
    </div>
    <div id="Cancer2024_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Accurate classification of lung and colon cancer from medical images is critical for early diagnosis and effective treatment. However, deep learning models often operate as black boxes, making their decisions difficult to interpret. This study explores explainable AI (XAI) techniques to enhance the interpretability of convolutional neural network (CNN) models for lung and colon cancer classification. We evaluate multiple pre-trained CNN architectures, including ResNet50, VGG16, and DenseNet121, on a dataset of histopathological images. XAI methods such as Grad-CAM, Grad-CAM++, and SHAP are applied to highlight regions of interest and explain model predictions. Our results show that DenseNet121 achieves the highest classification accuracy of 92.78%, while Grad-CAM++ provides the most precise visualization of critical image regions. The integration of XAI improves model transparency, with a 5.12% increase in trust metrics among medical professionals surveyed. This work demonstrates the potential of XAI in making deep learning models more interpretable and reliable for clinical applications.
      </p>
    </div>
  </div>
</div>

## 6. Machine Translation and Regional Dialect Detection
<p style="text-align:justify; color:black; font-family:Georgia">
Machine Translation (MT) is a part of natural language processing (NLP) that helps automatically translate text from one language to another. A major improvement in MT comes from Transformer models, which make translations faster and better. These models can read entire sentences at once, making them great for translating complex sentences. Text classification is another important NLP task that involves assigning predefined categories or labels to text data. However, many languages, especially low-resource languages, lack enough linguistic resources like annotated corpora and dictionaries to develop advanced NLP applications. This is often the case for languages spoken by marginalized communities. In Bangladesh, there are many regional dialects of Bangla that can differ greatly in vocabulary, pronunciation, and syntax. For instance, the daily conversational dialects in regions like Sylhet, Noakhali, and Mymensingh have unique expressions and phrases that are distinct from Standard Bangla. Dialect Machine Translation (DMT) aims to translate these regional dialects into Standard Bangla, the official language, but it faces challenges like the wide variability in dialects, which can create confusion in translation models. Additionally, there is often a scarcity of datasets specifically designed for dialect translations, making it hard to create strong models. Dialects also carry cultural meanings that may not always translate well, so it’s essential to handle local expressions carefully.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #10b981; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #e6f4ea; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #065f46; font-size: 1.1em; font-weight: bold;">Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #10b981; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad <br/>
        <b>Journal:</b> <em>Under Review in Neural Computing and Applications</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q1</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Vashantor2023_abstract').style.display = document.getElementById('Vashantor2023_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://arxiv.org/pdf/2311.11142" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="https://github.com/fatemafaria142/Vashantor-A-Large-scale-Multilingual-Benchmark-Dataset" style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Code</a>
          <a href="https://data.mendeley.com/datasets/vashantor_dataset" style="background-color: #f59e0b; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Dataset</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Vashantor2023_bib').style.display = document.getElementById('Vashantor2023_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Vashantor2023_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@misc{faria2023vashantor,
  title={Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language},
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Al Wase, Ahmed and Ahmmed, Mehidi and Sani, Md Rabius and Muhammad, Tashreef},
  year={2023},
  eprint={2311.11142},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2311.11142}
}
      </pre>
    </div>
    <div id="Vashantor2023_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Bangla, a low-resource language, exhibits rich linguistic diversity with multiple regional dialects, posing challenges for automated translation systems. This study introduces Vashantor, a large-scale multilingual benchmark dataset for translating Bangla regional dialects to standard Bangla. The dataset comprises 12,000 sentence pairs across five major dialects: Chittagonian, Sylheti, Barisal, Noakhali, and Dhaka. We evaluate state-of-the-art models, including Transformer-based architectures like mBART and NLLB, and large language models like GPT-3.5 Turbo. Our results show that NLLB achieves the highest BLEU score of 32.45, while GPT-3.5 Turbo excels in contextual accuracy with a 78.23% translation quality score in few-shot settings. The dataset addresses the scarcity of resources for Bangla dialect translation, enabling robust model training and evaluation. This work facilitates advancements in multilingual NLP for low-resource languages.
      </p>
    </div>
  </div>
</div>

### Ongoing Work
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #1e3a8a; font-size: 1.1em; font-weight: bold;">BanglaDialect-Synth: An Approach for Synthetic Corpus Expansion of Bangla Regional Dialects Through Few-Shot Learning with Large Language Models</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #3b82f6; font-size: 0.9em;">■</span>
        <b>Status:</b> Ongoing Research <br/>
      </li>
    </ul>
  </div>
</div>

## 7. Natural Language Processing for Medical Question Answering
<p style="text-align:justify; color:black; font-family:Georgia">
Developing a question-answering (QA) system using Natural Language Processing (NLP) in low-resource languages like Bangla, especially in the medical field, presents both challenges and opportunities. While the core objectives remain similar—processing and understanding medical literature, clinical notes, and patient records to accurately respond to queries—building such systems in low-resource settings requires adapting to the limitations of available data and resources. In the context of Bangla, the system must be capable of extracting relevant information from medical texts or generating meaningful responses, even though large datasets, pre-trained models, and medical resources in Bangla are scarce compared to high-resource languages. The system needs to handle the complexities of understanding medical terminology and relationships between medical concepts in Bangla, while also incorporating code-switching for English medical terms. It can provide clinical decision support to healthcare professionals, enabling them to make informed decisions, especially in rural areas, and offer patient education by answering questions in Bangla, thereby improving healthcare accessibility. The system would need to handle various question types such as factoid, confirmation, list, casual, temporal, and even unanswerable questions.
</p>

### Ongoing Work
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7f1d1d; font-size: 1.1em; font-weight: bold;">BanglaMedQA: A Comprehensive Dataset for Adapting Zero-Shot Chain-of-Thought Reasoning in Bengali Medical Question Answering</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #ef4444; font-size: 0.9em;">■</span>
        <b>Status:</b> Ongoing Research <br/>
      </li>
    </ul>
  </div>
</div>
## 8. Generative Adversarial Networks in Agriculture
<p style="text-align:justify; color:black; font-family:Georgia">
Generative Adversarial Networks (GANs) have revolutionized the field of machine learning, offering groundbreaking applications across various industries, particularly in agriculture. One significant area of focus is the detection of potato diseases, where gathering images of infected crops can be challenging due to limited access to diseased samples at different stages. GANs provide an innovative solution by generating synthetic data that mimics real-world conditions, significantly enhancing the ability to train and improve machine learning models. They can generate a wide variety of diseased potato images, increasing the size and diversity of training datasets, which enables models to better generalize and identify potato diseases. By producing realistic images reflecting natural disease patterns, GANs assist researchers and farmers in developing more accurate diagnostic tools. Moreover, explainable AI is pivotal in building trust with agricultural professionals by offering transparency into the decision-making processes of AI models; providing visual explanations for disease classification fosters confidence among farmers and researchers reliant on these technologies. Instance segmentation in agriculture, particularly for tasks like potato disease detection, involves identifying and delineating individual potato plants or specific infected areas within each plant at the pixel level, allowing for a detailed analysis of disease severity and spread by accurately segmenting diseased regions from healthy parts of the plant.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #1e3a8a; font-size: 1.1em; font-weight: bold;">PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #3b82f6; font-size: 0.9em;">■</span>
        <b>Authors:</b> Mohammad Shafiul Alam<b>*</b>, <span style="color: #10b981">Fatema Tuj Johora Faria</span><b>*</b>, Mukaffi Bin Moin<b>*</b>, Ahmed Al Wase, Md. Rabius Sani, and Khan Md Hasib <br/>
        <b>Journal:</b> <em>Under Review in Journal of Intelligent Information Systems</em> <span style="background-color: #e6f4ea; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">Q2</span> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('PotatoGANs2025_abstract').style.display = document.getElementById('PotatoGANs2025_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://arxiv.org/pdf/2405.07332" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="javascript:void(0)" onclick="document.getElementById('PotatoGANs2025_bib').style.display = document.getElementById('PotatoGANs2025_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="PotatoGANs2025_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@misc{alam2025potatogans,
  title={PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification},
  author={Alam, Mohammad Shafiul and Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Al Wase, Ahmed and Sani, Md. Rabius and Hasib, Khan Md},
  year={2025},
  eprint={2405.07332},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  note={Under Review}
}
      </pre>
    </div>
    <div id="PotatoGANs2025_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Potato disease detection is critical for agricultural yield but is hindered by limited annotated datasets. This study proposes PotatoGANs, a framework utilizing Generative Adversarial Networks (GANs) to generate synthetic diseased potato images, combined with instance segmentation and explainable AI (XAI). Using a dataset of 4,000 images, our GAN-based augmentation increases dataset size by 50%, improving classification accuracy to 91.45% with a ResNet50 model. Instance segmentation via Mask R-CNN achieves a mean Average Precision (mAP) of 0.89, and XAI techniques like Grad-CAM enhance interpretability, increasing trust metrics by 6.78% among agricultural experts. This work advances automated disease detection in low-resource agricultural settings.
      </p>
    </div>
  </div>
</div>

## 9. Computer Vision Applications in Agriculture
<p style="text-align:justify; color:black; font-family:Georgia">
Disease classification in agriculture is crucial for modern farming, particularly concerning food security and sustainable practices, as the increasing global population drives the demand for high-yield, healthy crops. Disease outbreaks can severely impact crop production, resulting in financial losses for farmers and threatening food supply chains; thus, timely and accurate classification of plant diseases is essential for implementing effective management strategies, reducing losses, and ensuring the sustainability of agricultural systems. For example, potatoes, a staple food crop and significant source of carbohydrates, are susceptible to various diseases such as Black Scurf and Common Scab. Advancements in machine learning and deep learning, particularly through computer vision, have made convolutional neural networks (CNNs) powerful tools for image classification tasks, including disease detection in crops. CNNs excel at analyzing visual data, automatically learning spatial hierarchies of features from images; thus, for potato disease classification, a CNN can be trained on labeled images of healthy and diseased potatoes, identifying patterns associated with each disease for accurate classification. Hybrid models integrating Long Short-Term Memory (LSTM), Gated Recurrent Units (GRU), and Bidirectional LSTM (Bi-LSTM) architectures enhance classification by capturing spatial and temporal dependencies within the data.
</p>

### Related Papers
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='scale(1.01)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.12)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)';">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7f1d1d; font-size: 1.1em; font-weight: bold;">Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #ef4444; font-size: 0.9em;">■</span>
        <b>Authors:</b> <span style="color: #10b981">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam <br/>
        <b>Conference:</b> <em>2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</em> <br/>
        <div style="margin-top: 10px;">
          <a href="javascript:void(0)" onclick="document.getElementById('Potato2023_abstract').style.display = document.getElementById('Potato2023_abstract').style.display === 'none' ? 'block' : 'none';" style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Abstract</a>
          <a href="https://ieeexplore.ieee.org/document/10099162" style="background-color: #ef4444; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">PDF</a>
          <a href="https://github.com/fatemafaria142/Potato-Disease-Classification" style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Code</a>
          <a href="https://data.mendeley.com/datasets/potato_disease_dataset" style="background-color: #f59e0b; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; margin-right: 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Dataset</a>
          <a href="javascript:void(0)" onclick="document.getElementById('Potato2023_bib').style.display = document.getElementById('Potato2023_bib').style.display === 'none' ? 'block' : 'none';" style="background-color: #8b5cf6; color: white; padding: 4px 8px; border-radius: 5px; text-decoration: none; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">Citation bib</a>
        </div>
      </li>
    </ul>
    <div id="Potato2023_bib" class="bib" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <pre>
@INPROCEEDINGS{10099162,
  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Al Wase, Ahmed and Sani, Md Rabius and Hasib, Khan Md and Alam, Mohammad Shafiul},
  booktitle={2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)},
  title={Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework},
  year={2023},
  pages={0554-0560},
  doi={10.1109/CCWC57344.2023.10099162}
}
      </pre>
    </div>
    <div id="Potato2023_abstract" class="abstract" style="display:none; font-family: 'Segoe UI', sans-serif; color: black; margin-top: 10px;">
      <p style="text-align: justify;">
        Potato diseases significantly impact agricultural yields, necessitating accurate and timely identification for effective crop management. This study proposes a hybrid deep learning framework for potato disease classification using digital image processing techniques. We utilize a dataset of 5,000 potato leaf images, annotated for diseases such as late blight, early blight, and bacterial wilt. The framework combines convolutional neural networks (CNNs) like ResNet50 and VGG16 with image preprocessing techniques, including histogram equalization and edge detection. Our hybrid model achieves a classification accuracy of 89.34%, outperforming traditional machine learning methods by 7.21%. The study also incorporates data augmentation to enhance model robustness, addressing challenges like varying lighting conditions and image quality. This work provides a scalable solution for automated potato disease detection, supporting farmers in low-resource settings.
      </p>
    </div>
  </div>
</div>
