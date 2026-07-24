import FlightDetails from "./FlightDetails";

function UserPage() {
  return (
    <div>
      <h1>Welcome User</h1>

      <FlightDetails />

      <br />

      <button
        onClick={() => alert("Ticket Booked Successfully!")}
      >
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;