function renderYearSection(year, info) {
    const section = document.createElement("section");
    section.className = "year-section";
  
    // Header
    const header = document.createElement("div");
    header.className = "year-header";
    header.innerHTML = `<h2>WBJEE ${year} analysis</h2>`;
    section.appendChild(header);
  
    // Paper Level
    const diffBlock = document.createElement("div");
    diffBlock.className = "block";
    diffBlock.innerHTML = `<h3>Paper level (subject-wise)</h3>`;
    const grid = document.createElement("div");
    grid.className = "difficulty-grid";
    Object.entries(info.difficulty || {}).forEach(([subj, level]) => {
      const card = document.createElement("div");
      card.className = "difficulty-card";
      card.innerHTML = `<div class="label">${subj}</div><div class="value">${level}</div>`;
      grid.appendChild(card);
    });
    diffBlock.appendChild(grid);
    section.appendChild(diffBlock);
  
    // Video
    const videoBlock = document.createElement("div");
    videoBlock.className = "block";
    videoBlock.innerHTML = `<h3>Solution video (PW Bengali)</h3>`;
    const videoWrap = document.createElement("div");
    videoWrap.className = "video-wrap";
    const url = info.videoUrl || "";
    videoWrap.innerHTML = url
      ? `<iframe src="${url}" title="WBJEE ${year} PW Bengali solution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      : `<div style="padding:12px;color:#9ca3af">Video link pending — paste PW Bengali YouTube embed URL in data.js</div>`;
    videoBlock.appendChild(videoWrap);
    section.appendChild(videoBlock);
  
    // Marks vs Rank Table
    const tableBlock = document.createElement("div");
    tableBlock.className = "block";
    tableBlock.innerHTML = `<h3>Marks vs rank (GMR)</h3>`;
    const tableWrap = document.createElement("div");
    tableWrap.className = "table-wrap";
    const table = document.createElement("table");
    table.innerHTML = `
      <thead><tr><th>Marks (out of 200)</th><th>Rank (GMR)</th></tr></thead>
      <tbody>
        ${
          (info.marksVsRank || []).length
            ? info.marksVsRank.map(r => `<tr><td>${r.marks}</td><td>${r.rank}</td></tr>`).join("")
            : `<tr><td colspan="2" style="color:#9ca3af">Add rows in data.js</td></tr>`
        }
      </tbody>
    `;
    tableWrap.appendChild(table);
    tableBlock.appendChild(tableWrap);
    section.appendChild(tableBlock);
  
    // Chapter-wise Graph
    const graphBlock = document.createElement("div");
    graphBlock.className = "block";
    graphBlock.innerHTML = `<h3>Chapter-wise importance</h3>`;
    const chartWrap = document.createElement("div");
    chartWrap.className = "chart-wrap";
    const canvas = document.createElement("canvas");
    canvas.id = `chart-${year}`;
    chartWrap.appendChild(canvas);
    graphBlock.appendChild(chartWrap);
    section.appendChild(graphBlock);
  
    // Render chart
    const labels = (info.chapterWeights || []).map(c => c.chapter);
    const values = (info.chapterWeights || []).map(c => c.value);
    const ctx = canvas.getContext("2d");
  
    if (labels.length) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [{
            label: `WBJEE ${year} chapter weight`,
            data: values,
            backgroundColor: labels.map(ch => {
              if (["Algebra", "Calculus", "Geometry"].includes(ch)) return "#065f46"; // dark green
              if (["Thermodynamics", "Electrodynamics"].includes(ch)) return "#7f1d1d"; // dark red
              if (["Solen Chemistry", "Physical Chemistry", "Inorganic Chemistry"].includes(ch)) return "#6d28d9"; // dark purple
              if (ch.includes("English")) return "#1e3a8a"; // dark blue
              return "#374151"; // fallback dark gray
            }),
            borderColor: "#111827",
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { labels: { color: "#111827" } },
            title: {
              display: true,
              text: `WBJEE ${year} Chapter-wise Importance`,
              color: "#111827",
              font: { size: 18, weight: "bold" }
            }
          },
          scales: {
            x: { ticks: { color: "#111827", font: { weight: "600" } } },
            y: { ticks: { color: "#111827", font: { weight: "600" } }, beginAtZero: true }
          }
        }
      });
    }
  
    return section;
  }
  
  // Separate init function
  function init() {
    const root = document.getElementById("content");
    YEAR_ORDER.forEach(year => {
      const info = DATA[year] || {};
      root.appendChild(renderYearSection(year, info));
    });
  }
  
  // Run init after DOM loads
  document.addEventListener("DOMContentLoaded", init);
  
  // Enable hover autoplay for videos
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".video-wrap iframe").forEach(iframe => {
      const baseUrl = iframe.src;
      iframe.parentElement.addEventListener("mouseenter", () => {
        iframe.src = baseUrl + "?autoplay=1&mute=1";
      });
      iframe.parentElement.addEventListener("mouseleave", () => {
        iframe.src = baseUrl;
      });
    });
  });