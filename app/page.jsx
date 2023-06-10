import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text">Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem consectetur tempora consequatur ipsa debitis fugiat impedit doloribus nemo quam.</p>
      <Feed />
    </section>
  )
}
export default Home