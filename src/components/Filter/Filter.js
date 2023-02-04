const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>Fined contacts by name</label>
      <input type="text" value={filter} onChange={onChange} />
    </div>
  );
};
export default Filter;
