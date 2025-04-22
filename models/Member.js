import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  memberId: { type: String, required: true, unique: true },
  cars: {
    type: [String],  // <- Simple array of strings
    validate: {
      validator: function (val) {
        return val.length <= 4;
      },
      message: 'Parking limit exceeded', // Custom error message
    },
  },
});

export default mongoose.model('Member', memberSchema);
