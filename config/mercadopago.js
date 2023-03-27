import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
});