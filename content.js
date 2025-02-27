chrome.runtime.onMessage.addListener((message) => {
    if (message.text) {
        chrome.storage.sync.get(["volume", "rate", "pitch"], (data) => {
            const speech = new SpeechSynthesisUtterance(message.text);
            speech.lang = "hi-IN"; // Supports Hindi transliteration
            speech.volume = data.volume || 1;
            speech.rate = data.rate || 1;
            speech.pitch = data.pitch || 1;
            window.speechSynthesis.speak(speech);
        });
    }
});
