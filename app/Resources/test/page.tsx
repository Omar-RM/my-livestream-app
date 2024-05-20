"use client";
const TestPage = () => {
  const onClick = () => {
    console.log("Something");
  };
  return <div onClick={onClick}>TestPage</div>;
};

export default TestPage;
