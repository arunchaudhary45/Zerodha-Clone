# 📈 Zerodha Clone — Full Stack Stock Trading Platform

A full-stack clone of [Zerodha](https://zerodha.com), India's largest stock brokerage platform. Built with **React.js**, **Node.js**, **Express**, and **MongoDB** (optional). Features a landing website, a trading dashboard with live watchlist, and a RESTful API backend.

---

## 🖼️ Screenshots

### Landing Page
> Homepage with hero section, pricing, awards, and call-to-action signup.

### Trading Dashboard
> Real-time watchlist, holdings, positions, funds, and order placement.

---

## 🏗️ Project Architecture

```
zerodha-clone/
│
├── frontend/          # 🌐 Landing/Marketing Website (Port 3000)
│   ├── public/
│   │   └── media/images/    # Static assets (logos, product images)
│   └── src/
│       ├── landing_page/
│       │   ├── home/        # Hero, Awards, Stats, Pricing, Education
│       │   ├── about/       # About page with team section
│       │   ├── pricing/     # Pricing details & brokerage info
│       │   ├── products/    # Product showcase (Kite, Console, Coin, etc.)
│       │   ├── signup/      # User registration form
│       │   ├── support/     # Support portal & ticket creation
│       │   ├── Navbar.js    # Global navigation bar
│       │   ├── Footer.js    # Global footer
│       │   └── OpenAccount.js
│       └── index.js         # App entry point with React Router
│
├── dashboard/         # 📊 Trading Dashboard App (Port 3001)
│   └── src/
│       ├── components/
│       │   ├── Home.js          # Main layout (TopBar + Dashboard)
│       │   ├── Dashboard.js     # Route container with sidebar
│       │   ├── TopBar.js        # NIFTY/SENSEX indices bar
│       │   ├── Menu.js          # Navigation menu
│       │   ├── WatchList.js     # Live stock watchlist with buy/sell
│       │   ├── Holdings.js      # Portfolio holdings (fetched from API)
│       │   ├── Positions.js     # Open positions
│       │   ├── Orders.js        # Order history
│       │   ├── Funds.js         # Fund management
│       │   ├── Summary.js       # Account summary
│       │   ├── BuyActionWindow.js  # Buy order modal
│       │   ├── DoughnoutChart.js   # Doughnut chart (Chart.js)
│       │   ├── VerticalGraph.js    # Bar chart (Chart.js)
│       │   └── GeneralContext.js   # React Context for state management
│       └── data/
│           └── data.js          # Static watchlist & sample data
│
├── backend/           # ⚙️ REST API Server (Port 3002)
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── index.js             # Express server (dual-mode: in-memory / MongoDB)
│   └── .env                 # Environment variables
│
├── package.json       # Root-level convenience scripts
└── README.md          # This file
```

---

## 🛠️ Tech Stack

| Layer        | Technology                                              |
|-------------|----------------------------------------------------------|
| **Frontend**  | React 18, React Router v6, Bootstrap 5, Font Awesome    |
| **Dashboard** | React 18, Material UI v5, Chart.js, Axios, React Router |
| **Backend**   | Node.js, Express.js, Mongoose, CORS, Body-Parser        |
| **Database**  | MongoDB (optional — runs in-memory mode by default)      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- MongoDB (optional — the app works without it!)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/zerodha-clone.git
cd zerodha-clone
```

**2. Install all dependencies**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Dashboard
cd ../dashboard
npm install
```

Or use the root-level shortcut:
```bash
npm run install-all
```

### Running the Application

Open **3 separate terminals** and run:

**Terminal 1 — Backend (API Server)**
```bash
cd backend
npm start
```
✅ You should see:
```
App started on port 3002
⚡ Running in IN-MEMORY mode (no MongoDB required)
   Holdings: 13 items loaded
   Positions: 2 items loaded
```

**Terminal 2 — Frontend (Landing Page)**
```bash
cd frontend
npm start
```

**Terminal 3 — Dashboard (Trading App)**
```bash
cd dashboard
npm start
```

### Access the Application

| Application          | URL                     | Description                  |
|---------------------|-------------------------|------------------------------|
| 🌐 Landing Page      | http://localhost:3000    | Marketing website            |
| 📊 Trading Dashboard | http://localhost:3001    | Stock trading dashboard      |
| ⚙️ API Server        | http://localhost:3002    | Backend REST API             |

---

## 📡 API Endpoints

| Method | Endpoint         | Description                    | Request Body                                   |
|--------|-----------------|--------------------------------|------------------------------------------------|
| `GET`  | `/`              | Health check & server status   | —                                              |
| `GET`  | `/allHoldings`   | Fetch all stock holdings       | —                                              |
| `GET`  | `/allPositions`  | Fetch all open positions       | —                                              |
| `GET`  | `/allOrders`     | Fetch all placed orders        | —                                              |
| `POST` | `/newOrder`      | Place a new buy/sell order     | `{ name, qty, price, mode }`                   |

### Example API Call

```bash
# Get all holdings
curl http://localhost:3002/allHoldings

# Place a new order
curl -X POST http://localhost:3002/newOrder \
  -H "Content-Type: application/json" \
  -d '{"name": "INFY", "qty": 5, "price": 1555.45, "mode": "BUY"}'
```

---

## ✨ Features

### Landing Page (Frontend)
- ✅ Responsive navigation bar with React Router
- ✅ Hero section with call-to-action
- ✅ Awards & largest broker statistics
- ✅ Pricing comparison (₹0 equity, ₹20 F&O)
- ✅ Product showcase (Kite, Console, Coin, Varsity, Kite Connect API)
- ✅ Education section (Varsity, TradingQ&A)
- ✅ About page with team section
- ✅ Support portal with ticket categories
- ✅ User signup form
- ✅ Comprehensive footer with legal disclaimers

### Trading Dashboard
- ✅ Live stock watchlist with 9 stocks
- ✅ Buy/Sell action buttons with hover tooltips
- ✅ Buy order placement window (sends to API)
- ✅ Holdings page with data from backend API
- ✅ Positions page with P&L calculation
- ✅ Funds management view
- ✅ Account summary with equity & holdings overview
- ✅ Doughnut chart for watchlist distribution
- ✅ Bar chart for holdings visualization
- ✅ NIFTY 50 & SENSEX index display

### Backend API
- ✅ RESTful API with Express.js
- ✅ Dual-mode: In-memory (default) or MongoDB
- ✅ Pre-seeded with 13 holdings and 2 positions
- ✅ Order placement endpoint
- ✅ CORS enabled for cross-origin requests
- ✅ Health check endpoint

---

## 🗄️ Database Configuration (Optional)

The app runs in **in-memory mode** by default — no database setup required!

To connect to MongoDB:

1. Create a free MongoDB Atlas cluster at [mongodb.com](https://www.mongodb.com/atlas)
2. Get your connection string
3. Update `backend/.env`:

```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerodha-clone
```

4. Restart the backend — it will automatically detect and use MongoDB
5. Visit `http://localhost:3002/addHoldings` and `http://localhost:3002/addPositions` to seed data

---

## 📁 Sample Data

### Holdings (13 stocks)
| Stock       | Qty | Avg Price | Current Price | Net Change |
|-------------|-----|-----------|---------------|------------|
| BHARTIARTL  | 2   | 538.05    | 541.15        | +0.58%     |
| HDFCBANK    | 2   | 1,383.40  | 1,522.35      | +10.04%    |
| HINDUNILVR  | 1   | 2,335.85  | 2,417.40      | +3.49%     |
| INFY        | 1   | 1,350.50  | 1,555.45      | +15.18%    |
| ITC         | 5   | 202.00    | 207.90        | +2.92%     |
| KPITTECH    | 5   | 250.30    | 266.45        | +6.45%     |
| M&M         | 2   | 809.90    | 779.80        | -3.72%     |
| RELIANCE    | 1   | 2,193.70  | 2,112.40      | -3.71%     |
| SBIN        | 4   | 324.35    | 430.20        | +32.63%    |
| SGBMAY29    | 2   | 4,727.00  | 4,719.00      | -0.17%     |
| TATAPOWER   | 5   | 104.20    | 124.15        | +19.15%    |
| TCS         | 1   | 3,041.70  | 3,194.80      | +5.03%     |
| WIPRO       | 4   | 489.30    | 577.75        | +18.08%    |

### Watchlist (9 stocks)
INFY, ONGC, TCS, KPITTECH, QUICKHEAL, WIPRO, M&M, RELIANCE, HUL

---

## 🧰 Troubleshooting

### Port already in use error
```
Error: listen EADDRINUSE: address already in use :::3002
```
**Fix:** Kill the existing process:
```bash
npx kill-port 3002       # Kill backend
npx kill-port 3000       # Kill frontend
npx kill-port 3001       # Kill dashboard
```
Or on Windows:
```bash
taskkill /F /IM node.exe
```

### Frontend shows blank page
Make sure Bootstrap CDN is loaded. Check browser console (F12) for errors.

### Dashboard shows empty holdings
Make sure the **backend is running first** on port 3002 before opening the dashboard.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## 📜 License

This project is for **educational purposes only**. Not affiliated with or endorsed by Zerodha Broking Ltd.

---

## 👨‍💻 Author

**Arun Chaudhary**

---

## ⭐ If you found this useful, give it a star!
