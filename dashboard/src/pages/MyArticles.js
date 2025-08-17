import React, { useState } from "react";
import { Badge, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyArticles = [
  { id: 1, title: "How to Learn React", status: "Published", category: "Tech", date: "2023-08-10", lastEdited: "2 days ago", views: 120 },
  { id: 2, title: "Understanding JavaScript", status: "Draft", category: "JavaScript", date: "2024-01-15", lastEdited: "1 week ago", views: 80 },
  { id: 3, title: "CSS Tips and Tricks", status: "Published", category: "Design", date: "2024-03-20", lastEdited: "3 days ago", views: 200 },
  { id: 4, title: "Deploying Apps with Netlify", status: "Draft", category: "DevOps", date: "2024-04-10", lastEdited: "2 days ago", views: 50 },
  { id: 5, title: "React Hooks Deep Dive", status: "Published", category: "React", date: "2024-05-15", lastEdited: "1 week ago", views: 180 },
  { id: 6, title: "Async JS Explained", status: "Draft", category: "JavaScript", date: "2024-06-01", lastEdited: "1 day ago", views: 70 },
  { id: 7, title: "State Management in Redux", status: "Published", category: "React", date: "2024-06-18", lastEdited: "3 days ago", views: 150 },
  { id: 8, title: "React Router Tips", status: "Draft", category: "React", date: "2024-07-05", lastEdited: "5 days ago", views: 60 },
  { id: 9, title: "Building a Todo App", status: "Published", category: "Tech", date: "2024-07-20", lastEdited: "2 days ago", views: 220 },
  { id: 10, title: "Understanding Context API", status: "Draft", category: "React", date: "2024-08-01", lastEdited: "1 day ago", views: 90 },
  { id: 11, title: "Optimizing React Performance", status: "Published", category: "React", date: "2024-08-10", lastEdited: "3 days ago", views: 140 },
  { id: 12, title: "Unit Testing in React", status: "Draft", category: "Testing", date: "2024-08-15", lastEdited: "1 day ago", views: 40 },
];

const lastEditedPriority = {
  "1 day ago": 1,
  "2 days ago": 2,
  "3 days ago": 3,
  "5 days ago": 5,
  "1 week ago": 7,
};

function MyArticles() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const itemsPerPage = 3;

  let filteredArticles = dummyArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "" || article.status === statusFilter) &&
      (categoryFilter === "" || article.category === categoryFilter)
  );

  if (sortConfig.key) {
    filteredArticles.sort((a, b) => {
      let aValue, bValue;
      if (sortConfig.key === "lastEdited") {
        aValue = lastEditedPriority[a.lastEdited] || 100;
        bValue = lastEditedPriority[b.lastEdited] || 100;
      } else if (sortConfig.key === "views") {
        aValue = a.views;
        bValue = b.views;
      } else if (sortConfig.key === "date") {
        aValue = new Date(a.date);
        bValue = new Date(b.date);
      }
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const startIndex = (page - 1) * itemsPerPage;
  const displayed = filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h2>My Articles</h2>

      {/* Search & Filters: Side by Side */}
      <Form className="mb-3" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Form.Control
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: "1 1 200px" }}
        />
        <Form.Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ flex: "0 1 150px" }}
        >
          <option value="">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </Form.Select>
        <Form.Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ flex: "0 1 150px" }}
        >
          <option value="">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Design">Design</option>
          <option value="React">React</option>
          <option value="DevOps">DevOps</option>
          <option value="Testing">Testing</option>
        </Form.Select>
      </Form>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Category</th>
              <th onClick={() => requestSort("date")}>
                Date Published {sortConfig.key === "date" ? (sortConfig.direction === "asc" ? "⬆️" : "⬇️") : "↕️"}
              </th>
              <th onClick={() => requestSort("lastEdited")}>
                Last Edited {sortConfig.key === "lastEdited" ? (sortConfig.direction === "asc" ? "⬆️" : "⬇️") : "↕️"}
              </th>
              <th onClick={() => requestSort("views")}>
                Views {sortConfig.key === "views" ? (sortConfig.direction === "asc" ? "⬆️" : "⬇️") : "↕️"}
              </th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((article) => (
              <tr key={article.id} className={article.status === "Published" ? "published" : ""}>
                <td>{article.title}</td>
                <td>
                  <Badge pill bg={article.status === "Published" ? "success" : "warning"}>
                    {article.status}
                  </Badge>
                </td>
                <td>{article.category}</td>
                <td>{article.date}</td>
                <td>{article.lastEdited}</td>
                <td>{article.views}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active-page" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyArticles;
