# [New Update: 10/09/2026: Revisiting this and some other projects and fixing them ]
# Xplit-A-Simple-Music-Player V2 
# 🎵 Xplit — A Simple Music Player

> **Xplit** is a simple browser-based music player built with **HTML, CSS, and JavaScript**.

This project was originally created as a **college project**. As part of my **Fix Old Stuffs** initiative, I revisited the project, fixed bugs, cleaned up the code, and improved the overall UI and user experience.

---

## ✨ What's New

### 🎨 UI & CSS

* Redesigned the player with a **modern dark/glass-style UI**
* Improved **spacing, alignment, and layout**
* Added better **shadows and visual depth**
* Improved **album artwork**
* Added **hover and click animations**
* Improved **Play, Previous, and Next buttons**
* Improved **seek and volume sliders**
* Added **Firefox slider support**
* Added **keyboard focus states**
* Improved **footer styling**
* Added **reduced-motion support**
* Improved **mobile, tablet, and desktop responsiveness**
* Removed unnecessary and repeated CSS
* Improved **logo sizing**

---

## 🧹 HTML Improvements

The HTML structure was cleaned and improved.

### Changes

* Fixed the **viewport meta tag**
* Improved HTML formatting and indentation
* Changed player controls from `<div>` elements to semantic `<button>` elements
* Removed unnecessary inline event handlers
* Added `aria-label` attributes for better accessibility
* Removed unnecessary `<br>` elements
* Improved the `<footer>` structure
* Improved the **About** section
* Cleaned unnecessary formatting and comments

---

## ⚙️ JavaScript Fixes

Several issues were found and fixed in the original JavaScript.

### Fixed Issues

* Fixed **seek bar calculation**
* Fixed **undefined variables** in the seek-update function
* Added a reusable `formatTime()` function
* Added validation for invalid audio duration values
* Fixed **track duration display**
* Added **automatic next track** when a song ends
* Fixed an incorrect song filename
* Improved **play/pause state handling**
* Added **audio playback error handling**
* Added console messages for debugging
* Changed the track list to a `const` array

---

## 🎵 Features

| Feature                   | Status |
| ------------------------- | ------ |
| ▶️ Play / Pause           | ✅      |
| ⏮️ Previous Track         | ✅      |
| ⏭️ Next Track             | ✅      |
| 🔄 Automatic Next Track   | ✅      |
| 🎚️ Seek Control          | ✅      |
| 🔊 Volume Control         | ✅      |
| ⏱️ Current Time           | ✅      |
| ⏱️ Track Duration         | ✅      |
| 🖼️ Dynamic Album Artwork | ✅      |
| 🎤 Dynamic Artist Name    | ✅      |
| 🎵 Dynamic Track Name     | ✅      |
| 📱 Responsive Design      | ✅      |
| ⚠️ Audio Error Handling   | ✅      |

---

## 🛠️ Technologies Used

* **HTML5** — Page structure
* **CSS3** — UI, animations and responsive design
* **JavaScript** — Music player functionality
* **HTML5 Audio API** — Audio playback
* **Font Awesome** — Player icons

---

## 📁 Project Structure

```text
Xplit-A-Simple-Music-Player/
│
├── index.html
├── fstyle.css
├── fscript.js
├── logo.png
├── bg.png
│
├── covers/
│   ├── kabhitumhe.jpeg
│   ├── onmyway.jpg
│   ├── maan.jpg
│   └── terazikr.jpg
│
└── Songs/
    ├── Kabhi Tumhe.mp3
    ├── On My Way.mp3
    ├── Maan Meri Jaan.mp3
    └── Tera Zikr.mp3
```

---

## 🔧 Fix Old Stuffs

This project is part of my **Fix Old Stuffs** initiative.

The purpose of this initiative is to revisit my **old college projects**, understand the mistakes in my earlier code, fix them, and improve them using the knowledge I have gained since creating the original projects.

### 💡 What I Learned

* Debugging existing JavaScript code
* Understanding the **HTML5 Audio API**
* Working with **DOM elements**
* Using **event listeners**
* Handling audio playback states
* Handling audio duration and current time
* Creating reusable JavaScript functions
* Writing semantic HTML
* Building responsive layouts with CSS
* Creating modern UI effects with CSS
* Cleaning and maintaining existing code
* Testing existing projects instead of immediately rewriting them

---

## 🔄 Before vs After

### Before

* Basic music-player interface
* Several JavaScript errors
* Repeated CSS media queries
* Basic player controls
* Limited responsive behavior
* Generic control elements
* Inconsistent formatting

### After

* Modern **glass-style interface**
* Cleaner HTML structure
* Fixed JavaScript functionality
* Semantic and accessible buttons
* Improved responsive design
* Better player controls
* Improved sliders
* Cleaner CSS
* Better error handling
* Improved overall user experience

---

## 🚀 Future Improvements

The following features may be added in future versions:

* [ ] 🔀 Shuffle mode
* [ ] 🔁 Repeat mode
* [ ] 📃 Playlist interface
* [ ] 🎵 Dynamic song management
* [ ] 🔍 Search songs
* [ ] ❤️ Favorite songs
* [ ] 💾 Save player settings
* [ ] 🎨 Dynamic themes
* [ ] 📱 PWA support
* [ ] 🎚️ Equalizer
* [ ] 🔇 Mute button

---

## 📸 Screenshots

> Screenshots will be added after completing the UI testing phase.

---

## 🎯 Project Goal

The goal of this project was **not to completely rewrite the old application**, but to understand the existing code, identify problems, fix them, and improve the project while keeping its original purpose.

> **Old Project → Debug → Fix → Improve → Learn**

---

## 👨‍💻 Author

**Tohid Bhati**

Cybersecurity Learner | Developer | IT Trainer

* GitHub: [tohidbhati](https://github.com/tohidbhati)
* LinkedIn: [Tohid Bhati](https://www.linkedin.com/in/tohidbhati0786/)

---

## 📜 License

This project is created for **educational and personal portfolio purposes**.



# Xplit Music Player V1 (Old Version)

**Xplit** is a fully functional web-based music player designed to provide a simple and intuitive interface for playing and managing your music. This project is built using HTML, CSS, and JavaScript, and aims to offer a seamless user experience for enjoying music from your local library.

## Features

- **Play/Pause Control**: Easily toggle between playing and pausing the current track with a single button click.
- **Track Navigation**: Skip to the next or previous track in the playlist with dedicated buttons.
- **Seek and Volume Control**: Adjust the track's playback position and volume using sliders.
- **Track Information**: Displays details such as the track name, artist, and cover art.
- **Responsive Design**: Designed to be compatible with various screen sizes and devices.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/xplit-music-player.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd xplit-music-player
   ```

3. **Open `index.html` in a Web Browser**: 
   Simply open the `index.html` file in your preferred web browser to start using the music player.

4. **Extract 'Songs.zip' and 'covers.zip' in the same folder**

## Usage

- **Load Tracks**: The music player supports a variety of audio files. Update the `track_list` array in `fscript.js` to include your own tracks.
- **Control Playback**: Use the play/pause, next, and previous buttons to control the music.
- **Adjust Volume and Seek**: Use the volume and seek sliders to control playback and sound levels.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome to enhance the functionality, fix bugs, or improve the overall design.
