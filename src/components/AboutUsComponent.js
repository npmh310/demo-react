// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardText,
//   CardTitle,
//   Row,
//   Col,
//   Button,
// } from "reactstrap";
// import { TEAM } from "../shared/team";

// function About() {
//   return (
//     <div className="team">
//       <h2 className="center"> Team Member</h2>
//       <div className="container">
//         <div className="col-md-12 align-center">
//           {TEAM.map(
//             (item, index) =>
//               index % 4 === 0 && (
//                 <Row key={index}>
//                   {TEAM.slice(index, index + 4).map((innerItem, innerIndex) => (
//                     <Col md="3" key={innerIndex}>
//                       <Card>
//                         <CardImg
//                           top
//                           width="100%"
//                           height="100%"
//                           src={`../assets/img/Team/${innerItem.accountID}.png`}
//                           alt={innerItem.cusName}
//                         />
//                         <CardBody className="text-center">
//                           <CardTitle>{innerItem.cusName}</CardTitle>
//                           <CardText>{innerItem.cusDOB}</CardText>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default About;