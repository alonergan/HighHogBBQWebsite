import { Card, Space, Tag } from 'antd'

const awards = [
    { year: 2025, result: '4th Place Whole Hog', event: 'SmokeSlam' },
    { year: 2024, result: '5th Place Whole Hog', event: 'SmokeSlam' },
    { year: 2025, result: '3rd Place Dessert', event: 'SmokeSlam' },
    { year: 2025, result: '3rd Place T-Shirt', event: 'SmokeSlam' },
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
