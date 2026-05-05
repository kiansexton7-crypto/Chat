// ============================================================
// CHAT APP — CORE APP LOGIC
// Navigation, modals, toasts
// ============================================================

// ============================================================
// PAGE ROUTING
// ============================================================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(n => {
    n.classList.toggle("active", n.dataset.page === pageId);
  });
}

// ============================================================
// SIDEBAR NAVIGATION
// ============================================================
function setupNav() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(item.dataset.page);
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("open");
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => sidebar.classList.toggle("open"));
  }
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, duration = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

// Make showToast global (used by cloak.js)
window.showToast = showToast;

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  showPage("chat"); // Default to chat page
});

