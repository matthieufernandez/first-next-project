import React from "react";
import { useRouter } from "next/router";

export default function Card() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Your card is {id}</h1>;
}
