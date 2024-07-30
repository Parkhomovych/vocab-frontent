import { NextRequest, NextResponse } from "next/server";

// Список маршрутів, які не потребують авторизації
const publicRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Отримуємо токен з cookies
  const { pathname } = req.nextUrl;

  // Якщо користувач намагається зайти на публічну сторінку
  if (publicRoutes.includes(pathname)) {
    if (token) {
      // Якщо токен є, перенаправляємо на home
      return NextResponse.redirect(new URL("/home", req.url));
    }
    return NextResponse.next();
  }

  // Якщо користувач намагається зайти на захищену сторінку
  if (!token) {
    // Якщо токена немає, перенаправляємо на сторінку логіну
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Виключити статичні файли та API маршрути, включаючи всі файли в папці public
    "/((?!_next/static|_next/image|favicon.ico|api|public/.*|sprite.svg).*)",
  ],
};
