import React, { useEffect } from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have acce to bank credit and are satisfied with the current product.",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are not satisfied with the current service.",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661628612319-621bb8c07763?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661765955533-596918f986f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Underchecked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
