# Twitter-Like Backend System

## Overview

This is a simplified backend system for a Twitter-like application built using Node.js and MongoDB.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB Atlas account or a local MongoDB instance

### Steps

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/23415/healthflex_assignment.git
   cd twitter-backend

### install dependencies
    npm install

### Enviroment variables
    PORT=3000
    MONGODB_URI=mongodb+srv://sukritkumar2002:iqGSstet0FYp8We9@cluster0.ckhua6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=44eec28c3781134186a3e823a1d131c3f6b3a64847a20bd9803929b8f9a4955b4301d5205a573af1f0ec47c40f7df71da6366f006283be83e0cbc5eac305f6dd

### Run server
    npm run dev

### API endpoints 
    User Registration
        POST /api/users/register
            Body : 
                    {
                        "username": "testuser",
                        "password": "testpassword"
                    }

    User Login
        POST /api/users/login
            body :
                    {
                        "username": "testuser",
                        "password": "testpassword"
                    }

    Post a Tweet
        POST /api/tweets
            Headers:
            Authorization: 44eec28c3781134186a3e823a1d131c3f6b3a64847a20bd9803929b8f9a4955b4301d5205a573af1f0ec47c40f7df71da6366f006283be83e0cbc5eac305f6dd
            Body :
                    {
                        "text": "Hello world!"
                    }
    Fetch User Timeline
        GET /api/users/:userId/timeline
            Headers:
                Authorization: 44eec28c3781134186a3e823a1d131c3f6b3a64847a20bd9803929b8f9a4955b4301d5205a573af1f0ec47c40f7df71da6366f006283be83e0cbc5eac305f6dd                