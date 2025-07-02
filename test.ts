const nama = "Bagas";

type Person = {
  name: string;
  age: number;
  city?: string;
  phoneNumber?: string | number;
};

const person: Person = {
  name: "Bagas",
  age: 30,
};

person.city = "Jakarta";
