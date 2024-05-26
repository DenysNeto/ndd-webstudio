const CardWithNumbersC = (props) => {
  // size - large ,  small

  return (
    <div
      className="inner card"
      style={{
        width: "30%",
        borderRadius: "10px",
        display: "flex",
        marginBottom: !props.isLast ? "150px" : 0,
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <div
        className="crad-number-index"
        style={{ width: "50px", height: "50px" }}>
        {props.index}
      </div>
      <h3 style={{ borderBottom: "1px solid white", textAlign: "center" }}>
        {props.content?.title}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}>
        <p style={{ fontSize: "15px" }}> {props.content?.content} </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}></div>
      </div>
      {!props.isLast && (
        <>
          {" "}
          <div
            className="crad-number-index"
            style={{ top: "25px", zIndex: 100 }}></div>
          <div className="crad-number-wire"></div>
        </>
      )}
    </div>
  );
};

export default CardWithNumbersC;
