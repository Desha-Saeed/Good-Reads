class Features {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    //copy query obj
    const queryObj = { ...this.queryString };

    //exclude special names from query
    const exculdedFields = ['page', 'limit', 'fields'];

    //delete exculded fields from query obj
    exculdedFields.forEach((el) => delete queryObj[el]);

    // Build query
    this.query.find(queryObj);

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryStringfields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 5;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = Features;
