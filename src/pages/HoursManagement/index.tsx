import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  // MdAddCircleOutline,
  MdChevronRight,
  // MdChevronLeft,
} from 'react-icons/md';
// import { format, parseISO } from 'date-fns';
// import ca from 'date-fns/locale/en-CA';

// import api from '../../services/api';
// import { changePage } from '../../store/modules/meet/actions';
import { Container, Header, Title, Project } from './styles';

const HoursManagement: React.FC = () => {
  // const dispatch = useDispatch();
  // const [myMeets, setMyMeets] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // const page = useSelector(state => state.meet.page);
  const MyProject = ['Camelia', 'Miramar'];

  // async function loadMyProjects(pg = page) {
  //   if (totalPages && pg > totalPages) return;

  //   const response = await api.get('meetups', {
  //     params: { page: pg },
  //   });

  //   setTotalPages(Math.ceil(response.data.count / 10));

  //   setMyMeets(response.data.rows);

  //   dispatch(changePage(pg));
  // }

  // useEffect(() => {
  //   loadMyProjects();
  // }, []); // eslint-disable-line

  // function FormatDate(dateF) {
  //   const newDate = parseISO(dateF);
  //   return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  // }

  // const handlePrevClick = (): number => {
  //   const newPage = page - 1;
  //   if (newPage < 1) {
  //     return 0;
  //   }
  //   return 0;
  //   loadMyProjects(newPage);
  // };

  // const handleNextClick = (): number => {
  //   const newPage = page + 1;
  //   loadMyProjects(newPage);
  //   return 0;
  // };

  return (
    <Container>
      <Header>
        <Title>My Projects</Title>
        {/* <Link to="newmeet">
          <NewButton>
            <MdAddCircleOutline size={25} />
            <span>New Project</span>
          </NewButton>
        </Link> */}
      </Header>
      <ul>
        {MyProject.map(item => (
          // <Link to={`/mymeets/${item.id}`}>
          <Link to="project/1">
            <Project>
              <span>{item}</span>
              <div>
                {/* <span>{FormatDate(item.date)}</span> */}
                <MdChevronRight size={30} color="#FFF" />
              </div>
            </Project>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default HoursManagement;
