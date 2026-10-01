# ⚡ BharatCart Next-Gen - Premier E-Commerce & Service Ecosystem
> **Enterprise-Grade Shopping & Service Platform: Multi-Piece FitVerse Studio (Shirts + Pants + Shoes + Photo Upload), 20,480 SKU Catalog across 13 Categories, Worldwide Flights, Indian Railways Vande Bharat, Searchable Movie Theaters across Whole India, Luxury Hotels, and Smooth Multi-Option Payment Gateway with 18% GST Engine**

🌐 **GitHub Repository:** [https://github.com/sohanghosh2308-creator/online-shopping-cart](https://github.com/sohanghosh2308-creator/online-shopping-cart)  
👤 **User / Customer:** Swapnaneel Naskar (`swapnaneelnaskar2903@gmail.com`)  
🎨 **Design Framework:** Soft Neutral Matte (`#F4F6F9`) + Frosted Glassmorphism (`backdrop-filter: blur(14px)`)  
💰 **Currency & Tax:** Indian Rupees (`₹`) | 18% GST (CGST 9% + SGST 9%)

---

## 🚀 How to Run Live in VS Code Terminal

### Option 1: `npm run dev` (Recommended)
You can start and view the website live from the **VS Code Terminal**:

1. Open your project folder in VS Code:
   ```
   C:\Users\Argya\Desktop\E-Commerce
   ```
2. Open the built-in terminal (`Ctrl + ~` or **Terminal > New Terminal**).
3. Run the development command:
   ```bash
   npm run dev
   ```
4. The terminal will start the server on port 3000 and automatically open your default browser:
   ```
   =================================================================
   ⚡ BHARATCART NEXT-GEN E-COMMERCE & SERVICE ECOSYSTEM
   =================================================================
   ➜  Local URL:   http://localhost:3000
   ➜  Customer:    Swapnaneel Naskar (Registered Profile)
   ➜  Catalog:     20,480 SKUs across 13 Categories
   ➜  FitVerse:    Multi-Piece Studio (Shirts + Pants + Shoes + Photo Upload)
   ➜  Bookings:    Worldwide Flights, Vande Bharat Trains, Whole-India Cinemas, Hotels
   ➜  Payments:    Smooth Gateway (UPI QR, Card Visualizer, NetBanking, PayLater)
   ➜  GST Engine:  18% Tax Calculation (CGST 9% + SGST 9%) & Invoicing
   =================================================================
   ```

### Option 2: Java Backend Server (`java BackendServer.java`)
If you want to run the platform via Java:
```bash
java BackendServer.java
```
Access at: `http://localhost:8080`

### Option 3: Double-Click or Live Server
- Double-click `index.html` in Windows Explorer or Desktop to open directly in Google Chrome / Edge.
- Or right-click `index.html` in VS Code and click **"Open with Live Server"**.

---

## 🌟 Comprehensive Architecture & Feature Modules

### 1. 🪞 FitVerse Studio: Multi-Piece Outfit Builder & User Photo Upload
- **Selective 3-Piece Layered Outfit Builder:**
  - Build and coordinate your complete look across:
    1. **Shirts & Tops** (Allen Solly Polo, U.S. Polo Denim Shirt, Peter England Formal Suit, Biba Kurta, Vero Moda Tops)
    2. **Pants & Jeans** (Levi's 511 Slim Jeans, Flying Machine Chinos, Formal Trousers, Women's Denim)
    3. **Shoes & Footwear** (Nike Air Jordan, Puma Smash Leather Sneakers, Adidas Ultraboost, Woodland Trekking Boots, Catwalk Block Heels)
  - Seamless switching between layer tabs (`Shirts & Tops`, `Pants & Jeans`, `Shoes & Footwear`).
  - **Active Calibrated Outfit Summary Strip:** Shows thumbnails, titles, and individual prices of all 3 selected pieces, combined total price, and a 1-click **"Add Complete Outfit to Cart"** button.
- **User Photo Upload Virtual Try-On:**
  - Users can upload their full-length picture from their computer or mobile to understand how the outfit fits!
  - **Holographic AR Overlay:** Animated laser scan line (`@keyframes scanLaserAnim`), calibrated torso/chest guide, waist guide, and shoe marker pinned with product details.
  - One-click toggle between **"User Photo Try-On"** and **"3D Demo Mannequin"**.
- **3D Demo Mannequin Models:**
  - For users who prefer not to upload photos: 4 selectable avatars (*Male Athletic, Female Hourglass, Neutral Slim, Plus Size*).
  - Biometric sliders for Height (150–205 cm) and Weight (45–130 kg) with real-time BMI indicator.
  - Fabric drape tension heatmap (Green: Ideal, Blue: Loose, Red: Snug).
  - Front / Back silhouette rotation toggle.

---

### 2. ✈️ Worldwide Flight Logistics (Everywhere in the World)
- **Global Origin & Destination Hubs:**
  - *International:* New York (JFK), London Heathrow (LHR), Dubai (DXB), Singapore Changi (SIN), Tokyo Haneda (HND), Paris (CDG), Sydney (SYD), Frankfurt (FRA), Toronto (YYZ), Bangkok (BKK), San Francisco (SFO).
  - *India:* New Delhi (DEL), Mumbai (BOM), Kolkata (CCU), Bengaluru (BLR), Chennai (MAA), Hyderabad (HYD).
- **Airlines & Flight Companies:**
  - Emirates, Qatar Airways, Singapore Airlines, Air India, British Airways, Lufthansa, IndiGo, Etihad Airways, ANA, Qantas.
- **Cabin Travel Classes:**
  - Economy Class, Premium Economy (+40%), Business Class (Lie-Flat, +160%), First Class Private Suite (+350%).
- **Interactive Aircraft Cabin Seat Grid:**
  - Boeing 777-300ER cabin map (Rows 1–12, Seats A–B–C [Aisle] D–E–F).
  - Clickable seat selection, occupied indicators, real-time fare calculator, PNR generation, and boarding pass preview.

---

### 3. 🚆 Indian Railways Segment (Vande Bharat & Rajdhani)
- **Major Railway Junctions:**
  - New Delhi (NDLS), Howrah / Kolkata (HWH), Mumbai CSMT (CSMT), KSR Bengaluru (SBC), Chennai Central (MAS), Varanasi (BSB), Ahmedabad (ADI), Jaipur (JP), Pune (PUNE), Lucknow (LKO).
- **Iconic Indian Trains:**
  - 22436 Vande Bharat Express (Varanasi - New Delhi)
  - 20608 Vande Bharat Express (Mysuru - Bengaluru - Chennai)
  - 12301 Howrah Rajdhani Express (Howrah - New Delhi)
  - 12951 Mumbai Rajdhani Express (Mumbai - New Delhi)
  - 82501 Lucknow Tejas Express
  - 12002 Bhopal Shatabdi Express
- **Railway Travel Classes & Coach Berths:**
  - Executive Chair Car (EC), AC Chair Car (CC), First AC (1A), Second AC (2A), Third AC (3A), 3 AC Economy (3E).
  - Visual IRCTC Coach Layout with Berth Allocation: *Lower Berth (LB), Middle Berth (MB), Upper Berth (UB), Side Lower (SL), Side Upper (SU), Window Seat (WS)*.
  - Live IRCTC PNR generation with catering charges and 18% GST tax invoice.

---

### 4. 🎬 Searchable Movie Theaters Across Whole India & Seats
- **Type Name & Location Search Input:**
  - Search any cinema chain, mall, or area across India (e.g. *Quest Mall, South City, Ambience Vasant Kunj, Vegas Dwarka, Forum South Bangalore, Viviana Mall, Palladium, Prasads, Palazzo, VR Chennai, Phoenix Pune, Rajmandir Jaipur, Acropolis Ahmedabad*).
- **City Filter Pills:**
  - *Whole India, Kolkata, Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad, Jaipur*.
- **Auditorium Seat Selection Grid:**
  - Curved cinema screen display bar ("ALL EYES THIS WAY • CINEMA SCREEN").
  - Tiers: *Recliner VIP Lounge (₹550), Prime Club (₹350), Classic (₹210)*.
  - Blockbuster movies: *Kalki 2898 AD (IMAX 3D Laser), Dune 2, Oppenheimer, Stree 2*.
  - Scannable digital IMAX pass with QR code, hall timing, and customer name **Swapnaneel Naskar**.

---

### 5. 🏨 Luxury Hotel Rooms & Stays
- **Destination Search:**
  - Search city or area: *Goa, Mumbai, Delhi, Jaipur, Bengaluru, Agra, Udaipur, Dubai, Singapore*.
- **Luxury Properties:**
  - The Taj Mahal Palace (Mumbai Harbour), The Oberoi Amarvilas (Agra Taj View), The Leela Palace (Bengaluru), W Goa Beachfront Retreat, Rambagh Palace (Jaipur), ITC Grand Chola (Chennai), Marina Bay Sands (Singapore).
- **Selectable Room Classes:**
  - *Deluxe Room, Club Executive Suite, Presidential Luxury Suite, Beachfront Luxury Villa, Royal Heritage Suite*.
  - Nights counter, guest selector, instant reservation voucher with QR code.

---

### 6. 💳 Smooth Multi-Option Payment Gateway Modal
- **5 Smooth Payment Method Tabs:**
  1. **UPI Instant Pay:** High-res dynamic QR Code with 04:59 live expiration timer, UPI ID input (`swapnaneel@oksbi`), and one-tap app shortcuts (Google Pay, PhonePe, Paytm, BHIM).
  2. **Credit & Debit Cards:** Interactive 3D credit card visualizer with metallic chip, Visa branding, cardholder name **Swapnaneel Naskar**, expiry, CVV flip, and bank discounts.
  3. **Net Banking:** Instant bank tiles for HDFC Bank, SBI, ICICI, Axis Bank, Kotak Mahindra, PNB.
  4. **BharatCart PayLater & Easy EMI:** Pre-approved ₹1,00,000 credit limit for **Swapnaneel Naskar** with 3-month and 6-month 0% No-Cost EMI plans.
  5. **Cash on Delivery (COD):** Doorstep cash or UPI QR payment with anti-bot captcha verification.
- **3-Step Animated SSL / NPCI Processing Screen:**
  - Step 1: Establishing 256-bit TLS Handshake
  - Step 2: Authenticating with Banking Gateway & NPCI
  - Step 3: Payment Authorized & Official GST Invoice Generated
- **Celebration & Order Confirmation:**
  - Animated multi-color confetti particle shower on canvas.
  - Order Reference ID (`BC-2026-XXXXX`), payment method badge, and 1-click **"Download GST Tax Invoice"**.

---

### 7. 🧮 High-Contrast Amber-Gold 18% GST Engine
- **Ultra-Vivid Styling (Never White / Invisible):**
  - High-contrast Amber-Gold gradient (`linear-gradient(135deg, #f59e0b, #d97706)`), bold dark slate text (`#0f172a`), golden border (`#fde68a`), and calculator icon.
- **Dedicated GST Breakdown Modal:**
  - Cart Gross Subtotal
  - Percentage Promo Discount (`FESTIVE20` = 20% OFF, `WELCOME10` = 10% OFF)
  - Taxable Base Subtotal
  - Central GST (CGST @ 9%)
  - State GST (SGST @ 9%)
  - Total GST Assessment (18%)
  - Free Delivery Threshold (Orders ≥ ₹500)
  - Final Grand Total in Indian Rupees (`₹`)
- **Official GST Tax Invoice:** Valid under Section 31 of CGST Act, 2017. Billed to **Swapnaneel Naskar**, GSTIN: `29AABCU9603R1ZM`, Karnataka State Code 29.

---

### 8. 🛍️ 20,480 SKU Catalog Across 13 Rich Categories
- **13 Complete Categories (152 Authentic Base Products):**
  1. Mobiles & Tablets
  2. Laptops & Computers
  3. Audio & Wearables
  4. Smart Home & Appliances
  5. Men's Fashion
  6. Women's Fashion
  7. Shoes & Footwear
  8. Perfumes & Fragrances
  9. Beauty & Cosmetics
  10. Bags & Luggage
  11. Groceries & FMCG
  12. Books & Stationery
  13. Sports & Fitness
- Procedural SKU expansion engine with 24-item pagination that renders instantaneously.
- Side-by-side technical comparison tool for up to 3 devices.

---

## 🔒 Git & Deployment Note
> **Rule Honored:** Local git commits are maintained. **No remote push** is executed until you explicitly request `git push`. All project files are saved on your Desktop for direct execution in VS Code.
