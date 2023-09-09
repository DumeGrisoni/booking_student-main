// eslint-disable-next-line react/prop-types
const Text = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-start items-center lg:items-start text-default text-primary-var-1 gap-5 lg:gap-10 ">
      {title ? <div className="text-headline text-primary">{title}</div> : ""}

      <div className="flexbox-col-start px-5 gap-3 lg:gap-7">{children}</div>
    </div>
  );
};

export default Text;
