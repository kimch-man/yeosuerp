import Image from "next/image";

const Home = () => {
  const data_fetching = async() => {

    const result = await fetch('https://raw.githubusercontent.com/kimch-man/yeosuerp/refs/heads/main/data/data.csv')
    const data = await result.json()

    console.log(data)
  }
  
  data_fetching()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
    </div>
  );
}

export default Home