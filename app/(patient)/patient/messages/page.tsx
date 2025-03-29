"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { Send, Bot, RefreshCw, Plus } from "lucide-react"

export default function MessagesPage() {
  const { toast } = useToast()
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null)
  const [isGeneratingSuggestion, setIsGeneratingSuggestion] = useState(false)
  const [isChatbotConversation, setIsChatbotConversation] = useState(false)
  const [chatbotMessages, setChatbotMessages] = useState<
    Array<{ id: number; content: string; isUser: boolean; date: string }>
  >([])
  const messageEndRef = useRef<HTMLDivElement>(null)

  // Mock data
  const conversations = [
    {
      id: 1,
      with: "Dr. Jane Smith",
      lastMessage: "Your test results look good. Let me know if you have any questions.",
      date: "2025-03-25T14:30:00",
      unread: true,
    },
    {
      id: 2,
      with: "Dr. Michael Johnson",
      lastMessage: "Please remember to take your medication as prescribed.",
      date: "2025-03-20T10:15:00",
      unread: false,
    },
    {
      id: 3,
      with: "Appointment Desk",
      lastMessage: "Your appointment has been confirmed for April 15th at 2:00 PM.",
      date: "2025-03-18T09:45:00",
      unread: false,
    },
  ]

  const messages = [
    {
      id: 1,
      conversationId: 1,
      from: "Dr. Jane Smith",
      content: "Hello! I've reviewed your recent lab results and everything looks normal.",
      date: "2025-03-24T09:30:00",
      isPatient: false,
    },
    {
      id: 2,
      conversationId: 1,
      from: "You",
      content: "That's great news! I was a bit worried about my cholesterol levels.",
      date: "2025-03-24T10:15:00",
      isPatient: true,
    },
    {
      id: 3,
      conversationId: 1,
      from: "Dr. Jane Smith",
      content:
        "Your cholesterol is within normal range, but I'd still recommend maintaining a healthy diet and regular exercise.",
      date: "2025-03-24T10:45:00",
      isPatient: false,
    },
    {
      id: 4,
      conversationId: 1,
      from: "Dr. Jane Smith",
      content: "Your test results look good. Let me know if you have any questions.",
      date: "2025-03-25T14:30:00",
      isPatient: false,
    },
  ]

  const filteredMessages = messages.filter((message) => message.conversationId === selectedConversation)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "MMM d, yyyy h:mm a")
  }

  const generateAiSuggestion = () => {
    setIsGeneratingSuggestion(true)

    // Simulate AI response generation
    setTimeout(() => {
      const suggestions = [
        "Thank you for the update. I'll make a note in your chart. Is there anything else you'd like to discuss about your treatment?",
        "I understand your concerns. Based on your symptoms, I recommend scheduling an in-person appointment to evaluate this further.",
        "Your test results look normal. Continue with the current medication and let me know if you experience any side effects.",
        "I'm glad to hear you're feeling better. Remember to complete the full course of antibiotics as prescribed.",
        "That's great progress! Please continue monitoring your blood pressure daily and send me your readings next week.",
      ]

      // Select a random suggestion
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
      setAiSuggestion(randomSuggestion)
      setIsGeneratingSuggestion(false)
    }, 1500)
  }

  const generateChatbotResponse = (userMessage: string) => {
    // Add user message to chat
    const newUserMessage = {
      id: chatbotMessages.length + 1,
      content: userMessage,
      isUser: true,
      date: new Date().toISOString(),
    }

    setChatbotMessages((prev) => [...prev, newUserMessage])

    // Simulate chatbot thinking
    setTimeout(() => {
      let botResponse = ""

      // Simple pattern matching for demo purposes
      if (userMessage.toLowerCase().includes("appointment")) {
        botResponse =
          "I can help you schedule an appointment. Would you prefer to see Dr. Smith or Dr. Johnson? Or would you like to see the first available doctor?"
      } else if (
        userMessage.toLowerCase().includes("medication") ||
        userMessage.toLowerCase().includes("prescription")
      ) {
        botResponse =
          "For medication refills, please provide your name, date of birth, and the name of the medication you need refilled. A healthcare provider will review your request within 24 hours."
      } else if (userMessage.toLowerCase().includes("result") || userMessage.toLowerCase().includes("test")) {
        botResponse =
          "Your recent test results have been uploaded to your patient portal. Would you like me to summarize them for you, or would you prefer to discuss them with your doctor?"
      } else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        botResponse =
          "Hello! I'm your HealthCare Center virtual assistant. How can I help you today? I can assist with appointment scheduling, medication refills, general health questions, or connecting you with a healthcare provider."
      } else if (userMessage.toLowerCase().includes("thank")) {
        botResponse = "You're welcome! Is there anything else I can help you with today?"
      } else if (userMessage.toLowerCase().includes("location") || userMessage.toLowerCase().includes("address")) {
        botResponse =
          "We have three locations: Salt Lake City (355 W 400 S), Provo (135 E 200 N), and St. George (188 E 300 S). Which one would you like more information about?"
      } else {
        botResponse =
          "I understand you're asking about " +
          userMessage.split(" ").slice(0, 3).join(" ") +
          "... Would you like me to connect you with a healthcare provider to discuss this further? Or I can provide general information on common health topics."
      }

      const newBotMessage = {
        id: chatbotMessages.length + 2,
        content: botResponse,
        isUser: false,
        date: new Date().toISOString(),
      }

      setChatbotMessages((prev) => [...prev, newBotMessage])
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    if (isChatbotConversation) {
      generateChatbotResponse(newMessage)
    } else if (selectedConversation) {
      // In a real app, this would be an API call
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      })

      // Generate new AI suggestion
      generateAiSuggestion()
    }

    // Reset form
    setNewMessage("")
  }

  const startNewChatbotConversation = () => {
    setSelectedConversation(null)
    setIsChatbotConversation(true)

    // Initialize with welcome message
    setChatbotMessages([
      {
        id: 1,
        content:
          "Hello! I'm your HealthCare Center virtual assistant. How can I help you today? I can assist with appointment scheduling, medication refills, general health questions, or connecting you with a healthcare provider.",
        isUser: false,
        date: new Date().toISOString(),
      },
    ])
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [filteredMessages, chatbotMessages])

  useEffect(() => {
    if (selectedConversation && !isChatbotConversation) {
      generateAiSuggestion()
    }
  }, [selectedConversation])

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Messages</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Your message history with healthcare providers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {isChatbotConversation && (
                <div className="p-3 rounded-lg cursor-pointer transition-colors bg-primary text-primary-foreground">
                  <div className="flex justify-between items-start">
                    <div className="font-medium flex items-center">
                      <Bot className="h-4 w-4 mr-2" />
                      Virtual Assistant
                    </div>
                    <div className="text-xs">{format(new Date(), "MMM d")}</div>
                  </div>
                  <div className="text-sm truncate mt-1">How can I help you today?</div>
                </div>
              )}

              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedConversation === conversation.id && !isChatbotConversation
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => {
                    setSelectedConversation(conversation.id)
                    setIsChatbotConversation(false)
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium">{conversation.with}</div>
                    <div className="text-xs">{format(new Date(conversation.date), "MMM d")}</div>
                  </div>
                  <div className="text-sm truncate mt-1">{conversation.lastMessage}</div>
                  {conversation.unread && (
                    <div className="mt-1">
                      <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={startNewChatbotConversation}>
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          {selectedConversation && !isChatbotConversation ? (
            <>
              <CardHeader className="border-b">
                <CardTitle>{conversations.find((c) => c.id === selectedConversation)?.with}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                  {filteredMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isPatient ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isPatient ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <div className="text-sm">{message.content}</div>
                        <div className="text-xs mt-1 opacity-70">{formatDate(message.date)}</div>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>
              </CardContent>
              <CardFooter className="border-t p-4 flex flex-col space-y-4">
                {aiSuggestion && (
                  <div className="w-full p-3 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Bot className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium">AI Suggested Reply</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={generateAiSuggestion}
                        disabled={isGeneratingSuggestion}
                      >
                        <RefreshCw className={`h-4 w-4 ${isGeneratingSuggestion ? "animate-spin" : ""}`} />
                        <span className="sr-only">Generate new suggestion</span>
                      </Button>
                    </div>
                    <p className="text-sm">{aiSuggestion}</p>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto mt-1"
                      onClick={() => setNewMessage(aiSuggestion)}
                    >
                      Use this reply
                    </Button>
                  </div>
                )}
                <div className="flex w-full items-center space-x-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                    rows={3}
                  />
                  <Button type="submit" size="icon" onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </>
          ) : isChatbotConversation ? (
            <>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-primary" />
                  Virtual Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about appointments, medications, or general health information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                  {chatbotMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isUser ? "bg-primary text-primary-foreground" : "bg-muted flex items-start"
                        }`}
                      >
                        {!message.isUser && <Bot className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />}
                        <div>
                          <div className="text-sm">{message.content}</div>
                          <div className="text-xs mt-1 opacity-70">{formatDate(message.date)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center space-x-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                    rows={3}
                  />
                  <Button type="submit" size="icon" onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-[500px] text-muted-foreground">
              Select a conversation to view messages
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

