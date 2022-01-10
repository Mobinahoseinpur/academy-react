import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CoursesList.module.css';
import {range} from 'lodash'

const Pagination = ({totalCource,currentPage,perPage,onPageChange}) => {
    const pageCount = Math.ceil(totalCource/perPage);
    if (pageCount===1) return null;
    const pages =range(1,pageCount+1);
    return (
        <nav aria-label="Page navigation">
            <ul className={`${styles.pagination} justify-content-center`}>
                {pages.map(page =>(
                    <li key={page} className={page === currentPage ? `${styles.page_item} active` : `${styles.page_item}`}>
                    <a
                        className="page-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </a>
                </li>
                ))}
                
            </ul>
        </nav>
    );
};

export default Pagination;
