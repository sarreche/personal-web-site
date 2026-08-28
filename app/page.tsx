import { HomePage } from "../components/home-page";
import { getPostSummaries } from "../lib/blog";

export default function Home() {
  return <HomePage latestPosts={{ es: getPostSummaries("es", 3), en: getPostSummaries("en", 3) }} />;
}
