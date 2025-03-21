import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import CustomerInquiryDashboard from "./CustomerInquiryDashboard.jsx";
// import EventManagement from "./EventManagement.jsx";
import InvoiceGeneration from "./InvoiceGeneration.jsx";
import ReportBuilder from "./ReportBuilder.jsx";
// import ReservationManagement from "./ReservationManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReportBuilder />
  </StrictMode>
);
