// Start server

const StartServer = (server) => {
    console.info('SETUP - Starting server..')

    server.listen(8000, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${8000} [DEV]`)
        }
    })
}

export default StartServer