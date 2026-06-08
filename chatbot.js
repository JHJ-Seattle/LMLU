const LMLU_API_KEY = "process.env.LMLU_API_KEY"; // replace with real api key

// System Prompt:
// Helps the AI know more about your org. Feel free to edit this to add new programs and update contact info, etc.
const LMLU_SYSTEM_PROMPT = `You are a friendly, warm chatbot for Love Me. Love Us., a nonprofit in the Seattle/Bellevue, Washington area that supports children with special needs and their families. Keep responses concise (under 4 sentences unless a list genuinely helps) and use an encouraging, accessible tone — no jargon.
 
MISSION: Create a community where every child feels valued, supported, and celebrated. All programs are completely free for families.
 
PROGRAMS (all free):
- Love Art: Free art workshops. Builds creativity, self-expression, and fine motor skills.
- Love Sports: Free basketball and soccer camps. Builds confidence, teamwork, and mentor relationships.
- Love Learning: Free one-on-one tutoring, virtual and in-person. Academic support and lasting mentor connections.
- Love Music: Free music camps. Rhythm, movement, joy, and love of music.
- Baking Lab: Hands-on baking. Sensory and motor skills, teamwork, and independence.
 
SIGN-UPS: Direct parents to email admin@lovemeloveus.org to enroll their child in a program.
 
VOLUNTEERING: People can volunteer as tutors, mentors, coaches, or art/music facilitators. Direct them to lovemeloveus.org/Volunteer.html
 
EVENTS: Direct them to lovemeloveus.org/Events.html for current event listings.
 
DONATIONS: Accept donations at lovemeloveus.org/Donate.html — all programs are funded by generous donors.
 
CONTACT: admin@lovemeloveus.org | +1 (425) 298-7866 | @lovemeloveus on social media
 
If you don't know something specific (like exact event dates or availability), be honest and direct them to the website or contact email. Never make up information.`;

// Conversation History
let chatHistory = [];
let isThinking = false;

// HTML + CSS for UI
function injectChatbot() {
    const style = document.createElement("style");
    style.textContent = `
        #lmlu-chat-button {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #fbfbfb;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            box-shadow: 0 4px 16px rgba(233,30,99,0.35);
            z-index: 9999;
            transition: transform 0.2s, background 0.2s;
        }

        #lmlu-chat-button-hover {
            background: #c2185b;
            transform: scale(1.08);
        }

        #lmlu-chat-window {
            position: fixed;
            bottom: 90px;
            right: 24px;
            width: 340px;
            height: 480px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            display: none;
            flex-direction: column;
            overflow: hidden;
            z-index: 9998;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        #lmlu-chat-window.open { display: flex; }

        #lmlu-chat-header {
            background: #ea7c5b;
            color: #fff;
            padding: 14px 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        #lmlu-chat-header .avatar { font-size: 22px; }
        #lmlu-chat-header .title {
            font-size: 15px;
            font-weight: 600;
        }
        #lmlu-chat-header .subtitle {
            font-size: 12px;
            opacity: 0.85;
        }

        #lmlu-close-button {
            margin-left: auto;
            background: none;
            border: none;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            line-height: 1;
            padding: 0;
        }

        #lmlu-messages {
            flex: 1;
            overflow-y: auto;
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: #fafafa;
        }

        .lmlu-msg {
            display: flex;
            gap: 7px;
            align-items: flex-end;
        }
        .lmlu-msg.user { flex-direction: row-reverse; }

        .lmlu-bubble {
            padding: 9px 13px;
            border-radius: 16px;
            font-size: 13.5px;
            line-height: 1.55;
            max-width: 78%;
            color: #222;
        }

        .lmlu-msg.bot .lmlu-bubble {
            background: #fff;
            border: 1px solid #eee;
            border-bottom-left-radius: 4px;
        }

        .lmlu-msg.user .lmlu-bubble {
            background: #ea7c5b;
            color: #fff;
            border-bottom-right-radius: 4px;
        }

        .lmlu-msg-icon {
            font-size: 18px;
            flex-shrink: 0;
        }

        .lmlu-typing {
            display: flex;
            gap: 4px;
            align-items: center;
            padding: 9px 13px;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 16px;
            border-bottom-left-radius: 4px;
            width: fit-content;
        }

        .lmlu-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #bbb;
            animation: lmlu-bounce 1.2s infinite;
        }
        .lmlu-dot:nth-child(2) { animation-delay: 0.2s; }
        .lmlu-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes lmlu-bounce {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-5px); }
        }

        .lmlu-suggestions {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: 5px;
        }

        .lmlu-suggestion {
            .font-size: 12px;
            padding: 4px 9px;
            border-radius: 10px;
            border: 1px solid #ea7c5b;
            background: transparent;
            color: #ea7c5b;
            cursor: pointer;
            font-family: inherit;
        }
        .lmlu-suggestion:hover { background: #fce4ec; }

        #lmlu-input-area {
            padding: 10px 12px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 7px;
            align-items: center;
            background: #fff;
        }

        #lmlu-input {
            flex: 1;
            padding: 8px 12px;
            border-radius: 20px;
            border: 1px solid #ddd;
            font-size: 13.5px;
            font-family: inherit;
            outline: none;
            background: #fafafa;
        }

        #lmlu-input:focus { 
            border-color: #e89980;
            background: #fff;
        }

        #lmlu-send {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #ea7c5b;
            border: none;
            cursor: pointer;
            color: #fff;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink 0;
        }
        #lmlu-send:hover { background: #e89980; }

        #lmlu-send:disabled { 
            background: #ddd;
            cursor: default;
        }

        #lmlu-messages::-webkit-scrollbar { width: 4px; }
        #lmlu-messages::-webkit-scrollbar-thumb { 
            background: #ddd;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);

    // HTML Structure
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <button id="lmlu-chat-button" aria-label="Open Chat">❤️</button>
        <div id="lmlu-chat-window" role="dialog" aria-label="Love Me Love Us chat">

            <div id="lmlu-chat-header">
                <span class="avatar">❤️</span>
                <div>
                    <div class="title">Love Me. Love Us.</div>
                    <div class="subtitle">Here To Help!</div>
                </div>
                <button id="lmlu-close-button" aria-label="Close Chat">X</button>
            </div>

            <div id="lmlu-messages">
                <!--Messages Appear Here-->
            </div>

            <div id="lmlu-input-area">
                <input id="lmlu-input" type="text" placeholder="Type a message..." />
                <button id="lmlu-send" aria-label="Send Message">➤</button>
            </div>
        </div>
    `;
    document.body.appendChild(wrapper);

    // Wire-up Events
    document.getElementById("lmlu-chat-button").addEventListener("click", openChat);
    document.getElementById("lmlu-close-button").addEventListener("click", closeChat);
    document.getElementById("lmlu-send").addEventListener("click", handleSend);
    document.getElementById("lmlu-input").addEventListener("key down", (e) => { if (e.key == "enter") handleSend(); });
    showWelcome();
}

// Open/Close Chat Window
function openChat() {
    document.getElementById("lmlu-chat-window").classList.add("open");
    document.getElementById("lmlu-input").focus();
}

function closeChat() {
    document.getElementById("lmlu-chat-window").classList.remove("open");
}

// Add Message Bubble to UI
function addMessage(text, role) {
    const container = document.getElementById("lmlu-messages");
    const msgDiv = document.createElement("div");
    msgDiv.className = "lmlu-msg " + (role === "user" ? "user" : "bot");
    if (role === "bot") {
        msgDiv.innerHTML = `
            <span class="lmlu-msg-icon">❤️</span>
            <div class="lmlu-bubble">${text}</div>
        `;
    }
    else {
        msgDiv.innerHTML = `<div class = lmlu-bubble">${text}</div>`;
    }
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

// Show/Hide Typing Indicator
function showTyping() {
    const container = document.getElementById("lmlu-messages");
    const div = document.createElement("div");
    div.className = "lmlu-msg bot";
    div.id = "lmlu-typing";
    div.innerHTML = `
        <span class="lmlu-msg-icon">❤️</span>
        <div class="lmlu-typing">
            <div class="lmlu-dot"></div>
            <div class="lmlu-dot"></div>
            <div class="lmlu-dot"></div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById("lmlu-typing");
    if (t) t.remove();
}

// Welcome Message with Quick-Reply Suggestions
function showWelcome() {
    const container = document.getElementById("lmlu-messages");
    const div = document.createElement("div");
    div.className = "lmlu-msg bot";
    div.innerHTML = `
        <span class="lmlu-msg-icon">❤️</span>
        <div>
            <div class="lmlu-bubble">Hi! Welcome to Love Me. Love Us. I can help with programs, volunteering, events, or donations. What can I help you with?</div>
                <div class="lmlu-suggestions">
                    <button class="lmlu-suggestion" onclick="lmluSuggest('What programs do you offer?')">Our Programs</button>
                    <button class="lmlu-suggestion" onclick="lmluSuggest('How do I volunteer?')">Volunteer</button>
                    <button class="lmlu-suggestion" onclick="lmluSuggest('What events are coming up?')">Events</button>
                    <button class="lmlu-suggestion" onclick="lmluSuggest('How can I donate?')">Donate</button>
                </div>
        </div>
    `;
    container.appendChild(div);
}

// Call When Suggestion Button Clicked
function lmluSuggest(text) {
    document.getElementById("lmlu-input").value = text;
    handleSend();
}

// Send Message, Get Reply
async function handleSend() {
    if (isThinking) return;
    const input = document.getElementById("lmlu-input");
    const text = input.value.trim();

    if (!text) return;
    input.value = "";
    isThinking = true;
    document.getElementById("lmlu-send").disabled = true;

    // add user message to UI/history
    addMessage(text, "user");
    chatHistory.push({ role: "user", content: text });
    showTyping();

    try {
        // API Call to Anthropic
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${LMLU_OPENAI_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                max_tokens: 1000,
                messages: [
                    { role: "system", content: LMLU_SYSTEM_PROMPT },
                    ...chatHistory,
                ],
            }),
        });
        const data = await response.json();
        const reply = data.content.map((b) => b.text || "").join("");
        chatHistory.push({ role: "assistant", content: reply });
        removeTyping();
        addMessage(reply, "bot");
    }
    catch (err) {
        removeTyping();
        addMessage("Sorry, I'm having trouble right now. Please email <a href='mailto:admin@lovemeloveus.org'>admin@lovemeloveus.org</a> for help!", "bot");
        console.error("Chatbot Error:", err);
    }
    isThinking = false;
    document.getElementById("lmlu-send").disabled = false;
}

// Kick Everything Off When Page Loads
document.addEventListener("DOMContentLoaded", injectChatbot);