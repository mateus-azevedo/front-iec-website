import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* Cria o botao collapse para tela menores aqui */}
      <div>
        <ul>
          <li>
            <Link href="#">Cultos</Link>
          </li>
          <li>
            <Link href="#">Corpo ministerial</Link>
          </li>
          <li>
            <Link href="#">Quem somos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
