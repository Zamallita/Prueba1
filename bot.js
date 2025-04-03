import furryWrapper from "furry-wrapper"; // Usamos la importación por defecto
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    // Agrega otros intents si es necesario
  ],
});

client.once("ready", () => {
  console.log(`¡${client.user.tag} ha iniciado sesión!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const prefix = "!";

  // Comando para el abrazo
  if (message.content.toLowerCase().startsWith(prefix + "abrazo")) {
    const args = message.content.slice(prefix.length + "abrazo".length).trim(); // Obtener el destinatario
    const usuarioDestino = args || message.author.username; // Si no hay destinatario, el bot se abraza a sí mismo
    try {
      const imageUrl = await obtenerImagenFurry("hug");
      message.channel.send({
        content: `${message.author.username} le ha dado un abrazo a ${usuarioDestino}! 🤗`,
        files: [imageUrl],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el abrazo. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando FurHelp para mostrar todos los comandos disponibles
  // Comando FurHelp
  if (message.content.toLowerCase() === prefix + "furhelp") {
    const comandos = `
      **Comandos disponibles:**
      !abrazo [@usuario] - Envía un abrazo a alguien.
      !boop - Imagen de un boop.
      !cuddle - Imagen de un abrazo.
      !flop - Imagen de un flop.
      !fursuit - Imagen de un fursuit.
      !hold - Imagen de un hold.
      !howl - Imagen de un howl.
      !kiss [@usuario] - Imagen de un beso a alguien.
      !lick [@usuario] - Imagen de un lamido a alguien.
      !propose [@usuario] - Imagen de una propuesta a alguien.
      !bulge - Imagen de un bulge.
    `;
    message.channel.send(comandos);
  }
  // Comando boop
  if (message.content.toLowerCase().startsWith(prefix + "boop")) {
    try {
      const imageUrl = await obtenerImagenFurry("boop");
      message.channel.send({
        content: `${message.author.username} ha dado un boop! 👃`,
        files: [{ attachment: imageUrl }], // Usamos un objeto de archivo con 'attachment'
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el boop. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando cuddle
  if (message.content.toLowerCase().startsWith(prefix + "cuddle")) {
    try {
      const imageUrl = await obtenerImagenFurry("cuddle");
      message.channel.send({
        content: `${message.author.username} está teniendo una sesión de mimos! 💕`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener la imagen de mimos. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando flop
  if (message.content.toLowerCase().startsWith(prefix + "flop")) {
    try {
      const imageUrl = await obtenerImagenFurry("flop");
      message.channel.send({
        content: `${message.author.username} ha dado un flop! 💫`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el flop. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando fursuit
  if (message.content.toLowerCase().startsWith(prefix + "fursuit")) {
    try {
      const imageUrl = await obtenerImagenFurry("fursuit");
      message.channel.send({
        content: `${message.author.username} ha mostrado un fursuit 🦊`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener la imagen del fursuit. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  if (message.content.toLowerCase().startsWith(prefix + "hold")) {
      const args = message.content.slice(prefix.length + "hold".length).trim();
      let usuarioDestino = args || `<@${message.author.id}>`; // Si no hay argumento, usa la mención del autor

      // Si el usuario mencionó a alguien, usar la mención en lugar del texto plano
      if (message.mentions.users.size > 0) {
          const usuarioMencionado = message.mentions.users.first();
          usuarioDestino = `<@${usuarioMencionado.id}>`; // Usa la mención correcta con el @
      }

      try {
          const imageUrl = await obtenerImagenFurry("hold");
          message.channel.send({
              content: `${message.author} está sosteniendo a ${usuarioDestino}! 🤗`,
              files: [{ attachment: imageUrl }],
          });
      } catch (error) {
          console.error("Error al obtener la imagen:", error);
          message.channel.send(
              "Hubo un problema al obtener el hold. Intenta de nuevo más tarde. 🐾",
          );
      }
  }


  if (message.content.toLowerCase().startsWith(prefix + "howl")) {
    try {
      const imageUrl = await obtenerImagenFurry("howl");
      message.channel.send({
        content: `${message.author.username} ha auyado al cielo 🦊`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener la imagen del howl. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando abrazo
  if (message.content.toLowerCase().startsWith(prefix + "abrazo")) {
    const args = message.content.slice(prefix.length + "abrazo".length).trim();
    const usuarioDestino = args || message.author.username;
    try {
      const imageUrl = await obtenerImagenFurry("hug");
      message.channel.send({
        content: `${message.author.username} le ha dado un abrazo a ${usuarioDestino}! 🤗`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el abrazo. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando kiss
  if (message.content.toLowerCase().startsWith(prefix + "kiss")) {
    const args = message.content.slice(prefix.length + "kiss".length).trim();
    const usuarioDestino = args || message.author.username;
    try {
      const imageUrl = await obtenerImagenFurry("kiss");
      message.channel.send({
        content: `${message.author.username} le ha dado un beso a ${usuarioDestino}! 😘`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el beso. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando lick
  if (message.content.toLowerCase().startsWith(prefix + "lick")) {
    const args = message.content.slice(prefix.length + "lick".length).trim();
    const usuarioDestino = args || message.author.username;
    try {
      const imageUrl = await obtenerImagenFurry("lick");
      message.channel.send({
        content: `${message.author.username} le ha dado un lamido a ${usuarioDestino}! 😋`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener el lamido. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando propose
  if (message.content.toLowerCase().startsWith(prefix + "propose")) {
    const args = message.content.slice(prefix.length + "propose".length).trim();
    const usuarioDestino = args || message.author.username;
    try {
      const imageUrl = await obtenerImagenFurry("propose");
      message.channel.send({
        content: `${message.author.username} le ha propuesto matrimonio a ${usuarioDestino}! 💍`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener la propuesta. Intenta de nuevo más tarde. 🐾",
      );
    }
  }

  // Comando bulge
  if (message.content.toLowerCase().startsWith(prefix + "bulge")) {
    try {
      const imageUrl = await obtenerImagenFurry("bulge");
      message.channel.send({
        content: `${message.author.username} ha mostrado un bulge! 🔥`,
        files: [{ attachment: imageUrl }],
      });
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      message.channel.send(
        "Hubo un problema al obtener la imagen del bulge. Intenta de nuevo más tarde. 🐾",
      );
    }
  }
});

// Función para obtener imagen usando furry-wrapper
// Función para obtener imagen usando furry-wrapper
async function obtenerImagenFurry(tipo) {
  try {
    // Hacemos la petición para obtener la imagen según el tipo
    let response;
    switch (tipo) {
      case "hug":
        response = await furryWrapper.FurryBot.furry.hug();
        break;
      case "boop":
        response = await furryWrapper.FurryBot.furry.boop();
        break;
      case "cuddle":
        response = await furryWrapper.FurryBot.furry.cuddle();
        break;
      case "flop":
        response = await furryWrapper.FurryBot.furry.flop();
        break;
      case "kiss":
        response = await furryWrapper.FurryBot.furry.kiss();
        break;
      case "howl":
        response = await furryWrapper.FurryBot.furry.howl();
        break;
      case "fursuit":
        response = await furryWrapper.FurryBot.furry.fursuit();
        break;
      case "hold":
        response = await furryWrapper.FurryBot.furry.hold();
        break;
      case "lick":
        response = await furryWrapper.FurryBot.furry.lick();
        break;
      case "propose":
        response = await furryWrapper.FurryBot.furry.propose();
        break;
      case "bulge":
        response = await furryWrapper.FurryBot.furry.bulge();
        break;
      default:
        throw new Error("Tipo de imagen no reconocido");
    }

    // Verificar si 'response' tiene la URL correcta
    if (response && response.url) {
      return response.url;
    } else {
      throw new Error("No se pudo obtener una URL válida para la imagen.");
    }
  } catch (error) {
    console.error("Error al obtener la imagen furry:", error);
    return "https://preview.redd.it/2q7rm1bz77s51.png?width=1080&crop=smart&auto=webp&s=6f017183cba9962a23c6853d78485aab7bb83058"; // Imagen por defecto
  }
}

client.login(process.env.DISCORD_TOKEN);
