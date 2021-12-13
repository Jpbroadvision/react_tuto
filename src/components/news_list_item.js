import React from "react"
const NewsListItem = ({ finalNews }) => {
    // make css rules
  
    return (
        <div>
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