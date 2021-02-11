const database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

database.then(async db => {
    // Insert data on table
    /* await saveOrphanage(db, {
        lat: "-23.5903528",
        lng: "-46.7212789",
        name: 'Lar dos meninos',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '3549546444',
        images: [
            "https://images.unsplash.com/photo-1562790519-bc8a4a47cd0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 12h até 15h",
        open_on_weekends: "0"
    }) */

    // Search data on table
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)

    // Search an orphanage by id
    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage) */

    // Delete data from database
    /* console.log(await db.run('DELETE FROM orphanages')) */
})