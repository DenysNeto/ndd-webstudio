
import SectionC from "@/app/components/SectionC"
import AccordionC from "@/app/components/AccordionC"
import HeaderC from "@/app/components/HeaderC"


const FAQBlock = (props) => {

  // size - large ,  small

  return (
    <SectionC  style={...props.style}       className={
        props.className
          ? props.className + " " + " wrapper fullscreen fade-up"
          : " wrapper fullscreen fade-up"
      }>
        <HeaderC title="FAQ"></HeaderC>
      <div
    
        className="inner accordion-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "50px",
          justifyContent: "space-between",
          width:"100%"
        }}>
   
            <AccordionC items={props.items} />
        

      </div>
    </SectionC>
  );
};

export default FAQBlock;
