const controller = {

    read_all: (req, res) => {
        return res
          .status(200)
          .json({
            success:true,
            message:'Users page',
            data:req.body
          });
      }

}

export default controller