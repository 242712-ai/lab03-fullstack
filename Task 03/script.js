function calculateBill() {

    // Get selected product
    let productSelect = document.getElementById("product");

    let selectedOption =
        productSelect.options[productSelect.selectedIndex];


    // Product name
    let productName = selectedOption.value;


    // Unit price
    let unitPrice =
        Number(selectedOption.getAttribute("data-price"));


    // Get quantity
    let quantity =
        Number(document.getElementById("quantity").value);


    // Check quantity
    if (quantity < 1 || isNaN(quantity)) {

        quantity = 1;

        document.getElementById("quantity").value = 1;
    }


    // Get customer type
    let customerType =
        document.getElementById("customerType").value;


    // Calculate subtotal
    let subtotal =
        unitPrice * quantity;


    // -------------------------
    // Discount Calculation
    // -------------------------

    let discountRate = 0;


    // Premium customer gets 10%
    if (customerType === "Premium") {

        discountRate = 10;
    }


    // Subtotal >= 100000 gets 5%
    if (subtotal >= 100000) {

        discountRate =
            Math.max(discountRate, 5);
    }


    // Subtotal >= 200000 gets 15%
    if (subtotal >= 200000) {

        discountRate =
            Math.max(discountRate, 15);
    }


    // Calculate discount amount
    let discountAmount =
        subtotal * discountRate / 100;


    // Amount after discount
    let amountAfterDiscount =
        subtotal - discountAmount;


    // -------------------------
    // Delivery Calculation
    // -------------------------

    let deliveryCharges = 2000;


    // Free delivery if amount >= 100000
    if (amountAfterDiscount >= 100000) {

        deliveryCharges = 0;
    }


    // Final payable amount
    let finalAmount =
        amountAfterDiscount + deliveryCharges;


    // -------------------------
    // Display Results
    // -------------------------

    document.getElementById("summaryProduct").innerText =
        productName;


    document.getElementById("summaryQuantity").innerText =
        quantity;


    document.getElementById("unitPrice").innerText =
        "Rs. " + unitPrice.toLocaleString();


    document.getElementById("subtotal").innerText =
        "Rs. " + subtotal.toLocaleString();


    document.getElementById("discount").innerText =
        discountRate + "%";


    document.getElementById("discountAmount").innerText =
        "Rs. " + discountAmount.toLocaleString();


    // Delivery display
    if (deliveryCharges === 0) {

        document.getElementById("delivery").innerText =
            "FREE";

        document.getElementById("delivery").className =
            "col-6 text-end delivery-free";

    }

    else {

        document.getElementById("delivery").innerText =
            "Rs. " + deliveryCharges.toLocaleString();

        document.getElementById("delivery").className =
            "col-6 text-end";
    }


    // Final amount
    document.getElementById("finalAmount").innerText =
        "Rs. " + finalAmount.toLocaleString();
}


// Run calculation when page loads
calculateBill();