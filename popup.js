document.addEventListener("DOMContentLoaded", () => {
    const volume = document.getElementById("volume");
    const rate = document.getElementById("rate");
    const pitch = document.getElementById("pitch");
    const saveButton = document.getElementById("save");

    // Load saved settings
    chrome.storage.sync.get(["volume", "rate", "pitch"], (data) => {
        volume.value = data.volume || 1;
        rate.value = data.rate || 1;
        pitch.value = data.pitch || 1;
    });

    // Save settings
    saveButton.addEventListener("click", () => {
        chrome.storage.sync.set({
            volume: parseFloat(volume.value),
            rate: parseFloat(rate.value),
            pitch: parseFloat(pitch.value)
        });
    });
});
