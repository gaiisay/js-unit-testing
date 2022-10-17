const friends = ["Jessica", "Andrea", "Michael", "Sina"];

function moreGreetings(name) {
  if (typeof name !== "string") {
    throw new Error("Please enter a name as a string");
  }

  if (friends.includes(name)) {
    return "Hello friend!";
  }
  return "Hello there!";
}

export { moreGreetings, friends };
