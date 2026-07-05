<div align="center">

# 🎬 VideoAI

### AI-Powered Automatic Video Editing Platform

Transform raw videos into creator-ready content with AI-powered background blur, smart subtitles, caption quality review, intro merging, and export—all in a single workflow.

<p>

![Python](https://img.shields.io/badge/Python-3.11-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Flask](https://img.shields.io/badge/Flask-3.1-black)
![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-green)
![Whisper](https://img.shields.io/badge/OpenAI-Whisper-purple)
![Groq](https://img.shields.io/badge/Groq-LLM-red)
![RunPod](https://img.shields.io/badge/Backend-RunPod-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)

</p>

<h3>
✨ Built for Content Creators, Educators & Social Media Professionals ✨
</h3>

</div>

---

# 🚀 Live Demo

### Frontend

https://YOUR-VERCEL-LINK.vercel.app

### Backend

Hosted on **RunPod GPU**

---

# 📖 Overview

VideoAI is an AI-powered video editing platform that automates one of the most repetitive parts of content creation.

Instead of manually switching between multiple editing applications, users upload a video once and the platform automatically:

- 🎥 Blurs the background using AI matting
- 🎙 Generates speech transcription
- 💬 Creates synchronized subtitles
- 🤖 Reviews captions using an LLM
- 🎬 Merges branded intro videos
- 📥 Produces a downloadable final video

The goal is to simplify video editing while maintaining professional-quality output.

---

# 🌟 Why VideoAI?

Many creators rely on multiple paid tools for common editing tasks.

VideoAI brings these capabilities together in one automated pipeline.

### Creator Workflow Comparison

| Feature | VideoAI | Canva | CapCut |
|----------|---------|--------|---------|
| AI Background Blur | ✅ | Premium | Limited |
| Automatic Captions | ✅ | Premium | ✅ |
| Word Highlight Captions | ✅ | Premium | Limited |
| AI Caption Review | ✅ | ❌ | ❌ |
| Intro Video Merge | ✅ | Manual | Manual |
| Automated Pipeline | ✅ | ❌ | ❌ |

> VideoAI focuses on automating repetitive editing tasks, allowing creators to spend more time creating content instead of editing it.

---

# ✨ Features

- 🎥 AI Background Blur
- 🎙 Speech-to-Text (Whisper)
- 💬 Dynamic Caption Generation
- 🟨 Word-by-Word Caption Highlighting
- 🤖 AI Caption Review using Groq LLM
- 🎬 Intro Video Merging
- 📥 Final Video Export
- ⚡ Modern Responsive UI
- 📊 Live Processing Status
- 🔄 End-to-End Automated Workflow

---

# 📸 Screenshots

## Landing Page

![](screenshots/landing.png)

---

## Workspace

![](screenshots/workspace.png)

---

## Upload Pipeline

![](screenshots/upload.png)

---

## Caption Review

![](screenshots/review.png)

---

## Final Export

![](screenshots/final.png)

---

# 🎥 Processing Pipeline

```text
Upload Video
      │
      ▼
Background Blur (RVM)
      │
      ▼
Speech Transcription (Whisper)
      │
      ▼
Caption Generation
      │
      ▼
Caption Quality Review (Groq)
      │
      ▼
Intro Video Merge
      │
      ▼
Video Rendering
      │
      ▼
Download Final Video
```

---

# 🏗 System Architecture

```text
                React + Vite
                     │
                 Axios API
                     │
          Flask REST Backend
                     │
 ┌──────────────────────────────────────┐
 │                                      │
 │  AI Background Blur (RVM)            │
 │  Whisper Speech Recognition          │
 │  Subtitle Generation                 │
 │  Groq LLM Caption Review             │
 │  FFmpeg Rendering                    │
 │  Video Export                        │
 │                                      │
 └──────────────────────────────────────┘
                     │
               Final MP4 Output
```

---

# ⚙ Tech Stack

## Frontend

- React 19
- Vite
- TailwindCSS
- Axios
- Framer Motion
- React Router

---

## Backend

- Flask
- Flask-CORS
- Python

---

## AI & Machine Learning

- Robust Video Matting (RVM)
- OpenAI Whisper
- Groq Llama 3.3 70B
- OpenCV

---

## Video Processing

- FFmpeg

---

## Deployment

Frontend

- Vercel

Backend

- RunPod GPU

---

# 📂 Project Structure

```text
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
├── requirements.txt
├── main.py
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/namanjainb3-tech/VideoAI.git

cd VideoAI
```

---

## Backend Setup

```bash
python -m venv .venv
```

Activate

Windows

```bash
.venv\Scripts\activate
```

Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env`

```env
VIDEO_GROQ_API_KEY=your_video_api_key
KITU_GROQ_API_KEY=your_kitu_api_key
```

Run

```bash
python main.py
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🌐 Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **RunPod GPU**

---

# 🔐 Environment Variables

Backend

```env
VIDEO_GROQ_API_KEY=

KITU_GROQ_API_KEY=
```

Frontend

```env
VITE_API_URL=https://your-runpod-endpoint.proxy.runpod.net
```

---

# 📈 Roadmap

- AI Background Replacement
- Voice Cloning
- AI Thumbnail Generation
- Multiple Caption Themes
- Cloud Storage
- Authentication
- Team Collaboration
- Multi-language Translation
- Video History
- Batch Processing

---

# 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/amazing-feature
```

Commit

```bash
git commit -m "Added amazing feature"
```

Push

```bash
git push origin feature/amazing-feature
```

Open a Pull Request.

---

# 📄 License

Licensed under the MIT License.

---

# 👨‍💻 Author

## Naman Jain

GitHub

https://github.com/namanjainb3-tech

LinkedIn

www.linkedin.com/in/naman-jain123

---

<div align="center">

### ⭐ Star the repository if you found it useful!

Made with ❤️ by **Naman Jain**

</div>
