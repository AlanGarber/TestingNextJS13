migrate((db) => {
  const collection = new Collection({
    "id": "4l82pz0de3dz2yz",
    "created": "2023-03-23 03:51:28.567Z",
    "updated": "2023-03-23 03:51:28.567Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pvwkgqmm",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4l82pz0de3dz2yz");

  return dao.deleteCollection(collection);
})
