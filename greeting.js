function greeting(name) {
  if (typeof name !== "string") {
    throw new Error("Please enter a name as a string");
  }

  if (name === "Jessica" || name === "Andrea") {
    return "Hello friend!";
  }
  return "Hello there!";
}

export { greeting };
