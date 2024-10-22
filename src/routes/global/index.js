
const globalRoutes = (app)=>{
    app.get('/', (req, res) => {
        res.send('Bistro Boss Restaurant Apps !')
    })

    app.all('*', (req, res, next) => {
        const error = new Error(`Could not found ${req.url}`);
        error.status = 404;
        next(error);
    })

    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({
            message: err.message,
            error: req.app.get('env') === 'development'? err : {
                message: err.message
            }
        })
        next();
     
    })

}

module.exports = globalRoutes;
