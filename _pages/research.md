---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---
<p style="text-align:justify; color:black; font-family:Georgia">
My research delves into the realms of Large Language Models, Large Vision Models, Computer Vision, Medical Imaging, Natural Language Processing, Generative Adversarial Networks, Explainable Artificial Intelligence, Machine Learning, and Deep Learning and their applications. Below are some of the research areas I have worked on or am currently exploring.
</p> 


## 1. Multimodal Deep Learning
<p style="text-align:justify; color:black; font-family:Georgia">
Multimodal deep learning is a method that improves understanding by combining images and text. This approach uses three main techniques: early fusion, late fusion, and intermediate fusion. In early fusion, raw images and text are combined into a single input before the model processes them. This allows the model to learn a shared representation, but it can also make it sensitive to noise from either the images or the text. Late fusion works differently. Here, images and text are processed separately using different models. The results are combined later on. This method is flexible and allows each model to be optimized independently, but it might miss important connections between the two modalities that could improve performance. Intermediate fusion is a middle ground. It combines features from images and text at different stages of processing. This way, it keeps the unique qualities of each type of data while also sharing useful information between them. A major challenge in using multimodal deep learning for the Bangla language is the lack of annotated datasets that pair images and text. Most existing datasets are not diverse enough, which can lead to models that don't work well in different situations. There is still a significant need for high-quality, labeled image-text datasets in Bangla. </p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim and Md. Moinul Hoque. <span style="color:green;"><em> Accepted in 18th International Conference on Information Technology and Applications (ICITA 2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2409.09504)</span>   

+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaCalamityMMD: A Comprehensive Benchmark Dataset
for Multimodal Disaster Identification in the Low-Resource Bangla Language
</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha. <span style="color:green;"><em> Under Review in International Journal of Disaster Risk Reduction (Q1)</em></span>.</span>  


+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts </span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Zayeed Hasan, Md Arafat Alam Khandaker, Niful Islam, Khan Md Hasib, Md Saddam Hossain Mukta, and M. F. Mridha. <span style="color:green;"><em> Under Review in Online Social Networks and Media (Q1)</em></span>.</span>  


+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, and Faisal Muhammad Shah. <span style="color:green;"><em> Submitted to an A* Rank Conference</em></span>.</span>  


## 2. Sentiment Analysis and Hate Speech Detection in Social Media 
<p style="text-align:justify; color:black; font-family:Georgia">
Sentiment analysis is a way to find and categorize feelings expressed in text, especially in social media and reviews. It determines whether the emotional tone is positive, negative, or neutral. Hate speech detection, however, focuses on finding and classifying language that promotes violence or discrimination against people based on race, religion, gender, or sexual orientation. Both tasks are very important in today’s digital world, where online communication can greatly impact society. Large Language Models (LLMs) like Gemini 1.5 Pro and GPT-3.5 Turbo have changed the game in natural language processing (NLP). They use large amounts of text data and advanced techniques to understand and create human-like text. This helps them capture the nuances of language and context. Traditional machine learning methods often require a lot of manual work to extract features, which can be slow and may overlook important details. In contrast, LLMs automatically learn features from raw text, reducing the need for special knowledge. They are also very good at understanding the context of words, leading to better sentiment analysis and hate speech detection. This ability to understand context is especially important for low-resource languages like Bangla, where traditional methods may struggle due to limited data. 
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</span>. Fatema Tuj Johora Faria<b>*</b>, Mukaffi Bin Moin<b>*</b>, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy and Mohammad Shafiul Alam. <span style="color:green;"><em> Published in The IEEE Region 10 Symposium (TENSYMP 2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2407.19528)</span>   

+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Investigating the Predominance of Large Language Models in Low-Resource Bangla Language Over Transformer Models for Hate Speech Detection: A Comparative Analysis </span>. Fatema Tuj Johora Faria, Laith H. Baniata, and Sangwoo Kang. <span style="color:green;"><em> Accepted in MDPI Mathematics (Q1)</em></span>.</span>  

## 3. Natural Language Inference 
<p style="text-align:justify; color:black; font-family:Georgia"> 

Natural Language Inference (NLI) is an important task in natural language processing (NLP) that examines the relationship between two sentences to determine if one sentence (the premise) supports, contradicts, or is unrelated to another sentence (the hypothesis). This capability is crucial for various applications such as answering questions, retrieving information, and creating chatbots, as it enhances computers' understanding of human language. NLI consists of three main categories: entailment, where the truth of the hypothesis can be inferred from the premise; contradiction, where both cannot be true simultaneously; and neutral, where the hypothesis's truth is independent of the premise. Understanding NLI is particularly vital for languages like Bangla, which differ significantly from more widely studied languages like English, as it can improve how NLP models process and interpret Bangla text. With the rise of digital communication, there is an increasing demand for technologies that comprehend Bangla, and NLI can enhance chatbots, virtual assistants, and translation services to better understand user queries and respond accurately. Large Language Models (LLMs) are trained on extensive amounts of text data, enabling them to learn various language patterns and meanings, which is especially beneficial for NLI where understanding subtle connections between sentences is key.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah <span style="color:green;"><em> Accepted in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.02937)</span>   

## 4. Text Generation in Bengali

<p style="text-align:justify; color:black; font-family:Georgia"> 
Text generation tasks involve creating human-like text using models, especially in Natural Language Processing (NLP). One important aspect is paraphrase generation, where large language models (LLMs) can understand context and semantics to create different expressions of the same idea. By using few-shot learning techniques, these models can be trained with just a little data to improve linguistic diversity, which is useful for educational content and creative writing in Bengali. Another key task is reading comprehension, where LLMs need to understand and generate text to answer questions or summarize information. This ability is enhanced by fine-tuning LLMs with Bengali datasets, making them better for educational tools in languages with fewer resources. Additionally, generating formal documents like applications or reports can be challenging, as it requires maintaining the right tone and structure. Here, Retrieval-Augmented Generation (RAG) techniques help LLMs use external information effectively, resulting in more relevant and organized outputs, which is crucial in professional settings. In the mental health domain, LLMs can provide empathetic and contextually appropriate advice. By training these models on specialized datasets, they can produce responses that resonate culturally with Bengali speakers, ensuring the advice is relatable and effective. However, developing LLMs for low-resource languages like Bangla comes with challenges, such as limited training data. 
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG
</span>. Saidur Rahman Sujon, Ahmadul Karim Chowdhury, Fatema Tuj Johora Faria, Mukaffi Bin Moin and Faisal Muhammad Shah <span style="color:green;"><em> Submitted to an A* Rank Conference</em></span>.</span>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Leveraging LLMs for Mental Health Advice Generation in Low-Resource Bangla Language</span>.</span>

## 5. Image-to-Text Generation

<p style="text-align:justify; color:black; font-family:Georgia"> 
The application of image-to-text generation in agriculture, particularly for disease diagnosis and recommendations, represents a rapidly developing field with immense potential. As the agricultural sector grapples with increasing challenges from plant diseases, leveraging advanced technology to enhance disease management practices is becoming essential. Large vision models such as LLaMA 1.5, InstructBLIP, GPT-4, and Fuyu are uniquely equipped to address these challenges due to their capabilities in processing and understanding complex visual information. These sophisticated models excel at analyzing and interpreting various visual features within images, discerning critical aspects like color variations, texture patterns, and structural shapes. This ability is essential for accurately identifying and diagnosing plant diseases, which often present specific visual symptoms. Beyond image analysis, these models generate coherent and informative textual descriptions based on visual input. When presented with images of diseased plants, they produce detailed narratives outlining the disease, describing its symptoms, and suggesting appropriate treatments. This process transforms visual data into actionable insights for farmers and agricultural specialists. 
</p>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Image-to-Text Generation for Agricultural Disease Diagnosis and Recommendations</span>.</span>

## 6. Explainable AI in Medical Image Analysis

<p style="text-align:justify; color:black; font-family:Georgia"> 
Medical image analysis is important for diagnosing and treating diseases, especially in eye care and cancer treatment. This field uses advanced machine learning methods, especially convolutional neural networks (CNNs), to study medical images. However, these models can be complex and hard to understand, which is a problem in clinical settings where knowing how decisions are made is crucial. To address this, explainable AI techniques are developed to clarify how CNNs classify different eye conditions from retinal images. Additionally, new segmentation models are introduced to accurately identify blood vessels in these images, which helps doctors assess vascular health. By combining classification and segmentation, eye doctors can make better decisions and provide timely care, ultimately improving patient outcomes. Segmentation is vital in medical imaging as it helps separate images into important parts, allowing healthcare providers to focus on specific features for accurate diagnosis and treatment. For lung and colon cancer detection, explainable AI techniques also enhance understanding by showing how certain image features affect predictions, which helps build trust among healthcare professionals and improves communication with patients about their diagnoses.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah. <span style="color:green;"><em> Under Review in Journal of Visual Communication and Image Representation (Q1)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.07338)</span>   

+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</span>. Mukaffi Bin Moin, Fatema Tuj Johora Faria, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam. <span style="color:green;"><em>Accepted in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.04610)</span>  

## 7. Machine Translation and Regional Dialect Detection

<p style="text-align:justify; color:black; font-family:Georgia"> 
Machine Translation (MT) is a part of natural language processing (NLP) that helps automatically translate text from one language to another. A major improvement in MT comes from Transformer models, which make translations faster and better. These models can read entire sentences at once, making them great for translating complex sentences. Text classification is another important NLP task that involves assigning predefined categories or labels to text data. However, many languages, especially low-resource languages, lack enough linguistic resources like annotated corpora and dictionaries to develop advanced NLP applications. This is often the case for languages spoken by marginalized communities. In Bangladesh, there are many regional dialects of Bangla that can differ greatly in vocabulary, pronunciation, and syntax. For instance, the daily conversational dialects in regions like Sylhet, Noakhali, and Mymensingh have unique expressions and phrases that are distinct from Standard Bangla. Dialect Machine Translation (DMT) aims to translate these regional dialects into Standard Bangla, the official language, but it faces challenges like the wide variability in dialects, which can create confusion in translation models. Additionally, there is often a scarcity of datasets specifically designed for dialect translations, making it hard to create strong models. Dialects also carry cultural meanings that may not always translate well, so it’s essential to handle local expressions carefully. 

</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad. <span style="color:green;"><em> Under Review in Neural Computing and Applications (Q1)</em></span>. [[PDF]](https://arxiv.org/pdf/2311.11142)</span>  


## 8. Natural Language Processing for Medical Question Answering

<p style="text-align:justify; color:black; font-family:Georgia">
Developing a question-answering (QA) system using Natural Language Processing (NLP) in low-resource languages like Bangla, especially in the medical field, presents both challenges and opportunities. While the core objectives remain similar—processing and understanding medical literature, clinical notes, and patient records to accurately respond to queries—building such systems in low-resource settings requires adapting to the limitations of available data and resources. In the context of Bangla, the system must be capable of extracting relevant information from medical texts or generating meaningful responses, even though large datasets, pre-trained models, and medical resources in Bangla are scarce compared to high-resource languages. The system needs to handle the complexities of understanding medical terminology and relationships between medical concepts in Bangla, while also incorporating code-switching for English medical terms. It can provide clinical decision support to healthcare professionals, enabling them to make informed decisions, especially in rural areas, and offer patient education by answering questions in Bangla, thereby improving healthcare accessibility. The system would need to handle various question types such as factoid, confirmation, list, casual, temporal, and even unanswerable questions. 
</p>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaMedQA: A Comprehensive Benchmark Dataset for Medical Question Answering</span>.</span>

## 9. Generative Adversarial Networks in Agriculture

<p style="text-align:justify; color:black; font-family:Georgia">
Generative Adversarial Networks (GANs) have revolutionized the field of machine learning, offering groundbreaking applications across various industries, particularly in agriculture. One significant area of focus is the detection of potato diseases, where gathering images of infected crops can be challenging due to limited access to diseased samples at different stages. GANs provide an innovative solution by generating synthetic data that mimics real-world conditions, significantly enhancing the ability to train and improve machine learning models. They can generate a wide variety of diseased potato images, increasing the size and diversity of training datasets, which enables models to better generalize and identify potato diseases. By producing realistic images reflecting natural disease patterns, GANs assist researchers and farmers in developing more accurate diagnostic tools. Moreover, explainable AI is pivotal in building trust with agricultural professionals by offering transparency into the decision-making processes of AI models; providing visual explanations for disease classification fosters confidence among farmers and researchers reliant on these technologies. Instance segmentation in agriculture, particularly for tasks like potato disease detection, involves identifying and delineating individual potato plants or specific infected areas within each plant at the pixel level, allowing for a detailed analysis of disease severity and spread by accurately segmenting diseased regions from healthy parts of the plant. 
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</span>. Mohammad Shafiul Alam<b>*</b>, Fatema Tuj Johora Faria<b>*</b>, Mukaffi Bin Moin<b>*</b>, Ahmed Al Wase, Md. Rabius Sani and Khan Md Hasib. <span style="color:green;"><em> Under Review in Journal of Intelligent Information Systems (Q2)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.07332)</span>   


## 10. Computer Vision Applications in Agriculture

<p style="text-align:justify; color:black; font-family:Georgia">
Disease classification in agriculture is crucial for modern farming, particularly concerning food security and sustainable practices, as the increasing global population drives the demand for high-yield, healthy crops. Disease outbreaks can severely impact crop production, resulting in financial losses for farmers and threatening food supply chains; thus, timely and accurate classification of plant diseases is essential for implementing effective management strategies, reducing losses, and ensuring the sustainability of agricultural systems. For example, potatoes, a staple food crop and significant source of carbohydrates, are susceptible to various diseases such as Black Scurf and Common Scab. Advancements in machine learning and deep learning, particularly through computer vision, have made convolutional neural networks (CNNs) powerful tools for image classification tasks, including disease detection in crops. CNNs excel at analyzing visual data, automatically learning spatial hierarchies of features from images; thus, for potato disease classification, a CNN can be trained on labeled images of healthy and diseased potatoes, identifying patterns associated with each disease for accurate classification. Hybrid models integrating Long Short-Term Memory (LSTM), Gated Recurrent Units (GRU), and Bidirectional LSTM (Bi-LSTM) architectures enhance classification by capturing spatial and temporal dependencies within the data.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam. <span style="color:green;"><em> 2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</em></span>. [[Paper]](https://ieeexplore.ieee.org/document/10099162)</span>  