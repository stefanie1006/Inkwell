// Create the main app container
const inkwellApp = document.createElement('div');
inkwellApp.id = 'inkwell-app';

// Add styles
const style = document.createElement('style');
style.textContent = `
:root {
    --paper: #f8f4e8;
    --ink: #3a3226;
    --accent: #8b5a2b;
    --highlight: #e8d8c0;
    --floral: url('./Images/floral1.jpg');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#inkwell-app {
    font-family: 'Cormorant Garamond', serif;
    background-color: var(--paper);
    color: var(--ink);
    line-height: 1.6;
    min-height: 100vh;
    background-image: var(--floral), linear-gradient(to bottom, rgba(248, 244, 232, 0.9), rgba(248, 244, 232, 0.9));
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    padding: 30px 0;
    border-bottom: 1px solid rgba(58, 50, 38, 0.1);
    background-color: rgba(248, 244, 232, 0.8);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(5px);
}

.logo {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    display: flex;
    align-items: center;
}

.logo i {
    margin-right: 15px;
    font-size: 2rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--ink);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--accent);
}

.cta-button {
    background-color: var(--accent);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 10px rgba(139, 90, 43, 0.2);
    text-decoration: none;
    display: inline-block;
}

.cta-button:hover {
    background-color: #7a4b24;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 90, 43, 0.3);
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    min-height: 90vh;
    padding: 60px 0;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.5;
    z-index: -1;
}

.hero-content {
    flex: 1;
    padding-right: 50px;
    position: relative;
}

.hero-image {
    flex: 1;
    position: relative;
    **max-width: 100px;        /* Limits the image width */
    margin: 10px auto;        /* Centers the image if it's in a flex or block layout */
    overflow: hidden;         /* Ensures border-radius is applied properly */
**
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    position: relative;
    display: inline-block;
}

.hero h1::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    max-width: 600px;
}

.journal-mockup {
    width: 100%;
    max-width: 500px;
    border-radius: 5px;
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
    transform: rotate(3deg);
    transition: transform 0.5s ease;
    border: 15px solid white;
    border-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="%238b5a2b" stroke-width="2" stroke-dasharray="5,5"/></svg>') 15 round;
}

.journal-mockup:hover {
    transform: rotate(0deg) scale(1.02);
}

/* Features */
.features {
    padding: 80px 0;
    background-color: rgba(255, 255, 255, 0.7);
    position: relative;
}

.features::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%238b5a2b" opacity="0.05"><path d="M20,20 Q30,10 40,20 T60,20 T80,20"></path></svg>');
    background-repeat: repeat;
    z-index: -1;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 60px;
    position: relative;
}

.section-title::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background-color: var(--accent);
    margin: 15px auto 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.feature-card {
    background-color: white;
    padding: 40px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    border: 1px solid rgba(58, 50, 38, 0.1);
    position: relative;
    overflow: hidden;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--accent);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

/* About Section */
.about {
    padding: 100px 0;
    background-color: var(--paper);
    position: relative;
}

.about-container {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image {
    flex: 1;
    position: relative;
}

.about-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 5px;
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(139, 90, 43, 0.2);
}

.about-image::before {
    content: "";
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--accent);
    border-radius: 5px;
    z-index: -1;
    opacity: 0.3;
}

.about-content {
    flex: 1;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: var(--accent);
}

.about p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.8;
}

/* Testimonials */
.testimonials {
    padding: 80px 0;
    background-color: rgba(139, 90, 43, 0.05);
    position: relative;
}

.testimonial-slider {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.testimonial {
    padding: 40px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin: 20px;
    border: 1px solid rgba(58, 50, 38, 0.1);
}

.testimonial-text {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 20px;
    position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
    content: '"';
    font-size: 3rem;
    color: var(--accent);
    opacity: 0.3;
    position: absolute;
}

.testimonial-text::before {
    top: -20px;
    left: -15px;
}

.testimonial-text::after {
    bottom: -40px;
    right: -15px;
}

.testimonial-author {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

footer {
    background-color: transparent;
    padding: 10px 10px;
    text-align: center;
    color: var(--ink);
    border-top: 1px solid rgba(58, 50, 38, 0.1);
    font-family: 'Garamond';
}

.footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 10px;
    font-weight: 600;
}

.footer-logo .logo i {
    color: var(--accent);
}

.copyright {
    font-size: 14px;
    color: var(--ink);
    opacity: 0.6;
    font-family: 'Montserrat';
    align-items: center;
}

/* Journal Modal */
.journal-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 1000;
}

.journal-modal-content {
    background: #f8f4e8;
    margin: 5% auto;
    padding: 30px;
    width: 80%;
    max-width: 700px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    position: relative;
    background-image: var(--floral);
}

.journal-paper {
    background: white;
    padding: 30px;
    border: 1px solid #e0d6c0;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
    min-height: 300px;
    margin-top: 20px;
    position: relative;
}

.journal-paper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40px;
    width: 1px;
    height: 100%;
    background: repeating-linear-gradient(to bottom, 
        transparent, 
        transparent 24px, 
        rgba(139, 90, 43, 0.1) 24px, 
        rgba(139, 90, 43, 0.1) 25px);
}

.journal-paper textarea {
    width: 100%;
    min-height: 250px;
    border: none;
    resize: none;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    line-height: 1.8;
    padding: 10px 10px 10px 20px;
    background: transparent;
}

.journal-tools {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.formatting-tools button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 10px;
    color: #8b5a2b;
}

#saveEntry {
    background: #8b5a2b;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 3px;
    cursor: pointer;
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--accent);
}

.entry-date {
    color: #8b5a2b;
    margin-bottom: 15px;
    font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
        padding: 40px 0;
    }
    
    .hero-content {
        padding-right: 0;
        margin-bottom: 40px;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero p {
        margin: 0 auto 30px;
    }
    
    .nav-links {
        display: none;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 30px;
    }
    
    .about-container {
        flex-direction: column;
    }
    
    .about-image {
        margin-bottom: 40px;
    }
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 1s ease forwards;
}
`;

// Add the style to the head
document.head.appendChild(style);

// Create the header
const header = document.createElement('header');
header.innerHTML = `
<div class="container">
    <nav>
        <div class="logo">
            <i class="fas fa-book-open"></i>
            <span>Inkwell</span>
        </div>
        <div class="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
        </div>
        <button class="cta-button" id="startJournalBtn">Start Your Journal Today</button>
    </nav>
</div>
`;

// Create the hero section
const hero = document.createElement('section');
hero.className = 'hero';
hero.innerHTML = `
<div class="container">
    <div class="hero-content">
        <h1 class="notebook-lines">Your Thoughts, Beautifully Preserved</h1>
        <p class="notebook-lines">Inkwell is the elegant digital journal that combines the timeless feel of paper with modern technology. Write freely, reflect deeply, and cherish your memories forever.</p>
        <button class="cta-button" id="startJournalBtn2">Start Your Journal Today</button>
    </div>
    <div class="hero-image">
         <img src="./Images/wow3.jpg" alt="Image" style="width: 55%;">
    </div>
</div>
`;

// Create features section
const features = document.createElement('section');
features.className = 'features';
features.id = 'features';
features.innerHTML = `
<div class="container">
    <h2 class="section-title">Designed for Reflection</h2>
    <div class="features-grid">
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-pen-fancy"></i>
            </div>
            <h3>Elegant Writing</h3>
            <p>Our distraction-free editor with custom fonts and ink colors makes writing a pleasure.</p>
        </div>
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-lock"></i>
            </div>
            <h3>Complete Privacy</h3>
            <p>End-to-end encryption ensures your private thoughts remain yours alone.</p>
        </div>
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Always With You</h3>
            <p>Access your journal from any device, online or offline.</p>
        </div>
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-search"></i>
            </div>
            <h3>Smart Search</h3>
            <p>Find any entry instantly with our powerful search and tagging system.</p>
        </div>
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-cloud-moon"></i>
            </div>
            <h3>Night Mode</h3>
            <p>Write comfortably at night with our warm, eye-friendly dark theme.</p>
        </div>
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3>Export Options</h3>
            <p>Print beautiful books or PDFs of your journals to keep forever.</p>
        </div>
    </div>
</div>
`;

// Create about section
const about = document.createElement('section');
about.className = 'about';
about.id = 'about';
about.innerHTML = `
<div class="container">
    <div class="about-container">
        <div class="about-image">
            <img src="./Images/hello4.jpg">
        </div>
        <div class="about-content">
            <h2>Our Story</h2>
            <p>Inkwell was born from a love of the written word and the timeless tradition of journaling. Our founder, a lifelong diarist, wanted to create a digital space that captured the intimacy and beauty of writing in a physical journal.</p>
            <p>We believe in the power of reflection and the importance of preserving your thoughts in a format that feels special. Every element of Inkwell is designed to make your writing experience joyful and meaningful.</p>
            <p>Our team of writers, designers, and developers work together to create tools that support your personal growth and creativity. We're passionate about helping you document your journey through life.</p>
        </div>
    </div>
</div>
`;

// Create testimonials section
const testimonials = document.createElement('section');
testimonials.className = 'testimonials';
testimonials.id = 'testimonials';
testimonials.innerHTML = `
<div class="container">
    <h2 class="section-title">What Our Writers Say</h2>
    <div class="testimonial-slider">
        <div class="testimonial">
            <p class="testimonial-text">Inkwell has transformed my journaling practice. The elegant interface makes me want to write every day, and I love knowing my memories are safely preserved.</p>
            <p class="testimonial-author">— Sarah J., Daily Journaler</p>
        </div>
    </div>
</div>
`;

// Create footer
const footer = document.createElement('footer');
footer.innerHTML = `
<div class="footer-content">
    <div class="footer-logo">
        <div class="logo">
            <i class="fas fa-book-open"></i>
            <span>Inkwell</span>
        </div>
    <div class="copyright">
        © ${new Date().getFullYear()} Inkwell. All rights reserved.
    </div>
</div>
`;

// Create journal modal
const journalModal = document.createElement('div');
journalModal.id = 'journalModal';
journalModal.className = 'journal-modal';
journalModal.innerHTML = `
<div class="journal-modal-content">
    <span class="close-modal">&times;</span>
    <h2>Your Inkwell Journal</h2>
    <div class="entry-date" id="currentDate"></div>
    <div class="journal-paper">
        <textarea placeholder="Dear Journal, today I..."></textarea>
        <div class="journal-tools">
            <button id="saveEntry"><i class="fas fa-save"></i> Save Entry</button>
            <div class="formatting-tools">
                <button data-format="bold"><i class="fas fa-bold"></i></button>
                <button data-format="italic"><i class="fas fa-italic"></i></button>
            </div>
        </div>
    </div>
</div>
`;

// Add all sections to the app
inkwellApp.appendChild(header);
inkwellApp.appendChild(hero);
inkwellApp.appendChild(features);
inkwellApp.appendChild(about);
inkwellApp.appendChild(testimonials);
inkwellApp.appendChild(footer);
inkwellApp.appendChild(journalModal);

// Add the app to the body
document.body.appendChild(inkwellApp);

// Load Font Awesome
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesome);

// Load Google Fonts
const googleFonts = document.createElement('link');
googleFonts.rel = 'stylesheet';
googleFonts.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;600&display=swap';
document.head.appendChild(googleFonts);

// Add JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation for elements as they scroll into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Journal Modal Functionality
    const journalModal = document.getElementById('journalModal');
    const startBtns = document.querySelectorAll('#startJournalBtn, #startJournalBtn2');
    const closeBtn = document.querySelector('.close-modal');
    
    // Show current date in journal
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Open modal
    startBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            journalModal.style.display = 'block';
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        journalModal.style.display = 'none';
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == journalModal) {
            journalModal.style.display = 'none';
        }
    });
    
    // Simple text formatting
    document.querySelectorAll('[data-format]').forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.getAttribute('data-format');
            const textarea = document.querySelector('.journal-paper textarea');
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            let wrappedText = '';
            
            if (format === 'bold') {
                wrappedText = '**' + selectedText + '**';
            } else if (format === 'italic') {
                wrappedText = '*' + selectedText + '*';
            }
            
            textarea.value = textarea.value.substring(0, start) + 
                            wrappedText + 
                            textarea.value.substring(end);
        });
    });
    
    // Save functionality (demo only)
    document.getElementById('saveEntry').addEventListener('click', function() {
        const entry = document.querySelector('.journal-paper textarea').value;
        if (entry.trim()) {
            alert('Entry saved to your journal!\n\n(In a real app, this would save to your account)');
            journalModal.style.display = 'none';
        } else {
            alert('Please write something first!');
        }
    });
});


