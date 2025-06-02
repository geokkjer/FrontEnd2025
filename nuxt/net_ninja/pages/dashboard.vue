<template>
  <div class="dashboard-layout">
    <!-- Header -->
    <header class="dashboard-header">
      <div class="header-content">
        <div class="logo">
          <h1>Dashboard</h1>
        </div>
        <nav class="header-nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/analytics" class="nav-link">Analytics</NuxtLink>
          <NuxtLink to="/settings" class="nav-link">Settings</NuxtLink>
        </nav>
        <div class="user-menu">
          <button class="user-avatar">
            <span>JD</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="dashboard-body">
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li><NuxtLink to="/dashboard" class="nav-item">📊 Overview</NuxtLink></li>
            <li><NuxtLink to="/users" class="nav-item">👥 Users</NuxtLink></li>
            <li><NuxtLink to="/projects" class="nav-item">📁 Projects</NuxtLink></li>
            <li><NuxtLink to="/reports" class="nav-item">📈 Reports</NuxtLink></li>
            <li><NuxtLink to="/tasks" class="nav-item">✅ Tasks</NuxtLink></li>
            <li><NuxtLink to="/calendar" class="nav-item">📅 Calendar</NuxtLink></li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="dashboard-main">
        <div class="main-header">
          <h2>Welcome to Dashboard</h2>
          <p class="subtitle">Monitor your business metrics and performance</p>
        </div>

        <div class="dashboard-grid">
          <!-- Stats Cards -->
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Users</h3>
              <p class="stat-number">12,543</p>
              <span class="stat-change positive">+12%</span>
            </div>
            <div class="stat-card">
              <h3>Revenue</h3>
              <p class="stat-number">$45,231</p>
              <span class="stat-change positive">+8%</span>
            </div>
            <div class="stat-card">
              <h3>Orders</h3>
              <p class="stat-number">1,234</p>
              <span class="stat-change negative">-3%</span>
            </div>
            <div class="stat-card">
              <h3>Conversion</h3>
              <p class="stat-number">3.24%</p>
              <span class="stat-change positive">+0.5%</span>
            </div>
          </div>

          <!-- Content Sections -->
          <div class="content-section">
            <h3>Recent Activity</h3>
            <div class="activity-list">
              <div class="activity-item">
                <span class="activity-icon">👤</span>
                <span>New user registered</span>
                <span class="activity-time">2 min ago</span>
              </div>
              <div class="activity-item">
                <span class="activity-icon">💰</span>
                <span>Payment received</span>
                <span class="activity-time">5 min ago</span>
              </div>
              <div class="activity-item">
                <span class="activity-icon">📝</span>
                <span>Report generated</span>
                <span class="activity-time">10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="dashboard-footer">
      <div class="footer-content">
        <p>&copy; 2025 Dashboard App. All rights reserved.</p>
        <div class="footer-links">
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
          <NuxtLink to="/support">Support</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Dashboard - Home',
  meta: [
    { name: 'description', content: 'Main dashboard overview' }
  ]
})
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #f8fafc;
}

/* Header */
.dashboard-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
  margin: 0;
}

.header-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3b82f6;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

/* Body */
.dashboard-body {
  display: grid;
  grid-template-columns: 250px 1fr;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* Sidebar */
.dashboard-sidebar {
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 2rem 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: block;
  padding: 0.75rem 2rem;
  color: #64748b;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f1f5f9;
  color: #3b82f6;
}

/* Main Content */
.dashboard-main {
  padding: 2rem;
  overflow-y: auto;
}

.main-header {
  margin-bottom: 2rem;
}

.main-header h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #64748b;
  margin: 0;
}

.dashboard-grid {
  display: grid;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-weight: 600;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #1e293b;
  margin: 0;
}

.stat-change {
  font-size: 0.875rem;
  font-weight: 500;
}

.stat-change.positive {
  color: #10b981;
}

.stat-change.negative {
  color: #ef4444;
}

.content-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-section h3 {
  margin: 0 0 1rem 0;
  color: #1e293b;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
}

.activity-icon {
  font-size: 1.25rem;
}

.activity-time {
  margin-left: auto;
  color: #64748b;
  font-size: 0.875rem;
}

/* Footer */
.dashboard-footer {
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 1rem 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  color: #64748b;
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: #64748b;
  text-decoration: none;
}

.footer-links a:hover {
  color: #3b82f6;
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-body {
    grid-template-columns: 1fr;
  }
  
  .dashboard-sidebar {
    display: none;
  }
  
  .header-content {
    padding: 1rem;
  }
  
  .header-nav {
    display: none;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>