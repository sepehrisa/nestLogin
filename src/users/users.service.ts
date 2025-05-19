import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    create(data: any) {
        return this.userModel.create(data);
    }

    findAll() {
        return this.userModel.find().select('-password');
    }

    findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    findById(id: string) {
        return this.userModel.findById(id).select('-password');
    }

    update(id: string, data: any) {
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }

    delete(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}
