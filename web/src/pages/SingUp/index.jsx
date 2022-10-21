//Impots

import { Icon, Input } from "~/components";

// Fuções para facilitar

// Código HTML e CSS

export function SingUp() {
  return (
    <div>
      <div className="flex justify-center border-b border-red-300">
        <img src="/img/logo.svg" alt="" className="w-60 p-4" />
      </div>

      <div className="container max-w-xl">
        <div className="flex row items-center p-5 pb-0">
          <div>
            <a href="/">
              <Icon name="back" className="h-6" />{" "}
            </a>
          </div>
          <div className="text-xl font-bold p-8">
            <p>Crie sua conta</p>
          </div>
        </div>

        <form>
          <Input
            Type="text"
            name="nome"
            label="Seu nome"
            placeholder="Digite seu nome"
          />

          <Input
            Type="text"
            name="user"
            label="Seu usuário"
            placeholder="Digite seu nome de usuário"
          />

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
          <a href="/dashboard" className="block text-center text-white bg-red-500 border border-white p-3 w-full rounded-xl">
            Criar minha conta
          </a>
        </div>
      </div>
    </div>
  );
}
