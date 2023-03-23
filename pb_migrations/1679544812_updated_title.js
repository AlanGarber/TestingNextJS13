migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l82pz0de3dz2yz")

  collection.name = "notes"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6uybxquu",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l82pz0de3dz2yz")

  collection.name = "title"

  // remove
  collection.schema.removeField("6uybxquu")

  return dao.saveCollection(collection)
})
