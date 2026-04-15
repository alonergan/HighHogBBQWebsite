import { Card, Col, Row } from 'antd'

const highlights = [
  {
    title: 'Who We Are',
    description:
      'High Hog BBQ is a competition BBQ team focused on whole hog, ribs, and shoulder categories across regional events.',
  },
  {
    title: 'What We Do',
    description:
      'We practice year-round, test flavor profiles, and compete to perfect our turn-in boxes while representing our community.',
  },
  {
    title: 'Our Style',
    description:
      'Our cooks blend classic smokehouse methods with modern prep and consistency tracking for repeatable championship results.',
  },
]

export default function HomePage() {
  return (
    <div className="page-wrap">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Competition BBQ Team</p>
          <h1>Welcome to High Hog BBQ</h1>
          <p className="intro-copy">
            We are a dedicated crew of pitmasters, prep specialists, and weekend warriors chasing clean smoke,
            balanced flavor, and top finishes at every competition.
          </p>
        </div>
        <img src="https://placehold.co/640x360?text=Team+Photo+Placeholder" alt="Team placeholder" />
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
