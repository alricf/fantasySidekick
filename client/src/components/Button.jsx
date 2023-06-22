export default function Button({ onClick, buttonText }) {
  return (
    <>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
}