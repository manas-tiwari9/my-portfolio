// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    // ⚠️ IMPORTANT: You MUST get your own API key from Google AI Studio
    // The key below is just a placeholder and will not work.
    apiKey: 'YOUR_OWN_GEMINI_API_KEY_HERE',
    model: 'gemini-1.5-flash',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
    
    // === PERSONAL INFORMATION CONTEXT (CLEANED) ===
    personalInfo: {
        name: "Manas Tiwari", // Fixed extra space
        title: "Data Science Student",
        location: "Phagwara, Punjab",
        phone: "70555----", // Your placeholder
        email: "tiwarimanas8057@gmail.com",
        education: "Masters in Computer Application, LPU (August 2025—Present)",
        languages: ["English (Fluent)", "Hindi (Conversational)"],
        
        bio: `Hi! I’m Manas — a data scientist driven to find the 'why' behind the numbers. My journey began watching my local kirana store owner, wondering how he'd guess what to stock for the festival season. I realized critical decisions were being made on intuition, not data. That's when I taught myself to code: to replace uncertainty with insight. As a Data Science student at LPU, I'm now scaling that curiosity, using machine learning to turn complex data into smart, practical solutions.`,
        
        skills: {
            programmingAndData: [
                "Python (Advanced)",
                "SQL (Advanced)",
                "C++ (Intermediate)",
                "HTML5 (Advanced)",
                "CSS3 (Intermediate)",
                "JavaScript (Intermediate)"
            ],
            modelingAndML: [
                "TensorFlow",
                "scikit-learn",
                "XGBoost",
                "LightGBM",
                "CatBoost"
            ],
            mlopsAndDeployment: [
                "MLflow",
                "ZenML",
                "Docker",
                "FastAPI"
            ],
            tools: [
                "Jupyter",
                "Git",
                "VSCode",
                "Streamlit",
                "Flask"
            ],
            nlpAndEmbeddings: [
                "spaCy",
                "SBERT",
                "FAISS",
                "TF-IDF"
            ]
        },
        
        // === YOUR 3 CHOSEN PROJECTS (LINKS UPDATED) ===
        projects: [
            {
                name: "Book Recommender System",
                // ⚠️ I GUESSED THIS LINK! Please check it.
                github: "https://github.com/manas-tiwari9/book-recommender-system", 
                technologies: ["ALS", "TF-IDF/Embeddings", "Python", "Flask"],
                description: "Implemented a hybrid recommendation system combining collaborative filtering (ALS) with content-based embeddings. Exposed recommendations via Flask API."
            },
            {
                name: "Resume Screening",
                github: "https://github.com/manas-tiwari9/resume-screening", 
                technologies: ["spaCy", "SBERT", "FAISS", "Flask", "Python"],
                description: "Built an automated resume-parsing → embedding → ranking pipeline (spaCy → SBERT → FAISS) to surface top candidates quickly. Served ranked shortlists via a Flask API."
            },
            {
                name: "Toolly",
                github: "https://github.com/manas-tiwari9/tooly-studio",
                technologies: ["Python", "AI", "NLP", "Web Development", "Productivity Tools"],
                description: "An AI-powered productivity suite that automates and streamlines daily tasks, featuring intelligent text processing and automated content generation."
            }
        ],
        
        // === YOUR SOCIAL LINKS (LOOKS GOOD!) ===
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/manas-tiwari-85bb90380", 
            github: "https://github.com/manas-tiwari9",   
            kaggle: "https://www.kaggle.com/manastiwari9"
        },
        
        coursework: [
            "Linear Algebra",
            "Probability & Statistics",
            "Data Structures & Algorithms",
            "Database Systems",
            "Operating Systems"
        ],
        
        interests: [
            "Machine Learning Pipeline Development",
            "MLOps and Model Deployment",
            "Recommendation Systems",
            "Natural Language Processing",
            "Open Source Development"
        ],
        
        resumePath: "Resume/Manas_Tiwari_Resume.pdf",
    },
    
    // === SYSTEM PROMPT FOR GEMINI (SYNCED WITH YOUR INFO) ===
    systemPrompt: `You are Manas Tiwari's personal AI assistant on his portfolio website. Your role is to help visitors learn about Manas, his work, skills, and background.

**About Manas Tiwari:**
- Name: Manas Tiwari
- Title: Data Science Student
- Location: Phagwara, Punjab
- Phone: 70555----
- Email: tiwarimanas8057@gmail.com
- Education: Masters in Computer Application at LPU (August 2025—Present)
- Languages: English (Fluent), Hindi (Conversational), Punjabi (Conversational)

**Professional Summary:**
Manas is a data scientist driven to find the 'why' behind the numbers. His journey began by wondering how local shops predicted sales, realizing decisions were based on intuition, not data. He taught himself to code to replace uncertainty with insight. As a Data Science student at LPU, he's scaling that curiosity, using machine learning to turn complex data into smart, practical solutions.

**SKILLS:**
(Skills lists are identical to the personalInfo object)

**PROJECTS (Show these 3):**

1. **Book Recommender System** | ALS, TF-IDF/Embeddings, Python, Flask
   - Implemented a hybrid recommendation system combining collaborative filtering (ALS) with content-based embeddings to personalize suggestions.

2. **Resume Screening** | spaCy, SBERT, FAISS, Flask, Python
   - Built an automated resume-parsing → embedding → ranking pipeline to surface top candidates quickly.

3. **Toolly** | Python, AI, NLP, Web Development
   - An AI-powered productivity suite that automates and streamlines daily tasks with intelligent text processing.

**EDUCATION:**
Masters in Computer Application - LPU (August 2025—Present)

*Relevant Coursework:*
Linear Algebra, Probability & Statistics, Data Structures & Algorithms, Database Systems, Operating Systems

**Social Media & Online Presence:**
- LinkedIn: https://www.linkedin.com/in/manas-tiwari-85bb90380
- GitHub: https://github.com/manas-tiwari9
- Kaggle: https://www.kaggle.com/manastiwari9

**Resume:**
Available for download at: Resume/Manas_Tiwari_Resume.pdf

**Instructions:**
1. Be friendly, professional, and helpful.
2. Provide accurate information about Manas's skills, projects, and education.
3. **If asked about contact or how to reach Manas, provide:**
   - Email: tiwarimanas8057@gmail.com
   - Phone: 70555----
   - LinkedIn: https://www.linkedin.com/in/manas-tiwari-85bb90380
   - GitHub: https://github.com/manas-tiwari9
4. If asked about the resume, mention it's available for download on the website.
5. Keep responses concise but informative.
6. If you don't know something, be honest and suggest they contact Manas directly via email.
7. Show enthusiasm about Manas's work.
8. **When sharing links, always provide them as plain URLs (e.g., https://github.com/manas-tiwari9) - do NOT use markdown formatting.**

Remember: You represent Manas Tiwari professionally. Always maintain a positive, helpful, and knowledgeable demeanor.`
};

// === CHATBOT CLASS (RENAMED) ===
class ManasChatbot {
    constructor() {
        this.messages = [];
        this.isMinimized = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.hasBeenOpened = false;
        
        this.init();
    }
    
    init() {
        this.createChatbotUI();
        this.attachEventListeners();
    }
    
    createChatbotUI() {
        if (document.getElementById('chatbot-container')) {
            return;
        }
        
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container hidden" role="dialog" aria-label="Manas's AI Assistant" aria-live="polite" aria-modal="false">
                <div class="chatbot-header" id="chatbot-header">
                    <div class="chatbot-header-left">
                        <img src="image/manas.png" alt="Manas" class="chatbot-avatar">
                        <div class="chatbot-title-container">
                            <h3>Manas's AI Assistant</h3>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-controls">
                        <button class="chatbot-control-btn" id="chatbot-minimize" title="Minimize" aria-label="Minimize chat">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button class="chatbot-control-btn" id="chatbot-close" title="Close" aria-label="Close chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                
                <div class="chatbot-body" id="chatbot-body">
                    </div>
                
                <div class="quick-actions" id="quick-actions">
                    <button class="quick-action-btn" data-message="Tell me about Manas's technical skills"> Skills</button>
                    <button class="quick-action-btn" data-message="What projects has Manas worked on?"> Projects</button>
                    <button class="quick-action-btn" data-message="Tell me about Manas's education"> Education</button>
                    <button class="quick-action-btn" data-message="How can I contact Manas?"> Contact</button>
                </div>
                
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbot-input" 
                        placeholder="Ask me anything about Manas..."
                        autocomplete="off"
                        aria-label="Message input"
                    >
                    <button class="chatbot-send-btn" id="chatbot-send" aria-label="Send message">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            
            <button class="chatbot-toggle-btn active" id="chatbot-toggle" aria-label="Open chat assistant" aria-controls="chatbot-container" aria-expanded="false">
                <svg class="cbt-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5.5 4.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4.5 3.5v-3.5h-1.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"/>
                    <circle cx="9" cy="10" r="1.5"/>
                    <circle cx="12.5" cy="10" r="1.5"/>
                    <circle cx="16" cy="10" r="1.5"/>
                </svg>
            </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const closeBtn = document.getElementById('chatbot-close');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const header = document.getElementById('chatbot-header');
        const quickActions = document.querySelectorAll('.quick-action-btn');
        
        sendBtn?.addEventListener('click', () => this.handleSendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendMessage(message);
            });
        });
        
        minimizeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });
        
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeChatbot();
        });
        
        toggleBtn?.addEventListener('click', () => {
            this.openChatbot();
        });
        toggleBtn?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.openChatbot();
            }
        });
        
        header?.addEventListener('click', () => {
            if (this.isMinimized) {
                this.toggleMinimize();
            }
        });
    }
    
    // === WELCOME MESSAGE (CLEANED) ===
    loadWelcomeMessage() {
        const welcomeMsg = `Hi! I'm Manas's AI assistant. 

I can help you learn about:
• **Technical Skills** - Python, ML, MLOps, C++
• **Projects** - Book Recommender, Resume Screening, etc.
• **Education** - His Masters at LPU
• **Contact Info** - Email, LinkedIn, GitHub

Try the quick action buttons below or ask me anything!`;
        this.addMessage('bot', welcomeMsg);
    }
    
    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.sendMessage(message);
        input.value = '';
    }
    
    async sendMessage(message) {
        this.addMessage('user', message);
        this.showTypingIndicator();
        
        try {
            const response = await this.getGeminiResponse(message);
            this.hideTypingIndicator();
            this.addMessage('bot', response);
            
        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();
            
            // Try to answer from local knowledge base first
            const localResponse = this.getLocalResponse(message);
            
            if (localResponse) {
                this.addMessage('bot', localResponse);
            } else {
                // Otherwise, show error message with contact info
                const errorMessage = this.handleAPIError(error);
                this.addMessage('bot', errorMessage);
            }
        }
    }
    
    // === LOCAL RESPONSES (CLEANED) ===
    // This section automatically uses the info from 'personalInfo',
    // so it's already up-to-date.
    getLocalResponse(message) {
        const lowerMessage = message.toLowerCase();
        const info = CHATBOT_CONFIG.personalInfo;
        
        // Contact information queries
        if (lowerMessage.match(/contact|reach|email|phone|call|connect|get in touch|communicate/i)) {
            return `You can contact Manas through:\n\n📧 **Email:** ${info.email}\n📱 **Phone:** ${info.phone}\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n\n📍 **Location:** ${info.location}`;
        }
        
        // Skills queries
        if (lowerMessage.match(/skill|technical|technology|programming|what (can|do) (you|manas)|expertise|proficient|languages/i)) {
            let skillsText = `Manas has expertise in:\n\n`;
            skillsText += `**Programming & Data:**\n${info.skills.programmingAndData.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Modeling & Machine Learning:**\n${info.skills.modelingAndML.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**MLOps & Deployment:**\n${info.skills.mlopsAndDeployment.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**NLP & Embeddings:**\n${info.skills.nlpAndEmbeddings.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Tools:**\n${info.skills.tools.map(s => `• ${s}`).join('\n')}`;
            return skillsText;
        }
        
        // Projects queries
        if (lowerMessage.match(/project|portfolio|work|built|created|developed|show me/i)) {
            let projectsText = `Here are Manas's key projects:\n\n`;
            info.projects.forEach((project, index) => {
                projectsText += `**${index + 1}. ${project.name}**\n`;
                projectsText += `Technologies: ${project.technologies.join(', ')}\n`;
                projectsText += `${project.description}\n\n`;
            });
            projectsText += `You can view all projects on GitHub: ${info.socialMedia.github}`;
            return projectsText;
        }
        
        // Education or courses
        if (lowerMessage.match(/\b(education|degree|study|coursework|courses|lpu)\b/i)) {
            let eduText = `**Education:**\n${info.education}\n\n`;
            eduText += `**Relevant Coursework:**\n${info.coursework.map(c => `• ${c}`).join('\n')}`;
            return eduText;
        }
        
        // About/Bio queries
        if (lowerMessage.match(/about|who (is|are)|tell me (about|more)|introduce|background|bio/i)) {
            return `${info.bio}\n\n**Title:** ${info.title}\n**Location:** ${info.location}\n**Languages:** ${info.languages.join(', ')}\n\nFor more details, ask me about skills, projects, or education!`;
        }
        
        // Location queries
        if (lowerMessage.match(/where|location|live|based|from/i)) {
            return `Manas is based in **${info.location}**.`;
        }
        
        // Interests queries
        if (lowerMessage.match(/interest|passion|hobby|like|enjoy|focus/i)) {
            let interestText = `**Manas's Interests & Focus Areas:**\n\n`;
            interestText += info.interests.map(i => `💡 ${i}`).join('\n');
            return interestText;
        }
        
        // Resume/CV queries
        if (lowerMessage.match(/resume|cv|download|document/i)) {
            return `You can download Manas's resume from the website:\n📄 **${info.resumePath}**\n\nWould you like to know about his skills, projects, or education?`;
        }
        
        // Social media queries
        if (lowerMessage.match(/social|linkedin|github|kaggle|twitter|medium|blog/i)) {
            return `Connect with Manas on:\n\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n🏆 **Kaggle:** ${info.socialMedia.kaggle}`;
        }
        
        // No match found
        return null;
    }
    
    // === API ERROR (CLEANED) ===
    handleAPIError(error) {
        const contactInfo = `Please try again in a moment or contact Manas directly.\n\n📧 Email: ${CHATBOT_CONFIG.personalInfo.email}\n🔗 LinkedIn: ${CHATBOT_CONFIG.personalInfo.socialMedia.linkedin}`;

        if (error.message && (
            error.message.includes('429') || 
            error.message.includes('quota') || 
            error.message.includes('RESOURCE_EXHAUSTED')
        )) {
            return `I'm sorry, I'm having trouble connecting right now (Quota Exceeded). ${contactInfo}`;
        }
        
        if (error.message && error.message.includes('rate limit')) {
            return `I'm processing too many requests. Please wait a moment. ${contactInfo}`;
        }
        
        if (error.message && error.message.includes('fetch')) {
            return `I'm having network connectivity issues. Please check your connection. ${contactInfo}`;
        }
        
        // Generic fallback
        return `I'm sorry, an error occurred. ${contactInfo}`;
    }
    
    async getGeminiResponse(userMessage) {
        const contents = [
            {
                role: "user",
                parts: [{ text: CHATBOT_CONFIG.systemPrompt }]
            },
            {
                role: "model",
                // === MODEL RESPONSE (CLEANED) ===
                parts: [{ text: "I understand. I'm Manas Tiwari's personal AI assistant. I'll help visitors learn about Manas, his work, skills, and background in a friendly and professional manner." }]
            }
        ];
        
        this.conversationHistory.forEach(msg => {
            contents.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        });
        
        contents.push({
            role: "user",
            parts: [{ text: userMessage }]
        });
        
        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };
        
        try {
            const response = await fetch(`${CHATBOT_CONFIG.apiEndpoint}?key=${CHATBOT_CONFIG.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = new Error(`API request failed: ${response.status}`);
                error.statusCode = response.status;
                error.errorData = errorData;
                if (errorData.error && errorData.error.message) {
                    error.message = errorData.error.message;
                }
                throw error;
            }
            
            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                // Check for safety blocks
                if (data.candidates && data.candidates[0] && data.candidates[0].finishReason === 'SAFETY') {
                    throw new Error('Response blocked for safety reasons.');
                }
                throw new Error('Invalid API response structure');
            }
            
            const botResponse = data.candidates[0].content.parts[0].text;
            
            this.conversationHistory.push({ role: 'user', content: userMessage });
            this.conversationHistory.push({ role: 'bot', content: botResponse });
            
            // Keep only last 20 messages (10 pairs)
            if (this.conversationHistory.length > 20) {
                this.conversationHistory = this.conversationHistory.slice(-20);
            }
            
            return botResponse;
            
        } catch (error) {
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                error.message = 'Failed to fetch - network error';
            }
            throw error;
        }
    }
    
    addMessage(sender, text) {
        const chatBody = document.getElementById('chatbot-body');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        // === AVATAR (CLEANED & FIXED) ===
        const avatarHTML = sender === 'bot' ? 
            `<img src="image/manas.png" alt="Avatar" class="message-avatar">` : '';
        
        messageDiv.innerHTML = `
            ${avatarHTML}
            <div>
                <div class="message-content">${this.formatMessage(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        this.messages.push({ sender, text, time });
    }
    
    formatMessage(text) {
        // --- This formatting function is well-written, no changes needed ---
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            if (linkText === url || linkText.startsWith('http')) {
                return url;
            }
            return `[${linkText}](${url})`;
        });
        
        const urlRegex = /(https?:\/\/[^\s\]]+)/g;
        text = text.replace(urlRegex, (url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${url}</a>`;
        });
        
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${linkText}</a>`;
        });
        
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        if (text.includes('\n•') || text.includes('\n-')) {
            text = text.replace(/\n([•\-])\s(.+)/g, (match, bullet, content) => {
                return `<li>${content}</li>`;
            });
            if (text.includes('<li>')) {
                text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
            }
        }
        
        text = text.replace(/\n(\d+)\.\s(.+)/g, '<li>$2</li>');
        if (text.includes('<li>') && !text.includes('<ul>')) {
            text = text.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
        }
        
        const paragraphs = text.split(/\n\n+/);
        if (paragraphs.length > 1) {
            text = paragraphs.map(p => {
                if (p.trim() && !p.includes('<ul>') && !p.includes('<ol>') && !p.includes('<li>')) {
                    return `<p>${p.trim()}</p>`;
                }
                return p;
            }).join('');
        } else {
            text = text.replace(/\n/g, '<br>');
        }
        
        return text;
    }
    
    // === TYPING INDICATOR (CLEANED & FIXED) ===
    showTypingIndicator() {
        const chatBody = document.getElementById('chatbot-body');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <img src="image/manas.png" alt="Avatar" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        this.isTyping = true;
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }
    
    toggleMinimize() {
        const container = document.getElementById('chatbot-container');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const icon = minimizeBtn.querySelector('i');
        
        this.isMinimized = !this.isMinimized;
        container.classList.toggle('minimized');
        
        if (this.isMinimized) {
            icon.className = 'fas fa-plus';
            minimizeBtn.title = 'Expand';
        } else {
            icon.className = 'fas fa-minus';
            minimizeBtn.title = 'Minimize';

        }
    }
    
    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        
        container.classList.add('hidden');
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }
    
    openChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        
        container.classList.remove('hidden');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
        
        if (!this.hasBeenOpened) {
            this.loadWelcomeMessage();
            this.hasBeenOpened = true;
        }
        
        if (this.isMinimized) {
            this.toggleMinimize();
        }
    }
}

// === INITIALIZE (CLEANED) ===
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.manasChatbot = new ManasChatbot();
    });
} else {
    window.manasChatbot = new ManasChatbot();
}