const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Cotton',
  },
  {
    tag_name: 'Denim',
  },
  {
    tag_name: 'Leather',
  },
  {
    tag_name: 'Tan',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'Yellow',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
