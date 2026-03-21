const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
const resources = [
  { id: 1, title: 'Introduction to 3D Printing', type: 'Article', author: 'Prajwal', topic: 'Hardware' },
  { id: 2, title: 'Getting Started with Arduino', type: 'Article', author: 'MARVEL', topic: 'Electronics' },
  { id: 3, title: 'Python NumPy Guide', type: 'Book', author: 'NumPy Docs', topic: 'Programming' },
  { id: 4, title: 'GitHub Workflow Tutorial', type: 'Article', author: 'GitHub', topic: 'Software' },
  { id: 5, title: 'Introduction to IoT with ESP32', type: 'Book', author: 'Prajwal', topic: 'Electronics' },
  { id: 6, title: 'Virtual Reality Fundamentals', type: 'Article', author: 'MARVEL', topic: 'Technology' },
];

const users = [
  { id: 1, name: 'Prajwal Dhannur', email: 'prajwal@uvce.ac.in', role: 'Student' },
];

// Home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>MARVEL Resource Library</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: sans-serif; background: #f5f5f5; color: #1a1a1a; }
        .header { background: #1a1a1a; color: white; padding: 1.5rem 2rem; }
        .header h1 { font-size: 22px; font-weight: 500; }
        .header p { font-size: 13px; color: #aaa; margin-top: 4px; }
        .nav { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 0 2rem; display: flex; gap: 2rem; }
        .nav a { display: block; padding: 1rem 0; text-decoration: none; color: #555; font-size: 14px; border-bottom: 2px solid transparent; }
        .nav a:hover { color: #1a1a1a; border-bottom-color: #1a1a1a; }
        .container { max-width: 900px; margin: 2rem auto; padding: 0 2rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        .card { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; padding: 1.25rem; }
        .card-title { font-size: 15px; font-weight: 500; margin-bottom: 8px; }
        .card-meta { font-size: 12px; color: #888; }
        .badge { display: inline-block; background: #f0f0f0; border-radius: 20px; padding: 2px 10px; font-size: 11px; color: #555; margin-top: 8px; margin-right: 4px; }
        .section-title { font-size: 18px; font-weight: 500; margin-bottom: 1rem; }
        .btn { background: #1a1a1a; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; text-decoration: none; display: inline-block; margin-top: 8px; }
        .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 2rem; }
        .stat { background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem; text-align: center; }
        .stat-number { font-size: 28px; font-weight: 500; }
        .stat-label { font-size: 12px; color: #888; margin-top: 4px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>MARVEL Resource Library</h1>
        <p>Browse articles, books and resources for D-P-001</p>
      </div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/resources">All Resources</a>
        <a href="/resources/articles">Articles</a>
        <a href="/resources/books">Books</a>
        <a href="/account">My Account</a>
      </div>
      <div class="container">
        <div class="stats">
          <div class="stat">
            <div class="stat-number">${resources.length}</div>
            <div class="stat-label">Total Resources</div>
          </div>
          <div class="stat">
            <div class="stat-number">${resources.filter(r => r.type === 'Article').length}</div>
            <div class="stat-label">Articles</div>
          </div>
          <div class="stat">
            <div class="stat-number">${resources.filter(r => r.type === 'Book').length}</div>
            <div class="stat-label">Books</div>
          </div>
        </div>
        <div class="section-title">Featured Resources</div>
        <div class="grid">
          ${resources.slice(0, 3).map(r => `
            <div class="card">
              <div class="card-title">${r.title}</div>
              <div class="card-meta">By ${r.author}</div>
              <span class="badge">${r.type}</span>
              <span class="badge">${r.topic}</span>
            </div>
          `).join('')}
        </div>
        <br>
        <a href="/resources" class="btn">View All Resources</a>
      </div>
    </body>
    </html>
  `);
});

// All resources
app.get('/resources', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>All Resources — MARVEL Library</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: sans-serif; background: #f5f5f5; color: #1a1a1a; }
        .header { background: #1a1a1a; color: white; padding: 1.5rem 2rem; }
        .header h1 { font-size: 22px; font-weight: 500; }
        .nav { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 0 2rem; display: flex; gap: 2rem; }
        .nav a { display: block; padding: 1rem 0; text-decoration: none; color: #555; font-size: 14px; }
        .nav a:hover { color: #1a1a1a; }
        .container { max-width: 900px; margin: 2rem auto; padding: 0 2rem; }
        .resource-list { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
        .resource-item { padding: 1rem 1.25rem; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
        .resource-item:last-child { border-bottom: none; }
        .resource-title { font-size: 14px; font-weight: 500; }
        .resource-meta { font-size: 12px; color: #888; margin-top: 2px; }
        .badge { display: inline-block; background: #f0f0f0; border-radius: 20px; padding: 2px 10px; font-size: 11px; color: #555; }
        .section-title { font-size: 18px; font-weight: 500; margin-bottom: 1rem; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>MARVEL Resource Library</h1>
      </div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/resources">All Resources</a>
        <a href="/resources/articles">Articles</a>
        <a href="/resources/books">Books</a>
        <a href="/account">My Account</a>
      </div>
      <div class="container">
        <div class="section-title">All Resources (${resources.length})</div>
        <div class="resource-list">
          ${resources.map(r => `
            <div class="resource-item">
              <div>
                <div class="resource-title">${r.title}</div>
                <div class="resource-meta">By ${r.author} · ${r.topic}</div>
              </div>
              <span class="badge">${r.type}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
  `);
});

// Articles only
app.get('/resources/articles', (req, res) => {
  const articles = resources.filter(r => r.type === 'Article');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Articles — MARVEL Library</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: sans-serif; background: #f5f5f5; }
      .header { background: #1a1a1a; color: white; padding: 1.5rem 2rem; }
      .header h1 { font-size: 22px; font-weight: 500; }
      .nav { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 0 2rem; display: flex; gap: 2rem; }
      .nav a { display: block; padding: 1rem 0; text-decoration: none; color: #555; font-size: 14px; }
      .container { max-width: 900px; margin: 2rem auto; padding: 0 2rem; }
      .resource-list { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
      .resource-item { padding: 1rem 1.25rem; border-bottom: 1px solid #f0f0f0; }
      .resource-item:last-child { border-bottom: none; }
      .resource-title { font-size: 14px; font-weight: 500; }
      .resource-meta { font-size: 12px; color: #888; margin-top: 2px; }
      .section-title { font-size: 18px; font-weight: 500; margin-bottom: 1rem; }
    </style>
    </head>
    <body>
      <div class="header"><h1>MARVEL Resource Library</h1></div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/resources">All Resources</a>
        <a href="/resources/articles">Articles</a>
        <a href="/resources/books">Books</a>
        <a href="/account">My Account</a>
      </div>
      <div class="container">
        <div class="section-title">Articles (${articles.length})</div>
        <div class="resource-list">
          ${articles.map(r => `
            <div class="resource-item">
              <div class="resource-title">${r.title}</div>
              <div class="resource-meta">By ${r.author} · ${r.topic}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </body></html>
  `);
});

// Books only
app.get('/resources/books', (req, res) => {
  const books = resources.filter(r => r.type === 'Book');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Books — MARVEL Library</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: sans-serif; background: #f5f5f5; }
      .header { background: #1a1a1a; color: white; padding: 1.5rem 2rem; }
      .header h1 { font-size: 22px; font-weight: 500; }
      .nav { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 0 2rem; display: flex; gap: 2rem; }
      .nav a { display: block; padding: 1rem 0; text-decoration: none; color: #555; font-size: 14px; }
      .container { max-width: 900px; margin: 2rem auto; padding: 0 2rem; }
      .resource-list { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
      .resource-item { padding: 1rem 1.25rem; border-bottom: 1px solid #f0f0f0; }
      .resource-item:last-child { border-bottom: none; }
      .resource-title { font-size: 14px; font-weight: 500; }
      .resource-meta { font-size: 12px; color: #888; margin-top: 2px; }
      .section-title { font-size: 18px; font-weight: 500; margin-bottom: 1rem; }
    </style>
    </head>
    <body>
      <div class="header"><h1>MARVEL Resource Library</h1></div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/resources">All Resources</a>
        <a href="/resources/articles">Articles</a>
        <a href="/resources/books">Books</a>
        <a href="/account">My Account</a>
      </div>
      <div class="container">
        <div class="section-title">Books (${books.length})</div>
        <div class="resource-list">
          ${books.map(r => `
            <div class="resource-item">
              <div class="resource-title">${r.title}</div>
              <div class="resource-meta">By ${r.author} · ${r.topic}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </body></html>
  `);
});

// Account page
app.get('/account', (req, res) => {
  const user = users[0];
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>My Account — MARVEL Library</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: sans-serif; background: #f5f5f5; }
      .header { background: #1a1a1a; color: white; padding: 1.5rem 2rem; }
      .header h1 { font-size: 22px; font-weight: 500; }
      .nav { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 0 2rem; display: flex; gap: 2rem; }
      .nav a { display: block; padding: 1rem 0; text-decoration: none; color: #555; font-size: 14px; }
      .container { max-width: 600px; margin: 2rem auto; padding: 0 2rem; }
      .card { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; padding: 1.5rem; }
      .avatar { width: 60px; height: 60px; border-radius: 50%; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 500; color: #1d4ed8; margin-bottom: 1rem; }
      .user-name { font-size: 18px; font-weight: 500; }
      .user-meta { font-size: 13px; color: #888; margin-top: 4px; }
      .divider { border: none; border-top: 1px solid #f0f0f0; margin: 1rem 0; }
      .info-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; }
      .info-label { color: #888; }
      .section-title { font-size: 18px; font-weight: 500; margin-bottom: 1rem; }
    </style>
    </head>
    <body>
      <div class="header"><h1>MARVEL Resource Library</h1></div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/resources">All Resources</a>
        <a href="/resources/articles">Articles</a>
        <a href="/resources/books">Books</a>
        <a href="/account">My Account</a>
      </div>
      <div class="container">
        <div class="section-title">My Account</div>
        <div class="card">
          <div class="avatar">PD</div>
          <div class="user-name">${user.name}</div>
          <div class="user-meta">${user.role} — UVCE MARVEL</div>
          <hr class="divider">
          <div class="info-row"><span class="info-label">Email</span><span>${user.email}</span></div>
          <div class="info-row"><span class="info-label">Role</span><span>${user.role}</span></div>
          <div class="info-row"><span class="info-label">Institution</span><span>UVCE, Bengaluru</span></div>
          <div class="info-row"><span class="info-label">Course</span><span>D-P-001 Level 1</span></div>
        </div>
      </div>
    </body></html>
  `);
});

// API endpoints
app.get('/api/resources', (req, res) => {
  res.json(resources);
});

app.get('/api/resources/:id', (req, res) => {
  const resource = resources.find(r => r.id === parseInt(req.params.id));
  if (!resource) return res.status(404).json({ error: 'Resource not found' });
  res.json(resource);
});

app.listen(PORT, () => {
  console.log(`MARVEL Resource Library running at http://localhost:${PORT}`);
});