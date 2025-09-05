---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<span style="font-family: 'Segoe UI', sans-serif; color: black;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="
      background-color: white; 
      border-left: 5px solid #3b82f6; 
      border-radius: 10px; 
      padding: 25px; 
      margin-bottom: 30px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);">
      <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
        My research centers on advancing a broad range of areas, including Large Language Models (LLMs), LLM Agents, Human–LLM Interaction, Large Multimodal Models (LMMs), NLP for Social Good, NLP for Low-Resource Languages, AI in Healthcare, Vision-Language Models (VLMs), Trustworthy AI, Multimodal Agents. I am deeply involved in both the theoretical exploration and practical application of these technologies across diverse real-world domains. Below are some of the research areas I have worked on or am currently exploring.
      </p>
    </div>
  </div>
<div class="card-container" style="display: flex; flex-direction: column; gap: 20px;">
  <div class="card" style="background-color: white; border-left: 5px solid #3b82f6; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">1. Large Language Models for Social Media Analysis</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Sentiment analysis in the context of Bangladesh’s elections plays a crucial role in understanding voter perceptions and public opinion about different political parties. By analyzing social media platforms such as Facebook, X (formerly Twitter), and online newspapers, it becomes possible to capture citizens’ emotions, whether positive, negative, or neutral, towards electoral campaigns and political agendas. Hate speech detection, on the other hand, focuses on identifying and classifying language that promotes violence or discrimination against people based on race, religion, gender, or sexual orientation. Both tasks are highly important in today’s digital world, where online communication can significantly influence society. Large Language Models (LLMs) such as Gemini 1.5 Pro and GPT-3.5 Turbo have transformed natural language processing (NLP). They support prompting techniques like Zero-Shot Learning (ZSL) and Few-Shot Learning (FSL), which are especially useful for sentiment analysis and hate speech detection. In ZSL, the model can classify text into categories such as positive, negative, neutral, or hateful without being trained on task-specific labeled data, relying instead on its broad pretraining knowledge. In FSL, the model learns from only a few labeled examples, quickly adapting to the task with minimal data. These prompting techniques are particularly valuable for low-resource languages like Bangla, where large labeled datasets are often unavailable, making ZSL and FSL powerful alternatives to traditional methods.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #3b82f6; font-weight: bold;">1.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy, Mohammad Shafiul Alam</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Published in The IEEE Region 10 Symposium (TENSYMP 2024)</em></p>
      <a href="https://ieeexplore.ieee.org/document/10752197/" style="display: inline-block; background: linear-gradient(to right, #3b82f6, #60a5fa); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #3b82f6; font-weight: bold;">1.2 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Investigating the Predominance of Large Language Models in Low-Resource Bangla Language Over Transformer Models for Hate Speech Detection: A Comparative Analysis</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Laith H. Baniata, Sangwoo Kang</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Published in MDPI Mathematics (Q1)</em></p>
      <a href="https://www.mdpi.com/2227-7390/12/23/3687" style="display: inline-block; background: linear-gradient(to right, #3b82f6, #60a5fa); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
  </div>


  <div class="card" style="background-color: white; border-left: 5px solid #f59e0b; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">2. Vision–Language Models for Medical Visual Question Answering</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Medical Visual Question Answering (MedVQA) lies at the intersection of computer vision, natural language processing, and clinical decision-making, aiming to generate accurate responses from medical images paired with complex inquiries. Traditional approaches in MedVQA often rely on supervised learning with limited annotated datasets, making them prone to overfitting and limiting their generalization across diverse medical cases. Zero-shot learning offers a way to bypass large-scale annotation, but it frequently struggles with complex reasoning, producing direct answers without revealing the underlying logic. This lack of transparency is particularly concerning in medical applications, where understanding the reasoning behind a diagnosis is as crucial as the answer itself. To overcome these challenges, a chain-of-thought prompting framework is employed to guide vision–language models to perform stepwise reasoning. By decomposing the problem, analyzing both visual and textual information sequentially, and generating an explicit reasoning path, this approach enhances interpretability, trustworthiness, and the clinical relevance of model predictions.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #f59e0b; font-weight: bold;">2.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Analyzing Diagnostic Reasoning of Vision–Language Models via Zero-Shot Chain-of-Thought Prompting in Medical Visual Question Answering</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Laith H. Baniata, Ahyoung Choi, Sangwoo Kang</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Published in MDPI Mathematics (Q1)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #f59e0b; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">3. Large Language Models for Mental Health Advice Generation</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
    Bangla text generation for mental health advice aims to provide empathetic, culturally relevant guidance to the Bangladeshi population, addressing sensitive issues such as sexual abuse, miscarriage, divorce, and self-harm ideation. Traditional approaches face challenges due to limited domain-specific datasets that reflect the country’s unique linguistic and societal context, making general-purpose models less effective. Previous research has explored mental health text generation in other languages such as English, Hindi, and Chinese, but there has been no domain-specific dataset or dedicated study for Bangla. Zero-shot learning allows models to generate responses without extensive training, but it often produces generic or contextually inappropriate advice, limiting its usefulness in mental health applications. To overcome these limitations, chain-of-thought prompting with advanced LLMs such as GPT-4o Mini, Claude 3.7 Sonnet, and Gemini 2.5 Pro can be applied. By guiding models to reason step by step, analyze context, and incorporate societal nuances, this approach enhances the relevance, empathy, and interpretability of generated advice.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #f59e0b; font-weight: bold;">3.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">MindSpeak-Bangla: A Domain-Specific Dataset for Automatic Chain-of-Thought Adaptation in Mental Health Support for Low-Resource Bengali Language Settings</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Khan Hasib, Md. Jakir Hossen, Dr. M. F. Mridha</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Submitted to IEEE Open Journal of the Computer Society</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #f59e0b; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">4. Large Multimodal Models for Remote Sensing Imaging</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Remote Sensing Visual Question Answering (RSVQA) extends the capabilities of traditional computer vision and natural language processing by enabling models to answer complex, natural-language questions about geospatial data. It plays a critical role in applications such as environmental monitoring, urban planning, disaster response, and resource management, where accurate interpretation of spatial and contextual information is essential. Traditional approaches and zero-shot learning methods often fall short in RSVQA because they tend to generate direct answers without explicitly reasoning over spatial relationships, contextual cues, or multi-step dependencies in satellite imagery, which can result in incorrect or superficial responses for complex queries that require layered understanding. To overcome these limitations, chain-of-thought prompting guides large multimodal models to reason step by step, breaking down problems into interpretable intermediate steps that reflect spatial and contextual analysis. Integrating self-consistency with chain-of-thought prompting further enhances reliability by generating multiple reasoning paths and selecting the most consistent answer, reducing errors from individual reasoning chains and improving model robustness, interpretability, and confidence in geospatial decision-making. Using proprietary large multimodal models such as GPT‑4o, Grok 3, Gemini 2.5 Pro, and Claude 3.7 Sonnet, RSVQA can advance beyond simple answer prediction toward more explainable and trustworthy analysis of Earth observation data.
    </p>
      <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #f59e0b; font-weight: bold;">4.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Towards Robust Chain-of-Thought Prompting with Self-Consistency for Remote Sensing VQA: An Empirical Study Across Large Multimodal Models</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Laith H. Baniata, Ahyoung Choi, Sangwoo Kang</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Under Review in MDPI Mathematics (Q1)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #8b5cf6; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">5. Large Language Models for Natural Language Inference (NLI)</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Natural Language Inference (NLI) is an important task in natural language processing (NLP) that examines the relationship between two sentences to determine if one sentence (the premise) supports, contradicts, or is unrelated to another sentence (the hypothesis). This capability is crucial for various applications such as answering questions, retrieving information, and creating chatbots, as it enhances computers' understanding of human language. NLI consists of three main categories: entailment, where the truth of the hypothesis can be inferred from the premise; contradiction, where both cannot be true simultaneously; and neutral, where the hypothesis's truth is independent of the premise. Understanding NLI is particularly vital for languages like Bangla, which differ significantly from more widely studied languages like English, as it can improve how NLP models process and interpret Bangla text. With the rise of digital communication, there is an increasing demand for technologies that comprehend Bangla, and NLI can enhance chatbots, virtual assistants, and translation services to better understand user queries and respond accurately. Large Language Models (LLMs) are trained on extensive amounts of text data, enabling them to learn various language patterns and meanings, which is especially beneficial for NLI where understanding subtle connections between sentences is key.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #8b5cf6; font-weight: bold;">5.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Presented at the 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></p>
      <a href="https://arxiv.org/pdf/2405.02937" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #a78bfa); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
  </div>


  <div class="card" style="background-color: white; border-left: 5px solid #10b981; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">6. Multimodal Deep Learning</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Multimodal deep learning is a method that improves understanding by combining images and text. This approach uses three main techniques: early fusion, late fusion, and intermediate fusion. In early fusion, raw images and text are combined into a single input before the model processes them. This allows the model to learn a shared representation, but it can also make it sensitive to noise from either the images or the text. Late fusion works differently. Here, images and text are processed separately using different models. The results are combined later on. This method is flexible and allows each model to be optimized independently, but it might miss important connections between the two modalities that could improve performance. Intermediate fusion is a middle ground. It combines features from images and text at different stages of processing. This way, it keeps the unique qualities of each type of data while also sharing useful information between them. A major challenge in using multimodal deep learning for the Bangla language is the lack of annotated datasets that pair images and text. Most existing datasets are not diverse enough, which can lead to models that don't work well in different situations. There is still a significant need for high-quality, labeled image-text datasets in Bangla.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #10b981; font-weight: bold;">6.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Zayeed Hasan, Md Arafat Alam Khandaker, Niful Islam, Khan Md Hasib, M. F. Mridha</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Published in International Journal of Information Management Data Insights (Q1)</em></p>
      <a href="https://www.sciencedirect.com/science/article/pii/S2667096825000291?via%3Dihub" style="display: inline-block; background: linear-gradient(to right, #10b981, #34d399); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #10b981; font-weight: bold;">6.2 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">SentimentFormer: A Transformer-Based Multi-Modal Fusion Framework for Enhanced Sentiment Analysis of Memes in Under-Resourced Bangla Language</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Laith H. Baniata, Mohammad H. Baniata, Mohannad A. Khair, Ahmed Ibrahim Bani Ata, Chayut Bunterngchit, Sangwoo Kang</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Published in MDPI Electronics (Q2)</em></p>
      <a href="https://www.mdpi.com/2079-9292/14/4/799" style="display: inline-block; background: linear-gradient(to right, #10b981, #34d399); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #10b981; font-weight: bold;">6.3 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim, Md. Moinul Hoque</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Published in 18th International Conference on Information Technology and Applications (ICITA 2024)</em></p>
      <a href="https://link.springer.com/chapter/10.1007/978-981-96-1758-6_32" style="display: inline-block; background: linear-gradient(to right, #10b981, #34d399); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #10b981; font-weight: bold;">6.4 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, M. F. Mridha</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Accepted for Publication in the International Journal of Disaster Risk Reduction (Q1)</em></p>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #10b981; font-weight: bold;">6.5 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Submitted to 2025 9th International Conference on Vision, Image and Signal Processing (ICVISP 2025)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #f59e0b; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">7. Bengali Language Generation with Large Language Models</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Text generation tasks involve creating human-like text using models, especially in Natural Language Processing (NLP). One important aspect is paraphrase generation, where large language models (LLMs) can understand context and semantics to create different expressions of the same idea. By using few-shot learning techniques, these models can be trained with just a little data to improve linguistic diversity, which is useful for educational content and creative writing in Bengali. Another key task is reading comprehension, where LLMs need to understand and generate text to answer questions or summarize information. This ability is enhanced by fine-tuning LLMs with Bengali datasets, making them better for educational tools in languages with fewer resources. Additionally, generating formal documents like applications or reports can be challenging, as it requires maintaining the right tone and structure. Here, Retrieval-Augmented Generation (RAG) techniques help LLMs use external information effectively, resulting in more relevant and organized outputs, which is crucial in professional settings. In the mental health domain, LLMs can provide empathetic and contextually appropriate advice. By training these models on specialized datasets, they can produce responses that resonate culturally with Bengali speakers, ensuring the advice is relatable and effective. However, developing LLMs for low-resource languages like Bangla comes with challenges, such as limited training data.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #f59e0b; font-weight: bold;">7.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Enhancing Bangla NLP Tasks with LLMs: A Study on Few-Shot Learning, RAG, and Fine-Tuning Techniques</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> Saidur Rahman Sujon, Ahmadul Karim Chowdhury, <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Faisal Muhammad Shah</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Submitted to 2025 28th International Conference on Computer and Information Technology (ICCIT)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #ef4444; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">8. Explainable AI in Medical Image Analysis</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Medical image analysis is important for diagnosing and treating diseases, especially in eye care and cancer treatment. This field uses advanced machine learning methods, especially convolutional neural networks (CNNs), to study medical images. However, these models can be complex and hard to understand, which is a problem in clinical settings where knowing how decisions are made is crucial. To address this, explainable AI techniques are developed to clarify how CNNs classify different eye conditions from retinal images. Additionally, new segmentation models are introduced to accurately identify blood vessels in these images, which helps doctors assess vascular health. By combining classification and segmentation, eye doctors can make better decisions and provide timely care, ultimately improving patient outcomes. Segmentation is vital in medical imaging as it helps separate images into important parts, allowing healthcare providers to focus on specific features for accurate diagnosis and treatment. For lung and colon cancer detection, explainable AI techniques also enhance understanding by showing how certain image features affect predictions, which helps build trust among healthcare professionals and improves communication with patients about their diagnoses.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #ef4444; font-weight: bold;">8.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Under Review in Journal of Visual Communication and Image Representation (Q1)</em></p>
      <a href="https://arxiv.org/pdf/2405.07338" style="display: inline-block; background: linear-gradient(to right, #ef4444, #f87171); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #ef4444; font-weight: bold;">8.2 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> Mukaffi Bin Moin, <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Presented at the 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></p>
      <a href="https://arxiv.org/pdf/2405.04610" style="display: inline-block; background: linear-gradient(to right, #ef4444, #f87171); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #9333ea; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">9. Machine Translation and Regional Dialect Detection</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Machine Translation (MT) is a part of natural language processing (NLP) that helps automatically translate text from one language to another. A major improvement in MT comes from Transformer models, which make translations faster and better. These models can read entire sentences at once, making them great for translating complex sentences. Text classification is another important NLP task that involves assigning predefined categories or labels to text data. However, many languages, especially low-resource languages, lack enough linguistic resources like annotated corpora and dictionaries to develop advanced NLP applications. This is often the case for languages spoken by marginalized communities. In Bangladesh, there are many regional dialects of Bangla that can differ greatly in vocabulary, pronunciation, and syntax. For instance, the daily conversational dialects in regions like Sylhet, Noakhali, and Mymensingh have unique expressions and phrases that are distinct from Standard Bangla. Dialect Machine Translation (DMT) aims to translate these regional dialects into Standard Bangla, the official language, but it faces challenges like the wide variability in dialects, which can create confusion in translation models. Additionally, there is often a scarcity of datasets specifically designed for dialect translations, making it hard to create strong models. Dialects also carry cultural meanings that may not always translate well, so it’s essential to handle local expressions carefully.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #9333ea; font-weight: bold;">9.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, Tashreef Muhammad</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Journal:</strong> <em>Under Review in Array (Q1)</em></p>
      <a href="https://arxiv.org/pdf/2311.11142" style="display: inline-block; background: linear-gradient(to right, #9333ea, #a855f7); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #9333ea; font-weight: bold;">9.2 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">BanglaDialect-Synth: An Approach for Synthetic Corpus Expansion of Bangla Regional Dialects Through Few-Shot Learning with Large Language Models</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> (Ongoing Work)</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>(Ongoing Work)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #14b8a6; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">10. Large Language Models for Bangla Medical Question Answering</h2>
<p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;"> Developing a medical question-answering system in low-resource languages like Bangla presents unique challenges because of limited datasets and pre-trained models. Using closed-source Large Language Models such as Claude 4, GPT-4.1, and Gemini 2.5 Pro with zero chain-of-thought prompting allows the system to generate accurate answers without requiring step-by-step reasoning prompts. These models can process Bangla medical texts, clinical notes, and patient records while handling complex medical terminology and code-switching with English terms. By leveraging zero chain-of-thought prompting, the system can answer various question types including factoid, list, causal, temporal, and unanswerable questions efficiently and accurately. This approach can support clinical decision-making, improve patient education, and enhance healthcare accessibility in rural areas by delivering contextually relevant responses directly in Bangla. </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #14b8a6; font-weight: bold;">10.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">BanglaMedQA: A Comprehensive Dataset for Adapting Zero-Shot Chain-of-Thought Reasoning in Bengali Medical Question Answering</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> (Ongoing Work)</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>(Ongoing Work)</em></p>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #f97316; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">11. Generative Adversarial Networks in Agriculture</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Generative Adversarial Networks (GANs) have revolutionized the field of machine learning, offering groundbreaking applications across various industries, particularly in agriculture. One significant area of focus is the detection of potato diseases, where gathering images of infected crops can be challenging due to limited access to diseased samples at different stages. GANs provide an innovative solution by generating synthetic data that mimics real-world conditions, significantly enhancing the ability to train and improve machine learning models. They can generate a wide variety of diseased potato images, increasing the size and diversity of training datasets, which enables models to better generalize and identify potato diseases. By producing realistic images reflecting natural disease patterns, GANs assist researchers and farmers in developing more accurate diagnostic tools. Moreover, explainable AI is pivotal in building trust with agricultural professionals by offering transparency into the decision-making processes of AI models; providing visual explanations for disease classification fosters confidence among farmers and researchers reliant on these technologies. Instance segmentation in agriculture, particularly for tasks like potato disease detection, involves identifying and delineating individual potato plants or specific infected areas within each plant at the pixel level, allowing for a detailed analysis of disease severity and spread by accurately segmenting diseased regions from healthy parts of the plant.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #f97316; font-weight: bold;">11.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Mohammad Shafiul Alam, Ahmed Al Wase, Md. Rabius Sani, Khan Md Hasib</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>Under Review in 11th IEEE International Conference on Sustainable Technology and Engineering</em></p>
      <a href="https://arxiv.org/pdf/2405.07332" style="display: inline-block; background: linear-gradient(to right, #f97316, #fb923c); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
  </div>

  <div class="card" style="background-color: white; border-left: 5px solid #22c55e; border-radius: 10px; padding: 25px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0; color: #1e3a8a;">12. Computer Vision Applications in Agriculture</h2>
    <p style="text-align: justify; color: black; font-family: 'Segoe UI', serif;;">
      Disease classification in agriculture is crucial for modern farming, particularly concerning food security and sustainable practices, as the increasing global population drives the demand for high-yield, healthy crops. Disease outbreaks can severely impact crop production, resulting in financial losses for farmers and threatening food supply chains; thus, timely and accurate classification of plant diseases is essential for implementing effective management strategies, reducing losses, and ensuring the sustainability of agricultural systems. For example, potatoes, a staple food crop and significant source of carbohydrates, are susceptible to various diseases such as Black Scurf and Common Scab. Advancements in machine learning and deep learning, particularly through computer vision, have made convolutional neural networks (CNNs) powerful tools for image classification tasks, including disease detection in crops. CNNs excel at analyzing visual data, automatically learning spatial hierarchies of features from images; thus, for potato disease classification, a CNN can be trained on labeled images of healthy and diseased potatoes, identifying patterns associated with each disease for accurate classification. Hybrid models integrating Long Short-Term Memory (LSTM), Gated Recurrent Units (GRU), and Bidirectional LSTM (Bi-LSTM) architectures enhance classification by capturing spatial and temporal dependencies within the data.
    </p>
    <div class="paper" style="margin: 15px 0; font-family: 'Trebuchet MS', sans-serif; color: black;">
      <span style="color: #22c55e; font-weight: bold;">12.1 </span>
      <h3 style="color: #2c3e50; font-size: 1.2em; margin: 5px 0;">Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</h3>
      <p style="font-style: italic; margin: 5px 0;"><strong style="color: #c45d25;">Authors:</strong> <span style="color: #6b21a8;">Fatema Tuj Johora Faria</span>, Mukaffi Bin Moin, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, Mohammad Shafiul Alam</p>
      <p style="color: green; margin: 5px 0;"><strong style="color: #c45d25;">Conference:</strong> <em>2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</em></p>
      <a href="https://ieeexplore.ieee.org/document/10099162" style="display: inline-block; background: linear-gradient(to right, #22c55e, #4ade80); color: white; padding: 8px 15px; border-radius: 8px; text-decoration: none; margin-top: 5px; transition: background 0.3s ease;">View PDF</a>
    </div>
  </div>
</div>

<style>
  .intro {
    text-align: justify;
    margin-bottom: 30px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .paper a:hover {
    text-decoration: underline;
    background: linear-gradient(to right, #1e3a8a, #3b82f6);
  }
</style>
