import ReactPaginate from "react-paginate";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Pagination = (props) => {
  return (
    <div className="pagination_container">
      <ReactPaginate
        previousLabel={<BiChevronsLeft fontSize="20px" />}
        nextLabel={<BiChevronsRight fontSize="20px" />}
        breakLabel="..."
        pageCount={props.pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName="pagination"
        onPageChange={props.onPageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item break"
        breakLinkClassName="page-link"
        ariaLabelBuilder={props.currentPage}
      />
    </div>
  );
};

export default Pagination;
