/**
 * Component Loader
 * Loads header and footer components into pages
 */

(function() {
    'use strict';

    // Page-specific header content configuration
    const pageHeaders = {
        'index': `
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <img class="w-100" src="assets/images/carousel-1.png" alt="Creative Agency Slide 1">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 900px;">
                                <h3 class="text-white text-uppercase mb-3 animated slideInDown fw-light">Professional Websites for Service Businesses</h3>
                                <h1 class="display-1 text-white mb-md-4 animated zoomIn fw-bold">Fast, Affordable Websites for Plumbers, HVAC, Dentists & More</h1>
                                <a href="quote.html"
                                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft border-radius">Get
                                    Started</a>
                                <a href="templates.html" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight border-radius">View
                                    Templates</a>
                            </div>
                        </div>
                    </div>
            
                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <img class="w-100" src="assets/images/carousel-2.png" alt="Creative Agency Slide 2">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 900px;">
                                <h3 class="text-white text-uppercase mb-3 animated slideInDown fw-light">Perfect for Service Businesses</h3>
                                <h1 class="display-1 text-white mb-md-4 animated zoomIn fw-bold">Professional Websites for Contractors, Service Companies & Local Businesses</h1>
                                <a href="quote.html"
                                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft border-radius">Request
                                    Quote</a>
                                <a href="service.html" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight border-radius">Our
                                    Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `, // Home page has carousel
        'about': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">About Us</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="about.html" class="h5 text-white">About</a>
                    </div>
                </div>
            </div>
        `,
        'quote': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Get a Quote</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="quote.html" class="h5 text-white">Get a Quote</a>
                    </div>
                </div>
            </div>
        `,
        'contact': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Contact Us</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="contact.html" class="h5 text-white">Contact</a>
                    </div>
                </div>
            </div>
        `,
        'service': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Our Services</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="service.html" class="h5 text-white">Services</a>
                    </div>
                </div>
            </div>
        `,
        'blog': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Blog</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="blog.html" class="h5 text-white">Blog</a>
                    </div>
                </div>
            </div>
        `,
        'price': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Pricing Plan</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="price.html" class="h5 text-white">Pricing Plan</a>
                    </div>
                </div>
            </div>
        `,
        'feature': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Our Features</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="feature.html" class="h5 text-white">Our Features</a>
                    </div>
                </div>
            </div>
        `,
        'team': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Team Members</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="team.html" class="h5 text-white">Team</a>
                    </div>
                </div>
            </div>
        `,
        'testimonial': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Testimonials</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="testimonial.html" class="h5 text-white">Testimonials</a>
                    </div>
                </div>
            </div>
        `,
        'blog-details': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Blog Details</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="blog-details.html" class="h5 text-white">Blog Details</a>
                    </div>
                </div>
            </div>
        `,
        'templates': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Template Gallery</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="templates.html" class="h5 text-white">Templates</a>
                    </div>
                </div>
            </div>
        `,
        'faqs': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Frequently Asked Questions</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="faqs.html" class="h5 text-white">FAQs</a>
                    </div>
                </div>
            </div>
        `,
        'privacy-policy': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Privacy Policy</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="privacy-policy.html" class="h5 text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        `,
        'terms-conditions': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Terms & Conditions</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="terms-conditions.html" class="h5 text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        `,
        'careers': `
            <div class="container-fluid bg-primary py-5 bg-header mrb-90">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Careers</h1>
                        <a href="index.html" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="careers.html" class="h5 text-white">Careers</a>
                    </div>
                </div>
            </div>
        `
    };

    /**
     * Get current page identifier from filename
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename.replace('.html', '');
    }

    /**
     * Set active navigation link
     */
    function setActiveNavLink() {
        const currentPage = getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Hide spinner - compatible with both jQuery and vanilla JS
     */
    function hideSpinner() {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.remove('show');
            // Also trigger jQuery removal if jQuery is available
            if (typeof $ !== 'undefined' && $.fn.removeClass) {
                $(spinner).removeClass('show');
            }
        }
    }

    /**
     * Load component from file
     */
    async function loadComponent(containerId, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            const html = await response.text();
            const container = document.getElementById(containerId);
            
            if (container) {
                container.innerHTML = html;
                
                // If loading header, also set active nav and page header
                if (containerId === 'header-container') {
                    setActiveNavLink();
                    
                    // Insert page-specific header content
                    const currentPage = getCurrentPage();
                    const pageHeaderContainer = document.getElementById('page-header');
                    if (pageHeaderContainer && pageHeaders[currentPage]) {
                        pageHeaderContainer.innerHTML = pageHeaders[currentPage];
                    }
                    
                    // Hide spinner after header loads (wait a tiny bit for DOM to update)
                    setTimeout(function() {
                        hideSpinner();
                    }, 100);
                }
                
                return true;
            }
        } catch (error) {
            console.error('Error loading component:', error);
            // Hide spinner even if there's an error
            if (containerId === 'header-container') {
                hideSpinner();
            }
            return false;
        }
    }

    /**
     * Get correct path for includes (handles both root and subdirectory)
     */
    function getIncludePath(filename) {
        // Check if we're in a subdirectory or root
        const path = window.location.pathname;
        const depth = path.split('/').filter(p => p && !p.endsWith('.html')).length;
        
        // If file is in root, use 'includes/', otherwise use '../includes/'
        // For now, assume files are in root
        return 'includes/' + filename;
    }

    /**
     * Initialize component loading
     */
    async function init() {
        try {
            // Check if running from file:// protocol (local file)
            if (window.location.protocol === 'file:') {
                console.error('⚠️ Cannot load components from file:// protocol due to browser security restrictions.');
                console.log('💡 Solution: Use a local web server:');
                console.log('   - Python: python3 -m http.server 8000');
                console.log('   - Node: npx http-server');
                console.log('   - VS Code: Use Live Server extension');
                console.log('   Then open: http://localhost:8000/quote.html');
                
                // Show error message to user
                const headerContainer = document.getElementById('header-container');
                const footerContainer = document.getElementById('footer-container');
                if (headerContainer) {
                    headerContainer.innerHTML = `
                        <div style="padding: 20px; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; border-radius: 4px; margin: 20px;">
                            <h3>⚠️ Components Cannot Load</h3>
                            <p>You're opening this file directly (file://). Please use a local web server:</p>
                            <ul>
                                <li><strong>Python:</strong> <code>python3 -m http.server 8000</code></li>
                                <li><strong>Node:</strong> <code>npx http-server</code></li>
                                <li><strong>VS Code:</strong> Use Live Server extension</li>
                            </ul>
                            <p>Then open: <code>http://localhost:8000/quote.html</code></p>
                        </div>
                    `;
                }
                if (footerContainer) {
                    footerContainer.innerHTML = '<div style="padding: 20px; text-align: center;">Footer unavailable - please use a local server</div>';
                }
                hideSpinner();
                return;
            }
            
            // Load header and footer in parallel
            await Promise.all([
                loadComponent('header-container', getIncludePath('header.html')),
                loadComponent('footer-container', getIncludePath('footer.html'))
            ]);
        } catch (error) {
            console.error('Error initializing components:', error);
            console.log('💡 If you see CORS errors, you need to use a local web server (not file://)');
            // Ensure spinner is hidden even on error
            hideSpinner();
        }
    }

    // Load components when DOM is ready
    // Wait for jQuery to be available since master.js depends on it
    function startLoading() {
        if (typeof $ !== 'undefined') {
            init();
        } else {
            // Wait for jQuery to load
            setTimeout(startLoading, 50);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startLoading);
    } else {
        startLoading();
    }

    // Fallback: Hide spinner after 5 seconds even if components fail to load
    setTimeout(function() {
        hideSpinner();
    }, 5000);

})();
