/**
 * Dhruv Sharma - Portfolio Configuration
 * ------------------------------------------------------------------
 * Easily customize personal information, social handles, email,
 * and academic details in this single file.
 */

const PORTFOLIO_CONFIG = {
    personal: {
        name: "Dhruv Sharma",
        title: "B.Tech Computer Science & Engineering Undergraduate",
        tagline: "Building solid foundations in C, computational logic, and systems architecture at JECRC University.",
        location: "Jaipur, Rajasthan, India",
        university: "JECRC University, Jaipur",
        department: "Department of Computer Science & Engineering (Core)",
        graduationYear: "2030 (Expected)",
        academicYear: "1st Year (2026–2030)",
        status: "First-Year Undergraduate · Open for Academic Collaborations & Future Internships",
    },
    
    contacts: {
        // Edit these placeholders with your actual details
        email: "dhruv.sharma@example.com",
        github: "https://github.com/dhruvsharma-dev",
        githubUsername: "dhruvsharma-dev",
        linkedin: "https://linkedin.com/in/dhruv-sharma-jecrc",
        linkedinUsername: "dhruv-sharma-jecrc",
        twitter: "https://x.com/dhruvsharma_cse",
    },
    
    education: {
        college: {
            degree: "Bachelor of Technology (B.Tech)",
            branch: "Computer Science and Engineering (Core)",
            institution: "JECRC University, Jaipur, Rajasthan",
            duration: "2026 – 2030 (Expected)",
            status: "First Year Student",
            keySubjects: [
                "Programming for Problem Solving (C Language)",
                "Engineering Mathematics (Calculus & Linear Algebra)",
                "Digital Logic & Computer Systems",
                "Discrete Mathematical Structures",
                "Environmental & Engineering Sciences"
            ]
        },
        class12: {
            examination: "All India Senior School Certificate Examination (Class XII)",
            board: "Central Board of Secondary Education (CBSE)",
            stream: "Science (PCM with Computer Science)",
            score: "Approx. 80%",
            year: "2026",
            highlight: "Strong analytical and quantitative foundation in calculus, mechanics, and algorithmic thinking."
        },
        class10: {
            examination: "Indian Certificate of Secondary Education (Class X)",
            board: "ICSE Board",
            score: "93% Aggregate",
            year: "2024",
            highlight: "Academic distinction with top honors in Mathematics and Physical Sciences."
        }
    },
    
    leadership: {
        role: "Deputy Head Boy",
        tenure: "Senior Secondary Student Council",
        description: "Elected by faculty and peers to represent the student body of over 1,000+ students. Spearheaded council initiatives, led morning assemblies, organized inter-house debates and cultural festivals, and acted as the primary liaison between students and school administration.",
        skillsDeveloped: ["Public Speaking", "Team Coordination", "Conflict Resolution", "Executive Presence"]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
