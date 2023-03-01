const controller = {

    read_all: (req, res) => {
        return res
          .status(200)
          .send('pagina de usuarios');
      }

}

export default controller