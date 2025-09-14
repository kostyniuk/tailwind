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
          <div className="min-h-screen bg-green-100">
          <p className="p-large">Lots of content ... only this box scrolls ...</p>
          <p className="p-extra-large">The rest of the page stays fixed</p>
          </div>
          <div className="h-screen overflow-y-auto bg-blue-100">
            <p className="p-large">Lots of content ... only this box scrolls ...</p>
            <p className="p-extra-large">The rest of the page stays fixed</p>
          </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold p-large">Hello World</h1>
      </main>
  
    </div>
  );
}
