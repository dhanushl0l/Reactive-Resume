(function () {
  'use strict';

  // Replace Header
  function replaceHeader() {
    const existingHeader = document.querySelector('header.fixed.inset-x-0.top-0.z-20');

    if (!existingHeader) {
      console.log('Header not found, retrying...');
      return false;
    }

    const newHeaderHTML = `
      <header class="navbar">
        <div class="logo">
        <a href="https://kodepilot.in/" class="logo">
          <img src="/assets/images/logo/image.png" alt="KodePilot Logo" style="height: 40px;">
        </a>
        </div>
        <div class="right-section" id="rightSection">
          <div class="dropdown">
            <a href="#" class="nav-item dropdown-toggle">Candidates</a>
            <div class="dropdown-content">
              <a href="javascript:goToLogin()">Login</a>
              <a href="/jobs" target="_blank">Jobs</a>
              <a href="/walkin" target="_blank">Walk-in</a>
              <a href="/internship" target="_blank">Internships</a>
              <a href="/resume" target="_blank">Resume Builder</a>
              <a href="/testimonials" target="_blank">Testimonials</a>
            </div>
          </div>
          <a href="javascript:getInTouch('https://cal.com/kodepilot/15min')" class="nav-item">Let's Talk</a>
          <a href="/contact-us" target="_blank" class="nav-item">Contact Us</a>
          <a href="/apply" target="_blank" class="apply-btn">Apply Now</a>
          <a href="javascript:void(0)" class="whatsapp-btn"
             onclick="WhatsgetInTouch('Hi KodePilot Team, I have a question about your program. Can you help?')"
             rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <img src="assets/whatsapp.svg" alt="WhatsApp" class="whatsapp-icon">
          </a>
        </div>
        <a href="/apply" target="_blank" class="apply-btn applay-btn">Apply Now</a>
        <button class="menu-toggle" id="menuToggle" style="font-size: 60px;">☰</button>
        <div class="mobile-slide-menu" id="mobileMenu">
          <a href="javascript:goToLogin()">Login</a>
          <a href="/jobs" target="_blank">Jobs</a>
          <a href="/walkin" target="_blank">Walk-in</a>
          <a href="/internship" target="_blank">Internships</a>
          <a href="/resume" target="_blank">Resume Builder</a>
          <a href="/testimonials" target="_blank">Testimonials</a>
          <a href="javascript:getInTouch('https://cal.com/kodepilot/15min')">Let's Talk</a>
          <a href="/contact-us" target="_blank">Contact Us</a>
          <a href="javascript:void(0)" onclick="WhatsgetInTouch()" target="_blank">
            Chat on WhatsApp
          </a>
        </div>
      </header>
    `;

    const temp = document.createElement('div');
    temp.innerHTML = newHeaderHTML;
    const newHeader = temp.firstElementChild;
    existingHeader.parentNode.replaceChild(newHeader, existingHeader);

    console.log('Header replaced successfully');
    return true;
  }

  // Replace Footer
  function replaceFooter() {
    const existingFooter = document.querySelector('footer.bg-background');

    if (!existingFooter) {
      console.log('Footer not found, retrying...');
      return false;
    }

    const newFooterHTML = `
         <footer class="footer">
            <div class="footer-container">
                <div class="footer-section company-section">
                    <div class="logo" style="text-align: left; margin-left: 0; padding-left: 0;">KodePilot</div>
                    <p class="tagline">Built with <span class="heart">❤</span> in India for the world</p>
                    <div class="contact-info">
                        <h4>Stay Connected</h4>

                        <div style="margin-bottom: 20px; line-height: 23px;">
                            <div class="contact-item">
                                <!-- Email link -->
                                <a href="mailto:careers@kodepilot.in" style="color: white; text-decoration: none;">
                                    careers@kodepilot.in
                                </a>
                            </div>
                            <div class="contact-item">
                                <!-- Phone link -->
                                <a href="tel:+918870760431" style="color: white; text-decoration: none;">
                                    +91 88707 60431
                                </a>
                            </div>
                        </div>

                        <div>
                            <strong style="color: white; font-size: 14px; line-height: 30px;">Support Inquiries</strong>
                            <div style="margin-bottom: 20px; line-height: 23px;">
                                <div class="contact-item">
                                    <!-- Support email link -->
                                    <a href="mailto:support@kodepilot.in" style="color: white; text-decoration: none;">
                                        support@kodepilot.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media Icons -->
                    </div>

                    <div class="newsletter-section">
                        <h4>Stay Updated</h4>
                        <p>We'll send you updates on the latest courses and coding opportunities to enhance your skills
                            and
                            advance your career.</p>

                        <!-- <div class="newsletter-form">
                            <input type="email" placeholder="Subscribe to our newsletter!">
                            <button type="submit">></button>
                        </div> -->

                        <div class="newsletter-form">
                            <form method="POST" action="/api/subscribe.php">
                                <input type="email" name="email" placeholder="Subscribe to our newsletter!" required>
                                <button type="submit">></button>
                            </form>
                        </div>

                        <div class="action-buttons">
                            <a href="#" class="btn btn-primary">Start Learning Now</a>
                            <a href="#available-courses" class="btn btn-secondary"><i class="fas fa-code"></i> View
                                Courses</a>
                        </div>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Courses</h3>
                    <ul>
                        <li><a href="#">Software Development</a></li>
                        <li><a href="#">Cloud & DevOps</a></li>
                        <li><a href="#">AI & Data</a></li>
                        <li><a href="#">Cybersecurity</a></li>
                        <li><a href="#">Quality & Testing</a></li>
                        <li><a href="#">Enterprise Tech</a></li>
                    </ul>

                    <h3 style="margin-top: 30px;">Learning Paths</h3>
                    <ul>
                        <li><a href="#">Beginner to Pro</a></li>
                        <li><a href="#">Career Switcher</a></li>
                        <li><a href="#">Skill Enhancement</a></li>
                        <li><a href="#">Project-Based Learning</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Coding Tutorials</a></li>
                        <li><a href="#">Blog Articles</a></li>
                        <li><a href="#">Code Challenges</a></li>
                        <li><a href="#">Live Workshops</a></li>
                        <li><a href="#">Student Projects</a></li>
                        <li><a href="#">Career Guidance</a></li>
                        <li><a href="#">Interview Preparation</a></li>
                    </ul>

                    <h3 style="margin-top: 30px;">Community</h3>
                    <ul>
                        <li><a href="#">Forums & Study Groups</a></li>
                        <li><a href="#">Code Reviews</a></li>
                        <li><a href="#">Mentorship & Alumni</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>
                    Copyright © 2025
                    <a href="https://kodepilot.in" target="_blank">KodePilot</a>
                    - All rights reserved.
                </p>
                <div class="social-icons"
                    style="display: flex; gap: 0.4rem; justify-content: flex-start; align-items: center; margin-top: 0.5rem;">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                        <img src="assets/images/icons/Instagram.svg" alt="Instagram"
                            style="width: 40px; height: auto; transition: transform 0.2s;"
                            onmouseover="this.style.transform='scale(1.1)'"
                            onmouseout="this.style.transform='scale(1)'">
                    </a>
                    <a href="https://www.linkedin.com/company/kodepilot/" target="_blank" rel="noopener"
                        aria-label="LinkedIn">
                        <img src="assets/images/icons/linkedn.svg" alt="LinkedIn"
                            style="width: 40px; height: auto; transition: transform 0.2s;"
                            onmouseover="this.style.transform='scale(1.1)'"
                            onmouseout="this.style.transform='scale(1)'">
                    </a>
                    <a href="https://whatsapp.com/channel/0029VbAVO112ER6ldIf4RZ2E" target="_blank" rel="noopener"
                        aria-label="WhatsApp">
                        <img src="assets/images/icons/whatsapp.svg" alt="WhatsApp"
                            style="width: 40px; height: auto; transition: transform 0.2s;"
                            onmouseover="this.style.transform='scale(1.1)'"
                            onmouseout="this.style.transform='scale(1)'">
                    </a>
                    <a href="https://discord.gg/yBGaYsecS" target="_blank" rel="noopener" aria-label="Discord">
                        <img src="assets/images/icons/discord.svg" alt="Discord"
                            style="width: 40px; height: auto; transition: transform 0.2s;"
                            onmouseover="this.style.transform='scale(1.1)'"
                            onmouseout="this.style.transform='scale(1)'">
                    </a>
                </div>

            </div>
        </footer>
    `;

    const temp = document.createElement('div');
    temp.innerHTML = newFooterHTML;
    const newFooter = temp.firstElementChild;
    existingFooter.parentNode.replaceChild(newFooter, existingFooter);

    console.log('Footer replaced successfully');
    return true;
  }

  // Initialize replacements
  function init() {
    let headerAttempts = 0;
    let footerAttempts = 0;
    const maxAttempts = 20;

    const headerInterval = setInterval(function () {
      headerAttempts++;
      if (replaceHeader() || headerAttempts >= maxAttempts) {
        clearInterval(headerInterval);
      }
    }, 100);

    const footerInterval = setInterval(function () {
      footerAttempts++;
      if (replaceFooter() || footerAttempts >= maxAttempts) {
        clearInterval(footerInterval);
      }
    }, 100);
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Listen for navigation changes
  window.addEventListener('popstate', init);
})();

// Navigation Functions
function goToLogin() {
  window.location.href = "https://app.kodepilot.in/login/index.php";
}

function goToApplay() {
  window.location.href = "/apply/";
}

function getInTouch(vall) {
  window.open(vall, "_blank");
}

function WhatsgetInTouch(customMessage) {
  const defaultMessage = "Hi KodePilot Team,\n\nI came across your website and would like to know more about your Career Guidance and Placement support services. Could you please share the details?\n\nThanks!";
  const message = customMessage && customMessage.trim() !== "" ? customMessage : defaultMessage;
  const url = "https://wa.me/919787466226?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function getInZoho() {
  window.open("/apply");
}


function waitForElements(selectors, callback) {
  const interval = setInterval(() => {
    const elements = selectors.map(sel => document.querySelector(sel));

    if (elements.every(el => el)) {
      clearInterval(interval);
      callback(...elements);
    }
  }, 50); // check every 50ms
}

waitForElements(['#menuToggle', '#mobileMenu'], (menuToggle, mobileMenu) => {
  console.log('✅ Menu elements detected, initializing...');

  // Toggle menu
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Close when clicking menu link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});


let allCourses = [];
let searchResultsContainer = null;

const initializeSearch = () => {
  const searchInput = document.querySelector('.search');
  if (!searchInput) return;

  searchResultsContainer = document.createElement('div');
  searchResultsContainer.className = 'search-results-container';
  Object.assign(searchResultsContainer.style, {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    maxHeight: '500px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '8px',
    marginTop: '8px',
    zIndex: '1000',
    display: 'none',
    width: '400px',
    left: '100px'
  });

  const searchParent = searchInput.parentElement;
  if (searchParent.style.position !== 'relative' && searchParent.style.position !== 'absolute') {
    searchParent.style.position = 'fixed';
  }
  searchParent.appendChild(searchResultsContainer);

  // Debounce function
  const debounce = (fn, delay = 250) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  // Search and filter courses
  const searchCourses = (query) => {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      searchResultsContainer.style.display = 'none';
      return;
    }

    const matches = allCourses.filter(course =>
      course.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm)
    );

    renderSearchResults(matches);
    searchResultsContainer.style.display = 'block';
  };

  // Event listeners
  const debouncedSearch = debounce(searchCourses, 200);
  searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchParent.contains(e.target)) {
      searchResultsContainer.style.display = 'none';
    }
  });

  // Show results when focusing with text
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
      searchCourses(searchInput.value);
    }
  });
};

// Render search results
const renderSearchResults = (courses) => {
  if (!searchResultsContainer) return;

  if (courses.length === 0) {
    searchResultsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">No courses found</div>';
    return;
  }

  searchResultsContainer.innerHTML = courses.map(course => `
    <div class="search-result-item" style="
      padding: 16px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: background-color 0.2s;
    " onmouseover="this.style.backgroundColor='#f8f9fa'" onmouseout="this.style.backgroundColor='#fff'">
      <a href="${course.link}" target="_blank" style="text-decoration: none; color: inherit; display: flex; gap: 12px;">
        ${course.image ? `
          <div style="
            width: 80px;
            height: 60px;
            background-image: url(${course.image});
            background-size: cover;
            background-position: center;
            border-radius: 6px;
            flex-shrink: 0;
          "></div>
        ` : ''}
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 600; color: #2563eb; margin-bottom: 4px; font-size: 14px;">${course.name}</div>
          <div style="font-size: 12px; color: #666; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${course.description}</div>
          ${course.category ? `<div style="font-size: 11px; color: #999; margin-top: 4px;">📚 ${course.category}</div>` : ''}
        </div>
      </a>
    </div>
  `).join('');
};

// Fetch and store courses
document.addEventListener('DOMContentLoaded', async () => {
  const origin = window.location.origin;
  const proxy = `${origin}/proxy.php?url=`;

  // Check if we're on the root path
  const isRootPath = window.location.pathname === '/';

  try {
    // Fetch main page
    const res = await fetch(proxy + encodeURIComponent('https://app.kodepilot.in/course/index.php'));
    const html = await res.text();

    // Extract categories
    const categoryRegex = /<h3 class="categoryname aabtn"><a href="([^"]+)">([^<]+)<\/a><\/h3>/g;
    const categories = [];
    let match;

    while ((match = categoryRegex.exec(html)) !== null) {
      const fullUrl = match[1].startsWith('http')
        ? match[1]
        : 'https://app.kodepilot.in/' + match[1].replace(/^\//, '');
      categories.push({ url: fullUrl, name: match[2] });
    }

    // Fetch each category
    for (const category of categories) {
      const resCat = await fetch(proxy + encodeURIComponent(category.url));
      const catHtml = await resCat.text();
      const cleanHtml = catHtml.replace(/\n/g, ' ');

      const courseRegex = /<div class="card dashboard-card [^"]*"[^>]*>.*?<a href="([^"]+)"[^>]*>.*?background-image: url\(([^)]+)\);".*?<span class="sr-only">(.*?)<\/span>.*?<div class="course-category">\s*([^<]+)<\/div>.*?<div class="course-summary">.*?<p>(.*?)<\/p>/g;

      while ((match = courseRegex.exec(cleanHtml)) !== null) {
        const courseLink = match[1].startsWith('http')
          ? match[1]
          : 'https://app.kodepilot.in/' + match[1].replace(/^\//, '');
        const imageLink = match[2].startsWith('http')
          ? match[2]
          : 'https://app.kodepilot.in/' + match[2].replace(/^\//, '');

        allCourses.push({
          category: match[4].trim(),
          link: courseLink,
          image: imageLink,
          name: match[3].trim(),
          description: match[5].replace(/<br\s*\/?>/g, ' ').trim(),
        });
      }
    }

    console.log(`✅ Loaded ${allCourses.length} courses`);
    console.table(allCourses);

    // Initialize search after courses are loaded (works on all pages)
    initializeSearch();

    // Render courses by default ONLY on root path "/"
    if (isRootPath && typeof renderCourses === 'function') {
      renderCourses(allCourses);
    }
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
});
