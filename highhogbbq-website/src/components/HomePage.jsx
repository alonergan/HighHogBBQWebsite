import { Card, Col, Row } from 'antd'

const highlights = [
  {
    title: 'Who We Are',
    description:
      'High Hog BBQ is a competition BBQ team founded by a group of childhood friends based out of Memphis, TN focusing on Whole Hog, Shoulder, and Ribs',
  },
  {
    title: 'What We Do',
    description:
      'We practice year round for annual BBQ competitions and offer catering or in person cooks for events',
  },
  {
    title: 'Our Style',
    description:
      'Our pitmasters blend classic Memphis BBQ methods with modern techniques for repeatable championship results.',
  },
]

export default function HomePage() {
  return (
    <div className="page-wrap">
      <section className="hero-panel">
        <div>
          <h1>Welcome to High Hog BBQ</h1>
          <p className="intro-copy">
            We are a dedicated crew of pitmasters and weekend warriors chasing classic Memphis style flavor using innovative techniques to secure top finishes at every competition.
          </p>
        </div>
        <img src="./assets/TeamPhoto_2025.png" alt="Team placeholder" />
      </section>

      <Row gutter={[16, 16]}>
        {highlights.map((item) => (
          <Col xs={24} md={8} key={item.title}>
            <Card className="info-card" title={item.title}>
              <p>{item.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
