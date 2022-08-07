import { prop, getModelForClass } from '@typegoose/typegoose';

class Track {

    @prop({ required: true })
    userId: string

    @prop({ required: true })
    listId: string

    @prop()
    tracks: string[]
    
    @prop()
    items: string[]
};
const TrackModel = getModelForClass(Track);
export default TrackModel;