import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
{
name:{ type: String, required: true,},
review: {type: Number, required: true,},
comment: {type: String, required: true,},
})

const productSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: Boolean,
            required: true,
          
        },
        description: {
            type: Boolean,
            required: true,
          
        },
        
        review: [reviewSchema],

        ratings: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', userSchema)

export default Product