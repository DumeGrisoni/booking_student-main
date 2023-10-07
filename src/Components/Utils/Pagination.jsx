/* eslint-disable react/prop-types */
const Pagination = ({
  totalDatas,
  datasPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex gap-3 p-2">
      {pages.map((page, index) => {
        return (
          <button
            className={
              page == currentPage
                ? "btn_active border-default px-2"
                : "btn border-default px-2"
            }
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
