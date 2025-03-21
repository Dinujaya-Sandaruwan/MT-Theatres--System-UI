import React, { useState } from "react";
import {
  BarChart2,
  Filter,
  Download,
  Save,
  PieChart,
  LineChart,
  Calendar,
  Users,
  Package,
  CreditCard,
  Plus,
  Trash2,
  ChevronDown,
  Sliders,
  List,
  Grid,
  Search,
  ArrowRight,
  Clock,
  FileText,
} from "lucide-react";
import "./ReportBuilder.scss";

const ReportBuilder = () => {
  const [reportView, setReportView] = useState("builder");
  const [selectedChartType, setSelectedChartType] = useState("bar");
  const [previewMode, setPreviewMode] = useState(false);

  // Sample metrics for display purposes
  const availableMetrics = [
    {
      id: 1,
      name: "Ticket Sales",
      category: "sales",
      icon: <Package size={16} />,
    },
    {
      id: 2,
      name: "Revenue",
      category: "sales",
      icon: <CreditCard size={16} />,
    },
    {
      id: 3,
      name: "Customers",
      category: "customer",
      icon: <Users size={16} />,
    },
    { id: 4, name: "Events", category: "event", icon: <Calendar size={16} /> },
    { id: 5, name: "Venues", category: "venue", icon: <List size={16} /> },
    {
      id: 6,
      name: "Processing Time",
      category: "performance",
      icon: <Clock size={16} />,
    },
    {
      id: 7,
      name: "Invoices",
      category: "financial",
      icon: <FileText size={16} />,
    },
  ];

  // Sample saved reports
  const savedReports = [
    {
      id: 1,
      name: "Monthly Ticket Sales by Venue",
      type: "bar",
      lastRun: "2025-03-10",
    },
    {
      id: 2,
      name: "Customer Demographics",
      type: "pie",
      lastRun: "2025-03-15",
    },
    {
      id: 3,
      name: "Revenue Trends (Q1 2025)",
      type: "line",
      lastRun: "2025-03-01",
    },
    {
      id: 4,
      name: "Event Performance Analysis",
      type: "bar",
      lastRun: "2025-02-28",
    },
  ];

  // Sample report data for preview
  const previewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Grand Theatre",
        data: [4200, 5100, 4800, 6300, 5400],
      },
      {
        label: "Royal Opera House",
        data: [3800, 4600, 5200, 4900, 6100],
      },
      {
        label: "Millennium Stage",
        data: [5100, 4700, 5500, 6000, 6800],
      },
    ],
  };

  // Helper function to generate a gradient bar for chart preview
  const renderGradientBars = () => {
    return previewData.labels.map((month, idx) => (
      <div className="preview-chart-column" key={idx}>
        <div className="bars-container">
          {previewData.datasets.map((dataset, dataIdx) => (
            <div
              key={dataIdx}
              className={`preview-bar dataset-${dataIdx}`}
              style={{ height: `${dataset.data[idx] / 100}px` }}
            >
              <span className="bar-value">{dataset.data[idx]}</span>
            </div>
          ))}
        </div>
        <div className="month-label">{month}</div>
      </div>
    ));
  };

  return (
    <div className="report-builder">
      <header className="header">
        <div className="header-content">
          <h1 style={{ color: "white" }}>Ad-hoc Report Builder</h1>
          <div className="header-actions">
            <button
              className="btn btn-primary"
              onClick={() => setPreviewMode(!previewMode)}
            >
              {previewMode ? <Grid size={18} /> : <BarChart2 size={18} />}
              {previewMode ? "Edit Report" : "Preview Report"}
            </button>
            <button className="btn btn-outline">
              <Save size={18} />
              Save Report
            </button>
            <button className="btn btn-outline">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
        <p className="subtitle">
          Create custom reports for ticket sales, performance metrics, customer
          insights, and financial analysis
        </p>
      </header>

      <div className="view-tabs">
        <button
          className={`view-tab ${reportView === "builder" ? "active" : ""}`}
          onClick={() => setReportView("builder")}
        >
          Report Builder
        </button>
        <button
          className={`view-tab ${reportView === "saved" ? "active" : ""}`}
          onClick={() => setReportView("saved")}
        >
          Saved Reports
        </button>
      </div>

      {reportView === "builder" ? (
        <div
          className={`report-builder-container ${
            previewMode ? "preview-mode" : ""
          }`}
        >
          {!previewMode ? (
            <>
              <div className="builder-sidebar">
                <div className="sidebar-section">
                  <h3>Report Type</h3>
                  <div className="chart-type-selector">
                    <button
                      className={`chart-type-btn ${
                        selectedChartType === "bar" ? "active" : ""
                      }`}
                      onClick={() => setSelectedChartType("bar")}
                    >
                      <BarChart2 size={20} />
                      <span>Bar</span>
                    </button>
                    <button
                      className={`chart-type-btn ${
                        selectedChartType === "line" ? "active" : ""
                      }`}
                      onClick={() => setSelectedChartType("line")}
                    >
                      <LineChart size={20} />
                      <span>Line</span>
                    </button>
                    <button
                      className={`chart-type-btn ${
                        selectedChartType === "pie" ? "active" : ""
                      }`}
                      onClick={() => setSelectedChartType("pie")}
                    >
                      <PieChart size={20} />
                      <span>Pie</span>
                    </button>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Metrics</h3>
                  <div className="search-metrics">
                    <Search className="search-icon" size={14} />
                    <input
                      type="text"
                      placeholder="Search metrics..."
                      className="search-input"
                    />
                  </div>
                  <div className="metrics-list">
                    {availableMetrics.map((metric) => (
                      <div key={metric.id} className="metric-item" draggable>
                        {metric.icon}
                        <span>{metric.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Filters</h3>
                  <div className="filter-section">
                    <div className="filter-item">
                      <div className="filter-header">
                        <span>Date Range</span>
                        <button className="filter-control-btn">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="filter-content">
                        <select className="filter-select">
                          <option>Last 30 days</option>
                          <option>Last 90 days</option>
                          <option>Last 6 months</option>
                          <option>Last year</option>
                          <option>Custom range</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="filter-header">
                        <span>Venue</span>
                        <button className="filter-control-btn">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="filter-content">
                        <select className="filter-select">
                          <option>All Venues</option>
                          <option>Grand Theatre</option>
                          <option>Royal Opera House</option>
                          <option>Millennium Stage</option>
                          <option>City Concert Hall</option>
                        </select>
                      </div>
                    </div>
                    <button className="add-filter-btn">
                      <Plus size={14} />
                      Add Filter
                    </button>
                  </div>
                </div>
              </div>

              <div className="builder-main">
                <div className="report-settings">
                  <div className="report-name-container">
                    <input
                      type="text"
                      placeholder="Enter report name..."
                      className="report-name-input"
                      defaultValue="Monthly Ticket Sales by Venue (2025)"
                    />
                  </div>

                  <div className="report-configuration">
                    <div className="config-section">
                      <h3>Data Series</h3>
                      <div className="series-container">
                        <div className="series-item">
                          <div className="series-header">
                            <span className="series-dot series-1"></span>
                            <span className="series-name">Grand Theatre</span>
                            <button className="series-control-btn">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="series-item">
                          <div className="series-header">
                            <span className="series-dot series-2"></span>
                            <span className="series-name">
                              Royal Opera House
                            </span>
                            <button className="series-control-btn">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="series-item">
                          <div className="series-header">
                            <span className="series-dot series-3"></span>
                            <span className="series-name">
                              Millennium Stage
                            </span>
                            <button className="series-control-btn">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <button className="add-series-btn">
                          <Plus size={14} />
                          Add Data Series
                        </button>
                      </div>
                    </div>

                    <div className="config-section">
                      <h3>X-Axis</h3>
                      <div className="axis-selection">
                        <select className="axis-select">
                          <option>Month</option>
                          <option>Quarter</option>
                          <option>Event Type</option>
                          <option>Day of Week</option>
                        </select>
                      </div>
                    </div>

                    <div className="config-section">
                      <h3>Y-Axis</h3>
                      <div className="axis-selection">
                        <select className="axis-select">
                          <option>Ticket Sales (Count)</option>
                          <option>Revenue (LKR)</option>
                          <option>Tickets Per Event</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chart-placeholder">
                  <div className="placeholder-content">
                    <BarChart2 size={40} />
                    <p>Configure your report parameters to preview data</p>
                    <button className="preview-btn">
                      Generate Preview
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="report-preview">
              <div className="preview-header">
                <h2>Monthly Ticket Sales by Venue (2025)</h2>
                <div className="preview-actions">
                  <button className="preview-action-btn">
                    <Download size={16} />
                    Export as PDF
                  </button>
                  <button className="preview-action-btn">
                    <Download size={16} />
                    Export as CSV
                  </button>
                </div>
              </div>
              <div className="preview-filter-summary">
                <div className="filter-badge">
                  <Calendar size={14} />
                  Date: Last 6 months
                </div>
                <div className="filter-badge">
                  <List size={14} />
                  Venues: All Venues
                </div>
                <div className="filter-badge">
                  <Package size={14} />
                  Metric: Ticket Sales (Count)
                </div>
              </div>
              <div className="chart-preview">
                <div className="chart-title-container">
                  <h3 className="chart-title">Ticket Sales by Venue</h3>
                  <p className="chart-subtitle">
                    First and Second Quarter 2025
                  </p>
                </div>
                <div className="preview-chart-container">
                  <div className="y-axis">
                    <div className="y-tick">7000</div>
                    <div className="y-tick">6000</div>
                    <div className="y-tick">5000</div>
                    <div className="y-tick">4000</div>
                    <div className="y-tick">3000</div>
                    <div className="y-tick">2000</div>
                    <div className="y-tick">1000</div>
                    <div className="y-tick">0</div>
                  </div>
                  <div className="chart-content">{renderGradientBars()}</div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot series-1"></span>
                    <span>Grand Theatre</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot series-2"></span>
                    <span>Royal Opera House</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot series-3"></span>
                    <span>Millennium Stage</span>
                  </div>
                </div>
              </div>
              <div className="report-summary">
                <div className="summary-title">Key Insights</div>
                <div className="summary-content">
                  <div className="summary-metric">
                    <div className="metric-value">24,900</div>
                    <div className="metric-label">Total Tickets</div>
                  </div>
                  <div className="summary-metric">
                    <div className="metric-value">6,800</div>
                    <div className="metric-label">Highest Sales</div>
                    <div className="metric-detail">Millennium Stage (May)</div>
                  </div>
                  <div className="summary-metric">
                    <div className="metric-value">11.5%</div>
                    <div className="metric-label">Growth</div>
                    <div className="metric-detail">vs. Previous Period</div>
                  </div>
                </div>
                <div className="summary-notes">
                  <p>
                    Ticket sales show consistent growth across all venues with
                    Millennium Stage surpassing Royal Opera House in April-May
                    period. Grand Theatre maintains stable performance with
                    slight increase in April.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="saved-reports-container">
          <div className="search-filter-container">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search saved reports..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <button className="filter-button">
                <Filter size={16} />
                Filter
                <ChevronDown size={16} />
              </button>
              <button className="filter-button">
                <Sliders size={16} />
                Sort
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="reports-grid">
            {savedReports.map((report) => (
              <div className="report-card" key={report.id}>
                <div className="report-icon">
                  {report.type === "bar" && <BarChart2 size={24} />}
                  {report.type === "pie" && <PieChart size={24} />}
                  {report.type === "line" && <LineChart size={24} />}
                </div>
                <div className="report-info">
                  <h3>{report.name}</h3>
                  <div className="report-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      Last run: {new Date(report.lastRun).toLocaleDateString()}
                    </span>
                    <span className="meta-item">
                      <BarChart2 size={14} />
                      {report.type.charAt(0).toUpperCase() +
                        report.type.slice(1)}{" "}
                      Chart
                    </span>
                  </div>
                </div>
                <div className="report-actions">
                  <button className="icon-btn">
                    <BarChart2 size={16} />
                  </button>
                  <button className="icon-btn">
                    <Edit size={16} />
                  </button>
                  <button className="icon-btn danger">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <div className="report-card add-new">
              <div className="add-report-content">
                <Plus size={24} />
                <span>Create New Report</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportBuilder;
