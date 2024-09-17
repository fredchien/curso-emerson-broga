
export default function Home() {
  return (
    <div className="ml-72">
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Algo chamativo</p>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-indigo-500">
a
          </div>
          <div className="flex-center bg-purple-500">
b
          </div>
          <div className="flex-center bg-blue-500">
c
          </div>
          <div className="flex-center bg-emerald-500">
d
          </div>
        </div>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-4">
            <div className="flex gap-4 bg-emerald-500 rounded-md">
              <div>
                <img src="https://placehold.co/600x400" alt="Imagem escription" className="w-auto h-[200px]"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">Algum descricao</p>
                <button>Ler mais</button>
              </div>
            </div>
            <div className="flex gap-4 bg-emerald-500 rounded-md">
              <div>
                <img src="https://placehold.co/600x400" alt="Imagem escription" className="w-auto h-[200px]"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">Algum descricao</p>
                <button>Ler mais</button>
              </div>
            </div>
            <div className="flex gap-4 bg-emerald-500 rounded-md">
              <div>
                <img src="https://placehold.co/600x400" alt="Imagem escription" className="w-auto h-[200px]"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">Algum descricao</p>
                <button>Ler mais</button>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-purple-500">b</div>
        </div>
      </div>
    </div>
  );
}
