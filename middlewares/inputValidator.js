const inputValidation =(req,res,next)=>{
    
    req.check('name','Name Field Is Required').notEmpty()
    req.check("description","description  is  required").notEmpty()
    req.check("price","price  is  required").notEmpty()
    req.check("quantity","quantity  is  required").notEmpty()
    
    
    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(error=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next()
}

export default inputValidation