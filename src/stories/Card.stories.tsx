import Card from "@/components/Card";
import type { StoryDefault, Story } from "@ladle/react";

type IType = "vertical" | "horizontal";

interface Props {
  image: string;
  type: IType;
  title: string;
  description: string;
}

export default {
  title: "Components",
  args: {
    image: "https://picsum.photos/500",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis inventore beatae totam rerum, quae quia facilis exercitationem accusantium, voluptate quaerat! Rem atque similique autem ratione impedit fuga cumque tempora!",
  },
  argTypes: {
    type: {
      defaultValue: "vertical",
      options: ["vertical", "horizontal"],
      label: "Card type",
      control: {
        type: "inline-radio",
        
      },
    },
  },
} satisfies StoryDefault<Props>;

export const CardStories: Story<Props> = ({
  image,
  type,
  title,
  description,
}) => {
  return (
    <Card imgSrc={image} type={type} title={title} description={description} />
  );
};

CardStories.storyName = "Card";
