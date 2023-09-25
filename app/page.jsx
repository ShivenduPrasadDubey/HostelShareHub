import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Request and Share{" "}
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Utilities with hostellers</span>
    </h1>
    <p className='desc text-center'>
      HostelShareHub is a tool for requesting and sharing utilities with your fellow hostellers.
    </p>

    <Feed />
  </section>
);

export default Home;