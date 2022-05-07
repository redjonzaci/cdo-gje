export default function Input({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type || 'text'} />
    </>
  );
}
