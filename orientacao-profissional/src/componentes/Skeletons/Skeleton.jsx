import { Skeleton, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth={false}>
      <Stack spacing={1} width="250px">
        {/* <Skeleton variant="rounded" width="100%"/> */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
        {/* <Skeleton variant="rounded" width={210} height={60} /> */}
      </Stack>
    </Container>
  );
};