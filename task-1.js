const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user["modd"] = "hapy";
user["modd"] = "skydiving";
user["premium"] = "false";
const entries = Object.entries(user);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}
