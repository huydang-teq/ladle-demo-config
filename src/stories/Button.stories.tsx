import Button from "@/components/Button";
import { Story, StoryDefault } from "@ladle/react";
import { useState } from "react";

type IButtonSize = "sm" | "md" | "lg";
type IButtonType = "primary" | "outline" | "disabled";

interface Props {
  size: any;
  type: IButtonType;
  label: string;
}

export default {
  title: "Components",
  args: {
    label: "Increase",
  },
  argTypes: {
    size: {
      defaultValue: "md",
      options: ["sm", "md","lg"],
      label: "Button size",
      control: {
        type: "select",
        labels: {
          sm: "small",
          md: "medium",
          lg: "large",
        },
      },
    },
    type: {
      defaultValue: "primary",
      options: ["primary", "outline", "disabled"],
      label: "Button type",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<Props>;

export const ButtonStory: Story<Props> = ({ size, type, label }) => {
  const [count, setCount] = useState(0);
  console.log("size: ", size);
  const handleClick = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <div className="flex flex-col items-center">
      <Button type={type} size={size} onClick={handleClick}>
        {label}
      </Button>
      <h4 className="mt-10 text-[10rem] font-bold text-cyan-500">{count}</h4>
    </div>
  );
};

ButtonStory.storyName = "Button";
