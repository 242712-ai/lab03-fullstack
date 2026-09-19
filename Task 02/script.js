
function checkEligibility() {

    // Student Information

    const studentName =
        document.getElementById("studentName").value;

    const studentId =
        document.getElementById("studentId").value;

    const semester =
        Number(document.getElementById("semester").value);

    const cgpa =
        Number(document.getElementById("cgpa").value);

    const standing =
        document.getElementById("standing").value;

    const feeStatus =
        document.getElementById("feeStatus").value;


    // Course Information

    const courseName =
        document.getElementById("courseName").value;

    const requiredSemester =
        Number(document.getElementById("requiredSemester").value);

    const requiredCgpa =
        Number(document.getElementById("requiredCgpa").value);

    const prerequisite =
        document.getElementById("prerequisite").value;

    const prerequisiteStatus =
        document.getElementById("prerequisiteStatus").value;

    const availability =
        document.getElementById("availability").value;


    // Previous Course Performance

    const previousGrade =
        document.getElementById("previousGrade").value;


    // Result Elements

    const result =
        document.getElementById("result");

    const resultTitle =
        document.getElementById("resultTitle");

    const studentResult =
        document.getElementById("studentResult");

    const reasonList =
        document.getElementById("reasonList");


    // Clear Previous Results

    reasonList.innerHTML = "";


    let eligible = true;

    let reasons = [];


    // Check Semester

    if (semester < requiredSemester) {

        eligible = false;

        reasons.push(
            "Student has not reached the required semester."
        );
    }


    // Check CGPA

    if (cgpa < requiredCgpa) {

        eligible = false;

        reasons.push(
            "CGPA is below the required minimum of "
            + requiredCgpa + "."
        );
    }


    // Check Prerequisite

    if (prerequisiteStatus === "incomplete") {

        eligible = false;

        reasons.push(
            "The prerequisite course (" +
            prerequisite +
            ") has not been completed."
        );
    }


    // Check Academic Standing

    if (standing !== "good") {

        eligible = false;

        reasons.push(
            "Student is not in good academic standing."
        );
    }


    // Check Fee Status

    if (feeStatus !== "paid") {

        eligible = false;

        reasons.push(
            "Registration cannot be completed because there is an unresolved fee/payment issue."
        );
    }


    // Check Previous Grade

    if (previousGrade === "F") {

        eligible = false;

        reasons.push(
            "Previous course performance does not satisfy the requirement because the previous course was failed."
        );
    }


    // Check Course Availability

    if (availability !== "available") {

        eligible = false;

        reasons.push(
            "The selected course is currently unavailable."
        );
    }


    // Show Result

    result.style.display = "block";


    // If Eligible

    if (eligible) {

        result.className = "eligible";

        resultTitle.innerHTML =
            "Registration Approved";

        studentResult.innerHTML =
            "<strong>" + studentName +
            "</strong> (" + studentId +
            ") is eligible to register for <strong>" +
            courseName + "</strong>.";

        reasons.push(
            "All academic, prerequisite, payment, performance, and course availability requirements have been satisfied."
        );

    }


    // If Not Eligible

    else {

        result.className = "not-eligible";

        resultTitle.innerHTML =
            "Registration Cannot Be Completed";

        studentResult.innerHTML =
            "<strong>" + studentName +
            "</strong> (" + studentId +
            ") is not eligible to register for <strong>" +
            courseName +
            "</strong> because one or more requirements have not been satisfied.";
    }


    // Display Reasons

    reasons.forEach(function(reason) {

        const li =
            document.createElement("li");

        li.textContent = reason;

        reasonList.appendChild(li);

    });

}
