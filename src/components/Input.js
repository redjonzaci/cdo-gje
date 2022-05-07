export default function Input({ id, label, type }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type || 'text'} />
    </>
  );
}
