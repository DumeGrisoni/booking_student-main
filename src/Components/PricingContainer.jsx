/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PricingContainer = ({
  title,
  children,
  price,
  secondPrice,
  hour,
  secondHour,
}) => {
  return (
    <div className="w-[300px] h-auto lg:min-h-[1350px] flexbox-col border-default shadow-default">
      {/* TITLE SECTION */}
      <div className="mx-auto w-full text-center flexbox-row min-h-[125px] bg-primary text-secondary-var-1 text-title">
        <h1>{title}</h1>
      </div>
      {/* TEXT SECTION */}
      <div className=" flex-1 p-5 flexbox-row-start w-full text-primary mt-8 text-start text-default">
        {children}
      </div>
      {/* PRICE SECTION */}
      {!secondPrice ? (
        <div className=" font-bold flexbox-row p-10 lg:p-0 lg:h-[200px] border-t text-default border-grey-font w-full text-title bg-primary-var-1 text-secondary-var-1">
          <div className="flex flexbox-col gap-10">
            {hour ? <span className="font-bold">{hour}</span> : ""}
            {price}
          </div>
        </div>
      ) : (
        <div className="font-bold flexbox-row p-10 lg-p-0 lg:h-[200px] border-t text-default gap-7 border-grey-font w-full text-title bg-primary-var-1 text-secondary-var-1 ">
          <div className="flexbox-col gap-7 text-center">
            <span>{hour}</span>
            <span>{price}</span>
          </div>
          <hr className="bg-secondary h-[100px] w-[1px]" />
          <div className="flexbox-col gap-7 text-center">
            <span>{secondHour}</span>
            <span>{secondPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingContainer;
