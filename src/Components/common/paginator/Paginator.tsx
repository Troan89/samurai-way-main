import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"


type Paginator_T = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Paginator = ({pageSize, onPageChanged, currentPage, totalItemsCount, portionSize = 10}: Paginator_T) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, serPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={()=>serPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.
                filter(page=> page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => <span
                className={cn({[styles.selectedPage]: currentPage === page}, styles.pageNumber)}
                onClick={() => onPageChanged(page)}> {page} </span>)}
        {portionCount > portionNumber && <button onClick={()=>serPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
}