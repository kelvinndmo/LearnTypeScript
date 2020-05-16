enum Gender {
  ADMIN,
  READ_ONLY,
  USER,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [2, "ST"];
  gender: Gender;
} = {
  name: "kelvin",
  age: 30,
  hobbies: ["sports", "playing"],
  role: [2, "ST"],
  gender: Gender.ADMIN,
};

let favourites: string[];

favourites = ["kelvin"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
