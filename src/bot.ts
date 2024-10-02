require( "dotenv" ).config();
import { Bot, Context, session } from "grammy";
import { run, sequentialize } from "@grammyjs/runner";
import { MyContext } from "./types";
import { commands } from "./handlers/commands";

const BOT_TOKEN = process.env.BOT_TOKEN ?? "";

const bot = new Bot<MyContext>( BOT_TOKEN );

function getSessionKey ( ctx: MyContext | Context ) {
    return ctx.chat?.id.toString();
}

// Sequentialize before accessing session data!
bot.use( sequentialize( getSessionKey ) );
bot.use( session( { initial: () => ( {} ) } ) );

//handlers
bot.use( commands );

// DON'T WORK because we has Composer for commands
bot.command( 'start', ( ctx ) => {
    ctx.reply( "Привет! Я твой бот." );
} );

// Listen for text messages and reply with the same text
bot.on( 'message:text', ( ctx ) => {
    ctx.reply( `Ваше сообщение: ${ctx.message.text}` );
} );

run( bot );