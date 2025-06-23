"use client";

const ListC = (props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      className="inner padding-all-inner">
      {props.items.map((item, index) => (
        <div
          index={index}
          className="sidebar-item inner padding-all-inner margin-all-inner">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ListC;
