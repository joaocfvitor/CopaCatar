import { Icon, Card, DateSelect } from "~/components";

export function Dashboard() {
  return (
    <div className="space-y-10">
      <header>
        <div className="bg-red-500">
          <div className="container max-w-3xl">
            <div className="flex flex-row justify-between items-center bg-red-500 p-5 text-white">
              <img src="/img/logoVinho.svg" alt="" className="w-28 md:w-40" />
              <a href="/profile">
                <Icon className="w-10" name="profile"></Icon>
              </a>
            </div>

            <div className="text-white pt-3 pl-3 pb-1">
              <span>Olá João</span>
            </div>

            <div className="flex items-center pb-3 pl-3">
              <h1 className="text-sm md:text-xl text-white font-bold">
                Qual é o seu palpite ?
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-3">
        
        <DateSelect />

        <div>
          <Card
            timeA={{ slug: "sui" }}
            timeB={{ slug: "bra" }}
            match={{ time: "07:00" }}
          />

          <Card
            timeA={{ slug: "din" }}
            timeB={{ slug: "fra" }}
            match={{ time: "17:00" }}
          />

          <Card
            timeA={{ slug: "cro" }}
            timeB={{ slug: "aus" }}
            match={{ time: "20:00" }}
          />
        </div>
      </main>
    </div>
  );
}
