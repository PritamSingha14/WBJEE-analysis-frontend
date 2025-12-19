# WBJEE Analysis (2021–2025)

An interactive web application that visualizes **West Bengal Joint Entrance Examination (WBJEE)** trends over the last five years.  
This project helps students and educators understand exam difficulty, marks vs rank distribution, and chapter‑wise importance with clear charts, tables, and embedded solution videos.

---

## 📌 Features

- **Year‑wise Analysis (2021–2025)**  
  Each year has its own section with subject‑wise difficulty, solution video, marks vs rank table, and chapter‑wise importance graph.

- **Paper Level (Subject‑wise)**  
  Displays difficulty cards for Mathematics, Physics, and Chemistry with hover animations.

- **Solution Videos**  
  Embedded PW Bengali YouTube solution videos for each year. Videos autoplay muted when hovered.

- **Marks vs Rank Tables**  
  Shows ranges of marks and corresponding General Merit Ranks (GMR). Data compiled from College Pravesh, mywbut, and coaching estimates.

- **Chapter‑wise Importance Graphs**  
  Interactive bar charts (powered by Chart.js) showing chapter weightage percentages.  
  Subject‑based dark colors:
  - Mathematics → Dark Green  
  - Physics → Dark Red  
  - Chemistry → Dark Purple  
  - English/Logical → Dark Blue  

- **Modern UI/UX**  
  - Gradient background outside content boxes  
  - White card layout with shadows  
  - Hover glow animations for cards and logos  
  - Dark footer for balance  

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript    
- **Design:** Responsive layout, gradient backgrounds, hover animations  

## 📁 Project Structure

```text
wbjee-analysis/
│
├── index.html        # Main HTML file
├── styles.css        # Styling (gradient background, hover effects, dark footer)
├── data.js           # Year-wise data (difficulty, videos, marks vs rank, chapter weights)
├── script.js         # Rendering logic (sections, charts, autoplay video hover)
└── README.md         # Project documentation
```

# 🚀 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/wbjee-analysis.git
   cd wbjee-analysis
 - Open in browser
- Simply open index.html in any modern browser (Chrome, Edge, Firefox).
- No server setup required — it’s a static site.
- Customize data
- Update data.js with new marks vs rank tables or chapter weights.
- Add new years by extending the DATA object and YEAR_ORDER

📊 Data Sources- College Pravesh (Rank vs Marks tables)
- mywbut.com (WBJEE analysis PDFs)
- Careers360, Collegedunia (trend estimates)
- PW Bengali YouTube solution videos

 🎨 Screenshots:
 <img width="1901" height="865" alt="Screenshot (84)" src="https://github.com/user-attachments/assets/717d9ba6-98bd-465f-9130-35cca15941c3" />
<img width="1906" height="877" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/bb1e14db-dde0-49d7-aaf7-b277dd95d3e5" />
<img width="1894" height="857" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/1cd6298f-055a-4088-b835-b47160b8f7ff" />
<img width="1879" height="866" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/93f1a9a4-d879-4db4-8df6-3cd077cb7acf" />


 📜 LicenseThis project is open‑source under the MIT License.
Feel free to use, modify, and share with attribution.👨‍💻 AuthorDeveloped by Pritam Singha
Focused on blending technical robustness with modern UI/UX for educational tools.


