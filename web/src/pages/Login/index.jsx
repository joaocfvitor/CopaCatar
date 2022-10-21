//Impots

import { Icon, Input } from "~/components";

// Código HTML e CSS

export function Login() {
  return (
    <div>
      <div className="flex justify-center border-b border-red-300">
        <img src="/img/logo.svg" alt="" className="w-60 p-4" />
      </div>

      <div className="container max-w-xl">
        <div className="flex items-center p-5 pb-0">
          <div>
            <a href="/">
              <Icon name="back" className="h-6" />{" "}
            </a>
          </div>
          <div className="text-xl font-bold p-8">
            <p>Entrar na sua conta</p>
          </div>
        </div>

        <form>
          
          <Input
            Type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
          />

          <Input
            Type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          />
        </form>

        <div className="p-5">
          <a href="/dashboard" className=" block text-center text-white bg-red-500 border border-white p-3 w-full rounded-xl">
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
}
