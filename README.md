# GameHub - Game Review & Explainer Platform

GameHub is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that provides detailed game reviews and explanations. The platform serves as a centralized hub for gamers to explore, review, and learn about video games.

## ✨ Key Features

### 🔒 Authentication & Security
- JWT-based authentication with email/password and Google OAuth
- Role-based access control for review management
- Secure session handling

### 🎮 Game Management
- Comprehensive game database with detailed information
- CRUD operations for game reviews
- Advanced filtering by genre, platform, and release year
- User rating system with averages

### 📱 Interactive Features
- Media uploads for games and reviews
- Email and in-app notifications
- Responsive UI for all devices

## 🛠️ Tech Stack

| Category       | Technologies                          |
|----------------|---------------------------------------|
| Frontend       | React.js, Tailwind CSS                |
| Backend        | Node.js, Express.js                   |
| Database       | MongoDB                               |
| Authentication | JWT, OAuth (Google)                   |
| Hosting        | Netlify/Vercel (Frontend), Render (Backend) |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB instance
- Google OAuth credentials (optional)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/kalviumcommunity/S70_JAGATHPRIYAN_Gamehub.git
   ```
2. Install dependencies
   ```bash
   cd gamehub
   npm install
   cd client
   npm install
   ```
3. Configure environment variables (see `.env.example`)
4. Start the development server
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
gamehub/
├── client/          # Frontend (React)
├── server/          # Backend (Node.js/Express)
├── .env.example     # Environment variables template
├── package.json     # Backend dependencies
└── README.md        # Project documentation
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Project Maintainer - [JAGATHPRIYAN]

Project Link: [https://github.com/kalviumcommunity/S70_JAGATHPRIYAN_Gamehub.git]
