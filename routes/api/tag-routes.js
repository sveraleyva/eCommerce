const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const data = await Tag.findAll({
    // grab the product values through the productTag table
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  });
  return res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const data = await Tag.findAll({
    where: { id: req.params.id },
    include: [Product],
  });
  return res.status(200).json(data);
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const data = await Tag.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json(data);
});

module.exports = router;
