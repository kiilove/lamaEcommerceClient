import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzNjNjM1NmMyMjdiYWYzYjZmZTNhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODc4NTQzOCwiZXhwIjoxNjM5MDQ0NjM4fQ.5DaT__rHzPrNlIHyu18vIZaiGneOlaF-6mtDAOq6MFo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `a ${TOKEN}` },
});
