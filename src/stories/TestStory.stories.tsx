import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "component"
} satisfies StoryDefault;

export const TestStory: Story = () => {
  return <h1> Test Stories</h1>;
};

TestStory.storyName = "Test";
