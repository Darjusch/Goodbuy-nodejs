exports.createProductValidator = (req, res, next) => {
    req.check('name', "Product name is missing").notEmpty()
    req.check('name', "Product name must be between 2 to 50 Characters").isLength({
        min:2, 
        max:50,
    });
    req.check('brand', "Brand name is missing").notEmpty()
    req.check('brand', "Brand name must be between 2 to 50 Characters").isLength({
        min:2, 
        max:50,
    });
    req.check('corporation', "Corporation name is missing").notEmpty()
    req.check('corporation', "Corporation name must be between 2 to 50 Characters").isLength({
        min:2, 
        max:50,
    });
    req.check('barcode', "Barcode is missing").notEmpty()
    req.check('barcode', "Barcode must be between 4 to 18 Characters").isLength({
        min:4, 
        max:18,
    });
    req.check('state', "Product state is missing").notEmpty()
    req.check('state', "Product state must be between 3 and 20 Characters").isLength({
        min:3, 
        max:20,
    });
    // check for errors
    const errors = req.validationErrors();
    // if error occur show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware
    next();
}