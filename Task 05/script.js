
function checkParking() {

    // Get values from HTML
    let owner = document.getElementById("ownerType").value;

    let vehicle = document.getElementById("vehicleType").value;

    let area = document.getElementById("parkingArea").value;

    let spaces =
        parseInt(document.getElementById("availableSpaces").value);

    let universityId =
        document.getElementById("universityId").value;

    let permit =
        document.getElementById("permit").value;

    let parkingTime =
        document.getElementById("parkingTime").value;

    let specialPermission =
        document.getElementById("specialPermission").value;


    let result = "";
    let resultClass = "";


    // Update information
    document.getElementById("displayOwner").innerText = owner;

    document.getElementById("displayArea").innerText = area;

    document.getElementById("displaySpaces").innerText = spaces;


    // Rule 1: Parking area is full
    if (spaces <= 0) {

        result = "Parking Area Full";

        resultClass = "full";
    }


    // Rule 2: Invalid university ID
    else if (universityId === "Invalid") {

        result = "Parking Not Approved - Invalid University ID";

        resultClass = "not-approved";
    }


    // Rule 3: Faculty Parking
    else if (area === "Faculty Parking") {

        if (owner === "Faculty" &&
            permit === "Valid") {

            result = "Parking Approved";

            resultClass = "approved";
        }

        else if (specialPermission === "Yes" &&
                 permit === "Valid") {

            result = "Parking Approved - Special Permission";

            resultClass = "approved";
        }

        else {

            result =
                "Parking Not Approved - Faculty Parking Restricted";

            resultClass = "not-approved";
        }
    }


    // Rule 4: Student Parking
    else if (area === "Student Parking") {

        if ((owner === "Student" ||
             owner === "Faculty") &&
            permit === "Valid") {

            result = "Parking Approved";

            resultClass = "approved";
        }

        else {

            result =
                "Parking Not Approved - Student Parking Restricted";

            resultClass = "not-approved";
        }
    }


    // Rule 5: Visitor Parking
    else if (area === "Visitor Parking") {

        if (owner === "Visitor") {

            if (specialPermission === "Yes") {

                result = "Parking Approved";

                resultClass = "approved";
            }

            else {

                result = "Authorization Required";

                resultClass = "authorization";
            }
        }

        else {

            result =
                "Parking Not Approved - Visitor Area";

            resultClass = "not-approved";
        }
    }


    // Rule 6: Staff Parking
    else if (area === "Staff Parking") {

        if (owner === "Staff" &&
            permit === "Valid") {

            result = "Parking Approved";

            resultClass = "approved";
        }

        else if (specialPermission === "Yes" &&
                 permit === "Valid") {

            result =
                "Parking Approved - Special Permission";

            resultClass = "approved";
        }

        else {

            result =
                "Parking Not Approved - Staff Parking Restricted";

            resultClass = "not-approved";
        }
    }


    // Rule 7: Night time restriction
    if (parkingTime === "Night" &&
        specialPermission === "No" &&
        result === "Parking Approved") {

        result =
            "Parking Not Approved - Night Access Restricted";

        resultClass = "not-approved";
    }


    // Display final result
    let decisionBox =
        document.getElementById("decisionBox");

    decisionBox.innerText = result;

    decisionBox.className =
        "decision-box " + resultClass;
}

