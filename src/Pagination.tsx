import classNames from "classnames";
import React, { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Pagination as PaginationHeadless } from "react-headless-pagination";

export interface PaginationProps {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
  isMobile: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  isMobile,
  totalPage,
  setPage,
}) => {
  if (isMobile) {
    return (
      <div className="flex items-center w-full">
        <FiArrowLeft
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          })}
          size={20}
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white">
          Page {page + 1} out of {totalPage}
        </div>
        <FiArrowRight
          className={classNames("ml-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== totalPage - 1,
            "opacity-50": page === totalPage - 1,
          })}
          size={20}
          onClick={() => {
            if (page < totalPage - 1) {
              setPage(page + 1);
            }
          }}
        />
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <PaginationHeadless
      currentPage={page}
      setCurrentPage={handlePageChange}
      totalPages={10}
      edgePageCount={2}
      middlePagesSiblingCount={2}
      className="flex items-center w-full h-10 text-sm select-none"
      truncableText="..."
      truncableClassName="w-10 px-0.5 text-center"
    >
      <PaginationHeadless.PrevButton
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          },
        )}
      >
        Previous
      </PaginationHeadless.PrevButton>

      <div className="flex items-center justify-center flex-grow">
        <PaginationHeadless.PageButton
          activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white"
          inactiveClassName="text-gray-500"
          className="flex items-center justify-center w-10 h-10 font-medium rounded-full cursor-pointer"
        />
      </div>

      <PaginationHeadless.NextButton
        className={classNames(
          "flex items-center h-10 mr-2 font-medium text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== totalPage - 1,
            "opacity-50": page === totalPage - 1,
          },
        )}
      >
        Next
      </PaginationHeadless.NextButton>
    </PaginationHeadless>
  );
};
