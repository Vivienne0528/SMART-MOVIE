import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActionMovie from "@/components/ActionMovie";

export async function getServerSideProps() {
  const res = await fetch("https://api.wujinapi.me/api.php/provide/vod/");
  const data = await res.json();

  const actionRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=6",
  );
  const actionData = await actionRes.json();
  const comedyRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=7",
  );
  const comedyData = await comedyRes.json();
  // return { props: { classData: data.class, actionData, comedyData } };
  return { props: { data, actionData, comedyData } };
}

export default function Home({ data, actionData, comedyData }) {
  return (
    <section className="w-full px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
      <Navbar />
      <ActionMovie
        data={data}
        actionData={actionData}
        comedyData={comedyData}
      />
      <Footer />
    </section>
  );
}
