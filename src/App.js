import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from './Components/Timeline';
import { Container } from 'reactstrap';

const timelineData = [
  {
      heading: 'Ideabox',
      subheading: 'Junior Software Developer',
      text: 'I have worked here for a short period of time in which I created admin Dashboard for the existing project using ASP.NET(MVC), Bootstrap, and SQL Server for Database.',
      date: 'July 02, 2018',
      duration: 'July 02, 2018 till August 01, 2019',
      category: {
          tag: 'asp.net mvc, sql server',
          color: '#253C78'
      },
      link: {
          url:
              'https://www.ideabox.com.pk/',
          text: 'Company site'
      }
  },
  {
      heading: 'Integrated Dealership Systems',
      subheading: 'Software Developer',
      text: 'A product based Company which works in Dealership Industry. My Current Role in this job is to resolve bugs. The Product(ERP) that I work on is based on multiple technologies including .NET, Universe, PICK Basic, .NET Core API, React, React Native.',
      date: 'August 02, 2018',
      duration: 'August 02, 2018 till today',
      category: {
          tag: '.net, universe, react, PICK BASIC',
          color: '#3454D1'
      },
      link: {
          url:
              'https://www.ids-astra.com',
          text: 'Company site'
      }
  },
  {
      heading: 'Encore',
      subheading: 'Web Developer (Part Time)',
      text: 'The Company works in the payment industry from backend to frontend integration of Payment Systems. I\'m Working as a Web Developer, developing different Single Page Applications using HTML, ASP.Net, JQuery, Bootstrap and More.',
      date: 'April 15 2019',
      duration: 'April 15, 2019 till today',
      category: {
          tag: 'HTML, css, javascript, jquery',
          color: '#34D1BF'
      },
      link: {
          url:
              'http://encore-pay.com/',
          text: 'Company site'
      }
  }
];

function App() {
  return (
    <Container className='bg-light' >
    <center><h3>React Timeline Component</h3></center>
    <Timeline timelineData={timelineData}></Timeline>
    </Container>
  );
}

export default App;
