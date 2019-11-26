import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Array,
      default: undefined,
      required: true,
    },
    habilities: {
      type: Array,
      default: undefined,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Pokemon', PokemonSchema);
