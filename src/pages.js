const database = require("./database/db.js");
const saveOrphanage = require("./database/saveOrphanage.js");

module.exports = {
  index(req, res) {
    const city = req.query.city;
    return res.render("index", { city });
  },

  async orphanages(req, res) {
    try {
      const db = await database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends =
        orphanage.open_on_weekends == "0" ? false : true;

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    // Validate if all field are filled
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos.");
    }

    try {
      // Save an Orphanage
      const db = await database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // Redirect to orphanages' page
      return res.redirect("./orphanages")
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },
};
