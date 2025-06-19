import './home.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import bank from '../src/images/bank.jpg';

export default function Home() {
  return (
    <main className="home-container">
      <section className="text-center py-4">
        <h2 className="center-heading">BAD BANK</h2>

      </section>

      <section className="marquee-container">
        <div className="marquee">
          <h4>
            Welcome to BAD BANK - Deposit, Withdraw, Borrow effortlessly, Repay flexibly... 
            Get up to ₹7 lakhs and repay flexibly across 12 months. No interest charged if paid within three months!
          </h4>
        </div>
      </section>

      <section className="d-flex justify-content-center py-4">
        <Card style={{ width: '50%' }}>
          <Card.Img variant="top" src={bank} height={500} width={500} alt='Exterior view of a bank building' />
          <Card.Body>
            <Card.Title className="text-center">BAD BANK</Card.Title>

           
            <Card.Text>
              “Every day is a bank account, and time is our currency. No one is rich, no one is poor—we’ve all got 24 hours each.”
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <div className="spacer" />
    </main>
  );
}
