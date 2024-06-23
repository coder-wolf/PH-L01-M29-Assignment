// ===================================
// ==== Objective: Seat Selection ====
// ===================================

function handleSeat() {
    // ======= Algorithm: ========
    // 1. Mark seat (Green / Not green)
    // 2. Add to seats list (right sidebar)
    // 3. Update total seats list
    // 4. Update price
    selectedSeats = []
    document.querySelectorAll('.seat').forEach(item => {
        item.addEventListener('click', event => {
            if (item.classList.contains("bg-green-500")) {
                // 1. Mark done / undone
                item.classList.remove("bg-green-500")
                item.classList.remove("text-white")

                // 2. Remove from selected items list, and add to sidebar
                selectedSeats.splice((selectedSeats.indexOf(item.innerText)), 1);
            }
            else {
                if ((selectedSeats.length) < 4) {
                    item.classList.add("bg-green-500");
                    item.classList.add("text-white");

                    selectedSeats.push(item.innerText);
                }
            }
            // 2. Update sidebar
            updateSidebar(selectedSeats);
            // 3. Update total seats list
            document.getElementById("total-seats").innerText = String(40 - selectedSeats.length) + " Seats Left";
            // 4. Update price
            updatePrice(selectedSeats)
            // 5. Handle Coupon
            // handleCoupon("new15")
        });
    });
}

function updateSidebar(selectedSeats) {
    parent = document.getElementById("selected-seats");
    parent.innerHTML = "";

    for (seat of selectedSeats) {
        el = document.createElement("div");
        el.innerHTML = `
            <div class="py-2 flex justify-between text-gray-500">
                <span class="">${seat}</span>
                <span class="">Economy</span>
                <span class="">550</span>
            </div> 
        `;

        parent.appendChild(el);
    }
}

function updatePrice(selectedSeats) {
    total = document.getElementById("total-price");
    total.innerText = "BDT " + String(selectedSeats.length * 550);

    grandTotal = document.getElementById("grand-total-price");
    grandTotal.innerText = "BDT " + String(selectedSeats.length * 550);

}

// ===================================
// ==== Objective: Coupon Related ====
// ===================================

function handleCoupon(coupon) {

    coupon = document.getElementById('coupon-input').value;

    grandTotal = document.getElementById("grand-total-price");

    discount = 1;
    if (String(coupon).toLowerCase() == 'new15') discount = 1 - 0.15;
    if (String(coupon).toLowerCase() == 'couple 20') discount = 1 - 0.20;

    grandTotal.innerText = "BDT " + String((selectedSeats.length * 550 * discount));

    // === Vanish the coupon field ===
    document.getElementById("coupon-container").classList.add("hidden");
    // === Show the discount amount ==
    document.getElementById("discount-amount").innerHTML = `<div class="flex justify-between my-4">
                                <span class="">Discount</span>
                                <span id="" class="">- BDT ${(selectedSeats.length * 550 * (1 - discount)).toFixed(0)}</span >
                            </div > `;
}

// ===================================
// ==== Objective: Checkout Event ====
// ===================================

function handleCheckout() {

}


// ======== Call the handlers ========

handleSeat();
// handleCoupon();
handleCheckout();