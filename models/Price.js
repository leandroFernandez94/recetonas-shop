import mongoose from 'mongoose'

const PriceSchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  specialPrice: {
    type: Number,
    required: false
  },
  quantity: {
    type: String,
    required: false
  },
})

export default mongoose.models.Price || mongoose.model('Price', PriceSchema)