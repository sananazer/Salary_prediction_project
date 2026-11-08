const roleBase = {
  // Software and IT
  "Software Developer": 600000,
  "Software Engineer": 650000,
  "Senior Software Engineer": 1400000,
  "Full Stack Developer": 700000,
  "Frontend Developer": 550000,
  "Backend Developer": 650000,
  "Web Developer": 450000,
  "Mobile App Developer": 650000,
  "Android Developer": 600000,
  "iOS Developer": 700000,
  "Game Developer": 550000,
  "Python Developer": 600000,
  "Java Developer": 600000,
  "JavaScript Developer": 550000,
  "C++ Developer": 650000,
  "PHP Developer": 450000,
  "DevOps Engineer": 900000,
  "Cloud Engineer": 850000,
  "Cloud Architect": 1800000,
  "Cybersecurity Analyst": 650000,
  "Cybersecurity Engineer": 900000,
  "Network Engineer": 500000,
  "System Administrator": 450000,
  "IT Support Specialist": 350000,
  "IT Manager": 1200000,
  "QA Engineer": 500000,
  "Software Tester": 400000,
  "Automation Tester": 650000,
  "Database Administrator": 700000,
  "System Architect": 1600000,
  "Technical Support Engineer": 400000,

  // Data, AI and analytics
  "Data Analyst": 430000,
  "Data Scientist": 760000,
  "Data Engineer": 800000,
  "Big Data Engineer": 1000000,
  "Machine Learning Engineer": 1100000,
  "AI Engineer": 1000000,
  "AI Researcher": 900000,
  "Business Intelligence Analyst": 650000,
  "Business Analyst": 520000,
  "Data Architect": 1500000,
  "Statistician": 450000,
  "Research Analyst": 450000,
  "Data Quality Analyst": 450000,
  "Database Developer": 600000,

  // Design and product
  "UI/UX Designer": 440000,
  "UI Designer": 400000,
  "UX Designer": 500000,
  "Graphic Designer": 350000,
  "Product Designer": 650000,
  "Product Manager": 1400000,
  "Project Manager": 720000,
  "Scrum Master": 1000000,
  "Business Consultant": 800000,
  "Technical Writer": 450000,
  "Content Writer": 300000,

  // Engineering
  "Civil Engineer": 400000,
  "Mechanical Engineer": 450000,
  "Electrical Engineer": 450000,
  "Electronics Engineer": 450000,
  "Computer Engineer": 550000,
  "Chemical Engineer": 500000,
  "Automobile Engineer": 450000,
  "Biomedical Engineer": 450000,
  "Aerospace Engineer": 700000,
  "Robotics Engineer": 750000,
  "Embedded Systems Engineer": 650000,
  "Production Engineer": 400000,
  "Quality Engineer": 450000,
  "Environmental Engineer": 400000,

  // School teaching
  "Nursery Teacher": 180000,
  "Kindergarten Teacher": 200000,
  "Pre-Primary Teacher": 200000,
  "Primary School Teacher": 250000,
  "Upper Primary Teacher": 280000,
  "Assistant Teacher": 250000,
  "School Teacher": 300000,
  "High School Teacher": 350000,
  "Higher Secondary Teacher": 420000,
  "TGT Teacher": 350000,
  "PGT Teacher": 450000,
  "Mathematics Teacher": 350000,
  "Science Teacher": 350000,
  "Physics Teacher": 380000,
  "Chemistry Teacher": 380000,
  "Biology Teacher": 350000,
  "Computer Science Teacher": 380000,
  "English Teacher": 320000,
  "Malayalam Teacher": 300000,
  "Hindi Teacher": 300000,
  "Social Science Teacher": 320000,
  "Economics Teacher": 350000,
  "Commerce Teacher": 350000,
  "Physical Education Teacher": 300000,
  "Art Teacher": 280000,
  "Music Teacher": 280000,
  "Special Education Teacher": 320000,
  "Vocational Teacher": 320000,
  "Head Teacher": 450000,
  "School Principal": 700000,
  "Vice Principal": 550000,
  "School Coordinator": 400000,

  // College and university teaching
  "Teaching Assistant": 300000,
  "Academic Instructor": 350000,
  "College Lecturer": 400000,
  "Lecturer": 400000,
  "Guest Lecturer": 240000,
  "Guest Faculty": 260000,
  "Visiting Faculty": 300000,
  "Assistant Professor": 650000,
  "Associate Professor": 1000000,
  "Professor": 1400000,
  "Senior Professor": 1800000,
  "University Lecturer": 450000,
  "University Assistant Professor": 700000,
  "University Associate Professor": 1100000,
  "University Professor": 1500000,
  "Adjunct Professor": 450000,
  "Research Professor": 1000000,
  "Teaching Fellow": 350000,
  "Postdoctoral Researcher": 600000,
  "Research Fellow": 450000,
  "College Principal": 1000000,
  "Dean": 1600000,
  "Head of Department": 900000,
  "Academic Coordinator": 400000,
  "University Registrar": 900000,
  "Laboratory Instructor": 300000,

  // Other teaching and training
  "Private Tutor": 240000,
  "Online Teacher": 300000,
  "Home Tutor": 240000,
  "Coaching Centre Teacher": 300000,
  "IELTS Trainer": 400000,
  "Language Trainer": 320000,
  "Corporate Trainer": 550000,
  "Technical Trainer": 450000,
  "Computer Instructor": 300000,
  "Soft Skills Trainer": 400000,
  "Educational Consultant": 500000,
  "Curriculum Developer": 500000,
  "Instructional Designer": 550000,
  "Education Counsellor": 300000,

  // Business and management
  "HR Manager": 500000,
  "HR Executive": 300000,
  "Recruiter": 350000,
  "Marketing Specialist": 420000,
  "Marketing Manager": 800000,
  "Digital Marketing Specialist": 400000,
  "SEO Specialist": 350000,
  "Sales Executive": 300000,
  "Sales Manager": 700000,
  "Operations Manager": 800000,
  "Business Development Manager": 750000,
  "Financial Analyst": 600000,
  "Accountant": 390000,
  "Auditor": 450000,
  "Finance Manager": 1000000,
  "Investment Analyst": 800000,
  "Bank Manager": 800000,
  "Customer Support Executive": 250000,
  "Customer Success Manager": 650000,
  "Office Administrator": 300000,
  "Business Owner": 600000,
  "Entrepreneur": 600000,

  // Healthcare
  "Doctor": 900000,
  "Medical Officer": 700000,
  "Nurse": 300000,
  "Pharmacist": 300000,
  "Dentist": 600000,
  "Physiotherapist": 350000,
  "Psychologist": 400000,
  "Medical Lab Technician": 250000,
  "Radiology Technician": 300000,
  "Healthcare Administrator": 600000,
  "Nutritionist": 300000,

  // Other professional roles
  "Lawyer": 500000,
  "Civil Services Officer": 1000000,
  "Government Officer": 500000,
  "Police Officer": 400000,
  "Architect": 500000,
  "Interior Designer": 400000,
  "Journalist": 350000,
  "Photographer": 300000,
  "Video Editor": 350000,
  "Animator": 400000,
  "Chef": 350000,
  "Hotel Manager": 600000,
  "Event Manager": 450000,
  "Logistics Manager": 650000,
  "Supply Chain Analyst": 550000,
  "Research Scientist": 650000,
  "Environmental Scientist": 400000,
  "Agricultural Officer": 400000,
  "Social Worker": 280000
};

const form = document.getElementById("salary-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);

    const role = data.get("role");
    const experience = Number(data.get("experience") || 0);
    const education = data.get("education");
    const industry = data.get("industry");
    const region = data.get("region");
    const company = data.get("company");

    if (!role || !(role in roleBase)) {
      alert("Please select a valid job role.");
      return;
    }

    // Base annual salary in Indian rupees
    let salary = roleBase[role];

    // Experience adjustment
    if (experience <= 1) {
      salary *= 0.85;
    } else if (experience <= 3) {
      salary *= 1.0;
    } else if (experience <= 5) {
      salary *= 1.20;
    } else if (experience <= 10) {
      salary *= 1.50;
    } else {
      salary *= 1.85;
    }

    // Education adjustment
    const educationFactor = {
      "High School": 0.85,
      "Diploma": 0.90,
      "Bachelor's Degree": 1.00,
      "Bachelor Degree": 1.00,
      "Master's Degree": 1.20,
      "Master Degree": 1.20,
      "PhD": 1.40,
      "Doctorate": 1.40
    };

    salary *= educationFactor[education] || 1.0;

    // Industry adjustment
    const industryFactor = {
      "IT": 1.15,
      "Technology": 1.15,
      "Education": 1.00,
      "Healthcare": 1.05,
      "Finance": 1.15,
      "Banking": 1.10,
      "Manufacturing": 1.00,
      "Retail": 0.90,
      "Government": 1.00,
      "Construction": 1.00,
      "Consulting": 1.10
    };

    salary *= industryFactor[industry] || 1.0;

    // Region adjustment
    const regionFactor = {
      "Bengaluru": 1.25,
      "Bangalore": 1.25,
      "Mumbai": 1.25,
      "Delhi": 1.20,
      "Hyderabad": 1.15,
      "Chennai": 1.10,
      "Pune": 1.10,
      "Kochi": 1.00,
      "Kerala": 0.95,
      "India": 1.00,
      "International": 1.80
    };

    salary *= regionFactor[region] || 1.0;

    // Company size adjustment
    const companyFactor = {
      "Startup": 0.90,
      "Small": 0.90,
      "Medium": 1.00,
      "Large": 1.15,
      "MNC": 1.25,
      "Multinational": 1.25,
      "Government": 1.00
    };

    salary *= companyFactor[company] || 1.0;

    const low = Math.round((salary * 0.90) / 1000) * 1000;
    const high = Math.round((salary * 1.10) / 1000) * 1000;
    const monthly = Math.round(salary / 12);

    const formatINR = (amount) =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
      }).format(amount);

    const result = document.getElementById("result");
    const resultCard = document.getElementById("result-card");

    if (result) {
      result.innerHTML = `
        <h3>Estimated Salary</h3>
        <p><strong>${formatINR(low)} – ${formatINR(high)}</strong> per year</p>
        <p>Estimated monthly salary: <strong>${formatINR(monthly)}</strong></p>
        <p>Selected role: <strong>${role}</strong></p>
        <p>Experience: <strong>${experience} year(s)</strong></p>
        <small>This is an illustrative estimate, not a guaranteed or verified market salary.</small>
      `;
    }

    if (resultCard) {
      resultCard.style.display = "block";
    }

    const placeholder = document.querySelector(".result-placeholder");
    const intro = document.querySelector(".result-intro");

    if (placeholder) placeholder.style.display = "none";
    if (intro) intro.style.display = "none";
  });
}