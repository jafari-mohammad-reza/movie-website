import { Suspense, lazy } from 'react'
import requests from '../api/requests'
import LoadingComponent from '../components/LoadingComponent'

export default function BrowsePage() {
  const BrowseRow = lazy(() => import('../components/BrowsePage/BrowseRow'))
  const SuggestBanner = lazy(() =>
    import('../components/BrowsePage/SuggestBanner'),
  )
  return (
    <main className="w-full  px-16 pb-28 pt-20 overflow-y-scroll h-screen">
      {/* //! movie information  */}
      <Suspense fallback={LoadingComponent}>
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
      </Suspense>
    </main>
  )
}
