import {
    Context, SessionFlavor,
} from 'grammy';


interface CurrentContext extends Context {
}

interface SessionData {
    // Добавьте ваши поля сессий здесь
}

export type MyContext = CurrentContext & SessionFlavor<SessionData>;