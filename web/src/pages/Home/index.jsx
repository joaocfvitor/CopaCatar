export function Home() {
  return (
    <div className="m-h-screen md:h-screen bg-red-700 text-white flex flex-col items-center">

      <div>
      <img src="/img/logoWhite.svg" alt="" className="w-60 p-6" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 items-center container">
        
        <div className="md-flex-1 felx justify-center max-w-5xl">
          <img src="/img/photo.png" alt="" className="w-full max-w-sm" />
        </div>

        <div className="flex flex-col space-y-6 md:flex-1 max-w-5xl">
          <h1 className="text-3xl text-center md: md:text-left font-bold">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>
          
          <a href="/singup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer login
          </a>

        </div>
      </div>
    </div>
  );
}
