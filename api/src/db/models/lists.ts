import { prop, getModelForClass } from '@typegoose/typegoose';

class Lists {
    @prop({ required: true, unique: true })
    name: string

    @prop({ required: true })
    userId: string

};
const ListsModel = getModelForClass(Lists);
export default ListsModel;