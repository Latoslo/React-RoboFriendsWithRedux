import "./SearchBox.css";

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="search robofriends"
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox;
