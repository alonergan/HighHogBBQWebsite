import { Card, Col, Row } from 'antd'

const events = [
  {
    title: 'SmokeSlam 2024',
    date: 'May 2024',
    summary: 'Great weather, riverfront views, and a strong whole hog finish.',
    image: './assets/SmokeSlamLogo.png',
  },
  {
    title: 'SmokeSlam 2025',
    date: 'May 2025',
    summary: 'Rainy weather, good people, and even stronger whole hog finish',
    image: './assets/SmokeSlamLogo.png',
  },
  {
    title: 'Whole Hog Cook at The Farm At Okefenokee',
    date: 'April 2026',
    summary: 'Farm to table dinner event. Prepared a variety of dishes utilizing Meishan pork',
    image: './assets/TheFarmLogo.png',
  },
]

export default function EventsPage() {
  return (
    <div className="page-wrap">
      <h1>Events</h1>
      <p className="intro-copy">A look back at where High Hog BBQ has competed.</p>
      <Row gutter={[16, 16]}>
        {events.map((event) => (
          <Col xs={24} lg={8} key={event.title}>
            <Card
              className="event-card"
              cover={<img src={event.image} alt={`${event.title} placeholder`} className="event-image" />}
            >
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.summary}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
