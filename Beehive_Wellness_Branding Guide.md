
# Beehive Wellness – Landing Page Standards Guide  

---

## 1. Website Visual Identity  

### 1.1 Color Palette  
**Primary Colors**  
| Color Name      | HEX      | RGB                | CMYK               | Usage                           |
|-----------------|----------|--------------------|--------------------|---------------------------------|
| Pigment Blue    | #2E3192  | (46, 49, 146)      | 84, 79, 0, 43      | Hero sections, CTAs, buttons    |
| White           | #FFFFFF  | (255, 255, 255)    | 0, 0, 0, 0         | Backgrounds, text contrast      |

**Secondary & Accent Colors** (to complement)  
| Color Name      | HEX      | RGB                | CMYK               | Usage                           |
|-----------------|----------|--------------------|--------------------|---------------------------------|
| Honey Gold      | #F5A623  | (245, 166, 35)     | 2, 38, 93, 0       | Accent highlights, icons        |
| Soft Lavender   | #C9C7F5  | (201, 199, 245)    | 19, 19, 0, 4       | Background gradients, overlays  |
| Deep Charcoal   | #333333  | (51, 51, 51)       | 0, 0, 0, 80        | Body text, footer background    |
| Sky Blue        | #4AAEFF  | (74, 174, 255)     | 71, 32, 0, 0       | Hover states, links             |

**Approved Combinations**
- Pigment Blue + White (primary contrast)  
- Pigment Blue + Honey Gold (hero & CTA highlights)  
- White + Deep Charcoal (body readability)  
- Soft Lavender as a subtle section divider  

---

### 1.2 Typography  
- **Primary Font**: Roboto (for body, forms, readability)  
- **Secondary Font**: Inter (for headings, subheadings, CTAs)  
- **Backup Fonts**: Arial, sans-serif  

**Usage Rules**  
| Element         | Font     | Weight | Size (Desktop) | Size (Mobile) | Notes                           |
|-----------------|----------|--------|----------------|---------------|---------------------------------|
| H1 Hero Title   | Inter    | 700    | 48–56px        | 32–36px       | Bold, short, high contrast      |
| H2 Section Head | Inter    | 600    | 28–32px        | 22–26px       | Used for key section intros     |
| Body Paragraph  | Roboto   | 400    | 16–18px        | 15–16px       | Max 75 characters per line      |
| CTA Buttons     | Inter    | 600    | 16–18px        | 15–16px       | ALL CAPS, high contrast         |

---

### 1.3 Logo Usage  
- **Placement**: Top-left corner of header (sticky nav), clickable to homepage.  
- **Minimum Size**: 120px width (desktop), 80px (mobile).  
- **Clear Space**: At least equal to height of the “B” around all sides.  
- **Backgrounds**: Use full-color logo on White/Light backgrounds, White logo on Pigment Blue or dark backgrounds.  
- **Do Not**:  
  - Stretch, distort, or rotate  
  - Place over busy images without clear contrast  
  - Change colors outside the approved palette  

---

### 1.4 Icons, Patterns, Imagery  
- **Icons**: Line-based, flat, minimal (in Pigment Blue, White, or Honey Gold).  
- **Patterns**: Optional geometric honeycomb overlay in Soft Lavender.  
- **Photography Style**:  
  - Clinical professional (doctor-patient interaction, clean offices)  
  - Lifestyle wellness (nature, healthy food, active living, smiling patients)  
- **Illustrations**: Minimal, vector, soft rounded edges — should complement photos.  
- **Image Dimensions**:  
  - Hero Banner: 1920×1080px (optimized to <200KB)  
  - Section Images: 1200×800px  
  - Icons: SVG preferred  
  - Video: MP4/WebM, max 2MB (compressed)  

---

## 2. Gradients & Visual Assets  

### 2.1 Gradient Palettes  
- **Primary Gradient**: Pigment Blue (#2E3192) → Sky Blue (#4AAEFF)  
- **Accent Gradient**: Honey Gold (#F5A623) → White (#FFFFFF)  
- **Subtle Overlay**: Soft Lavender (#C9C7F5) → White (#FFFFFF)  

**Usage**  
- Hero backgrounds (Blue → Sky Blue)  
- CTA hover states (Gold → White overlay)  
- Section dividers (Lavender → White subtle fade)  

---

### 2.2 Asset Requirements  
| Asset Type        | Format     | Dimensions        | Notes                                 |
|-------------------|------------|-------------------|---------------------------------------|
| Logo (Full/Alt)   | SVG + PNG  | Multiple sizes    | Favicon: 32×32, 64×64                 |
| Icons             | SVG        | 24px / 48px       | Must be crisp on retina displays      |
| Hero Images       | JPG/WebP   | 1920×1080px       | Compress <200KB                       |
| Section Images    | JPG/WebP   | 1200×800px        | Consistent tone & color correction    |
| Videos            | MP4/WebM   | 1920×1080px max   | Max 2MB, autoplay muted if used       |
| Buttons           | CSS styled | —                 | Use gradients & hover states          |

---

## 3. Layout, Navigation & Structure  

### 3.1 Grid & Spacing  
- **Grid**: 12-column responsive (max width 1200px desktop).  
- **Spacing**:  
  - Section padding: 80px desktop / 40px mobile  
  - Gutter: 20–24px  
  - Line height: 1.5–1.6 for readability  

### 3.2 Landing Page Structure  
1. **Hero Section** (headline, subhead, strong CTA: “Book Your Appointment Today”)  
2. **About Section** (short brand story, trust signals)  
3. **Services Snapshot** (3–5 cards with icons, short copy)  
4. **Why Choose Us** (differentiators, trust badges, professional team images)  
5. **Testimonials / Social Proof**  
6. **Call to Action Block** (mid-page booking form or button)  
7. **FAQ Section**  
8. **Final CTA & Contact Info** (phone, form, map embed)  
9. **Footer** (links: Privacy Policy, Terms, Contact, Social Media)  

### 3.3 Navigation  
- **Header**: Logo left, CTA button right (“Book Now”)  
- **Menu**: Anchors (scroll-to sections: About, Services, Testimonials, Contact)  
- **Sticky Header**: Always visible for quick booking  

---

## 4. UX/UI, Functionality & Content  

### 4.1 Page Templates & Components  
- **Hero**: Split layout (image/video + headline/CTA).  
- **Cards**: Rounded corners (12px), shadow hover effect.  
- **Buttons**: Rounded 6px, gradient fill, hover states with color inversion.  
- **Forms**: Minimal fields (Name, Email, Phone, Date), inline validation.  

### 4.2 Microcopy Standards  
- **Buttons/CTAs**: Action-oriented, e.g., “Book Your Appointment,” “Start Your Wellness Journey.”  
- **Forms**:  
  - Placeholder: “Enter your email”  
  - Error: “Please enter a valid phone number”  
  - Success: “Thank you! We’ll contact you within 24 hours.”  
- **Navigation**: Short, descriptive labels: Home | Services | About | Contact  

### 4.3 Content Guidelines  
- **Headings**: Use Inter, bold, benefit-driven (“Reclaim Your Health Naturally”).  
- **Body Text**: Conversational but authoritative, 2–3 sentences per paragraph.  
- **CTAs**: Placed after every major section (minimum 3 on the page).  
- **Contact Info**: Must always include phone number, email, and form at bottom.  

---

✅ This framework ensures the landing page is **clean, conversion-focused, visually consistent, and aligned with Beehive Wellness’ brand voice**.  
