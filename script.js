// Music Player
let isPlaying = false;
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const musicText = document.getElementById('music-text');
const volumeSlider = document.getElementById('volume-slider');

if (music && musicToggle) {
    music.volume = 0.3;
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicIcon.className = 'fas fa-play';
            musicText.textContent = 'Play Love Song';
        } else {
            music.play().catch(e => {
                console.log("Autoplay prevented");
                musicIcon.className = 'fas fa-play-circle';
                musicText.textContent = 'Click to Play';
            });
            musicIcon.className = 'fas fa-pause';
            musicText.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            music.volume = e.target.value / 100;
        });
    }
}

// Update Date and Time
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
}

// Update Greeting Based on Time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingElement = document.getElementById('greeting-icon');
    
    let greeting = "Good ";
    let emoji = "❤️";
    
    if (hour < 12) {
        greeting = "Good Morning";
        emoji = "🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
        emoji = "☀️";
    } else {
        greeting = "Good Evening";
        emoji = "🌙";
    }
    
    if (greetingElement) {
        greetingElement.textContent = emoji;
    }
    
    const greetingText = document.querySelector('.greeting-card h3');
    if (greetingText) {
        greetingText.innerHTML = `<span>${emoji}</span> ${greeting}, My Love! <span>${emoji}</span>`;
    }
}

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentineDate = new Date(currentYear, 1, 14);
    
    if (now > valentineDate) {
        valentineDate.setFullYear(currentYear + 1);
    }
    
    const diff = valentineDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update countdown display
    document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    
    // Update message
    const messageElement = document.getElementById('countdown-message');
    if (messageElement) {
        if (days === 0 && hours < 24) {
            messageElement.textContent = "🎉 It's almost Valentine's Day! Get ready for surprises!";
            messageElement.style.color = '#ff3366';
        } else if (days === 1) {
            messageElement.textContent = "✨ Just one more day until Valentine's Day!";
            messageElement.style.color = '#ff6699';
        } else {
            messageElement.textContent = "❤️ Counting down to our special day...";
            messageElement.style.color = '#666';
        }
    }
}

// Floating Hearts Animation
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;
    
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        
        const size = Math.random() * 30 + 20;
        const startX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        heart.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${startX}%;
            bottom: -50px;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: floatUp ${duration}s linear infinite ${delay}s;
            filter: drop-shadow(0 0 10px rgba(255,51,102,0.3));
            z-index: 1;
        `;
        
        container.appendChild(heart);
    }
    
    // Add CSS animation
    if (!document.querySelector('#floatUpAnimation')) {
        const style = document.createElement('style');
        style.id = 'floatUpAnimation';
        style.textContent = `
            @keyframes floatUp {
                0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Sparkle Animation
function createSparkles() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    const sparkleCount = 30;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * 2;
        
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 30%, transparent 70%);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            opacity: 0;
            animation: sparkleTwinkle ${duration}s ease-in-out infinite ${delay}s;
        `;
        
        container.appendChild(sparkle);
    }
    
    // Add CSS animation
    if (!document.querySelector('#sparkleTwinkleAnimation')) {
        const style = document.createElement('style');
        style.id = 'sparkleTwinkleAnimation';
        style.textContent = `
            @keyframes sparkleTwinkle {
                0%, 100% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Interactive Heart Click
const clickHeart = document.getElementById('click-heart');
const heartMessage = document.getElementById('heart-message');

if (clickHeart && heartMessage) {
    let clickCount = 0;
    const messages = [
        "I love you! ❤️",
        "You make my heart flutter! 💕",
        "You're my everything! 🌟",
        "My love for you grows! 💖",
        "You complete me! ✨",
        "Forever yours! 💘"
    ];
    
    clickHeart.addEventListener('click', function() {
        clickCount++;
        
        // Change message
        heartMessage.textContent = messages[clickCount % messages.length];
        heartMessage.style.color = '#ff3366';
        heartMessage.style.fontWeight = 'bold';
        
        // Create heart explosion
        createHeartExplosion(this);
        
        // Add pulse effect
        this.classList.add('heart-clicked');
        setTimeout(() => {
            this.classList.remove('heart-clicked');
        }, 1000);
        
        // Create floating hearts
        for (let i = 0; i < 5; i++) {
            createSingleFloatingHeart(this);
        }
    });
}

// Heart explosion effect
function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            font-size: 24px;
            left: ${centerX}px;
            top: ${centerY}px;
            z-index: 1000;
            animation: heartExplode 1s ease-out forwards;
            color: #ff3366;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1000);
    }
    
    // Add CSS for explosion
    if (!document.querySelector('#heartExplodeAnimation')) {
        const style = document.createElement('style');
        style.id = 'heartExplodeAnimation';
        style.textContent = `
            @keyframes heartExplode {
                0% { transform: translate(0, 0) scale(1); opacity: 1; }
                100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Single floating heart
function createSingleFloatingHeart(element) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    
    const rect = element.getBoundingClientRect();
    const startX = rect.left + Math.random() * rect.width;
    const startY = rect.top + Math.random() * rect.height;
    const size = Math.random() * 25 + 15;
    const duration = Math.random() * 3 + 2;
    
    heart.style.cssText = `
        position: fixed;
        font-size: ${size}px;
        left: ${startX}px;
        top: ${startY}px;
        z-index: 1000;
        animation: singleFloatUp ${duration}s ease-out forwards;
        color: #ff3366;
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), duration * 1000);
    
    // Add animation CSS
    if (!document.querySelector('#singleFloatUpAnimation')) {
        const style = document.createElement('style');
        style.id = 'singleFloatUpAnimation';
        style.textContent = `
            @keyframes singleFloatUp {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                100% { transform: translateY(-200px) scale(0.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Photo Gallery Click
const photoItems = document.querySelectorAll('.photo-item');
photoItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            // Create fullscreen view
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                z-index: 2000;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 0 50px rgba(255,255,255,0.2);
            `;
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        }
    });
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    updateGreeting();
    updateCountdown();
    createFloatingHearts();
    createSparkles();
    
    // Update time every minute
    setInterval(updateDateTime, 60000);
    setInterval(updateCountdown, 1000);
    
    // Smooth page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});