import { Card, Col, Row } from 'antd'

const events = [
  {
    title: 'Smoke in the Valley 2025',
    date: 'April 2025',
    summary: 'Great weather, tough table, and a strong whole hog finish.',
    image: 'https://placehold.co/600x360?text=Event+Photo+1',
  },
  {
    title: 'Pitmasters Cup 2024',
    date: 'September 2024',
    summary: 'Packed crowd and one of our favorite rib cooks of the season.',
    image: 'https://placehold.co/600x360?text=Event+Photo+2',
  },
  {
    title: 'County Fair Cook-Off 2024',
    date: 'May 2024',
    summary: 'Family-focused event with strong shoulder scores and fan feedback.',
    image: 'https://placehold.co/600x360?text=Event+Photo+3',
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
