
// Student information stored in JavaScript
const student = {
    name: "Muhammad Hamza",
    id: "242712",
    program: "BS Computer Science",
    semester: 5,

    marks: 78,
    attendance: 82,

    assignment: 80,
    quiz: 75,
    exam: 78
};


// Display Student Information
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentId").textContent = student.id;
document.getElementById("program").textContent = student.program;
document.getElementById("semester").textContent = student.semester;


// Display Academic Information
document.getElementById("marks").textContent = student.marks;
document.getElementById("attendance").textContent = student.attendance;
document.getElementById("assignment").textContent = student.assignment;
document.getElementById("quiz").textContent = student.quiz;
document.getElementById("exam").textContent = student.exam;


// Attendance Progress Bar
const attendanceBar = document.getElementById("attendanceBar");

attendanceBar.style.width = student.attendance + "%";
attendanceBar.textContent = student.attendance + "%";


// Calculate Overall Academic Performance
const overall =
    (student.assignment * 0.20) +
    (student.quiz * 0.20) +
    (student.exam * 0.60);


// Display Overall Percentage
document.getElementById("overall").textContent =
    overall.toFixed(2);


// Grade Calculation
let grade;

if (overall >= 85) {
    grade = "A";
}
else if (overall >= 75) {
    grade = "B";
}
else if (overall >= 65) {
    grade = "C";
}
else if (overall >= 50) {
    grade = "D";
}
else {
    grade = "F";
}


// Academic Rules
const minimumAcademicPerformance = 50;
const minimumAttendance = 75;


// Result Elements
const statusElement = document.getElementById("status");
const gradeElement = document.getElementById("grade");
const messageElement = document.getElementById("message");
const resultCard = document.getElementById("resultCard");


// Determine Final Status
if (student.attendance < minimumAttendance) {

    statusElement.textContent = "Attendance Deficient";

    gradeElement.textContent = "Grade: " + grade;

    messageElement.textContent =
        "The student's attendance is below the required 75%.";

    resultCard.classList.add("bg-warning");
}


else if (overall >= minimumAcademicPerformance) {

    statusElement.textContent = "Successful";

    gradeElement.textContent = "Grade: " + grade;

    messageElement.textContent =
        "The student has achieved the required academic performance and attendance.";

    resultCard.classList.add("bg-success");
}


else {

    statusElement.textContent = "Unsuccessful";

    gradeElement.textContent = "Grade: " + grade;

    messageElement.textContent =
        "The student's overall academic performance is below the required minimum.";

    resultCard.classList.add("bg-danger");
}

