import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <section className="flex flex-col text-center">
      {articles.length == 0 && <p>Loading ... </p>}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <div key={index}>
            <img alt="image" src={article.urlToImage}></img>
          </div>
        ))}
      <div>
        <div className="text-3xl font-bold underline">Mania Futbolera</div>
        <div>Descripción</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-08-24&sortBy=publishedAt&apiKey=1ff602cc716b4e8aa6c2ac3812e0bb93"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
