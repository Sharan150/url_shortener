# Premium URL Shortener

A high-performance, full-stack URL shortening service built with modern architecture. It features a robust Spring Boot backend designed for high concurrency, and a stunning, responsive Next.js frontend.

## 🚀 Tech Stack

### Backend (API & Core Logic)
* **Java 21 & Spring Boot 3**: The core application framework.
* **PostgreSQL**: The primary relational database for persistent storage.
* **Redis**: Used as a high-speed caching layer to handle massive read traffic and defend against cache penetration.
* **Spring Data JPA & Redis**: For seamless database and cache interactions.

### Frontend (User Interface)
* **React (Next.js 15)**: The modern UI framework using App Router.
* **Tailwind CSS 4**: For rapid, beautiful, and responsive styling.
* **Framer Motion**: For fluid, natural micro-interactions and layout animations.
* **Lucide React**: Clean, modern iconography.

### Infrastructure & Deployment
* **Docker & Docker Compose**: The entire stack is containerized for easy local development and single-server deployments.
* **Cloud-Ready Configuration**: Built to deploy seamlessly to platforms like Vercel (Frontend) and Render (Backend) with zero-configuration environment variables.

## 🌟 Key Features

* **Pre-generated Keys (Hydration Pattern)**: The backend pre-computes Base62 encoded Snowflake IDs into a queue, ensuring lightning-fast URL creation with zero database collisions.
* **Cache Penetration Defense**: Protects the database from malicious requests by intelligently caching negative lookups (null values) for short intervals.
* **Premium Editorial UI**: A non-robotic, warm, and highly crafted frontend aesthetic. No harsh generic colors—just smooth transitions and elegant typography.

## 🛠️ Local Development

### Prerequisites
* Java 21
* Node.js (v20+)
* Docker (for the database and cache)

### Starting the Infrastructure
First, start PostgreSQL and Redis using Docker:
```bash
docker compose up -d postgres redis
```

### Starting the Backend (Spring Boot)
Open a new terminal and run:
```bash
./mvnw spring-boot:run
```
*The API will run on `http://localhost:8080`.*

### Starting the Frontend (Next.js)
Open a new terminal and run:
```bash
cd frontend
npm install
npm run dev
```
*The UI will run on `http://localhost:3000`.*

## ☁️ Deployment

This project is configured for a 100% free cloud stack:
* **Frontend**: Deploy to **Vercel**. Set the `BACKEND_URL` environment variable.
* **Backend**: Deploy to **Render** or **Koyeb**. The root `Dockerfile` will be automatically detected.
* **Database**: Use **Supabase** or **Neon**. Set the `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and `SPRING_DATASOURCE_PASSWORD` variables.
* **Cache**: Use **Upstash**. Set the `REDIS_HOST` and `REDIS_PASSWORD` variables.
