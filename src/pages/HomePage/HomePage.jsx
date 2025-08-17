import { useEffect } from "react";
import "./HomePage.css";

export default function Home() {
  useEffect(() => {
    fetch("https://local-cloud-backend.vercel.app/api/auth/login")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}
