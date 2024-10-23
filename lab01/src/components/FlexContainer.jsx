function FlexContainer({ element, data }) {
  return (
    <div className="d-flex flex-sm-row flex-wrap justify-content-center">
      {data.map((item) => element(item))}
    </div>
  );
}

export default FlexContainer;
