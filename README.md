# QKart

QKart is a full-stack E-Shopping web application built with React (frontend) and Node.js/Express (backend). It features product browsing, cart management, authentication, and more.

## Features
- Product listing with pagination
- Add to cart and cart management
- User authentication (login/register)
- Responsive design
- Fast API with pagination and gzip compression

## Screenshots
<!-- Add your screenshots here -->

## Getting Started

### Prerequisites
- Node.js (v16+ recommended for local development)
- npm

### Local Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kiran797979/Qkart---Frontend.git
   cd Qkart---Frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   cd backend && npm install
   ```
3. **Start the backend:**
   ```sh
   cd backend
   npm start
   ```
4. **Start the frontend:**
   ```sh
   cd ..
   npm start
   ```

### Environment Variables
- For frontend (Vercel):
  - `REACT_APP_API_URL` — URL of your backend API (e.g., `https://qkart-frontend-fb85.onrender.com`)
  - `NODE_OPTIONS` — `--openssl-legacy-provider` (for Node 17+ compatibility)
- For backend (Render):
  - No environment variables required for default setup

### Deployment
- **Frontend:** Deploy to [Vercel](https://vercel.com/)
- **Backend:** Deploy to [Render](https://render.com/)

## License
MIT 