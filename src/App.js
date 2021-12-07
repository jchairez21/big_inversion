import "./App.css";
import PersonCard from "./components/PersonCard";

const people = [
  { first_name: "Jane", last_name: "Doe", age: 45, hair_color: "Black" },
  { first_name: "John", last_name: "Smith", age: 88, hair_color: "Brown" },
  {
    first_name: "Millard",
    last_name: "Fillmore",
    age: 50,
    hair_color: "Brown",
  },
  { first_name: "Maria", last_name: "Smith", age: 62, hair_color: "Brown" },
];
function App() {
  return (
    <div className="class App">
      {people.map((person) => {
        return (
          <PersonCard
            first_name={person.first_name}
            last_name={person.last_name}
            age={person.age}
            hair_color={person.hair_color}
          />
        );
      })}
    </div>
  );
}

export default App;
