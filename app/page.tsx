import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 bg-custom-color">
            <h1 className="text-4xl font-bold p-large">Usage of custom sizing</h1>
          </div>
          <div className="flex flex-col gap-2 bg-custom-color">
          <h1 className="text-4xl font-bold p-4">Usage of custom sizing 2</h1>

          </div>
        </div>
        <h1 className="text-4xl font-bold p-large">Hello World</h1>
      </main>
  
    </div>
  );
}
