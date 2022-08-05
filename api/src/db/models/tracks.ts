import { prop, getModelForClass } from '@typegoose/typegoose';

class Track {

    @prop({ required: true })
    userId: string

    @prop()
    tracks: []
};
const TrackModel = getModelForClass(Track);
export default TrackModel;