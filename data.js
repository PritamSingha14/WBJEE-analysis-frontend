// WBJEE analysis data for 2021–2025

const DATA = {
    2025: {
      difficulty: { Mathematics: "Moderate–Difficult (lengthy in parts)", Physics: "Easy–Moderate", Chemistry: "Moderate" },
      videoUrl: "https://www.youtube.com/embed/xoV5aI-OHP4",
      marksVsRank: [
        { marks: "190–200", rank: "1–30" },
        { marks: "170–189", rank: "31–200" },
        { marks: "150–169", rank: "201–700" },
        { marks: "130–149", rank: "701–2000" },
        { marks: "110–129", rank: "2001–5000" },
        { marks: "90–109", rank: "5001–10000" },
        { marks: "70–89", rank: "10001–20000" },
        { marks: "50–69", rank: "20001–40000" },
        { marks: "30–49", rank: "40001–70000" },
        { marks: "<30", rank: "70001+" }
      ],
      chapterWeights: [
        { chapter: "Algebra", value: 14 },
        { chapter: "Calculus", value: 10 },
        { chapter: "Geometry", value: 16 },
        { chapter: "Thermodynamics", value: 7 },
        { chapter: "Electrodynamics", value: 12 },
        { chapter: "Solen Chemistry", value: 8 },
        { chapter: "Physical Chemistry", value: 13 },
        { chapter: "Inorganic Chemistry", value: 9 },
        { chapter: "English & Logical", value: 33 }
      ]
    },
  
    2024: {
      difficulty: { Mathematics: "Moderate–Difficult", Physics: "Moderate", Chemistry: "Moderate" },
      videoUrl: "https://www.youtube.com/embed/twakKvQxKqE",
      marksVsRank: [
        { marks: "155.4", rank: "22" },
        { marks: "138.3", rank: "59" },
        { marks: "130.2", rank: "98" },
        { marks: "115.4", rank: "212" },
        { marks: "90.1", rank: "822" },
        { marks: "72.4", rank: "2424" },
        { marks: "63.3", rank: "4248" },
        { marks: "52.4", rank: "9150" },
        { marks: "41.4", rank: "20603" },
        { marks: "32.4", rank: "42194" }
      ],
      chapterWeights: [
        { chapter: "Algebra", value: 12 },
        { chapter: "Calculus", value: 11 },
        { chapter: "Geometry", value: 15 },
        { chapter: "Thermodynamics", value: 6 },
        { chapter: "Electrodynamics", value: 10 },
        { chapter: "Solen Chemistry", value: 9 },
        { chapter: "Physical Chemistry", value: 14 },
        { chapter: "Inorganic Chemistry", value: 8 },
        { chapter: "English & Logical", value: 30 }
      ]
    },
  
    2023: {
      difficulty: { Mathematics: "Moderate", Physics: "Moderate", Chemistry: "Moderate" },
      videoUrl: "https://www.youtube.com/embed/M-YmSGcQ3Lc",
      marksVsRank: [
        { marks: ">150", rank: "1–50" },
        { marks: "140–145", rank: "50–150" },
        { marks: "130–139", rank: "150–250" },
        { marks: "120–129", rank: "250–500" },
        { marks: "100–109", rank: "800–4000" },
        { marks: "90–99", rank: "4000–8000" },
        { marks: "70–90", rank: "8000–12000" },
        { marks: "40–70", rank: "12000–25000" },
        { marks: "30–40", rank: "25000–50000" }
      ],
      chapterWeights: [
        { chapter: "Algebra", value: 13 },
        { chapter: "Calculus", value: 9 },
        { chapter: "Geometry", value: 14 },
        { chapter: "Thermodynamics", value: 8 },
        { chapter: "Electrodynamics", value: 11 },
        { chapter: "Solen Chemistry", value: 7 },
        { chapter: "Physical Chemistry", value: 12 },
        { chapter: "Inorganic Chemistry", value: 10 },
        { chapter: "English & Logical", value: 32 }
      ]
    },
  
    2022: {
      difficulty: { Mathematics: "Moderate", Physics: "Moderate", Chemistry: "Moderate" },
      videoUrl: "https://www.youtube.com/embed/dZZdpMg5NS4",
      marksVsRank: [
        { marks: "120.4", rank: "1" },
        { marks: "117.9", rank: "205" },
        { marks: "107.3", rank: "354" },
        { marks: "102.0", rank: "462" },
        { marks: "82.2", rank: "1307" },
        { marks: "39.0", rank: "25006" }
      ],
      chapterWeights: [
        { chapter: "Algebra", value: 15 },
        { chapter: "Calculus", value: 10 },
        { chapter: "Geometry", value: 13 },
        { chapter: "Thermodynamics", value: 7 },
        { chapter: "Electrodynamics", value: 9 },
        { chapter: "Solen Chemistry", value: 6 },
        { chapter: "Physical Chemistry", value: 11 },
        { chapter: "Inorganic Chemistry", value: 8 },
        { chapter: "English & Logical", value: 31 }
      ]
    },
  
    2021: {
      difficulty: { Mathematics: "Moderate", Physics: "Moderate", Chemistry: "Moderate" },
      videoUrl: "https://www.youtube.com/embed/OT_VGUqsW1U",
      marksVsRank: [
        { marks: "190–200", rank: "1–60" },
        { marks: "170–189", rank: "100–150" },
        { marks: "150–169", rank: "176–350" },
        { marks: "120–149", rank: "2400–2800" },
        { marks: "100–119", rank: "5900–6300" },
        { marks: "80–99", rank: "9900–10300" },
        { marks: "60–79", rank: "15750–16250" },
        { marks: "40–59", rank: "34750–35250" },
        { marks: "20–39", rank: "56000–58500" },
        { marks: "<20", rank: "66000+" }
      ],
      chapterWeights: [
        { chapter: "Algebra", value: 13 },
        { chapter: "Calculus", value: 8 },
        { chapter: "Geometry", value: 12 },
        { chapter: "Thermodynamics", value: 6 },
        { chapter: "Electrodynamics", value: 10 },
        { chapter: "Solen Chemistry", value: 7 },
        { chapter: "Physical Chemistry", value: 10 },
        { chapter: "Inorganic Chemistry", value: 9 },
        { chapter: "English & Logical", value: 30 }
      ]
    }
  };
  
  const YEAR_ORDER = [2025, 2024, 2023, 2022, 2021];