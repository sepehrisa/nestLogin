import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: 'user' }) // "user" or "admin"
    role: string;

    @Prop({ required: true, unique: true }) // NEW
    username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
