import "./ReservationManagement.scss";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  Send,
  Edit,
  Trash2,
  Filter,
  Download,
  BarChart2,
  ChevronDown,
  Clock,
  MapPin,
  Users,
  Tag,
  Check,
  X,
  DollarSign,
  User,
  Phone,
  Mail,
  FileText,
  Truck,
  AlertCircle,
} from "lucide-react";
import "./ReservationManagement.scss";

const ReservationManagement = () => {
  const [activeTab, setActiveTab] = useState("pending");

  // Sample reservation data for display purposes
  const reservations = [
    {
      id: "RES-2025-1542",
      customer: "Sasanga Hashani",
      customerEmail: "info.hashani@gmail.com",
      customerPhone: "+94 71 234 5678",
      event: "Hamilton",
      venue: "Grand Theatre",
      date: "2025-04-15",
      time: "19:30",
      ticketCount: 2,
      totalAmount: 12500.0,
      paymentStatus: "Paid",
      reservationType: "Pre-purchased",
      dispatchStatus: "Pending",
      createdDate: "2025-03-01",
    },
    {
      id: "RES-2025-1543",
      customer: "Dinujaya Sandaruwan",
      customerEmail: "info@dinujaya.me",
      customerPhone: "+94 77 345 6789",
      event: "Swan Lake Ballet",
      venue: "Royal Opera House",
      date: "2025-04-22",
      time: "20:00",
      ticketCount: 4,
      totalAmount: 28000.0,
      paymentStatus: "Pending",
      reservationType: "New",
      dispatchStatus: "Pending",
      createdDate: "2025-03-05",
    },
    {
      id: "RES-2025-1544",
      customer: "Layanthi Joseph",
      customerEmail: "layanthijoshph@yahoo.com",
      customerPhone: "+94 76 456 7890",
      event: "The Lion King",
      venue: "Millennium Stage",
      date: "2025-05-01",
      time: "19:00",
      ticketCount: 3,
      totalAmount: 18000.0,
      paymentStatus: "Paid",
      reservationType: "Pre-purchased",
      dispatchStatus: "Dispatched",
      createdDate: "2025-03-07",
    },
    {
      id: "RES-2025-1545",
      customer: "Madhara Sayurangi",
      customerEmail: "madhara@mail.com",
      customerPhone: "+94 75 567 8901",
      event: "Rock Symphony Orchestra",
      venue: "City Concert Hall",
      date: "2025-05-10",
      time: "20:30",
      ticketCount: 2,
      totalAmount: 15000.0,
      paymentStatus: "Paid",
      reservationType: "New",
      dispatchStatus: "Pending",
      createdDate: "2025-03-10",
    },
  ];

  // Function to get status badge class
  const getStatusClass = (status, type) => {
    if (type === "payment") {
      return status === "Paid" ? "status-badge paid" : "status-badge pending";
    } else if (type === "dispatch") {
      return status === "Dispatched"
        ? "status-badge dispatched"
        : "status-badge pending";
    } else if (type === "reservation") {
      return status === "Pre-purchased"
        ? "status-badge pre-purchased"
        : "status-badge new";
    }
  };

  return (
    <div className="reservation-management">
      <header className="header">
        <div className="header-content">
          <h1 style={{ color: "white" }}>Reservation Management</h1>
          <div className="header-actions">
            <button className="btn btn-primary">
              <Send size={18} />
              Dispatch Selected
            </button>
            <button className="btn btn-outline">
              <Download size={18} />
              Export
            </button>
            <button className="btn btn-outline">
              <BarChart2 size={18} />
              Reports
            </button>
          </div>
        </div>
        <p className="subtitle">
          Manage all ticket reservations, track payment status, and dispatch
          tickets to customers
        </p>
      </header>

      <div className="search-filter-container">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search reservations by ID, customer name, or event..."
            className="search-input"
          />
        </div>

        <div className="filters">
          <button className="filter-button">
            <Calendar size={16} />
            Date Range
            <ChevronDown size={16} />
          </button>
          <button className="filter-button">
            <Filter size={16} />
            Filters
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending Dispatch
        </button>
        <button
          className={`tab ${activeTab === "dispatched" ? "active" : ""}`}
          onClick={() => setActiveTab("dispatched")}
        >
          Dispatched
        </button>
        <button
          className={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Reservations
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Reservations</h3>
          <p className="stat-number">87</p>
          <p className="stat-change positive">+12% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Pending Dispatch</h3>
          <p className="stat-number">32</p>
          <p className="stat-change negative">+8% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Pending Payment</h3>
          <p className="stat-number">15</p>
          <p className="stat-change negative">+3% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">LKR 652,750.00</p>
          <p className="stat-change positive">+18% from last month</p>
        </div>
      </div>

      <div className="reservations-table-container">
        <table className="reservations-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" />
              </th>
              <th>Reservation ID</th>
              <th>Customer</th>
              <th>Event Details</th>
              <th>Tickets</th>
              <th>Reservation Type</th>
              <th>Payment Status</th>
              <th>Dispatch Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="checkbox-column">
                  <input type="checkbox" />
                </td>
                <td className="id-column">
                  <div className="reservation-id">{reservation.id}</div>
                  <div className="reservation-date">
                    Created:{" "}
                    {new Date(reservation.createdDate).toLocaleDateString()}
                  </div>
                </td>
                <td>
                  <div className="customer-info">
                    <div className="customer-name">
                      <User size={16} />
                      {reservation.customer}
                    </div>
                    <div className="customer-contact">
                      <Phone size={14} />
                      {reservation.customerPhone}
                    </div>
                    <div className="customer-contact">
                      <Mail size={14} />
                      {reservation.customerEmail}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="event-info">
                    <div className="event-name">{reservation.event}</div>
                    <div className="event-venue">
                      <MapPin size={16} />
                      {reservation.venue}
                    </div>
                    <div className="event-datetime">
                      <Calendar size={16} />
                      {new Date(reservation.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      <Clock size={16} />
                      {reservation.time}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="ticket-info">
                    <div className="ticket-count">
                      <Users size={16} />
                      {reservation.ticketCount}{" "}
                      {reservation.ticketCount === 1 ? "ticket" : "tickets"}
                    </div>
                    <div className="ticket-amount">
                      <DollarSign size={16} />
                      LKR{" "}
                      {reservation.totalAmount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={getStatusClass(
                      reservation.reservationType,
                      "reservation"
                    )}
                  >
                    {reservation.reservationType}
                  </span>
                </td>
                <td>
                  <span
                    className={getStatusClass(
                      reservation.paymentStatus,
                      "payment"
                    )}
                  >
                    {reservation.paymentStatus === "Paid" ? (
                      <>
                        <Check size={16} /> Paid
                      </>
                    ) : (
                      <>
                        <AlertCircle size={16} /> Pending
                      </>
                    )}
                  </span>
                </td>
                <td>
                  <span
                    className={getStatusClass(
                      reservation.dispatchStatus,
                      "dispatch"
                    )}
                  >
                    {reservation.dispatchStatus === "Dispatched" ? (
                      <>
                        <Truck size={16} /> Dispatched
                      </>
                    ) : (
                      <>
                        <Clock size={16} /> Pending
                      </>
                    )}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn invoice" title="View Invoice">
                      <FileText size={16} />
                    </button>
                    <button
                      className="action-btn dispatch"
                      title="Dispatch Tickets"
                    >
                      <Send size={16} />
                    </button>
                    <button
                      className="action-btn edit"
                      title="Edit Reservation"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="action-btn delete"
                      title="Cancel Reservation"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">5</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
};

export default ReservationManagement;
