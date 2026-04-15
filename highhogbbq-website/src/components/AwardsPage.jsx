import { Card, Space, Tag } from 'antd'

const awards = [
  { year: 2025, result: 'Grand Champion', event: 'Mid-State Smoke Showdown' },
  { year: 2024, result: '4th Place Whole Hog', event: 'Riverfront BBQ Classic' },
  { year: 2024, result: '2nd Place Pork Shoulder', event: 'Carolina Fire Fest' },
  { year: 2023, result: '1st Place Ribs', event: 'Backyard to Big League Invitational' },
  { year: 2023, result: 'Top 10 Overall', event: 'Southern Smoke Cup' },
]

export default function AwardsPage() {
  return (
    <div className="page-wrap">
      <h1>Awards</h1>
      <p className="intro-copy">Highlights from recent seasons and milestone cooks.</p>
      <Space direction="vertical" size={14} className="full-width">
        {awards.map((award) => (
          <Card key={`${award.year}-${award.result}`} className="award-row-card">
            <div className="award-row">
              <Tag color="red">{award.year}</Tag>
              <h3>{award.result}</h3>
              <span>{award.event}</span>
            </div>
          </Card>
        ))}
      </Space>
    </div>
  )
}
