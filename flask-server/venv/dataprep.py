import pandas as pd
from sklearn.model_selection import train_test_split
file_path = "C:\\Users\\DELL\\Desktop\\brief\\flask-server\\venv\\templates\\hiddentest_dialogue.csv"

def load_dataset(file_path):
    return pd.read_csv(file_path)

def preprocess_data(df):
    df = df.rename(columns={'transcript': 'meeting_transcript', 'summary': 'summary'})
    df['meeting_transcript'] = df['meeting_transcript'].str.replace('[^a-zA-Z\s]', '')
    return df

def split_dataset(df, test_size=0.2, random_state=42):
    train_df, val_df = train_test_split(df, test_size=test_size, random_state=random_state)
    return train_df, val_df