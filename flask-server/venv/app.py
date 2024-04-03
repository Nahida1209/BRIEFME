from flask import Flask, request, jsonify
import os
import speech_recognition as sr
from transformers import T5ForConditionalGeneration, T5Tokenizer
app = Flask(__name__)
model = T5ForConditionalGeneration.from_pretrained("t5-small")
tokenizer = T5Tokenizer.from_pretrained("t5-small")
def summarize_text_abstractive(text, max_length=150, min_length=40, length_penalty=2.0, num_beams=4):
    # Tokenize the input text
    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=512, truncation=True)

    # Generate the summary with specified parameters
    summary_ids = model.generate(inputs, 
                                  max_length=max_length, 
                                  min_length=min_length, 
                                  length_penalty=length_penalty, 
                                  num_beams=num_beams, 
                                  early_stopping=True)
    
    # Decode the summary and return
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary
def generator(data_split):
    for instance in data_split:
        yield instance['id'], instance['summary'], instance['transcript']

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    audio_file = request.files['file']
    if audio_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the audio file
    audio_path = 'uploaded_files/' + audio_file.filename
    audio_file.save(audio_path)

    # Perform speech recognition
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio_data = recognizer.record(source)

    try:
        text = recognizer.recognize_google(audio_data)
        # Do something with the recognized text
        print("Recognized text:", text)
        
        # Summarize the recognized text
     # Experiment with different settings
        summary_1 = summarize_text_abstractive(text, max_length=100, min_length=20, length_penalty=2.0, num_beams=2)
        

        print("Summary 1:", summary_1)
        
        return jsonify({'summary': summary_1}), 200
    except sr.UnknownValueError:
        return jsonify({'error': 'Speech recognition could not understand audio'}), 500
    except sr.RequestError as e:
        return jsonify({'error': f"Could not request results from Google Speech Recognition service; {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True)