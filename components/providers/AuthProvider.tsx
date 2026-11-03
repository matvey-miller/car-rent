"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

//useSession работает через ReactContext и если не будет провайдара где-то выше, то он просто выдаст ошибку
//для этого нам и нужен этот файл
export default function AuthProvider({children} : {children : ReactNode}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}