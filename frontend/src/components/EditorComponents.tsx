import React, { useState } from "react"
import { Editor, BaseElement } from 'slate';
import { createEditor, Descendant, BaseEditor, Transforms, Element as SlateElement } from "slate";
import { Slate, Editable, withReact, ReactEditor, useSlate, RenderLeafProps, RenderElementProps } from "slate-react";
import Button from "./ui/button";
import Toolbar from "./ui/Toolbar";

// Define Slate Editor types
type CustomEditor = BaseEditor & ReactEditor;
declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: { type: string; children: Descendant[] };
    Text: { text: string; bold?: boolean; italic?: boolean; underline?: boolean };
  }
}
interface CustomElement extends BaseElement {
  type: "paragraph" | "code" | "link";
  url?: string; // Only for links
}


// Initial content
const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "Welcome to the Slate.js Rich Text Editor!" }],
  },
];

const EditorComponent: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState<Descendant[]>(initialValue);

  return (
    <Slate editor={editor} initialValue={value} onChange={setValue}>
      <Toolbar>
        <MarkButton format="bold">B</MarkButton>
        <MarkButton format="italic">I</MarkButton>
        <MarkButton format="underline">U</MarkButton>
        <BlockButton format="code">Code</BlockButton>
      </Toolbar>
      <Editable
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        placeholder="Type something..."
        onKeyDown={(event) => handleKeyDown(event, editor)}
      />
    </Slate>
  );
};

// Formatting Buttons
const MarkButton: React.FC<{ format: string; children: React.ReactNode }> = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Button active={isMarkActive(editor, format)} onMouseDown={(event) => toggleMark(event, editor, format)}>
      {children}
    </Button>
  );
};

const BlockButton: React.FC<{ format: string; children: React.ReactNode }> = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Button active={isBlockActive(editor, format)} onMouseDown={(event) => toggleBlock(event, editor, format)}>
      {children}
    </Button>
  );
};

// Helpers
const isMarkActive = (editor: ReactEditor, format: string) => {
  const marks: Record<string, boolean> = editor.marks || {};
  return marks[format] === true;
};

const toggleMark = (event: React.MouseEvent, editor: ReactEditor, format: string) => {
  event.preventDefault();
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    editor.removeMark(format);
  } else {
    editor.addMark(format, true);
  }
};

const isBlockActive = (editor: ReactEditor, format: string) => {
  const [match] = Array.from(editor.nodes({ match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format }));
  return !!match;
};

const toggleBlock = (event: React.MouseEvent, editor: ReactEditor, format: string) => {
  event.preventDefault();
  const isActive = isBlockActive(editor, format);
  Transforms.setNodes(editor, { type: isActive ? "paragraph" : format });
};

const handleKeyDown = (event: React.KeyboardEvent, editor: ReactEditor) => {
  if (event.ctrlKey) {
  switch (event.key) {
      case "b":
        event.preventDefault();
        toggleMark(event as unknown as React.MouseEvent, editor, "bold");
        break;
      case "i":
        event.preventDefault();
        toggleMark(event as unknown as React.MouseEvent, editor, "italic");
        break;
      case "u":
        event.preventDefault();
        toggleMark(event as unknown as React.MouseEvent, editor, "underline");
        break;
      case "`":
        event.preventDefault();
        toggleBlock(event as unknown as React.MouseEvent, editor, "code");
        break;
    }
  }
};

// Custom Renderers

const renderElement = (props: RenderElementProps) => {
  const { attributes, children, element } = props;

  // Type assertion to CustomElement inside the function
  const customElement = element as CustomElement;

  switch (customElement.type) {
    case "code":
      return <pre {...attributes}>{children}</pre>;
    case "link":
      return (
        <a
          {...attributes}
          href={customElement.url || "#"} // Ensure a valid URL
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};


const renderLeaf = (props: RenderLeafProps) => {
  const { attributes, leaf } = props;
  let {children} = props;
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

export default EditorComponent;
