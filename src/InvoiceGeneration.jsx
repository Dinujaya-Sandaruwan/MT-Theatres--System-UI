import React, { useState } from "react";
import {
  Search,
  Calendar,
  FileText,
  Mail,
  Printer,
  Download,
  CreditCard,
  CheckCircle,
  XCircle,
  User,
  Phone,
  MapPin,
  DollarSign,
  Tag,
  Ticket,
  ChevronDown,
  Filter,
  AlertCircle,
  Eye,
} from "lucide-react";
import "./InvoiceGeneration.scss";

const InvoiceGeneration = () => {
  const [activeTab, setActiveTab] = useState("pending");

  // Sample invoice data
  const invoices = [
    {
      id: "INV-2025-0124",
      customer: "Sasanga Hashani",
      email: "info.hashani@gmail.com",
      phone: "+94 77 456 7890",
      event: "Swan Lake Ballet",
      tickets: 3,
      amount: 22500.0,
      date: "2025-03-16",
      dueDate: "2025-03-23",
      status: "Pending",
      paymentMethod: "Cash",
    },
    {
      id: "INV-2025-0125",
      customer: "Layanthi Joseph",
      email: "layanthijoshph@yahoo.com",
      phone: "+94 71 789 1234",
      event: "The Lion King",
      tickets: 5,
      amount: 37500.0,
      date: "2025-03-17",
      dueDate: "2025-03-24",
      status: "Pending",
      paymentMethod: "Postal Order",
    },
    {
      id: "INV-2025-0126",
      customer: "Madhara Sayurangi",
      email: "madhara@mail.com",
      phone: "+94 70 234 5678",
      event: "Rock Symphony Orchestra",
      tickets: 2,
      amount: 15000.0,
      date: "2025-03-18",
      dueDate: "2025-03-25",
      status: "Paid",
      paymentMethod: "Money Order",
    },
    {
      id: "INV-2025-0123",
      customer: "Dinujaya Sandaruwan",
      email: "info@dinujaya.me",
      phone: "+94 76 123 4567",
      event: "Hamilton",
      tickets: 2,
      amount: 18500.0,
      date: "2025-03-15",
      dueDate: "2025-03-22",
      status: "Overdue",
      paymentMethod: "Money Order",
    },
  ];

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "status-paid";
      case "Pending":
        return "status-pending";
      case "Overdue":
        return "status-overdue";
      default:
        return "";
    }
  };

  return (
    <div className="invoice-generation">
      <header className="header">
        <div className="header-content">
          <h1 style={{ color: "white" }}>Invoice Generation</h1>
          <div className="header-actions">
            <button className="btn btn-primary">
              <FileText size={18} />
              Create New Invoice
            </button>
            <button className="btn btn-outline">
              <Mail size={18} />
              Email All
            </button>
            <button className="btn btn-outline">
              <Printer size={18} />
              Print
            </button>
          </div>
        </div>
        <p className="subtitle">
          Generate and manage invoices for ticket sales, track payments, and
          send reminders
        </p>
      </header>

      <div className="search-filter-container">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search invoices by ID, customer name, or event..."
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
          className={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Invoices
        </button>
        <button
          className={`tab ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
        <button
          className={`tab ${activeTab === "paid" ? "active" : ""}`}
          onClick={() => setActiveTab("paid")}
        >
          Paid
        </button>
        <button
          className={`tab ${activeTab === "overdue" ? "active" : ""}`}
          onClick={() => setActiveTab("overdue")}
        >
          Overdue
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Invoices</h3>
          <p className="stat-number">128</p>
          <p className="stat-change positive">+12% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Pending Payment</h3>
          <p className="stat-number">36</p>
          <p className="stat-change negative">+5% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Overdue Invoices</h3>
          <p className="stat-number">14</p>
          <p className="stat-change negative">+2% from last month</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-number">LKR 825,650.00</p>
          <p className="stat-change positive">+18% from last month</p>
        </div>
      </div>

      <div className="quick-actions">
        <div className="action-card">
          <div className="action-icon mail">
            <Mail size={24} />
          </div>
          <div className="action-info">
            <h3>Send Reminders</h3>
            <p>26 overdue invoices need attention</p>
          </div>
          <button className="action-btn">Send All</button>
        </div>
        <div className="action-card">
          <div className="action-icon alert">
            <AlertCircle size={24} />
          </div>
          <div className="action-info">
            <h3>Pending Approvals</h3>
            <p>12 invoices awaiting approval</p>
          </div>
          <button className="action-btn">Review</button>
        </div>
        <div className="action-card">
          <div className="action-icon download">
            <Download size={24} />
          </div>
          <div className="action-info">
            <h3>Monthly Report</h3>
            <p>March 2025 summary is ready</p>
          </div>
          <button className="action-btn">Download</button>
        </div>
      </div>

      <div className="invoices-table-container">
        <table className="invoices-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Event</th>
              <th>Amount</th>
              <th>Date / Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="invoice-id">{invoice.id}</td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">
                      {invoice.customer.charAt(0)}
                    </div>
                    <div className="customer-info">
                      <p className="customer-name">{invoice.customer}</p>
                      <p className="customer-email">{invoice.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="event-cell">
                    <Ticket size={16} />
                    <div>
                      <p className="event-name">{invoice.event}</p>
                      <p className="ticket-count">{invoice.tickets} tickets</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="amount-cell">
                    {/* <DollarSign size={16} /> */}
                    LKR{" "}
                    {invoice.amount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </td>
                <td>
                  <div className="date-cell">
                    <div>
                      <p className="issue-date">
                        <Calendar size={14} />
                        {new Date(invoice.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="due-date">
                        Due:{" "}
                        {new Date(invoice.dueDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className={`status-badge ${getStatusColor(invoice.status)}`}
                  >
                    {invoice.status === "Paid" && <CheckCircle size={14} />}
                    {invoice.status === "Pending" && <CreditCard size={14} />}
                    {invoice.status === "Overdue" && <XCircle size={14} />}
                    {invoice.status}
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn download">
                      <Download size={16} />
                    </button>
                    <button className="action-btn print">
                      <Printer size={16} />
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

export default InvoiceGeneration;
