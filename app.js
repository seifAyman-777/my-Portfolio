/* --------------------------------------------------------------------------
   Seif Ayman — Copywriting Portfolio Application Script
   Interactive Modals, Copy Spec Content, Form Validation & Supabase Integration Handler
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // 2. Set Current Year in Footer
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

/* --------------------------------------------------------------------------
   Spec Work Copy Database (Detailed Copy Samples for Concept Projects)
   -------------------------------------------------------------------------- */
const specCopyDatabase = {
    'luminary-spec': {
        title: "Luminary Roast & Kitchen — Email Sequence Spec",
        badge: "Concept Project • Email Marketing Spec",
        subtitle: "4-Part Welcome & Weekday Breakfast Incentive Sequence",
        content: `
            <div class="spec-detail-box">
                <div class="spec-meta-tag"><strong>Brand Context:</strong> Fictional Specialty Coffee & Kitchen (Seattle, WA)</div>
                <div class="spec-meta-tag"><strong>Goal:</strong> Boost weekday breakfast table bookings & email open rates from 14% to 38%+</div>
                
                <hr style="border-color: rgba(255,255,255,0.1); margin: 1.5rem 0;">

                <div class="copy-sample-block">
                    <h4>Email 1: The Sensory Welcome (Sent Immediately Upon Sign Up)</h4>
                    <p class="copy-line"><strong>Subject:</strong> First cup's on us (and why your 8am alarm doesn't have to suck)</p>
                    <p class="copy-line"><strong>Preheader:</strong> Claim your complimentary single-origin espresso inside...</p>
                    
                    <div class="email-body-preview">
                        <p>Hey [First Name],</p>
                        <p>Ever notice how the first sip of mediocre gas-station coffee tastes like liquid regret?</p>
                        <p>We built Luminary Roast for people who believe Tuesday mornings deserve dignity. Our Ethiopian Yirgacheffe batch is roasted in-house every Thursday at 6:00 AM—locking in notes of dark chocolate, blueberry, and subtle citrus before the beans even cool down.</p>
                        <p>Because you joined the Luminary Family today, <strong>your next morning brew is on us</strong>.</p>
                        <p><strong>[CTA Button]: Claim Your Free Morning Espresso &rarr;</strong></p>
                        <p>Show this email to your barista at 4th & Pine. No strings attached.</p>
                    </div>
                </div>

                <div class="copy-sample-block" style="margin-top: 2rem;">
                    <h4>Email 2: The Weekday Breakfast Cure (Sent Day 3 at 7:15 AM)</h4>
                    <p class="copy-line"><strong>Subject:</strong> The 15-minute weekday breakfast hack</p>
                    <p class="copy-line"><strong>Preheader:</strong> Skip the drive-thru line and eat like royalty...</p>
                    
                    <div class="email-body-preview">
                        <p>Hey [First Name],</p>
                        <p>You’ve got 20 minutes before your first Zoom meeting. You can either choke down a soggy microwave pastry, or savor sourdough avocado toast with poached heritage eggs.</p>
                        <p>At Luminary, our weekday breakfast express menu is guaranteed ready in <strong>under 8 minutes</strong>.</p>
                        <p><strong>[CTA Button]: Reserve A Weekday Express Table &rarr;</strong></p>
                    </div>
                </div>
            </div>
        `
    },
    'veloce-spec': {
        title: "Veloce Trattoria — Private Dining Sales Page Spec",
        badge: "Concept Project • Sales Page Spec",
        subtitle: "High-Converting Private Event & Corporate Celebration Copy",
        content: `
            <div class="spec-detail-box">
                <div class="spec-meta-tag"><strong>Brand Context:</strong> Fictional Regional Italian & Private Dining Venue (Chicago, IL)</div>
                <div class="spec-meta-tag"><strong>Goal:</strong> Transform cold corporate inquiries into guaranteed event bookings</div>
                
                <hr style="border-color: rgba(255,255,255,0.1); margin: 1.5rem 0;">

                <div class="copy-sample-block">
                    <h4>Hero Section Copy</h4>
                    <div class="sales-hero-mock">
                        <h2 style="color: #FFFFFF; font-size: 1.6rem; margin-bottom: 0.5rem;">Host An Unforgettable Corporate Gathering — Without The Event Planner Headache</h2>
                        <p style="color: var(--blue-100); font-size: 1rem; margin-bottom: 1rem;">Handcrafted pasta, curated Tuscan wine pairings, and a private room designed for effortless conversation. We manage every detail so you get all the credit.</p>
                        <p><strong>[CTA Trigger]: Check Private Dining Date Availability &rarr;</strong></p>
                    </div>
                </div>

                <div class="copy-sample-block" style="margin-top: 2rem;">
                    <h4>Objection Handling & Value Breakdown Section</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 1rem;">
                            <strong style="color: var(--accent-cyan);">✦ Objection: "What if our guest count changes at the last minute?"</strong>
                            <p style="margin-top: 0.2rem;">Our flexible seating configurations accommodate 12 to 65 guests seamlessly with no punitive room minimum surprises.</p>
                        </li>
                        <li style="margin-bottom: 1rem;">
                            <strong style="color: var(--accent-cyan);">✦ Objection: "Can you handle dietary restrictions without ruining the menu flow?"</strong>
                            <p style="margin-top: 0.2rem;">Our Executive Chef crafts parallel gluten-free and vegan menus that match the exact caliber of our main pasta courses.</p>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    'solstice-spec': {
        title: "Solstice Botanical Cafe — Meta Ad Copy Spec",
        badge: "Concept Project • Ad Copy Spec",
        subtitle: "Corporate Catering & Plant-Based Ad Angles",
        content: `
            <div class="spec-detail-box">
                <div class="spec-meta-tag"><strong>Brand Context:</strong> Fictional Organic Plant-Based Eatery (Austin, TX)</div>
                <div class="spec-meta-tag"><strong>Goal:</strong> Drive B2B office lunch catering orders with 3.2x ROAS</div>
                
                <hr style="border-color: rgba(255,255,255,0.1); margin: 1.5rem 0;">

                <div class="copy-sample-block">
                    <h4>Ad Angle 1: The Office Manager Hero (Pain-Agitate-Solve)</h4>
                    <p class="copy-line"><strong>Primary Text:</strong></p>
                    <div class="email-body-preview">
                        <p>Ordering Friday team lunch used to mean cold pizza, sluggish 2pm meetings, and half the team complaining about heavy food.</p>
                        <p>Solstice Botanical Cafe delivers vibrant, chef-crafted organic bowls and cold-pressed juices directly to your Austin office floor. 100% plant-based, gluten-free friendly, and guaranteed to fuel afternoon energy instead of food comas.</p>
                        <p>⚡ Get 15% OFF your first corporate catering order over $150 this week.</p>
                        <p><strong>Headline:</strong> Fuel Your Team Without The 2PM Afternoon Crash 🥗</p>
                        <p><strong>CTA Button:</strong> Claim 15% Office Catering Discount &rarr;</p>
                    </div>
                </div>

                <div class="copy-sample-block" style="margin-top: 2rem;">
                    <h4>Ad Angle 2: Social Proof & Clean Eating Hook</h4>
                    <div class="email-body-preview">
                        <p>"The only team lunch caterer where every single bowl comes back empty." — Tech Office Manager, Downtown Austin</p>
                        <p>Discover why Austin’s top innovative teams order Solstice for weekly lunches.</p>
                    </div>
                </div>
            </div>
        `
    },
};

/* Modal Toggle Logic */
function openSpecModal(specId) {
    const modal = document.getElementById('specModal');
    const titleEl = document.getElementById('modalTitle');
    const badgeEl = document.getElementById('modalBadge');
    const subEl = document.getElementById('modalSubtitle');
    const bodyEl = document.getElementById('modalBody');

    const spec = specCopyDatabase[specId];
    if (spec) {
        titleEl.textContent = spec.title;
        badgeEl.textContent = spec.badge;
        subEl.textContent = spec.subtitle;
        bodyEl.innerHTML = spec.content;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeSpecModal() {
    const modal = document.getElementById('specModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function closeModalOnOverlay(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeSpecModal();
    }
}

/* FAQ Accordion Toggle */
function toggleFaq(btn) {
    const faqItem = btn.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all open FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle clicked item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

/* --------------------------------------------------------------------------
   Supabase Database Configuration & Client
   -------------------------------------------------------------------------- */
const SUPABASE_URL = "https://sqtsgibjdlpitpxaywgw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxdHNnaWJqZGxwaXRweGF5d2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NDk5NzUsImV4cCI6MjEwMjAyNTk3NX0.ez3Gfkl0-owFwCIl2KpRZ9LufPURZ6KBxrwbRuD3hYs";

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("⚡ Supabase Client Initialized successfully.");
}

/* --------------------------------------------------------------------------
   Contact Form Submission Handler (Connected to Supabase)
   -------------------------------------------------------------------------- */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');

    // Extract Form Fields
    const formData = {
        brand_name: form.brand_name.value.trim(),
        email: form.email.value.trim(),
        whatsapp_number: form.whatsapp_number.value.trim(),
        project_description: form.project_description.value.trim(),
        submitted_at: new Date().toISOString()
    };

    // UI Loading State
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Sending...";

    let supabaseSaved = false;

    // 1. Save the lead to Supabase
    try {
        if (supabaseClient) {
            let { error } = await supabaseClient.from('contacts').insert([formData]);

            if (error) {
                console.warn("Notice: Table 'contacts' insert error:", error.message);
                const res2 = await supabaseClient.from('leads').insert([formData]);
                if (!res2.error) supabaseSaved = true;
            } else {
                supabaseSaved = true;
            }
        }
    } catch (err) {
        console.error("Supabase insert error:", err);
    }

    // 2. Trigger the Edge Function that emails the client (confirmation)
    //    AND Seif (new-lead notification to seifayman182006@gmail.com).
    //    See /supabase/functions/send-lead-emails for the server-side code.
    try {
        if (supabaseClient) {
            const { error: fnError } = await supabaseClient.functions.invoke('send-lead-emails', {
                body: formData
            });
            if (fnError) {
                console.warn("Notice: send-lead-emails function error:", fnError.message);
            }
        }
    } catch (err) {
        console.error("Email function invoke error:", err);
    }

    console.log("⚡ [SUBMISSION STATUS]:", supabaseSaved ? "SAVED" : "LOCAL FALLBACK", formData);

    window.latestSubmission = formData;

    // Reset Form & UI
    form.reset();
    submitBtn.disabled = false;
    if (btnText) btnText.textContent = "Send Project Inquiry";

    // Trigger short Auto-Confirmation Modal
    showConfirmationModal();
}

function showConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

