import Author from "../../models/Author.js"

const controller = {

    read_all: async (req, res, next) => {
      try {
        let author = await Author.find()
          if( author ){
            return res
            .status(200)
            .json({
              success: true,
              author
            })
          }
        } catch (error) {
        next(error)
        }
      }

}

export default controller