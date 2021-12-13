import React from "react"
import NewsListItem from "./news_list_item";

const NewsList = (props) =>{
    const item = props.news.map((item) =>{
        return (
            <div>
                    <NewsListItem key={item.id} finalNews={item}>
                    <h6>Thare the latest News We have Now</h6>
                    </NewsListItem>
            </div>
        )
    });
        return (
            <div>
                <div>
                    {item}
                </div>
            </div>
        )
}

export default NewsList