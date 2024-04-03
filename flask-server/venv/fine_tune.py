import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer, Trainer, TrainingArguments
from dataprep import load_dataset, preprocess_data, split_dataset

def preprocess_data(df):
    # Rename columns if needed
    df = df.rename(columns={'dialogue': 'meeting_transcript', 'summary': 'summary'})
    # Apply any other preprocessing steps as needed
    df['meeting_transcript'] = df['meeting_transcript'].str.replace('[^a-zA-Z\s]', '')
    return df

# Load pre-trained T5 model and tokenizer
model = T5ForConditionalGeneration.from_pretrained("t5-small")
tokenizer = T5Tokenizer.from_pretrained("t5-small")

# Load and preprocess dataset
file_path = "C:\\Users\\DELL\\Desktop\\brief\\flask-server\\venv\\templates\\train.csv"
dataset = load_dataset(file_path)
dataset = preprocess_data(dataset)
train_df, val_df = split_dataset(dataset)

# Tokenize and format your dataset
train_encodings = tokenizer(["summarize: " + text for text in train_df['meeting_transcript']], return_tensors="pt", padding=True, truncation=True)
train_labels = tokenizer(list(train_df['summary']), return_tensors="pt", padding=True, truncation=True)['input_ids']

val_encodings = tokenizer(["summarize: " + text for text in val_df['meeting_transcript']], return_tensors="pt", padding=True, truncation=True)
val_labels = tokenizer(list(val_df['summary']), return_tensors="pt", padding=True, truncation=True)['input_ids']

class MyDataset(torch.utils.data.Dataset):
    def _init_(self, encodings, labels):
        self.encodings = encodings
        self.labels = labels

    def _getitem_(self, idx):
        item = {key: torch.tensor(val[idx]) for key, val in self.encodings.items()}
        item['labels'] = self.labels[idx]
        return item

    def _len_(self):
        return len(self.labels)

train_dataset = MyDataset(train_encodings, train_labels)
val_dataset = MyDataset(val_encodings, val_labels) 

# Define training arguments
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,
    logging_dir='./logs',
    logging_steps=100,
    evaluation_strategy='steps',
    eval_steps=500,
    save_steps=500,
    warmup_steps=500,
    weight_decay=0.01,
    learning_rate=5e-5 
)
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=val_dataset
)

trainer.train()

model.save_pretrained("fine_tuned_t5_model")