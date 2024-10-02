import { Composer } from "grammy";

export const commands = new Composer();

commands.command( "start", ( ctx ) => {
    ctx.reply( "Привет! Я работаю через Composer" );
} );