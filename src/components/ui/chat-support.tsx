"use client";

import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
	ExpandableChat,
	ExpandableChatBody,
	ExpandableChatFooter,
	ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat";
import { Button } from "@/ui/button";
import { useChat } from "ai/react";
import { IconSend3 } from "justd-icons";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatSupport() {
	const messagesRef = useRef<HTMLDivElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const [isGenerating, setIsGenerating] = useState(false);
	const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
		onResponse(response) {
			if (response) {
				setIsGenerating(false);
			}
		},
		onError() {
			setIsGenerating(false);
		},
	});

	useEffect(() => {
		if (messagesRef.current) {
			messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
		}
	}, [messages]);

	const cleanAIResponse = (content: string) => {
		return content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsGenerating(true);
		handleSubmit(e);
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			if (isGenerating || isLoading || !input) return;
			setIsGenerating(true);
			onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
		}
	};

	return (
		<ExpandableChat size="md" position="bottom-right">
			<ExpandableChatHeader className="flex-col items-start">
				<h2 className="font-bold text-lg">Chat with Edwin</h2>
			</ExpandableChatHeader>
			<ExpandableChatBody>
				<ChatMessageList ref={messagesRef}>
					{/* Initial message */}
					<ChatBubble variant="received">
						<ChatBubbleAvatar fallback="AI" />
						<ChatBubbleMessage>
							Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about
							programming, web development, or my experiences in tech. Let me know how I can help!
						</ChatBubbleMessage>
					</ChatBubble>

					{/* Messages */}
					{messages.map((message) => (
						<ChatBubble key={message.id} variant={message.role === "user" ? "sent" : "received"}>
							<ChatBubbleAvatar src="" fallback={message.role === "user" ? "US" : "AI"} />
							<ChatBubbleMessage variant={message.role === "user" ? "sent" : "received"}>
								{message.role === "assistant" ? (
									<ReactMarkdown
										components={{
											h1: ({ node, ...props }) => (
												<h1 className="my-4 font-bold text-2xl" {...props} />
											),
											h2: ({ node, ...props }) => (
												<h2 className="my-3 font-bold text-xl" {...props} />
											),
											h3: ({ node, ...props }) => (
												<h3 className="my-2 font-bold text-lg" {...props} />
											),
											ul: ({ node, ...props }) => (
												<ul className="my-2 ml-4 list-disc" {...props} />
											),
											ol: ({ node, ...props }) => (
												<ol className="my-2 ml-4 list-decimal" {...props} />
											),
										}}
									>
										{cleanAIResponse(message.content)}
									</ReactMarkdown>
								) : (
									message.content
								)}
							</ChatBubbleMessage>
						</ChatBubble>
					))}

					{isGenerating && (
						<ChatBubble variant="received">
							<ChatBubbleAvatar src="" fallback="🤖" />
							<ChatBubbleMessage isLoading />
						</ChatBubble>
					)}
				</ChatMessageList>
			</ExpandableChatBody>

			<ExpandableChatFooter>
				<form className="relative flex gap-2" ref={formRef} onSubmit={onSubmit}>
					<ChatInput
						className="min-h-12 bg-background shadow-none "
						onChange={handleInputChange}
						value={input}
						onKeyDown={onKeyDown}
					/>
					<Button type="submit" className="h-12 px-3" disabled={isLoading || isGenerating || !input}>
						<IconSend3 />
					</Button>
				</form>
			</ExpandableChatFooter>
		</ExpandableChat>
	);
}
