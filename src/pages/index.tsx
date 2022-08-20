import type { NextPage } from 'next'
import { Header } from "../components/Header";
import { Main } from "../components/Main";

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home
