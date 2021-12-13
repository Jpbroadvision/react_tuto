import React from "react"
import classes from '../css/styles.css'

const NewsListItem = ({ finalNews }) => {
    // make css rules
  
    return (
        <div className={classes.item_bg}>
            {finalNews.children}
            <h3>
                {finalNews.title}
            </h3>
            <p>
                {finalNews.feed}
            </p>
        </div>
    )
}

export default NewsListItem