class Room {
  floorNum;
  roomNum;
  price;
  #isBooked;
  constructor(floorNum, roomNum, price, isBooked) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = isBooked;
  }
  set bookedRoom(booked) {
    this.#isBooked = booked;
  }
  get bookedRoom() {
    return this.#isBooked;
  }

  static printRoom() {
    console.log("The booked rooms are: ");

    const x = rooms.filter((room) => room.bookedRoom === true);

    console.log(x);
  }

  book() {
    this.bookedRoom = true;
  }
  isBooked() {
    if (this.bookedRoom) {
      return true;
    }
    return false;
  }
}
class RoomWithView extends Room {
  view;
  numberOfBeds;
  constructor(floorNum, roomNum, price, bookedRoom, view, numberOfBeds) {
    super(floorNum, roomNum, price, bookedRoom);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }
}
class SleepingRoom extends Room {
  personCapacity;
  constructor(floorNum, roomNum, price, bookedRoom, personCapacity) {
    super(floorNum, roomNum, price, bookedRoom);
    this.personCapacity = personCapacity;
  }
}

class Hotel {
  address;
  numberOfRooms;
  #minFloor;
  #maxFloor;
  rooms;
  constructor(address, numberOfRooms, rooms, minFloor, maxFloor) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = rooms;
  }

  set theMinFloor(min) {
    this.#minFloor = min;
  }
  get theMinFloor() {
    return this.#minFloor;
  }

  set theMaxFloor(max) {
    this.#maxFloor = max;
  }
  get theMaxFloor() {
    return this.#maxFloor;
  }
  printAdvertisement() {
    console.log(
      "Advertisement:" +
        "\nThis hotel is located in " +
        this.address +
        "\nwith " +
        this.numberOfRooms +
        " rooms " +
        "\nThe number of the minimum floor is " +
        this.theMinFloor +
        " \nThe number of the maximum floor is " +
        this.theMaxFloor +
        "\n"
    );
  }

  listBookedRooms() {
    Room.printRoom();
  }
}

const r1 = new RoomWithView(1, 34, 56, false, "sea", 1);
const r2 = new RoomWithView(3, 20, 100, false, "street", 2);
const r3 = new RoomWithView(3, 12, 36, true, "beach", 3);
const r4 = new RoomWithView(2, 48, 154, true, "valley", 3);
const r5 = new RoomWithView(5, 30, 130, false, "hill", 2);

r2.book();

const s1 = new SleepingRoom(3, 41, 100, false, 2);
const s2 = new SleepingRoom(5, 15, 59, true, 4);
const s3 = new SleepingRoom(1, 34, 120, false, 3);
const s4 = new SleepingRoom(4, 11, 89, false, 2);
const s5 = new SleepingRoom(2, 23, 130, true, 1);

s4.book();

const rooms = [r1, r2, r3, r4, r5, s1, s2, s3, s4, s5];

const hotel = new Hotel("Jenin", 10, rooms, 3, 5);
hotel.printAdvertisement();
hotel.listBookedRooms();
