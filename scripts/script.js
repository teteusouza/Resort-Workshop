function calculateCost() {
    const roomType = document.querySelector('input[name="room-type"]:checked').value;
    const adults = parseInt(document.getElementById('adults').value);
    const kids = parseInt(document.getElementById('kids').value);
    const nights = parseInt(document.getElementById('nights').value);
    const checkinDate = new Date(document.getElementById('checkin-date').value);
    const discount = document.querySelector('input[name="discountRadios"]:checked').value;
    
    let roomCost;
    const occupancy = adults + kids;
    const isPeakSeason = checkinDate.getMonth() >= 9 || checkinDate.getMonth() <= 1;
    console.log(occupancy, isPeakSeason, roomType);
    switch (roomType) {
        case 'queen':
          if (occupancy <= 2) {
            roomCost = isPeakSeason ? 250 : 150;
          } else if (occupancy <= 5) {
            roomCost = isPeakSeason ? 250 : 150;
          } else if (occupancy <= 6) {
            roomCost = isPeakSeason ? 350 : 210;
          }
          break;
        case 'king':
          if (occupancy <= 2) {
            roomCost = isPeakSeason ? 250 : 200;
          } else if (occupancy <= 5) {
            roomCost = isPeakSeason ? 350 : 225;
          } else if (occupancy <= 6) {
            roomCost = isPeakSeason ? 450 : 275;
          }
          break;
        case '2bedsuite':
          if (occupancy <= 2) {
            roomCost = isPeakSeason ? 400 : 250;
          } else if (occupancy <= 5) {
            roomCost = isPeakSeason ? 500 : 325;
          } else if (occupancy <= 6) {
            roomCost = isPeakSeason ? 600 : 375;
          }
          break;
      }
      
    if (discount === 'aaaSenior') {
      roomCost *= 0.9;
    } else if (discount === 'military') {
      roomCost *= 0.8;
    }
console.log(roomCost, nights);

    const totalCost = roomCost * nights;
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Total Cost: $${totalCost}`;
  }
  calculateCost();