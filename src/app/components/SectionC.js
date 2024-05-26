const SectionC = (props) => {
  return (
    <section id={props.id || "intro"} className={props.className}>
      <div
        style={{ ...props.style, borderRadius: "0!important" }}
        className={`${props.classNameInner} inner`}>
        {props.children}
      </div>
    </section>
  );
};

export default SectionC;
