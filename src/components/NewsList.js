import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = (props) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // 화면이 처음 그려지고, 서버에 보내는 것을 useEffect 안에 구현하면 됨.
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const query = props.category === "all" ? "all" : `category=${props.category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=290a026202e747268d2e8a3b720957e6`);
        setArticles(response.data.articles);

      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.category]);

  if(loading) {
    // return 안에다가 로딩시 돌아갈 애니메이션 넣으면 됨.
    return <NewsListBlock>로딩 중 ....</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {articles && articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;