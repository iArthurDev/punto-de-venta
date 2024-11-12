import Dashboard from "@/app/components/dashboard/dashboard";
import "./home.css";

export default function Home() {
  return (
    <div className="page-dashboard-container">
      <Dashboard />
      <div className="home-container">
        <div
          className="sales"
          style={{ backgroundColor: "rgb(145, 203, 145)" }}
        ></div>
        <div
          className="sales"
          style={{ backgroundColor: "rgb(175, 192, 198)" }}
        ></div>
        <div
          className="sales"
          style={{ backgroundColor: "rgb(214, 211, 130)" }}
        ></div>
      </div>
    </div>
  );
}
