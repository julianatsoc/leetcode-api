# 📊 LeetCode Stats API

An API built with **TypeScript**, **Express**, and **Axios** to fetch data from the LeetCode API and provide it for a frontend LeetCode stats generator.

## 🚀 Technologies Used

- **Node.js**
- **TypeScript**
- **Express**
- **Axios**
- **Nodemon** (for development)

## 🔧 How to Run the Project

1️⃣ Clone the Repository

```bash
git clone https://github.com/julianatsoc/leetcode-api
cd leetcode-api
```

2️⃣ Install Dependencies

```bash
npm install
yarn install
```

3️⃣ The default port is 3000, but you can override it

4️⃣ Run in Development Mode

```bash
npm run dev
```

The server will start and automatically restart on changes.

5️⃣ Run in Production Mode

```bash
npm run build
npm start
```

## 📡 Available Endpoints

🔹 Get LeetCode User Stats
GET /stats/:username

📥 Parameter: username (string) → LeetCode username.
📤 Response:

```bash

{
  "status": "success",
  "message": "retrieved",
  "totalSolved": 100,
  "totalQuestions": 2000,
  "easySolved": 50,
  "mediumSolved": 40,
  "hardSolved": 10,
  "acceptanceRate": 55.2,
  "ranking": 1234,
  "contributionPoints": 100,
  "reputation": 500
}
```
