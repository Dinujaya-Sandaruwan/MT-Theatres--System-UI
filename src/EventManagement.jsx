import "./EventManagement.scss";
import React, { useState } from "react";
import {
  Search,
  Calendar,
  Plus,
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
} from "lucide-react";
import "./EventManagement.scss";

const EventManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Sample event data for display purposes
  const events = [
    {
      id: 1,
      title: "Hamilton",
      venue: "Grand Theatre",
      date: "2025-04-15",
      time: "19:30",
      category: "Musical",
      ticketsTotal: 250,
      ticketsAvailable: 132,
      ticketsReserved: 118,
      status: "On Sale",
    },
    {
      id: 2,
      title: "Swan Lake Ballet",
      venue: "Royal Opera House",
      date: "2025-04-22",
      time: "20:00",
      category: "Dance",
      ticketsTotal: 300,
      ticketsAvailable: 75,
      ticketsReserved: 225,
      status: "Selling Fast",
    },
    {
      id: 3,
      title: "The Lion King",
      venue: "Millennium Stage",
      date: "2025-05-01",
      time: "19:00",
      category: "Musical",
      ticketsTotal: 450,
      ticketsAvailable: 205,
      ticketsReserved: 245,
      status: "On Sale",
    },
    {
      id: 4,
      title: "Rock Symphony Orchestra",
      venue: "City Concert Hall",
      date: "2025-05-10",
      time: "20:30",
      category: "Concert",
      ticketsTotal: 350,
      ticketsAvailable: 20,
      ticketsReserved: 330,
      status: "Almost Sold Out",
    },
    {
      id: 5,
      title: "Phantom of the Opera",
      venue: "Majestic Theatre",
      date: "2025-05-18",
      time: "19:30",
      category: "Musical",
      ticketsTotal: 400,
      ticketsAvailable: 180,
      ticketsReserved: 220,
      status: "On Sale",
    },
  ];

  return (
    <div className="event-management">
      <header className="header">
        <div className="header-content">
          <h1 style={{ color: "white" }}>Event Management</h1>
          <div className="header-actions">
            <button className="btn btn-primary">
              <Plus size={18} />
              Add New Event
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
          Manage all concert and theatre events, track ticket inventory, and
          monitor sales performance
        </p>
      </header>

      <div className="search-filter-container">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search events by title, venue, or category..."
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
          className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`tab ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
        <button
          className={`tab ${activeTab === "draft" ? "active" : ""}`}
          onClick={() => setActiveTab("draft")}
        >
          Draft Events
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-number">42</p>
          <p className="stat-change positive">+8% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Total Tickets</h3>
          <p className="stat-number">12,450</p>
          <p className="stat-change positive">+12% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Tickets Sold</h3>
          <p className="stat-number">8,372</p>
          <p className="stat-change positive">+5% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">LKR 437,850.00 </p>
          <p className="stat-change positive">+15% from last month</p>
        </div>
      </div>

      <div className="events-table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Venue</th>
              <th>Date & Time</th>
              <th>Category</th>
              <th>Ticket Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="event-name">{event.title}</td>
                <td>
                  <div className="venue-cell">
                    <MapPin size={16} />
                    {event.venue}
                  </div>
                </td>
                <td>
                  <div className="datetime-cell">
                    <Calendar size={16} />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                </td>
                <td>
                  <div className="category-cell">
                    <Tag size={16} />
                    {event.category}
                  </div>
                </td>
                <td>
                  <div className="ticket-status">
                    <div className="ticket-progress">
                      <div
                        className="ticket-progress-bar"
                        style={{
                          width: `${
                            (event.ticketsReserved / event.ticketsTotal) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="ticket-numbers">
                      <span className="status-label">{event.status}</span>
                      <span className="ticket-count">
                        <Users size={16} />
                        {event.ticketsReserved}/{event.ticketsTotal}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <Edit size={16} />
                    </button>
                    <button className="action-btn delete">
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

export default EventManagement;
