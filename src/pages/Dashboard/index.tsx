import React from 'react';
import { Link } from 'react-router-dom';

import { FiTool, FiClock } from 'react-icons/fi';
import { Container, Card, CardsContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <CardsContainer>
        <Link to="/hoursmanagement">
          <Card>
            <FiClock size={60} />
            <span>Hours Management</span>
          </Card>
        </Link>
        <Link to="/searchmeets" style={{ pointerEvents: 'none', opacity: 0.5 }}>
          <Card>
            <FiTool size={60} />
            <span>Future Feature</span>
          </Card>
        </Link>
        <Link to="/searchmeets" style={{ pointerEvents: 'none', opacity: 0.5 }}>
          <Card>
            <FiTool size={60} />
            <span>Future Feature</span>
          </Card>
        </Link>
        <Link to="/searchmeets" style={{ pointerEvents: 'none', opacity: 0.5 }}>
          <Card>
            <FiTool size={60} />
            <span>Future Feature</span>
          </Card>
        </Link>
      </CardsContainer>
    </Container>
  );
};

export default Dashboard;
