import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  number: {
    type: String,
    required: [true, 'Number is required.'],
  },
  roomNumber: {
    type: String,
    required: [true, 'Room number is required!'],
  },
  hostelName: {
    type: String,
    required: [true, 'Hostel name is required!'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;