# 🛡️ UTech CTF Hub

> A reusable Ethical Hacking Learning Platform built for CNS3005 – Ethical Hacking  
> University of Technology, Jamaica | Semester 2, 2026

---

## 📋 Project Overview

**UTech CTF Hub** is a full-stack Capture The Flag (CTF) web platform designed as a reusable teaching and learning tool for the Ethical Hacking course at UTech. It supports multiple challenge categories, a progressive difficulty curve (Beginner → Intermediate → Advanced), interactive quizzes, a Jeopardy-style game board, and an admin panel for easy semester-to-semester reuse.

---

## 👥 Group Members

| Name | Student ID |
|------|------------|
| Jaheim Hall | 2101766 |
| Raliegh Barnett | 2204123 | 
| Jhaheim Jackson | 2300711 |
| Alexandrea Morgan | 2102242 |
| Tiana Brammer | 2207189 |

---

## 🚀 Features

### 🎓 Learn
- Topic cards covering key cybersecurity concepts (e.g., SQL Injection, PCAP Analysis, Cryptography Essentials)
- Each topic includes micro-notes, examples, and self-check questions
- Recommended challenge links per topic

### 🏁 Challenges
- CTF-style challenge dashboard with filters by **Category**, **Difficulty**, and **Points**
- Three difficulty tiers: **Beginner**, **Intermediate**, **Advanced**
- Each challenge includes a scenario prompt, flag submission box, optional hints, and a "What You Learned" section
- Categories: Web Hacking, Cryptography, Reverse Engineering, Network Security, Data Security, Social Engineering Awareness

### 🏆 Scoreboard
- Live leaderboard showing username, total points, and solve count
- Optional badge system (e.g., "Crypto Starter", "Web Warrior")

### 🎮 Activities
- **Jeopardy Board** – Category-based question tiles (100–500 pts) with flag/point rewards
- **Quizzes** – Multiple choice and true/false with instant feedback (minimum 3 quizzes, 10 questions each)
- **Reverse Engineering** – Beginner-friendly crackme challenges with learning notes

### 🔧 Admin Panel
- Add, edit, and delete challenges
- Set difficulty, points, category, flag, and hints
- Enable/disable challenges per week or semester
- Reset scoreboard for a new semester with one click

## 🗃️ Database Schema

| Table | Description |
|-------|-------------|
| `users` | Stores username, hashed password, total points, and role |
| `challenges` | Stores title, category, difficulty, points, description, flag, hint, and active status |
| `solves` | Records which user solved which challenge and when |
| `quizzes` | Stores quiz titles, questions (JSON), and point rewards |

> ⚠️ Flags are stored in plain text in the database. Consider hashing flags for added security in future versions.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | SQLite via `better-sqlite3` |
| Auth | `express-session` + `bcryptjs` |
| Frontend | HTML/CSS/JS (served as static files) |

---

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Steps

```bash
# 1. Clone the repository
git clone <https://github.com/Travanarrie/Ethical-Hacking-group-work.git>
cd ctfhub

# 2. Install dependencies
npm install

# 3. Initialize the database
node database/db.js

# 4. Start the server
node server.js
```

The app will be running at: **http://localhost:3000**

---

## 📡 API Routes

### Auth — `/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Log in |
| POST | `/auth/logout` | Log out |
| GET | `/auth/me` | Get current session user |

### Challenges — `/challenges`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/challenges` | Get all active challenges |
| GET | `/challenges/:id` | Get a single challenge (login required) |
| POST | `/challenges/:id/submit` | Submit a flag (login required) |

### Scoreboard — `/scoreboard`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/scoreboard` | Get ranked leaderboard |

### Admin — `/admin` *(admin role required)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/challenges` | Get all challenges (including inactive) |
| POST | `/admin/challenge` | Add a new challenge |
| PUT | `/admin/challenge/:id` | Edit a challenge |
| DELETE | `/admin/challenge/:id` | Delete a challenge |
| PATCH | `/admin/challenge/:id/toggle` | Toggle challenge active/inactive |
| POST | `/admin/reset` | Reset scoreboard (new semester) |

---

## 🔐 Security Notes

- Passwords are hashed using **bcryptjs** (salt rounds: 10)
- Sessions are managed server-side via **express-session**
- All admin routes are protected by role-based middleware (`requireAdmin`)
- All challenge routes requiring user identity are protected by `requireLogin`
- All challenges are **simulated and run locally** — no real external targets
- Intentionally vulnerable pages include post-solve explanations

---

## 📏 Challenge Requirements

| Tier | Minimum Count |
|------|--------------|
| Beginner | 6 |
| Intermediate | 6 |
| Advanced | 6 |
| Jeopardy Board | 1 |
| Quizzes (10 questions each) | 3 |

### Required Categories
- Web Hacking (SQLi, XSS, IDOR simulation)
- Cryptography
- Reverse Engineering
- Network Security
- Data Security
- Social Engineering Awareness

---

## 📝 Assignment Details

| Field | Detail |
|-------|--------|
| Course | CNS3005 – Ethical Hacking |
| Institution | University of Technology, Jamaica |
| Semester | Semester 2, 2026 |
| Date Given | February 25, 2026 |
| Date Due | April 10, 2026 |