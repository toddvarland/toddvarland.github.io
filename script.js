/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
// Not used in this blog version, but kept for potential expansion

/*==================== QUALIFICATION TABS ====================*/
// Not used in this blog version, but kept for potential expansion

/*==================== SERVICES MODAL ====================*/
// Not used in this blog version, but kept for potential expansion

/*==================== PORTFOLIO SWIPER ====================*/
// Not used in this blog version, but kept for potential expansion

/*==================== TESTIMONIAL ====================*/
// Not used in this blog version, but kept for potential expansion

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('nav');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    if (themeButton) themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}

/*==================== BLOG POSTS DATA ====================*/
const blogPosts = [
    {
        id: 1,
        title: "Building Responsive Web Applications",
        description: "Learn the essential techniques for creating web applications that work seamlessly across all devices and screen sizes.",
        date: "2025-09-10",
        image: "https://via.placeholder.com/400x200/667eea/ffffff?text=Responsive+Design",
        slug: "building-responsive-web-applications",
        content: `
            <p>In today's digital landscape, creating responsive web applications is not just a nice-to-have feature—it's essential. With users accessing websites from devices ranging from smartphones to large desktop monitors, ensuring your application looks and functions perfectly across all screen sizes is crucial.</p>
            
            <h2>The Mobile-First Approach</h2>
            <p>Starting with mobile design and progressively enhancing for larger screens is the most effective strategy. This approach ensures that your core functionality works on the most constrained devices first.</p>
            
            <h2>CSS Grid and Flexbox</h2>
            <p>Modern CSS layout techniques like Grid and Flexbox provide powerful tools for creating flexible, responsive layouts without relying on complex media queries for basic positioning.</p>
            
            <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>
            
            <h2>Performance Considerations</h2>
            <p>Responsive design isn't just about layout—it's also about delivering the right assets for each device. Consider using responsive images and lazy loading to optimize performance.</p>
        `
    },
    {
        id: 2,
        title: "JavaScript ES6+ Features You Should Know",
        description: "Explore modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.",
        date: "2025-09-08",
        image: "https://via.placeholder.com/400x200/f093fb/ffffff?text=JavaScript+ES6",
        slug: "javascript-es6-features",
        content: `
            <p>JavaScript has evolved significantly over the past few years. The ES6+ features have transformed how we write JavaScript, making it more readable, maintainable, and powerful.</p>
            
            <h2>Arrow Functions</h2>
            <p>Arrow functions provide a more concise way to write functions and automatically bind the context.</p>
            
            <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>
            
            <h2>Destructuring Assignment</h2>
            <p>Extract values from arrays or properties from objects in a clean, readable way.</p>
            
            <pre><code>const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;

const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;</code></pre>
            
            <h2>Template Literals</h2>
            <p>Create strings with embedded expressions using backticks instead of concatenation.</p>
            
            <pre><code>const message = \`Hello, \${name}! You are \${age} years old.\`;</code></pre>
        `
    },
    {
        id: 3,
        title: "The Future of Web Development",
        description: "Discover emerging trends and technologies that are shaping the future of web development in 2025 and beyond.",
        date: "2025-09-05",
        image: "https://via.placeholder.com/400x200/4ade80/ffffff?text=Future+Web",
        slug: "future-of-web-development",
        content: `
            <p>Web development is constantly evolving, with new frameworks, tools, and methodologies emerging regularly. Let's explore what the future holds for web developers.</p>
            
            <h2>WebAssembly (WASM)</h2>
            <p>WebAssembly is enabling near-native performance in the browser, opening up possibilities for complex applications that were previously impossible on the web.</p>
            
            <h2>Progressive Web Apps (PWAs)</h2>
            <p>PWAs continue to blur the line between web and native applications, offering offline functionality, push notifications, and app-like experiences.</p>
            
            <h2>AI-Assisted Development</h2>
            <p>AI tools are becoming increasingly sophisticated, helping developers write code faster and catch bugs earlier in the development process.</p>
            
            <h2>Edge Computing</h2>
            <p>Moving computation closer to users through edge computing is reducing latency and improving user experiences globally.</p>
        `
    }
];

/*==================== LOAD BLOG POSTS ====================*/
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;

    // Clear existing content
    blogContainer.innerHTML = '';

    // Load latest 3 posts for homepage
    const postsToShow = blogPosts.slice(0, 3);

    postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog__card fade-in-up';
        
        postElement.innerHTML = `
            <div class="blog__img" style="background-image: url(${post.image}); background-size: cover; background-position: center;"></div>
            <h3 class="blog__title">
                <a href="post.html?slug=${post.slug}">${post.title}</a>
            </h3>
            <p class="blog__description">${post.description}</p>
            <div class="blog__footer">
                <span class="blog__date">${formatDate(post.date)}</span>
                <a href="post.html?slug=${post.slug}" class="blog__read-more">Read More →</a>
            </div>
        `;
        
        blogContainer.appendChild(postElement);
    });
}

/*==================== FORMAT DATE ====================*/
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/*==================== SMOOTH SCROLLING ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Load blog posts on page load
    loadBlogPosts();

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.blog__card, .about__box, .contact__card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

/*==================== EMAIL VALIDATION ====================*/
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*==================== TYPING ANIMATION ====================*/
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/*==================== SCROLL REVEAL ANIMATIONS ====================*/
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

/*==================== LAZY LOADING IMAGES ====================*/
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

/*==================== SEARCH FUNCTIONALITY ====================*/
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                if (searchResults) searchResults.innerHTML = '';
                return;
            }
            
            const results = blogPosts.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.content.toLowerCase().includes(query)
            );
            
            displaySearchResults(results, query);
        });
    }
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = `<p>No results found for "${query}"</p>`;
        return;
    }
    
    searchResults.innerHTML = results.map(post => `
        <div class="search-result">
            <h3><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
            <p>${post.description}</p>
            <small>${formatDate(post.date)}</small>
        </div>
    `).join('');
}

/*==================== EXPORT FOR USE IN OTHER PAGES ====================*/
// Make blog posts data available globally for other pages
window.blogPosts = blogPosts;
window.formatDate = formatDate;