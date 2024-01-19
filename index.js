
// Function to calculate the distance from Scuber's headquarters in blocks

function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}


// Function to calculate the distance from Scuber's headquarters in feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264; // 1 block = 264 feet
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  const distance = Math.abs(destination - start);
  return distance * 264; // 1 block = 264 feet
}

// Function to calculate the fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

