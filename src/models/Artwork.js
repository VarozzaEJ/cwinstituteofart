

export class Artwork {
    constructor(data) {
        this.id = data.id
        this.height = data.height
        this.width = data.width
        this.originalLink = data.originalLink
        this.imgUrl = data.imgUrls
        this.description = data.description
        this.color = data.color
        this.admirers = data.admirers
    }
}

// slug: String,
//     height: Number,
//         width: Number,
//             originalLink: String,
//                 imgUrls: undefined,
//                     description: String,
//                         altDescription: String,
//                             attribution: String,
//                                 color: String,
//                                     admirers: undefined, 
// * createdAt: ISO Timestamp(Virtual Added by Database)
//     * updatedAt: ISO Timestamp(Virtual Added by Database)