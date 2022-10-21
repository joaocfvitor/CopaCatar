import { Icon, Card, DateSelect } from "~/components";

export function Profile() {
  return (
    <div className="space-y-5">
      <header>
        <div className="bg-red-500">
          <div className="container max-w-3xl">
            <div className="flex flex-row justify-between items-center bg-red-500 p-5 text-white">
              <img src="/img/logoVinho.svg" alt="" className="w-28 md:w-40" />
              <a href="/dashboard">
                <Icon className="w-10" name="back"></Icon>
              </a>
            </div>

            <div className="flex items-center pb-3 pl-3">
              <h1 className="text-sm md:text-xl text-white font-bold">
                João Vitor Fernandes
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-3">
        <div className="container flex items-center max-w-xl">
          <h1 className="font-bold text-red-500 text-xl pb-5 pl-5">
            Seus Palpites
          </h1>
        </div>

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
