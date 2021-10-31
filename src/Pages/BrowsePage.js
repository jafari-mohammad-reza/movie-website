import requests from "../api/requests";
import BrowseRow from "../components/BrowseRow";
import SuggestBanner from "../components/SuggestBanner";

export default function BrowsePage() {
  return (
    <main className="w-full  px-16 py-24 overflow-y-scroll h-screen">
      {/* //! movie information  */}
      <SuggestBanner />

      {/* //  categories */}
      <BrowseRow
        key={1}
        title="Netflix Originals"
        categoryUrl={requests.fetchNetflixOriginals}
      />
      <BrowseRow
        key={2}
        title="Netflix Trending's"
        categoryUrl={requests.fetchTrending}
      />
      <BrowseRow
        key={3}
        title="Action Movies"
        categoryUrl={requests.fetchActionMovies}
      />
      <BrowseRow
        key={4}
        title="Comedy Movies"
        categoryUrl={requests.fetchComedyMovies}
      />
      <BrowseRow
        key={5}
        title="Documents"
        categoryUrl={requests.fetchDocumentaries}
      />
      <BrowseRow
        key={6}
        title="Horror Movies"
        categoryUrl={requests.fetchHorrorMovies}
      />
      <BrowseRow
        key={7}
        title="Romance Movies"
        categoryUrl={requests.fetchRomanceMovies}
      />
    </main>
  );
}
