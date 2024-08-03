import { useFetch } from "./hooks";

export default function Stories() {
  const { id, by, time, title, url } = useFetch(
    "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty",
    {}
  );

  return (
    <div className="Stories">
      <h3>Stories</h3>
      <div key={id}>
        <a href={url}>{title}</a>
        <div>
          {by} - {new Date(time * 1000).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
