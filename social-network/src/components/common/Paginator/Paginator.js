import React, {useState} from "react";
import styles from "./Paginator.module.css";


const Paginator = ({currentPage, setCurrentPage, totalUsersCount, pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesPortions = Math.ceil(pagesCount / portionSize);
    let [currentPagesPortion, setCurrentPagesPortion] = useState(1);
    let leftPagesPortionNumber = (currentPagesPortion - 1) * portionSize + 1;
    let rightPagesPortionNumber = currentPagesPortion * portionSize;

    pages = pages.filter(page =>  {
        return page >= leftPagesPortionNumber && page <= rightPagesPortionNumber;
    });


    return (
        <div className={styles.wrapper}>
            <button
                className={`${styles.controlBtns} ${styles.prevBtn}`}
                onClick={() => setCurrentPagesPortion(currentPagesPortion - 1)}
                disabled={currentPagesPortion === 1}>{'<<'}</button>
            {pages.map(page => {
                return (
                        <span
                            className={`${currentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}
                            onClick={(e) => setCurrentPage(page)}>
                            {page}
                        </span>
                )
            })}
            <button
                className={`${styles.controlBtns} ${styles.nextBtn}`}
                onClick={() => setCurrentPagesPortion(currentPagesPortion + 1)}
                disabled={currentPagesPortion === pagesPortions}>{'>>'}</button>
        </div>
    )


}


export default Paginator;


