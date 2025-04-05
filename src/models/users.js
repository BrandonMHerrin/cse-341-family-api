import { ObjectId } from "mongodb"
import { usersCol } from "../config/db.js"

export const findAndUpdateUser = async (githubProfile) => {
    return usersCol().findOneAndUpdate(
        { githubId: githubProfile.id},
        {
            $set: {
                name: githubProfile.displayName,
                email: githubProfile.emails[0].value,
                provider: 'github',
                modified: new Date(),
            }
        },
        { upsert: true, returnDocument: "after"}
    );
}

/**
 * 
 * @param {string} id 
 */
export const findUserById = async (id) => {
    return usersCol().findOne({
        _id: new ObjectId(id)
    });
}