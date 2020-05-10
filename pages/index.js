import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";

const ViewerQuery = gql`
  query Test {
    findCustomerByID(id: "265131638343598594") {
      firstName
      lastName
    }
  }
`;

const Index = () => {
  const { data, loading } = useQuery(ViewerQuery);

  if (data && data.findCustomerByID) {
    return (
      <div>
        <p>{data.findCustomerByID.firstName}</p>
        <p>{data.findCustomerByID.lastName}</p>
      </div>
    );
  }

  return null;
};

export default withApollo(Index);
