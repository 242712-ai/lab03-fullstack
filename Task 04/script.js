
function checkEligibility() {

    // Get student information
    let name = document.getElementById("studentName").value;

    let program =
        document.getElementById("program").value;

    let semester =
        Number(document.getElementById("semester").value);

    let cgpa =
        Number(document.getElementById("cgpa").value);

    let income =
        Number(document.getElementById("income").value);

    let performance =
        document.getElementById("performance").value;

    let attendance =
        Number(document.getElementById("attendance").value);

    let previousScholarship =
        document.getElementById("previousScholarship").value;

    let credits =
        Number(document.getElementById("credits").value);


    // Display student information
    document.getElementById("displayName").textContent = name;

    document.getElementById("displayProgram").textContent = program;

    document.getElementById("displaySemester").textContent = semester;

    document.getElementById("displayCGPA").textContent = cgpa;


    // Scholarship requirements

    let academicRequirement = cgpa >= 3.00;

    let performanceRequirement =
        performance === "Excellent" ||
        performance === "Good";

    let attendanceRequirement =
        attendance >= 80;

    let financialRequirement =
        income <= 80000;

    let semesterRequirement =
        semester >= 2;

    let creditRequirement =
        credits >= 30;


    // Count satisfied requirements
    let satisfied = 0;

    if (academicRequirement) {
        satisfied++;
    }

    if (performanceRequirement) {
        satisfied++;
    }

    if (attendanceRequirement) {
        satisfied++;
    }

    if (financialRequirement) {
        satisfied++;
    }

    if (semesterRequirement) {
        satisfied++;
    }

    if (creditRequirement) {
        satisfied++;
    }


    // Explanation
    let explanation =
        document.getElementById("explanationList");

    explanation.innerHTML = "";


    // Academic requirement
    if (academicRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Academic requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Academic requirement not satisfied." +
            "</li>";
    }


    // Performance requirement
    if (performanceRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Academic performance requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Academic performance requirement not satisfied." +
            "</li>";
    }


    // Attendance requirement
    if (attendanceRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Attendance requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Attendance requirement not satisfied." +
            "</li>";
    }


    // Financial requirement
    if (financialRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Financial requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Financial requirement not satisfied." +
            "</li>";
    }


    // Semester requirement
    if (semesterRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Semester requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Semester requirement not satisfied." +
            "</li>";
    }


    // Credit requirement
    if (creditRequirement) {

        explanation.innerHTML +=
            "<li class='text-success'>" +
            "Completed credit requirement satisfied." +
            "</li>";

    } else {

        explanation.innerHTML +=
            "<li class='text-danger'>" +
            "Completed credit requirement not satisfied." +
            "</li>";
    }


    // Previous scholarship
    if (previousScholarship === "Yes") {

        explanation.innerHTML +=
            "<li class='text-warning'>" +
            "Student has received a previous scholarship. " +
            "Further review is recommended." +
            "</li>";
    }


    // Result box
    let resultBox =
        document.getElementById("resultBox");


    // Final classification

    if (
        satisfied >= 5 &&
        academicRequirement &&
        attendanceRequirement
    ) {

        resultBox.innerHTML = `
            <div class="result-title text-success">
                Eligible
            </div>

            <p class="mt-3">
                The student satisfies most scholarship requirements.
            </p>
        `;

        resultBox.style.backgroundColor = "#d1e7dd";

    }

    else if (satisfied >= 3) {

        resultBox.innerHTML = `
            <div class="result-title text-warning">
                Requires Further Review
            </div>

            <p class="mt-3">
                Some requirements are satisfied,
                but further review is required.
            </p>
        `;

        resultBox.style.backgroundColor = "#fff3cd";

    }

    else {

        resultBox.innerHTML = `
            <div class="result-title text-danger">
                Not Eligible
            </div>

            <p class="mt-3">
                The student does not satisfy enough
                scholarship requirements.
            </p>
        `;

        resultBox.style.backgroundColor = "#f8d7da";
    }
}

