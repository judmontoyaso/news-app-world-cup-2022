import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <section className="flex flex-col self-center content-center items-center text-center ">
       <div>
        <div >Soccer</div>

      </div>
      {articles.length == 0 && <p>Loading ... </p>}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <div
            key={index}
            className="w-96 mt-10 mb-10 text-center border-gray-900 border-2 "
          >
            <img alt="image" src={article.urlToImage}></img>
            <div>
              <p className="text-3xl font-bold underline">{article.title}</p>
            </div>
            <div>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
     
    </section>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=soccer-world-cup-&from=2022-08-24&sortBy=publishedAt&apiKey=1ff602cc716b4e8aa6c2ac3812e0bb93"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
