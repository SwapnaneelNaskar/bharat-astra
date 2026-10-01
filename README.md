# ⚡ BharatCart - Next-Gen E-Commerce & Service Ecosystem
> **Enterprise-Grade Shopping & Service Platform: FitVerse 3D Sizing Studio with Selective Garments, 20,000+ SKU Catalog Architecture, Unified Booking (Travel & Cinema), and 18% GST Calculation Engine**

🌐 **GitHub Repository:** [https://github.com/sohanghosh2308-creator/online-shopping-cart](https://github.com/sohanghosh2308-creator/online-shopping-cart)  
👤 **User / Customer:** Swapnaneel Naskar (`swapnaneelnaskar2903@gmail.com`)  
🎨 **Design Framework:** Soft Neutral Matte (`#F4F6F9`) + Frosted Glassmorphism (`backdrop-filter: blur(12px)`)  
💰 **Currency & Tax:** Indian Rupees (`₹`) | 18% GST (CGST 9% + SGST 9%)

---

## 🚀 How to Run Live in VS Code Terminal

### Option 1: `npm run dev` (Recommended)
You can now start and view the website directly from the **VS Code Terminal**:

1. Open your project folder in VS Code:
   ```
   C:\Users\Argya\Desktop\E-Commerce
   ```
2. Open the built-in terminal (`Ctrl + ~` or **Terminal > New Terminal**).
3. Run the development command:
   ```bash
   npm run dev
   ```
4. The terminal will start the server and automatically launch your browser:
   ```
   =================================================================
   ⚡ BHARATCART NEXT-GEN E-COMMERCE & SERVICE ECOSYSTEM
   =================================================================
   ➜  Local URL:   http://localhost:3000
   ➜  Customer:    Swapnaneel Naskar (Registered Profile)
   ➜  Catalog:     20,480 SKUs across 9 Categories
   ➜  FitVerse:    Studio with Selective Shirts, Pants, Suits & Dresses
   ➜  GST Engine:  18% Tax Calculation (CGST 9% + SGST 9%) & Invoicing
   =================================================================
   ```

### Option 2: Java Backend Server (`java BackendServer.java`)
If you want to run the platform via Java:
```bash
java BackendServer.java
```
Access at: `http://localhost:8080`

### Option 3: Live Server Extension or Direct Double-Click
- Right-click **`index.html`** in VS Code and select **"Open with Live Server"**.
- Or double-click `index.html` in Windows Explorer to open directly in Chrome/Edge.

---

## 🌟 Key Features & Blueprint Implementations

### 1. 🪞 FitVerse Studio: Selective Shirts, Pants, Jeans & Suits
- **Interactive Garment Wardrobe Shelf:**
  - Select and calibrate any garment directly from the live catalog.
  - Sub-category filter tabs: `All Apparel`, `Shirts & Polos`, `Pants & Jeans`, `Suits & Blazers`, `Kurtas & Ethnic`, `Dresses & Tops`.
  - Horizontal carousel with high-resolution photos, brand badges, product titles, and prices in `₹` (Allen Solly Polo, Levi's 511 Jeans, Peter England Suit, Biba Kurta Set, Vero Moda Maxi Dress, H&M Heavyweight Hoodie, etc.).
- **Garment-Tailored 3D SVG Silhouette Simulation:**
  - **Shirts & Polos:** Detailed collar, button placket, sleeve drape, chest tension sensor, and fabric color shift.
  - **Jeans & Pants:** Denim/chino waistband, belt loops, fly stitching, thigh contour, knee drape, and tailored inseam break.
  - **Suits & Blazers:** Structured notched lapels, two-button front, pocket square, and matching trousers.
  - **Kurtas & Dresses:** Flowing ethnic silhouette with side slits and festive hemline.
- **Biometric Calibration Controls:**
  - 5 Body Archetypes (Male Athletic, Male Slim, Female Curve, Inverted Triangle, Pear).
  - Real-time Height slider (150–205 cm) and Weight slider (45–120 kg).
  - Fit Preference selector (*Slim Fit, Regular Fit, Relaxed Fit*).
  - Real-time fabric colorway palette (Midnight Navy, Royal Cobalt, Sage Olive, Crimson Wine, Desert Camel, Pure Ecru).
  - Sizing Matrix (XS to XXL) with inventory status and biometric match score.
  - Single-click **"Add Calibrated Garment to Cart"** button.

---

### 2. 🧮 High-Contrast Amber-Gold 18% GST Engine
- **Ultra-Vivid Button Styling (No Invisible White Elements):**
  - **Navbar:** High-contrast Amber-Gold gradient (`linear-gradient(135deg, #f59e0b, #d97706)`), bold dark slate text (`#0f172a`), golden border (`#fde68a`), and calculator icon.
  - **Hero Banner:** Replaced white-bordered outline with vibrant Amber-Gold button.
  - **Floating Console:** High-visibility Amber-Gold widget at the bottom right corner with pulsing glow.
- **Dedicated GST Breakdown Modal:**
  - Raw Cart Subtotal
  - Percentage Coupon Savings (`FESTIVE20`, `TECH25`, `SUPER15`, `WELCOME10`)
  - Taxable Base Subtotal
  - Central GST (CGST @ 9%)
  - State GST (SGST @ 9%)
  - Total 18% GST (CGST + SGST)
  - Delivery Fee (FREE on orders ≥ ₹999)
  - Grand Total in Indian Rupees (`₹`)
  - Step-by-step mathematical proof
  - Direct button to generate the **Official GST Tax Invoice** billed to **Swapnaneel Naskar** (`GSTIN: 19AAACG0821M1ZX`).

---

### 3. 📱 Massive 20,480 SKU Catalog & Amazon/Flipkart Homepage Shelves
- **Eliminated "Only Mobiles" Issue:**
  - Default Homepage view now displays a rich, multi-shelf Flipkart/Amazon shopping experience:
    1. ⚡ **Lightning Deals of the Day (Up to 70% Off)** with ticking countdown timer!
    2. 📱 **Smartphones & Mobile Tech** (iPhone 15 Pro, S24 Ultra, Pixel 8 Pro with AnTuTu benchmarks and spec comparison tool)
    3. 👔 **Fashion Wardrobe & FitVerse 3D** (shirts, jeans, kurtas, suits with "Try in FitVerse" buttons)
    4. ❄️ **Major Appliances & Smart Living** (Inverter ACs, Refrigerators with BEE Star ratings & Energy Savings Calculator)
    5. 🛒 **Daily Groceries & FMCG Essentials** (Basmati Rice, Almonds, Olive Oil with 10% Subscribe & Save toggle)
    6. 💻 **Laptops, Audio & Wearables** (MacBook Pro M3, Sony XM5, Apple Watch Series 9)
- **Procedural 20,480 SKU Architecture:**
  - Expanded catalog of 20,480 unique SKUs across 9 categories (~2,275 SKUs per category).
  - 24 products per page with fast client-side pagination: `[« First] [‹ Prev] Page X of 854 [Next ›] [Last »]`.
  - Real-time client-side search across all 20,480 items.

---

### 4. ✈️ Unified Booking & Service Ecosystem (Single Universal Cart)
- Check out physical goods alongside travel logistics and entertainment in **one single order**:
  - **Flights, Trains, Buses:** Route selection across major Indian hubs with **interactive seat selection maps** and instant mock **PNR Generation**.
  - **Cinemas & Events:** Theater seat selection grid (Recliner, Prime, Classic) with **scannable digital QR entry badges**.
  - **Hotels & Stays:** Luxury resort bookings with room tier and guest selector.

---

### 5. 👤 Registered Customer Profile
- **Full Name:** Swapnaneel Naskar
- **Email:** `swapnaneelnaskar2903@gmail.com`
- **Customer ID:** `usr-swapnaneel-01`
- **Shipping Address:** Flat 402, Royal Residency, Outer Ring Road, Bengaluru, Karnataka - 560103
- **Payment Method:** UPI Verified (Swapnaneel Naskar)

---

## 📁 File Structure & Paths
- **Application Core:** `C:\Users\Argya\Desktop\E-Commerce\index.html`
- **Dev Server:** `C:\Users\Argya\Desktop\E-Commerce\server.js`
- **Java Service:** `C:\Users\Argya\Desktop\E-Commerce\BackendServer.java`
- **Node Config:** `C:\Users\Argya\Desktop\E-Commerce\package.json`
- **Documentation:** `C:\Users\Argya\Desktop\E-Commerce\README.md`
- **Catalog Dataset:** `C:\Users\Argya\.gemini\antigravity\brain\85af54f8-efa4-4f54-bb5b-a25c74b62982\scratch\products_nextgen.json`
