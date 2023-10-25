export default function Screen({ screenValue, secondaryScreenValue }) {
  return (
    <div className="screen">
      <h3>{secondaryScreenValue}</h3>
      <h1>{screenValue}</h1>
    </div>
  );
}
