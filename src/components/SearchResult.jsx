export const SearchResult = ({ result, src, onClick }) => {
  return (
    <>
      <div className="searchresult" onClick={onClick}>
        <p>{result}</p>
        <img src={src} alt="not found" />
      </div>
    </>
  );
};
