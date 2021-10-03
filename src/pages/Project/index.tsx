import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import {
  format,
  getWeek,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
} from 'date-fns';

import {
  Container,
  TopSection,
  BottomSection,
  EmployeeList,
  ListHeader,
  Employee,
  ButtonProj,
} from './styles';
import Input from '../../components/Input';

const Project: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const ListOfEmployee = [
    'Mike Z.',
    'Jordan Smith',
    'Steve Radu',
    'Paulo Wayner',
    'Renan Jorio',
  ];

  const handlePrevDay = (): void => {
    setSelectedDate(subWeeks(selectedDate, 1));
  };

  const handleNextDay = (): void => {
    setSelectedDate(addWeeks(selectedDate, 1));
  };

  const handleFillAll = (): void => {
    // eslint-disable-next-line no-alert
    alert('teste');
  };

  const WeekDate = `Week ${getWeek(selectedDate)} (${String(
    `${format(startOfWeek(selectedDate), 'MMM-dd')} to ${String(
      format(endOfWeek(selectedDate), 'MMM-dd'),
    )})`,
  )}`;

  return (
    <Container>
      <TopSection>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{WeekDate}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </TopSection>
      <BottomSection>
        <EmployeeList>
          <ListHeader>
            <div>Name</div>
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </ListHeader>
          {ListOfEmployee.map(item => (
            <Employee>
              <Form
                onSubmit={() => {
                  return 1;
                }}
              >
                <div>{item}</div>
                <Input name="Sunday" type="number" />
                <Input name="Monday" type="number" />
                <Input name="Tuesday" type="number" />
                <Input name="Wednesday" type="number" />
                <Input name="Thursday" type="number" />
                <Input name="Friday" type="number" />
                <Input name="Saturday" type="number" />
              </Form>
            </Employee>
          ))}
        </EmployeeList>
        <ButtonProj>
          <Link to="/hoursmanagement">
            <button type="button">Cancel</button>
          </Link>
          <a href="www.google.com">
            <button type="button" onClick={handleFillAll}>
              Fill All
            </button>
          </a>
          <Link to="/hoursmanagement">
            <button type="button">Save</button>
          </Link>
          <Link to="/hoursmanagement">
            <button type="button">Submit</button>
          </Link>
        </ButtonProj>
      </BottomSection>
    </Container>
  );
};

export default Project;
