import { Card } from 'antd'

export default function ContactPage() {
  return (
    <div className="page-wrap contact-page">
      <h1>Contact Us</h1>
      <p className="intro-copy">Reach out for event bookings, sponsorships, or competition questions.</p>
      <Card className="contact-card">
        <p><strong>Team:</strong> High Hog BBQ</p>
        <p><strong>Email:</strong> contact@highhogbbq.com</p>
        <p><strong>Phone:</strong> (555) 867-5309</p>
        <p><strong>Instagram:</strong> @highhogbbq</p>
      </Card>
    </div>
  )
}
