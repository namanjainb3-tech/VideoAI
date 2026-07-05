<div align="center">

# 🎬 VideoAI

> **AI-Powered Video Editing Platform with an Integrated AI Assistant**

::: {align="center"}
![Python](https://img.shields.io/badge/Python-3.11-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Flask](https://img.shields.io/badge/Flask-3.1-black)
![RunPod](https://img.shields.io/badge/Backend-RunPod-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)
![Whisper](https://img.shields.io/badge/OpenAI-Whisper-purple)
![Groq](https://img.shields.io/badge/Groq-LLM-red)

### Transform raw videos into creator-ready content using AI.
:::

------------------------------------------------------------------------

# 🚀 Live Demo

**Frontend:** https://YOUR-VERCEL-URL.vercel.app

**Backend:** Hosted on RunPod GPU

------------------------------------------------------------------------

# 📖 Overview

VideoAI is a full-stack AI-powered creator platform that automates
tedious editing workflows.

Instead of moving between multiple applications, upload your video once
and let VideoAI automatically:

-   🎥 Blur backgrounds with AI
-   🎙 Generate speech transcription
-   💬 Create synchronized captions
-   🤖 Review captions using Groq LLM
-   🎬 Merge branded intro videos
-   📥 Export the final video
-   🧠 Chat with **Kitu**, the built-in AI assistant

Inspired by creator workflows found in tools like Canva, CapCut, and
Descript, VideoAI focuses on automating repetitive editing tasks while
keeping creators in one streamlined workflow.

------------------------------------------------------------------------

# 🤖 Meet Kitu

Kitu is VideoAI's integrated conversational AI assistant.

It helps users without leaving the application.

### Kitu can help with

-   Video editing guidance
-   Caption improvement suggestions
-   Platform walkthroughs
-   Creator productivity tips
-   General AI assistance
-   Workflow troubleshooting

------------------------------------------------------------------------

# ✨ Features

-   AI Background Blur (Robust Video Matting)
-   Whisper Speech-to-Text
-   Dynamic Caption Generation
-   Word-by-Word Caption Highlighting
-   AI Caption Review
-   Kitu AI Assistant
-   Intro Video Merge
-   Live Processing Status
-   Final Video Export
-   Modern Responsive UI

------------------------------------------------------------------------

# 🌟 Why VideoAI?

  Capability                VideoAI   Canva     CapCut
  ------------------------- --------- --------- ---------
  AI Background Blur        ✅        Premium   Limited
  Automatic Captions        ✅        Premium   ✅
  Word Highlight Captions   ✅        Premium   Limited
  AI Caption Review         ✅        ❌        ❌
  Intro Merge               ✅        Manual    Manual
  Integrated AI Assistant   ✅        ❌        ❌

> VideoAI does not aim to replace these tools entirely. Instead, it
> automates several creator workflows that often require multiple
> applications or paid features.

------------------------------------------------------------------------

# 📸 Screenshots

Create a folder named:

``` text
screenshots/
├── hero.png
├── landing.png
├── workspace.png
├── upload.png
├── processing.png
├── review.png
├── kitu.png
├── final.png
├── architecture.png
```

Then embed them:

``` md
![](screenshots/hero.png)
```

------------------------------------------------------------------------

# 🎥 Workflow

``` text
Upload Video
      │
      ▼
AI Background Blur
      │
      ▼
Speech Transcription
      │
      ▼
Caption Generation
      │
      ▼
AI Caption Review
      │
      ▼
Intro Merge
      │
      ▼
Rendering
      │
      ▼
Download

Need help?
      │
      ▼
Ask Kitu 🤖
```

------------------------------------------------------------------------

# 🏗 Architecture

``` text
React + Vite
      │
 Axios
      │
 Flask REST API
      │
 ┌─────────────────────────────┐
 │ Background Blur (RVM)       │
 │ Whisper Transcription       │
 │ Caption Generator           │
 │ Groq Review Engine          │
 │ Kitu Chat Engine            │
 │ FFmpeg Renderer             │
 └─────────────────────────────┘
      │
 Final MP4
```

------------------------------------------------------------------------

# ⚙️ Tech Stack

## Frontend

-   React 19
-   Vite
-   Tailwind CSS
-   Axios
-   Framer Motion
-   React Router

## Backend

-   Flask
-   Flask-CORS
-   Python

## AI

-   Robust Video Matting
-   OpenAI Whisper
-   Groq Llama 3.3
-   OpenCV

## Video Processing

-   FFmpeg

## Deployment

-   Frontend → Vercel
-   Backend → RunPod GPU

------------------------------------------------------------------------

# 📂 Project Structure

``` text
VideoAI
│
├── app
│   ├── config
│   ├── engines
│   ├── models
│   ├── pipeline
│   ├── preprocessing
│   ├── qa
│   ├── rendering
│   ├── review
│   ├── routes
│   ├── services
│   ├── storage
│   ├── utils
│   └── factory.py
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── assets
├── fonts
├── jobs
├── output
├── requirements.txt
├── main.py
└── README.md
```

------------------------------------------------------------------------

# 🚀 Local Installation

``` bash
git clone https://github.com/namanjainb3-tech/VideoAI.git
cd VideoAI
```

## Backend

``` bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux/macOS
source .venv/bin/activate

pip install -r requirements.txt
```

Create `.env`

``` env
VIDEO_GROQ_API_KEY=your_video_key
KITU_GROQ_API_KEY=your_kitu_key
```

Run

``` bash
python main.py
```

## Frontend

``` bash
cd frontend

npm install

npm run dev
```

------------------------------------------------------------------------

# 🌍 Production Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **RunPod GPU**

Frontend environment:

``` env
VITE_API_URL=https://your-runpod-endpoint.proxy.runpod.net
```

------------------------------------------------------------------------

# 🔮 Roadmap

-   AI Background Replacement
-   AI Thumbnail Generation
-   Voice Cloning
-   Multi-language Captions
-   Multiple Caption Themes
-   Authentication
-   Cloud Storage
-   Team Collaboration
-   Batch Rendering
-   Mobile App

------------------------------------------------------------------------

# 🤝 Contributing

``` bash
git checkout -b feature/my-feature

git commit -m "Add amazing feature"

git push origin feature/my-feature
```

Open a Pull Request.

------------------------------------------------------------------------

# 📄 License

Licensed under the MIT License.

------------------------------------------------------------------------

# 👨‍💻 Author

## Naman Jain

GitHub: https://github.com/namanjainb3-tech

LinkedIn: *(Add your profile)*

------------------------------------------------------------------------

::: {align="center"}
## ⭐ If you found this project useful, please star the repository!

Built with ❤️ by **Naman Jain**
:::

