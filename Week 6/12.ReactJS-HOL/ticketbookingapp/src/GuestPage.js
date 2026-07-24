import FlightDetails from "./FlightDetails";

function GuestPage() {
  return (
    <div>
      <h1>Welcome Guest</h1>

      <p>You can view available flights.</p>

      <FlightDetails />
    </div>
  );
}

export default GuestPage;