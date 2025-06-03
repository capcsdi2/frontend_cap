import { IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { FiMessageCircle } from "react-icons/fi"
import ChatBox from "./ChatBox"

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <IconButton
        aria-label="Open chat"
        icon={<FiMessageCircle size={24} />}
        position="fixed"
        bottom="20px"
        right="20px"
        borderRadius="full"
        size="lg"
        colorScheme="teal"
        onClick={() => setIsOpen(!isOpen)}
        zIndex={9999}
      />
      <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default ChatbotButton