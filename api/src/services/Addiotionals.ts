import lyricsFinder from 'lyrics-finder';

/* Models */
import UserModel  from '../db/models/user';
export default class AdditionalsServices {
  userModel
  constructor(
    userModel = UserModel
  ) {
    this.userModel = userModel
  }
  public async getLyrics(user, data): Promise<any> {
    try {
        const userData = await this.userModel.findOne({ id: user.id })
        if(userData){
            const lyric = (await lyricsFinder(data.artist, data.track)) || { message: 'No lyrics found' };
            return lyric;
        } else {
          return {
            email: "",
            id: "",
            access: "Denied"
          }
        }
    } catch (err) { 
      console.error(err)
    }
  };
};
