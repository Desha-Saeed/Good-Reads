const multer = require('multer');

//Configuration for Multer
const multerStorageBook = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/img/books');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `image-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

//Configuration for Multer
const multerStorageAuthor = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/img/author');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `image-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

// Multer Filter for only images
const multerFilter = (req, file, cb) => {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

module.exports = { multerFilter, multerStorageBook, multerStorageAuthor };
