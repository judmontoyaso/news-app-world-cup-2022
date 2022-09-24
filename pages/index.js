import { faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Home({ articles }) {
  const [numberArticles, setNumberArticles] = useState(6);

  const verMas = () => setNumberArticles(numberArticles + 6);

  const articulo = articles.slice(0, numberArticles);

  return (
    <section className="flex flex-col self-center content-center items-center text-center ">
      <div>
        <div>Soccer</div>
      </div>
      {articles.length == 0 && <p>Loading ... </p>}
      {articles.length > 0 &&
        articulo.map((article, index) => (
          <div
            key={index}
            className="w-72 md:w-96 mt-10 mb-10 text-center border-2  border-gray-400 shadow-slate-200  rounded-lg color bg-slate-200 text-slate-700 "
          >
            <img alt="image" src={article.urlToImage}></img>
            <div className="p-4 md:p-8">
              <div>
                <p className="text-lg md:text-3xl font-bold">{article.title}</p>
              </div>
              <div className="text-gray-600 mt-5">
                <p>{article.description}</p>
              </div>
              <div className="mt-6 text-right">
                <a className="font-bold" href={article.url}>
                  Read More <FontAwesomeIcon icon={faSoccerBall} />
                </a>
              </div>
            </div>
          </div>
        ))}
      <div
        className="cursor-pointer font-bold text-gray-800 text-xl"
        onClick={verMas}
      >
        ver más
      </div>
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
