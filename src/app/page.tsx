import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 gap-4">
       <section>
        <h1 className="text-lg font-bold">Primary Button</h1>
        <Button type="primary" size="sm">
          Primary
        </Button>
      </section>

      <section>
        <h1 className="text-lg font-bold">Outline Button</h1>
        <Button type="outline" size="lg">
          Secondary
        </Button>
      </section>

      <section>
        <h1 className="text-lg font-bold">Disabled Button</h1>
        <Button type="disabled" size="md">
          Disabled
        </Button>
      </section>

      <section className="flex gap-10">
        <div className="shrink-0 items-center justify-center">
          <h1 className="text-lg font-bold my-5">Card Vertical</h1>
            <Card
              imgSrc="https://picsum.photos/500"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis inventore beatae totam rerum, quae quia facilis exercitationem accusantium, voluptate quaerat! Rem atque similique autem ratione impedit fuga cumque tempora!"
              type="vertical"
              title="Title"
            />
        </div>

        <div>
          <h1 className="text-lg font-bold my-5">Card Horizontal</h1>
            <Card
              imgSrc="https://picsum.photos/500"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis inventore beatae totam rerum, quae quia facilis exercitationem accusantium, voluptate quaerat! Rem atque similique autem ratione impedit fuga cumque tempora!"
              type="horizontal"
              title="Title"
            />
        </div>
      </section>
    </main>
  )
}
