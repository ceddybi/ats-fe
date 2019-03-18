import * as React from "react";
import { Col, Row } from "antd";
import { NextFunctionComponent } from "next";

const DataTable: NextFunctionComponent = () => {
  return (
    <Row>
      <Col span={24}>
        Hello world
      </Col>
    </Row>
  );
};

// DataTable.getInitialProps = () => {
//   return {
//     namespacesRequired: "",
//   };
// };

export default DataTable;
