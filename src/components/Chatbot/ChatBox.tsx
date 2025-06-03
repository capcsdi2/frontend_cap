import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { FiSend } from "react-icons/fi"

interface Message {
  text: string
  isUser: boolean
}

interface ChatBoxProps {
  isOpen: boolean
  onClose: () => void
}

const ChatBox = ({ isOpen, onClose }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }])

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thank you for your message. I'll get back to you soon!", isUser: false },
      ])
    }, 1000)

    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <Box
      position="fixed"
      bottom="80px"
      right="20px"
      width="300px"
      height="400px"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      zIndex={9999}
    >
      <Flex direction="column" h="100%">
        <Flex
          justify="space-between"
          align="center"
          p={3}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Text fontWeight="bold">Chat Support</Text>
          <Button size="sm" onClick={onClose} variant="ghost">
            Close
          </Button>
        </Flex>

        <VStack
          flex={1}
          overflowY="auto"
          p={4}
          spacing={4}
          alignItems="stretch"
        >
          {messages.map((message, index) => (
            <Flex
              key={index}
              justify={message.isUser ? "flex-end" : "flex-start"}
            >
              <Box
                bg={message.isUser ? "teal.500" : "gray.100"}
                color={message.isUser ? "white" : "black"}
                py={2}
                px={4}
                borderRadius="lg"
                maxW="80%"
              >
                {message.text}
              </Box>
            </Flex>
          ))}
        </VStack>

        <Flex p={4} borderTop="1px solid" borderColor="gray.200">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            mr={2}
          />
          <Button onClick={handleSend} colorScheme="teal">
            <FiSend />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}