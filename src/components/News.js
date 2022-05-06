import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category} - NewsMonkey`;
    const getNews = async () => {
      props.setProgress(50);
      setLoading("true");
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setArticles(result.articles);
          setTotalResults(result.totalResults);
          setLoading(false);
        })
        .catch((error) => console.log(error));
      props.setProgress(100);
    };
    getNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setArticles(articles.concat(result.articles));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container my-3 text-center">
      <h2 style={{ marginTop: "90px" }}>
        NewsMonkey - Top {props.category} Headlines
      </h2>
      {loading && (
        <img
          src="https://i.gifer.com/VAyR.gif"
          alt="loading"
          style={{ width: "3%", margin: "3rem" }}
        />
      )}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <img
            src="https://i.gifer.com/VAyR.gif"
            alt="loading"
            style={{ width: "3%" }}
          />
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
