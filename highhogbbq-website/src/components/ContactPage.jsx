import { Card } from 'antd'

export default function ContactPage() {
  return (
    <div className="page-wrap contact-page">
      <h1>Contact Us</h1>
      <p className="intro-copy">Reach out for event bookings, sponsorships, or competition questions.</p>
      <Card className="contact-card">
        <p><strong>Team:</strong> High Hog BBQ</p>
        <p><strong>Email:</strong> highhogbarbecue@gmail.com</p>
        <p><strong>Phone:</strong> (901) 832-4326</p>
        <p><strong>Instagram:</strong> @highhogbarbecue</p>
      </Card>
    </div>
  )
}
