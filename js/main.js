function handleSeatClick() {
    selectedSeats = []
    document.querySelectorAll('.seat').forEach(item => {
        item.addEventListener('click', event => {
            //handle click 
            console.log(item);
            if (item.classList.contains("bg-green-500")) { // Seat was selected. So, remove.
                // 1. Change color / visual selection
                item.classList.remove("bg-green-500");
                item.classList.remove("text-white");
                // 2. Remove from the selected seats list
                selectedSeats.splice((selectedSeats.indexOf(item.innerText)), 1);
                console.log(selectedSeats);
            }
            else { // Seat was empty. So, select.
                // If 4+, then no more selection
                if ((selectedSeats.length) < 4) {
                    // 1. Change color / visual selection
                    item.classList.add("bg-green-500");
                    item.classList.add("text-white");
                    // 2. Add to the selected seats list
                    selectedSeats.push(item.innerText);
                    console.log(selectedSeats);
                    addSeat(item.innerText);
                }
            }
        })
    })
}

function addSeat(seat) {
    listOfSeats = document.getElementById("selected-seats");
    el = document.createElement('div');
    el.innerHTML = `
        <div class="py-2 flex justify-between text-gray-500">
                                    <span class="">${seat}</span>
                                    <span class="">Economy</span>
                                    <span class="">550</span>
        </div>
    `
    listOfSeats.appendChild(el);
}

function removeSeat(seat) {

}

handleSeatClick()

function handleBooking() {
    // document.
}