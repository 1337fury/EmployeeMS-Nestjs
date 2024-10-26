import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: true })
export class Employee {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true })
  position: string;

  @Prop({ type: String, required: true })
  department: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: ['admin', 'manager', 'employee'], default: 'employee' })
  role: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
