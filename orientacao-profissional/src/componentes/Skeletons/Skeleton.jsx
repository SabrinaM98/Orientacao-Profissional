import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth={false}>
      <Skeleton variant="rounded" width="100%"/>
    </Container>
  );
};