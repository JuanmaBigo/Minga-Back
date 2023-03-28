import mercadopago from 'mercadopago'


const controller = {
    create: (req, res) => {
        // Crea un objeto de preferencia
        let preference = {
            items: [
                {   
                    title: req.body.title,
                    currency_id: "ARS",
                    unit_price: req.body.price,
                    quantity: 1,
                },
            ],
            payer: {
                name: req.user.name
            },
            back_urls: {
                success: "https://minga-red.netlify.app/donate/success",
                failure: "https://minga-red.netlify.app/donate",
                pending: "https://minga-red.netlify.app/donate/success" 
            },
            binary_mode: true,
            auto_return: 'approved'
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => 
            res.status(200).json(response.body.init_point))
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default controller