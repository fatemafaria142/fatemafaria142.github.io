---
layout: archive
permalink: /work/
title: ""
---

## Research Experience 
<span style="font-family: 'Segoe UI', sans-serif; color: black;">
<span style="color: #008080; font-size: 1.3em; font-weight: bold;">Remote Research Assistant</span><br/>
<a href="https://www.researchgate.net/profile/Laith-Baniata" style="color: #008080; text-decoration: none;">Supervisor: Dr. Laith H. Baniata</a><br/>
<a href="https://www.gachon.ac.kr/sites/eng/index.do/" style="color: #008080; text-decoration: none;">Research Professor, Gachon University, South Korea</a><br/>
<a href="mailto:laith@gachon.ac.kr" style="color: #008080; text-decoration: none;">Email: laith@gachon.ac.kr</a><br/>
<span style="color: #008080; font-style: italic;">June 2024 - Present</span>
<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
  <div style="background-color: white; border-left: 5px solid #008080; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #d1f5f5; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #006666; font-size: 1em; font-weight: bold;">1. Towards Robust Chain-of-Thought Prompting with Self-Consistency for Remote Sensing VQA: An Empirical Study Across Large Multimodal Models</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #008080; font-size: 0.9em;">■</span>
        Developed Zero-GeoVision, a task-specific framework that applies zero-shot prompting to draw direct answers from the pretrained knowledge of four large multimodal models (GPT-4o, Grok 3, Gemini 2.5 Pro, and Claude 3.7 Sonnet), serving as a baseline for Remote Sensing Visual Question Answering (RSVQA).
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #008080; font-size: 0.9em;">■</span>
        Designed CoT-GeoReason, a framework that employs chain-of-thought prompting and guides models step by step through feature detection, spatial analysis, and answer synthesis to improve reasoning transparency, using a structured prompt template that explicitly defines the reasoning steps, expected outputs, and intermediate checks for each question.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #008080; font-size: 0.9em;">■</span>
        Implemented Self-GeoSense, a framework that extends CoT-GeoReason by incorporating self-consistency, generating five independent reasoning chains per question and combining their outputs through majority voting to improve robustness against ambiguous or complex inputs.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #008080; font-size: 0.9em;">■</span>
        Proposed Geo-Judge, a two-stage evaluation framework where in Stage 1 (a GPT-4o-mini-based LMM judge assesses reasoning coherence and answer correctness) and in Stage 2 (blinded human experts independently review the LMM's reasoning and answers to provide unbiased validation through careful reassessment).
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #008080; font-size: 0.9em;">■</span>
        Spearheaded the research, supported by the National Research Foundation of Korea 
        <b><span style="background-color: #e0f7f7; padding: 0 8px 0 12px; color: #008080; display: inline;">
        (Grant No. NRF-2022R1A2C1005316) </span></b>, funded by the Ministry of Science and ICT.
      </li>
    </ul>
  </div>
  <div style="background-color: white; border-left: 5px solid #16a34a; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #dcfce7; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #15803d; font-size: 1em; font-weight: bold;">2. Analyzing Diagnostic Reasoning of Vision-Language Models via Zero-Shot Chain-of-Thought Prompting in Medical Visual Question Answering</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #16a34a; font-size: 0.9em;">■</span>
        Developed and evaluated a zero-shot learning (ZSL) framework for medical visual question answering (MedVQA), enabling large vision–language models (Gemini 2.5 Pro, Claude 3.5, Sonnet, and GPT-4o Mini) to answer diagnostic questions without fine-tuning on the PMC-VQA benchmark.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #16a34a; font-size: 0.9em;">■</span>
        Implemented a zero-shot chain-of-thought (Zero-CoT) reasoning approach to guide models through step-by-step logical reasoning, improving interpretability and prediction accuracy in complex medical image analysis tasks such as X-rays and MRI scans.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #16a34a; font-size: 0.9em;">■</span>
        Investigated research supported by the National Institute of Health (NIH) project in South Korea (Project No. 2024ER080300), funded by the Basic Science Research Program through the National Research Foundation of Korea (NRF) under the grant <b><span style="background-color: #dcfce7; padding: 0 8px 0 12px; color: #16a34a; display: inline;">NRF-2022R1A2C1005316</span></b>.
      </li>
    </ul>
  </div>
  <div style="background-color: white; border-left: 5px solid #dc2626; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #fee2e2; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #991b1b; font-size: 1em; font-weight: bold;">3. Investigating the Predominance of Large Language Models in Low-Resource Bangla Language Over Transformer Models for Hate Speech Detection: A Comparative Analysis</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #dc2626; font-size: 0.9em;">■</span>
        Applied Zero-Shot Learning to large language models (GPT-3.5 Turbo and Gemini 1.5 Pro) to differentiate harmful speech from benign expressions using multiple low-resource Bengali hate speech datasets.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #dc2626; font-size: 0.9em;">■</span>
        Integrated few-shot prompting approaches (5-shot, 10-shot, and 15-shot) in Bangla hate speech detection involve providing the model with a limited number of example texts labeled as hate speech or non-hate speech to guide its predictions on subsequent texts.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #dc2626; font-size: 0.9em;">■</span>
        Conducted research supported by the Basic Science Research Program of the National Research Foundation of Korea (NRF), funded by the Ministry of Science and ICT under the grant <b><span style="background-color: #fee2e2; padding: 0 8px 0 12px; color: #dc2626; display: inline;">NRF-2022R1A2C1005316</span></b>.
      </li>
    </ul>
  </div>
  <div style="background-color: white; border-left: 5px solid #9333ea; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #f3e8ff; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
      <span style="color: #7e22ce; font-size: 1em; font-weight: bold;">4. SentimentFormer: A Transformer-Based Multi-Modal Fusion Framework for Enhanced Sentiment Analysis of Memes in the Under-Resourced Bangla Language</span>
    </div>
    <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #9333ea; font-size: 0.9em;">■</span>
        Implemented SentimentTextFormer, a text-based model built upon mBERT, fine-tuned to capture nuanced linguistic features and extract sentiment-related insights from Bengali text.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #9333ea; font-size: 0.9em;">■</span>
        Developed SentimentImageFormer, an image-based transformer model using Swin Transformer with hierarchical windowed attention to classify sentiment from visual content.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #9333ea; font-size: 0.9em;">■</span>
        Designed SentimentFormer, a hybrid model that integrates both text and image modalities by fusing SwiftFormer's visual features with mBERT's textual embeddings at an intermediate layer, enhancing cross-modal interactions through intermediate fusion.
      </li>
      <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
        <span style="position: absolute; left: 0; color: #9333ea; font-size: 0.9em;">■</span>
        Carried out research supported by the Basic Science Research Program of the National Research Foundation of Korea (NRF), funded by the Ministry of Science and ICT under the grant <b><span style="background-color: #f3e8ff; padding: 0 8px 0 12px; color: #9333ea; display: inline;">NRF-2022R1A2C1005316</span></b>.
      </li>
    </ul>
  </div>
</div>


## Professional Experience

<span style="font-family: 'Segoe UI', sans-serif; color: black;">
  <span style="color: #065f46; font-size: 1.3em; font-weight: bold;">AI Engineer II</span><br/>
  <a href="https://www.linkedin.com/company/asthait/" style="color: #065f46; text-decoration: none;" target="_blank">Astha.IT</a><br/>
  <span style="color: #065f46; font-style: italic;">November 2025 - Present</span>
 
  <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
    <div style="background-color: white; border-left: 5px solid #065f46; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #d1fae5; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
        <span style="color: #065f46; font-size: 1em; font-weight: bold;">Next-Gen AI Automation Platform: AIT 360</span> 
      </div>
      <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #065f46; font-size: 0.9em;">■</span>
          Developing an AI-powered tool to help HR teams analyze candidate resumes, assign rubric scores to rank and compare candidates, highlight strengths and gaps, and provide actionable suggestions for improvement.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #065f46; font-size: 0.9em;">■</span>
          Currently working on streamlined automation across departments to automate repetitive and manual tasks in all company departments, significantly reducing human intervention and operational effort.
        </li>
         <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <b><span style="background-color: #d1fae5; padding: 0 8px 0 12px; color: #065f46; display: inline;">Tech Stack Used:</span></b> Python, LangGraph, LangChain, OpenAI, Elastic Container Registry (ECR), Elastic Container Service (ECS), FastAPI, React, TypeScript
        </li>
      </ul>
    </div>
  </div>
</span>


<span style="font-family: 'Segoe UI', sans-serif; color: black;">
  <span style="color: #4f46e5; font-size: 1.3em; font-weight: bold;">AI Engineer II</span><br/>
  <a href="https://www.linkedin.com/company/asthait/" style="color: #4f46e5; text-decoration: none;" target="_blank">Astha.IT</a><br/>
  <span style="color: #4f46e5; font-style: italic;">November 2025 - Present</span>
 
  <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
    <div style="background-color: white; border-left: 5px solid #4f46e5; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #e0e7ff; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
        <span style="color: #3730a3; font-size: 1em; font-weight: bold;">Next-Gen AI Automation Platform: AIT 360</span> 
      </div>
      <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Developing an AI-powered tool to help HR teams analyze candidate resumes, assign rubric scores to rank and compare candidates, highlight strengths and gaps, and provide actionable suggestions for improvement.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Currently working on streamlined automation across departments to automate repetitive and manual tasks in all company departments, significantly reducing human intervention and operational effort.
        </li>
         <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <b><span style="background-color: #e0e7ff; padding: 0 8px 0 12px; color: #4f46e5; display: inline;">Tech Stack Used:</span></b> Python, LangGraph, LangChain, OpenAI, AWS, FastAPI, React, TypeScript
        </li>
      </ul>
    </div>
  </div>


<span style="font-family: 'Segoe UI', sans-serif; color: black;">
  <span style="color: #4f46e5; font-size: 1.3em; font-weight: bold;">Senior Application Developer</span><br/>
  <a href="https://www.linkedin.com/company/dexiansolutions/" style="color: #4f46e5; text-decoration: none;" target="_blank">Dexian (Bangladesh) Limited.</a><br/>
  <span style="color: #4f46e5; font-style: italic;">July 2025 - October 2025</span>
 
  <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
    <div style="background-color: white; border-left: 5px solid #4f46e5; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #e0e7ff; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
        <span style="color: #3730a3; font-size: 1em; font-weight: bold;">Conversational AI Agent Platform for Large-Scale Document Interaction: ShareFlow Agent</span> 
      </div>
      <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Constructed and deployed a ReAct-based Agentic RAG system integrated with Microsoft SharePoint and user-uploaded document support, incorporating custom guardrails to enable users to build personalized agents for retrieving information from e-learning training materials, recruitment processes, and internal financial document resource pages.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Orchestrated a Multimodal OCR Agent with a custom toolset for autonomous selection and execution of text extraction, table parsing, and diagram interpretation across diverse unstructured sources (scanned PDFs, images, DOCX, flowcharts, tables, diagrams), including resilient fallback strategies and controlled retry mechanisms with rate limiting for robust, fault-tolerant, and accurate information retrieval.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Implemented session-based chat ensuring separate user-agent conversations with full history retention for context-aware interactions and a reset option to start anew.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Enabled users to input up to six leading questions to facilitate interactions, and automatically generated at least three questions based on the agent's instructions and description if the user provided none or fewer.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Integrated an update feature enabling users to modify existing agents by adding new files, editing leading questions, revising instructions and description, and deleting existing files from the agent's memory.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Designed an agent-sharing functionality enabling users to share agents publicly with all app users, with individual users, or privately with groups, with automated email notifications to keep collaborators informed.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Created a user interface to display all agents owned or shared with the user, with a feature to delete an entire agent along with its knowledge base and associated data from the database at any time.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Developed an Action Tracking system to log API usage, capturing trigger events, execution time, input queries, and generated responses in the database for monitoring and analytics.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Took leadership of the project while guiding and supporting junior application developers, promoting their technical growth and upholding high standards of code quality and overall team output.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Achieved approximately 63% cost reduction by optimizing custom agent usage for 80 Sales Managers handling 50+ interactions per day, replacing the existing SharePoint Agent.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <span style="position: absolute; left: 0; color: #4f46e5; font-size: 0.9em;">■</span>
          Optimized RAG query search accuracy by 96%, automating document content extraction and significantly reducing manual effort.
        </li>
        <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
          <b><span style="background-color: #e0e7ff; padding: 0 8px 0 12px; color: #4f46e5; display: inline;">Tech Stack Used:</span></b> Python, LlamaIndex, Azure OpenAI (GPT-4.1, text-embedding-3-large), Azure SQL, Prompt Engineering, Azure Functions, AlloyDB for PostgreSQL, Azure App Service, OpenCV, React, FastAPI,  Ragas
        </li>
      </ul>
    </div>
  </div>



<span style="color: #4b0082; font-size: 1.3em; font-weight: bold;">Application Developer</span><br/>
<a href="https://www.linkedin.com/company/dexiansolutions/" style="color: #4b0082; text-decoration: none;" target="_blank">Dexian (Bangladesh) Limited.</a><br/>
<span style="color: #4b0082; font-style: italic;">May 2024 - July 2025</span>
<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
  <div style="background-color: white; border-left: 5px solid #4b0082; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
 <div style="background-color: #e0e7ff; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
  <span style="color: #2e1065; font-size: 1em; font-weight: bold;">Organizational Intelligence Role Placement System: Org Info</span>
</div>
<ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Implemented a multimodal agent to extract organizational hierarchy from organograms using tree-of-thought (ToT) prompting, incorporating multipath reasoning and Breadth-First Search (BFS) to ensure accurate role placement, and storing the hierarchy in a relational database after cross-checking with existing data and mapping it to Bullhorn records.
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Designed an LLM-based agent that converts natural language queries into optimized SQL (text-to-SQL) using chain-of-thought (CoT) with self-consistency prompting, retrieves relevant organizational data, and integrates the results into the OrgChart front-end framework for hierarchical visualization.
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Engineered a dynamic LLM-based agentic RAG-guided chat interface called "OrgInfo Assistant" that allowed users to interact with specific organizational hierarchies using predefined query types, specialized roles, and goals, where user queries were first converted to SQL (text-to-SQL), executed on a temporary organization-specific database, and the retrieved results were converted to natural language (SQL-to-text).
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Developed a 7-day summarization of organizational activities by extracting relevant notes on placements, submissions, and communication logs from the Bullhorn database for a targeted organization.
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Set up scheduled jobs that fetched organizational data from the Bullhorn database to a SQL database every 7 days to update and add new data.
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <span style="position: absolute; left: 0; color: #4b0082; font-size: 0.9em;">■</span>
    Deployed and optimized organizational hierarchy search for Account Managers by eliminating full Bullhorn database queries, reducing search time by 92%, and enabling faster access to relevant data.
  </li>
  <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
    <b><span style="background-color: #e0e7ff; padding: 0 8px 0 12px; color: #4b0082; display: inline;">Tech Stack Used:</span></b> Python, LangChain, LangGraph, Azure OpenAI (GPT-4.1, GPT-4o-Mini, text-embedding-3-small), Prompt Engineering, Azure App Service, Azure SQL, OpenCV,  React, FastAPI, Docker
  </li>
</ul>

  </div>
  <div style="background-color: white; border-left: 5px solid #15803d; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #dcfce7; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
    <span style="color: #14532d; font-size: 1em; font-weight: bold;">Next-Gen Proposal Insights Automation Engine: RFPMatcher</span>
  </div>
  <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Architected a RAG solution utilizing a temporary vector database and Chain-of-Thought prompting with 12 specialized analytical prompts to systematically extract key information, such as client details, scope of work, deliverables, and submission timelines, from Request for Proposal (RFP) documents.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Orchestrated a comprehensive master database by processing historical RFP responses using 38+ predefined questions (23 deliverable-focused and 15 experience-based), incorporating metadata such as detailed generated answers, chunk summaries, manual classification of RFP responses (winning or losing), and question categories (Deliverables or Experience), while storing vector embeddings to enable semantic search capabilities.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Designed a Past Experience Matcher system that analyzes new RFP documents by dynamically extracting three key requirements (core client needs or expectations), generates both binary questions (Yes/No — whether the company has handled similar situations before) and descriptive questions (open-ended questions to explore how the company addressed similar challenges or implemented solutions) for each chunk, then queries a master database, performs semantic similarity matching to identify relevant past experiences, and returns comprehensive, context-rich responses with filename references for verification.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Developed a Table of Contents (TOC) generation pipeline that analyzes extracted RFP key information against predefined section libraries (10 standard and 12 non-standard sections), employing GPT-4 to intelligently select and prioritize relevant sections based on project requirements.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Implemented a section-based conversational AI platform that generates initial content for each TOC section using extracted key information and past experience data, enables iterative refinement through targeted chat interactions where users can request modifications, maintains conversation history in CouchDB, and exports the final refined content to professionally formatted Word documents for proposal submission.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Facilitated the sharing of extracted key information, and ensured that uploaded documents are saved to a specific SharePoint drive and made available to other users via automated email notifications, keeping the team informed and aligned for easy access and reference.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #15803d; font-size: 0.9em;">■</span>
      Reduced manual review time by 75% and accelerated decision-making through automated extraction and predictive insights, enabling <i>Proposal Managers</i> to focus on strategic bid development.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <b><span style="background-color: #dcfce7; padding: 0 8px 0 12px; color: #15803d; display: inline;">Tech Stack Used:</span></b> Python, LlamaIndex, Azure OpenAI (GPT-3.5 Turbo, GPT-4, text-embedding-3-large), Prompt Engineering, AlloyDB for PostgreSQL, CouchDB, Azure App Service, React, FastAPI, Ragas, Docker
    </li>
  </ul>
</div>

<div style="background-color: white; border-left: 5px solid #b45309; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #fef3c7; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
    <span style="color: #92400e; font-size: 1em; font-weight: bold;">Automated Presentation Insights Generator: CaseAligner</span>
  </div>
  <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Designed and deployed an LLM-powered application that repurposes existing client-facing PowerPoint presentations for case studies, leveraging chain-of-thought prompting to transform them into new practice areas and industries, enabling Sales Managers to rapidly generate domain-specific demo presentations.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Implemented an interactive chat interface linked to separated slides, allowing users to query and modify specific slide content, with session-wise conversation history stored for reference.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Built an automated summarization pipeline to extract and structure key insights from case studies (filtered by user-specified industry and practice area), including client details, project objectives, technology stacks, challenges, benefits, implementation steps, timelines, and outcomes, and exported the summaries into downloadable Word documents for quick reference.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Developed comprehensive search functionality to locate information across all generated case studies, including references to specific slide numbers for precise navigation.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Architected an admin panel enabling authorized users to download existing presentations from the knowledge base, modify them as needed, and re-upload them to update the knowledge repository.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Added export functionality to download slides in the company's official presentation template.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #b45309; font-size: 0.9em;">■</span>
      Significantly accelerated demo preparation by reducing slide crafting time by approximately 90%, enabling Salespersons to focus more on client engagement and closing deals.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <b><span style="background-color: #fef3c7; padding: 0 8px 0 12px; color: #b45309; display: inline;">Tech Stack Used:</span></b> Python, LlamaIndex, Azure OpenAI (GPT-4o-Mini), React, FastAPI, Azure App Service
    </li>
  </ul>
</div>

<div style="background-color: white; border-left: 5px solid #fc3297; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #ffe6f0; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
    <span style="color: #e6007e; font-size: 1em; font-weight: bold;">Smart Recruitment Analytics Tool: AgentDexi</span>
  </div>
  <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #fc3297; font-size: 0.9em;">■</span>
      Designed a RAG system to identify technological trends and track the top 20 most in-demand skills by extracting information from job descriptions scraped from external company postings.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #fc3297; font-size: 0.9em;">■</span>
      Developed an automated data analysis pipeline with interactive graphs and charts to compare company-wise data, enabling <i>Technical Recruiters</i> to make data-driven talent acquisition decisions.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #fc3297; font-size: 0.9em;">■</span>
      Orchestrated a web Research Agent that autonomously performs web searches using the Serper Google Search API and Tavily Search API to extract executive and company information from diverse sources, retrieving the top 10 ranked URLs with contextual preview summaries and filtering results based on relevance to support downstream data extraction and analysis tasks.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #fc3297; font-size: 0.9em;">■</span>
      Implemented a Website Scraping Agent utilizing ScraperAPI to extract targeted data from discovered URLs, processing raw HTML/text content into structured business data, and built a custom RAG pipeline that filters contextually relevant information and generates structured outputs, including tables, organizational reports, and business intelligence summaries.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <b><span style="background-color: #ffe6f0; padding: 0 8px 0 12px; color: #fc3297; display: inline;">Tech Stack Used:</span></b> Python, LangChain, Langfuse, CrewAI, Azure OpenAI (GPT-4o, text-embedding-3-snall), ChromaDB, JobSpy, React, FastAPI
    </li>
  </ul>
</div>

<div style="background-color: white; border-left: 5px solid #1e40af; border-radius: 10px; padding: 25px; flex: 1 1 100%; max-width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
    <span style="color: #1e3a8a; font-size: 1em; font-weight: bold;">Personalized Assistant for Internal Knowledge Discovery: KnowledgeEngine</span>
  </div>
  <ul style="font-family: 'Segoe UI', sans-serif; color: black; margin-top: 15px;">
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Orchestrated an LLM-based RAG system employing chain-of-thought reasoning to identify relevant internal legal documents across multiple sources and generate accurate, context-aware answers by synthesizing retrieved information.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Engineered semantic chunking of documents by storing 3–4 QA pairs with summaries per chunk, enabling targeted searches within relevant sections, reducing search space by 60%, speeding up retrieval from long documents, and improving answer precision by 95%.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Managed a session-based chat interface that delivers responses with precise document page references and maintains conversation history, including reset options.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Generated suggestive questions from user-uploaded documents to guide users and help them explore related information effectively.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Developed a user interface enabling dynamic management of the RAG knowledge base, allowing users to delete or update documents in real time.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <span style="position: absolute; left: 0; color: #1e40af; font-size: 0.9em;">■</span>
      Applied a set of evaluation metrics (Context Precision, Context Recall, Response Relevancy, Faithfulness, and Factual Correctness) to measure overall RAG application performance on custom-created gold-standard datasets for key information extraction, for assessing retrieval accuracy and response quality.
    </li>
    <li style="margin-bottom: 12px; list-style-type: none; position: relative; padding-left: 25px;">
      <b><span style="background-color: #dbeafe; padding: 0 8px 0 12px; color: #1e40af; display: inline;">Tech Stack Used:</span></b> Python, LangChain, Azure OpenAI (GPT-4o-Mini, text-embedding-3-small), AlloyDB for PostgreSQL, Azure App Service, React, FastAPI, Ragas, Docker
    </li>
  </ul>
</div>
