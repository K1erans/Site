import Markdown from "react-markdown";

export default function MarkdownContent({ content }: { content: string }) {
  return <Markdown>{content}</Markdown>;
}
