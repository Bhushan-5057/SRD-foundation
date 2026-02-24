"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { IconType } from "react-icons";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import chatbotData from "@/content/chatbot-data.json";

type ChatActionType = "scroll" | "link";

interface ChatAction {
  text: string;
  action: ChatActionType;
  target: string;
}

interface ChatResponse {
  keywords: string[];
  answer: string;
  button?: ChatAction;
}

interface ChatData {
  welcomeMessage: string;
  quickReplies: string[];
  fallbackResponse: string;
  responses: ChatResponse[];
}

interface ChatMessage {
  id: number;
  text: string;
  sender: "bot" | "user";
  button?: ChatAction;
  timestamp: string;
}

const CHAT_DATA = chatbotData as ChatData;

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function renderMessageText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`bold-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`plain-${index}`}>{part}</span>;
  });
}

function getBestResponse(input: string, responses: ChatResponse[], fallback: string): ChatResponse {
  const normalizedInput = input.toLowerCase();
  let bestMatch: ChatResponse | null = null;
  let maxKeywordLength = 0;

  for (const response of responses) {
    for (const keyword of response.keywords) {
      const normalizedKeyword = keyword.toLowerCase().trim();
      const pattern = new RegExp(`\\b${normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (pattern.test(normalizedInput) && normalizedKeyword.length > maxKeywordLength) {
        maxKeywordLength = normalizedKeyword.length;
        bestMatch = response;
      }
    }
  }

  return bestMatch ?? { keywords: [], answer: fallback };
}

function CircleIcon({ icon: Icon, size = 20 }: { icon: IconType; size?: number }) {
  return <Icon size={size} aria-hidden="true" />;
}

export function Chatbot() {
  const router = useRouter();
  const pathname = usePathname();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  const quickReplies = useMemo(() => CHAT_DATA.quickReplies, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen || messages.length > 0) return;

    const welcomeTimer = window.setTimeout(() => {
      setMessages([
        {
          id: Date.now(),
          text: CHAT_DATA.welcomeMessage,
          sender: "bot",
          timestamp: formatTime(),
        },
      ]);
    }, 250);

    return () => window.clearTimeout(welcomeTimer);
  }, [isOpen, messages.length]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function addUserMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "user",
        timestamp: formatTime(),
      },
    ]);
  }

  function addBotMessage(text: string, button?: ChatAction) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        button,
        sender: "bot",
        timestamp: formatTime(),
      },
    ]);
    setIsTyping(false);
  }

  function sendAndRespond(rawText: string) {
    const text = rawText.trim();
    if (!text) return;

    addUserMessage(text);
    setInputValue("");
    setIsTyping(true);

    window.setTimeout(() => {
      const response = getBestResponse(text, CHAT_DATA.responses, CHAT_DATA.fallbackResponse);
      addBotMessage(response.answer, response.button);
    }, 650);
  }

  function handleAction(action: ChatAction) {
    if (action.action === "scroll") {
      const targetEl = document.getElementById(action.target);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/#${action.target}`);
      }
      setIsOpen(false);
      return;
    }

    router.push(action.target);
    setIsOpen(false);
  }

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button
          className="chatbot-button"
          aria-label="Open chat"
          onClick={() => {
            setIsOpen(true);
            setShowBadge(false);
          }}
        >
          <CircleIcon icon={FiMessageCircle} size={28} />
          {showBadge ? <span className="chatbot-badge">1</span> : null}
        </button>
      ) : (
        <div className="chatbot-window" role="dialog" aria-label="SRD chatbot">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <CircleIcon icon={FiMessageCircle} size={22} />
              </div>
              <div>
                <h3 className="chatbot-title">SRD Foundation</h3>
                <p className="chatbot-status">
                  <span className="status-dot" />
                  Online - here to help
                </p>
              </div>
            </div>
            <button className="chatbot-close-btn" aria-label="Close chat" onClick={() => setIsOpen(false)}>
              <CircleIcon icon={FiX} />
            </button>
          </div>

          <div className="chatbot-subheader">Supporting Newcomers &amp; Seniors</div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === "user" ? "message-user" : "message-bot"}`}>
                <div className="message-content">
                  <p>{renderMessageText(message.text)}</p>
                  {message.button ? (
                    <button className="message-action-btn" onClick={() => handleAction(message.button!)}>
                      {message.button.text}
                    </button>
                  ) : null}
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping ? (
              <div className="message message-bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 ? (
            <div className="chatbot-quick-replies">
              {quickReplies.map((reply) => (
                <button key={reply} className="quick-reply-btn" onClick={() => sendAndRespond(reply)}>
                  {reply}
                </button>
              ))}
            </div>
          ) : null}

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  sendAndRespond(inputValue);
                }
              }}
            />
            <button
              className="chatbot-send-btn"
              aria-label="Send message"
              onClick={() => sendAndRespond(inputValue)}
              disabled={!inputValue.trim()}
            >
              <CircleIcon icon={FiSend} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
