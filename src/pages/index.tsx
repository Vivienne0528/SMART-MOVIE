import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MovieDetails from '@/components/MovieDetails'
import Footer from '@/components/Footer'
import ActionMovie from '@/components/ActionMovie'
import VideoPlayer from '@/components/VideoPlayer'

export async function getServerSideProps(url: string) {
  // Fetch data from external API
  const classRes = await fetch("https://api.wujinapi.me/api.php/provide/vod/")
  const classData = await classRes.json()
  const moviesRes = await fetch("https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=6")
  const moviesData = await moviesRes.json()
  const detailsRes = await fetch("  https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=6&ids=134688")
  const detailsData = await detailsRes.json()

  // Pass data to the page via props
  return { props: { classData, moviesData, detailsData } }
}

export default function Home({ classData, moviesData, detailsData }) {
  return (
    <section className="w-full px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
      <Navbar />
      <Hero />
      <MovieDetails detailsData={detailsData} />
      <VideoPlayer detailsData={detailsData} />
      <ActionMovie classData={classData} moviesData={moviesData} />
      <Footer />

    </section>
  );
}

